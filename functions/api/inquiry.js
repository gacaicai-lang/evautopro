// CF Pages Function: 询盘表单 serverless endpoint
// POST /api/inquiry
// 部署后：表单 submit → 触发飞书 webhook + 写飞书 base + 邮件给彩老板

// The notification email's envelope (from/to) never reflects who actually
// submitted the form — it's always onboarding@resend.dev -> gacaicai@gmail.com.
// The only place the visitor's real address shows up is the plain-text
// `email` field they typed, which could be a typo or fake. An MX lookup on
// that domain is a cheap, real signal: no MX record means mail to that
// address will bounce no matter what, so it's worth flagging inline.
// Every value below comes straight from an anonymous public form submission.
// It gets interpolated into an HTML email body, so it must be escaped —
// otherwise a submitter can inject markup (e.g. a fake "click here to
// verify" link) into the notification Philip reads in his inbox.
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// Same reasoning as escapeHtml(), for the Feishu card's lark_md (markdown-lite)
// renderer instead of HTML — it natively interprets **bold**, [text](url)
// hyperlinks and <at id=all></at> mass-mentions, so an unescaped visitor
// field could inject a phishing link or an @everyone ping into the internal
// notification channel.
function escapeLarkMd(str) {
  return String(str ?? '').replace(/[\\*_~`<>[\]]/g, (c) => '\\' + c);
}

// 5s timeout on every outbound call — none of these are essential to the
// visitor's own response, but an unbounded fetch() to a slow dependency
// would otherwise stall the whole Function on every single submission.
const TIMEOUT_MS = 5000;

async function checkEmailDomain(email) {
  const domain = String(email || '').split('@')[1];
  if (!domain) return { checked: false, valid: false, domain: null };
  try {
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`, {
      headers: { accept: 'application/dns-json' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    const json = await resp.json();
    const valid = Array.isArray(json.Answer) && json.Answer.length > 0;
    return { checked: true, valid, domain };
  } catch (e) {
    return { checked: false, valid: false, domain };
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      data = await request.json();
    } else {
      const fd = await request.formData();
      data = Object.fromEntries(fd.entries());
    }
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400, headers: { 'content-type': 'application/json' },
    });
  }

  // Basic spam filter
  if (data.honeypot) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }
  // Forms send a country-qualified `whatsapp` field, a dedicated `email`
  // field, and/or a legacy combined `contact` field. Accept the lead if any
  // one reachable channel is present.
  const hasEmail = data.email && data.email.includes('@');
  const hasWhatsapp = data.whatsapp && String(data.whatsapp).replace(/[^\d]/g, '').length >= 6;
  const hasContact = data.contact && String(data.contact).trim().length >= 5;
  if (!hasEmail && !hasWhatsapp && !hasContact) {
    return new Response(JSON.stringify({ error: 'Valid email or WhatsApp contact required' }), {
      status: 400, headers: { 'content-type': 'application/json' },
    });
  }

  const emailCheck = hasEmail ? await checkEmailDomain(data.email) : { checked: false, valid: false, domain: null };
  const emailLooksFake = hasEmail && emailCheck.checked && !emailCheck.valid;

  // Enrich with meta
  const enriched = {
    ...data,
    ts: new Date().toISOString(),
    ip: request.headers.get('cf-connecting-ip') || 'unknown',
    country: request.headers.get('cf-ipcountry') || 'unknown',
    ua: request.headers.get('user-agent') || 'unknown',
    referer: request.headers.get('referer') || '',
    email_domain_has_mx: emailCheck.checked ? emailCheck.valid : null,
  };

  // Four independent notification/storage channels. None of their outcomes
  // depend on each other, so they run concurrently via Promise.allSettled
  // instead of sequential awaits — one slow/hung dependency no longer stalls
  // every other channel or the visitor's own response.
  const channels = [];

  // ---- 0. KV backup (INQUIRIES binding) — every lead is stored even when
  //         no notification channel is configured yet ----
  if (env.INQUIRIES) {
    channels.push((async () => {
      const key = `inquiry:${enriched.ts}:${crypto.randomUUID().slice(0, 8)}`;
      await env.INQUIRIES.put(key, JSON.stringify(enriched));
    })().catch((e) => console.error('KV backup failed:', e)));
  }

  // ---- 1. 推飞书机器人（cc-notify 等价） ----
  if (env.FEISHU_WEBHOOK) {
    channels.push(fetch(env.FEISHU_WEBHOOK, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      body: JSON.stringify({
        msg_type: 'interactive',
        card: {
          header: { template: 'red', title: { tag: 'plain_text', content: '🚗 新询盘 evautopro.com' } },
          elements: [
            { tag: 'div', text: { tag: 'lark_md', content:
              `**${escapeLarkMd(data.name) || '匿名'}** · ${escapeLarkMd(data.company) || '-'} · ${escapeLarkMd(enriched.country)}\n` +
              `**Email**: ${escapeLarkMd(data.email)}\n` +
              `**WhatsApp**: ${escapeLarkMd(data.whatsapp) || '-'}\n` +
              `**Model**: ${escapeLarkMd(data.model_interested) || '-'}\n` +
              `**Qty**: ${escapeLarkMd(data.quantity) || '-'}\n` +
              `**Market**: ${escapeLarkMd(data.target_market) || '-'}\n\n` +
              `**Message**:\n${escapeLarkMd(data.message) || '-'}` } },
          ],
        },
      }),
    }).catch((e) => console.error('Feishu notify failed:', e)));
  }

  // ---- 2. 写飞书 Base 询盘表（可选） ----
  if (env.FEISHU_BASE_TOKEN && env.FEISHU_TABLE_ID) {
    channels.push((async () => {
      const tokenResp = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        body: JSON.stringify({
          app_id: env.FEISHU_APP_ID,
          app_secret: env.FEISHU_APP_SECRET,
        }),
      });
      const { tenant_access_token } = await tokenResp.json();

      await fetch(`https://open.feishu.cn/open-apis/bitable/v1/apps/${env.FEISHU_BASE_TOKEN}/tables/${env.FEISHU_TABLE_ID}/records`, {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${tenant_access_token}`,
          'content-type': 'application/json',
        },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        body: JSON.stringify({
          fields: {
            '姓名': data.name || '',
            '公司': data.company || '',
            '邮箱': data.email,
            'WhatsApp': data.whatsapp || '',
            '国家': enriched.country,
            '关注车型': data.model_interested || '',
            '数量': Number(data.quantity) || 0,
            '目标市场': data.target_market || '',
            '留言': data.message || '',
            '时间': Date.now(),
            'IP': enriched.ip,
            '来源页': enriched.referer,
          },
        }),
      });
    })().catch((e) => console.error('Feishu base write failed:', e)));
  }

  // ---- 3. 邮件通知（用 Resend，可选） ----
  if (env.RESEND_API_KEY) {
    channels.push((async () => {
      const resendResp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${env.RESEND_API_KEY}`,
          'content-type': 'application/json',
        },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        body: JSON.stringify({
          from: 'EV Auto Pro <onboarding@resend.dev>',
          to: ['gacaicai@gmail.com'],
          ...(hasEmail ? { reply_to: data.email } : {}),
          subject: `${emailLooksFake ? '⚠️ [邮箱可能无效] ' : ''}🚗 新询盘 · ${data.name || ''} from ${enriched.country}`,
          html:
            (emailLooksFake
              ? `<p style="color:#b91c1c;font-weight:bold;">⚠️ ${escapeHtml(data.email)} 的域名 "${escapeHtml(emailCheck.domain)}" 查不到MX记录，这个邮箱大概率是假的/打错的，回信前先跟WhatsApp核实一下</p>`
              : '') +
            Object.entries(data).map(([k, v]) => `<p><b>${escapeHtml(k)}</b>: ${escapeHtml(v)}</p>`).join('') +
            `<hr/><p style="color:#6b7280;font-size:12px;">来源页: ${escapeHtml(enriched.referer) || '(direct / no referrer)'}<br/>` +
            `国家(IP定位): ${escapeHtml(enriched.country)}<br/>IP: ${escapeHtml(enriched.ip)}<br/>时间: ${escapeHtml(enriched.ts)}</p>`,
        }),
      });
      if (!resendResp.ok) {
        console.error('Resend rejected the email:', resendResp.status, await resendResp.text());
      }
    })().catch((e) => console.error('Email failed:', e)));
  }

  await Promise.allSettled(channels);

  return new Response(JSON.stringify({ ok: true, message: 'Thank you! Our team will reply within 24 hours.' }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': 'https://evautopro.com' },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'access-control-allow-origin': 'https://evautopro.com',
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
    },
  });
}

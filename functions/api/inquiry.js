// CF Pages Function: 询盘表单 serverless endpoint
// POST /api/inquiry
// 部署后：表单 submit → 触发飞书 webhook + 写飞书 base + 邮件给彩老板

// The notification email's envelope (from/to) never reflects who actually
// submitted the form — it's always onboarding@resend.dev -> gacaicai@gmail.com.
// The only place the visitor's real address shows up is the plain-text
// `email` field they typed, which could be a typo or fake. An MX lookup on
// that domain is a cheap, real signal: no MX record means mail to that
// address will bounce no matter what, so it's worth flagging inline.
async function checkEmailDomain(email) {
  const domain = String(email || '').split('@')[1];
  if (!domain) return { checked: false, valid: false, domain: null };
  try {
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`, {
      headers: { accept: 'application/dns-json' },
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

  // ---- 0. KV backup (INQUIRIES binding) — every lead is stored even when
  //         no notification channel is configured yet ----
  if (env.INQUIRIES) {
    try {
      const key = `inquiry:${enriched.ts}:${crypto.randomUUID().slice(0, 8)}`;
      await env.INQUIRIES.put(key, JSON.stringify(enriched));
    } catch (e) {
      console.error('KV backup failed:', e);
    }
  }

  // ---- 1. 推飞书机器人（cc-notify 等价） ----
  if (env.FEISHU_WEBHOOK) {
    try {
      await fetch(env.FEISHU_WEBHOOK, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          msg_type: 'interactive',
          card: {
            header: { template: 'red', title: { tag: 'plain_text', content: '🚗 新询盘 evautopro.com' } },
            elements: [
              { tag: 'div', text: { tag: 'lark_md', content:
                `**${data.name || '匿名'}** · ${data.company || '-'} · ${enriched.country}\n` +
                `**Email**: ${data.email}\n` +
                `**WhatsApp**: ${data.whatsapp || '-'}\n` +
                `**Model**: ${data.model_interested || '-'}\n` +
                `**Qty**: ${data.quantity || '-'}\n` +
                `**Market**: ${data.target_market || '-'}\n\n` +
                `**Message**:\n${data.message || '-'}` } },
            ],
          },
        }),
      });
    } catch (e) {
      // log but don't fail user
      console.error('Feishu notify failed:', e);
    }
  }

  // ---- 2. 写飞书 Base 询盘表（可选） ----
  if (env.FEISHU_BASE_TOKEN && env.FEISHU_TABLE_ID) {
    try {
      // Get tenant access token
      const tokenResp = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
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
    } catch (e) {
      console.error('Feishu base write failed:', e);
    }
  }

  // ---- 3. 邮件通知（用 Resend，可选） ----
  if (env.RESEND_API_KEY) {
    try {
      const resendResp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${env.RESEND_API_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          from: 'EV Auto Pro <onboarding@resend.dev>',
          to: ['gacaicai@gmail.com'],
          ...(hasEmail ? { reply_to: data.email } : {}),
          subject: `${emailLooksFake ? '⚠️ [邮箱可能无效] ' : ''}🚗 新询盘 · ${data.name || ''} from ${enriched.country}`,
          html:
            (emailLooksFake
              ? `<p style="color:#b91c1c;font-weight:bold;">⚠️ ${data.email} 的域名 "${emailCheck.domain}" 查不到MX记录，这个邮箱大概率是假的/打错的，回信前先跟WhatsApp核实一下</p>`
              : '') +
            Object.entries(data).map(([k, v]) => `<p><b>${k}</b>: ${v}</p>`).join('') +
            `<hr/><p style="color:#6b7280;font-size:12px;">来源页: ${enriched.referer || '(direct / no referrer)'}<br/>` +
            `国家(IP定位): ${enriched.country}<br/>IP: ${enriched.ip}<br/>时间: ${enriched.ts}</p>`,
        }),
      });
      if (!resendResp.ok) {
        console.error('Resend rejected the email:', resendResp.status, await resendResp.text());
      }
    } catch (e) {
      console.error('Email failed:', e);
    }
  }

  return new Response(JSON.stringify({ ok: true, message: 'Thank you! Our team will reply within 24 hours.' }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
    },
  });
}

// Decap CMS OAuth proxy for GitHub authentication
// Deployed via Cloudflare Pages Functions OR Cloudflare Workers
// Requires env vars: OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET (from GitHub OAuth App)

interface Env {
  OAUTH_CLIENT_ID: string;
  OAUTH_CLIENT_SECRET: string;
}

export async function onRequest(context: { request: Request; env: Env }) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/oauth/, '');

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  // Step 1: Redirect to GitHub authorize URL
  if (path === '/auth' || path === '/auth/') {
    const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
    githubAuthUrl.searchParams.set('client_id', env.OAUTH_CLIENT_ID);
    githubAuthUrl.searchParams.set('scope', 'repo user');
    githubAuthUrl.searchParams.set('redirect_uri', `${url.origin}/oauth/callback`);
    return Response.redirect(githubAuthUrl.toString(), 302);
  }

  // Step 2: Receive code from GitHub, exchange for access token, return to Decap CMS
  if (path === '/callback' || path === '/callback/') {
    const code = url.searchParams.get('code');
    if (!code) {
      return new Response('Missing code parameter', { status: 400, headers: corsHeaders });
    }

    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: env.OAUTH_CLIENT_ID,
        client_secret: env.OAUTH_CLIENT_SECRET,
        code,
      }),
    });

    const data: { access_token?: string; error?: string } = await tokenRes.json();

    if (data.error || !data.access_token) {
      return new Response(`OAuth error: ${data.error || 'no token'}`, { status: 400, headers: corsHeaders });
    }

    // Decap CMS expects postMessage with token wrapper
    const message = `authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}`;
    const html = `<!DOCTYPE html>
<html>
<head><title>EV Auto Pro CMS · Auth Success</title></head>
<body style="font-family: sans-serif; padding: 40px; text-align: center;">
  <h2>✅ Authentication Successful</h2>
  <p>You can close this window. CMS is now logged in.</p>
  <script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(${JSON.stringify(message)}, e.origin);
        window.removeEventListener('message', receiveMessage, false);
      }
      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
    setTimeout(function() { window.close(); }, 500);
  </script>
</body>
</html>`;

    return new Response(html, {
      headers: { ...corsHeaders, 'Content-Type': 'text/html' },
    });
  }

  return new Response('EV Auto Pro OAuth Proxy · Decap CMS Auth\nEndpoints: /oauth/auth · /oauth/callback', {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
  });
}

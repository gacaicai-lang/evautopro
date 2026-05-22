#!/bin/bash
# EV Auto Pro · Cloudflare Pages 全自动部署
# 用法: CF_API_TOKEN=xxx ./cf-pages-deploy.sh

set -e
PROJECT="evautopro"
DOMAIN="evautopro.com"
SITE_DIR="/Users/linlin/sites/evautopro.com"

: "${CF_API_TOKEN:?需要设 CF_API_TOKEN 环境变量}"

echo "==> 1. 验证 token + 拿 Account ID"
VERIFY=$(curl -s -H "Authorization: Bearer $CF_API_TOKEN" \
  "https://api.cloudflare.com/client/v4/user/tokens/verify")
echo "$VERIFY" | python3 -c "import json,sys; d=json.load(sys.stdin); print('Token status:', d.get('result',{}).get('status'))"

ACCOUNT_ID=$(curl -s -H "Authorization: Bearer $CF_API_TOKEN" \
  "https://api.cloudflare.com/client/v4/accounts" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['result'][0]['id'])")
echo "Account ID: $ACCOUNT_ID"

echo ""
echo "==> 2. 创建 Pages 项目"
CREATE=$(curl -s -X POST -H "Authorization: Bearer $CF_API_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects" \
  -d "{
    \"name\": \"$PROJECT\",
    \"production_branch\": \"main\"
  }")
echo "$CREATE" | python3 -c "import json,sys; d=json.load(sys.stdin); r=d.get('result'); e=d.get('errors'); print('Created:' if r else 'Errors:', r.get('name') if r else e)"

echo ""
echo "==> 3. 部署 dist 到 Pages（先 build 确保最新）"
cd "$SITE_DIR"
/usr/local/bin/node node_modules/.bin/astro build 2>&1 | tail -5

# 用 wrangler 部署（如果 wrangler 在）或直接 API direct upload
if command -v wrangler >/dev/null 2>&1; then
  echo "使用 wrangler 部署"
  CLOUDFLARE_API_TOKEN="$CF_API_TOKEN" CLOUDFLARE_ACCOUNT_ID="$ACCOUNT_ID" \
    wrangler pages deploy "$SITE_DIR/dist" --project-name "$PROJECT" --branch main
elif [ -x "$SITE_DIR/node_modules/.bin/wrangler" ]; then
  echo "使用本地 wrangler"
  cd "$SITE_DIR"
  CLOUDFLARE_API_TOKEN="$CF_API_TOKEN" CLOUDFLARE_ACCOUNT_ID="$ACCOUNT_ID" \
    ./node_modules/.bin/wrangler pages deploy dist --project-name "$PROJECT" --branch main
else
  echo "wrangler 不在，用 npx 临时跑"
  cd "$SITE_DIR"
  CLOUDFLARE_API_TOKEN="$CF_API_TOKEN" CLOUDFLARE_ACCOUNT_ID="$ACCOUNT_ID" \
    npx --yes wrangler@latest pages deploy dist --project-name "$PROJECT" --branch main
fi

echo ""
echo "==> 4. 绑定自定义域名 evautopro.com"
curl -s -X POST -H "Authorization: Bearer $CF_API_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT/domains" \
  -d "{\"name\": \"$DOMAIN\"}" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print('Domain:', d.get('result',{}).get('name') or d.get('errors'))"

echo ""
echo "==> 5. 绑定 www.evautopro.com"
curl -s -X POST -H "Authorization: Bearer $CF_API_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT/domains" \
  -d "{\"name\": \"www.$DOMAIN\"}" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print('Domain:', d.get('result',{}).get('name') or d.get('errors'))"

echo ""
echo "==> 6. 拿部署后 pages.dev URL"
curl -s -H "Authorization: Bearer $CF_API_TOKEN" \
  "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); r=d['result']; print(f'pages.dev URL: {r.get(\"subdomain\")}'); print(f'Custom domains: {r.get(\"domains\")}')"

echo ""
echo "✅ 部署完成"
echo "  https://$DOMAIN  (自定义域名)"
echo "  https://$PROJECT.pages.dev  (临时 URL)"

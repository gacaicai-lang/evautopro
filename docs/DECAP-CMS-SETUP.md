# Decap CMS 后台配置指南

> 配完后访问 `https://evautopro.com/admin/` 像 WordPress 一样可视化写 blog/news/cars/markets

## 总览：5 步操作 + 5 分钟

```
1. GitHub 创建 OAuth App     (2 min)
2. Cloudflare Pages 部署     (2 min)
3. 配 OAuth 环境变量          (30s)
4. 加 CNAME / 域名映射        (30s)
5. 测登录 + 写第一篇文章      (30s)
```

---

## Step 1: GitHub 创建 OAuth App

打开 https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**

填：
```
Application name:  EV Auto Pro CMS
Homepage URL:      https://evautopro.com
Authorization callback URL:  https://evautopro.com/oauth/callback
```

点 **Register application**。

下一页显示：
- **Client ID** (公开): `Iv1.xxxxxxxxx` (复制保存)
- **Generate a new client secret** 点一下 → 显示 `ghp_xxxxxxxxx` (一次性显示,立刻复制保存)

把 Client ID 和 Client Secret 发我 → 我写入飞书账号库 + 配 worker。

---

## Step 2: Cloudflare Pages 部署 (vs GitHub Pages)

**关键改动**：从 GitHub Pages 迁移到 Cloudflare Pages，因为只有 CF Pages 支持 Functions（OAuth proxy 必需）。

### 2.1 创建 CF Pages 项目

打开 https://dash.cloudflare.com/?to=/:account/workers-and-pages

- 点 **Create application**
- 选 **Pages** tab
- 点 **Connect to Git**
- 授权 GitHub (gacaicai-lang 账号)
- 选 `evautopro` 仓库
- 点 **Begin setup**

### 2.2 Build 配置

```
Project name:                evautopro
Production branch:           main
Framework preset:            Astro
Build command:               npm install --legacy-peer-deps && npm run build
Build output directory:      dist
Root directory:              (留空)
```

### 2.3 环境变量

下面 **Environment variables** 区块加：

```
OAUTH_CLIENT_ID       = Iv1.xxxxxxxxx        (Step 1 的 Client ID)
OAUTH_CLIENT_SECRET   = ghp_xxxxxxxxx        (Step 1 的 Client Secret)
```

点 **Save and Deploy**。

3-5 分钟首次构建。

### 2.4 切 GitHub Pages → Cloudflare Pages

新部署后 CF Pages 给你一个临时 URL `evautopro-xxx.pages.dev`。

打开 Pages 项目 → **Custom domains** tab → **Set up a custom domain** → 输 `evautopro.com`。

CF 自动验证 → 自动配 DNS → SSL 自动签发。

GitHub Pages **暂时不动**（备用）。CF Pages active 后 evautopro.com 自动指向 CF。

---

## Step 3: 验证 OAuth Worker

```bash
curl https://evautopro.com/oauth/
# 应返回: EV Auto Pro OAuth Proxy · Decap CMS Auth...
```

---

## Step 4: 测登录

打开 https://evautopro.com/admin/

- 看到 Decap CMS 登录界面
- 点 **Login with GitHub**
- 弹出 GitHub OAuth 授权页 (因为你已登录 gacaicai-lang,直接点 Authorize)
- 跳回 admin/ → 你已登录 Decap CMS

---

## Step 5: 写第一篇文章

进入 Decap admin 后台后：

```
左侧菜单:
  📰 News         ← 点这里
  🚗 Cars
  🏷 Brands
  🌍 Markets
  ⭐ Case Studies
  ⚙ Settings

点 "+ New News" 大按钮
```

填表单（像 WP 后台）：
```
Title:       Your article title
Author:      Cai
Date:        (自动)
Category:    Latest News / Industry News / etc
Image:       拖拽上传图片
Body:        可视化富文本编辑器 (粗体/斜体/列表/链接)

[ Save Draft ]   [ Publish ]
```

点 **Publish** → 自动 git commit → CF Pages 自动重建 → 3-5 分钟后 https://evautopro.com/news/{slug}/ 上线。

---

## 已配置 Collections (config.yml)

```
📰 News         /src/content/news/
🚗 Cars         /src/content/cars/         (50 ACF 字段可视化)
🏷 Brands       /src/content/brands/
🌍 Markets      /src/content/markets/
⭐ Case Studies  /src/content/case-studies/
📕 Catalogue    /src/content/catalogue/
⚙ Settings     /src/content/settings/    (全站参数)
```

---

## 故障排查

**Q: 登录后 redirect 404?**
A: 检查 GitHub OAuth App callback URL 必须精确匹配 `https://evautopro.com/oauth/callback`

**Q: OAuth Worker 不工作？**
A: 检查 CF Pages 环境变量 OAUTH_CLIENT_ID + OAUTH_CLIENT_SECRET 是否配置正确。

**Q: Decap CMS 提示 backend error？**
A: 检查 public/admin/config.yml 中 backend.repo 是 `gacaicai-lang/evautopro` (不是 gacaicai-lang/evautopro.git)

**Q: 写完文章 publish 后没看到？**
A: 等 3-5 分钟 GitHub Actions / CF Pages 自动重建。Settings → Pages → 看最新 deploy 状态。

---

## 工作流总结

```
你访问 evautopro.com/admin/
  ↓
点 Login with GitHub
  ↓
GitHub OAuth → /oauth/callback → 拿到 token
  ↓
Decap CMS 后台 (像 WP 一样可视化)
  ↓
写文章 → 拖图 → 点 Publish
  ↓
自动 git commit (你 gacaicai-lang 账号身份)
  ↓
CF Pages 自动检测 git push → 重新 build → 部署
  ↓
3-5 分钟后 evautopro.com/news/{slug}/ 上线
```

**完全无需懂代码 + git + 命令行。** 完全 WP 体验。

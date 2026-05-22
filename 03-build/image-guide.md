# EV Auto Pro Image Guide

> 按 pitfalls.md 要求预留图片槽位
> 命名规则：`{section}-{purpose}.{ext}`
> 占位符：先用 SVG（白底 + 标题 + 优先级标注），真图到位后改 .jpg/.webp 同名替换

---

## 首页图片清单（17 section）

| # | 槽位 | 文件名 | 尺寸 | 优先级 | 真图来源 |
|---|------|--------|------|:---:|----------|
| 1 | Hero 主图 | `hero-port-loading.jpg` | 1600×1200 | **P0** | 港口拍车 30 视频抽帧（装船现场最震撼那一帧）|
| 2 | Top Cards 4 入口图 ×4 | `card-brands.svg` / `card-cars.svg` / `card-markets.svg` / `card-resources.svg` | 400×400 | P1 | 图标式插画 |
| 3 | 6 品牌 logo ×6 | `brand-{slug}.svg` (changan/deepal/jetour/geely/vw/byd) | 200×80 | **P0** | 官方 logo SVG |
| 4 | HOT MODELS 8 车型缩略 ×8 | `car-{brand}-{model}.jpg` | 800×500 | **P0** | 厂家产品图（4/5 角度，无背景或浅灰） |
| 5 | 5 用途分类图 ×5 | `usecase-suv.jpg` / `usecase-phev.jpg` / `usecase-pickup.jpg` / `usecase-rhd.jpg` / `usecase-budget.jpg` | 800×600 | P2 | 场景图（俄罗斯雪地 / UAE 沙漠 / 哈萨克草原） |
| 6 | 信任三标图标 ×3 | `trust-authorized.svg` / `trust-warehouse.svg` / `trust-logistics.svg` | 80×80 | P1 | 图标 |
| 7 | About 公司图 | `about-team.jpg` | 1200×800 | P1 | 团队/办公室/海外考察照 |
| 8 | OUR ADVANTAGE 6 卖点图标 ×6 | `advantage-{1-6}.svg` | 80×80 | P2 | 图标 |
| 9 | Compare 工具 mockup | `tool-compare-mockup.jpg` | 1200×800 | P3 | UI 截图（v1 真做时拍） |
| 10 | Markets 8 国旗+图 ×8 | `market-{ru,ae,kz,uz,sa,eg,br,mx}.jpg` | 600×400 | P1 | 国旗 + 港口/物流图 |
| 11 | 4 客户证言头像 ×4 | `testimonial-{1-4}.jpg` | 200×200 | P2 | 客户头像（化名/真名按授权） |
| 12 | 认证 logo 墙 ×8 | `cert-{mofcom,aeo,iso,gcc,eac,inmetro,gso,saso}.svg` | 200×100 | **P0** | 官方认证 logo |
| 13 | 3 篇博客缩略 ×3 | `blog-{slug}.jpg` | 800×500 | P2 | 博客封面 |
| 14 | Catalogue PDF 封面 | `catalogue-cover.jpg` | 400×560 | P2 | PDF 缩略图 |

**总计**：约 **60 张图**（P0 必须有真图 ~30 张，P1 重要 ~15 张，P2-P3 可后期补）

---

## 占位符生成规则

每张图先做 SVG 白底占位符：

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#f4f4f5"/>
  <rect x="20" y="20" width="100" height="32" rx="4" fill="#e53e2f"/>
  <text x="70" y="42" font-family="Inter" font-size="14" fill="white" text-anchor="middle">P0</text>
  <text x="400" y="290" font-family="Inter" font-size="24" fill="#71717a" text-anchor="middle">hero-port-loading.jpg</text>
  <text x="400" y="320" font-family="Inter" font-size="14" fill="#a1a1aa" text-anchor="middle">1600×1200 · 港口装船现场</text>
</svg>
```

真图到位后只需 `mv svg jpg` + 替换内容即可。

---

## 真图获取优先级（P0 必须有的 ~30 张）

1. **30 条港口拍车视频**抽帧 → hero + 8 个车型 + 部分 case study
2. **6 个授权品牌 logo** → 找官方 SVG
3. **8 个认证 logo** → 找官方 PDF/SVG
4. **6 张车型厂家产品图** → 找长安/深蓝/吉利等官网下载

未及时到位的用 SVG 占位 + Cloudflare Pages 自动缓存。

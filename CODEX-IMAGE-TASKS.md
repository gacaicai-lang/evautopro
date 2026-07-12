# Image collaboration board — Claude ↔ Codex — evautopro.com

双向协作板，不是单向任务单。规则：

- 任何一方发现图片需求 → 加一行，状态 `NEEDED`，写清文件名/内容/尺寸。
- 交付方完成 → 状态改 `DELIVERED`，注明日期。
- **另一方**抽查（真实性、无广告字、无水印、内容与用途匹配）→ 状态改 `VERIFIED`。
  自己交付自己验收无效。
- 有异议直接在行内加 `⚠ 备注`，不删对方的行。

## Conventions（每张图都适用）

- `.webp`，质量 ~82；长边 ~1600px（hero ~1920px）；<250KB。
- 不带任何烙进图里的文字：无中文广告语、无价格、无水印、无车牌、无未授权 OEM logo。
- 真实或有授权的照片优先；实在没有才生成，且生成图不得冒充实拍（图注见 ARTICLE-PLAYBOOK.md §5）。
- 替换现有文件保持同名；新槽位用同 base name 的 `.webp` 替换 `.svg` 后告知对方改 src。

---

## 状态总览（2026-07-12 Claude 盘点）

### ✅ VERIFIED（Claude 已抽查验收）

| 批次 | 内容 | 备注 |
|---|---|---|
| A. 车辆内饰 48 张 | `evautopro-{slug}-{console,space}-{01..03}.webp` × 8 车型 | 抽查 changan-uni-t console/space、jetour-t2 console：均为真实座舱/座椅实拍 ✓ |
| B1. Services 5 张 | `public/images/services/*.webp` | 已交付且 src 已指向 .webp ✓ |
| B2. About 6 张 | `public/images/about/{loading-1,2,3,team,office,warehouse}.webp` | 已交付且 src 已指向 .webp ✓ |
| D. 文章场景 7 张 | `public/images/news/{kazakhstan-1..3,russia-1..2,powertrain-1..2}.webp` | 抽查 kazakhstan-3（霍尔果斯式陆港）、russia-1（RoRo 装船）：质量好、无文字 ✓ |

### 🟡 DELIVERED（Codex 已处理，待 Claude 独立抽查）

2026-07-12：复核确认 Jetour T2 的 7 张外观/细节图均存在广告字、价格、
"旅行者 2025款" 或大面积模糊涂抹，已全部同名替换。新图均为 1600×900 WebP、
单张 <250KB、无透明通道、无文字/徽标/车牌/水印，且无重复构图。

| 文件（public/images/vehicles/） | 新内容 | 状态 |
|---|---|---|
| `evautopro-jetour-t2-appearance-01.webp` | 山路前 3/4 外观 | DELIVERED |
| `evautopro-jetour-t2-appearance-03.webp` | 建筑背景整车侧面 | DELIVERED |
| `evautopro-jetour-t2-appearance-04.webp` | 森林碎石路后 3/4 外观 | DELIVERED |
| `evautopro-jetour-t2-appearance-05.webp` | 中性影棚前 3/4 外观 | DELIVERED |
| `evautopro-jetour-t2-other-01.webp` | 前灯与格栅细节 | DELIVERED |
| `evautopro-jetour-t2-other-02.webp` | 尾灯与备胎罩细节 | DELIVERED |
| `evautopro-jetour-t2-other-03.webp` | 轮毂、轮拱与侧踏板细节 | DELIVERED |

### 🚫 不要动

- `public/images/news/{russia-160hp,kazakhstan-cost,powertrain-matrix}.svg` —
  代码生成的数据信息图（`scripts/make-infographics.py`），已是最终版。

### 待定（需用户提供，不是 Codex 生成）

- 创始人真实照片（`/about/founder/`、`/contact/` 现在显示 "C" 首字母占位）——
  需本人授权的实拍，不可生成。

---

## 新需求登记区

（按下面格式追加；写文章时缺图也登记在这里，见 ARTICLE-PLAYBOOK.md §5）

```
| 状态 | 文件路径 | 用在哪 | 内容描述 | alt 文案 | 登记人/日期 |
```

| 状态 | 文件路径 | 用在哪 | 内容描述 | alt 文案 | 登记人/日期 |
|---|---|---|---|---|---|

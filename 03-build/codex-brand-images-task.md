# Codex 派单：6 品牌页全部缺图 AI 批量生成

**派单方**: CC（彩老板"图片全填充"指令）
**前置**: 任务 codex-brand-pages-task.md 任务 A-F 已完成（6 品牌页 .astro 文件生成）
**工作目录**: `/Users/linlin/sites/evautopro.com`

---

## 一句话目标

用 Codex 内置 imagegen 批量生成所有品牌页 Coming Soon 位置的车型 hero + 4 类品牌场景图，全部 launder 后 wire 进各品牌页 .astro 文件，彻底消除"灰色车 SVG 占位"。

---

## 🔴 硬规则（参考 [[reference_codex_image_pipeline]]）

- ✅ 必须用 Codex 内置 `imagegen` 工具
- ❌ 禁用 MiniMax CN（画质 shit）
- ✅ 每张：`quality="high"` `size="1536x1024"` `format="png"`
- ✅ 输出到 `~/.codex/generated_images/<session>/` → cp 到 `public/images/真图/<slug>/ai_generated/` → 跑 `scripts/image_launder.py`
- ✅ 最终 webp 80-180KB / 张
- ❌ Prompt 不能含 OEM 品牌名（防 AI 模仿真车被反查 / 防 IP 风险）
- ❌ 车牌位置空白 / 无中文 / 无 logo
- ✅ 纯白棚摄背景 + 软地面反射（统一 hero 风格）

---

## 任务 1: Coming Soon 车型 hero 生成（~25 张）

按 Codex 在做 6 brand .astro 文件时填的 Coming Soon 车型清单 1:1 生成。每个车型 2 张（hero-01 front 3/4 + hero-02 side profile）。

### Changan 集团（6 车型 × 2 = 12 张）

| slug | body | color | features (prompt 用) |
|---|---|---|---|
| changan-uni-k | Flagship SUV | metallic blue | large SUV, hexagonal grille, panoramic sunroof |
| changan-uni-z | Coupé SUV | white | compact crossover, sport coupe roofline |
| changan-cs75-plus | Mid SUV | dark grey | family SUV, sharp LED headlights |
| changan-cs35-plus | Entry SUV | silver | compact urban SUV |
| changan-hunter | Pickup | dark olive | rugged pickup truck, off-road tires |
| changan-lumin | Hatchback EV | bright yellow | compact city EV, rounded shape |

### Geely 集团（4 车型 × 2 = 8 张）

| slug | body | color | features |
|---|---|---|---|
| geely-emgrand | Sedan | white | compact sedan, slim grille |
| geely-monjaro | Mid SUV | matte grey | premium mid SUV |
| geely-galaxy-e5 | BEV SUV | bright blue | NEV compact SUV, flush handles |
| geely-zeekr-x | Premium Compact EV | green | sporty EV crossover, single light bar |

### Jetour（3 车型 × 2 = 6 张）

| slug | body | color | features |
|---|---|---|---|
| jetour-t1 | Off-road SUV | desert sand | rugged boxy off-road, roof rack |
| jetour-dasheng | 5-seater SUV | dark blue | family adventure SUV |
| jetour-x70-plus | 7-seater SUV | white | large family SUV |

### Qiyuan（3 车型 × 2 = 6 张）

| slug | body | color | features |
|---|---|---|---|
| qiyuan-a07 | Sedan EV | white | electric sedan, smooth aero shape |
| qiyuan-q05 | Compact SUV EV | light blue | family EV SUV |
| qiyuan-e07 | Crossover EV | silver | versatile crossover |

### Avatr（3 车型 × 2 = 6 张）

| slug | body | color | features |
|---|---|---|---|
| avatr-11 | Mid SUV EV | matte black | premium intelligent EV, sharp tail |
| avatr-12 | Coupé Sedan EV | dark grey | premium luxury sedan |
| avatr-07 | Compact SUV EV | violet | premium compact EV |

### Volkswagen China（4 车型 × 2 = 8 张）

| slug | body | color | features |
|---|---|---|---|
| volkswagen-id-3 | Compact EV | white | hatchback EV |
| volkswagen-id-4-x | Compact SUV EV | silver | family EV SUV |
| volkswagen-id-6-x | 7-seater EV SUV | dark grey | large family EV |
| volkswagen-id-7 | Sedan EV | dark blue | premium sedan EV |

**车型 hero 总计 23 车型 × 2 = 46 张**

### Prompt 模板（每车 2 张）

**hero-01 (front 3/4)**:
```
Studio automotive product photography of a {COLOR} {BODY}, {FEATURES},
front three-quarter angle, sleek modern Chinese new-energy vehicle
design, NO visible brand badge, NO logos on grille, blank white license
plate (no characters), clean white seamless studio background with soft
floor reflection, professional automotive photography, sharp focus,
high resolution. Negative: chinese characters, license plate text,
brand logo, watermark, text overlay, OEM badge, manufacturer name.
```

**hero-02 (side profile)**:
```
Same {COLOR} {BODY} as above, clean side profile silhouette, blank
white plate, NO brand badge, NO logos, NO chinese text anywhere,
neutral white studio backdrop with subtle gradient, soft directional
lighting from above, professional 4K render.
```

---

## 任务 2: 品牌场景图（~30 张）

### About 大工业图（6 品牌 × 1 = 6 张）

每品牌 1 张大工业场景图（about section "smart manufacturing" 用）：
- changan: smart automotive assembly line, robotic arms, modern Chinese auto factory interior, blue lighting
- geely: high-tech R&D centre, automotive design studio, computer screens, professional engineers (no faces detail)
- jetour: rugged off-road vehicle assembly, large industrial space
- deepal: clean modern EV manufacturing line, white walls, battery assembly station
- qiyuan: family-friendly EV showroom interior
- avatr: futuristic premium EV studio, dark navy with LED accents
- volkswagen: German-style engineering precision assembly, white industrial

输出：`public/images/brand-{slug}-factory.webp`（统一 16:9 / 80-180KB）

### Sub-brand 大卡背景（4 张共享）

4 张可复用的 sub-brand 卡片背景（深色调，带车元素，每张主题不同）：
- `brand-card-bg-ev.webp`: dark navy futuristic EV silhouette
- `brand-card-bg-suv.webp`: dark slate rugged SUV silhouette
- `brand-card-bg-sport.webp`: dark crimson sport coupe silhouette
- `brand-card-bg-family.webp`: dark emerald family SUV silhouette

### Market 区域照（5 张共享）

5 个 region 用（中东沙漠 / 中亚草原 / 非洲热带 / 拉美海岸 / 东南亚港口）：
- `market-middle-east.webp`: Dubai desert + modern skyline
- `market-central-asia.webp`: Kazakhstan steppe road with mountains
- `market-africa.webp`: African savannah road
- `market-latin-america.webp`: Mexican coastal port view
- `market-southeast-asia.webp`: Bangkok urban road

### Delivery 港口/物流图（6 张共享）

6 张 delivery proof 用（覆盖港口 / RoRo / container / inspection / dealer / block train）：
- `delivery-port-yard.webp`: aerial view of port yard with hundreds of cars
- `delivery-roro-loading.webp`: cars driving up RoRo vessel ramp
- `delivery-container-loading.webp`: forklift loading car into 40HQ container
- `delivery-pdi-inspection.webp`: technician inspecting vehicle, clipboard
- `delivery-dealer-handover.webp`: dealer showroom car delivery moment
- `delivery-block-train.webp`: cars on rail wagons at border crossing

**场景图总计 ~21 张**

---

## 任务 3: Wire 进各品牌页

修改 6 个 `src/pages/brands/{slug}.astro`：
1. 把 Coming Soon 车型 image 路径从 SVG 占位换成 `/images/真图/laundered/evautopro-{slug}-01.webp`
2. 把 about section image 换成 `/images/brand-{slug}-factory.webp`
3. 把 sub-brand 卡背景换成对应的 `brand-card-bg-*.webp`
4. 把 market 区域换成 `market-{region}.webp`
5. 把 delivery gallery 换成 `delivery-*.webp`

**保留** 已有的真车 webp（changan-uni-t / cs55-plus / geely-atlas / geely-coolray / jetour-t2 / deepal-s05/s07/s09）不动。

## 任务 4: Build + 验证 + 不 push

```bash
npm run build  # 必须 58+ pages 0 error
```

跑完成功后：
```bash
~/bin/cc-notify "Codex: 6 品牌页全部图片填充完成 (46 张车型 hero + 21 场景图), build 通过, 等 CC 统一 push"
```

**不要 git push**, CC 验收所有图片质量后统一一次性 push 上线。

---

## 受阻策略

- imagegen 频次限制 / 失败 → 重试 3 次后跳过该张, 记到 zg block 留 TODO
- 单张超 180KB → launder 脚本已支持自动降 quality 找最大可接受值, 应该不会出问题
- 品牌页 Coming Soon 列表跟任务 A-F 实际生成的有差异 → 以实际 .astro 里 comingSoon 数组为准

# EV Auto Pro — 完整 Sitemap（evautopro.com）

> 创建：2026-05-22
> 架构类型：极简车型矩阵（ihkaauto 模式） + 博客 hybrid + 4 语言镜像（cars-in-china 模式）
> 目标首发：EN 主版 + 60-80 个车型页 + 15 篇博客 + 8 国市场页 + 完整服务/关于/联系架构
> 6 个月后：RU 全镜像 → 12 个月后：AR + ES

---

## 一、主域 EN 主版（默认语言）

### 1. 顶层（Top Nav）

```
/                              ← 首页 [母版 #1]
/cars/                         ← 全部车型总览（卡片网格+品牌筛选+价格筛选）
/brands/                       ← 品牌总览入口
/markets/                      ← 海外市场入口（按目的国分）
/services/                     ← 服务/出口流程入口
/case-studies/                 ← 客户案例
/blog/                         ← 博客
/news/                         ← 出口船报新闻
/about/                        ← 关于我们
/contact/                      ← 联系入口
```

### 2. 品牌目录 [母版 #2，复用 6 次]

```
/brands/changan/               ← 长安系
/brands/deepal/                ← 深蓝
/brands/qiyuan/                ← 启源
/brands/geely/                 ← 吉利
/brands/volkswagen/            ← 大众（合资授权）
/brands/jetour/                ← 捷途
```

### 3. 车型详情 [母版 #3，复用 50-100 次]

```
URL 模式：/cars/{brand-slug}-{model-slug}/
```

#### 3.1 首批 8 个必做（按搜索量 × 授权交集）

```
/cars/changan-uni-t/           ⭐ US 49,500/月 + 竞争 1
/cars/jetour-t2/               ⭐ UAE 33,100 + Global 550k
/cars/geely-coolray/           ⭐ UAE 8,100 + Global 201k（海外名，不是缤越）
/cars/deepal-s07/              ⭐ Global 135k
/cars/deepal-s05/              ⭐ Global 110k
/cars/changan-cs55-plus/       ⭐ Global 49.5k
/cars/geely-atlas/             ⭐ Global 49.5k（海外名，不是博越）
/cars/deepal-s09/              ⭐ CPC $23.25 付费金矿
```

#### 3.2 第二批 12-15 个（首批上线 1 个月后填）

```
长安系：
  /cars/changan-uni-k/         （UNI-K iDD PHEV）
  /cars/changan-uni-z/
  /cars/changan-cs75-plus/
  /cars/changan-cs35-plus/
  /cars/changan-x5-plus/
  /cars/changan-eado/

深蓝：（首批已含 S05/S07/S09）

启源：（首批跳过，海外搜量 <100，待客户主动询再补）
  /cars/qiyuan-q05/             （后置）
  /cars/qiyuan-q07/             （后置）
  /cars/qiyuan-a07/             （后置）

吉利：
  /cars/geely-emgrand/         （远景 海外名）
  /cars/geely-monjaro/         （星越 L 海外名）
  /cars/geely-okavango/        （豪越 海外名）

大众：（合资授权，有询盘+广告需求才填）
  /cars/volkswagen-id-3/
  /cars/volkswagen-id-7/

捷途：
  /cars/jetour-x70-plus/
  /cars/jetour-dasheng/
  /cars/jetour-shanhai-t1/
```

#### 3.3 第三批 30-50 个（爆款验证 + 客户主动询单后填）

按客户实际询盘热度补，不预设。

### 4. 海外市场国家页 [母版 #6，复用 8 次]

```
/markets/russia/               ⭐ P0 主战场
/markets/uae/                  ⭐ P0 中东金矿
/markets/kazakhstan/           ⭐ P0 中亚陆运
/markets/uzbekistan/
/markets/saudi-arabia/
/markets/egypt/
/markets/brazil/               ⭐ P1 拉美入口
/markets/mexico/
```

> 每页结构：该国新能源车进口政策 / 关税 / 认证（EAC/GCC/INMETRO）/ 主流车型推荐 / 历史交易案例 / 物流方案

### 5. 服务页 [母版 #7，复用 4-5 次]

```
/services/
/services/export-process/      ⭐ 主页面：5-step 流程图
/services/shipping/            ← RoRo / Container / Block Train / Truck 四种方案
/services/inspection/          ← 第三方多点检验
/services/financing/           ← 付款条款 + 信用证 + OA
/services/after-sales/         ← 海外配件供应 + 远程技术支持
```

### 6. 客户案例 [母版 #8，复用 20+ 次]

```
/case-studies/
/case-studies/{slug}/

首批 5 篇（用港口拍车 30 条视频里挑）：
  /case-studies/50-units-jetour-t2-shipped-to-uzbekistan/
  /case-studies/changan-uni-t-fleet-to-russia-dealer/
  /case-studies/deepal-s07-bulk-order-to-uae-distributor/
  /case-studies/geely-coolray-monthly-supply-to-kazakhstan/
  /case-studies/volkswagen-id-7-charter-shipment-to-saudi/
```

### 7. 博客 [母版 #4，复用 30-50 次]

```
/blog/
/blog/{post-slug}/

首批 5 篇必做（抄 dongfengsouth 2200字+11表格模板）：
  /blog/2026-ranking-of-chinese-ev-brands-for-export/
  /blog/best-chinese-electric-cars-for-russia-2026/
  /blog/top-chinese-evs-for-uae-and-middle-east-2026/
  /blog/chinese-ev-vs-japanese-car-for-kazakhstan-buyers/
  /blog/how-to-import-chinese-electric-cars-to-brazil/

第二批 10 篇（半教育+半榜单，2026 年内填）：
  /blog/changan-vs-chery-which-chinese-brand-is-better/
  /blog/byd-vs-geely-2026-comparison-for-exporters/
  /blog/how-much-does-it-cost-to-import-chinese-ev-to-uae/
  /blog/cif-vs-fob-vs-exw-chinese-car-export-explained/
  /blog/right-hand-drive-chinese-evs-for-export-list/
  ...
```

### 8. 出口船报新闻 [母版 #5，复用 100+ 次]

```
/news/
/news/{slug}/

URL 模式：{quantity}-{brand}-{model}-shipped-to-{country}
示例：
  /news/30-units-jetour-t2-shipped-to-tashkent-uzbekistan/
  /news/50-units-changan-uni-t-arrives-st-petersburg-russia/
  /news/10-units-deepal-s07-loaded-roro-to-jebel-ali-uae/
  ...
```

> 每篇 200-500 字 + 装船现场照 + 客户证言 + "Request similar deal" CTA

### 9. 关于我们 [母版 #9，复用 4 次]

```
/about/                        ← 主页：公司故事 + 15 年经验 + 数据
/about/founder/                ← 彩老板 founder 介绍（信任路线）
/about/factories/              ← 授权车厂合作列表（长安/深蓝/吉利/大众/捷途）
/about/certifications/         ← 商务部出口许可 + ISO + 海关 AEO
/about/team/                   ← 海外业务团队（俄语区/中东/拉美区分负责人）
```

### 10. 询盘表单页 [母版 #10，复用 3 次]

```
/contact/                      ← 总入口
/contact/quote/                ← 询价表单（最重，沉淀客户档案）
/contact/inspection/           ← 申请第三方检验
/contact/catalogue/            ← 下载产品手册 PDF（邮箱换 catalogue）
```

### 11. FAQ [母版 #11，复用 1 次]

```
/faq/                          ← 全站 FAQ 汇总（grandcoatings 6 问 + nev-in-china 出口 FAQ 合并）
```

> 分组：购买流程 / 价格付款 / 物流运输 / 售后服务 / 合规认证

### 12. 系统页 [母版 #12]

```
/404/                          ← 404 页（带车型推荐+搜索+主 CTA）
/thank-you/                    ← 表单提交成功页
/privacy-policy/
/terms-of-service/
/cookie-policy/
```

---

## 二、多语言镜像（cars-in-china 9 语言模式 → 我们选 3 个）

> Polylang 实现，slug 不翻译（保留 SEO 历史），仅文本/H 翻译

### /ru/ 镜像（俄语，6 个月内全镜像）

```
/ru/                           ← 俄语首页
/ru/cars/changan-uni-t/        ← 车型页同 slug
/ru/cars/jetour-t2/
/ru/brands/changan/
/ru/markets/russia/            ⭐ 优先做
/ru/markets/kazakhstan/        ⭐ 优先做
/ru/markets/uzbekistan/        ⭐ 优先做
/ru/blog/...
/ru/news/...
/ru/services/export-process/
/ru/about/
/ru/contact/quote/
...（全部 EN 页面镜像）
```

### /ar/ 镜像（阿拉伯语，12 个月内）

```
/ar/                           ← 阿语首页（RTL 布局）
/ar/cars/{...}
/ar/markets/uae/
/ar/markets/saudi-arabia/
/ar/markets/egypt/
...
```

### /es/ 镜像（西班牙语，12 个月内）

```
/es/                           ← 西语首页
/es/cars/{...}
/es/markets/brazil/             ← 葡语近邻，西语暂代
/es/markets/mexico/
...
```

---

## 三、Footer 链接架构（全站底部固定）

```
Column 1 - Vehicles            Column 2 - Markets         Column 3 - Services       Column 4 - About
  /cars/                         /markets/russia/           /services/export-process/  /about/
  /brands/changan/               /markets/uae/              /services/shipping/        /about/founder/
  /brands/deepal/                /markets/kazakhstan/       /services/inspection/      /about/factories/
  /brands/jetour/                /markets/brazil/           /services/financing/       /about/certifications/
  /brands/geely/                 /markets/...all/           /services/after-sales/     /contact/quote/

Bottom Bar:
  /privacy-policy/  /terms-of-service/  /cookie-policy/  /404/(hidden)
  WhatsApp 浮窗 + Email + 微信二维码 + Phone
```

---

## 四、Sitemap.xml 优先级 + 更新频率（Rank Math 配置）

| 路径 | priority | changefreq |
|------|:--------:|:----------:|
| `/` | 1.0 | daily |
| `/cars/{brand}-{model}/` | 0.9 | weekly |
| `/brands/{brand}/` | 0.8 | weekly |
| `/markets/{country}/` | 0.8 | weekly |
| `/services/*` | 0.7 | monthly |
| `/blog/{post}/` | 0.7 | monthly |
| `/news/{post}/` | 0.6 | weekly |
| `/case-studies/{slug}/` | 0.6 | monthly |
| `/about/*` | 0.5 | monthly |
| `/faq/` `/contact/*` | 0.5 | monthly |
| `/{lang}/*` | 同英文版 -0.1 | 同英文版 |

---

## 五、URL 数量预估（12 个月内）

| 类型 | 数量 | 备注 |
|------|----:|------|
| 顶层固定页 | 12 | 首页/全部车型/品牌入口/市场入口/服务入口/案例入口/博客入口/船报入口/关于/联系/FAQ/系统 |
| 品牌总览页 | 6 | Changan/Deepal/Qiyuan/Geely/Volkswagen/Jetour |
| 车型详情页 | 60-80 | 首批 8 → 3 个月 25 → 12 个月 60-80 |
| 市场国家页 | 8 | RU/UAE/KZ/UZ/SA/EG/BR/MX |
| 服务子页 | 5 | export-process/shipping/inspection/financing/after-sales |
| 关于子页 | 5 | founder/factories/certifications/team + 主页 |
| 询盘子页 | 4 | quote/inspection/catalogue + 主页 |
| 案例页 | 20-30 | 港口拍车视频 30 条对应 |
| 博客长文 | 15-30 | 5 首批 + 10-25 续填 |
| 出口船报 | 60-100 | 每周 1-2 篇船报 |
| 系统页 | 5 | 404/thank-you/隐私/条款/cookie |
| **EN 子总数** | **200-280** | |
| **+/ru/ 镜像** | ×2 = **400-560** | 6 个月内 |
| **+/ar/ + /es/** | ×4 = **800-1120** | 12 个月内 |

---

## 六、首发 90 天上线优先级

```
Week 1：    /  /about/  /contact/quote/  /services/export-process/   [4 页骨架]
Week 2：    /brands/changan/ /brands/deepal/ /brands/jetour/ /brands/geely/  [4 品牌总览]
Week 3-4：  首批 8 个车型详情页                                                [8 车型]
Week 5：    /markets/russia/  /markets/uae/  /markets/kazakhstan/             [3 市场页]
Week 6：    5 篇 dongfengsouth 风格博客长文                                    [5 博客]
Week 7：    5 篇案例 + 5 篇出口船报                                            [10 内容页]
Week 8：    /faq/  /services/* 其余 4 个  /about/* 其余 4 个                    [9 页]
Week 9-12：第二批 12 个车型 + 15 篇船报 + /ru/ 首批 5 个核心页翻译              [32 页]

→ 90 天总计：EN 75 页 + RU 5 页 = 80 页上线
```

---

## 七、关键架构决策（不要再改）

1. **车型不挂在品牌路径下**：`/cars/changan-uni-t/` 而不是 `/brands/changan/uni-t/` —— SEO 干净 + 跨品牌内链方便（cars-in-china 同款）
2. **海外名不带年款进 slug**：`/cars/jetour-t2/` 而不是 `/cars/2026-jetour-t2/` —— 年款放 H1 + ACF 字段，slug 不随年款变防 SEO 断裂
3. **博客和船报分两路径**：`/blog/` 是深度长文（SEO 主力），`/news/` 是短船报（信任+频次），不混
4. **市场国家页独立路径 `/markets/`**：不挂博客底下，因为它要兼当落地页（俄语区客户搜 "import chinese ev to russia" 直接进）
5. **Founder 独立子页 `/about/founder/`**：彩老板 15 年外贸是核心信任资产，单页堆够内容（不只一段话）
6. **多语言用子目录不用子域名**：`/ru/` 而不是 `ru.evautopro.com` —— 共用主域权重，cars-in-china 模式
7. **案例页独立路径 `/case-studies/`**：不挂博客底下，对应 LED 灯站学到的 case-studies 板块结构
```


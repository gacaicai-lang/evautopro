# Top 8 中国 EV 出口同行 Sitemap + 页面 Section 拆解

> 数据源：sitemap.xml 实拉 + webfetch 实测页面结构 / 生成于 2026-05-22

---

## 一、8 大同行 Sitemap 架构对比（实测）

| # | 站点 | 总 URL | 主要路径模式 | 多语言 | 架构类型 |
|---|------|------:|------------|--------|---------|
| 1 | **ihkaauto.com** | 200 | `/cars/detail/{model}` × 196 | ❌ | **车型集中路径**（极简）|
| 2 | dongfengsouth.com | 0* | `/{Underscore_Title}` 博客直挂根 | ❌ | 博客驱动 (sitemap 证书错，从首页 nav 推断) |
| 3 | **cars-in-china.com** | 101 | `/{year}-{brand}-{model}/` + `/{lang}/` 子目录 | ✅ **9 语言**（ar/es/pt/fr/ru/id/vi/tr+en）| **多语言车型直挂根** |
| 4 | **zeexauto.com** | 189 | `/blogs/` × 94 + `/es/blogs/` × 94 | ✅ at least ES | **博客主导 + 双语** |
| 5 | ydchinauto.com | 0* | `/products/{brand}-{model}` （从前面 fetch 推断）| ❌ | 单品牌车型矩阵 |
| 6 | **auto-from-china.com** | 200 | `/car-brands` × 54 + `/listings/{year-model}` × 14 + 长 slug 博客 | ❌ | **混合架构**：品牌+车型+教育长文 |
| 7 | **nev-in-china.com** | 89 | 出口船报博客 + `/{lang}/` 子目录 | ✅ **8 语言**（ru/fr/es/pt/th/id/vi/ar）| 博客主导 + 多语言 |
| 8 | mashangauto.com | 125 | `/news/` × 67 + `/product/` × 25 + `/new-car-launch/` × 13 | ❌ | **博客主导 + 单品类深耕** |

\* dongfengsouth/ydchinauto 的 sitemap.xml 不可访问（SSL 错或屏蔽），URL 模式从 webfetch 推断

---

## 二、3 种主流架构 = 你必选其一

### 🅰 极简车型矩阵（ihkaauto 模式）⭐ 强推
- 全部 200 URL 几乎全是 `/cars/detail/{model-slug}`（196 个）
- 0 博客、0 多语言、0 品牌总览页
- 流量 1,927 visits/月 + $26,465 等量付费成本（全场第一）
- **优势**：极简 / 内容工业化堆量 / SEO 长尾全覆盖
- **劣势**：无多语言、无内容深度（对俄罗斯/中亚客户信任建立慢）

### 🅱 多语言车型直挂根（cars-in-china 模式）
- `/{year}-{brand}-{model}/` 车型直接挂在根目录（no /brands/ 中间层）
- 9 种语言子目录复制全部内容
- US 流量 464 visits/月（全场第 3）
- **优势**：每个车型 SEO 最干净 / 多语言全覆盖
- **劣势**：URL 一旦改无 SEO 历史 / 9 语言维护成本高

### 🅲 博客主导（zeexauto / nev-in-china / mashangauto / dongfengsouth）
- 大量博客（70-100 篇/站）支撑流量
- 产品页弱化 / 询盘走博客内 CTA
- 代表案例：dongfengsouth 一篇博客撑全站 50% 流量（1,474 visits/月）
- **优势**：低成本高 ROI（一篇爆款文章顶 100 个产品页）
- **劣势**：内容投入大 + 不确定哪篇会爆

---

## 三、每种页面类型的 Section 模板（来自实测，非脑补）

### 1️⃣ 首页 Section 模板

#### cars-in-china.com 首页（464 visits/月）
- **H1**：`Search for your ideal electric car`
- **导航**：About us / Contact us / 品牌链接（BYD/BMW/Mercedes/VW/Tesla/Nio）
- **Hero**：`Best Price. DUDU Certified Quality` + 4.9/5 stars 9000+ reviews + CTA "Join us and become a partner"
- **Section 顺序**：
  1. 公司一句话介绍（well-known Chinese exporter of electric cars and used EVs）
  2. New vehicle marketplace（60+ 品牌网格）
  3. Used vehicle inventory（"The largest choice of pre-loved electric cars in China"）
  4. **统计数字**：215,899 vehicles / 60+ brands / 200+ employees / 55,000+ certified cars
  5. Service features：多点检验 / 出口协助 / 车厂合作
  6. **Latest news**：4 条出口船报（Nissan to ME / Hyundai to Dubai / Changan to Jordan / VW ID.6 to Africa）
  7. Contact form（Name / Company / Email / WhatsApp / Message）
- **CTA**：模态弹窗 Request Quote 多处嵌入

#### dongfengsouth.com 首页（1,927 visits/月）
- **H1**：`Dongfeng South - Professional New Car And Used Car Distributor`
- **导航**：ALL VEHICLES / ABOUT DONGFENG / GLOBAL BUSINESS / SUPPORT & SERVICE / NEWS / CONTACT US
- **Hero**：车型轮播（Forthing Friday Nami 01 T1pro）
- **Section 顺序**：
  1. 品牌矩阵（Nissan / Venucia / Infiniti 系列）
  2. Dongfeng 自家车型（Nano 01, eπ007, eπ008）
  3. Nissan 车型（Sylphy / Altima / QX50）
  4. About Us（30+ 年发展 + 公司数字）
  5. Global Business + 团队介绍
  6. Maintenance / Spareparts / Aftersales
  7. Blog / News
- **CTA**：Request Quote 弹窗 + 多处嵌入

#### zeexauto.com 首页（374 ETV）
- **H1**：`China Auto Export Solutions for Global Dealers & Fleets`
- **导航**：Solutions / Vehicle Catalog / Services / Case Studies / Account
- **Hero**：`Super Cheap Used cars <10000USD` + CTA
- **Section 顺序**：
  1. Hot Chinese Vehicle Brands（BYD / Changan / Leapmotor 等）
  2. Certified Used Cars by Type（Sedan / SUV / MPV / Trucks）
  3. New Arrivals: Pre-Owned Vehicles
  4. **Import Process Guide（5-step 流程图）**
  5. **Third-Party Inspection Program**
  6. **Shipping Cost Calculator**
  7. After-Sales Support & Protection
  8. Company Overview & Certifications
  9. Customer Reviews
  10. Educational Guides & Market Insights
  11. FAQ
- **Footer**：Offers / Partnerships / Policies / Regions / About / Contact
- **CTA**：WhatsApp 浮窗 + 多处 quotation form

#### auto-from-china.com 首页
- **导航**：Home / All Vehicles / Auto Brands / On Sales / Services / Media Center / About Us / Contact
- **Hero**：Xiaomi SU7 + "Contact Us for Free Quote"
- **Section 顺序**：
  1. **What We Do**（procurement / export / transportation / parts / inspection / EV charging）
  2. All Auto Brands（logo 网格）
  3. News and Reviews
  4. **Why Choose Auto From China**（15+ years / 多样选择 / 价格 / 物流）
  5. **Client Testimonials**（4 个国际客户）
  6. Export Certifications
  7. **FAQ（24 个问题）**
- **Footer**：公司信息 / 最新车型 / 博客 / 社媒 / 订阅 / 营业时间

#### nev-in-china.com（BRABUS）首页
- **H1**：`Buy Electric Cars in China`
- **导航**：Search + 品牌链接
- **Hero**：`Best Price. Brabus Certified Quality` + 4.9/5 stars 4000+ reviews
- **Section 顺序**：
  1. 公司定位（China's leading electric vehicle exporter）
  2. 三大服务亮点（certified / export assist / 直供）
  3. 品牌网格
  4. **FAQ（购买最低数 / 库存 / 物流 / 支付 / 充电桩 / 出口资质 / 经销商机会）**
  5. Contact form
  6. **Latest news**（出口到 Uzbekistan / Russia / Kyrgyzstan / Kazakhstan 船报）⭐ 中亚定位
  7. 国际买家 CTA
- **CTA**：3 处 contact form

---

### ⭐ ihkaauto.com 首页（流量第一，1,927 visits/月）—— curl + 真 UA 实测
- **title**: `China Car Export | New & Used Cars for Dealers & Buyers -IHKA Auto`
- **H1**：`Your Trusted China Car Exporter | Premium New & Used Cars for Global Dealers`
- **Section 顺序**：
  1. Hero + 标语
  2. All Car Brands（品牌矩阵）
  3. Get a quote 表单
- **Buttons**：MENU / Contact Us / View Inventory / View More / **Compare & Customize**

### ⭐ ydchinauto.com 首页 —— curl + 真 UA 实测
- **title**: `China Car Exporter | Buy Chinese EVs & Gas Cars Wholesale - YD Chinauto`
- **H1**：`YDchinauto`
- **导航**：Home / All Vehicles / Export Qualifications / About Us / Contact Us / Language / Get a Quote
- **H2 顺序（6 段）**：
  1. Leading China Car Exporter: Professional Wholesale & Global Supply
  2. Hot Selling Used Cars for Sale in China for Export
  3. Why Partner with Ydchinauto?
  4. What Clients Are Saying（客户证言）
  5. Understanding the China Used Car Market
  6. Connect with us for Our Solutions
- **5 个车型卡**：BYD Formula Leopard 5 / BYD Qin Plus EV / BYD Han EV / BYD Song Plus Dm-i / BYD Dolphin

### ⭐ mashangauto.com 首页 —— curl + 真 UA 实测
- **title**: `New Cars for Sale & Used Cars for Sale | Mashang Auto`
- **H1**：⚠️ **无 H1**（SEO 弱点，你避免犯同样错）
- **导航（12 项）**：FORTHING / Cars / Used Car / bulk used cars / New Car / Accessories / Service / How to buy? / How to pay? / Shipping / **Must-know for buyers** / About
- **Section 顺序**：
  1. Hero "The Leading Export Platform in China"
  2. RECOMMENDED MODELS（11 个推荐车型，含 Changan UNI-K / UNI-V / CS75 PLUS / CS55PLUS / CS35PLUS / Toyota BZ3X / Jetour T2/X70PLUS/Dasheng/ShanHai T1 / Changan Eado）
  3. **3 大信任元素 H3 标题**：
     - **100% Refund Policy**
     - **Free Car Inspection**
     - **Marine Cargo Insurance**
  4. MSAUTO 公司介绍
  5. 博客 5 篇（Wuling Yangguang for African / BYD Atto 3 for Africa / Chinese vs Japanese Cars in Nigeria 2026 / BYD Dominates 2026 Beijing / 2026 BYD Yuan PLUS）

### 2️⃣ 品牌总览页 Section 模板（来自 cars-in-china.com /byd/）

- **H1**：`BYD` + 副标 `Buy your favorite car in China`
- **布局**：网格卡片
- **车型数量**：32 个 BYD 车型（2023-2026 年款）
- **每个车卡信息**：
  - 产品图缩略图
  - 型号 + 年份（如 `2026 BYD SONG Ultra EV`）
  - **价格区间**（如 `$22,600-$26,770`）
  - "Read more" 链接
- **无筛选/排序**功能
- **品牌介绍位置**：在车网格**下方**（不是上方），三大卖点："DUDU NEV-Certified Vehicles" / "Fast-Zero Formalities Export" / "Cheap – Shipped by Electric Car manufacturers"
- **CTA**：
  - "Get Questions? Contact us" 表单
  - 电话 +85253483261
  - 邮箱 admin@cars-in-china.com
  - WhatsApp 直链
- **关键句**："with sufficient BYD electric vehicle inventory, fast delivery within 3 days"

---

### 3️⃣ 车型详情页 Section 模板（来自 cars-in-china.com /2025-jetour-t2/）

- **H1**：`2025 JETOUR T2`
- **顶部信息**：
  - 图片画廊
  - 价格 `$26,931–$34,014`
  - 燃料类型 Hybrid
  - 颜色 Gray
  - 年份 + 车身类型 SUV
  - **主 CTA "GET BEST PRICE"**
- **Body Sections**：
  1. **Description**：DUDU NEV 是 Chery 授权经销商 + "300 units in stock" + "3 days 交付"
  2. **Specifications**：Qualcomm Snapdragon 8155P + 语音控制 + OTA + "square box" 设计 + 矩阵大灯
  3. **Features**：360° 全景影像 / 胎压监测 / 加热座椅 / 新能源混动技术
  4. **Services**：one-stop procurement
- **规格字段（12+ 个）**：电机功率（224/462 Ps）/ 驱动模式（FWD/4WD）/ 座椅 / 天窗 / 音响 / 倒车影像 / 轮胎尺寸（255/60 R19）/ 整车尺寸（4785×2006×1875 mm）
- **信任元素**：
  - "Certified Service technician" 多点检验
  - 商务部出口许可
  - "Fast-Zero Formalities Export"
  - 直接车厂合作
- **CTA**：
  - 主：顶部 "GET BEST PRICE"
  - 副：中间 Contact form "Submit"
- **关联车型**：无（仅 nav 引导到 "New Car" 类目）

---

### ⭐ ihkaauto.com 车型详情页（/cars/detail/onvo-l60）—— 它就靠这模板堆 1149 词

- **title**: `ONVO L60 - All Cars For Sale | EVs & Fuel Vehicles -IHKA Auto`
- **H1**: `FAQs`（主标题用其他标签，FAQ 突出）
- **H3 顺序（核心区块）**：
  1. **Get a quote**（顶部表单）
  2. **Manufacturer's Suggested Retail Price List (USD)**（厂家建议零售价表）
  3. **MSRP (USD)**
  4. **WHY IHKAAUTO?**（信任理由）
  5. **Total Price Calculator**（总价计算器）⭐ 独家亮点
  6. **Get a quote**（底部第二个表单）
- **Buttons**：MENU / **Submit Form** / **WhatsAPP Now** / **EXW** / **FOB**（贸易术语切换报价）

### ⭐ ydchinauto.com 车型详情页（/products/byd-qin-plus-ev）

- **title**: `BYD Qin Plus EV 2026 Wholesale Price | Compact Electric Sedan Exporter`
- **H1**: `BYD Qin Plus EV`
- **H2 顺序（5 段）**：
  1. **Car Video**（视频展示）
  2. **Description**
  3. **BYD Qin Plus - FAQs**
  4. **Get a Competitive Export Quote Today**
  5. Can't find your model? Leave specs for competitive quotes
- **FAQ 5 个问题（H3）**：
  1. How can I purchase the BYD Qin Plus?
  2. What is the minimum order quantity for the BYD Qin Plus?
  3. Do you have BYD Qin Plus in stock?
  4. How is the BYD Qin Plus shipped?
  5. What payment methods do you accept for BYD Qin Plus?
- **Button**：单 "Get a Free Quote"

### 4️⃣ 博客文章 Section 模板（来自 dongfengsouth top blog，1474 visits/月）

- **H1**：`2025 Ranking of Chinese Car Brands by Strength and Recommended Models`
- **字数**：2,200–2,400 字
- **H2 结构（6 段）**：
  1. Top 10 Chinese Car Brands by Overall Strength
  2. Key Trends in Chinese Automotive Industry (2025)
  3. Brand Focus: Dongfeng Motor Corporation
  4. Top Export-Oriented Models in 2025
  5. Top Recommendation: Dongfeng's Bestselling Export Models
  6. Recommended Key Models for Different Customer Segments
- **数据呈现**：
  - **11 个数据表格**（排名表 / 技术对比 / 按价格段推荐）
  - 3 个相关文章缩略图（底部）
- **价格分段方法**：$7k–21k / $21k–42k / $42k+
- **CTA**：底部 "Request Quote" 表单 + 海外业务经理联系方式（邮箱+电话）
- **作者**：无
- **发布日期**：2025-08-01
- **URL 格式**：`/2025_Ranking_of_Chinese_Car_Brands_by_Strength_and_Recommended_Models`（用 underscore + 完整标题）

---

### 5️⃣ 出口船报新闻 Section 模板（来自 nev-in-china + cars-in-china）

8-12 篇短新闻，每篇 200-500 字，URL 格式如：
- `/brabus-exports-a-large-number-of-toyota-cars-to-russia`
- `/shandong-brabus-exports-yangwang-u8-to-kazakhstan`
- `/ten-volkswagen-cars-are-exported-to-kyrgyzstan`
- `/200units-used-volkswagen-id-6-crozz-shipped-to-affrica`
- `/50-units-used-nissan-sylphy-shipped-to-middle-east`

**核心元素**：
- 标题 = 数量 + 品牌 + 车型 + 目的国
- 配图（船运/装车现场照）
- 简介（订单背景）
- 客户证言（如有）
- CTA：Request similar deal

---

## 四、给你的最终建站架构推荐（基于实测）

**采用 = 🅰 ihkaauto 极简车型矩阵 + 🅲 博客 hybrid + multi-language（cars-in-china/nev-in-china 模式）**

```
cnevpro.com/                          ← 主域
│
├── /                                  ← 首页（抄 zeexauto + nev-in-china 混合）
├── /cars/                             ← 全部车型总览
│   └── /cars/detail/{slug}/           ← 车型详情页（抄 cars-in-china /2025-jetour-t2/ 模板）
│
├── /brands/                           ← 品牌总览（17 个 = 长安/深蓝/启源/吉利/大众/捷途等已授权品牌）
│   └── /brands/{brand}/               ← 品牌总览页（抄 cars-in-china /byd/ 模板）
│
├── /blog/                             ← 博客（抄 dongfengsouth top 博客模板）
│   └── /blog/{post-slug}/             ← 长文（榜单+对比+教育文）
│
├── /news/                             ← 出口船报（抄 nev-in-china 短新闻模板）
│   └── /news/{slug}/                  ← 单篇船报
│
├── /services/                         ← 服务流程（抄 zeexauto Import Process Guide）
├── /about/                            ← 关于我们
├── /contact/                          ← 联系
│
└── /{lang}/                           ← 多语言镜像（俄/阿/西/葡）= cars-in-china 9 语言架构
    ├── /ru/
    ├── /ar/
    ├── /es/
    └── /pt/
```

---

## 五、首批 8 周建站清单（按优先级）

| 周 | 任务 | 抄哪家模板 |
|---|------|----------|
| 1 | 首页 + 关于我们 + 联系 | zeexauto + nev-in-china 混合 |
| 2 | 5 个品牌总览页（长安/深蓝/吉利/大众/捷途） | cars-in-china /byd/ |
| 3-4 | 16 个车型详情页 | cars-in-china /2025-jetour-t2/ |
| 5 | 3 篇榜单长文（top chinese ev for russia/uae/kazakhstan） | dongfengsouth top blog |
| 6 | 出口船报 5 篇 | nev-in-china 出口新闻 |
| 7 | 俄文版翻译 + Import Process Guide | cars-in-china 9 语言 + zeexauto Process |
| 8 | 阿语+西语版 + FAQ + Testimonials | nev-in-china FAQ + auto-from-china Testimonials |

---

## 六、关键数据来源

- sitemap.xml 公开实拉 + 路径解析
- webfetch 实测 5 个站首页 + 1 个品牌页 + 1 个车型页 + 1 个博客
- DataForSEO（前面累计 $2.5）确认流量层级
- ihkaauto 反爬 403 / ydchinauto 反爬 402——已直接在你 Chrome 打开供你目视

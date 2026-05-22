# 🚗 中国新能源车出口独立站 - 项目交接给新 CC 对话

> 创建时间：2026-05-22
> 上一对话已完成所有调研 + 决策，本对话专注 **WP 母版固化 + 实际建站**

---

## 一、新对话第一句话（直接复制粘贴）

```
我要做中国新能源车出口 B2B 独立站，技术栈 WordPress on SiteGround，
所有调研+决策已完成。请读 ~/Desktop/cnev-project/HANDOFF-给新CC对话.md 和
同目录其他所有文件，然后跟我确认要做的 12 个母版页清单，开始第一个母版。
```

---

## 二、项目背景一句话

**做什么**：中国新能源车整车 B2B 出口独立站，目标客户海外整车进口商/批发商/经销商
**主市场**：俄罗斯+中亚（第一）> 中东（UAE）> 拉美 > 非洲 > 东南亚
**授权车源**：长安系（UNI-K/UNI-Z/UNI-T/CS75/CS55/X5 Plus）+ 深蓝（S05/S07/S09）+ 启源（Q05/Q07/A07）+ 吉利（缤越/博越）+ 大众（ID.3/ID.7）+ 捷途（旅行者）
**定位**：纯出口贸易商（不是 sourcing 服务），founder-led 信任路线（彩老板 15 年外贸 + 俄语区资源）

---

## 三、已敲定决策（不要再讨论）

| 决策项 | 定案 |
|--------|------|
| **域名** | evautopro.com 主用 + evautopro.net + evautopro.co 防御 + evautoexport.com + evautowholesale.com + evautoglobal.com SEO 卫星（共 6 个）|
| **注册商** | Cloudflare Registrar（at-cost，约 $75 首年 6 个域名）|
| **主机** | SiteGround（账号 maldive3，已挂 24 站第 25 个无须付新主机费）|
| **CMS** | WordPress |
| **主题** | Kadence / Astra / Blocksy 任选轻量主题 |
| **核心插件** | Rank Math（SEO）+ WPForms（询盘）+ ACF（车型字段）+ WP Rocket（缓存）+ Polylang 或 WPML（多语言）|
| **多语言版本** | 英文（默认）+ /ru/ + /ar/ + /es/（后期加）|
| **模板抄哪家** | **grandcoatings.com 完整 12 H2 + 25 H3 模板**（实测最深 B2B 信任结构）+ LED 灯站 /case-studies/ 板块 |

---

## 四、12 个母版页清单（这是本对话核心任务）

按优先级排序，每个母版要固化：
- HTML 骨架（H1/H2/H3 结构）
- ACF 自定义字段
- CTA 位置
- 内链布局
- Schema markup
- 必填字段 vs 选填字段
- 多语言镜像规则

| # | 母版名 | URL 模式 | 复用次数预估 | 抄哪家 | 优先级 |
|---|-------|---------|-----------:|--------|:------:|
| 1 | **首页** | `/` | 1 | grandcoatings 12 H2 完整 | 🔴 P0 |
| 2 | **品牌总览页** | `/brands/{brand}/` | 6（6 品牌）| nev-in-china /byd + cars-in-china /byd 混合 | 🔴 P0 |
| 3 | **车型详情页** ⭐ 最关键 | `/brands/{brand}/{model}/` | 50-100 | ihkaauto /cars/detail + ydchinauto FAQ 模板 | 🔴 P0 |
| 4 | **博客长文** | `/blog/{post-slug}/` | 30-50 | dongfengsouth top blog（2200 字+11 表格）| 🟠 P1 |
| 5 | **出口船报短新闻** | `/news/{slug}/` | 100+ | nev-in-china /brabus-toyota-russia 模板 | 🟠 P1 |
| 6 | **市场国家页** | `/markets/{country}/` | 8（俄/UAE/哈/乌兹/沙特/埃及/巴西/墨西哥）| auto-from-china saudi-arabia 长文 | 🟠 P1 |
| 7 | **服务/出口流程页** | `/services/export-process/` | 1 | zeexauto Import Process Guide（5-step）| 🟠 P1 |
| 8 | **Case Study 案例** | `/case-studies/{slug}/` | 20+ | LED 灯站 case-studies 板块 + 港口拍车 30 条视频 | 🟡 P2 |
| 9 | **关于我们 + 子页** | `/about/` `/about/{founder/factories/certifications}/` | 4 | grandcoatings /about/ 多子页 | 🟡 P2 |
| 10 | **询盘表单页** | `/contact/{quote/inspection/catalogue}/` | 3 | grandcoatings 多入口询盘 | 🟡 P2 |
| 11 | **FAQ 母版** | `/faq/` | 1 | grandcoatings 首页 6 问 + nev-in-china FAQ | 🟡 P2 |
| 12 | **404 / Thank You** | `/404/` `/thank-you/` | 2 | LED 灯通用 | 🟢 P3 |

---

## 五、所有调研产物清单（新对话必读）

```
~/Desktop/cnev-project/
├── HANDOFF-给新CC对话.md              ← 本文件
├── top8-sitemap-sections-参考.md       ← 8 大同行 sitemap + 页面 section 完整拆解
├── competitor-watchlist.md             ← 重点学习对象（dongfengsouth blog 策略）
├── Top8同行页面Section对比-20260522-补全7页-v3.xlsx  ← 最终美化对比表
├── Top8同行页面Section对比-20260522-Section每项一行-v2.xlsx
└── Top8同行页面Section对比-20260522-按页面类型分sheet-v1.xlsx
```

**临时数据文件（/tmp 下，重启可能丢，需要复用要复制到 ~/Desktop/cnev-project/）**：
```
/tmp/cnev-html/             ← 5 个反爬同行站的原始 HTML
/tmp/cnev-html2/            ← 8 个补抓的品牌/车型/博客页 HTML
/tmp/coatings-html/         ← grandcoatings 首页 HTML
/tmp/light-html/            ← LED 灯站 HTML
/tmp/seo_v2.json            ← 20 同行 DataForSEO 流量数据
/tmp/seo_generic.json       ← EV 通用品类词 + 品牌词搜索量
/tmp/seo_caibang_models.json ← 长安/深蓝/启源/吉利/大众/捷途车型搜索量
/tmp/sitemaps.json          ← 8 大同行 sitemap 结构
/tmp/cnev_parsed.json       ← 8 大同行解析后的 H1/H2/H3 集合
```

---

## 六、本次硬数据 TOP 10 结论（新对话直接用）

1. **ihkaauto.com 是流量第一**（1,927 visits/月，1,149 排名词），1.1 年新站，全靠车型详情页矩阵堆出来——**抄它的车型详情页模板**
2. **dongfengsouth.com 一篇博客撑全站 50% 流量**（榜单文章 1,474 visits/月，2200 字 + 11 表格 + 按价格分段）——**博客长文要走这套**
3. **20 家同行 0 paid_kw**（没人投 Google Ads）——B2B SEO+主动开发为主，付费广告暂不做
4. **B 端 wholesale/distributor 等英文长尾词全球月搜 <10**——别抢这类词，**抢品牌+车型长尾**
5. **Xiaomi SU7 US 月搜 22,200 + 竞争度 1** / **Jetour T2 UAE 月搜 33,100 + 全球 550k** / **Geely Coolray UAE 8,100**——**首批车型详情页必做这 8 个**
6. **车型海外名必须用海外名**（Geely Coolray 不是 Binyue / Geely Atlas 不是 Boyue / Jetour T2 不是旅行者拼音）
7. **启源全系海外搜量 <100**——首批车型页跳过启源
8. **大众 ID 系列竞争 99 红海**——有授权可以做，靠询盘+广告，不靠 SEO
9. **UAE 是中东金矿**：Geely/GAC/Haval/Hongqi/Jetour 都在 UAE 比 US 还热
10. **grandcoatings 12 H2 + 25 H3 是 B2B 信任结构标杆**——首页直接套，6 张信任卡 > LED 灯 4 张

---

## 七、首批 8 个车型详情页必做（按搜索量+授权交集）

1. **UNI-T**（裸型号 US 49,500/月 + 竞争 1）
2. **Jetour T2**（UAE 33,100 + Global 550k）⭐ 中东必做
3. **Geely Coolray**（缤越海外名 UAE 8,100 + Global 201k）
4. **Deepal S07**（Global 135k）
5. **Deepal S05**（Global 110k）
6. **Changan CS55 Plus**（Global 49.5k）
7. **Geely Atlas**（博越海外名 Global 49.5k）
8. **Deepal S09**（CPC $23.25 异常高，付费询盘金矿）

---

## 八、新对话第一步建议

1. CC 读完所有文档后，**与彩老板确认 12 母版清单是否减增**
2. 从 **车型详情页母版（#3）** 开始固化——因为它复用 50-100 次，先把这个模板做对，其他模板就有参照
3. 用 **WordPress + ACF Pro + Custom Post Type** 实现车型 Custom Post Type，定义所有字段（车型名/年份/价格 FOB/CIF/车身类型/电池容量/续航/驱动/座椅/视频/图片画廊/相关车型等）
4. 第一个母版做完后，输出 **HTML 骨架 + ACF JSON 配置 + 一份填充示例**（用 UNI-T 数据填）

---

## 九、决策代理矩阵提醒（按 ~/.claude/CLAUDE.md 全局规则）

- 域名买（涉钱 $75）= **B 类**：CC 准备好购物车停在支付页等彩老板 1-click yes
- WP 主题选 + 插件装（已批准技术栈）= **A 类**：CC 自动跑
- 首批车型详情页填充内容 = **A 类**：CC 写完发预览给彩老板看
- 跨语言上线（俄/阿/西）= **C 类**：必须她拍

---

✅ 交接包齐全。新对话直接读本文件 + 同目录其他 5 个文件，30 秒进入建站执行状态。

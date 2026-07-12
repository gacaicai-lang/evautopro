# Codex 文章批次 01 — 10 篇深度文章（交接包）

> **执行者：Codex** | 规格书：先完整读 `ARTICLE-PLAYBOOK.md`，每一条都适用于本批次。
> 写完全部 10 篇后停止 —— 优化和终审由 Claude 回来做，你只负责按门槛交付初稿并发布。
> 进度更新在本文件底部的状态表，一篇一个 commit（message 注明 `by Codex per ARTICLE-PLAYBOOK.md`）。

## 本批选题逻辑（不要偏离）

围绕两条腿补集群：
1. **市场进口指南**（market）× 5 —— 复制 Kazakhstan/Russia 两篇已验证的模式，覆盖新市场，全部是最接近询盘的采购决策词
2. **买家指南 + 库存车型对比**（guide/product）× 5 —— 支撑产品页，消化真实采购疑虑

每篇 1500–2500 词（readMin 7–10），至少 1 个表格、3–5 条 FAQ、expertInsight、
≤3 张图、≥1 个 `/cars/` 产品页内链、2–3 个 `related`。

## 通用红线（重复一遍最容易犯的）

- **税率/法规必须当场实时搜索核实**，写文时以官方来源为准并外链标注。下面每篇给的
  "事实线索"只是研究起点，**数字过时了以你查到的为准，查不到就不写具体数**。
- 车辆参数只用 `src/data/cars.ts`。公司事实只用 playbook §2 那几条。
- 图片只用库里已有的；**场景照片有国别属性**（kazakhstan-*.webp 是中哈口岸/哈萨克场景，
  不能用在乌兹别克斯坦文章里冒充当地）；通用场景（russia-1.webp 的 RoRo 装船是无国别
  港口照）可跨文用但图注不得声称具体国家。没有合适的图就少配图 + 登记需求，不要硬配。
- 旧文章一个字不改。

---

## 五篇市场进口指南（market / Market & Import）

### 1. `import-cars-from-china-to-saudi-arabia-2026`
- 主关键词：`import cars from china to saudi arabia`
- 买家：沙特/GCC 汽车贸易商和车队买家
- 必须覆盖：SASO/SABER 认证流程与费用、GCC 标准（海湾认证）、关税+VAT 结构、
  港口选择（达曼 vs 吉达）、左舵、气候适配（高温对 BEV 电池的影响 → 诚实写 PHEV/EREV
  在极热市场的优势）、清关时间线、所需单证
- 事实线索（自行核实）：SASO = Saudi Standards Organization；SABER 平台；ZATCA（海关）；
  2026 沙特对新能源车的关税/激励政策
- 产品链接：耐热配置车型 2–3 款（cars.ts 里挑 PHEV/EREV：deepal 系、jetour-t2）
- 图：车型实拍 1–2 张（所推车型的 appearance/console）
- related: `chinese-car-dealers-uae-vs-direct-import-2026`, `bev-vs-phev-vs-erev-vs-hybrid-which-to-import`

### 2. `import-cars-from-china-to-uzbekistan-2026`
- 主关键词：`import cars from china to uzbekistan`
- 必须覆盖：乌兹别克关税/消费税/VAT 结构（近年对 EV 有免税政策，核实 2026 现状）、
  与哈萨克路线的对比（经哈铁路 vs 直达）、塔什干清关、EAEU 非成员身份的影响、
  当地 NEV 市场增长（BYD 本地化对进口商的影响 → 诚实写竞争格局）
- 事实线索：乌兹别克海关委员会；2019 起 EV 进口免关税政策的延续情况；UzAuto 市场地位
- 产品链接：性价比 BEV/PHEV 2 款
- 图：kazakhstan-1.webp（中亚班列，图注写"bound for Central Asia"不写乌国）+ 车型图 1 张
- related: `import-cars-from-china-to-kazakhstan-2026`, `top-7-chinese-suv-for-russia-2026`

### 3. `import-cars-from-china-to-ethiopia-2026-ev-only`
- 主关键词：`import electric cars from china to ethiopia`
- 角度（这篇的钩子）：埃塞是全球第一个**禁止燃油车进口**的国家（2024 年政策，核实
  2026 执行现状）——只能进 EV，正是中国 BEV 的机会
- 必须覆盖：禁令范围与例外、EV 进口关税/消费税减免幅度、吉布提港→亚的斯路线、
  右舵还是左舵（埃塞是左舵）、充电基建现实（诚实写：充电网络薄弱 → 推荐续航长的 BEV
  或说明 PHEV/EREV 不可进）、外汇管制对付款方式的影响
- 事实线索：Ethiopia Ministry of Transport and Logistics 2024 ICE import ban；
  海关税率 Ethiopian Customs Commission
- 产品链接：**库存中唯一 BEV 是 deepal-s05**（s07/s09 是 EREV，禁令下不可进埃塞）——
  诚实写清"我们现货 BEV 一款 + 其他 BEV 车型可按订单调配"，不要把 EREV 混进推荐
- 图：powertrain-2.webp（雪山 BEV 不适合埃塞场景——**不要用**；改用车型实拍）+ russia-1.webp
  RoRo（图注只写装船不写目的地）
- related: `import-chinese-cars-to-ghana`, `bev-vs-phev-vs-erev-vs-hybrid-which-to-import`

### 4. `import-cars-from-china-to-chile-2026`
- 主关键词：`import cars from china to chile`
- 角度：中智 FTA 下整车关税 0%（核实），LATAM 最开放的进口市场，无本地组装保护
- 必须覆盖：FTA 零关税条件（原产地证）、19% IVA、Homologación（3CV 认证）流程、
  San Antonio/Valparaíso 港、左舵、EV 补贴/路税优惠现状、与巴西高关税路线的对比
  （诚实写：巴西 2026 EV 关税爬坡，智利是更容易的切入点）
- 事实线索：Chile-China FTA (2006)；3CV = Centro de Control y Certificación Vehicular；
  SII 税务
- 产品链接：2–3 款（geely-coolray 在拉美有认知度）
- 图：车型实拍 1–2 张
- related: `bev-vs-phev-vs-erev-vs-hybrid-which-to-import`, `how-to-verify-a-chinese-car-exporter-before-you-pay`

### 5. `import-cars-from-china-to-georgia-2026-reexport-hub`
- 主关键词：`import cars from china to georgia`
- 角度：格鲁吉亚 = 高加索/中亚转口枢纽（波季港 + 免税仓 + 宽松再出口制度）
- 必须覆盖：格进口税结构（EV 免消费税政策核实）、波季/巴统港与中欧班列两条路线、
  再出口到亚美尼亚/阿塞拜疆/中亚的机制、右舵禁令（格禁右舵注册但可转口——核实现状）、
  与直发目的国的成本对比表
- 事实线索：Georgia Revenue Service；Poti Free Industrial Zone
- 产品链接：2 款
- 图：kazakhstan-3.webp 陆港（图注写跨里海/班列通道场景，不冒充格鲁吉亚）+ 车型图
- related: `import-cars-from-china-to-russia-2026-recycling-fee`, `import-cars-from-china-to-kazakhstan-2026`

## 三篇买家指南（guide / Buyer Guide）

### 6. `roro-vs-container-shipping-cars-from-china`
- 主关键词：`roro vs container shipping cars from china`
- 必须覆盖：单价对比（RoRo 按车收费 vs 40HQ 装 2–4 台摊薄，用 cars.ts 车长算装柜数，
  站内车详情页已有同款计算逻辑）、适用场景矩阵（量、目的港设施、二手/新车、内陆目的地）、
  风险差异（RoRo 不可锁物品 vs 集装箱绑扎）、主要航线时效范围、保险差异
- 表格：RoRo vs 40HQ 六维对比
- 产品链接：≥1（举例算装柜数时链到具体车型页）
- 图：russia-1.webp（RoRo 装船实拍，完美匹配）+ kazakhstan-3.webp（集装箱场站）
- related: `import-cars-from-china-to-kazakhstan-2026`, `import-chinese-cars-to-ghana`

### 7. `chinese-car-spare-parts-warranty-export-guide`
- 主关键词：`chinese car spare parts availability warranty`
- 角度：直击"中国车配件难买、没保修"这个最大采购顾虑 —— 诚实承认痛点再给解法
- 必须覆盖：出口车保修的真实机制（OEM 海外保修 vs 出口商责任 vs 无保修裸车——诚实分层）、
  配件供应渠道（OEM 海外仓、1688/独立供应链、随车备件包）、建议随首单带的易损件清单、
  VIN 溯源与配件目录、我们的做法（只写 cars.ts/playbook 允许的事实）
- 表格：三种保修安排对比
- 产品链接：≥1
- 图：services 里 after-sales.webp（真实配件照）
- related: `guide-to-sourcing-chinese-auto-parts`, `how-to-verify-a-chinese-car-exporter-before-you-pay`

### 8. `how-to-pay-chinese-car-exporter-tt-lc-guide`
- 主关键词：`how to pay chinese car supplier T/T L/C`
- 角度：verify-exporter 那篇的姊妹篇，付款环节单独展开
- 必须覆盖：T/T 30/70 的资金流转与风险点、L/C at sight 的成本和适用单量、
  第三方担保/信用证软条款陷阱、人民币结算趋势（核实）、付款前必查清单（引用
  verify 文章要点但不重复全文）、拒绝的付款方式（个人账户、西联、加密货币——为什么）
- 表格：T/T vs L/C vs 其他方式对比
- 产品链接：≥1
- 图：financing.webp（services 真实图）
- related: `how-to-verify-a-chinese-car-exporter-before-you-pay`, `chinese-car-dealers-uae-vs-direct-import-2026`

## 两篇库存车型对比（product / Model Comparison）

### 9. `deepal-s05-vs-s07-vs-s09-which-to-import`
- 主关键词：`deepal s05 vs s07 vs s09`
- 全部参数来自 cars.ts（三款都是库存车，有完整数据+16 张实拍/款）
- 动力事实（cars.ts）：**s05 = BEV，s07 = EREV，s09 = EREV** —— 这本身就是选型分水岭，
  对比要围绕它展开（充电依赖 vs 增程灵活性）
- 必须覆盖：三车定位阶梯（尺寸/动力/价位）、目标市场匹配（哪款适合哪类经销商）、
  装柜经济性对比（车长→40HQ 台数）、诚实写各自 Not ideal for
- 表格：三车全参数对照
- 产品链接：三款车详情页全链
- 图：三款各 1 张 appearance 实拍
- related: `deepal-s07-alternatives`, `bev-vs-phev-vs-erev-vs-hybrid-which-to-import`

### 10. `geely-coolray-vs-changan-cs55-plus-export`
- 主关键词：`geely coolray vs changan cs55 plus`
- 角度：两款都有厂方右舵批次（MOQ 20）——非洲/南亚右舵市场的两个直接选项
- 必须覆盖：参数对比（cars.ts）、右舵可得性与交期、目标市场口碑差异、
  价格带与利润空间逻辑（FOB 区间来自 cars.ts，不编利润数字）、Best for 分流
- 表格：双车对照
- 产品链接：两款车详情页
- 图：两款各 1–2 张实拍
- related: `mg-zs-vs-geely-coolray-africa`, `geely-coolray-export-deep-dive`

---

## 执行顺序与节奏

1. 按 1→10 顺序写（市场文优先，最接近询盘）
2. 每篇流程：实时搜索核实事实 → 写入 `src/data/news.ts` → `bash scripts/audit-assets.sh`
   → playbook §6 检查单逐项过 → commit + push（自动部署）→ 抽查线上页 → 更新下表
3. date 字段按实际发布日填，错开（一天最多发 2–3 篇，模拟自然节奏）
4. 全部完成后在状态表下写一行 `BATCH COMPLETE + 日期`，等 Claude 复审优化。
   **不要自己回头改已发布的批内文章**——复审是 Claude 的环节。

## 状态表（Codex 更新）

| # | slug | 状态 | 发布日期 | commit | 备注 |
|---|---|---|---|---|---|
| 1 | import-cars-from-china-to-saudi-arabia-2026 | TODO | | | |
| 2 | import-cars-from-china-to-uzbekistan-2026 | TODO | | | |
| 3 | import-cars-from-china-to-ethiopia-2026-ev-only | TODO | | | |
| 4 | import-cars-from-china-to-chile-2026 | TODO | | | |
| 5 | import-cars-from-china-to-georgia-2026-reexport-hub | TODO | | | |
| 6 | roro-vs-container-shipping-cars-from-china | TODO | | | |
| 7 | chinese-car-spare-parts-warranty-export-guide | TODO | | | |
| 8 | how-to-pay-chinese-car-exporter-tt-lc-guide | TODO | | | |
| 9 | deepal-s05-vs-s07-vs-s09-which-to-import | TODO | | | |
| 10 | geely-coolray-vs-changan-cs55-plus-export | TODO | | | |

状态值：`TODO` → `RESEARCHING` → `PUBLISHED` →（Claude 填）`REVIEWED`

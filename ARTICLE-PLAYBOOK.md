# EV Auto Pro 高转化文章写作手册（Article Playbook）

> 供 Claude 和 Codex 共同使用。当 Claude 额度用尽时，Codex 按本手册独立写文章，
> 质量标准完全一致。本手册基于：eyouagro.com 文章模板的逐页实测分析 +
> SEO/GEO 建站交接包（2026-07-12）的已验证结论 + 本站已上线 5 篇深度文章的实战模式。
>
> 最后更新：2026-07-12（Claude）

---

## 0. 三条不可违反的底线

1. **不编造。** 没有来源的参数、认证、客户、评论、员工、案例，不写进正文，也不写进
   Schema。查不到就不写，或明确写"按你的目的地市场向我们确认"。
2. **图片必须与内容精确对应。** 只用 `public/images/` 里已有的真实照片；图注只能陈述
   照片里真实可见的事实（车型、配置、实拍角度），**禁止**给通用产品照编场景
   （如"摄于验车环节""在我们保税仓拍摄"——此类图注曾被用户点名删除）。
3. **旧文章不动。** 2026-05 及更早的 13 篇旧文章不重写、不加 expertInsight、不改分类
   以外的内容。深度模板只用于新文章。

---

## 1. 文章类型（对应站内四个分类）

| category | categoryLabel | 写什么 | 例子 |
|---|---|---|---|
| `guide` | Buyer Guide | 选型方法、验证流程、技术概念解读 | How to Verify a Chinese Car Exporter |
| `market` | Market & Import | 单一国家/地区的进口税费、法规、渠道 | Import Cars from China to Kazakhstan (2026) |
| `product` | Model Comparison | 两车对比、替代款推荐、车系导购 | MG ZS vs Geely Coolray |
| `industry` | Industry & Policy | 中国NEV出口政策、行业动态（真正的"新闻"） | China's New NEV Export Policy 2026 |

选题优先级（来自交接包主题集群方法）：
1. **采购决策词**（decision）：`import cars from china to {country}`、`chinese car exporter verify` — 最接近询盘
2. **对比词**（consideration）：`{model A} vs {model B}`、`BEV vs PHEV for {market}` — 支撑选型
3. **信息词**（awareness）：概念解读 — 只在能连回产品页时才写

每篇文章必须支持至少一个产品页（`/cars/{slug}/`）或市场集群 —— 不写孤立科普。

## 2. 事实与证据规则（写作前）

- 税率、法规、日期：先实时搜索官方来源（海关总署、目的国政府、行业协会），正文中
  用外链标注来源。外链渲染时自动加 `rel="noopener nofollow"`。
- 车辆参数：只用 `src/data/cars.ts` 里的数据（价格、尺寸、动力、认证）。cars.ts 没有
  的参数不要写具体数字。
- 公司事实（全站统一口径，只能用这些）：60+ markets、15+ years、6 authorized OEM
  brands、24h quote、真实 WhatsApp `+86 159 6446 7914`、邮箱 `cai@evautopro.com`、
  公司 Shandong Wencai Import & Export Co., Ltd.。
- 群友经验/二手结论（如"Bing 提交有助于 GPT 抓取"）不能写成平台规则。

## 3. 文章结构模板（复刻 eyouagro 实测模式）

```markdown
开头段（2-4 句）：直接回答标题问题，包含主关键词和 1 个具体数字/事实。
这一段决定 AI 引用率，必须能独立成为答案。

## {H2 尽量写成买家会问的问题}
150-300 字。具体数字、标准号、流程步骤。

## {对比类文章必须有表格}
| 项目 | 选项 A | 选项 B |
|---|---|---|

（正文中段插入 1-3 张真实车辆照片，见 §5）

## {诚实框架：Best for / Not ideal for}
明确写"这款/这条路线适合谁、不适合谁" —— 自曝短板比全是优点更可信、更易被 AI 引用。

## {结尾 hook + CTA}
针对本文主题定制的 1 段行动建议 +
[WhatsApp: +86 159 6446 7914](https://wa.me/8615964467914?text={URL编码的预填消息，提到文章主题})
[cai@evautopro.com](mailto:cai@evautopro.com)
```

正文之外的字段（都写进 `news.ts`，渲染模板自动生成对应模块）：

- `expertInsight`（必填）：2-3 句带关键词的结论，会渲染成 "Expert Insight" 引用框，
  是 GEO 抽取重点。不要复述 excerpt，要给增量判断。
- `faqs`（必填，3-5 条）：真实买家会问的问题，答案 40-120 字、含具体数字。
  自动生成 FAQPage Schema —— 问题必须在页面可见，不能只为 Schema 造 FAQ。
- `related`（必填，2-3 条）：站内相关文章 slug。同集群互链（对比文 ↔ 市场文 ↔ 指南）。
- excerpt：140-160 字符，含主关键词 + 差异点。
- 正文里至少 1 个指向 `/cars/{slug}/` 产品页的内链，锚文本用车型名。

## 4. news.ts 数据格式

文章 = `src/data/news.ts` 里 `news` 对象的一个条目：

```ts
'my-article-slug': {
  slug: 'my-article-slug',
  category: 'market',              // guide | market | product | industry
  categoryLabel: 'Market & Import', // 与 §1 表格对应
  title: '…(≤60 字符，含主关键词)',
  excerpt: '…(140-160 字符)',
  hero: '/images/vehicles/evautopro-….webp',  // 必须是已存在的文件
  date: '2026-07-12 09:00:00',
  readMin: 7,
  expertInsight: '…',
  body: `…markdown 正文…`,
  faqs: [ { q: '…', a: '…' }, … ],
  related: ['slug-1', 'slug-2'],
},
```

正文 markdown 支持：`## H2`、`### H3`、`**粗体**`、`- 列表`、`| 表格 |`、
`![alt](/images/…)`、`[链接](url)`。

**列表页无需手动维护**：`/news/` 索引页已改为从 news.ts 自动生成（2026-07-12 起），
新文章加进 news.ts 即自动出现在列表、分类筛选和侧栏，不会再产生孤立文章。

## 5. 图片规则

- 车辆照片库：`public/images/vehicles/evautopro-{slug}-{01|02|appearance-N|console-N|space-N|other-N}.webp`，
  8 个车型 × 16 张。场景照片：`public/images/news/*.webp`（哈萨克/俄罗斯/动力类型 7 张）。
- **只在文章确实讨论该车型/该场景的位置插图**；每篇 2-3 张，放在讨论对应内容的段落后。
- alt 与图注只写照片里真实可见的东西 + cars.ts 里可查的参数。
- 信息图 `russia-160hp.svg`、`kazakhstan-cost.svg`、`powertrain-matrix.svg` 是代码生成
  的最终版，直接引用，不要改。
- 需要的图不存在 → 不要硬配，去 `CODEX-IMAGE-TASKS.md` 按格式登记需求（见该文件协作规则）。

## 6. 发布前硬门槛（逐项过，来自交接包 §五）

- [ ] 主答案、税费数字、限制条件都在可见正文里（不是只在图/表/Schema 里）
- [ ] 标题≤60 字符；excerpt 140-160 字符；H1 含主关键词
- [ ] 至少 1 个产品页内链 + 2 个站内文章互链；`related` 已填且互相呼应
- [ ] 所有外链是权威来源；所有数字有来源或来自 cars.ts
- [ ] 没有编造的案例/客户/评分/认证；图注全部经得起"照片里真的有吗"检验
- [ ] FAQ 在正文可见（渲染模板自动处理，但内容必须是真问题）
- [ ] `bash scripts/audit-assets.sh` 通过（0 missing assets, 0 broken links）
- [ ] JSON-LD 能解析：`python3 -c "import re,json;h=open('dist/news/{slug}/index.html').read();[json.loads(m) for m in re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>',h,re.S)];print('OK')"`

## 7. 发布流程

1. 编辑 `src/data/news.ts` 加文章条目
2. `bash scripts/audit-assets.sh` —— 构建 + 断链/缺图审计
3. §6 检查单逐项过
4. `git add -A && git commit && git push` —— GitHub Actions 自动部署 Cloudflare Pages
5. 部署后抽查线上页面（`https://evautopro.com/news/{slug}/`）确认渲染正常

## 8. Claude ↔ Codex 协作机制

- **图片**：`CODEX-IMAGE-TASKS.md` 是双向协作板 —— 任何一方都可以登记需求（NEEDED）、
  标记交付（DELIVERED）、标记验收（VERIFIED）。交付后必须由另一方抽查验收才算完成。
- **文章**：Codex 写的文章按本手册执行，提交后在 commit message 注明
  `by Codex per ARTICLE-PLAYBOOK.md`，Claude 下次会话按 §6 门槛复核；
  反过来 Claude 写的文章 Codex 也可以复核图片配图是否精确对应。
- **有分歧**：谁有第一手证据（官方来源链接、实拍照片、本地实测）听谁的；
  都没有就不写进网站。

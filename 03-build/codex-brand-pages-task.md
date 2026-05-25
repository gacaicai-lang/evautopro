# Codex 派单：剩余品牌页（按彩老板手改的 changan.astro 模板复用）

**派单方**: CC（彩老板凌晨明确"和 Codex 配合完成剩下页面"）
**日期**: 2026-05-25
**优先级**: P1
**工作目录**: `/Users/linlin/sites/evautopro.com`

---

## 一句话目标

复刻彩老板手改后的 `src/pages/brands/changan.astro`（648 行，premium cinematic Rivian/BYD feel）作为母版，按 brand-specific 数据生成剩余品牌页。**先做 Geely 一个**，CC 验收后再批量做 Jetour / Deepal / Qiyuan / Avatr / Volkswagen。

---

## 🔴 硬规则（必须遵守）

### 设计审美（见 memory）
- ✅ Rivian / Hyundai Worldwide / BYD Global cinematic feel
- ✅ dark navy + white + red accent (brand-500)
- ✅ large spacing (py-16 lg:py-24)
- ✅ image-heavy + 64-72px hero headline + alternating dark/light sections
- ❌ Alibaba marketplace / WordPress template / SaaS dashboard 风一律禁

### 复刻规则
- ✅ 100% 复用 changan.astro 的 section 结构 + 样式类 + 共用样式常量（primaryButton / darkButton / lightButton / `h-section` 等）
- ✅ 复用 ICON 系统 + icon() 函数
- ✅ 复用所有 11 个 sections 顺序和布局：
  1. Top trust bar
  2. Hero (左 cinematic 标题+CTA / 右 3 大车)
  3. 「Page should help buyers decide」strapline section
  4. heroMetrics（4 列数字）
  5. Brand families（3 卡 dark navy）
  6. Launch packs（3 卡）
  7. Featured models（5 卡 grid）
  8. Export proof（4 卡 dark navy）
  9. Quote planning section
  10. Market routes
  11. FAQ + Inquiry form

### 数据替换（仅改 brand-specific 部分）
- `brand` 名称（Geely / Jetour / Deepal / Qiyuan / Avatr / Volkswagen）
- `cars.ts` 里 `brand === '...'` 的车型列表
- `heroCar` 路径（用该品牌 cars.ts 第一辆车的 hero_image）
- `programPillars` / `brandFamilies` / `launchPacks` / `featuredModels` / `exportProof` / `marketRoutes` / `faqs` 全部按品牌重写文案（**不照抄 changan 文案，要符合该品牌的市场定位**）

### 品牌定位（写文案时参考）

#### Geely
- 中国第 1 个全球化 OEM，控股 Volvo / Polestar / Lotus
- 旗下子品牌：Zeekr（premium EV）/ Galaxy（NEV）/ Geometry（economy EV）/ Lynk&Co（合资）
- 海外强市场：俄罗斯、白俄罗斯、中亚（CIS Top 3 中国品牌）、UAE、墨西哥
- cars.ts: geely-atlas / geely-coolray（2 真车）

#### Jetour
- 奇瑞集团旗下 SUV / 越野专属品牌
- 主打：T 系列硬派越野（T2 / T1）+ 大圣 / 旅行者
- 海外强市场：中东沙漠越野、俄罗斯偏远地区、东南亚
- cars.ts: jetour-t2（1 真车）

#### Deepal
- 长安集团 NEV 子品牌（EREV/BEV 专属）
- 旗下：S05 BEV / S07 EREV / S09 Flagship 6-seater EREV / SL03 sedan / L07
- 海外强市场：UAE/Saudi（EREV 解决充电焦虑）/ 俄罗斯（冷天 EREV）
- cars.ts: deepal-s05 / s07 / s09（3 真车）

#### Qiyuan
- 长安集团 entry-level NEV 子品牌
- 主打：A07 sedan / Q05 SUV / E07 / V07
- 海外定位：性价比 family EV（俄罗斯 / 墨西哥 / 东南亚）
- cars.ts: 0 真车，全用 SVG 占位 + "Coming Soon"

#### Avatr
- 长安 + 华为 + 宁德时代 三方合资 premium intelligent EV
- 主打：Avatr 11 / 12 / 07
- 海外定位：UAE / Saudi 高端 / 俄罗斯一线城市
- cars.ts: 0 真车，全用 SVG 占位 + "Coming Soon"

#### Volkswagen
- 一汽-大众 + 上汽大众的中国制造出口
- ID 系列 EV：ID.3 / ID.4 X / ID.6 X / ID.7
- 海外定位：欧洲/拉美对德系制造信任的市场
- cars.ts: 0 真车，全用 SVG 占位

---

## 任务 A: Geely 品牌页（先做这个 1 个）

1. 备份现有 geely.astro：`cp src/pages/brands/geely.astro src/pages/brands/geely.astro.bak-pre-rebuild`
2. 读取彩老板手改的 `src/pages/brands/changan.astro` 完整 648 行作母版
3. 生成新 `src/pages/brands/geely.astro`：
   - 100% 复用 changan 的 section 结构 / Tailwind 样式 / 共享常量
   - 改 brand-specific 数据：cars 过滤 brand=Geely、heroCar 路径、品牌文案、Geely 旗下子品牌 list（Zeekr/Galaxy/Geometry）
   - 全部文案按 Geely 品牌定位重写（不直接抄 Changan）
4. 跑 `npm run build`：必须 58 pages 0 error
5. 输出报告到 stdout（成功 + path），**不要 git push**，CC 验收后才 push

## 任务 B: Jetour 品牌页

按任务 A 同模式做 `src/pages/brands/jetour.astro`（备份 .bak-pre-rebuild）：
- cars.ts 真车：jetour-t2（1 张）
- Coming Soon 占位：T1（中型越野）/ Dasheng（5 座 SUV）/ X70 Plus（7 座家用）/ X90 Plus（7 座旗舰）
- 旗下子品牌：奇瑞集团 → 关联到 /brands/chery/ (暂不存在则留 SVG + Coming Soon)
- 海外强市场：中东沙漠越野（UAE / Saudi）/ 俄罗斯偏远 / 东南亚 / 非洲
- FAQ 重写 5 条 (focus on 越野能力 / RHD 选配 / 拼柜)

## 任务 C: Deepal 品牌页

`src/pages/brands/deepal.astro`：
- cars.ts 真车：deepal-s05 / s07 / s09（3 张）
- Coming Soon: SL03 sedan / L07 sedan / G318 越野
- 母品牌 cross-link：Changan Group → /brands/changan/
- 海外强市场：UAE/Saudi（EREV 解充电焦虑）/ 俄罗斯（冷天 EREV）/ Kazakhstan
- FAQ 重写：EREV vs BEV / CATL 电池 / 冷启动 / Premium NEV alternative to Li Auto

## 任务 D: Qiyuan 品牌页

`src/pages/brands/qiyuan.astro`：
- cars.ts 真车：0
- 全部 Coming Soon（用 SVG 占位）：A07 sedan / Q05 SUV / E07 / V07
- 母品牌 cross-link：Changan Group → /brands/changan/
- 海外定位：性价比 family EV
- 海外强市场：俄罗斯 / 墨西哥 / 东南亚
- FAQ 重写：MOQ / RHD / 售后 / vs BYD Dolphin

## 任务 E: Avatr 品牌页

`src/pages/brands/avatr.astro`：
- cars.ts 真车：0
- 全部 Coming Soon（用 SVG 占位）：Avatr 11 / 12 / 07
- 母品牌 cross-link：Changan + 华为 + 宁德时代 三方
- 海外定位：Premium intelligent EV
- 海外强市场：UAE / Saudi / 俄罗斯一线城市
- FAQ 重写：华为 HarmonyOS / CATL 电池 / 智驾水平

## 任务 F: Volkswagen 品牌页

`src/pages/brands/volkswagen.astro`：
- cars.ts 真车：0
- 全部 Coming Soon：ID.3 / ID.4 X / ID.6 X / ID.7（电动）+ Tayron（SUV，可加）
- 一汽-大众 + 上汽大众联合制造
- 海外定位：德系制造信任 + 中国价格
- 海外强市场：欧洲 / 拉美 / 中东
- FAQ 重写：DIN 认证 / 欧规 / 一汽 vs 上汽 / VW China-made vs Germany-made

---

## 任务 B-F 执行规则

- 5 个品牌页一次性串行做完（不要等 CC 验收），跑完每一个就接下一个
- 全部完成后跑 `npm run build` 必须 58+ pages 0 error
- **不要 git push**（CC 验收所有 6 个品牌页后统一 push）
- 完成后：`~/bin/cc-notify "Codex: Geely + Jetour + Deepal + Qiyuan + Avatr + VW 6 品牌页全部生成完成, build 通过, 等 CC 验收 + 统一 push"`

### 🔴 Global routes section 新规范（2026-05-25 彩老板更新）

母版 changan.astro Section 08 "Global routes" 已重写：**真世界地图 + 8 国家热销 pin 标记**（不再是 4 卡 grid）。Codex 复刻每个 brand 时此 section **必须 1:1 复用** changan.astro 当前实现，包括：
- SVG 简化大陆轮廓（North America / South America / Europe / Africa / Middle East / Russia-Asia / India / SEA / Australia）
- 8 pin 数据：Russia / Kazakhstan / Uzbekistan / UAE / Saudi Arabia / Egypt / Mexico / Brazil（per-brand 可改 sub-label 文案，pin 位置不变）
- Pulse ring 动画 + 白卡 label
- Bottom legend + CTA strip
- Section 标题改成 "Exporting {Brand} to 50+ Countries Worldwide"

Codex 做剩 5 brand 时拷贝 changan.astro Section 08 全部代码 → 只改 brand 名字串和 pin sub-labels（按品牌定位调整，如 Geely 强俄罗斯/UAE/Mexico，Avatr 强 UAE/Saudi）。

---

## 任务 G: 缺图大批量 AI 生成（独立任务，等 B-F 完成后执行）

详见 `03-build/codex-brand-images-task.md`（CC 会另起 brief 文件）。

包含：~25 张 Coming Soon 车型 hero AI 生成 + ~30 张品牌场景图（about 工业图 / sub-brand 大卡背景 / market 区域照 / delivery 港口）。

---

## 不要做的事

- ❌ 不要改 `src/pages/brands/changan.astro` 母版
- ❌ 不要直接抄 changan 文案到 geely（必须按 Geely 品牌定位重写）
- ❌ 不要 git push（等 CC 验收）
- ❌ 不要碰其他 5 个品牌页（先做 Geely）
- ❌ 不要碰 cars.ts / cars/[slug].astro / 任何车型详情页

---

## 完成通知

完成 Geely：
```bash
~/bin/cc-notify "Codex: Geely 品牌页已生成 src/pages/brands/geely.astro, build 通过, 等 CC 验收"
```

受阻：`~/bin/zg block evautopro-brand-pages --reason "..."`

—— CC 派单完毕。

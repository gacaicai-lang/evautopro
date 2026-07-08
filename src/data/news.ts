export type NewsArticle = {
  slug: string;
  category: 'industry' | 'product' | 'guide' | 'company';
  categoryLabel: string;
  title: string;
  excerpt: string;
  hero: string;
  date: string;
  readMin: number;
  body: string;  // Markdown-style content
  faqs?: { q: string; a: string }[];
  related?: string[];  // related article slugs
};

export const news: Record<string, NewsArticle> = {

  '2026-china-nev-export-rules-guide': {
    slug: '2026-china-nev-export-rules-guide',
    category: 'industry',
    categoryLabel: 'Industry News',
    title: "China's New NEV Export Policy 2026: A Complete Guide by EV Auto Pro",
    excerpt: "Starting 2026, China's auto export sector pivots to quality with stricter standards for sustainable growth.",
    hero: '/images/faq-logistics.webp',
    date: '2026-05-15',
    readMin: 8,
    body: `## Why Did China Update Its NEV Export Policy?

In 2026, China's Ministry of Commerce (MOFCOM) jointly with NDRC and Ministry of Industry, introduced the "Quality Export Initiative" — a structural shift from quantity-first to quality-first auto export policy. The goal: ensure China's growing global auto market share is built on reliable products and trusted dealer relationships.

## Key Policy Changes for 2026

**1. Authorized Exporter Registration (Mandatory)**
- All entities exporting passenger vehicles must hold MOFCOM-issued authorized exporter status
- Grey-market resellers no longer permitted
- Trace each unit back to OEM-authorized dealer channel

**2. Enhanced Pre-Shipment Quality Standards**
- Mandatory third-party inspection for orders ≥10 units
- Standardized 360° photo + video QC report
- Battery health certification for BEV/PHEV/EREV

**3. Destination Country Compliance Pre-Approval**
- Exporters must verify destination certification (EAC / GCC / INMETRO / etc) before shipment
- MOFCOM maintains list of pre-approved factory batches for each market

**4. After-Sales Network Requirement**
- Exporters must demonstrate after-sales / parts supply capability in target market
- Or designate authorized partner network

## What This Means for International Dealers

For dealers importing Chinese vehicles, 2026 brings stronger guarantees:

- **No more grey market surprises** — every vehicle traceable to factory
- **Higher quality consistency** — mandatory 360° inspection
- **Faster customs clearance** — pre-approved destination compliance
- **Better after-sales** — required parts/warranty network

## How EV Auto Pro Complies

EV Auto Pro holds all required certifications since founding:
- MOFCOM Authorized Exporter (2018)
- AEO Customs Certification (2018)
- 6 direct OEM dealer MoUs (Changan / Deepal / Qiyuan / Geely / VW / Jetour)
- Parts depots in Moscow / Almaty / Dubai
- Pre-approved factory batches for all 8 target markets

## What's Next: 2027 Outlook

China's auto industry is expected to export 6+ million vehicles in 2026, up from 4.9M in 2025. The Quality Export Initiative aims to maintain growth while building global brand reputation. For dealers, this means:

- Larger model availability (60+ Chinese brands actively exporting)
- More EV / PHEV / EREV options
- Stronger warranty + parts support globally
- Better financing terms (more banks accepting L/C for Chinese exports)

## Conclusion

The 2026 policy update strengthens China auto export's foundation. International dealers benefit from clearer rules, better quality control, and longer-term partnerships with authorized exporters.

If you're entering Chinese vehicle import — now is the time. Contact EV Auto Pro for compliant authorized supply.`,
    faqs: [
      { q: 'Does the new policy apply to used cars too?', a: 'The 2026 Quality Export Initiative primarily targets new vehicles. Used car export rules are evolving separately. EV Auto Pro focuses on new vehicles, with certified used coming Q3 2026.' },
      { q: 'How do I verify an exporter is MOFCOM-authorized?', a: 'Ask for the MOFCOM authorized exporter certificate scan. Real authorization includes registration number you can verify via Chinese embassy/consulate in your country.' },
      { q: 'Does this affect prices?', a: 'Slightly higher in short-term due to compliance costs. But long-term lower total cost — fewer customs delays, fewer warranty disputes, fewer grey-market quality issues.' },
    ],
    related: ['changan-uni-t-vs-jetour-t2-comparison', 'top-7-chinese-suv-for-russia-2026'],
  },

  'changan-uni-t-vs-jetour-t2-comparison': {
    slug: 'changan-uni-t-vs-jetour-t2-comparison',
    category: 'product',
    categoryLabel: 'New Product News',
    title: 'Changan UNI-T vs Jetour T2: Which Coupé SUV for Export?',
    excerpt: 'Both models target the global compact-mid SUV segment but with distinct positioning. Detailed export buyer comparison.',
    hero: '/images/vehicles/evautopro-jetour-t2-01.webp',
    date: '2026-05-12',
    readMin: 6,
    body: `## Quick Verdict

**Changan UNI-T** is for buyers wanting sport-styled coupé SUV at the lowest entry price ($13,800 FOB). Best for young urban demographics in Russia, Central Asia, Middle East.

**Jetour T2** is for buyers wanting 7-seater adventure SUV with PHEV technology at $22,500 FOB. Best for family-oriented buyers in Central Asia, Russia interior, Gulf.

## Side-by-Side Comparison

| Spec | Changan UNI-T | Jetour T2 |
|------|--------------|-----------|
| Body Type | Sport Coupé SUV | 7-Seater Adventure SUV |
| Fuel | 1.5T ICE + 7-DCT | PHEV (3.0L + 34.5 kWh) |
| Seats | 5 | 7 (2+3+2) |
| Drive | FWD | 4WD |
| 0-100 km/h | 7.5s | 6.5s |
| Top Speed | 205 km/h | 200 km/h |
| Length | 4515 mm | 4785 mm |
| Wheelbase | 2710 mm | 2800 mm |
| FOB Shanghai | $13,800 | $22,500 |
| In Stock | 45 units | 30 units |

## Best Markets

**UNI-T** wins in:
- Russia (sport coupé style appeals to younger Russian buyers)
- UAE / Saudi (urban driving, value-priced)
- Central Asia (entry sport SUV segment growing)

**T2** wins in:
- Uzbekistan (7-seater family vehicle dominant)
- Kazakhstan (adventure styling + PHEV technology)
- Saudi Arabia (large family fleet, off-road capable)
- Gulf premium buyers seeking alternative to Toyota Land Cruiser

## Powertrain Deep Dive

UNI-T uses Changan's mature 1.5T turbo engine + 7-speed DCT. Proven reliability. Standard fuel-efficient cruiser. No EV concerns for limited-charging markets.

T2 uses Jetour's most advanced PHEV system — 137 km WLTP pure electric range + 1000+ km combined range via gas extender. Plug-in benefits without range anxiety. 4WD electric all-wheel drive standard.

## Pricing Math for Russia Dealer

**UNI-T**: FOB $13,800 → CIF St. Petersburg $17,200 → Russian customs (12% + 12% VAT) + EAC ~$2,800 → Total landed ~$22,500 → Russian retail $30K-35K → Dealer margin $7,500-12,500.

**T2**: FOB $22,500 → CIF SPB $26,300 → Customs + VAT + EAC ~$4,500 → Total landed ~$33,800 → Russian retail $48K-55K → Dealer margin $14,000-21,000.

T2 has higher absolute margin per unit. UNI-T has higher volume + faster turnover.

## Conclusion

There's no winner — both fill different demand segments. For first-time importers, UNI-T's lower entry price + larger stock + faster turnover make it easier to start. For established dealers seeking premium segment + higher unit margin, T2's 7-seater PHEV positioning is strong.

## Contact for Quote

EV Auto Pro is authorized exporter for both Changan and Jetour. We can supply mixed orders (UNI-T + T2 in same container) for dealers wanting both segments.`,
    faqs: [
      { q: 'Which has better resale value in target markets?', a: 'Both hold value reasonably for Chinese brands. UNI-T resells faster due to higher volume in market. T2 resells at higher absolute price due to PHEV uniqueness.' },
      { q: 'Right-hand drive available?', a: 'UNI-T: factory RHD available, MOQ 20 units. T2: factory RHD development for 2026 Q4. Contact us for current RHD availability.' },
      { q: 'Can I order both models in one container?', a: 'Yes. Mixed-model 40HC container holds 2-3 UNI-T or 1-2 T2 depending on packaging. We coordinate optimal loading.' },
    ],
    related: ['top-7-chinese-suv-for-russia-2026', 'how-to-choose-jetour-lineup'],
  },

  'top-7-chinese-suv-for-russia-2026': {
    slug: 'top-7-chinese-suv-for-russia-2026',
    category: 'guide',
    categoryLabel: 'Buyer Guide',
    title: 'Top 7 Chinese Off-Road SUVs for Russia in 2026',
    excerpt: 'These models offer robust performance for diverse terrains and comfortable interiors. Ideal for Russian dealer inventory 2026.',
    hero: '/images/vehicles/evautopro-geely-atlas-01.webp',
    date: '2026-05-10',
    readMin: 10,
    body: `## Why Russia Loves Chinese SUVs in 2026

Russian car market shifted dramatically post-2022. Western brands largely exited; Chinese brands filled the gap. By 2025, Chinese SUVs hold 55%+ market share. For 2026, the segment continues to grow with EREV and PHEV variants joining traditional ICE.

We focus on **SUVs suitable for Russian conditions**: cold-weather tested, all-wheel drive capable, robust suspension, parts availability.

## 1. Changan UNI-T (Sport Coupé)

FOB $13,800 · 5-seater · ICE · FWD · 188 PS

Best for: Urban Moscow / St. Petersburg dealers seeking sport coupé entry price.

## 2. Changan CS75 Plus

FOB $16,800 · 5-seater · ICE · FWD/AWD · 218 PS

Best for: All-around family SUV. Established Russian sales channel, strong parts availability.

## 3. Geely Atlas (博越 PRO)

FOB $17,800 · 5-seater · ICE · FWD · 218 PS

Best for: Mid-SUV segment. Volvo CMA platform = European safety standards. Premium positioning for Russian middle-class buyers.

## 4. Geely Monjaro

FOB $22,800 · 5-seater · ICE · AWD · 238 PS

Best for: Premium mid-SUV alternative to Touareg / Q5. Air suspension optional. Moscow / SPB premium dealer focus.

## 5. Deepal S07 EREV

FOB $24,800 · 5-seater · EREV · RWD · 252 PS

Best for: Premium EREV segment. Solves cold-weather charging anxiety with gas extender. 200 km pure electric urban + 1000 km gas-assisted highway.

## 6. Jetour T2 PHEV

FOB $22,500 · 7-seater · PHEV · 4WD · 462 PS

Best for: Family 7-seater + PHEV technology + 4WD adventure capability. Strong in Russian interior + Siberian dealers.

## 7. Deepal S09 EREV

FOB $36,500 · 6-seater · EREV · 4WD · 462 PS

Best for: Premium flagship 6-seater EREV. Competes with Li Auto L9 / BMW X7 PHEV. Moscow VIP / executive segment.

## Cold-Weather Configuration (Critical for Russia)

All 7 models support cold-weather config:
- Battery thermal management to -30°C (BEV/PHEV/EREV)
- Engine block heater (ICE/PHEV)
- Cold-cranking battery upgrade
- Snow tires available (optional)
- Heated steering wheel + seats
- Russian-language infotainment pre-load

## Best Logistics Routes to Russia

**Block Train via Khorgos** (18-22 days): Best for Moscow / Yekaterinburg / Novosibirsk. EAC pre-clearance possible. 30% cheaper than RoRo.

**RoRo to St. Petersburg** (30-45 days): Lowest per-unit cost for ≥10 units. Direct sea via Suez.

**RoRo to Vladivostok** (12-15 days): Far East Russia. Winter ice may delay Dec-Mar.

## Final Recommendation

For new Russian dealers: start with **CS75 Plus + UNI-T mix** ($16,800 + $13,800 FOB). High volume, fast turnover, proven market acceptance.

For established premium dealers: add **Atlas / Monjaro / Deepal S07** for $20-25K segment.

For VIP/executive: **Deepal S09 EREV** ($36,500) — competes against German premium at half the price.

## Contact for Russia Quote

EV Auto Pro is authorized exporter for all 6 brands listed (Changan / Geely / Deepal). Active Russian dealer network since 2018. EAC certification handled. Russian-speaking ops. Contact via WhatsApp на русском.`,
    faqs: [
      { q: 'Best Chinese SUV for Russian rural / Siberia?', a: 'Jetour T2 PHEV — 4WD + PHEV (engine works in extreme cold when EV alone has range loss). Deepal S07 EREV — gas extender solves remote area charging.' },
      { q: 'Cheapest reliable Chinese SUV for Russia?', a: 'Changan CS55 Plus ($14,500 FOB). Best-seller globally + Russia, strongest parts availability.' },
      { q: 'Premium Chinese SUV for Moscow?', a: 'Deepal S09 EREV ($36,500). Competes with German premium. Triple Snapdragon 8295 screens + Meridian audio + air suspension.' },
    ],
    related: ['changan-uni-t-vs-jetour-t2-comparison', '2026-china-nev-export-rules-guide'],
  },



  'geely-coolray-export-deep-dive': {
    slug: 'geely-coolray-export-deep-dive', category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'Geely Coolray Export Deep Dive: UAE, KZ, BR Markets',
    excerpt: 'Complete buyer guide for Geely Coolray RHD and LHD variants across UAE, Kazakhstan, and Brazil markets.',
    hero: '/images/vehicles/evautopro-geely-coolray-01.webp', date: '2026-05-08', readMin: 7,
    body: `## Geely Coolray Overview

Geely Coolray (also known as Binyue 缤越 domestically) is built on the CMA platform jointly developed with Volvo Cars. 1.5T turbo + 7-speed DCT. FOB Shanghai $15,200.

## UAE Market Fit

Top-3 Chinese compact SUV in UAE 2025. GCC + ESMA certified. Hot-climate cooling upgrade standard for export.

## Kazakhstan Market

Khorgos rail freight makes Coolray competitive against Hyundai Tucson / Toyota RAV4 at lower price. EAC certified.

## Brazil Market

INMETRO certified. Ethanol-compatible engine (E25 flex-fuel) required. We coordinate Brazilian customs broker for INMETRO clearance.

## Right-Hand Drive (RHD)

Factory RHD available for UK, SA, Pakistan, Indonesia markets. MOQ 20 units, 45-60 day lead.

## Pricing

FOB Shanghai $15,200 (LHD). RHD +$800. CIF varies by destination.`,
    faqs: [
      { q: 'Coolray vs Binyue?', a: 'Same vehicle. Coolray is export name, Binyue (缤越) is China domestic name.' },
      { q: 'CMA platform meaning?', a: 'Shared with Volvo XC40. European safety standards at China prices.' },
    ], related: ['top-7-chinese-suv-for-russia-2026'],
  },

  'how-to-choose-changan-suv': {
    slug: 'how-to-choose-changan-suv', category: 'guide', categoryLabel: 'Buyer Guide',
    title: "How to Choose a Changan SUV: Complete Guide to Changan's NEV Lineup",
    excerpt: 'Complete guide to choosing the right Changan SUV for your market — UNI series vs CS family, ICE vs PHEV vs EREV.',
    hero: '/images/vehicles/evautopro-changan-cs55-plus-01.webp', date: '2026-05-21', readMin: 8,
    body: `## Changan SUV Lineup Overview

Changan operates 2 main SUV series:
- **UNI Series**: Sport coupé styling (UNI-T / UNI-K / UNI-Z)
- **CS Family**: Conventional family SUV (CS35 Plus / CS55 Plus / CS75 Plus / X5 Plus)

## When to Choose UNI Series

UNI-T ($13,800 FOB) — Sport coupé SUV for young urban buyers in Russia, UAE, KZ.
UNI-K ($19,500 FOB) — Flagship PHEV mid-SUV. iDD PHEV system.
UNI-Z ($14,200 FOB) — Coupé SUV alternative to UNI-T.

## When to Choose CS Family

CS55 Plus ($14,500 FOB) — Best-seller compact SUV. Highest stock + fastest replenishment.
CS75 Plus ($16,800 FOB) — Mid-SUV. Strong in Russia + Egypt CKD.
CS35 Plus ($11,500 FOB) — Entry compact SUV. Best for emerging markets.

## Decision Matrix by Market

**Russia**: UNI-T (young urban) + CS75 Plus (family) — top 2 picks.
**Kazakhstan**: CS55 Plus dominates volume. UNI-K iDD growing.
**UAE**: UNI-T sport styling sells well.
**Egypt**: CS35 Plus + CS55 Plus for CKD partner program.

## Authorized vs Grey Market

EV Auto Pro holds Changan dealer MoU since 2018. Factory invoice for every unit. Verify with factory on request.`,
    faqs: [
      { q: 'Best-selling Changan?', a: 'CS55 Plus globally. UNI-T in Russia + UAE specifically.' },
      { q: 'PHEV Changan options?', a: 'UNI-K iDD PHEV (most popular). UNI-Z PHEV (new 2026).' },
    ], related: ['changan-uni-t-vs-jetour-t2-comparison'],
  },

  'jetour-t2-vs-geely-coolray-africa': {
    slug: 'jetour-t2-vs-geely-coolray-africa', category: 'product', categoryLabel: 'New Product News',
    title: 'Jetour T2 vs Geely Coolray: Which Small SUV Fits Africa Better?',
    excerpt: 'Africa SUV buyers face a choice — Jetour T2 7-seater PHEV adventure or Geely Coolray compact CMA platform. Detailed comparison.',
    hero: '/images/vehicles/evautopro-jetour-t2-01.webp', date: '2026-05-12', readMin: 5,
    body: `## Africa SUV Market Context

Africa's SUV market grows 8-12% annually. Two segments dominate Chinese exports:
1. **Family 7-seater** — large family + commuter combo
2. **Compact urban** — city + secondary roads

## Jetour T2 — 7-Seater Adventure PHEV

FOB $22,500. 7-seater 2+3+2. PHEV (137 km WLTP electric + 1000 km combined). 4WD off-road capable.

**Best for**: Nigeria / Kenya / Egypt fleet operators. Large family + adventure.

## Geely Coolray — Compact CMA Platform

FOB $15,200. 5-seater compact. 1.5T turbo + 7-DCT. Volvo CMA platform safety.

**Best for**: South Africa / Kenya / Egypt urban buyers. Modern compact at affordable price.

## Africa-Specific Considerations

**Charging infrastructure**: Limited in most African markets → PHEV (T2) better than BEV.
**Road conditions**: Rural roads favor higher ground clearance (T2). Cities OK with Coolray.
**Family size**: Large families dominant in Africa → 7-seater T2 wins.
**Fuel quality**: T2's PHEV reduces fuel quality sensitivity. Coolray's modern engine OK with E20 ethanol.

## Verdict

**Choose T2** for: Fleet operators, large families, off-road / rural markets.
**Choose Coolray** for: Urban dealers, value buyers, fuel-efficient compact segment.

Both available via EV Auto Pro authorized export.`,
    faqs: [
      { q: 'Better for Lagos / Cairo traffic?', a: 'Coolray (compact, easier parking). T2 too large for dense city.' },
      { q: 'Best ROI for Africa dealer?', a: 'T2 higher unit margin ($14K-21K dealer margin). Coolray faster turnover, larger volume.' },
    ], related: ['changan-uni-t-vs-jetour-t2-comparison'],
  },

  'deepal-s07-alternatives': {
    slug: 'deepal-s07-alternatives', category: 'product', categoryLabel: 'New Product News',
    title: 'Affordable Deepal S07 Alternatives: Value EREV SUVs from China',
    excerpt: 'Looking for Deepal S07 EREV at lower price? Compare with Geely Coolray Hybrid, Changan UNI-K iDD, and other value alternatives.',
    hero: '/images/vehicles/evautopro-deepal-s07-01.webp', date: '2026-05-11', readMin: 6,
    body: `## Deepal S07 Baseline

FOB $24,800. EREV (200km WLTP electric + 1000+ km gas-extender). Snapdragon 8295 cabin. CATL battery.

## Alternative 1: Changan UNI-K iDD PHEV

FOB $19,500. Standard PHEV (not EREV). Less premium cabin but similar PHEV utility. -$5,300 vs S07.

Best for: Markets needing PHEV but tight budget.

## Alternative 2: Geely Coolray (Compact, not EREV but lower price)

FOB $15,200. ICE only. Different segment but if EREV not required → significantly cheaper.

## Alternative 3: Jetour T2 PHEV

FOB $22,500. 7-seater PHEV (4WD). If family + adventure trump premium cabin → T2 better choice.

## When to Stay with S07

If buyer specifically wants:
- Snapdragon 8295 premium cabin
- True EREV (long range with gas extender)
- RWD sporty driving
- Competing with Li Auto / AITO

→ S07 is the right choice. No real alternative at this price ($24,800 FOB).

## Decision Tree

Need EREV (long range, limited charging)?
- YES → S07 (best in class)
- NO → UNI-K iDD ($19,500) or Coolray ($15,200)`,
    faqs: [
      { q: 'EREV vs PHEV difference?', a: 'EREV: gas engine only charges battery (no mechanical drive). PHEV: both engines can drive directly. EREV simpler, smoother.' },
      { q: 'Why S07 over Li Auto L7?', a: 'Same segment, 40% lower FOB. Same Snapdragon 8295 chip, similar feature set.' },
    ], related: ['top-7-chinese-suv-for-russia-2026'],
  },

  'changan-uni-t-vs-uni-z-comparison': {
    slug: 'changan-uni-t-vs-uni-z-comparison', category: 'product', categoryLabel: 'New Product News',
    title: 'Changan UNI-T vs UNI-Z: Comparison, Buying Guide & Alternatives',
    excerpt: 'Both UNI-T and UNI-Z are Changan sport coupé SUVs. Detailed differences, market fit, and pricing.',
    hero: '/images/vehicles/evautopro-changan-uni-t-01.webp', date: '2026-05-09', readMin: 5,
    body: `## Changan UNI Series Overview

Both UNI-T and UNI-Z are sport coupé SUVs in Changan's UNI lineup. Similar styling, different positioning.

## UNI-T — The Original Sport SUV

FOB $13,800. Launched 2020. 1.5T + 7-DCT. 188 PS / 300 Nm. 4515 mm length.

Best for: Entry sport SUV market, fastest seller.

## UNI-Z — Updated Coupé SUV

FOB $14,200 (+$400 vs UNI-T). Launched 2023. Same 1.5T engine. Updated infotainment, slightly larger 4540 mm.

Best for: Buyers seeking newer model year + slightly larger interior.

## Side-by-Side

| | UNI-T | UNI-Z |
|--|--|--|
| FOB | $13,800 | $14,200 |
| Year | 2020+ | 2023+ |
| Engine | 1.5T 188PS | 1.5T 188PS |
| Length | 4515 mm | 4540 mm |
| Wheelbase | 2710 mm | 2700 mm |
| Stock | 45 units | 25 units |
| Lead time | 15 days | 15 days |

## Which to Choose

For dealers with cost-sensitive buyers → UNI-T ($400 cheaper, larger stock).
For dealers wanting "latest 2023 model" marketing → UNI-Z.
For 2026 buyers seeking PHEV → UNI-Z 2026 PHEV variant coming Q4 2026.

## Best Markets for UNI Series

Both: Russia (#1 Chinese coupé SUV), Kazakhstan, UAE, Egypt.

UNI-T leads volume. UNI-Z gains traction in younger urban segments (Saudi / UAE young buyers).`,
    faqs: [
      { q: 'Same powertrain?', a: 'Yes. Both use 1.5T turbo + 7-DCT. Same 188 PS / 300 Nm output.' },
      { q: 'UNI-Z is newer model — better?', a: 'Marginally. Better infotainment, slightly different exterior. Powertrain identical. Marketing benefit "2023 latest" is real.' },
    ], related: ['changan-uni-t-vs-jetour-t2-comparison', 'how-to-choose-changan-suv'],
  },

  'how-to-choose-jetour-lineup': {
    slug: 'how-to-choose-jetour-lineup', category: 'guide', categoryLabel: 'Buyer Guide',
    title: "How to Choose a Jetour Car: Complete Guide to Jetour's Vehicle Lineup",
    excerpt: "Jetour focuses exclusively on SUVs and adventure-styled family vehicles. Complete guide to choosing between T2, X70 Plus, Dasheng.",
    hero: '/images/vehicles/evautopro-jetour-dasheng-01.webp', date: '2026-05-08', readMin: 7,
    body: `## Jetour Brand Position

Chery Group's SUV specialist sub-brand. Launched 2018. Focus 100% on SUVs and 7-seater adventure vehicles. No sedans.

## Model Lineup

**Jetour T2 PHEV** ($22,500 FOB) — Flagship 7-seater adventure PHEV. 4WD, 137 km electric range.
**Jetour X70 Plus ICE** ($18,500 FOB) — 7-seater family SUV. Most popular Jetour globally.
**Jetour Dasheng PHEV** ($21,800 FOB) — Premium 5-seater SUV with PHEV.
**Jetour X90** ($19,800 FOB) — 7-seater MPV.
**Jetour X95** ($24,500 FOB) — Flagship SUV.
**Jetour ShanHai T1** ($25,800 FOB) — Off-road hybrid (boxy 70s-styling).

## Decision by Market

**Central Asia (KZ/UZ)**: T2 + X70 Plus dominant. 7-seater family + adventure.
**Middle East**: Dasheng PHEV growing in Saudi VIP. X70 Plus fleet.
**Russia**: T2 PHEV + ShanHai T1 (off-road) for Siberian markets.

## When PHEV vs ICE

PHEV (T2 / Dasheng): Markets with sometime-charging-available (UAE / Moscow).
ICE (X70 / X90 / X95): Markets with no charging infrastructure (Africa, rural KZ).

## Volume Picks

For first-time Jetour dealer: **X70 Plus** ($18,500). Highest global volume, fastest stock turnover, established parts.

For premium positioning: **T2 PHEV** ($22,500). Modern PHEV adventure styling.

For off-road niche: **ShanHai T1** ($25,800). Boxy retro styling popular in 2026.`,
    faqs: [
      { q: 'Jetour vs Chery — same?', a: 'Jetour is Chery Group sub-brand (since 2018). Separate brand, separate dealer network. Sharing engines + R&D.' },
      { q: 'Best-selling Jetour?', a: 'X70 Plus globally. T2 PHEV in Central Asia + Russia specifically.' },
    ], related: ['changan-uni-t-vs-jetour-t2-comparison', 'jetour-t2-vs-geely-coolray-africa'],
  },

  'can-you-drive-phev-without-charging': {
    slug: 'can-you-drive-phev-without-charging', category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'Can You Drive a Plug-In Hybrid Without Charging? An Essential Guide',
    excerpt: 'PHEV / EREV explained for markets with limited charging infrastructure. Practical guide for African, Central Asian, and Latin American dealers.',
    hero: '/images/vehicles/evautopro-jetour-t2-02.webp', date: '2026-04-30', readMin: 6,
    body: `## Short Answer: Yes, but...

PHEV (Plug-in Hybrid) and EREV (Extended-Range EV) **can run on gas alone if you never charge**. But you lose the fuel efficiency benefit.

## How PHEV Works

PHEV has a gas engine + a battery + electric motor:
- **Charged**: Drives 30-150 km purely on battery, then gas engine takes over.
- **Uncharged**: Gas engine runs full-time, battery is dead weight. Fuel economy similar to ICE.

## How EREV Works

EREV has a gas engine but it's only a battery charger (not direct drive):
- **Charged**: Drives 200 km purely on battery, then gas engine starts as range extender.
- **Uncharged**: Gas engine runs charging battery continuously. Less efficient but works.

## When PHEV/EREV Beats ICE

✅ Charging available occasionally (home + work) → save 50-70% fuel cost
✅ City driving with regenerative braking → battery topped up free
✅ Government EV tax / parking incentives → financial benefit
✅ Quieter, smoother drive → premium feel

## When PHEV/EREV Doesn't Help

❌ Zero charging access ever → just heavier ICE car
❌ Long highway driving only → minimal regen, mostly ICE mode
❌ Fuel cheap, electricity expensive (rare but possible)

## Best PHEV/EREV from China for Limited-Charging Markets

**Deepal S07 EREV** — Best EREV. Even uncharged drives well as series hybrid.
**Jetour T2 PHEV** — Strong PHEV with 137 km electric range.
**Changan UNI-K iDD PHEV** — Affordable PHEV entry.

## Markets Where PHEV/EREV Wins

- **Africa (Egypt / Kenya / Nigeria)**: Limited grid → EREV (S07) best.
- **Russia rural**: Long distances → S07 or T2.
- **Saudi Arabia desert**: Charging stations sparse → EREV ideal.
- **LATAM rural**: Spread infrastructure → PHEV good middle ground.`,
    faqs: [
      { q: 'PHEV without charging vs ICE — fuel use?', a: 'Without charging, PHEV uses 5-15% MORE fuel than equivalent ICE due to battery weight. With charging, PHEV uses 50-70% less fuel. Charging makes huge difference.' },
      { q: 'EREV battery degradation if always gas?', a: 'EREV battery cycles less when constantly gas-charged vs frequently DC-fast-charged. Actually longer battery life.' },
    ], related: ['top-7-chinese-suv-for-russia-2026', 'deepal-s07-alternatives'],
  },

  'guide-to-sourcing-chinese-auto-parts': {
    slug: 'guide-to-sourcing-chinese-auto-parts', category: 'guide', categoryLabel: 'Buyer Guide',
    title: "A Guide to Sourcing China's Dustproof Auto Parts for African Roads",
    excerpt: 'African road conditions demand robust auto parts. Guide to sourcing dustproof, vibration-resistant Chinese OEM and aftermarket parts.',
    hero: '/images/vehicles/evautopro-changan-cs55-plus-01.webp', date: '2026-04-28', readMin: 6,
    body: `## African Road Reality

Dusty unpaved roads + extreme heat + rough vibration take a toll on auto parts. Sourcing the right parts matters more than vehicle choice.

## High-Risk Parts in African Conditions

1. **Air filters** — clog 3x faster on dust roads
2. **Suspension bushings** — rubber degrades in heat + UV
3. **Brake pads** — dust + heat = faster wear
4. **A/C compressor** — works overtime in 45°C ambient
5. **Engine seals** — fine dust penetrates failed seals

## Sourcing Strategy

**Genuine OEM** (best): Original parts from factory. Higher cost. 100% spec compliance.

**Quality Aftermarket** (value): Tier-1 supplier parts (CATL / Bosch / ZF) sold separately. 60-80% OEM price.

**Generic Aftermarket** (avoid for safety-critical): Cheap copies. Acceptable for cosmetic / interior, risky for brakes / suspension / electrical.

## EV Auto Pro Parts Supply

We supply parts via 3 channels:
1. Genuine OEM (factory direct, premium price)
2. Bosch / ZF / CATL Tier-1 (value, near-OEM)
3. Curated aftermarket (cosmetic / interior only)

## Africa-Specific Recommendations

- Stock 30% more air filters than EU/US dealers
- Recommend customers replace cabin filters every 6 months (vs 12)
- Brake pads inventory 2x normal
- Suspension bushings + ball joints stock 1.5x

## CKD Assembly Partners

For Egypt / Algeria / South Africa with CKD assembly programs, we supply parts kits at lower duty rates. Long-term partnership only.`,
    faqs: [
      { q: 'How fast can parts ship to Africa?', a: '7-14 days from Shanghai via DHL/FedEx Express. We do not yet have Africa parts depot — Shanghai direct ship.' },
      { q: 'OEM warranty on aftermarket parts?', a: 'OEM parts: factory warranty applies. Quality aftermarket: supplier warranty (Bosch/ZF/CATL). Cheap aftermarket: no warranty.' },
    ], related: ['changan-uni-t-vs-jetour-t2-comparison'],
  },

  'china-vs-japan-vs-usa-models': {
    slug: 'china-vs-japan-vs-usa-models', category: 'industry', categoryLabel: 'Industry News',
    title: 'Toyota, Honda, Mercedes: China vs. USA Model Differences & Import Guide',
    excerpt: 'Chinese-built Toyota / Honda / Mercedes models differ from US/Japan versions. Import guide for international dealers.',
    hero: '/images/faq-sourcing.webp', date: '2026-01-31', readMin: 5,
    body: `## Chinese-Built International Brand Models

Toyota, Honda, Mercedes, BMW, VW all manufacture in China via JVs. These China-built versions differ from USA/Japan/Europe spec.

## Key Differences

**Engine spec**: China models often have smaller engines (1.5T vs 2.0T) for tax efficiency.
**Trim**: Some features removed for China market price points.
**Infotainment**: Chinese-language UI, sometimes Baidu maps instead of Google.
**Safety equipment**: Generally similar to global spec (mandatory regulations).
**Warranty**: China JV may not cover overseas. Verify before purchase.

## Toyota in China

Made by GAC-Toyota + FAW-Toyota. Camry, Corolla, RAV4, Highlander available. China-spec generally similar to global but cheaper FOB.

## Honda in China

Made by Dongfeng-Honda + GAC-Honda. Civic, Accord, CR-V. China hybrid versions use different battery chemistry.

## Mercedes in China

Made by Beijing-Benz. C-Class, E-Class, GLC, EQE. Long-wheelbase variants only in China (not available globally).

## BMW in China

Made by BBA Brilliance-BMW. 1/3/5 Series. China L variants (long wheelbase) sometimes exclusive.

## Volkswagen in China

Made by SAIC-VW + FAW-VW. ID series EV, Tiguan L (China-only LWB), Magotan, Lamando. ID series MEB platform identical to global.

## EV Auto Pro Scope

We focus on **Chinese domestic brands** primarily (Changan, Geely, Jetour, Deepal, Qiyuan). We supply Volkswagen China via authorized JV access. Other JV brands (Toyota/Honda/Mercedes/BMW) we source via case-by-case partner network.`,
    faqs: [
      { q: 'Should I buy China-built Toyota vs Japan-built?', a: 'For domestic Chinese market models (Camry, Corolla) — yes, lower FOB. For premium (Lexus) — Japan-built only.' },
      { q: 'Why VW China is interesting?', a: 'MEB EV platform identical to European market. 30-40% lower FOB. Same engineering standards.' },
    ], related: ['2026-china-nev-export-rules-guide'],
  },

  'import-chinese-cars-to-ghana': {
    slug: 'import-chinese-cars-to-ghana', category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'How to Import Cars from China to Ghana: Process, Costs & Model Guide',
    excerpt: 'Complete guide to importing Chinese cars to Ghana — customs, duties, port logistics, and recommended models for Ghana market.',
    hero: '/images/vehicles/evautopro-changan-cs55-plus-01.webp', date: '2026-01-08', readMin: 8,
    body: `## Ghana Auto Import Overview

Ghana imports 30,000+ used cars annually but new Chinese vehicle market is growing 15%+ per year. Tema and Takoradi ports handle vehicle imports.

## Ghana Import Process

1. **Inquiry & Quote**: Send target market + qty. We respond 24h.
2. **Contract**: PI signed, T/T 30% deposit.
3. **Pre-Shipment**: Heat + dust-resistant config for Ghana climate.
4. **Ghana Standards (GS) Cert**: Required for new vehicles.
5. **Shipping**: Container/RoRo via Suez to Tema port. 28-40 days.
6. **Ghana Customs**: 35-45% duty (high). Plus VAT 17.5% + NHIL 2.5%.
7. **Door Delivery**: Tema → Accra / Kumasi / Tamale.

## Ghana Import Duty Structure

Standard: 35-45% based on engine size.
EV / Hybrid: Reduced 5-15% (government incentive 2024+).
Used vehicles: Higher (penalty discouraging old imports).

## Recommended Models for Ghana

**Changan CS55 Plus** ($14,500 FOB) — Affordable family SUV, reliable parts.
**Changan UNI-T** ($13,800) — Sport coupé style for young urban.
**Jetour X70 Plus** ($18,500) — 7-seater family fleet (Uber/Bolt operators).
**Deepal S07 EREV** ($24,800) — Premium EREV (5-15% duty rate for EV!).

## Currency + Payment

Ghana Cedi (GHS) volatility a concern. USD invoicing default. Letter of Credit recommended for first orders.

## EV Auto Pro Ghana Setup

We have not yet established Ghana dealer network. **Open to first-mover Ghana partner**. Volume ≥30 units/quarter for exclusive Accra territory.`,
    faqs: [
      { q: 'Why are Ghana car import duties so high?', a: 'Government revenue + protect local assembly programs. EV duty reduced to encourage NEV adoption.' },
      { q: 'Cheapest reliable Chinese car for Ghana?', a: 'Changan CS35 Plus ($11,500 FOB). After duties + VAT, retail ~$22-25K USD equivalent.' },
    ], related: ['guide-to-sourcing-chinese-auto-parts', '2026-china-nev-export-rules-guide'],
  },

  'mg-zs-vs-geely-coolray-africa': {
    slug: 'mg-zs-vs-geely-coolray-africa', category: 'product', categoryLabel: 'New Product News',
    title: 'MG ZS vs Geely Coolray: Which Small SUV Fits Africa Better?',
    excerpt: 'Two top compact SUV options from China for African markets — MG ZS vs Geely Coolray. Detailed comparison.',
    hero: '/images/vehicles/evautopro-geely-coolray-01.webp', date: '2026-05-12', readMin: 5,
    body: `## Two China Compact SUV Heavyweights

MG ZS (SAIC Motor) and Geely Coolray (Geely Holding) are top-selling Chinese compact SUVs globally. Both target affordable family + young buyer segments.

## Quick Compare

**MG ZS**: $13,800-16,200 FOB. 1.5L NA + AT. SAIC Motor (state-owned). MG brand UK heritage.
**Geely Coolray**: $15,200-18,800 FOB. 1.5T turbo + 7-DCT. Geely Holding (private). Volvo CMA platform.

## Engine + Drivetrain

ZS: Naturally aspirated 1.5L. Smooth, simple, affordable. Lower performance.
Coolray: 1.5T turbo + 7-speed DCT. Sportier, more power (177 PS vs 120 PS). Modern drivetrain.

## Platform + Safety

ZS: SAIC's older platform. Decent safety, no European standard alignment.
Coolray: Volvo CMA platform jointly developed. European safety standards.

## African Market Performance

ZS: #1-2 Chinese compact in South Africa, Nigeria, Egypt fleet.
Coolray: Growing fast in South Africa premium segment, Kenya, Ghana.

## Pricing Math for African Dealer

**ZS**: Lower FOB + duty = lower retail. Higher volume turnover. Best for budget-conscious markets.
**Coolray**: Higher FOB but Volvo platform sells at premium. Better unit margin for established dealers.

## EV Auto Pro Supply

We supply Geely Coolray directly (Geely MoU 2016). MG ZS via SAIC sourcing partner — case-by-case orders, MOQ 10 units.`,
    faqs: [
      { q: 'Better resale value?', a: 'Coolray edges out due to Volvo platform reputation. ZS similar to other budget compact SUVs.' },
      { q: 'Parts availability in Africa?', a: 'Both decent. MG slightly broader (longer presence in market). Geely growing fast.' },
    ], related: ['geely-coolray-export-deep-dive', 'jetour-t2-vs-geely-coolray-africa'],
  },

};

export const newsSlugs = Object.keys(news);

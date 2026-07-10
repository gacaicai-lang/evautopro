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
    ], related: ['bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'deepal-s07-alternatives'],
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

  'bev-vs-phev-vs-erev-vs-hybrid-which-to-import': {
    slug: 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import',
    category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'BEV vs PHEV vs EREV vs Hybrid: Which Should You Import for Your Market? (2026 Dealer Guide)',
    excerpt: 'The right powertrain to stock depends on charging infrastructure and climate at your destination, not on which one is "best." Here is the decision framework, real spec comparison, and region-by-region fit.',
    hero: '/images/faq-hero.webp',
    date: '2026-07-09 09:00:00', readMin: 11,
    body: `The right EV powertrain to import is not "the best one" — it is whichever one matches the charging infrastructure and climate at your destination. A BEV that sells well in the UAE's growing charging network can sit unsold in a market with patchy grid coverage, while an EREV that looks like a compromise on paper solves the exact anxiety that stops a hesitant buyer from signing. This guide breaks down all five powertrain types EV Auto Pro ships, when each one wins, and which of our in-stock models fit which market.

## The Five Powertrain Types, Defined

**BEV (Battery Electric Vehicle)** — no combustion engine at all, runs entirely on battery power, plugs in to recharge. Best fit: markets with reliable home or public charging and moderate climate. Zero tailpipe emissions, lowest running cost per km, but range and charging speed depend entirely on grid access.

**PHEV (Plug-in Hybrid Electric Vehicle)** — a combustion engine paired with a mid-sized battery (typically 15-35 kWh) that plugs in and covers daily driving on electricity alone, with the engine taking over for longer trips. Best fit: markets where charging exists but isn't universal — buyers get electric commuting most days with zero range anxiety on a road trip.

**EREV (Extended-Range Electric Vehicle)** — drives like a BEV day-to-day (100% electric drive, no mechanical connection from engine to wheels), but carries a small combustion engine that only generates electricity to extend range once the battery runs low. Best fit: cold climates and markets with limited charging — buyers get a genuinely electric driving experience with none of the range anxiety.

**HEV (Hybrid Electric Vehicle)** — a small battery (under 2 kWh) that recharges only through braking and the engine, never plugs in. Best fit: markets with no charging infrastructure at all, where the buyer wants better fuel economy than a pure ICE vehicle with zero behavior change required.

**ICE (Internal Combustion Engine)** — standard gasoline power, no electrification. Best fit: markets where fuel is cheap, charging is absent, and buyers prioritize lowest purchase price and universal parts/service availability.

## Which Powertrain Fits Which Market

| Powertrain | Best-Fit Market Conditions | Charging Dependency | Typical Buyer |
| --- | --- | --- | --- |
| BEV | Reliable home/public charging, moderate climate | High | Urban, environmentally motivated, lowest running cost priority |
| PHEV | Some charging access, mixed city/highway driving | Medium | Wants electric daily driving without range anxiety on trips |
| EREV | Cold climate, patchy or growing charging network | Low | Wants EV driving feel, cannot risk running out of charge |
| HEV | Little to no charging infrastructure | None | Wants better fuel economy, zero change in driving habits |
| ICE | Charging absent, fuel affordable, price-sensitive buyers | None | Lowest upfront cost, universal parts and service |

## Region-by-Region Fit

**Russia and Central Asia (cold climate, uneven charging build-out).** Battery range drops meaningfully in sub-zero temperatures, and public charging is concentrated in major cities. This is exactly why EREV performs well here — [Deepal S07](/cars/deepal-s07/) and [Deepal S09](/cars/deepal-s09/) give buyers real electric-driving character with a combustion engine as a safety net, so a cold snap or a trip outside city limits never strands the car. Straight ICE models remain the volume play for budget-conscious buyers — [Changan CS55 Plus](/cars/changan-cs55-plus/) is our fastest-moving model in the region for exactly that reason.

**Middle East and Gulf (hot climate, fast-growing but uneven charging network).** The Gulf's charging network is expanding quickly in the UAE and Saudi Arabia but is still inconsistent outside major cities, and extreme heat affects battery thermal management. EREV again solves the anxiety without asking the buyer to gamble on infrastructure that's still being built — the same logic that makes it a top seller for us in Russia applies here. PHEV models like the [Jetour T2](/cars/jetour-t2/) also perform well for buyers who want electric commuting with combustion-engine road-trip range.

**Africa (charging infrastructure still early-stage across most markets).** Outside a handful of major cities, public charging is minimal. HEV and ICE dominate for good reason — buyers need a vehicle that works identically to what they already know, with better fuel economy as the only change. This is where models like [Geely Coolray](/cars/geely-coolray/) do the heaviest volume.

**Latin America (mixed — strong in a few urban centers, thin elsewhere).** Similar logic to Africa outside major metro areas, with pockets (particularly Brazil's larger cities) where PHEV and BEV are becoming viable. Match the powertrain to the specific city or region you're importing into rather than treating the whole country as one market.

## What's Actually in Stock

| Model | Powertrain | Battery | Electric Range | FOB (USD) | In Stock |
| --- | --- | --- | --- | --- | --- |
| [Deepal S05](/cars/deepal-s05/) | BEV | 56.1 kWh | 510 km CLTC | $19,200 - $24,500 | 15 units |
| [Jetour T2](/cars/jetour-t2/) | PHEV | 34.5 kWh | 137 km WLTP + ~1,000 km combined | $22,500 - $28,900 | 30 units |
| [Deepal S07](/cars/deepal-s07/) | EREV | 31.7 kWh | 200 km CLTC + 1,000 km+ combined | $24,800 - $32,500 | 18 units |
| [Deepal S09](/cars/deepal-s09/) | EREV | 42 kWh | 215 km CLTC + 1,000 km+ combined | $36,500 - $45,800 | 12 units |
| [Changan UNI-T](/cars/changan-uni-t/) | ICE | — | — | $13,800 - $17,200 | 45 units |
| [Changan CS55 Plus](/cars/changan-cs55-plus/) | ICE | — | — | $14,500 - $17,900 | 50 units |
| [Geely Coolray](/cars/geely-coolray/) | ICE | — | — | $15,200 - $18,800 | 28 units |
| [Geely Atlas](/cars/geely-atlas/) | ICE | — | — | $17,800 - $22,500 | 22 units |

We do not currently hold HEV models in ready stock. If a market you're stocking needs a self-charging hybrid, [send us your target model and destination](/contact/quote/) and we'll source it — we work with 15+ OEM brands beyond our ready-stock lineup.

## Does Powertrain Type Affect Import Duty?

Often, yes — and the rules change faster than most buyer guides acknowledge. Kazakhstan is a concrete, current example: EVs still clear at 0% import duty under Kazakhstan's WTO commitments, but the country's duty-and-VAT-free EV quota was exhausted in October 2025, and VAT on vehicle imports rose to 16% from January 2026. A PHEV or EREV may be classified differently from a pure BEV in the same market, which changes the total landed cost math significantly.

**Don't assume your market's rules from a general guide — including this one.** Duty and VAT treatment by powertrain type varies by country and changes on government timelines outside anyone's control. Confirm current rates for your specific destination before finalizing an order; we track this for our active markets and will flag anything relevant when you request a quote.

## How to Decide

1. **Start with charging infrastructure at your specific destination city**, not the country average — a capital city and a secondary market in the same country can have completely different answers.
2. **Factor in climate** — cold climates lose meaningful BEV range in winter; extreme heat affects battery thermal management. Both push toward EREV or PHEV over pure BEV unless charging is genuinely reliable.
3. **Match to your buyer's actual driving pattern** — short urban commutes favor BEV/PHEV; long-distance or unpredictable routes favor EREV/HEV/ICE.
4. **Check current duty and VAT treatment** for your destination before pricing — see the section above.
5. **Consider mixing powertrains in one order.** A 40HQ container fits multiple models — many of our dealers stock an ICE volume model alongside one EREV or PHEV model to test electrified demand without betting the whole order on it.`,
    faqs: [
      { q: 'Which powertrain is best for cold-climate markets with limited charging infrastructure?', a: 'EREV. It drives like a full electric vehicle day-to-day but carries a small combustion engine purely to generate power once the battery runs low, so cold-weather range loss or a gap in the charging network never strands the buyer. Deepal S07 and Deepal S09 are our top-performing models for exactly this reason in Russia and Central Asia.' },
      { q: 'Does powertrain type affect import duty or VAT in CIS/Gulf markets?', a: 'Often, yes, and the rules change over time. Kazakhstan is a current example: EVs clear at 0% duty under WTO terms, but the duty-and-VAT-free quota was exhausted in October 2025 and VAT rose to 16% from January 2026. Confirm current treatment for your specific destination before finalizing an order — do not rely on a general guide for this.' },
      { q: 'Can I stock a mixed container of BEV and PHEV models?', a: 'Yes. A 40HQ container fits multiple models, and many dealers order one electrified model alongside a proven ICE volume seller to test demand without committing the whole order to a single powertrain.' },
      { q: 'What is the real-world range difference between EREV and PHEV?', a: 'PHEVs typically carry a smaller battery (15-35 kWh) with 30-50 km of pure electric range before the engine mechanically takes over. EREVs carry a similar-or-larger battery but the engine never mechanically drives the wheels — it only generates electricity — which usually gives a longer pure-electric range (150-215 km CLTC on our current models) with the combustion engine purely as a range extender rather than the primary driver.' },
      { q: 'Which EV Auto Pro models are ready stock in each powertrain category?', a: 'BEV: Deepal S05. PHEV: Jetour T2. EREV: Deepal S07 and Deepal S09. ICE: Changan UNI-T, Changan CS55 Plus, Geely Coolray, Geely Atlas. We do not currently hold HEV in ready stock but can source on request.' },
    ],
    related: ['can-you-drive-phev-without-charging', 'deepal-s07-alternatives', 'changan-uni-t-vs-jetour-t2-comparison'],
  },

  'import-cars-from-china-to-kazakhstan-2026': {
    slug: 'import-cars-from-china-to-kazakhstan-2026',
    category: 'guide', categoryLabel: 'Market Guide',
    title: 'How to Import Cars from China to Kazakhstan (2026): Duty, VAT, Recycling Fee & Process',
    excerpt: 'The rules changed hard in 2025–26: the EV duty-free quota is gone and VAT rose to 16%. Here is the current landed-cost math, document list, and step-by-step process for dealers importing from China.',
    hero: '/images/vehicles/evautopro-geely-coolray-01.webp',
    date: '2026-07-09 11:00:00', readMin: 10,
    body: `Importing a car from China to Kazakhstan in 2026 means budgeting for four things: the customs duty (0% on electric vehicles under WTO terms, 15% on combustion cars for companies), 16% VAT from January 2026, the recycling fee (утильсбор), and — for combustion engines — excise. The single biggest change dealers miss is that Kazakhstan's duty-and-VAT-free EV quota was exhausted in October 2025, so an electric car no longer clears free. This guide breaks down the real landed cost, the documents you need, and the route from a Chinese port to Almaty.

## What Changed in 2025–26

Kazakhstan spent two years as one of the most attractive EV import markets in the region — a quota let the first 15,000 electric vehicles in at 0% duty and 0% VAT. That window is now closed:

- **The 15,000-unit EV quota was exhausted around 15 October 2025.** After it, VAT applies to electric vehicle imports.
- **VAT rose to 16% from 1 January 2026** across vehicle categories (it was 12%).
- **The 0% customs tariff on EVs still applies** under Kazakhstan's WTO commitments — but only if the vehicle stays in Kazakhstan.

That last point is the trap most guides skip.

## The "Kazakhstan-Only" Rule on 0%-Tariff Cars

A vehicle brought in at the 0% WTO tariff **cannot be re-exported to other EAEU countries** (Russia, Belarus, Armenia, Kyrgyzstan), and this clause is strictly enforced. If your plan was to clear cars cheaply in Kazakhstan and move them to Russia, that backdoor is closed. Import for the Kazakhstan market, not as a transit hack.

## The Four Cost Components

| Cost | Electric vehicle (BEV) | Combustion car (company import) |
| --- | --- | --- |
| Customs duty | 0% (WTO, stays in KZ) | 15% ad valorem |
| VAT (from Jan 2026) | 16% | 16% |
| Recycling fee (утильсбор) | 50 MRP × EV coefficient | 50 MRP × coefficient (by engine volume & age) |
| Excise | Exempt | By engine displacement (cm³) |

**MRP** is Kazakhstan's Monthly Calculation Index, reset annually — confirm the current-year value before you price, because the recycling fee moves with it. Individuals importing for personal use pay a combined customs payment (СТП) calculated per cm³ of engine volume instead of the company duty structure.

## Worked Example — Landed Cost of a BEV

Take a [Deepal S05](/cars/deepal-s05/) (battery-electric compact SUV) at an FOB China price around $19,200:

| Line item | Approx. (USD) |
| --- | --- |
| FOB China | 19,200 |
| Ocean/rail freight + insurance to KZ | ~2,000 |
| Customs duty (0%, BEV under WTO) | 0 |
| VAT 16% (on CIF + duty) | ~3,390 |
| Recycling fee (EV coefficient) | confirm current MRP |
| **Indicative landed, before recycling fee** | **~24,600** |

A combustion equivalent like the [Changan CS55 Plus](/cars/changan-cs55-plus/) (~$14,500 FOB) carries the 15% duty and engine-based excise on top, so run the math per powertrain — the cheaper FOB doesn't always win once duty and excise are added. Not sure which powertrain fits Kazakhstan's climate and charging reality? See our guide on [which powertrain to import for your market](/news/bev-vs-phev-vs-erev-vs-hybrid-which-to-import/).

## Step-by-Step Process

1. **Confirm the model and powertrain** for the Kazakhstan market, and get a firm FOB/CIF quote.
2. **Sign the contract and pay the deposit** (T/T 30% is standard; L/C at sight accepted).
3. **Pre-shipment inspection** — every unit is inspected, photographed and documented before loading.
4. **Ship via the Khorgos land border or block train** to Almaty / Aktau — the block-train route is usually the most economical for Central Asia and avoids sea freight entirely.
5. **Customs clearance in Kazakhstan** — declare, pay duty (0% BEV / 15% ICE), 16% VAT, recycling fee and any excise; register the vehicle.
6. **Delivery** to your city.

We handle the China-side export and documentation; a local broker or your own team handles Kazakhstan clearance, and we can recommend partners.

## Documents You Need

- Commercial Invoice and Packing List
- Bill of Lading / rail waybill (CMR for truck)
- Certificate of Origin
- Export declaration (China side)
- Certificate of Conformity / EAC where required
- Vehicle passport / SBKTS for registration in Kazakhstan

## Common Traps

- **Assuming EVs still clear free.** The quota is gone; budget 16% VAT.
- **Planning to re-export to Russia.** The 0%-tariff Kazakhstan-only clause blocks it.
- **Forgetting the recycling fee.** It's tied to the current MRP and engine/age coefficient — confirm it before quoting a retail price.
- **Using an old customs calculator.** Rates changed in October 2025 and January 2026; verify against current figures for your exact model and date.

## Confirm Before You Order

Duty, VAT and the recycling fee in Kazakhstan changed twice in the last year and can change again on government timelines. Treat this guide as orientation, not a final quote — confirm current rates for your specific model and import date before finalizing. We track the numbers for our active [Kazakhstan buyers](/markets/kazakhstan/) and will flag anything relevant with your quote.`,
    faqs: [
      { q: 'Do electric cars still clear duty-free in Kazakhstan in 2026?', a: 'The 0% customs tariff still applies to EVs under Kazakhstan\'s WTO commitments if the vehicle stays in the country, but the duty-and-VAT-free quota was exhausted around 15 October 2025, and VAT rose to 16% from 1 January 2026. So an EV is no longer fully free — budget the 16% VAT plus the recycling fee.' },
      { q: 'Can I import a car cheaply into Kazakhstan and move it to Russia?', a: 'No. A vehicle cleared at the 0% WTO tariff carries a "Kazakhstan-only" clause and cannot be re-exported to other EAEU countries (Russia, Belarus, Armenia, Kyrgyzstan). It is strictly enforced. Import for the Kazakhstan market, not as transit.' },
      { q: 'What is the recycling fee (утильсбор) and how is it calculated?', a: 'It is calculated as 50 MRP multiplied by a coefficient that depends on engine volume and vehicle age, with a separate coefficient for electric vehicles. MRP (the Monthly Calculation Index) resets each year, so confirm the current value before pricing.' },
      { q: 'What is the cheapest way to ship a car from China to Kazakhstan?', a: 'For Central Asia the block train via the Khorgos border to Almaty or Aktau is usually the most economical option and avoids sea freight. Truck and container are also available. We quote the current lane rate with your order.' },
      { q: 'Which Chinese models are best for Kazakhstan?', a: 'It depends on climate and charging access — EREV and ICE models handle cold winters and thin charging networks well, while BEVs suit the major cities. Ask us for a stock list matched to your region and we\'ll include landed-cost math.' },
    ],
    related: ['bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'geely-coolray-export-deep-dive', 'guide-to-sourcing-chinese-auto-parts'],
  },

  'import-cars-from-china-to-russia-2026-recycling-fee': {
    slug: 'import-cars-from-china-to-russia-2026-recycling-fee',
    category: 'guide', categoryLabel: 'Market Guide',
    title: 'Importing Cars from China to Russia in 2026: The Recycling Fee Reform and the 160 HP Line',
    excerpt: 'Russia now ties the recycling fee (утильсбор) to engine power, with the preferential rate kept only up to 160 hp. Here is what that means for landed cost, and where the popular Chinese SUVs actually sit.',
    hero: '/images/vehicles/evautopro-changan-uni-t-01.webp',
    date: '2026-07-08 10:00:00', readMin: 9,
    body: `Russia's recycling fee (утильсбор) is now the single number that decides whether a Chinese car pencils out for import. From December 2025 the fee is tied to engine power on a progressive scale, and the preferential rate is kept only for cars up to 160 horsepower. Above that line the fee climbs steeply — on top of the 15% import tariff and VAT. For dealers importing from China, the model you choose, and specifically its power output, now drives the landed cost more than the FOB price does.

## What Changed

Russia has been raising the recycling fee in steps since 2024, and the 2026 reform sharpened it:

- **The fee is now tied to engine power (hp), on a progressive scale** (from December 2025), not just engine volume.
- **The preferential rate is retained only for cars up to 160 hp.** Above that, the fee rises sharply.
- **Annual indexation of 10–20%** continues on top, by vehicle category.
- This sits **on top of the 15% import tariff** and VAT.

The stated goal is to make local assembly more attractive than direct import — so the reform is designed to raise the cost of bringing finished cars in.

## Why the 160 HP Line Matters for Chinese SUVs

Most popular Chinese SUVs produce well over 160 hp. That puts them above the preferential band, where the recycling fee is highest. Here is where our current lineup actually sits (metric PS is close to hp — 160 hp ≈ 162 PS):

| Model | Power | Above the 160 hp band? |
| --- | --- | --- |
| [Geely Coolray](/cars/geely-coolray/) | 177 PS | Yes (just over) |
| [Changan UNI-T](/cars/changan-uni-t/) | 188 PS | Yes |
| [Changan CS55 Plus](/cars/changan-cs55-plus/) | 188 PS | Yes |
| [Geely Atlas](/cars/geely-atlas/) | 218 PS | Yes |
| [Deepal S05](/cars/deepal-s05/) | 218 PS | Yes |
| [Deepal S07](/cars/deepal-s07/) | 252 PS | Yes |
| [Jetour T2](/cars/jetour-t2/) | 462 PS | Yes |
| [Deepal S09](/cars/deepal-s09/) | 462 PS | Yes |

The honest takeaway: the current export-favourite SUVs all sit above the preferential line. That is not unique to any one brand — it reflects how modern turbocharged and electrified Chinese SUVs are specced. It means the recycling fee is a real cost line for all of them, and it should be modelled per unit before you commit to a container.

## What This Means for Your Landed Cost

Three practical consequences:

1. **Budget the fee explicitly, per model.** Because it scales with power, a 462 PS flagship carries a very different fee from a 177 PS compact — the gap can outweigh differences in FOB price.
2. **Compare on landed cost, not FOB.** A cheaper sticker price above 160 hp can land higher than a slightly pricier lower-power car. Run the full math.
3. **The fee hits every importer equally.** Chinese brands still hold the majority of Russia's market. The reform raises everyone's cost, so your competitiveness is relative — the dealers who model the fee accurately and price for it keep their margin; the ones who don't get squeezed.

## Should You Still Import to Russia?

Yes — with eyes open. Chinese vehicles continue to dominate Russian sales, and demand is real. The change is not a ban; it is a cost increase aimed at favouring local assembly. What it rewards is precision: pick models deliberately, model the recycling fee for each one before ordering, and price your retail to absorb it. Guessing is what loses money now.

Not sure which models and powertrains fit Russia's cold climate and this cost structure? See our guide on [which powertrain to import for your market](/news/bev-vs-phev-vs-erev-vs-hybrid-which-to-import/), or send your target city and volume for a landed-cost breakdown.

## Confirm Before You Order

Russia's recycling fee has changed several times and is indexed annually — the exact figure for a given model and date moves. Treat this as orientation, not a final quote. We track current rates for our active [Russia buyers](/markets/russia/) and include the fee in the landed-cost math with every quote.`,
    faqs: [
      { q: 'How is Russia\'s recycling fee calculated in 2026?', a: 'Since December 2025 it is tied to engine power on a progressive scale, with the preferential (lower) rate kept only for cars up to 160 hp. Above 160 hp the fee rises sharply. It is indexed 10–20% annually and sits on top of the 15% import tariff and VAT.' },
      { q: 'Do most Chinese SUVs fall under the 160 hp preferential band?', a: 'No. Most modern Chinese SUVs — including the popular export models — produce well over 160 hp (typically 177–260 PS, and much higher for PHEV/EREV flagships), which places them above the preferential band where the fee is highest. Budget the fee explicitly per model.' },
      { q: 'Is it still worth importing Chinese cars to Russia in 2026?', a: 'Yes, with careful cost modelling. Chinese brands still hold the majority of Russian car sales and demand is strong. The recycling fee reform raises cost for everyone importing finished cars, so competitiveness is relative — model the fee per unit and price retail to absorb it.' },
      { q: 'Does the recycling fee apply to electric vehicles too?', a: 'Yes, the recycling fee applies across categories, with the scale tied to the vehicle. Confirm the current coefficient for the specific model and date before pricing, as rates are indexed and have changed repeatedly.' },
      { q: 'Can EV Auto Pro include the recycling fee in a quote?', a: 'We track current Russia rates and include the recycling fee in the landed-cost math with every quote. Send your target model, city and volume and we\'ll break it down.' },
    ],
    related: ['bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'top-7-chinese-suv-for-russia-2026', 'import-cars-from-china-to-kazakhstan-2026'],
  },

};

export const newsSlugs = Object.keys(news);

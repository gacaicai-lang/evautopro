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
    hero: '/images/hero-port-loading.svg',
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
    hero: '/images/真图/laundered/evautopro-jetour-t2-01.webp',
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
    hero: '/images/真图/laundered/evautopro-geely-atlas-01.webp',
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

};

export const newsSlugs = Object.keys(news);

export type NewsArticle = {
  slug: string;
  category: 'industry' | 'product' | 'guide' | 'market' | 'company';
  categoryLabel: string;
  title: string;
  excerpt: string;
  hero: string;
  date: string;
  readMin: number;
  body: string;  // Markdown-style content
  expertInsight?: string;  // 2-3 sentence keyword-loaded conclusion capsule (GEO/AIO callout box). Falls back to excerpt if unset.
  faqs?: { q: string; a: string }[];
  related?: string[];  // related article slugs
};

export const news: Record<string, NewsArticle> = {

  'import-cars-from-china-to-saudi-arabia-2026': {
    slug: 'import-cars-from-china-to-saudi-arabia-2026',
    category: 'market', categoryLabel: 'Market & Import',
    title: 'Import Cars from China to Saudi Arabia (2026 Guide)',
    excerpt: 'Import cars from China to Saudi Arabia with the correct SABER vehicle certificate, Saudi conformity checks, landed-tax budget, port plan and documents.',
    expertInsight: 'To import cars from China to Saudi Arabia in 2026, conformity must be cleared before shipping: register the vehicle through the SABER vehicle-import service, appoint an accepted inspection body and obtain the shipment certificate. For Gulf heat and uneven charging outside major cities, PHEV or EREV stock is usually easier to place than a pure BEV, but certification must be confirmed VIN by VIN before payment.',
    hero: '/images/vehicles/evautopro-deepal-s07-01.webp',
    date: '2026-07-12 09:00:00', readMin: 10,
    body: `To import cars from China to Saudi Arabia in 2026, confirm Saudi conformity before the vehicle leaves China. The importer applies through the SABER vehicle-import service, selects an accepted inspection body in the shipping country and obtains a vehicle shipment conformity certificate. Customs, VAT, port handling and certification then sit on top of the CIF price; the exact tax classification and certificate cost must be confirmed for the VIN and importer before a purchase contract is finalized.

## What Must Be Checked Before You Buy?

Saudi Arabia does not treat vehicle compliance as a document to solve after arrival. SASO advises importers of new and used vehicles to verify compliance **before shipping**. The practical sequence is:

1. Confirm that the exact model, model year and specification can meet Saudi technical and energy-efficiency requirements.
2. Register the vehicle-import request through the SABER vehicle service.
3. Upload the vehicle and shipment information, pay the platform and assessment charges shown for the application, and select an SASO-accepted inspection body in China.
4. Complete the required document review and physical inspection.
5. Obtain the shipment conformity certificate before loading.
6. Submit the customs declaration and supporting documents through the Saudi clearance process.

SASO also provides a separate electric-vehicle conformity certificate for imported EVs exceeding 25 km/h. A generic GCC specification claim is not a substitute for checking the exact Saudi requirement. Ask the exporter to identify the conformity route for the actual VINs, not merely send a brochure labelled “GCC spec.”

**Certification cost:** there is no responsible single flat number to quote. The payable amount depends on the vehicle category, assessment body, inspection location, shipment size and whether additional testing is needed. Obtain a written SABER/inspection quotation before signing the proforma invoice.

![A vehicle undergoing a pre-shipment quality inspection](/images/services/inspection.webp)

## Which Vehicles Are Not Safe to Ship First and Fix Later?

ZATCA's current vehicle-import controls are clear about several risk categories. Light vehicles generally must be within the permitted five-model-year window. The vehicle must satisfy the energy-efficiency requirement, its VIN must be intact, and stolen, flooded, burned, overturned, structurally damaged, former police/taxi and armored vehicles are restricted or prohibited. Saudi rules also prohibit vehicles whose steering has been converted from right to left.

For a Chinese exporter this means the commercial invoice, VIN list and model-year declaration must match the inspected units. A low FOB price is irrelevant if the vehicle cannot obtain the Saudi shipment certificate or energy-efficiency notice.

## What Taxes and Charges Should an Importer Budget?

The safest budget is a landed-cost worksheet rather than a single percentage copied from an old guide.

| Cost line | Basis | What to confirm before payment |
| --- | --- | --- |
| Vehicle price | FOB or CIF contract value | Exact trim, VIN and Incoterm |
| Customs duty | Saudi tariff classification and customs value | Current ZATCA rate for the HS code |
| VAT | Applied under Saudi VAT rules | Current rate and taxable base with broker |
| SABER/SASO compliance | Application, assessment and inspection | Written quote for the shipment |
| Freight and insurance | China port to Jeddah or Dammam | Sailing, RoRo/container and coverage |
| Port and clearance | Terminal, broker, storage and delivery | Free days and demurrage exposure |

Saudi Arabia's standard VAT rate is 15%, but duty treatment and the VAT base must be confirmed with ZATCA or a licensed Saudi customs broker for the specific shipment. Do not use an informal landed-price calculator as the final customs quotation.

## Dammam or Jeddah: Which Port Fits the Buyer?

**King Abdulaziz Port in Dammam** is the natural gateway for Riyadh, the Eastern Province and buyers distributing toward other Gulf markets. It reduces inland distance for Dammam, Khobar and many Riyadh-bound loads.

**Jeddah Islamic Port** fits western Saudi demand, including Jeddah, Makkah and Madinah, and may offer the better sailing depending on the China origin port. The cheapest ocean quote is not automatically the cheapest delivered route: compare ocean freight, sailing frequency, terminal charges and final trucking together.

| Buyer destination | Usually compare first | Decision factor |
| --- | --- | --- |
| Riyadh / Eastern Province | Dammam | Shorter inland leg and Gulf-side access |
| Jeddah / western region | Jeddah Islamic Port | Shorter final delivery |
| Mixed national dealer stock | Both ports | Sailing schedule plus total delivered cost |

![Passenger vehicles boarding a RoRo vessel at a commercial port](/images/services/shipping.webp)

## Which Powertrain Fits Saudi Heat and Driving Patterns?

Saudi buyers should separate two questions: can the vehicle be certified, and will the powertrain suit the customer's daily use? Extreme heat raises battery-cooling loads, while public charging is strongest in major cities and less predictable on long intercity routes.

The [Deepal S07](/cars/deepal-s07/) is an EREV: the wheels retain electric-drive characteristics while a gasoline range extender removes dependence on public charging. The [Deepal S09](/cars/deepal-s09/) applies the same logic to a larger six-seat flagship. The [Jetour T2](/cars/jetour-t2/) is a seven-seat PHEV aimed at buyers wanting four-wheel-drive utility and both charging and fuel flexibility.

![Deepal S07 exterior photographed from the front three-quarter angle](/images/vehicles/evautopro-deepal-s07-appearance-01.webp)

![Deepal S09 cockpit and front cabin](/images/vehicles/evautopro-deepal-s09-console-01.webp)

| Buyer use | Better starting point | Not ideal when |
| --- | --- | --- |
| Urban commuting with home charging | BEV or PHEV | Building has no reliable charger |
| Riyadh/Jeddah plus long intercity trips | EREV or PHEV | Buyer wants the lowest mechanical complexity |
| Large family / premium fleet | Deepal S09 EREV | Six-seat size and price exceed the segment |
| Adventure and mixed-road use | Jetour T2 PHEV | Buyer wants a compact city SUV |

![Jetour T2 exterior showing its upright SUV body](/images/vehicles/evautopro-jetour-t2-appearance-02.webp)

**Best for:** Saudi dealers and fleet buyers who can confirm certification before deposit, order left-hand-drive units and maintain a local clearance and after-sales plan.

**Not ideal for:** a buyer trying to ship an unverified domestic-market trim first and arrange compliance after arrival. It is also not ideal to recommend a pure BEV solely because its China price is attractive when the end user lacks dependable home or workplace charging.

## What Documents Are Normally Needed?

Prepare the document set before loading, then have the Saudi broker confirm whether the importer or vehicle category requires anything additional:

- Commercial Invoice and Packing List with VINs
- Bill of Lading and insurance certificate where applicable
- Certificate of Origin
- China export declaration
- SABER vehicle shipment conformity certificate
- Vehicle technical data and energy-efficiency evidence
- GCC/Saudi conformity evidence required for the model
- Importer's Saudi commercial and customs records

The VIN, model year, trim and powertrain description must be consistent across the invoice, conformity application and shipping documents. A mismatch can delay clearance even when the physical car is acceptable.

## A Practical Import Timeline

Start with compliance, not freight. Model verification and the SABER/inspection process happen before loading; production or stock preparation, PDI and export documents follow. Ocean transit and Saudi customs timing then depend on the sailing, port and document accuracy. Build contingency into the sales promise instead of advertising a fixed delivery date before the certificate is issued.

EV Auto Pro can prepare China-side export documents, VIN-level inspection photos and a shipment proposal for Dammam or Jeddah. The Saudi importer or its licensed broker remains responsible for final local declarations and should verify current charges directly with ZATCA.

## Confirm the Saudi Route Before Paying a Deposit

Send the target model, quantity, destination city and preferred port. We will return a China-side vehicle quotation, available specification and document checklist so your Saudi conformity body and broker can validate the route before the cars ship.

**Official references:** [SASO Certificates of Conformity](https://saso.gov.sa/en/sectors/certificates/compliance_certificate/pages/default.aspx) · [SASO vehicle import service announcement](https://saso.gov.sa/ar/mediacenter/news/Pages/saso-news-1473.aspx) · [ZATCA Vehicle Import Controls](https://zatca.gov.sa/en/RulesRegulations/Taxes/Pages/customs-individual/import-vehicles.aspx).

**Talk to us:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%20need%20a%20Saudi%20Arabia%20vehicle%20import%20quote%20with%20SABER%20requirements) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com).`,
    faqs: [
      { q: 'Do cars imported into Saudi Arabia need SABER certification?', a: 'The importer should use the SABER vehicle-import service before shipping, select an accepted inspection body and obtain the vehicle shipment conformity certificate. Electric vehicles also fall under SASO electric-vehicle conformity requirements. Confirm the route for the exact model and VIN before loading.' },
      { q: 'How much does Saudi vehicle conformity certification cost?', a: 'There is no dependable universal flat fee. Cost varies by vehicle category, assessment body, inspection location, shipment size and any additional testing. Request the live amount shown by SABER and a written inspection-body quotation before signing the vehicle order.' },
      { q: 'Should Chinese cars ship to Dammam or Jeddah?', a: 'Dammam usually fits the Eastern Province and many Riyadh-bound shipments; Jeddah fits western Saudi destinations. Compare the complete delivered cost, sailing schedule, terminal charges and inland trucking rather than ocean freight alone.' },
      { q: 'Are right-hand-drive cars allowed for Saudi registration?', a: 'Saudi Arabia is a left-hand-drive market, and ZATCA prohibits importing vehicles whose steering has been converted from right to left. Order a factory left-hand-drive specification and confirm Saudi conformity before shipment.' },
      { q: 'Which Chinese powertrain is practical for Saudi Arabia?', a: 'BEVs can suit buyers with dependable home or workplace charging in major cities. For long intercity driving and uneven charging access, EREV or PHEV models such as Deepal S07/S09 or Jetour T2 provide fuel backup, subject to VIN-level Saudi certification.' },
    ],
    related: ['chinese-car-dealers-uae-vs-direct-import-2026', 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'how-to-verify-a-chinese-car-exporter-before-you-pay'],
  },

  '2026-china-nev-export-rules-guide': {
    slug: '2026-china-nev-export-rules-guide',
    category: 'industry',
    categoryLabel: 'Industry & Policy',
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
    categoryLabel: 'Model Comparison',
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
    category: 'market',
    categoryLabel: 'Market & Import',
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
    slug: 'geely-coolray-export-deep-dive', category: 'market', categoryLabel: 'Market & Import',
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
    slug: 'jetour-t2-vs-geely-coolray-africa', category: 'product', categoryLabel: 'Model Comparison',
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
    slug: 'deepal-s07-alternatives', category: 'product', categoryLabel: 'Model Comparison',
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
    slug: 'changan-uni-t-vs-uni-z-comparison', category: 'product', categoryLabel: 'Model Comparison',
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
    slug: 'china-vs-japan-vs-usa-models', category: 'product', categoryLabel: 'Model Comparison',
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
    slug: 'import-chinese-cars-to-ghana', category: 'market', categoryLabel: 'Market & Import',
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
    slug: 'mg-zs-vs-geely-coolray-africa', category: 'product', categoryLabel: 'Model Comparison',
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
    expertInsight: 'For most Chinese-EV import markets, EREV outperforms pure BEV where charging infrastructure is still developing — it delivers full electric-driving character with zero range-anxiety risk. BEV wins where charging is reliable and running cost matters most; ICE and HEV still lead in markets with little to no charging network. Match the powertrain to the destination city, not the country average.',
    hero: '/images/faq-hero.webp',
    date: '2026-07-09 09:00:00', readMin: 11,
    body: `The right EV powertrain to import is not "the best one" — it is whichever one matches the charging infrastructure and climate at your destination. A BEV that sells well in the UAE's growing charging network can sit unsold in a market with patchy grid coverage, while an EREV that looks like a compromise on paper solves the exact anxiety that stops a hesitant buyer from signing. This guide breaks down all five powertrain types EV Auto Pro ships, when each one wins, and which of our in-stock models fit which market.

## The Five Powertrain Types, Defined

**BEV (Battery Electric Vehicle)** — no combustion engine at all, runs entirely on battery power, plugs in to recharge. Best fit: markets with reliable home or public charging and moderate climate. Zero tailpipe emissions, lowest running cost per km, but range and charging speed depend entirely on grid access.

![Deepal S05 battery-electric SUV — 510 km CLTC range, real production unit](/images/vehicles/evautopro-deepal-s05-appearance-01.webp)

**PHEV (Plug-in Hybrid Electric Vehicle)** — a combustion engine paired with a mid-sized battery (typically 15-35 kWh) that plugs in and covers daily driving on electricity alone, with the engine taking over for longer trips. Best fit: markets where charging exists but isn't universal — buyers get electric commuting most days with zero range anxiety on a road trip.

![Jetour T2 PHEV — 7-seat adventure SUV, 34.5 kWh battery, real production unit](/images/vehicles/evautopro-jetour-t2-appearance-02.webp)

**EREV (Extended-Range Electric Vehicle)** — drives like a BEV day-to-day (100% electric drive, no mechanical connection from engine to wheels), but carries a small combustion engine that only generates electricity to extend range once the battery runs low. Best fit: cold climates and markets with limited charging — buyers get a genuinely electric driving experience with none of the range anxiety.

![Deepal S07 EREV — 200 km CLTC electric range plus 1,000 km+ combined, real production unit](/images/vehicles/evautopro-deepal-s07-appearance-01.webp)

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

![Matrix chart: powertrain fit by market — EREV and ICE strong in cold CIS, PHEV and EREV strong in the Gulf, HEV and ICE strong in Africa](/images/news/powertrain-matrix.svg)

## Region-by-Region Fit

**Russia and Central Asia (cold climate, uneven charging build-out).** Battery range drops meaningfully in sub-zero temperatures, and public charging is concentrated in major cities. This is exactly why EREV performs well here — [Deepal S07](/cars/deepal-s07/) and [Deepal S09](/cars/deepal-s09/) give buyers real electric-driving character with a combustion engine as a safety net, so a cold snap or a trip outside city limits never strands the car. Straight ICE models remain the volume play for budget-conscious buyers — [Changan CS55 Plus](/cars/changan-cs55-plus/) is our fastest-moving model in the region for exactly that reason.

**Middle East and Gulf (hot climate, fast-growing but uneven charging network).** The Gulf's charging network is expanding quickly in the UAE and Saudi Arabia but is still inconsistent outside major cities, and extreme heat affects battery thermal management. EREV again solves the anxiety without asking the buyer to gamble on infrastructure that's still being built — the same logic that makes it a top seller for us in Russia applies here. PHEV models like the [Jetour T2](/cars/jetour-t2/) also perform well for buyers who want electric commuting with combustion-engine road-trip range.

**Africa (charging infrastructure still early-stage across most markets).** Outside a handful of major cities, public charging is minimal. HEV and ICE dominate for good reason — buyers need a vehicle that works identically to what they already know, with better fuel economy as the only change. This is where models like [Geely Coolray](/cars/geely-coolray/) do the heaviest volume.

**Latin America (mixed — strong in a few urban centers, thin elsewhere).** Similar logic to Africa outside major metro areas, with pockets (particularly Brazil's larger cities) where PHEV and BEV are becoming viable. Match the powertrain to the specific city or region you're importing into rather than treating the whole country as one market.

![Extended-range electric SUV driving on a snowy northern highway](/images/news/powertrain-2.webp)

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

![Battery-electric and hybrid Chinese SUVs lined up at an export yard, one charging](/images/news/powertrain-1.webp)

## Does Powertrain Type Affect Import Duty?

Often, yes — and the rules change faster than most buyer guides acknowledge. Kazakhstan is a concrete, current example: EVs still clear at 0% import duty under Kazakhstan's WTO commitments, but the country's duty-and-VAT-free EV quota was exhausted in October 2025, and VAT on vehicle imports rose to 16% from January 2026. A PHEV or EREV may be classified differently from a pure BEV in the same market, which changes the total landed cost math significantly.

**Don't assume your market's rules from a general guide — including this one.** Duty and VAT treatment by powertrain type varies by country and changes on government timelines outside anyone's control. Confirm current rates for your specific destination before finalizing an order; we track this for our active markets and will flag anything relevant when you request a quote.

## How to Decide

1. **Start with charging infrastructure at your specific destination city**, not the country average — a capital city and a secondary market in the same country can have completely different answers.
2. **Factor in climate** — cold climates lose meaningful BEV range in winter; extreme heat affects battery thermal management. Both push toward EREV or PHEV over pure BEV unless charging is genuinely reliable.
3. **Match to your buyer's actual driving pattern** — short urban commutes favor BEV/PHEV; long-distance or unpredictable routes favor EREV/HEV/ICE.
4. **Check current duty and VAT treatment** for your destination before pricing — see the section above.
5. **Consider mixing powertrains in one order.** A 40HQ container fits multiple models — many of our dealers stock an ICE volume model alongside one EREV or PHEV model to test electrified demand without betting the whole order on it.

## Get a Powertrain Recommendation for Your Market

Guessing wrong on powertrain is expensive — a container of the wrong technology sits unsold while a competitor with the right one turns their stock in weeks. You don't have to guess. Tell us your destination city, climate and buyer profile, and we'll recommend which of our in-stock BEV, PHEV, EREV or ICE models fits — with a landed-cost quote attached.

**Talk to us now:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27d%20like%20powertrain%20recommendations%20for%20my%20market) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com) — we reply within 24 hours, usually faster.`,
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
    category: 'market', categoryLabel: 'Market & Import',
    title: 'How to Import Cars from China to Kazakhstan (2026): Duty, VAT, Recycling Fee & Process',
    excerpt: 'The rules changed hard in 2025–26: the EV duty-free quota is gone and VAT rose to 16%. Here is the current landed-cost math, document list, and step-by-step process for dealers importing from China.',
    expertInsight: 'Importing a car from China to Kazakhstan in 2026 costs duty (0% on EVs under WTO terms, 15% on combustion cars), 16% VAT from January 2026, and a power/age-based recycling fee — the EV duty-free quota that made this route especially cheap was exhausted in October 2025. Vehicles cleared at the 0% EV tariff cannot legally be re-exported to Russia or other EAEU states.',
    hero: '/images/vehicles/evautopro-geely-coolray-01.webp',
    date: '2026-07-09 11:00:00', readMin: 10,
    body: `Importing a car from China to Kazakhstan in 2026 means budgeting for four things: the customs duty (0% on electric vehicles under WTO terms, 15% on combustion cars for companies), 16% VAT from January 2026, the recycling fee (утильсбор), and — for combustion engines — excise. The single biggest change dealers miss is that Kazakhstan's duty-and-VAT-free EV quota was exhausted in October 2025, so an electric car no longer clears free. This guide breaks down the real landed cost, the documents you need, and the route from a Chinese port to Almaty.

## What Changed in 2025–26

Kazakhstan spent two years as one of the most attractive EV import markets in the region — a quota let the first 15,000 electric vehicles in at 0% duty and 0% VAT. That window is now closed:

- **The 15,000-unit EV quota was exhausted around 15 October 2025.** After it, VAT applies to electric vehicle imports.
- **VAT rose to 16% from 1 January 2026** across vehicle categories (it was 12%).
- **The 0% customs tariff on EVs still applies** under Kazakhstan's WTO commitments — but only if the vehicle stays in Kazakhstan.

That last point is the trap most guides skip.

![Passenger cars secured on an export block train bound for Central Asia](/images/news/kazakhstan-1.webp)

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

![Deepal S05 interior — 14.6-inch floating touchscreen, real production unit](/images/vehicles/evautopro-deepal-s05-console-01.webp)

| Line item | Approx. (USD) |
| --- | --- |
| FOB China | 19,200 |
| Ocean/rail freight + insurance to KZ | ~2,000 |
| Customs duty (0%, BEV under WTO) | 0 |
| VAT 16% (on CIF + duty) | ~3,390 |
| Recycling fee (EV coefficient) | confirm current MRP |
| **Indicative landed, before recycling fee** | **~24,600** |

![Chart: landed-cost breakdown of a battery-electric Deepal S05 to Kazakhstan — FOB, freight and 16% VAT totalling about $24,590 before the recycling fee](/images/news/kazakhstan-cost.svg)

A combustion equivalent like the [Changan CS55 Plus](/cars/changan-cs55-plus/) (~$14,500 FOB) carries the 15% duty and engine-based excise on top, so run the math per powertrain — the cheaper FOB doesn't always win once duty and excise are added. Not sure which powertrain fits Kazakhstan's climate and charging reality? See our guide on [which powertrain to import for your market](/news/bev-vs-phev-vs-erev-vs-hybrid-which-to-import/).

![Changan CS55 Plus — Changan's best-selling export SUV, real production unit](/images/vehicles/evautopro-changan-cs55-plus-appearance-01.webp)

## Step-by-Step Process

1. **Confirm the model and powertrain** for the Kazakhstan market, and get a firm FOB/CIF quote.
2. **Sign the contract and pay the deposit** (T/T 30% is standard; L/C at sight accepted).
3. **Pre-shipment inspection** — every unit is inspected, photographed and documented before loading.
4. **Ship via the Khorgos land border or block train** to Almaty / Aktau — the block-train route is usually the most economical for Central Asia and avoids sea freight entirely.
5. **Customs clearance in Kazakhstan** — declare, pay duty (0% BEV / 15% ICE), 16% VAT, recycling fee and any excise; register the vehicle.
6. **Delivery** to your city.

We handle the China-side export and documentation; a local broker or your own team handles Kazakhstan clearance, and we can recommend partners.

![Imported vehicles at a customs clearance yard in Kazakhstan](/images/news/kazakhstan-2.webp)

## Documents You Need

- Commercial Invoice and Packing List
- Bill of Lading / rail waybill (CMR for truck)
- Certificate of Origin
- Export declaration (China side)
- Certificate of Conformity / EAC where required
- Vehicle passport / SBKTS for registration in Kazakhstan

![Container gantry cranes at the Khorgos dry port on the China–Kazakhstan border](/images/news/kazakhstan-3.webp)

## Common Traps

- **Assuming EVs still clear free.** The quota is gone; budget 16% VAT.
- **Planning to re-export to Russia.** The 0%-tariff Kazakhstan-only clause blocks it.
- **Forgetting the recycling fee.** It's tied to the current MRP and engine/age coefficient — confirm it before quoting a retail price.
- **Using an old customs calculator.** Rates changed in October 2025 and January 2026; verify against current figures for your exact model and date.

## Confirm Before You Order

Duty, VAT and the recycling fee in Kazakhstan changed twice in the last year and can change again on government timelines. Treat this guide as orientation, not a final quote — confirm current rates for your specific model and import date before finalizing. We track the numbers for our active [Kazakhstan buyers](/markets/kazakhstan/) and will flag anything relevant with your quote.

**Sources & further reading:** [U.S. International Trade Administration — Kazakhstan Import Tariffs](https://www.trade.gov/country-commercial-guides/kazakhstan-import-tariffs) · [PwC Tax Summaries — Kazakhstan, Other Taxes](https://taxsummaries.pwc.com/kazakhstan/corporate/other-taxes). Always confirm current figures with Kazakhstan customs (КГД) or a licensed broker before ordering.

## Lock In Today's Numbers Before They Move Again

Kazakhstan's rules have already changed twice in the last year — the quota closed, then VAT rose. Waiting rarely makes the math better. If Almaty or Aktau is your market, send us your target model and quantity and we'll return a full landed-cost quote — FOB, freight, duty and current VAT — so you're pricing against real numbers, not last year's.

**Talk to us now:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27d%20like%20a%20Kazakhstan%20landed-cost%20quote) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com) — we reply within 24 hours, usually faster.`,
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
    category: 'market', categoryLabel: 'Market & Import',
    title: 'Importing Cars from China to Russia in 2026: The Recycling Fee Reform and the 160 HP Line',
    excerpt: 'Russia now ties the recycling fee (утильсбор) to engine power, with the preferential rate kept only up to 160 hp. Here is what that means for landed cost, and where the popular Chinese SUVs actually sit.',
    expertInsight: 'Since December 2025, Russia\'s vehicle recycling fee scales with engine power, and the preferential rate applies only up to 160 hp — above that line the fee rises sharply on top of the existing 15% import tariff and VAT. Nearly every popular Chinese export SUV (177–462 PS) sits above that line, so the fee must be modelled per model, not assumed from FOB price alone.',
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

![Roll-on roll-off car carrier vessel loaded with vehicles at port](/images/news/russia-1.webp)

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

![Chart: Chinese SUV engine power in PS versus Russia's 160 hp recycling-fee preferential line — every current model sits above it](/images/news/russia-160hp.svg)

![Changan CS55 Plus — Changan's fastest-moving volume SUV in Russia, real production unit](/images/vehicles/evautopro-changan-cs55-plus-appearance-02.webp)

![Deepal S09 flagship EREV — 462 PS, real production unit](/images/vehicles/evautopro-deepal-s09-appearance-01.webp)

## What This Means for Your Landed Cost

Three practical consequences:

1. **Budget the fee explicitly, per model.** Because it scales with power, a 462 PS flagship carries a very different fee from a 177 PS compact — the gap can outweigh differences in FOB price.
2. **Compare on landed cost, not FOB.** A cheaper sticker price above 160 hp can land higher than a slightly pricier lower-power car. Run the full math.
3. **The fee hits every importer equally.** Chinese brands still hold the majority of Russia's market. The reform raises everyone's cost, so your competitiveness is relative — the dealers who model the fee accurately and price for it keep their margin; the ones who don't get squeezed.

## Should You Still Import to Russia?

Yes — with eyes open. Chinese vehicles continue to dominate Russian sales, and demand is real. The change is not a ban; it is a cost increase aimed at favouring local assembly. What it rewards is precision: pick models deliberately, model the recycling fee for each one before ordering, and price your retail to absorb it. Guessing is what loses money now.

![Rows of new Chinese SUVs in a snow-dusted dealer inventory yard](/images/news/russia-2.webp)

Not sure which models and powertrains fit Russia's cold climate and this cost structure? See our guide on [which powertrain to import for your market](/news/bev-vs-phev-vs-erev-vs-hybrid-which-to-import/), or send your target city and volume for a landed-cost breakdown.

## Confirm Before You Order

Russia's recycling fee has changed several times and is indexed annually — the exact figure for a given model and date moves. Treat this as orientation, not a final quote. We track current rates for our active [Russia buyers](/markets/russia/) and include the fee in the landed-cost math with every quote.

**Sources & further reading:** [The Moscow Times — importers rush to beat the recycling-fee hike](https://www.themoscowtimes.com/2025/11/17/thousands-of-car-carriers-backed-up-at-russias-borders-as-importers-rush-to-beat-fee-hike-a91137) · [Interfax — recycling fee to rise for cars over 160 hp](https://interfax.com/newsroom/top-stories/112438/). Confirm the exact current coefficient for your model and date before pricing.

## Model Your Exact Fee Before You Order

The queues at Russia's borders in late 2025 were dealers who waited too long to model this fee — don't repeat that scramble. Send us your target model and volume and we'll return the full landed cost, recycling fee included, calculated against current rates rather than a guess.

**Talk to us now:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27d%20like%20a%20Russia%20landed-cost%20quote%20including%20recycling%20fee) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com) — we reply within 24 hours, usually faster.`,
    faqs: [
      { q: 'How is Russia\'s recycling fee calculated in 2026?', a: 'Since December 2025 it is tied to engine power on a progressive scale, with the preferential (lower) rate kept only for cars up to 160 hp. Above 160 hp the fee rises sharply. It is indexed 10–20% annually and sits on top of the 15% import tariff and VAT.' },
      { q: 'Do most Chinese SUVs fall under the 160 hp preferential band?', a: 'No. Most modern Chinese SUVs — including the popular export models — produce well over 160 hp (typically 177–260 PS, and much higher for PHEV/EREV flagships), which places them above the preferential band where the fee is highest. Budget the fee explicitly per model.' },
      { q: 'Is it still worth importing Chinese cars to Russia in 2026?', a: 'Yes, with careful cost modelling. Chinese brands still hold the majority of Russian car sales and demand is strong. The recycling fee reform raises cost for everyone importing finished cars, so competitiveness is relative — model the fee per unit and price retail to absorb it.' },
      { q: 'Does the recycling fee apply to electric vehicles too?', a: 'Yes, the recycling fee applies across categories, with the scale tied to the vehicle. Confirm the current coefficient for the specific model and date before pricing, as rates are indexed and have changed repeatedly.' },
      { q: 'Can EV Auto Pro include the recycling fee in a quote?', a: 'We track current Russia rates and include the recycling fee in the landed-cost math with every quote. Send your target model, city and volume and we\'ll break it down.' },
    ],
    related: ['bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'top-7-chinese-suv-for-russia-2026', 'import-cars-from-china-to-kazakhstan-2026'],
  },

  'how-to-verify-a-chinese-car-exporter-before-you-pay': {
    slug: 'how-to-verify-a-chinese-car-exporter-before-you-pay',
    category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'How to Verify a Chinese Car Exporter Before You Pay (2026 Dealer Checklist)',
    excerpt: 'Before you wire a deposit to a Chinese car supplier, run these seven checks. They separate a MOFCOM-authorized exporter from a grey-market reseller — and protect your money.',
    expertInsight: 'A legitimate Chinese car exporter can produce a MOFCOM authorized-exporter licence number, invoices from a company bank account matching that same registered name, and offers pre-shipment photo/video inspection as standard — a grey-market reseller usually fails at least one of these. The single biggest red flag is a mismatch between the invoicing company and the bank account receiving payment.',
    hero: '/images/news/russia-1.webp',
    date: '2026-07-07 10:00:00', readMin: 9,
    body: `Before wiring a deposit to any Chinese car exporter, verify seven things: their MOFCOM export licence, an OEM authorization or dealer channel, the company registration behind the bank account, a pre-shipment inspection commitment, the full export document set, realistic payment terms, and traceable references. The single biggest loss in this trade is a deposit sent to a company that turns out to be a grey-market reseller — or not a company at all. This checklist is how a professional importer avoids that.

## The Fastest Signal: Authorized Exporter Status

China requires anyone exporting passenger vehicles to hold **MOFCOM authorized exporter registration**. A legitimate exporter can show you that registration number, and you can verify it through the Chinese embassy or consulate in your country. Grey-market resellers — who buy from domestic dealers and ship without authorization — cannot. Ask for it first; if the answer is vague, stop there.

## The 7-Point Verification Checklist

| # | Check | What to ask for | Red flag |
| --- | --- | --- | --- |
| 1 | Export licence | MOFCOM authorized exporter certificate + number | "We don't need one" / can't produce it |
| 2 | OEM channel | Dealer authorization or a named OEM supply relationship | Claims to sell every brand with no proof of any |
| 3 | Company identity | Business licence; the name must match the bank account | Bank account is a personal name, not the company |
| 4 | Inspection | Written commitment to pre-shipment photo & video PDI | Refuses inspection or "trust us" only |
| 5 | Documents | Sample Invoice, Packing List, B/L, CO, CoC | Can't show a real document set |
| 6 | Payment terms | T/T 30% deposit + 70% before shipment, or L/C | Demands 100% up front to a personal account |
| 7 | References | Contactable dealers in your region + delivery proof | No references, no verifiable track record |

## Match the Bank Account to the Company

This is where money is lost. A legitimate exporter invoices from a registered company and receives payment to a **company bank account in that same name**. If the proforma invoice says one company but the bank details are a personal account or an unrelated third party, treat it as a stop sign — no matter how good the price. Insist the beneficiary name on the wire matches the business licence.

## Payment Terms That Protect You

Standard, safe terms in this trade:

- **T/T 30% deposit + 70% before shipment** — you pay the balance once the vehicle is prepared and (ideally) after you've seen the pre-shipment inspection report.
- **L/C at sight** from a major bank — the bank releases funds only against correct shipping documents.

A supplier demanding **100% payment up front**, especially to a personal account, is asking you to carry all the risk. Real exporters don't need that; they have the working capital and the track record.

## Insist on Pre-Shipment Inspection

A serious exporter inspects every unit before loading and sends you a **photo and video report of your actual cars** — not stock images. This is your proof the vehicle exists, matches the order, and is undamaged before your balance payment leaves your account. If a supplier resists inspection or only offers brochure photos, that tells you what you need to know. You can also commission an independent third-party inspection (SGS or similar) at your cost.

## The Documents a Real Exporter Provides

Ask to see a **sample set** up front — a legitimate exporter has these ready:

- Commercial Invoice and Packing List
- Bill of Lading (or rail waybill / CMR)
- Certificate of Origin
- Certificate of Conformity (and market certifications: EAC / GCC / etc.)
- Export declaration

If they can't produce a specimen of these, they haven't shipped legally before.

## Key Takeaways

- **Ask for the MOFCOM export licence number first** — it's the quickest way to separate a real exporter from a reseller.
- **The bank account name must match the invoicing company.** Personal-account payment is the top scam signal.
- **Never pay 100% up front.** T/T 30/70 or L/C at sight are the safe standards.
- **Demand a photo & video inspection of your actual units** before the balance payment.
- **No verifiable references or documents = walk away**, regardless of price.

## How EV Auto Pro Checks Out

We hold **MOFCOM authorized exporter status and AEO customs certification since 2018**, with direct dealer relationships across 6 OEMs (Changan, Deepal, Qiyuan, Geely, VW China, Jetour). Every order runs the [EV Auto Pro Export PDI](/services/inspection/) with a photo and video report before loading, on standard T/T 30/70 or L/C terms, with the full document set provided.

## Put Us Through the Checklist

Don't take our word for it — ask us to prove every item above before you commit a deposit anywhere. Pick a target model from our [in-stock vehicle lineup](/cars/) and tell us your destination; we'll send our MOFCOM licence number, a sample document set, and a reference you can call.

**Talk to us now:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27d%20like%20to%20verify%20your%20export%20credentials%20before%20ordering) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com) — we reply within 24 hours, usually faster.`,
    faqs: [
      { q: 'How do I verify a Chinese car exporter is legitimate?', a: 'Ask for their MOFCOM authorized exporter certificate and number (verifiable via the Chinese embassy/consulate), confirm the invoicing company matches the bank account name, require a pre-shipment photo & video inspection, and check contactable references with delivery proof. A legitimate exporter passes all of these; a grey-market reseller usually cannot show the export licence.' },
      { q: 'What is the safest way to pay a Chinese car supplier?', a: 'T/T 30% deposit + 70% before shipment (ideally after you receive the pre-shipment inspection report), or an L/C at sight from a major bank. Never pay 100% up front, and never wire to a personal bank account that does not match the invoicing company name.' },
      { q: 'What is the biggest red flag when buying cars from China?', a: 'A mismatch between the invoicing company and the bank account — especially a personal account — is the top scam signal. Others: a supplier who cannot produce a MOFCOM export licence, refuses inspection, demands 100% up front, or has no verifiable references.' },
      { q: 'Should I pay for a third-party inspection?', a: 'A serious exporter already includes a pre-shipment photo & video inspection of your actual units at no charge. For extra assurance, especially on a first order or a large one, an independent third-party inspection (SGS or similar) at your cost is a reasonable safeguard.' },
      { q: 'What documents should a Chinese car exporter provide?', a: 'Commercial Invoice, Packing List, Bill of Lading (or rail waybill/CMR), Certificate of Origin, Certificate of Conformity, and the relevant market certifications (EAC, GCC, etc.). Ask for a sample set up front — a legitimate exporter has these ready.' },
    ],
    related: ['2026-china-nev-export-rules-guide', 'import-cars-from-china-to-kazakhstan-2026', 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import'],
  },

  'chinese-car-dealers-uae-vs-direct-import-2026': {
    slug: 'chinese-car-dealers-uae-vs-direct-import-2026',
    category: 'market', categoryLabel: 'Market & Import',
    title: 'Chinese Car Dealers in the UAE vs Direct Import from China: A 2026 Buyer\'s Guide',
    excerpt: 'The UAE now has official distributors for every major Chinese brand — and a thriving direct-import channel through Jebel Ali. Which one you should use depends entirely on who you are: retail buyer, fleet operator, or trader.',
    expertInsight: 'UAE buyers who contact me usually start by asking for a price — but the first question should be channel. A retail buyer in Dubai is almost always better served by the official distributor (warranty, service, finance); a fleet operator, wholesale trader or re-exporter is usually better served importing directly from China, where the same vehicle typically lands 15–25% cheaper through Jebel Ali. This guide maps both channels honestly.',
    hero: '/images/vehicles/evautopro-jetour-t2-01.webp',
    date: '2026-07-10 09:00:00', readMin: 12,
    body: `The UAE is the most mature market in the Gulf for Chinese vehicles — Jetour became the best-selling Chinese brand in the country in 2024, and every major Chinese OEM now has an official distributor network. That maturity gives buyers a real choice: buy locally from an official dealer, or import directly from China through Jebel Ali. This guide covers both channels — who each one is genuinely right for, the real cost structure, and where a China-side exporter like us honestly fits (and where we don't).

## Why the UAE Is Different from Other Import Markets

Three things make the UAE unlike Russia, Central Asia or Africa for Chinese-car buyers:

- **Official networks are already built.** Most major Chinese brands have signed established UAE dealer groups — this is not a grey-market-only country.
- **Jebel Ali is a re-export hub.** A large share of vehicles entering the UAE do not stay there; they move on to Africa, the wider GCC and CIS. That trade runs on direct import, not showrooms.
- **Import costs are low.** Customs duty on passenger vehicles is approximately 5%, plus 5% VAT — among the lowest of any market we ship to. The gap between "official retail price" and "direct-import landed cost" is therefore mostly distributor margin, not tax.

## The Official Chinese-Brand Distributors in the UAE

These are the established official channels as of early 2026 — verified against UAE motoring directories:

| Brand | Official UAE channel | Known for |
| --- | --- | --- |
| Jetour | The Elite Cars (Dubai) | Best-selling Chinese brand in the UAE, 2024 |
| Geely | AGMC | Established multi-brand dealer group |
| BYD | Al-Futtaim | EV & hybrid retail network across emirates |
| Chery | AW Rostamani Group | Value-focused lineup |
| Zeekr | AW Rostamani Group | Premium EV positioning |

![Jetour T2 — the best-selling Chinese brand in the UAE in 2024, real production unit](/images/vehicles/evautopro-jetour-t2-appearance-03.webp)

**Best for:** private buyers, small businesses buying 1–3 vehicles for own use, anyone who wants local warranty, service network, registration support and bank financing in one place.

**Not ideal for:** wholesale buyers, fleet operators buying 5+ units, and re-export traders — the distributor margin that pays for showrooms and service networks is exactly the cost you're trying to avoid.

## When You Should Just Buy from a Local UAE Dealer

Honest answer first: **if you are a retail buyer in the UAE, buy from the official distributor.** You get GCC-spec warranty honored locally, established service, and finance. Direct import saves you real money only when you can spread the fixed effort (shipping, clearance, registration) across multiple units — for one family car, the saving rarely justifies the process. We say this as a China-side exporter: single-vehicle retail buyers are not our customer, and anyone telling you otherwise is selling you complexity you don't need.

## Direct Import from China: How the Channel Works

For dealers, fleets and traders, the direct channel is straightforward and mature:

- **Route:** RoRo or container from Shanghai/Ningbo to Jebel Ali. Container transit is typically 2–4 weeks depending on sailing.
- **Costs on arrival:** ~5% customs duty + 5% VAT on CIF value. GCC conformity certification required — our UAE-bound units ship GCC-certified.
- **Real CIF Jebel Ali reference lanes from our current catalog:** [Geely Coolray](/cars/geely-coolray/) $15,200–20,200 · [Deepal S05](/cars/deepal-s05/) $21,200–27,200 · [Jetour T2](/cars/jetour-t2/) $24,200–30,800 · [Deepal S07](/cars/deepal-s07/) $26,800–34,800.
- **Volume logic:** MOQ from 1 unit, but the channel's economics shine from 3–5 units up — many of our UAE buyers run mixed containers (e.g., two T2 + one S07).

![Matrix chart: powertrain fit by market — EREV and PHEV are strong fits for the Gulf](/images/news/powertrain-matrix.svg)

Heat matters here: the Gulf's charging network is growing but uneven, which is why **EREV models** ([Deepal S07](/cars/deepal-s07/), [S09](/cars/deepal-s09/)) do so well — full electric driving character with no charging-network dependence. See our [powertrain-by-market guide](/news/bev-vs-phev-vs-erev-vs-hybrid-which-to-import/) for the full logic.

![Deepal S07 EREV interior — Snapdragon 8295 cockpit, real production unit](/images/vehicles/evautopro-deepal-s07-console-02.webp)

## Local Dealer vs Direct Import: Decision Matrix

| Criterion | Official UAE distributor | Direct import from China |
| --- | --- | --- |
| Best for | Retail, 1–3 units, own use | Dealers, fleets, re-export, 3+ units |
| Price | Retail incl. distributor margin | Typically 15–25% lower landed |
| Lead time | Immediate (in stock) | 4–7 weeks door to port |
| Warranty | Local, honored at dealer network | Factory-backed via exporter/partners |
| Finance | Bank finance available | T/T or L/C, trade terms |
| Customization | Showroom options only | Factory trims, colors, batch config |
| Re-export | Not designed for it | Built for it (Jebel Ali hub) |

## Where EV Auto Pro Fits

I run EV Auto Pro, so I'll be direct: **we are a China-side authorized exporter, not a UAE dealership.** We don't compete with The Elite Cars or Al-Futtaim for retail customers — and won't pretend to. Where we fit is the trade channel: dealers and fleet buyers importing 3+ units, re-exporters using Jebel Ali as a hub, and buyers who want factory trims or models the official networks don't stock. Every unit ships GCC-certified with our [photo & video pre-shipment inspection](/services/inspection/), on T/T 30/70 or L/C terms, 12–25 day dispatch from deposit.

![Geely Coolray — top-3 Chinese compact SUV in the UAE, real production unit](/images/vehicles/evautopro-geely-coolray-appearance-03.webp)

**Cai's field note:** the most common mistake I see from first-time UAE trade buyers is comparing our CIF price against the official showroom price and assuming the whole gap is profit. Budget the 5% duty, 5% VAT, port handling and registration first — the honest gap is still healthy, but it's 15–25%, not 40%. Buyers who model it correctly re-order; buyers who don't, don't last.

## Confirm Before You Order

Distributor line-ups and UAE fees change — brands re-sign dealers, and GCC conformity requirements get updated. Treat this guide as orientation: confirm the current official distributor for any brand directly, and confirm current duty/VAT with UAE customs or your clearing agent. We track the trade-channel side daily for our active [UAE buyers](/markets/uae/).

**Sources & further reading:** [DubiCars — Chinese car dealers in the UAE: official list](https://www.dubicars.com/news/chinese-car-dealers-uae-official-list.html) · [Gulf News — Chinese carmakers sign UAE dealers](https://gulfnews.com/business/retail/in-uae-chinese-carmakers-are-gunning-for-market-share-as-byd-exeed-geely-sign-dealers-1.94631103) · [DriveArabia — guide to Chinese makes in the UAE](https://www.drivearabia.com/news/2025/08/08/chinese-cars-a-guide-to-all-available-makes-in-the-uae/).

## Get a Trade-Channel Quote for the UAE

If you're buying at trade volume — dealer stock, fleet, or re-export through Jebel Ali — send us your target models and quantity. We'll return CIF Jebel Ali pricing with GCC certification, current duty/VAT math, and container configuration, so you can compare the two channels on real numbers instead of showroom guesses.

**Talk to us now:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27d%20like%20a%20CIF%20Jebel%20Ali%20trade%20quote) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com) — we reply within 24 hours, usually faster.`,
    faqs: [
      { q: 'Who are the official Chinese car distributors in the UAE?', a: 'As of early 2026: Jetour is sold through The Elite Cars in Dubai, Geely through AGMC, BYD through Al-Futtaim, and Chery and Zeekr through AW Rostamani Group. Line-ups change as brands re-sign dealers, so confirm directly with the brand before relying on this.' },
      { q: 'Is it cheaper to import a Chinese car directly from China to the UAE?', a: 'At trade volume, yes — typically 15–25% lower landed cost than official retail, because UAE import costs are low (~5% duty + 5% VAT) and the saving is mostly distributor margin. For a single retail vehicle, the saving rarely justifies the import process; buy from the official dealer instead.' },
      { q: 'What import duty and VAT apply to cars in the UAE?', a: 'Approximately 5% customs duty on the CIF value plus 5% VAT — among the lowest of any major import market. GCC conformity certification is required. Confirm current rates with UAE customs or your clearing agent before ordering.' },
      { q: 'How long does shipping take from China to Jebel Ali?', a: 'Container transit from Shanghai/Ningbo to Jebel Ali typically runs 2–4 weeks depending on sailing, plus 12–25 days production/dispatch lead time from deposit. Budget 4–7 weeks door to port overall.' },
      { q: 'Which Chinese models suit the UAE climate best?', a: 'Extreme heat plus an uneven charging network favors EREV models (like Deepal S07/S09 — electric driving with zero charging dependence) and proven ICE SUVs. Pure BEVs work well in Dubai and Abu Dhabi where charging is good. See our powertrain-by-market guide for the full decision framework.' },
    ],
    related: ['bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'how-to-verify-a-chinese-car-exporter-before-you-pay', 'import-cars-from-china-to-kazakhstan-2026'],
  },

  'import-cars-from-china-to-uzbekistan-2026': {
    slug: 'import-cars-from-china-to-uzbekistan-2026', category: 'market', categoryLabel: 'Market & Import',
    title: 'Import Cars from China to Uzbekistan (2026 Guide)',
    excerpt: 'Import cars from China to Uzbekistan with a current tariff check, vehicle conformity plan, recycling-fee budget and China-to-Tashkent rail route.',
    expertInsight: 'Uzbekistan is not an EAEU member, so a vehicle does not inherit Kazakhstan or Russia customs treatment: tariff, VAT, recycling fee and conformity must be calculated under Uzbek rules. Since September 2025, new M/N-category vehicles use the general wheeled-vehicle safety regulation for environmental compliance, while pure EVs are not assessed for an emissions category.',
    hero: '/images/vehicles/evautopro-deepal-s05-01.webp', date: '2026-07-12 14:00:00', readMin: 9,
    body: `To import cars from China to Uzbekistan in 2026, calculate the shipment under Uzbekistan's own customs system, not EAEU rules copied from Kazakhstan. Confirm the HS code in the State Customs Committee's Integrated Tariff service, add VAT, customs processing and the applicable vehicle recycling fee, then verify conformity for the exact model before dispatch. Pure electric vehicles are not assessed for an emissions category, but they still require the relevant vehicle-safety conformity process.

## Why Kazakhstan Rules Do Not Carry Into Uzbekistan

Uzbekistan is not a member of the Eurasian Economic Union. Clearing a car in Kazakhstan does not automatically make it duty-paid or registrable in Uzbekistan, and the Kazakhstan-only restriction on EVs cleared under Kazakhstan's WTO tariff is another reason not to treat Almaty clearance as a shortcut.

The practical route may still cross Kazakhstan, but that is **transit**, not Uzbek customs clearance. Keep the rail/road transit documents intact and clear the vehicle in Uzbekistan through the importer and its broker.

## What Changed in Vehicle Conformity?

Uzbekistan's Cabinet Resolution No. 597 of 19 September 2025 simplified environmental compliance for new category M and N vehicles. New imported vehicles are assessed under the General Technical Regulation on wheeled-vehicle safety. Combustion vehicles must still meet the Euro-4 requirement through an accredited conformity body; electric vehicles are not assessed against an emissions category.

That does not mean an EV has no compliance work. The importer still needs the model/VIN documents, safety conformity, customs declaration and registration documents. Ask the accredited body to confirm whether one vehicle, a batch or a model approval is being assessed before shipment.

![A vehicle inspector checking an SUV before export](/images/services/inspection.webp)

## How Should You Calculate Import Charges?

Do not publish or quote from an old “EV duty-free since 2019” blog without checking the live tariff. Uzbekistan's official Integrated Tariff service calculates treatment from HS code, origin, sending country and trading country. The Ministry of Investment also confirms that Uzbekistan levies a vehicle utilization/recycling fee under Cabinet decisions, with rates depending on vehicle category.

| Cost line | How to verify |
| --- | --- |
| Import duty | Query the current HS code in the official Integrated Tariff service |
| VAT | Confirm the current import VAT rate and taxable base with the broker |
| Recycling/utilization fee | Apply the live category/rate under Cabinet rules |
| Conformity | Quote from an accredited assessment body for the exact model |
| Freight | Rail/truck quote to the Uzbek terminal plus border handling |
| Registration | Local registration, inspection and plate charges |

The landed-cost sheet should identify BEV, PHEV/EREV and ICE separately. A pure EV's emissions treatment is simpler, but that fact alone does not prove every customs charge is zero.

## China to Tashkent: Which Route Works?

A common Central Asia plan uses rail or truck from China through the Khorgos/Altynkol corridor in Kazakhstan, then onward under transit to Uzbekistan. Direct China–Central Asia services and multimodal routings vary by origin city, wagon availability and border congestion.

![Freight train carrying vehicles and containers on a route bound for Central Asia](/images/news/kazakhstan-1.webp)

The image above shows a Central Asia-bound rail movement; it is not presented as an Uzbek customs terminal. For Tashkent buyers, compare:

| Route | Best for | Main risk |
| --- | --- | --- |
| Rail through Kazakhstan under transit | Container/batch dealer stock | Border transfer and document continuity |
| Truck from western China | Smaller or urgent lots | Higher unit cost and seasonal border delay |
| Mixed rail + road | Inland cities beyond rail terminal | More handoffs and damage-control points |

Request a through quote that names the final Uzbek terminal and says who pays transit, transfer, storage and last-mile trucking.

![New SUVs transported on a multi-level car carrier](/images/about/loading-3.webp)

## Which Powertrain Fits the Uzbek Market?

BYD's local production changes the competitive benchmark: an independent importer should not assume an imported China-market EV can win only on price. Localized models may have stronger parts, finance and registration support. Imported stock needs a clear reason to exist: unavailable trim, fleet specification, delivery window or a segment local production does not cover.

The [Deepal S05](/cars/deepal-s05/) is the only pure BEV in our ready-stock eight-model range, with FOB pricing from $19,200 to $24,500. It is the cleanest starting point where a buyer specifically wants a pure electric compact SUV. The [Jetour T2](/cars/jetour-t2/) PHEV offers fuel backup for buyers traveling beyond dependable charging, but its customs and emissions treatment must be calculated separately from a BEV.

![Deepal S05 battery-electric SUV exterior](/images/vehicles/evautopro-deepal-s05-appearance-02.webp)

![Jetour T2 cockpit and dashboard](/images/vehicles/evautopro-jetour-t2-console-01.webp)

**Best for:** dealers with a named Uzbek importer, an accredited conformity partner and a model positioned beyond locally assembled competition.

**Not ideal for:** speculative shipments based on an old blanket EV-tax exemption, or vehicles routed through Kazakhstan without a documented Uzbek transit and clearance plan.

## Documents to Prepare

- Commercial Invoice and Packing List with VINs
- Rail waybill/CMR and transit documents
- Certificate of Origin
- China export declaration
- Vehicle technical file and conformity evidence
- Importer's contract and customs registration
- Documents required for Uzbek vehicle registration

Keep model, powertrain and VIN descriptions identical across all documents. If the vehicle crosses Kazakhstan in transit, the transport documents must show Uzbekistan as the destination rather than implying local Kazakhstan clearance.

## Confirm the Live Tariff Before Ordering

Send us the model, quantity and destination city. We will provide the China-side quotation and vehicle file; your Uzbek broker can then run the exact HS code through the live tariff system before the deposit becomes non-refundable.

**Official references:** [Uzbekistan Integrated Tariff](https://tarif.customs.uz/en?lang=en_EN) · [Government conformity update](https://gov.uz/en/eco/news/view/87493) · [Ministry guidance on customs payments and utilization fee](https://gov.uz/en/miit/sections/view/12769).

**Talk to us:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%20need%20an%20Uzbekistan%20vehicle%20import%20quote) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com).`,
    faqs: [
      { q: 'Are electric cars duty-free in Uzbekistan in 2026?', a: 'Do not assume a blanket exemption from an older article. Run the exact BEV HS code, origin and transaction through Uzbekistan’s official Integrated Tariff service and confirm VAT and recycling fee with a licensed broker before ordering.' },
      { q: 'Do electric cars need environmental certification in Uzbekistan?', a: 'Under the September 2025 reform, electric vehicles are not assessed for an emissions category. They still require the applicable wheeled-vehicle safety conformity, customs and registration documents.' },
      { q: 'Can cars clear in Kazakhstan and then enter Uzbekistan duty-free?', a: 'No. Uzbekistan is not an EAEU member and applies its own customs rules. Kazakhstan may be a transit route, but the car must be declared and cleared under Uzbek law.' },
      { q: 'What is the usual China-to-Tashkent shipping route?', a: 'Rail or road commonly moves through the Khorgos/Altynkol corridor in Kazakhstan under transit, then onward to Uzbekistan. Compare a through rate that includes border transfer, terminal and last-mile charges.' },
    ],
    related: ['import-cars-from-china-to-kazakhstan-2026', 'top-7-chinese-suv-for-russia-2026', 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import'],
  },

  'import-cars-from-china-to-ethiopia-2026-ev-only': {
    slug: 'import-cars-from-china-to-ethiopia-2026-ev-only', category: 'market', categoryLabel: 'Market & Import',
    title: 'Import Electric Cars from China to Ethiopia (2026)',
    excerpt: 'Import electric cars from China to Ethiopia under the ICE-vehicle import ban, with EV tax verification, Djibouti logistics, charging and FX planning.',
    expertInsight: 'Ethiopia’s 2024 ban on gasoline- and diesel-vehicle imports remains part of its 2026 green-mobility policy, so the viable passenger-car channel is pure BEV—not PHEV or EREV. The opportunity is real, but weak public charging and foreign-exchange controls make long-range stock, charging support and bank-approved payment planning more important than headline FOB price.',
    hero: '/images/vehicles/evautopro-deepal-s05-01.webp', date: '2026-07-13 09:00:00', readMin: 9,
    body: `To import electric cars from China to Ethiopia in 2026, choose a pure battery-electric vehicle and verify the current customs treatment, foreign-exchange approval and charging plan before payment. Ethiopia banned imports of gasoline and diesel vehicles in February 2024; the government's 2025–2035 climate framework continues to describe Ethiopia as the first country to take that step. A PHEV or EREV still contains a fuel-burning engine, so it should not be assumed eligible.

## What Does the Fuel-Car Import Ban Cover?

The policy's purpose is to reduce fuel imports and accelerate electric mobility. Official Ethiopian climate material confirms the 2024 ICE-import ban and a target of 500,000 EVs on the road by 2033. For a commercial importer, the conservative compliance rule is simple:

- **Pure BEV:** the appropriate passenger-car product to evaluate.
- **PHEV:** do not ship without written Ethiopian customs approval; it has a gasoline engine.
- **EREV:** do not market as “electric-only” for import purposes; its range extender burns fuel.
- **ICE gasoline/diesel:** prohibited under the policy unless a documented exception applies.

The ban arrived quickly and caught some vehicles already in transit. That history makes written pre-clearance important: obtain the HS classification and admissibility decision before the vehicle leaves China.

![A vehicle undergoing a pre-shipment inspection](/images/services/inspection.webp)

## Which Ready-Stock Vehicle Fits?

The [Deepal S05](/cars/deepal-s05/) is the only pure BEV in EV Auto Pro's current eight-model ready-stock range. The S07 and S09 are EREVs, while Jetour T2 is a PHEV; none of those should be substituted into an Ethiopia EV-only quotation.

| Model | Powertrain | Ethiopia starting position |
| --- | --- | --- |
| Deepal S05 | Pure BEV | Evaluate for import |
| Deepal S07 | EREV with gasoline range extender | Do not recommend under EV-only policy |
| Deepal S09 | EREV with gasoline range extender | Do not recommend under EV-only policy |
| Jetour T2 | PHEV | Do not recommend under EV-only policy |

![Deepal S05 pure battery-electric SUV exterior](/images/vehicles/evautopro-deepal-s05-appearance-01.webp)

Our catalog lists the Deepal S05 at $19,200–$24,500 FOB. Other pure BEV models can be sourced to order through OEM channels, but availability, specifications and price must be quoted rather than implied as stock.

## What Taxes Apply to EV Imports?

Ethiopian tax policy has changed alongside the EV transition. Do not rely on a single percentage from a news article: the Customs Commission tariff, Ministry of Finance VAT/excise directives and any investment or fleet exemption must be checked for the importer and HS code at the order date.

| Cost line | Confirm with |
| --- | --- |
| Customs duty | Ethiopian Customs Commission tariff/classification |
| VAT and excise | Ministry of Finance directives and customs assessment |
| Port/transit | Djibouti agent and Ethiopian corridor operator |
| FX/bank cost | Importer's Ethiopian bank under current NBE directives |
| Charger | Plug standard, installation and local electrical approval |

The correct buyer promise is a documented landed-cost estimate, not “tax-free EV.” Where an exemption applies, retain the legal basis and approval in the shipment file.

## Djibouti Port to Addis Ababa

Landlocked Ethiopia relies heavily on the Djibouti corridor. Vehicles arrive by RoRo or container, clear/transit through Djibouti and move inland by rail or truck to Addis Ababa. The contract must state who handles Djibouti port charges, transit documents, Ethiopian customs and inland delivery.

![Vehicles being loaded on a RoRo vessel at a port](/images/news/russia-1.webp)

This is a generic RoRo loading image and is not represented as Djibouti. Compare RoRo for straightforward vehicle handling with container shipping where enclosed transport or mixed cargo is needed.

![An SUV secured inside a shipping container](/images/about/loading-2.webp)

## Charging Is the Main Commercial Constraint

Ethiopia's electricity is predominantly renewable, which strengthens the economic logic for EVs. Access is not the same as charging availability, however. Official and government-linked assessments acknowledge that charging infrastructure was extremely limited when the ban began. A dealer needs an operating plan, not just cars:

- prioritize buyers with home, depot or workplace charging;
- include compatible AC charging equipment and installation guidance;
- map realistic intercity charging before promising highway usability;
- hold diagnostic tools and high-voltage service training;
- explain that advertised test-cycle range is not guaranteed in every load, road and climate condition.

![Deepal S05 cockpit and dashboard](/images/vehicles/evautopro-deepal-s05-console-01.webp)

**Best for:** Addis Ababa fleets, businesses and private buyers with dedicated overnight charging and predictable daily mileage.

**Not ideal for:** users without secure electricity/parking, remote intercity operation with no verified charging, or importers expecting an EREV engine to solve charging gaps despite the ICE-import ban.

## Foreign Exchange and Payment Planning

The National Bank of Ethiopia controls foreign-exchange procedures and issued updated import/franco-valuta directives in May 2026. Before signing T/T terms, the importer should ask its bank which import registration, source-of-funds and document conditions apply. Do not send a deposit first and assume foreign currency for the balance will be available later.

Use a company account matching the invoice, agree a documentary payment schedule and make the vehicle, VIN and shipment descriptions consistent. See our [exporter verification checklist](/news/how-to-verify-a-chinese-car-exporter-before-you-pay/) before any transfer.

## Documents to Prepare

- Import permit or bank/import registration required under current rules
- Commercial Invoice and Packing List with VINs
- Bill of Lading and Djibouti transit documents
- Certificate of Origin and China export declaration
- Vehicle conformity and technical file
- Battery and charger documentation requested by authorities/carrier
- Ethiopian customs and registration documents

## Request a Pure-BEV Ethiopia Quote

Send the target quantity, Addis Ababa delivery point and charging plan. We will quote the Deepal S05 or source alternative pure BEVs, then provide the China-side file for your customs broker and bank to verify before payment.

**Official references:** [Ethiopia Ministry of Planning climate portal](https://climate.mopd.gov.et/about/) · [Ethiopian Customs Commission directives](https://www.ecc.gov.et/directives) · [National Bank foreign-exchange directives](https://nbe.gov.et/directives/foreign-exchange-management/) · [Ministry of Transport e-mobility strategy](https://www.motl.gov.et/news/-e-mobility-).

**Talk to us:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%20need%20a%20pure%20BEV%20quote%20for%20Ethiopia) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com).`,
    faqs: [
      { q: 'Can Ethiopia import gasoline or diesel cars in 2026?', a: 'Ethiopia introduced a ban on gasoline- and diesel-vehicle imports in February 2024, and official 2026 climate policy continues the electric-mobility transition. Obtain written customs confirmation for any claimed exception before shipping.' },
      { q: 'Can I import a PHEV or EREV as an electric car to Ethiopia?', a: 'Do not assume so. Both contain a fuel-burning engine. The conservative compliant recommendation is a pure BEV unless Ethiopian Customs gives written approval for the exact PHEV/EREV classification.' },
      { q: 'Which EV does EV Auto Pro have ready for Ethiopia?', a: 'Deepal S05 is the only pure BEV in the current eight-model ready-stock range. Deepal S07/S09 are EREVs and Jetour T2 is PHEV, so they are not presented as Ethiopia EV-only options.' },
      { q: 'How do electric cars ship from China to Ethiopia?', a: 'They normally move by RoRo or container to Djibouti, then under transit by rail or truck to Addis Ababa. Quote port, transit, Ethiopian customs and final delivery as separate cost lines.' },
      { q: 'What is the biggest EV-import risk in Ethiopia?', a: 'Charging and foreign-exchange execution are bigger risks than model selection. Secure depot/home charging and confirm bank-approved import payment procedures before committing to the shipment.' },
    ], related: ['import-chinese-cars-to-ghana', 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'how-to-verify-a-chinese-car-exporter-before-you-pay'],
  },

  'import-cars-from-china-to-chile-2026': {
    slug: 'import-cars-from-china-to-chile-2026', category: 'market', categoryLabel: 'Market & Import',
    title: 'Import Cars from China to Chile (2026 Guide)',
    excerpt: 'Import cars from China to Chile using FTA proof of origin, 3CV homologation, a 19% IVA budget and a San Antonio or Valparaíso delivery plan.',
    expertInsight: 'Chile is one of Latin America’s most open vehicle markets, but “China FTA” does not automatically mean a zero-duty car: the exact HS line must have reached zero and the shipment must satisfy origin and direct-transport rules. Budget 19% IVA and complete 3CV homologation before treating the vehicle as retail-ready.',
    hero: '/images/vehicles/evautopro-geely-coolray-01.webp', date: '2026-07-13 14:00:00', readMin: 8,
    body: `To import cars from China to Chile in 2026, verify the passenger-vehicle tariff line under the Chile–China FTA, obtain valid Chinese proof of origin, budget Chile's 19% IVA and complete vehicle homologation through 3CV. Chile is left-hand drive and has no large domestic passenger-car assembly barrier, but a low customs tariff does not remove certification, port, registration and after-sales costs.

## Does the Chile–China FTA Make the Car Duty-Free?

The FTA can provide preferential treatment to qualifying Chinese-origin goods, but the importer must verify the current schedule for the exact HS code. Customs decisions show that preference can be denied when the certificate of origin is invalid or when direct-shipment evidence through a non-party is insufficient.

Before loading, confirm:

- the exact 8703 tariff subheading and 2026 preferential rate;
- that the vehicle satisfies the FTA origin rule;
- a correctly completed certificate of origin tied to the Chinese invoice;
- direct transport or acceptable transshipment evidence;
- consistent exporter, consignee, VIN and invoice details.

If any condition fails, Chile can apply the general tariff instead. “Made in China” printed on a brochure is not proof of preferential origin.

![Export professionals reviewing a vehicle shipment file](/images/services/export-process.webp)

## What Does the Landed-Cost Sheet Include?

| Cost | Working treatment |
| --- | --- |
| FOB/CIF vehicle price | Contract and customs value |
| Import duty | FTA preferential rate only with valid origin claim |
| IVA | 19% on the applicable import tax base |
| Homologation | 3CV testing/document process for the model |
| Port | Terminal, broker, storage and delivery |
| Registration | Local documents, plates and any applicable annual charges |

Ask a Chilean customs broker to issue the calculation against the HS code and certificate before deposit. This is especially important for triangular invoicing or Hong Kong transshipment.

## What Is 3CV Homologation?

Chile's Centro de Control y Certificación Vehicular evaluates vehicle compliance for commercialization and registration. A dealer should determine whether the model already has a Chilean homologation, whether an existing homologation can cover the exact variant, or whether a new application and tests are required.

Prepare technical specifications, VIN/model identification, emissions or electric-powertrain data, safety systems and manufacturer documentation. Do not order a batch assuming a visually similar trim is covered by another variant's approval.

![A vehicle inspector checking an SUV in an inspection bay](/images/services/inspection.webp)

## San Antonio or Valparaíso?

Both central-Chile ports serve the Santiago market. Compare the carrier's actual service, RoRo/container availability, terminal free time and inland trucking rather than choosing by map alone.

| Port decision | Question |
| --- | --- |
| Sailing | Which port has the confirmed China service/date? |
| Terminal | What handling and storage apply to vehicles? |
| Inland | What is the delivered cost to the Santiago yard? |
| Risk | Who pays delay, inspection and demurrage? |

![Passenger vehicles boarding a RoRo vessel at a commercial port](/images/services/shipping.webp)

## Which Chinese Models Fit Chile?

The [Geely Coolray](/cars/geely-coolray/) is a compact ICE SUV with a $15,200–$18,800 FOB range in the current catalog and established Latin American brand recognition. The [Deepal S05](/cars/deepal-s05/) is a pure BEV alternative for urban buyers with dependable charging. Evaluate each as a separate homologation and tax case.

![Geely Coolray compact SUV exterior](/images/vehicles/evautopro-geely-coolray-appearance-01.webp)

![Deepal S05 battery-electric SUV exterior](/images/vehicles/evautopro-deepal-s05-appearance-03.webp)

**Best for:** importers with a Chilean homologation partner, valid FTA origin documents and dealer-level parts/service planning.

**Not ideal for:** a one-off China-market trim with no confirmed 3CV path, or a buyer relying on “zero duty” without checking the tariff line and origin certificate.

## Chile Versus Brazil as an Entry Market

Chile generally offers a more open import structure, while Brazil has been increasing EV import tariffs and emphasizes local industrial policy. That can make Chile a simpler first market operationally, but it is also highly competitive: low import barriers attract many brands. The advantage must come from model choice, supply reliability and after-sales—not tariff alone.

## Documents to Prepare

- Commercial Invoice and Packing List with VINs
- Bill of Lading and transshipment evidence
- Chile–China FTA certificate/proof of origin
- China export declaration
- 3CV homologation/technical documentation
- Insurance and customs valuation support
- Chilean registration documents

## Request a Chile Import File

Send the model, quantity and target port. We will provide the China-side quote, VIN/specification file and origin documents for your Chilean broker and 3CV partner to validate.

**Official references:** [Chile Customs](https://www.aduana.cl/) · [Chile Customs decision on China FTA origin evidence](https://www.aduana.cl/fallo-de-segunda-instancia-n-17-de-06-01-2010/aduana/2010-03-12/105416.html) · [3CV](https://www.mtt.gob.cl/3cv).

**Talk to us:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%20need%20a%20Chile%20vehicle%20import%20quote) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com).`,
    faqs: [
      { q: 'Are Chinese cars duty-free in Chile?', a: 'A qualifying vehicle may receive the Chile–China FTA preferential rate, but the importer must verify the exact 2026 HS schedule and provide valid proof of origin and transport evidence. Preference is not automatic.' },
      { q: 'What VAT applies to imported cars in Chile?', a: 'Chile’s IVA is 19%. Ask the broker to calculate it on the legally applicable import base together with any customs duty and charges for the exact shipment.' },
      { q: 'Do Chinese cars need 3CV homologation?', a: 'A vehicle offered and registered in Chile needs the applicable 3CV compliance/homologation route. Confirm that the exact model, powertrain and variant are covered before ordering a batch.' },
      { q: 'Should cars ship to San Antonio or Valparaíso?', a: 'Choose from the actual carrier service and total delivered cost to the buyer, including terminal handling, storage and Santiago trucking. Either can be practical for central Chile.' },
    ], related: ['bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'how-to-verify-a-chinese-car-exporter-before-you-pay', 'geely-coolray-export-deep-dive'],
  },

  'import-cars-from-china-to-georgia-2026-reexport-hub': {
    slug: 'import-cars-from-china-to-georgia-2026-reexport-hub', category: 'market', categoryLabel: 'Market & Import',
    title: 'Import Cars from China to Georgia: 2026 Re-Export Guide',
    excerpt: 'Import cars from China to Georgia through Poti or Batumi, calculate vehicle excise correctly and use the documented 180-day re-export refund route.',
    expertInsight: 'Georgia’s re-export advantage is procedural, not “tax-free by default”: Revenue Service says import duty and excise paid on a passenger car can be refunded 100% if it is exported and leaves Georgia within 180 days after release into free circulation. Right-hand-drive or converted-steering cars face punitive excise treatment, so separate transit/re-export stock from vehicles intended for Georgian registration.',
    hero: '/images/vehicles/evautopro-geely-atlas-01.webp', date: '2026-07-14 09:00:00', readMin: 8,
    body: `To import cars from China to Georgia in 2026, decide before shipping whether the vehicle will be registered in Georgia or re-exported. Georgia Revenue Service calculates passenger-car import duty and excise from the vehicle's age and technical characteristics. If a car released into free circulation is exported and leaves Georgia within 180 days, the importer may obtain a 100% refund of the paid excise and import duty.

## Why Georgia Works as a Re-Export Hub

Poti and Batumi connect Black Sea shipping with road routes into Armenia, Azerbaijan and wider Caucasus/Central Asia trade. The commercial advantage is organized customs handling, storage and a formal re-export/refund mechanism—not an assumption that every arriving car pays zero tax.

![Passenger vehicles boarding a RoRo vessel at a commercial port](/images/services/shipping.webp)

| Route | Best for | Main check |
| --- | --- | --- |
| China–Black Sea to Poti | Dealer batches and regional redistribution | Sailing/transshipment and terminal cost |
| China–Batumi | Alternative Black Sea service | Carrier schedule and inland route |
| China rail/Caspian corridor | Time-sensitive inland movement | Border handoffs and through documentation |

![Container gantry and rail infrastructure on a Eurasian inland freight corridor](/images/news/kazakhstan-3.webp)

This image is an inland freight-corridor scene and is not labelled as a Georgian port.

## How Does the 180-Day Refund Work?

Revenue Service states that a passenger car released into free circulation and then placed under export procedure and removed from Georgia within 180 calendar days can qualify for a 100% refund of paid excise and import duty. Preserve the import declaration, VIN, payment records, export declaration and proof of exit. Missing the time limit or failing to prove departure can destroy the economics.

Use the official Auto/Moto Levy Calculator for the VIN characteristics and obtain broker confirmation. VAT, service fees, storage and transport may follow separate rules; the refund statement should not be paraphrased as “all costs refunded.”

![Export professionals reviewing a vehicle shipment file](/images/services/export-process.webp)

## Right-Hand Drive Is a Cost and Registration Issue

Georgia's Tax Code applies multiplied excise rates to right-hand-drive and converted-steering vehicles. A car intended for Georgian registration should normally be factory left-hand drive. A right-hand-drive unit moving onward may still transit/re-export subject to customs rules, but do not promise Georgian registration or normal excise treatment.

## Example Product Fit

The [Geely Atlas](/cars/geely-atlas/) and [Geely Coolray](/cars/geely-coolray/) are factory-LHD SUVs in the current export catalog and provide different price/size positions.

![Geely Atlas SUV exterior](/images/vehicles/evautopro-geely-atlas-appearance-01.webp)

![Geely Coolray cockpit and dashboard](/images/vehicles/evautopro-geely-coolray-console-01.webp)

| Buyer | Better route | Not ideal for |
| --- | --- | --- |
| Georgian retail dealer | Import and local registration | RHD/converted vehicles |
| Armenia/Azerbaijan trader | Time-controlled re-export | Stock without confirmed onward buyer |
| Central Asia buyer | Compare Georgia hub vs direct rail | Extra handling that exceeds direct-route saving |

## Documents

- Invoice and Packing List with VINs
- Bill of Lading/transit document
- Certificate of Origin and China export declaration
- Georgian import declaration and payment proof
- Export declaration and proof of exit for refund
- Destination-country conformity and customs file

## Compare Georgia with Direct Shipping

Add both sets of handling, storage and border costs. Georgia wins when consolidation, buyer access or onward routing offsets the extra customs stage; direct rail wins when the final buyer and destination are already known.

**Official references:** [Georgia vehicle levy calculator and 180-day refund notice](https://www.rs.ge/CarClearance-en?cat=2&tab=1) · [Georgia HS/tax service](https://www.rs.ge/CommodityCodes-en) · [Georgia Tax Code](https://www.rs.ge/Media/Default/კანონმდებლობა/კანონები/tax%20code.pdf).

**Talk to us:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%20need%20a%20Georgia%20re-export%20vehicle%20quote) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com).`,
    faqs: [
      { q: 'Why is Georgia used for car re-export?', a: 'Poti/Batumi access and a formal customs mechanism support regional redistribution. Revenue Service states that eligible duty and excise can be refunded when the car is exported and leaves within 180 days.' },
      { q: 'Are imported cars tax-free in Georgia?', a: 'No. Import duty, excise and fees are calculated under Georgian rules. A qualifying 180-day re-export can refund paid import duty and excise, but other costs require separate treatment.' },
      { q: 'Can right-hand-drive cars register in Georgia?', a: 'Right-hand-drive and converted-steering cars face multiplied excise treatment. Confirm registration eligibility separately; factory LHD is the safer choice for Georgian retail.' },
      { q: 'Is Georgia cheaper than direct shipping to Central Asia?', a: 'Only when consolidation or onward-market access offsets the extra port, storage and customs stage. Compare both routes on total delivered cost and time.' },
    ], related: ['import-cars-from-china-to-russia-2026-recycling-fee', 'import-cars-from-china-to-kazakhstan-2026', 'roro-vs-container-shipping-cars-from-china'],
  },

  'roro-vs-container-shipping-cars-from-china': {
    slug: 'roro-vs-container-shipping-cars-from-china', category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'RoRo vs Container Shipping Cars from China',
    excerpt: 'Compare RoRo vs container shipping cars from China by unit economics, port access, cargo security, inland delivery, insurance and vehicle dimensions.',
    expertInsight: 'RoRo usually wins for operable vehicles moving to a RoRo-enabled seaport; a 40HQ container wins when two to four compatible vehicles can be professionally loaded, the destination is inland, or enclosed custody matters. Vehicle length alone never guarantees the count—height, width, loading frame, weight distribution and carrier acceptance decide the final plan.',
    hero: '/images/news/russia-1.webp', date: '2026-07-14 14:00:00', readMin: 8,
    body: `RoRo shipping drives an operable car onto a vessel and prices it by vehicle dimensions or unit. Container shipping secures vehicles inside a 40HQ and spreads the box cost across the load. RoRo is usually simpler for one or many running vehicles to a supported port; container is often better for inland destinations, mixed models and buyers who want sealed custody.

## Six-Way Comparison

| Factor | RoRo | 40HQ container |
| --- | --- | --- |
| Pricing | Per vehicle/measurement | Per container plus loading |
| Typical load | One unit upward | Usually 2–4 small/medium cars with engineered racks |
| Port | Must support vehicle RoRo | Any suitable container terminal |
| Vehicle condition | Must roll, steer and brake | Can handle non-running unit with equipment |
| Personal cargo | Usually prohibited | Only declared/secured cargo accepted |
| Custody | Vehicle accessible during handling | Sealed box after loading |

![Vehicles being loaded onto a RoRo vessel](/images/news/russia-1.webp)

## Why “Four Cars per 40HQ” Is Not a Promise

The [Geely Coolray](/cars/geely-coolray/) is 4,380 mm long; the larger [Deepal S09](/cars/deepal-s09/) is 5,205 mm. A loading engineer considers length, width, height, axle weight, rack angle, battery rules and door clearance. Two large SUVs may be straightforward; three compact SUVs may be practical with a certified frame; four requires small compatible vehicles and a specialist design. Confirm the exact VIN/model mix with a loading diagram.

![An SUV secured inside a shipping container with wheel chocks and tie-downs](/images/about/loading-2.webp)

![Container and rail cargo handling at an inland terminal](/images/news/kazakhstan-3.webp)

## Risk and Insurance

RoRo exposes the vehicle to more handoffs and normally forbids loose items. Container reduces casual access but adds lashing/rack risk: poor loading can damage roofs, suspension or bodywork. Insurance must state vehicle value, route, loading method and exclusions. Photograph every unit before loading and at handover.

![A vehicle undergoing a pre-shipment condition inspection](/images/services/inspection.webp)

**Best for RoRo:** running stock, direct port markets, flexible unit count.

**Best for container:** inland destinations, high-value/mixed cargo, ports without RoRo and loads where container sharing lowers unit cost.

## Ask for Comparable Quotes

Quote the same origin, destination, insurance and inland scope. Require RoRo port charges and container stuffing, rack, unloading and demurrage to be visible—not hidden outside the ocean rate.

WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20please%20compare%20RoRo%20and%2040HQ%20for%20my%20models) or [gacaicai@gmail.com](mailto:gacaicai@gmail.com).`,
    faqs: [
      { q: 'Is RoRo cheaper than container shipping?', a: 'Often for one operable vehicle to a RoRo port. A 40HQ can become cheaper per unit when several compatible cars share the box, but include racks, loading, unloading and inland charges.' },
      { q: 'How many cars fit in a 40HQ?', a: 'Common plans range from two to four, but no count is guaranteed from length alone. Model width/height, rack engineering, weight and carrier rules determine the approved load.' },
      { q: 'Can goods be left inside a RoRo vehicle?', a: 'Carriers normally prohibit undeclared personal or commercial cargo. Container cargo must also be declared and secured. Follow the carrier’s written rules.' },
      { q: 'Which method is safer?', a: 'Container limits access after sealing; RoRo avoids rack/loading-frame stresses. Safety depends on professional handling, lashing, inspection evidence and insurance.' },
    ], related: ['import-cars-from-china-to-kazakhstan-2026', 'import-chinese-cars-to-ghana', 'import-cars-from-china-to-georgia-2026-reexport-hub'],
  },

  'chinese-car-spare-parts-warranty-export-guide': {
    slug: 'chinese-car-spare-parts-warranty-export-guide', category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'Chinese Car Spare Parts and Export Warranty Guide',
    excerpt: 'Understand Chinese car spare-parts availability and export warranty: three coverage models, VIN lookup, first-order spares and buyer safeguards.',
    expertInsight: 'A Chinese vehicle’s domestic warranty is not automatically valid overseas. Before buying, identify whether coverage comes from an official local OEM network, a written exporter parts arrangement, or no local warranty; then order a VIN-matched starter parts pack with the first shipment.',
    hero: '/images/services/after-sales.webp', date: '2026-07-15 09:00:00', readMin: 8,
    body: `Chinese car spare-parts availability is manageable when the importer plans by VIN before the first shipment; warranty is harder because three very different arrangements are often described with the same word. Get the provider, territory, term, exclusions, claim evidence and freight responsibility in writing.

## Three Warranty Arrangements

| Arrangement | Who handles claim | Strength | Limitation |
| --- | --- | --- | --- |
| Official local OEM warranty | Authorized local distributor | Local diagnosis/labor/parts | Only eligible local-spec vehicles |
| Exporter parts support | China exporter coordinates approved parts | Works in open markets | Local labor and freight may be buyer cost |
| Bare export/no local warranty | Importer | Lowest purchase price | Importer carries full risk |

![A vehicle inspector documenting an SUV's condition](/images/services/inspection.webp)

Never infer overseas coverage from a China-market warranty booklet. Ask whether the exact VIN appears in the destination network and obtain written claim steps.

![Automotive spare parts prepared for after-sales support](/images/services/after-sales.webp)

## Build a First-Order Parts Pack

For each model, price filters, brake wear parts, wiper/lighting items, suspension consumables, sensors prone to impact, body clips and one set of diagnostic/service consumables. High-voltage parts require trained handling; do not stock battery modules casually.

Use the VIN and electronic parts catalog. Model names can cover different engines, connectors and production revisions. Photograph labels and retain the original part number before ordering replacements.

![Changan CS55 Plus cockpit and dashboard](/images/vehicles/evautopro-changan-cs55-plus-console-01.webp)

The [Changan CS55 Plus](/cars/changan-cs55-plus/) illustrates the process: the importer should tie every fast-moving item to the exact exported trim/VIN, not merely search “CS55 Plus part” on a marketplace.

![Changan CS55 Plus cabin and seating](/images/vehicles/evautopro-changan-cs55-plus-space-01.webp)

## Questions Before Payment

- Who authorizes a claim and within what time?
- Are diagnostic labor and local labor covered?
- Who pays international freight and duty on replacement parts?
- Are consumables, collision and misuse excluded?
- How long are model-specific parts supplied?
- Can the supplier provide a VIN-linked catalog and quote?

**Best for:** dealers who hold service stock, train a workshop and sell a written local support policy.

**Not ideal for:** buyers expecting an official distributor to repair an unauthorized parallel-import vehicle for free.

Read the [China auto-parts sourcing guide](/news/guide-to-sourcing-chinese-auto-parts/) and verify the exporter before payment. WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20send%20a%20VIN-matched%20spare-parts%20and%20warranty%20plan) or [gacaicai@gmail.com](mailto:gacaicai@gmail.com).`,
    faqs: [
      { q: 'Do Chinese cars have an international warranty?', a: 'Not automatically. Confirm whether the VIN is covered by an official destination-country network or only by a written exporter parts arrangement.' },
      { q: 'Are Chinese car parts difficult to obtain?', a: 'They are easier when ordered by VIN and OEM part number. Dealers should import a fast-moving starter pack with the vehicles instead of waiting for a breakdown.' },
      { q: 'Who pays labor on an export warranty claim?', a: 'Only the written agreement answers this. Exporter support may supply a part while the importer pays local diagnosis, labor, freight or duty.' },
      { q: 'What spare parts should accompany the first order?', a: 'Filters, brake wear parts, wipers/lighting, common suspension consumables, clips, selected sensors and model-specific service items, all VIN matched.' },
    ], related: ['guide-to-sourcing-chinese-auto-parts', 'how-to-verify-a-chinese-car-exporter-before-you-pay', 'roro-vs-container-shipping-cars-from-china'],
  },

  'how-to-pay-chinese-car-exporter-tt-lc-guide': {
    slug: 'how-to-pay-chinese-car-exporter-tt-lc-guide', category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'How to Pay a Chinese Car Supplier: T/T vs L/C',
    excerpt: 'Learn how to pay a Chinese car supplier using T/T 30/70 or L/C at sight, verify bank details, avoid soft clauses and reject unsafe payment channels.',
    expertInsight: 'T/T 30/70 is practical when the 70% balance is tied to VIN-level inspection and shipping readiness; L/C at sight shifts release to compliant documents but adds bank cost and documentary risk. In either method, the beneficiary must match the company on the contract and invoice.',
    hero: '/images/services/financing.webp', date: '2026-07-15 14:00:00', readMin: 8,
    body: `The safest common ways to pay a Chinese car supplier are T/T 30% deposit and 70% before shipment, or an irrevocable L/C at sight from acceptable banks. Neither method replaces exporter verification: the contract company, invoice issuer and bank beneficiary must match.

![Export professionals reviewing a vehicle shipment file](/images/services/export-process.webp)

## Payment Comparison

| Method | Best for | Main risk | Control |
| --- | --- | --- | --- |
| T/T 30/70 | Established supplier, small/mid orders | Deposit exposure | Inspection before balance |
| L/C at sight | Larger documentary shipments | Discrepant/soft documents | Bank-reviewed terms |
| Escrow | Platform-supported transaction | Fake/unlicensed intermediary | Verify regulated provider |
| Personal account/Western Union/crypto | None for B2B cars | Weak recovery/identity | Refuse |

![Trade-finance documents and payment planning](/images/services/financing.webp)

## Make T/T 30/70 Safer

Before 30%, verify registration/export authority and beneficiary. The contract should name models, quantity, Incoterm, delivery window and refund/default terms. Before 70%, receive VIN list, photos/video of actual units, inspection report and agreed shipping-readiness evidence. Payment does not itself transfer title; define that separately.

![A vehicle inspector checking an SUV before the balance payment](/images/services/inspection.webp)

## Avoid L/C Soft Clauses

L/C at sight pays against documents, not vehicle quality. Agree realistic presentation dates, ports, partial shipment, document wording and discrepancy handling. Reject clauses controlled only by the applicant or impossible certificates. Have both banks review the draft before issuance.

RMB settlement may be available through participating banks, but currency choice should follow the supplier invoice, importer rules and hedging needs. Do not convert through an unrelated personal account.

Link the payment to a real product such as [Geely Coolray](/cars/geely-coolray/) and require its exact trim/VIN in the commercial file. First complete the [exporter verification checklist](/news/how-to-verify-a-chinese-car-exporter-before-you-pay/).

![Geely Coolray cockpit and dashboard](/images/vehicles/evautopro-geely-coolray-console-01.webp)

**Never accept:** beneficiary mismatch, last-minute bank-detail change without independent callback, 100% to a personal account, Western Union or cryptocurrency for a normal B2B vehicle order.

WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20send%20your%20T%2FT%20and%20L%2FC%20payment%20terms) or [gacaicai@gmail.com](mailto:gacaicai@gmail.com).`,
    faqs: [
      { q: 'Is T/T 30/70 safe for buying cars from China?', a: 'It is common, but only after verifying the exporter and matching company bank account. Tie the 70% balance to VIN-level inspection and shipping readiness.' },
      { q: 'Is L/C safer than T/T?', a: 'It reduces payment risk when documents comply, but banks do not inspect vehicle quality. Poor wording and document discrepancies can still delay or trigger payment.' },
      { q: 'Can I pay a Chinese supplier in RMB?', a: 'Possibly through participating banks, subject to importer and supplier banking rules. Keep the currency and beneficiary consistent with the contract and invoice.' },
      { q: 'What payment methods should I refuse?', a: 'Personal accounts, Western Union, cryptocurrency and unexplained third-party beneficiaries are inappropriate for a normal B2B vehicle shipment.' },
    ], related: ['how-to-verify-a-chinese-car-exporter-before-you-pay', 'chinese-car-dealers-uae-vs-direct-import-2026', 'roro-vs-container-shipping-cars-from-china'],
  },

  'deepal-s05-vs-s07-vs-s09-which-to-import': {
    slug: 'deepal-s05-vs-s07-vs-s09-which-to-import', category: 'product', categoryLabel: 'Model Comparison',
    title: 'Deepal S05 vs S07 vs S09: Which Should You Import?',
    excerpt: 'Compare Deepal S05 vs S07 vs S09 by BEV/EREV powertrain, size, FOB price, range, buyer segment and container-shipping practicality.',
    expertInsight: 'The Deepal range splits at the powertrain: S05 is the lower-priced pure BEV for charging-ready cities; S07 is a mid-size EREV for broader infrastructure; S09 is a six-seat flagship EREV. Dealers should stock by charging reality and customer budget, not treat the three as simple size variants.',
    hero: '/images/vehicles/evautopro-deepal-s07-01.webp', date: '2026-07-16 09:00:00', readMin: 8,
    body: `Deepal S05 vs S07 vs S09 is primarily a powertrain and segment decision. The [S05](/cars/deepal-s05/) is a 4,620 mm pure BEV from $19,200 FOB; the [S07](/cars/deepal-s07/) is a 4,750 mm EREV from $24,800; the [S09](/cars/deepal-s09/) is a 5,205 mm six-seat flagship EREV from $36,500.

| Spec | S05 | S07 | S09 |
| --- | --- | --- | --- |
| Powertrain | BEV | EREV | EREV |
| Dimensions mm | 4620×1880×1605 | 4750×1930×1625 | 5205×1996×1800 |
| Power | 218 PS | 252 PS | 462 PS |
| Battery | 56.1 kWh | 31.7 kWh | 42 kWh |
| Electric range | 510 km CLTC | 200 km CLTC | 215 km CLTC |
| FOB range | $19,200–24,500 | $24,800–32,500 | $36,500–45,800 |

![Deepal S05 exterior](/images/vehicles/evautopro-deepal-s05-appearance-02.webp)

**S05 best for:** charging-ready urban markets and price-sensitive EV buyers. **Not ideal for:** markets banning neither fuel cars nor offering dependable charging, where EREV flexibility may sell more easily.

![Deepal S05 cockpit and dashboard](/images/vehicles/evautopro-deepal-s05-console-01.webp)

![Deepal S07 exterior](/images/vehicles/evautopro-deepal-s07-appearance-02.webp)

**S07 best for:** dealers needing a mid-size electric-driving SUV without dependence on public charging. **Not ideal for:** markets that legally admit only pure BEVs.

![Deepal S07 cockpit and dashboard](/images/vehicles/evautopro-deepal-s07-console-01.webp)

![Deepal S09 exterior](/images/vehicles/evautopro-deepal-s09-appearance-02.webp)

**S09 best for:** premium six-seat/family positioning. **Not ideal for:** entry-price inventory or container plans optimized around compact vehicles.

![Deepal S09 cockpit and dashboard](/images/vehicles/evautopro-deepal-s09-console-01.webp)

## Container Planning

S05 is easiest to combine because it is shortest/narrowest; S09 consumes much more length, width and weight. Do not infer an exact 40HQ count from length: request an engineered loading plan for the model mix.

For markets with uneven charging, see the [powertrain import guide](/news/bev-vs-phev-vs-erev-vs-hybrid-which-to-import/). WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20compare%20Deepal%20S05%20S07%20and%20S09%20for%20my%20market).`,
    faqs: [
      { q: 'Is Deepal S05 BEV or EREV?', a: 'S05 is the pure BEV in this comparison, with a 56.1 kWh battery and 510 km CLTC catalog range.' },
      { q: 'What is the difference between Deepal S07 and S09?', a: 'Both are EREVs, but S09 is a much larger six-seat flagship with 462 PS; S07 is a mid-size five-seat model with 252 PS.' },
      { q: 'Which Deepal is cheapest to import?', a: 'S05 has the lowest catalog FOB range at $19,200–24,500, before freight, tax and certification.' },
      { q: 'Which Deepal suits weak charging infrastructure?', a: 'S07 or S09 EREV provides fuel-backed range. Confirm local import rules because some EV-only incentives or bans distinguish BEV from EREV.' },
    ], related: ['deepal-s07-alternatives', 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'roro-vs-container-shipping-cars-from-china'],
  },

  'geely-coolray-vs-changan-cs55-plus-export': {
    slug: 'geely-coolray-vs-changan-cs55-plus-export', category: 'product', categoryLabel: 'Model Comparison',
    title: 'Geely Coolray vs Changan CS55 Plus for Export',
    excerpt: 'Compare Geely Coolray vs Changan CS55 Plus for export by FOB price, dimensions, power, right-hand-drive batch terms and dealer positioning.',
    expertInsight: 'Coolray is the smaller, lighter and sportier compact option; CS55 Plus provides more cabin/body size and torque at a slightly lower starting FOB price. Both have factory RHD batches at MOQ 20 and 45–60 day lead time, so RHD buyers should choose by segment—not assume one is more available.',
    hero: '/images/vehicles/evautopro-geely-coolray-01.webp', date: '2026-07-16 14:00:00', readMin: 8,
    body: `Geely Coolray vs Changan CS55 Plus is a choice between a smaller sporty compact SUV and a larger value-oriented compact SUV. Both are front-wheel-drive 1.5T/7DCT products in the current catalog and both support factory right-hand-drive batches with MOQ 20 and 45–60 day lead time.

| Spec | [Geely Coolray](/cars/geely-coolray/) | [Changan CS55 Plus](/cars/changan-cs55-plus/) |
| --- | --- | --- |
| Dimensions mm | 4330×1800×1609 | 4515×1865×1680 |
| Wheelbase | 2600 mm | 2656 mm |
| Power/torque | 177 PS / 255 Nm | 188 PS / 300 Nm |
| Transmission | 7-speed DCT | 7-speed DCT |
| FOB | $15,200–18,800 | $14,500–17,900 |
| Factory RHD | MOQ 20, 45–60 days | MOQ 20, 45–60 days |

![Geely Coolray exterior](/images/vehicles/evautopro-geely-coolray-appearance-03.webp)

**Coolray best for:** buyers prioritizing compact dimensions, lighter weight and Geely recognition. **Not ideal for:** customers who equate physical size with value.

![Geely Coolray cockpit and dashboard](/images/vehicles/evautopro-geely-coolray-console-01.webp)

![Changan CS55 Plus exterior](/images/vehicles/evautopro-changan-cs55-plus-appearance-03.webp)

**CS55 Plus best for:** family/value positioning, more torque and a lower catalog entry price. **Not ideal for:** dealers wanting the smallest urban footprint.

![Changan CS55 Plus cockpit and dashboard](/images/vehicles/evautopro-changan-cs55-plus-console-01.webp)

## RHD Ordering

Factory RHD is a batch product, not an immediate one-unit conversion. Confirm destination certification, steering specification, trim/colors and the 20-unit batch before deposit. Never convert steering after production for markets that restrict converted vehicles.

## Margin Logic

Do not invent a retail margin. Start from FOB range, then add freight, duty, VAT, certification, local warranty/parts and finance. CS55 Plus starts lower; Coolray may support a different retail position through brand demand. The destination's real retail and landed costs decide.

For African positioning, read [MG ZS vs Geely Coolray](/news/mg-zs-vs-geely-coolray-africa/) and the [Coolray export deep dive](/news/geely-coolray-export-deep-dive/).

WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20compare%20Coolray%20and%20CS55%20Plus%20RHD%20batch%20pricing).`,
    faqs: [
      { q: 'Which is larger, Coolray or CS55 Plus?', a: 'CS55 Plus is 185 mm longer, 65 mm wider and 71 mm taller, with a 56 mm longer wheelbase.' },
      { q: 'Which has more power?', a: 'CS55 Plus has 188 PS and 300 Nm versus Coolray at 177 PS and 255 Nm in the current catalog.' },
      { q: 'Are both available in right-hand drive?', a: 'Yes, as factory RHD batches with MOQ 20 and stated 45–60 day lead time. Confirm the exact destination specification before deposit.' },
      { q: 'Which is cheaper FOB?', a: 'The catalog ranges overlap; CS55 Plus starts lower at $14,500, while Coolray starts at $15,200. Compare the exact trim and landed cost.' },
    ], related: ['mg-zs-vs-geely-coolray-africa', 'geely-coolray-export-deep-dive', 'roro-vs-container-shipping-cars-from-china'],
  },

};

export const newsSlugs = Object.keys(news);

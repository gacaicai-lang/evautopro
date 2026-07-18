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
    related: ['jetour-x90-plus-import-guide-2026', 'chinese-car-dealers-uae-vs-direct-import-2026', 'how-to-verify-a-chinese-car-exporter-before-you-pay'],
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

We supply vehicles across our active export catalog — [Jetour, Changan NEVO, Volkswagen and more](/cars/) — with pre-shipment photo/video inspection on every order and full export documentation. Before ordering, ask us to walk you through the export licensing and destination-market certifications (EAC / GCC / INMETRO) that apply to your specific model and route — don't take any general claim on any supplier's page, including this one, as a substitute for seeing the actual documents.

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

We supply both Changan and Jetour models from our active export catalog. We can supply mixed orders (UNI-T + T2 in same container) for dealers wanting both segments.`,
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
    title: 'Top 6 Chinese SUVs for Russia in 2026',
    excerpt: 'Six models from EV Auto Pro\'s active export catalog, compared on real specs and pricing. Ideal for Russian dealer inventory 2026.',
    hero: '/images/vehicles/evautopro-geely-atlas-01.webp',
    date: '2026-05-10',
    readMin: 10,
    body: `## Why Russia Loves Chinese SUVs in 2026

Russian car market shifted dramatically post-2022. Western brands largely exited; Chinese brands filled the gap. By 2025, Chinese SUVs hold 55%+ market share. For 2026, the segment continues to grow with EREV and PHEV variants joining traditional ICE.

We focus on **SUVs suitable for Russian conditions**: cold-weather tested, all-wheel drive capable, robust suspension, parts availability. Every model below is in our active export catalog — [see full specs and current pricing](/cars/) before ordering.

## 1. Changan UNI-T (Sport Coupé)

FOB $13,800-17,200 · 5-seater · ICE · FWD · 188 PS

Best for: Urban Moscow / St. Petersburg dealers seeking sport coupé entry price. [Full specs](/cars/changan-uni-t/).

## 2. Changan CS55 Plus

FOB $14,500-17,900 · 5-seater · ICE · FWD · 188 PS

Best for: All-around family SUV and Changan's global best-seller — highest stock and fastest replenishment of any model in this list. [Full specs](/cars/changan-cs55-plus/).

## 3. Geely Atlas (博越 PRO)

FOB $17,800-22,500 · 5-seater · ICE · FWD · 218 PS

Best for: Mid-SUV segment. Volvo CMA platform = European safety standards. Premium positioning for Russian middle-class buyers. [Full specs](/cars/geely-atlas/).

## 4. Deepal S07 EREV

FOB $24,800-32,500 · 5-seater · EREV · RWD · 252 PS

Best for: Premium EREV segment. Solves cold-weather charging anxiety with gas extender. 200 km pure electric urban + 1000 km gas-assisted highway. [Full specs](/cars/deepal-s07/).

## 5. Jetour T2 PHEV

FOB $22,500 · 7-seater · PHEV · 4WD · 462 PS

Best for: Family 7-seater + PHEV technology + 4WD adventure capability. Strong in Russian interior + Siberian dealers. [Full specs](/cars/jetour-t2/).

## 6. Deepal S09 EREV

FOB $36,500-45,800 · 6-seater · EREV · 4WD · 462 PS

Best for: Premium flagship 6-seater EREV. Competes with Li Auto L9 / BMW X7 PHEV. Moscow VIP / executive segment. [Full specs](/cars/deepal-s09/).

## Cold-Weather Configuration (Critical for Russia)

All 6 models support cold-weather config:
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

For new Russian dealers: start with a **CS55 Plus + UNI-T mix** (from $14,500 + $13,800 FOB). High volume, fast turnover, proven global sales record.

For established premium dealers: add **Geely Atlas / Deepal S07** for the $20-30K segment.

For VIP/executive: **Deepal S09 EREV** (from $36,500) — a 6-seat flagship EREV positioned against premium PHEV SUVs at a lower price point.

## Contact for Russia Quote

We handle EAC certification and can quote all six models above from our active export catalog. Contact us via WhatsApp for current stock, lead times and a formal quote.`,
    faqs: [
      { q: 'Best Chinese SUV for Russian rural / Siberia?', a: 'Jetour T2 PHEV — 4WD + PHEV (engine works in extreme cold when EV alone has range loss). Deepal S07 EREV — gas extender solves remote area charging.' },
      { q: 'Cheapest reliable Chinese SUV for Russia?', a: 'Changan CS55 Plus ($14,500 FOB). Best-seller globally + Russia, strongest parts availability.' },
      { q: 'Premium Chinese SUV for Moscow?', a: 'Deepal S09 EREV ($36,500). Competes with German premium. Triple Snapdragon 8295 screens + Meridian audio + air suspension.' },
    ],
    related: ['jetour-x90-plus-import-guide-2026', 'changan-uni-t-vs-jetour-t2-comparison', '2026-china-nev-export-rules-guide'],
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
    title: "Changan UNI-T vs CS55 Plus: Which Changan SUV Should You Import?",
    excerpt: "A guide to choosing between EV Auto Pro's two Changan SUVs in stock — UNI-T's sport-coupé styling vs CS55 Plus's best-seller volume positioning.",
    hero: '/images/vehicles/evautopro-changan-cs55-plus-01.webp', date: '2026-05-21', readMin: 6,
    body: `## Changan's Two SUVs in Our Catalog

We currently export two Changan SUVs: the [UNI-T](/cars/changan-uni-t/), a sport-coupé styled SUV, and the [CS55 Plus](/cars/changan-cs55-plus/), Changan's global best-selling compact SUV. Both share the same 188 PS / 300 N·m 1.5T engine and 7-speed DCT — the difference is body style and positioning, not powertrain.

## When to Choose UNI-T

FOB $13,800-17,200 · Coupé SUV body style · dimensions 4515×1870×1565mm · wheelbase 2710mm.

Best for: buyers targeting younger, style-conscious urban customers who want sport-coupé looks over maximum cabin space. [Full specs](/cars/changan-uni-t/).

## When to Choose CS55 Plus

FOB $14,500-17,900 · Conventional SUV body style, more cabin/cargo space · dimensions 4515×1865×1680mm · wheelbase 2656mm.

Best for: buyers prioritizing volume and parts availability — this is Changan's best-selling model globally, which means the deepest stock and fastest replenishment of any Changan model we carry. [Full specs](/cars/changan-cs55-plus/).

## Decision Summary

Choose **UNI-T** if styling and a sportier profile matter more to your target buyer than interior space. Choose **CS55 Plus** if you want the highest-volume, most broadly proven model with the fastest restock — it's the safer first order for a new market.

Looking for a wider Changan lineup (UNI-K, CS75 Plus, and other models not shown here)? Contact us — we can check current factory availability for models outside our standard catalog on a case-by-case basis, but cannot commit to stock, pricing or lead time until we've confirmed with the factory.`,
    faqs: [
      { q: 'Best-selling Changan model we export?', a: 'CS55 Plus — Changan\'s global best-seller, with the deepest stock of the two Changan models in our catalog.' },
      { q: 'Do you supply other Changan SUVs (UNI-K, CS75 Plus, etc.)?', a: 'Our standing catalog covers UNI-T and CS55 Plus. Other Changan models can sometimes be sourced case-by-case — contact us with your target model and we\'ll confirm current factory availability and pricing before you order.' },
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
    excerpt: 'Looking for a Deepal S07 EREV alternative at lower price? Compare with the NEVO A07 EREV sedan, Geely Coolray, and Jetour T2 PHEV from our catalog.',
    hero: '/images/vehicles/evautopro-deepal-s07-01.webp', date: '2026-05-11', readMin: 6,
    body: `## Deepal S07 Baseline

FOB $24,800-32,500. EREV SUV (200km WLTP electric + 1000+ km gas-extender). Snapdragon 8295 cabin. CATL battery. [Full specs](/cars/deepal-s07/).

## Alternative 1: NEVO A07 EREV Sedan

FOB $19,640-22,450. Also a genuine EREV — 200kW/268PS motor + 1.5L range-extender, 35.1kWh battery, 310km pure-electric / 1,570km combined. Sedan body instead of SUV, ~$5,000-10,000 lower FOB than S07. [Full specs](/cars/nevo-a07/).

Best for: markets wanting real EREV technology in a sedan body at a lower price point.

## Alternative 2: Geely Coolray (Compact, not EREV but lower price)

FOB $15,200-18,800. ICE only. Different segment but if EREV not required → significantly cheaper. [Full specs](/cars/geely-coolray/).

## Alternative 3: Jetour T2 PHEV

FOB $22,500. 7-seater PHEV (4WD). If family + adventure trump premium cabin → T2 better choice. [Full specs](/cars/jetour-t2/).

## When to Stay with S07

If buyer specifically wants:
- Snapdragon 8295 premium cabin
- True EREV (long range with gas extender) in an SUV body
- RWD sporty driving
- Competing with Li Auto / AITO

→ S07 is the right choice — the NEVO A07 is the closest real EREV alternative in our catalog, but it's a sedan, not an SUV.

## Decision Tree

Need EREV (long range, limited charging)?
- YES, SUV body → S07 (best in class in our catalog)
- YES, sedan body / lower budget → NEVO A07 EREV
- NO → Geely Coolray (lowest FOB, ICE only)`,
    faqs: [
      { q: 'EREV vs PHEV difference?', a: 'EREV: gas engine only charges battery (no mechanical drive). PHEV: both engines can drive directly. EREV simpler, smoother.' },
      { q: 'Why S07 over Li Auto L7?', a: 'Same segment, meaningfully lower FOB. Same Snapdragon 8295 chip, similar feature set.' },
    ], related: ['top-7-chinese-suv-for-russia-2026'],
  },

  'changan-uni-t-vs-uni-z-comparison': {
    slug: 'changan-uni-t-vs-uni-z-comparison', category: 'product', categoryLabel: 'Model Comparison',
    title: 'Changan UNI-T Review: Specs, Pricing — and Do We Export the UNI-Z?',
    excerpt: "A full look at the Changan UNI-T sport coupé SUV we export, plus a straight answer on UNI-Z availability for buyers researching Changan's UNI lineup.",
    hero: '/images/vehicles/evautopro-changan-uni-t-01.webp', date: '2026-05-09', readMin: 5,
    body: `## Changan UNI-T: What's Actually in Our Catalog

The [Changan UNI-T](/cars/changan-uni-t/) is a sport-coupé styled SUV — FOB $13,800-17,200, 1.5T turbo engine, 188 PS / 300 N·m, 7-speed DCT, 4515×1870×1565mm, 2710mm wheelbase.

Best for: buyers wanting sport-coupé styling at an accessible entry price within Changan's export lineup.

## Do You Export the UNI-Z?

If you're comparing Changan's UNI series and came across the UNI-Z: it is not currently in our standing export catalog. We only list models here once we can back the listing with real photos and confirmed export-market specs — rather than publish a UNI-Z page built on unverified numbers, we're keeping this honest: ask us directly if you need UNI-Z, and we'll check current factory availability before quoting anything.

## Best Markets for UNI-T

Russia, Kazakhstan, UAE, Egypt — established demand for Chinese coupé-styled SUVs in this price segment.

## Compare UNI-T Against What We Actually Carry

Rather than an unverifiable UNI-Z comparison, see how UNI-T stacks up against models we do export and can confirm specs for: [UNI-T vs Jetour T2](/news/changan-uni-t-vs-jetour-t2-comparison/) (different segment, PHEV 7-seater vs coupé SUV) or [UNI-T vs CS55 Plus](/news/how-to-choose-changan-suv/) (same brand, different body style).`,
    faqs: [
      { q: 'What powertrain does the UNI-T use?', a: '1.5T turbo + 7-speed DCT, 188 PS / 300 N·m — the same core Changan powertrain used across several of our Changan and Changan NEVO models.' },
      { q: 'Can I order the UNI-Z through EV Auto Pro?', a: "It's not in our standing catalog today. Contact us with your target spec and we'll confirm with the factory whether current allocation is possible — we won't quote a model we haven't verified is actually available." },
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
    ], related: ['jetour-x90-plus-import-guide-2026', 'jetour-dashing-vs-x50-entry-level-comparison', 'jetour-t1-vs-t1-idm-ice-or-phev'],
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
**Jetour T1 i-DM PHEV** — Compact SUV PHEV entry, 26.7kWh battery, lower FOB than T2.

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
      { q: 'Cheapest reliable Chinese car for Ghana?', a: 'Jetour X50 ($9,000-13,500 FOB), our lowest-priced compact SUV. After duties + VAT, budget for meaningfully higher retail pricing — confirm current Ghana duty rates with us before quoting a customer.' },
    ], related: ['guide-to-sourcing-chinese-auto-parts', '2026-china-nev-export-rules-guide'],
  },

  'mg-zs-vs-geely-coolray-africa': {
    slug: 'mg-zs-vs-geely-coolray-africa', category: 'product', categoryLabel: 'Model Comparison',
    title: 'Jetour X50 vs Geely Coolray: Which Small SUV Fits Africa Better?',
    excerpt: 'Two compact SUV options from our export catalog for African markets — budget-focused Jetour X50 vs premium-positioned Geely Coolray. Detailed comparison.',
    hero: '/images/vehicles/evautopro-geely-coolray-01.webp', date: '2026-05-12', readMin: 5,
    body: `## Two Compact SUVs, Two Different African Market Strategies

The [Jetour X50](/cars/jetour-x50/) and [Geely Coolray](/cars/geely-coolray/) are both compact SUVs in our export catalog, but they target different price points and buyer segments.

## Quick Compare

**Jetour X50**: $9,000-13,500 FOB. 1.5T turbo, 115kW/156PS/230N·m, 6-speed wet DCT. Export-only model (rebadged Soueast DX5, Soueast and Jetour are sibling brands under Chery Holding).
**Geely Coolray**: $15,200-18,800 FOB. 1.5T turbo, 177PS, 7-speed DCT. Volvo CMA platform (jointly developed with Volvo Cars).

## Engine + Drivetrain

X50: 1.5T turbo, 156PS. Simpler 6-speed wet DCT. Confirmed on-lot in UAE, Saudi Arabia, Kazakhstan, Panama, Chile, Philippines, Malaysia.
Coolray: 1.5T turbo, 177PS — more power. Modern 7-speed DCT. Volvo-developed platform.

## Platform + Safety

X50: 6 airbags (front + side + full-length curtain), 360° camera, L1 driver assist (blind spot, lane change assist, rear cross-traffic alert).
Coolray: Volvo CMA platform, European safety standards heritage.

## Pricing Math for African Dealer

**X50**: Lower FOB means lower retail and easier entry for budget-conscious markets — the tradeoff is a smaller screen (10.25" vs Coolray's larger display) and simpler feature set.
**Coolray**: Higher FOB but Volvo-platform positioning supports premium pricing and better unit margin for established dealers.

## EV Auto Pro Supply

Both models are in our standing export catalog — [X50](/cars/jetour-x50/) and [Geely Coolray](/cars/geely-coolray/). Contact us for current stock and lead times for your target market.`,
    faqs: [
      { q: 'Which has better resale value?', a: 'Coolray tends to hold value better due to Volvo-platform positioning. X50 is priced to compete on entry cost, not resale premium.' },
      { q: 'Which fits a first-time African dealer better?', a: 'X50 — lower FOB means lower capital commitment and faster inventory turnover while you establish demand. Add Coolray once you have a proven customer base wanting a step up.' },
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
    related: ['jetour-t1-vs-t1-idm-ice-or-phev', 'nevo-a07-buying-guide-bev-vs-erev', 'can-you-drive-phev-without-charging'],
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
    related: ['volkswagen-china-export-program-explained', 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'geely-coolray-export-deep-dive'],
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

Every order runs the [EV Auto Pro Export PDI](/services/inspection/) with a photo and video report before loading, on standard T/T 30/70 or L/C terms, with the full document set provided.

## Put Us Through the Checklist

Don't take our word for anything on this page — ask us to prove every item in the checklist above before you commit a deposit anywhere, on your specific target model. Pick a model from our [in-stock vehicle lineup](/cars/) and tell us your destination; we'll walk you through our export documentation and licence details for that order before you pay anything.

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

I run EV Auto Pro, so I'll be direct: **we are a China-side export company, not a UAE dealership.** We don't compete with The Elite Cars or Al-Futtaim for retail customers — and won't pretend to. Where we fit is the trade channel: dealers and fleet buyers importing 3+ units, re-exporters using Jebel Ali as a hub, and buyers who want factory trims or models the official networks don't stock. Every unit ships GCC-certified with our [photo & video pre-shipment inspection](/services/inspection/), on T/T 30/70 or L/C terms, 12–25 day dispatch from deposit.

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
| [Armenia](/news/import-cars-from-china-to-armenia-2026/)/Azerbaijan trader | Time-controlled re-export | Stock without confirmed onward buyer |
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
    ], related: ['import-cars-from-china-to-armenia-2026', 'import-cars-from-china-to-russia-2026-recycling-fee', 'import-cars-from-china-to-kazakhstan-2026'],
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

  'what-is-nevo-changan-new-energy-brand-explained': {
    slug: 'what-is-nevo-changan-new-energy-brand-explained', category: 'industry', categoryLabel: 'Industry & Policy',
    title: 'What Is NEVO? Changan\'s New Energy Export Brand Explained',
    excerpt: 'NEVO is Changan Auto\'s export brand name for its new-energy sub-brand, sold in China as Qiyuan (启源). Covers the NEVO Q05 and A07, real launch markets, and specs.',
    hero: '/images/vehicles/evautopro-nevo-a07-01.webp', date: '2026-07-18 09:00:00', readMin: 8,
    body: `NEVO is Changan Auto's dedicated new-energy sub-brand — the export-market name for what's sold inside China as **Changan Qiyuan (长安启源)**. If you've landed on a NEVO product listing and don't recognize the name, that's expected: it's the same manufacturer, the same engineering, and in most cases the same vehicle, just carrying the brand name Changan uses on its global site instead of the Chinese domestic name. EV Auto Pro currently exports two NEVO models: the compact electric [NEVO Q05](/cars/nevo-q05/) SUV and the mid-large [NEVO A07](/cars/nevo-a07/) sedan, available as either a full BEV or an extended-range EREV.

## Why Haven't I Heard of NEVO Before?

If NEVO doesn't ring a bell, you're not missing something — it's a genuinely new name in most export markets. Major Chinese automakers spinning up dedicated new-energy sub-brands is a well-established industry pattern: large legacy OEMs increasingly separate their electric and range-extended vehicle lines under a distinct brand identity, distinct from their traditional combustion-engine model range. Changan has done this with Qiyuan domestically, and NEVO is the name that identity carries when the vehicles are sold outside China.

This is worth stating plainly because it changes how you should evaluate a NEVO listing: you are not looking at a small independent startup with an unproven supply chain, and you are not looking at a rebadge of an unrelated car. You are looking at Changan Auto's new-energy product line under an export-specific brand name. That said, EV Auto Pro is not going to assert a founding year, a specific export-country count, or a business-relationship history for NEVO beyond what can actually be confirmed — vague or invented "since 20XX" claims are exactly the kind of thing a buyer should distrust on any Chinese-EV listing, including ours. What we can confirm is the product data below: real specs, real launch markets, real delivery records.

Practically, the brand-name confusion resolves itself once you check the domestic model name. If a spec sheet, VIN plate, or supplier document references "Qiyuan" instead of "NEVO," that is not a red flag — it is the same vehicle under its China-market name.

## Is NEVO the Same Company as Changan?

Yes. NEVO is not a separate manufacturer, a joint venture with different ownership, or a third-party brand licensing Changan technology — it is Changan Auto's own new-energy sub-brand, and NEVO is specifically the name used for **export markets**, while Changan Qiyuan is the name used for the **China domestic market**. The two model names map directly:

- NEVO Q05 (export) = Qiyuan Q05 (China domestic name)
- NEVO A07 (export) = Qiyuan A07 (China domestic name)

This dual-naming approach is common with Chinese automakers building export-focused sub-brands — the export name is often chosen for easier pronunciation or trademark availability in international markets, while the domestic name stays in Chinese. It does not indicate two different products, two different quality standards, or two different supply chains. When you buy a NEVO Q05 or NEVO A07 through an export channel, you are buying the same engineering platform documented for the Chinese market, sold under the brand name Changan uses internationally.

If a supplier or listing uses "Qiyuan" and another uses "NEVO" for what looks like the identical vehicle, that's consistent — not a discrepancy to be suspicious of. If the specs actually differ between two listings claiming to be the same model, that's the thing worth questioning, not the brand name itself.

## What Models Does NEVO Currently Export?

Two NEVO models are in EV Auto Pro's export catalog today — one compact SUV and one mid-large sedan offered in two powertrain configurations:

| Spec | NEVO Q05 (BEV) | NEVO A07 (BEV) | NEVO A07 (EREV) |
| --- | --- | --- | --- |
| China domestic name | Qiyuan Q05 | Qiyuan A07 | Qiyuan A07 |
| Body type | Compact electric SUV | Mid-large sedan | Mid-large sedan |
| Motor | 120kW / 163PS, single front motor | 190kW / 255PS | 200kW / 268PS + 1.5L range-extender |
| Battery | 51.9kWh LFP (CATL) | 79kWh LFP | 35.1kWh |
| Range | 462km (NEDC) | 730km (CLTC) | 310km pure-electric / 1,570km combined |
| FOB price | $18,500–21,800 | $19,640–22,450 | $19,640–22,450 |
| Product page | [NEVO Q05](/cars/nevo-q05/) | [NEVO A07](/cars/nevo-a07/) | [NEVO A07](/cars/nevo-a07/) |

The Q05 is a pure BEV with no range-extender option. The A07 is the more flexible of the two: buyers can choose the full-battery BEV version for maximum range on a single charge (730km CLTC), or the EREV version, which pairs a smaller 35.1kWh battery with a 1.5L engine that generates electricity to extend total range to 1,570km — useful in markets where public DC fast-charging infrastructure is still limited. Which configuration fits a given market depends heavily on local charging density, so confirm the powertrain before placing an order rather than assuming BEV-by-default.

## Where Has NEVO Actually Been Sold?

This is the question that separates marketing claims from confirmed facts, and it's worth answering narrowly rather than broadly.

The **NEVO Q05** launched in Thailand in May 2026, assembled there via CKD (complete knock-down kit assembly), and is also sold in Uzbekistan. Those are the two markets currently confirmed for this model.

The **NEVO A07** has confirmed real delivery records to Russia, Kyrgyzstan, and Saudi Arabia, moving through established export channels. That is a narrower, more specific claim than a generic "exported to dozens of countries" line you might see on a trading-platform listing — and it's deliberately narrow, because that's what can actually be confirmed.

![NEVO Q05 compact electric SUV, studio side profile](/images/vehicles/evautopro-nevo-q05-appearance-01.webp)

If a supplier tells you NEVO has an export history broader than these confirmed markets, ask for the specific country and shipment evidence rather than accepting a round-number country count. EV Auto Pro would rather tell you the confirmed, narrower list than repeat an unverifiable bigger one.

## Best For / Not Ideal For

**Best for:**
- Buyers who want current-generation LFP battery chemistry (CATL cells on the Q05) from an established, non-startup manufacturer.
- Fleet or dealer buyers in markets with developing charging infrastructure, where the A07 EREV's 1,570km combined range covers the gap a pure BEV can't.
- Buyers already comfortable with Changan as a manufacturer who want the new-energy product line specifically.

**Not ideal for:**
- Buyers who need a brand with a long, widely recognized export track record in their specific country — NEVO's confirmed export markets are currently limited to Thailand, Uzbekistan (Q05) and Russia, Kyrgyzstan, Saudi Arabia (A07). If your target market isn't on that list, treat it as unconfirmed territory and ask us directly before committing.
- Buyers who need a same-day answer on export-country count or company history beyond what's stated above — we won't manufacture a number we can't back up, and that means some questions get "we don't have a verified answer" instead of a confident-sounding guess.

## Ready to Order a NEVO Q05 or A07?

If you're evaluating the Changan NEVO lineup for your market, we can walk you through current spec sheets, confirm which powertrain configuration fits your charging infrastructure, and quote current FOB pricing for either model.

**Talk to us now:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27d%20like%20current%20FOB%20pricing%20on%20the%20Changan%20NEVO%20Q05%20and%20A07) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com) — we reply within 24 hours, usually faster.`,
    faqs: [
      { q: 'Is NEVO a different manufacturer from Changan?', a: 'No. NEVO is Changan Auto\'s own export brand name for its new-energy sub-brand, sold in China as Changan Qiyuan (长安启源). The vehicles, engineering, and manufacturer are the same — only the brand name changes between the domestic and export markets.' },
      { q: 'What\'s the difference between NEVO Q05 and NEVO A07?', a: 'The Q05 is a compact electric SUV: 51.9kWh LFP battery, 462km NEDC range, 120kW/163PS single motor. The A07 is a larger mid-large sedan offered as a 79kWh BEV (730km CLTC, 190kW/255PS) or as an EREV with a 1.5L range-extender, 35.1kWh battery, and 310km pure-electric range.' },
      { q: 'Where can I actually buy a NEVO today?', a: 'The NEVO Q05 launched in Thailand in May 2026 (CKD-assembled) and is sold in Uzbekistan. The NEVO A07 has confirmed real delivery records to Russia, Kyrgyzstan, and Saudi Arabia through established export channels. Ask us directly if your market isn\'t on this list.' },
      { q: 'Is the A07 EREV the same as a regular hybrid?', a: 'Not exactly. The NEVO A07 EREV pairs a 200kW/268PS motor with a 1.5L range-extender engine and a 35.1kWh battery. It drives as a pure EV for 310km on battery alone; after that, the engine generates electricity for the motor rather than driving the wheels directly, extending total combined range to 1,570km.' },
      { q: 'How much does a NEVO cost FOB?', a: 'NEVO Q05 is quoted FOB $18,500–21,800. NEVO A07 (either BEV or EREV configuration) is quoted FOB $19,640–22,450. Final pricing depends on trim and battery/powertrain configuration — confirm current numbers with EV Auto Pro before ordering.' },
    ], related: ['nevo-a07-buying-guide-bev-vs-erev', 'import-cars-from-china-to-uzbekistan-2026', 'how-to-choose-changan-suv'],
  },

  'import-cars-from-china-to-armenia-2026': {
    slug: 'import-cars-from-china-to-armenia-2026', category: 'market', categoryLabel: 'Market & Import',
    title: 'Import Cars from China to Armenia (2026 Guide)',
    excerpt: 'Import cars from China to Armenia in 2026: the EAEU duty tiers (15-20% by vehicle age), 20% VAT, the Poti/Batumi shipping route via Georgia, and whether the new EV quota applies to dealers.',
    hero: '/images/vehicles/evautopro-geely-atlas-01.webp', date: '2026-07-18 09:00:00', readMin: 8,
    body: `To import cars from China to Armenia in 2026, a dealer bringing in a legal-entity shipment budgets three layers of cost: an age-based EAEU customs duty (15% of the customs value for cars up to 3 years old, rising steeply for older units), 20% VAT charged on the customs value plus duty, and freight routed through Georgia's Poti or Batumi port, since Armenia has no coastline of its own. A new EAEU quota also opens 15,000 duty-free electric and hybrid import slots for 2026, though it is not yet clearly confirmed whether a commercial dealer import qualifies for the customs-duty exemption or only the VAT relief. This guide breaks down the numbers, the shipping route, and the paperwork for a first order.

## What Does Vehicle Import Duty Cost in Armenia?

Armenia is a member of the Eurasian Economic Union (EAEU), so passenger vehicles do not clear at the general goods tariff — they follow their own age-and-engine-based schedule under the EAEU Common Customs Tariff. For a legal entity (dealer/importer) bringing in a car:

| Vehicle age | Duty rate | Basis |
| --- | --- | --- |
| Up to 3 years old | 15% | Customs (CIF) value |
| 3–7 years old | 20%, minimum €0.44/cm³ | Customs value or engine displacement — whichever is higher |
| Over 7 years old | Specific duty per cm³ | Fixed EUR/cm³ rate, steep enough to rule out most older used cars as a cost-effective import |

For a dealer sourcing new or current-model-year stock from China — the kind of order this route is built for — the 15% tier is normally the one that applies.

One important flag before you price a shipment: these figures come from [brokers.am's customs clearance guide](https://brokers.am/en/blog/avtomeqenaneri-maqsazercum), a private customs-broker resource, not Armenia's State Revenue Committee directly. We were not able to independently verify them against the official EAEU Common Customs Tariff or the relevant annex of Armenia's Tax Code at the time of writing. Treat the table above as a planning figure, not a quoted rate — have a licensed Armenian customs broker confirm the exact duty for your model year and engine size before signing a purchase contract.

## What Other Taxes Apply Besides Duty?

VAT in Armenia is 20%, and this figure is well confirmed across independent sources: the [US Commerce Department's trade.gov Armenia Import Tariffs guide](https://www.trade.gov/country-commercial-guides/armenia-import-tariffs), [PwC's Worldwide Tax Summaries](https://taxsummaries.pwc.com/armenia/corporate/other-taxes), and [armenian-lawyer.com's import compliance guide](https://armenian-lawyer.com/business-immigration/armenia-import-customs-procedures-compliance-guide/) all agree on the rate. The important detail dealers miss: VAT is applied to the customs value **plus** the duty already paid, not to the customs value alone. Budget it as a tax on a tax, not a flat 20% of the car's price.

There is also a separate environmental tax for vehicles over 5 years old when the importer is a legal entity. Broker sources put the rate around 2% at 6 years old, scaling with age, but we could not confirm an exact official schedule — if your order includes any vehicle past the 5-year mark, get the current environmental-tax figure in writing from your broker before quoting a retail price.

![Passenger vehicles boarding a RoRo vessel at a commercial port](/images/services/shipping.webp)

## Does the 2026 EAEU EV Quota Help a Dealer Importing for Resale?

Effective January 1, 2026, the Eurasian Economic Commission opened a duty-free quota of 15,000 electric and hybrid vehicles (model years 2024–2026) across Armenia, Belarus and Kyrgyzstan combined. This is confirmed through the [EEC's own announcement](https://eec.eaeunion.org/en/news/mezhpravsovet-predostavil-tarifnuyu-lgotu-na-vvoz-elektromobiley-v-armeniyu-belarus-i-kyrgyzstan-v-2/) and reported by [Armenpress](https://armenpress.am/en/article/1237410) and [Arka.am](https://arka.am/en/news/business/armenia-will-be-granted-duty-free-quota-for-import-of-15-000-electric-vehicles-in-2026-/).

Here is the part that matters before you build a business case around it: the sources do not fully agree on who qualifies.

- The EEC's own notice restricts the **customs-duty exemption** to permanent residents of Armenia, Belarus or Kyrgyzstan, and explicitly bars resale to residents of Russia or Kazakhstan — language that reads as a personal-use benefit, not a dealer allocation.
- Armenpress and Arka.am describe the quota more broadly as covering "electric vehicles including hybrids," with the **VAT exemption** extended to both individuals and legal entities.

So the VAT-only relief looks more plausibly available to a legal-entity dealer than the customs-duty exemption does. Whether a China-import dealer bringing EVs in for resale can access the duty-free portion of this quota at all is **not clearly confirmed** by any source we found. Do not promise a customer duty-free EV pricing until you have direct written confirmation from Armenia's State Revenue Committee (petekamutner.am / src.am) or the EEC on how the quota applies to commercial imports.

## What's the Shipping Route from China to Yerevan?

Armenia is landlocked, so every car arriving from China moves through a neighboring country's port. Multiple independent freight forwarders — [Sino-Shipping](https://www.sino-shipping.com/shipping-from-china-to-armenia/), [Basenton](https://www.basenton.com/shipping-from-china-to-armenia/) and [SDI Logistics](https://www.sdilogistics-shippings.com/ocean-freight/four-transportation-routes-from-china-to.html) — converge on the same route: sea freight from China to Georgia's Poti or Batumi port, roughly 35–45 days transit, followed by RoRo or trucking overland along the Tbilisi–Yerevan corridor into Armenia.

There is no Armenian government source confirming this route directly (Armenia has no ports of its own), but the consensus across independent commercial sources is consistent enough to plan around. If you're new to this corridor, it's worth reading our [Georgia import and re-export guide](/news/import-cars-from-china-to-georgia-2026-reexport-hub/) first — Georgia's Poti and Batumi ports are the same gateway Armenia-bound cars pass through, and that guide covers Georgian port handling, the 180-day re-export refund mechanism, and documentation in more depth.

![Export professionals reviewing a vehicle shipment file](/images/services/export-process.webp)

## Jetour X50 or Changan CS55 Plus: Which Fits a First Armenian Order?

Both are compact SUVs and both ship as current-model-year stock, which is what keeps them in the 15% duty tier rather than the steeper 3–7-year bracket.

| | [Jetour X50](/cars/jetour-x50/) | [Changan CS55 Plus](/cars/changan-cs55-plus/) |
| --- | --- | --- |
| Body type | Compact SUV | Compact SUV |
| FOB price (China) | $9,000 – $13,500 | $14,500 – $17,900 |
| Market position | Entry-level urban compact SUV | Changan's best-selling compact SUV |
| Fits best | A value-conscious first order, lower entry price | Buyers who want the proven, higher-volume model |

![Jetour X50 official UAE marketing campaign shot](/images/vehicles/evautopro-jetour-x50-appearance-01.webp)

The X50's lower FOB gives a first-time Armenian importer more room to absorb the 15% duty and 20% VAT stack while still landing at a competitive retail price. The CS55 Plus costs more per unit but carries best-seller status, which matters if you're trying to move volume quickly in a market where buyers may not yet recognize the brand. Neither figure above includes freight, duty or VAT — those are quoted per shipment once route and quantity are confirmed.

![Changan CS55 Plus — Changan's best-selling export SUV, real production unit](/images/vehicles/evautopro-changan-cs55-plus-appearance-01.webp)

## What Documents Does Armenian Customs Require?

Prepare this set before the vehicle loads in China, then have your Armenian broker confirm anything specific to your importer registration:

- Customs declaration filed through Armenia's electronic DTI system
- Commercial invoice / sales contract
- Packing list
- Bill of Lading (or CMR for the overland leg from Georgia)
- Certificate of origin
- For used vehicles: proof of prior registration/ownership

This list is confirmed by [armenian-lawyer.com's import procedures guide](https://armenian-lawyer.com/business-immigration/armenia-import-customs-procedures-compliance-guide/) and the [US Commerce Department's Armenia import requirements guide](https://www.trade.gov/country-commercial-guides/armenia-import-requirements-and-documentation). Keep the VIN, invoice value and model description consistent across every document — a mismatch between the commercial invoice and the DTI declaration is one of the most common reasons a shipment gets held at clearance.

## Who Is This Import Route Best For?

**Best for:** Armenian dealers and importers doing legal-entity shipments of new or current-model-year Chinese SUVs, who can budget the 15% duty + 20% VAT stack, route through Georgia's Poti/Batumi ports, and want to start with a value-priced model like the [Jetour X50](/cars/jetour-x50/) or a proven seller like the [Changan CS55 Plus](/cars/changan-cs55-plus/).

**Not ideal for:** anyone planning to import a car older than 7 years — the specific per-cm³ duty tier at that age is intentionally punitive and rarely worth it economically. It's also not the right route for a buyer counting on the 2026 EV quota as a guaranteed duty-free path for resale stock — the customs-duty exemption appears, on the EEC's own wording, to be restricted to permanent residents importing for personal use, with resale to Russia or Kazakhstan explicitly barred. Confirm your eligibility in writing with Armenia's State Revenue Committee before pricing any EV order around that quota.

## Get a Landed-Cost Quote Before You Order

Armenia's vehicle duty tiers, the environmental tax schedule, and the reach of the 2026 EV quota all have gaps that only a licensed Armenian broker or the State Revenue Committee can close with certainty. What we can do from the China side is quote your FOB price, prepare export documentation, and route the shipment through Poti or Batumi — send us your target model and quantity and we'll return a full quote so your local broker can confirm the final landed numbers.

**Sources & further reading:** [brokers.am — car customs clearance guide](https://brokers.am/en/blog/avtomeqenaneri-maqsazercum) · [trade.gov — Armenia Import Tariffs](https://www.trade.gov/country-commercial-guides/armenia-import-tariffs) · [trade.gov — Armenia Import Requirements and Documentation](https://www.trade.gov/country-commercial-guides/armenia-import-requirements-and-documentation) · [PwC Worldwide Tax Summaries — Armenia](https://taxsummaries.pwc.com/armenia/corporate/other-taxes) · [armenian-lawyer.com — Import Customs Procedures & Compliance Guide](https://armenian-lawyer.com/business-immigration/armenia-import-customs-procedures-compliance-guide/) · [EEC official announcement — 2026 EV quota](https://eec.eaeunion.org/en/news/mezhpravsovet-predostavil-tarifnuyu-lgotu-na-vvoz-elektromobiley-v-armeniyu-belarus-i-kyrgyzstan-v-2/) · [Armenpress](https://armenpress.am/en/article/1237410) · [Arka.am](https://arka.am/en/news/business/armenia-will-be-granted-duty-free-quota-for-import-of-15-000-electric-vehicles-in-2026-/). Always confirm current duty, VAT and quota rules with Armenia's State Revenue Committee or a licensed customs broker before finalizing an order.

**Talk to us:** WhatsApp [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%20need%20an%20Armenia%20vehicle%20import%20quote) or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com) — we reply within 24 hours, usually faster.`,
    faqs: [
      { q: 'What is the customs duty on a car imported from China to Armenia?', a: 'Under the EAEU Common Customs Tariff, a legal-entity import pays 15% of the customs (CIF) value for a vehicle up to 3 years old, 20% of customs value with a minimum of €0.44/cm³ of engine displacement for a 3-7 year old car, and a steep specific per-cm³ duty for anything older. These figures come from a customs-broker source and are not yet confirmed against Armenia\'s State Revenue Committee directly — verify with a licensed broker before pricing.' },
      { q: 'How much VAT do I pay importing a car into Armenia?', a: '20% VAT, applied to the customs value plus the duty already paid, not to the customs value alone. This rate is confirmed by the US Commerce Department\'s trade.gov guide and PwC\'s Worldwide Tax Summaries. A separate environmental tax also applies to legal-entity imports of vehicles over 5 years old.' },
      { q: 'Can a dealer import electric vehicles into Armenia duty-free under the 2026 quota?', a: 'Armenia has a 2026 EAEU quota for 15,000 duty-free EVs/hybrids, but sources disagree on scope: the EEC\'s own notice restricts the customs-duty exemption to permanent residents importing for personal use, while Armenpress and Arka.am describe a broader VAT exemption for both individuals and legal entities. Whether a China-import dealer qualifies for the duty-free portion is not clearly confirmed — get written confirmation from Armenia\'s State Revenue Committee before pricing an order around it.' },
      { q: 'How do cars ship from China to Armenia since it has no ports?', a: 'Cars move by sea freight from China to Georgia\'s Poti or Batumi port (roughly 35-45 days transit), then overland by RoRo or truck along the Tbilisi-Yerevan corridor into Armenia. This route is confirmed by multiple independent freight forwarders, though no Armenian government source verifies it directly since the country is landlocked.' },
      { q: 'What documents does Armenian customs require for an imported car?', a: 'You need a customs declaration filed through Armenia\'s electronic DTI system, commercial invoice or sales contract, packing list, Bill of Lading or CMR, certificate of origin, and for used vehicles, proof of prior registration or ownership. Keep the VIN and invoice value consistent across every document to avoid clearance delays.' },
    ], related: ['import-cars-from-china-to-georgia-2026-reexport-hub', 'import-cars-from-china-to-kazakhstan-2026', 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import'],
  },
  'volkswagen-china-export-program-explained': {
    slug: 'volkswagen-china-export-program-explained', category: 'industry', categoryLabel: 'Industry & Policy',
    title: 'Volkswagen\'s China Export Program Explained: What Buyers Need to Know',
    excerpt: 'FAW-Volkswagen shipped 554 Magotan and Sagitar units from Shanghai Port in September 2025 as China\'s first official VW export. Here\'s how the program works.',
    hero: '/images/vehicles/evautopro-volkswagen-magotan-01.webp', date: '2026-07-18 10:30:00', readMin: 8,
    body: `Volkswagen's China export program is real and factory-backed — not a grey-market rebadge job. In September 2025, FAW-Volkswagen (one of Volkswagen's two Chinese joint-venture manufacturers) shipped 554 Magotan and Sagitar units out of Shanghai Port bound for the Middle East, marking China's first official Volkswagen export shipment. Volkswagen Brand Middle East's own General Manager personally received the first unit at the handover ceremony. The flagship model of that program, the [Volkswagen Magotan](/cars/volkswagen-magotan/), has been on sale in the UAE and Saudi Arabia since November 2025, with Kazakhstan completing certification in July 2026.

## Is This Actually an Official Volkswagen Program, or Just a Rebadged Export Car?

This is the question every skeptical buyer should ask first, and it's a fair one — plenty of "China export" listings are grey-market vehicles with no factory involvement at all. The Magotan export program is different in one specific, checkable way: it wasn't handed off quietly. When the first 554 units (a mix of Magotan and Sagitar) left Shanghai Port in September 2025, Volkswagen Brand Middle East's own General Manager was present to personally receive the first unit at the handover ceremony. That's a regional brand executive, not a third-party distributor or reseller, putting their name on the shipment.

The Magotan itself is built by FAW-Volkswagen — one of Volkswagen's two long-running joint-venture manufacturers in China (the other being SAIC-Volkswagen, which matters later in this article). In China, the Magotan (迈腾) is FAW-Volkswagen's flagship mid-size sedan. This September 2025 shipment was the model's, and the program's, first-ever official export run — meaning there's no decade of export history to point to yet, but there is a documented factory-to-market handover to anchor the claim of "official" on.

For a buyer, the practical takeaway is: verify the shipment date, the port, and the receiving party independently if you want extra assurance — all three are specific enough to check, which is itself a signal of a real program rather than a marketing claim.

## Which Markets Can Actually Buy the Export Magotan Right Now?

As of July 2026, the program covers three markets at three different stages — worth knowing before you inquire, so you're not asking for something that isn't sellable in your country yet.

| Market | Status | Detail |
|---|---|---|
| UAE | Live | On sale since November 2025 |
| Saudi Arabia | Live | On sale since November 2025 |
| Kazakhstan | Certified, pre-sales | Certification completed July 2026; sales expected H2 2026 via distributor Orbis Auto/Mercur Autos |

UAE and Saudi Arabia are the most mature part of the program — both have had live retail availability for roughly eight months as of this writing. Kazakhstan is the newest addition: certification cleared in July 2026, and the distributor network (Orbis Auto and Mercur Autos) is already named, but actual sales are expected in the second half of 2026 rather than immediately. If you're outside these three markets, the honest answer is that this program hasn't been confirmed to extend there yet — ask directly rather than assuming coverage.

## Is the Kazakhstan "Passat" the Same Car as the Magotan — or a Different Vehicle Entirely?

This is the single most important clarification in this article, because it's where buyers researching Volkswagen exports online are most likely to get confused.

For the Kazakhstan market specifically, FAW-Volkswagen's Magotan will be sold under the name **"Passat"** rather than "Magotan." Mechanically and in every spec that matters, it's the same export vehicle described in this article — just rebadged for that one market.

Here's the part that trips people up: Volkswagen's *other* Chinese joint venture, SAIC-Volkswagen, builds and sells its own, completely separate model also called **"Passat Pro"** — sold in China and Uzbekistan. Same brand, same name (Passat), but two different cars from two different joint-venture manufacturers, with no shared platform lineage implied by this naming overlap.

If you're sourcing from China and someone quotes you a "VW Passat," the first question to ask is which joint venture built it — FAW-Volkswagen (the Magotan-based export car, rebadged Passat for Kazakhstan only) or SAIC-Volkswagen (the separate Passat Pro, sold in China and Uzbekistan). Confirm the manufacturer and market before assuming you're getting the model described in this article.

## What Engine and Spec Options Does the Export Magotan Come With?

The export Magotan is offered with two turbocharged four-cylinder options, split across trim levels:

| Spec | 1.4T (Comfort / Luxury) | 2.0T (top Luxury trim) |
|---|---|---|
| Power | 150 hp (110 kW) | 186 hp (137 kW) |
| Torque | 250 N·m | 320 N·m |
| Transmission | Dry 7-speed DCT | Wet 7-speed DCT |

Both engines sit in the same body: 4,866mm long × 1,832mm wide × 1,479mm tall, on a 2,871mm wheelbase, with a curb weight of 1,452kg. Top speed is 210 km/h, and 0–100 km/h takes 9.4 seconds. Note the transmission difference too: the 1.4T uses a dry-clutch 7-speed DCT, while the 2.0T uses a wet-clutch 7-speed DCT — wet clutches are the more common choice for handling higher torque loads over sustained driving, which is consistent with the 2.0T's higher 320 N·m figure versus the 1.4T's 250 N·m. Buyers cross-shopping mid-size sedans for the Middle East or Central Asia should note the 2.0T is reserved for the top Luxury trim only; the 1.4T covers both Comfort and Luxury, so the entry point into the Magotan lineup is a 1.4T Comfort car, not the 2.0T.

## What Does It Cost, and How Do You Actually Order One?

FOB pricing for the export Magotan runs **$21,420–$28,736**, spanning the trim and engine choices described above. Full trim-by-trim pricing and spec detail is on the [Volkswagen Magotan product page](/cars/volkswagen-magotan/).

Because this is a newly catalogued export model — the program itself only started shipping in September 2025 — it is currently made to order rather than held in ready stock. MOQ is 1 unit, with a lead time of roughly 30 days. That's a meaningfully different buying process than sourcing an established export model with units already sitting at port; budget the extra weeks accordingly.

One thing this article deliberately does not do is quote you a landed cost including duty, VAT, or registration fees — those rules are set by each destination country, change on their own schedule, and differ by market. If you're importing into Kazakhstan specifically, see our [Kazakhstan import guide](/news/import-cars-from-china-to-kazakhstan-2026/) for current duty and VAT figures; for UAE buyers weighing this against a local dealer, see our [UAE dealers vs. direct import guide](/news/chinese-car-dealers-uae-vs-direct-import-2026/). Always confirm current rates with your customs broker before finalizing a budget.

## Best For / Not Ideal For

**Best for:**
- Buyers in the UAE or Saudi Arabia who want a globally recognized Volkswagen badge in the mid-size sedan segment, available for order today.
- Kazakhstan buyers or distributors planning around an H2 2026 launch window, who want to lock in early with Orbis Auto/Mercur Autos or a China-side exporter ahead of local retail.
- Buyers who want engine choice — 1.4T for a lower entry price, or 2.0T on the top Luxury trim for more power.
- Buyers comfortable with a made-to-order process (roughly 30 days) rather than needing a unit shipped this week.

**Not ideal for:**
- Buyers needing immediate stock — this model has no ready stock on hand; every order is made to order.
- Buyers in markets outside UAE, Saudi Arabia, and Kazakhstan — the program has not been confirmed to extend further yet, and we won't claim coverage that isn't documented.
- Anyone who was actually looking for SAIC-Volkswagen's Passat Pro (the China/Uzbekistan model) — this is a different car from a different joint venture, and we cannot substitute one for the other.

## Frequently Asked Questions

**Is the Magotan a genuine official Volkswagen export model?**
Yes — it's the flagship model of FAW-Volkswagen's first-ever official export program. 554 Magotan and Sagitar units departed Shanghai Port in September 2025 for the Middle East, with Volkswagen Brand Middle East's own General Manager receiving the first unit at the handover ceremony.

**Is "Magotan" the same car as the Kazakhstan-market "Passat"?**
Yes, for the Kazakhstan case specifically — FAW-Volkswagen's Magotan is rebadged "Passat" for the Kazakhstan market, certified July 2026. This is different from SAIC-Volkswagen's own separate "Passat Pro" sold in China and Uzbekistan — same name, two different cars from two different joint ventures.

**What powertrain options are available?**
Two: a 1.4T (150 hp / 110 kW / 250 N·m, dry 7-speed DCT) on Comfort and Luxury trims, or a 2.0T (186 hp / 137 kW / 320 N·m, wet 7-speed DCT) on the top Luxury trim only. Both share the same body: 4,866×1,832×1,479mm, 1,452kg, 210 km/h top speed, 0–100 km/h in 9.4 seconds.

**Which markets can this ship to today?**
The UAE and Saudi Arabia have been live since November 2025 — retail-ready today. Kazakhstan completed certification in July 2026, with sales expected in the second half of 2026 through distributor Orbis Auto/Mercur Autos, where the car will be sold as the "Passat." No other markets are confirmed for this program yet.

**What's the MOQ and lead time?**
This is a newly catalogued model within the export program, so it's made to order rather than shipped from ready stock — MOQ is 1 unit, with a lead time of roughly 30 days from confirmed order to production slot. Contact us for current factory allocation before you finalize a purchase timeline.

## How Do You Get a Quote for the Export Magotan?

If you're sourcing the Volkswagen Magotan for the UAE, Saudi Arabia, or Kazakhstan, reach out with your target market and trim and we'll confirm current FOB pricing and allocation against the September 2025 export program.

[WhatsApp: +86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27m%20interested%20in%20the%20Volkswagen%20Magotan%20export%20program%20%28FOB%20pricing%20%2B%20lead%20time%29.) · [gacaicai@gmail.com](mailto:gacaicai@gmail.com)`,
    faqs: [
      { q: 'Is the Magotan a genuine official Volkswagen export model?', a: 'Yes — it\'s the flagship model of FAW-Volkswagen\'s first-ever official export program. 554 Magotan and Sagitar units departed Shanghai Port in September 2025 for the Middle East, with Volkswagen Brand Middle East\'s own General Manager receiving the first unit at the handover ceremony.' },
      { q: 'Is "Magotan" the same car as the Kazakhstan-market "Passat"?', a: 'Yes, for the Kazakhstan case specifically — FAW-Volkswagen\'s Magotan is rebadged "Passat" for the Kazakhstan market, certified July 2026. This is different from SAIC-Volkswagen\'s own separate "Passat Pro" sold in China and Uzbekistan — same name, two different cars from two different joint ventures.' },
      { q: 'What powertrain options are available?', a: 'Two: a 1.4T (150 hp / 110 kW / 250 N·m, dry 7-speed DCT) on Comfort and Luxury trims, or a 2.0T (186 hp / 137 kW / 320 N·m, wet 7-speed DCT) on the top Luxury trim only. Both share the same body: 4,866×1,832×1,479mm, 1,452kg, 210 km/h top speed, 0–100 km/h in 9.4 seconds.' },
      { q: 'Which markets can this ship to today?', a: 'The UAE and Saudi Arabia have been live since November 2025 — retail-ready today. Kazakhstan completed certification in July 2026, with sales expected in the second half of 2026 through distributor Orbis Auto/Mercur Autos, where the car will be sold as the "Passat." No other markets are confirmed for this program yet.' },
      { q: 'What\'s the MOQ and lead time?', a: 'This is a newly catalogued model within the export program, so it\'s made to order rather than shipped from ready stock — MOQ is 1 unit, with a lead time of roughly 30 days from confirmed order to production slot. Contact us for current factory allocation before you finalize a purchase timeline.' },
    ], related: ['import-cars-from-china-to-kazakhstan-2026', 'chinese-car-dealers-uae-vs-direct-import-2026', 'how-to-verify-a-chinese-car-exporter-before-you-pay'],
  },
  'jetour-x90-plus-import-guide-2026': {
    slug: 'jetour-x90-plus-import-guide-2026', category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'Jetour X90 Plus Import Guide: Specs, Pricing, Markets (2026)',
    excerpt: 'A decision-stage import guide to the Jetour X90 Plus flagship 7-seater: full engine and dimension specs, the real FOB price range ($12,990-$26,500), current official export markets, and sourced 2026 duty/VAT rates for UAE, Saudi Arabia, Qatar, Nigeria, Egypt, Kazakhstan, and Russia.',
    hero: '/images/vehicles/evautopro-jetour-x90-plus-01.webp', date: '2026-07-18 12:00:00', readMin: 11,
    body: `The Jetour X90 Plus is a full-size, factory 5/6/7-seat flagship SUV built on a front-wheel-drive ICE platform, positioned as Jetour's premium three-row option for buyers who need genuine cabin space rather than a compact crossover with an extra row squeezed in. It's offered with two turbocharged engines — a 1.6TGDI (145kW/197PS) or a flagship 2.0TGDI (187kW/254PS) — both paired to a 7-speed wet dual-clutch transmission. Trade-platform FOB listings currently range from $12,990 to $26,500 depending on engine, trim, and seat configuration, though Jetour has not published an official factory list price. This guide covers the full spec sheet, real current import markets, and the duty/tax structure you'll actually face before you commit to an order.

## What Is the Jetour X90 Plus?

The Jetour X90 Plus sits at the top of Jetour's SUV lineup as the brand's premium flagship 7-seater — a full-size, internal-combustion SUV built on a front-wheel-drive layout with factory 5, 6, or 7-seat configurations depending on which trim you order. It's positioned above the smaller [Jetour X70 Plus](/cars/jetour-x70-plus/) for buyers who need genuine third-row space rather than an occasional-use rear bench bolted onto a compact-class platform.

At 4858mm long, 1925mm wide, and 1780mm tall on a 2850mm wheelbase, the X90 Plus is built for markets where family size, ride-hailing fleets, or multi-generational travel make a true 3-row SUV a practical requirement rather than a luxury. It's currently certified and sold through official or regional-dealer channels across seven markets spanning the Gulf, North Africa, West Africa, Russia, and Central Asia — see the [full X90 Plus product page](/cars/jetour-x90-plus/) for the complete spec sheet and current photos.

The rest of this guide breaks down engine choices, cargo capacity, real FOB pricing, and the duty/tax structure you'll face in each import market.

## What Engine and Performance Specs Does the Jetour X90 Plus Offer?

The X90 Plus is offered with two turbocharged gasoline engines, both paired to the same 7-speed wet dual-clutch transmission (DCT) driving the front wheels:

| Spec | 1.6TGDI (Entry) | 2.0TGDI (Flagship) |
|---|---|---|
| Power | 145 kW / 197 PS | 187 kW / 254 PS |
| Torque | 290 N·m | 390 N·m |
| Transmission | 7-speed wet DCT | 7-speed wet DCT |
| Drive layout | FWD | FWD |

Jetour rates the X90 Plus lineup for a 190 km/h top speed.

The choice between the two comes down to how the vehicle will actually be used. The 1.6TGDI's 290N·m is adequate for city and highway driving with a typical passenger load, and a smaller-displacement engine generally means lower running costs and — depending on the destination market's tax bands — a lighter duty bill (Egypt, for example, tiers customs duty by engine displacement; see the tax section below). The 2.0TGDI's extra 100N·m of torque and 57PS matters more when the vehicle is regularly loaded with 6-7 occupants plus cargo, or used in hillier terrain. Neither engine is offered with a hybrid or EV powertrain in the specs provided — this is a pure ICE lineup.

## What Are the Dimensions, Weight, and Cargo Capacity?

| Spec | Value |
|---|---|
| Length x Width x Height | 4858 x 1925 x 1780 mm |
| Wheelbase | 2850 mm |
| Weight | 1742 kg |
| Seating configuration | 5, 6, or 7 seats (factory options) |
| Cargo (5-seat, seats up) | 486 L |
| Cargo (all seats folded) | 1052 L |

At 4858mm long and riding on a 2850mm wheelbase, the X90 Plus falls into the full-size SUV class — long enough to give the second and third rows genuine legroom rather than the compressed +2 seating common in smaller 7-seat crossovers. The 1742kg factory weight is worth flagging for two practical reasons: it feeds into recycling/utilization fee calculations in markets like Russia and Kazakhstan where fees are partly displacement- or weight-linked, and it's a data point your freight forwarder will need for accurate shipping cost quotes.

Cargo capacity swings from 486L with all seats up (5-seat configuration, behind the third row) to 1052L with the rear seats folded flat — enough for the vehicle to double as family hauler and cargo runner without needing a roof box for most loads. If your use case is fleet or commercial (ride-hailing, tour operators), confirm which seat configuration (5/6/7) your specific export unit ships in, since cargo volume changes meaningfully between configurations.

## How Much Does the Jetour X90 Plus Cost to Import (FOB Pricing)?

Current FOB (Free On Board) prices on trade platforms for the Jetour X90 Plus range from $12,990 to $26,500, depending on engine (1.6TGDI vs 2.0TGDI), seat configuration (5/6/7), and trim level. Jetour has not published an official factory list price for the X90 Plus, so this range reflects real listings on trade platforms rather than a manufacturer MSRP — treat it as a market indicator, not a locked-in quote.

That's an important distinction for budgeting: FOB price alone tells you what you'd pay to get the vehicle loaded onto a vessel at the export port. It does not include freight, insurance, the destination country's customs duty and VAT (see the next section), registration, or any dealer/agent margin layered on by a local distributor. On a vehicle in this price bracket, duty and tax alone can add anywhere from roughly 10% of value (Qatar, at the low end) to well over 100% (Egypt, at the high end for larger-displacement engines) — so the FOB figure is the starting point of a landed-cost calculation, not the answer to it.

Before placing an order, request a current, written FOB quote tied to your exact spec (engine, seat count, trim) and target port — trade-platform listing ranges move with demand and shouldn't be treated as a fixed price.

## Which Markets Can You Currently Import the Jetour X90 Plus Into?

Per official and regional-dealer sources, the Jetour X90 Plus is currently sold through official or regional-dealer channels in seven markets: Saudi Arabia, UAE, Qatar, Russia, Kazakhstan, Egypt, and Nigeria.

The vehicle carries GCC conformity certification, covering the Gulf Cooperation Council markets (Saudi Arabia, UAE, Qatar), and EAC (Eurasian Conformity) certification, covering Russia and Kazakhstan. Egypt and Nigeria are covered through regional-dealer presence per the source data, separate from the GCC/EAC certification schemes.

If your target market isn't on this list, that doesn't automatically rule out import — it means there's no confirmed official or dealer channel yet, and you'd need to independently verify homologation, type-approval, and certification requirements with your destination country's transport/customs authority before committing to an order. Grey-market or parallel import into a country without an established X90 Plus presence carries meaningfully more compliance risk (and often a longer, costlier homologation process) than ordering into one of the seven markets above.

For any of these seven markets, confirm current certification validity with your supplier before finalizing an order — vehicle certification schemes are periodically updated, and a certificate valid today may need renewal or revalidation by the time your order ships.

## What Import Duties and Taxes Should You Budget For?

Duty and tax structures vary significantly by market and change periodically, so treat the figures below as a starting point for budgeting, not a final landed-cost number. All figures were checked against official/authoritative sources in July 2026 — verify current rates with a licensed customs broker in your destination country before ordering.

| Market | Customs Duty | VAT / Other Taxes |
|---|---|---|
| UAE | 5% of CIF value (GCC common external tariff) | 5% VAT |
| Saudi Arabia | ~5% of CIF value (GCC common external tariff) | 15% VAT (ZATCA) |
| Qatar | 5% of CIF value (ad valorem) | No VAT currently in effect |
| Nigeria | 5% (used vehicles) / 10% (new vehicles) — effective July 1, 2026 | VIN-based customs valuation system + Green Tax Surcharge (from July 1, 2026) |
| Egypt | 30% (engines ≤1,600cc) / 100% (engines >1,600cc) | 14% VAT + 3–8.5% development/service fee |
| Kazakhstan | EAEU Unified Customs Tariff — 15% ad valorem (company imports); personal imports use a per-cm³ combined payment scaled by vehicle age | 16% VAT (from January 1, 2026) |
| Russia | Utilization/recycling fee restructured December 1, 2025, calculated by engine displacement and power | Both X90 Plus engines (197PS/254PS) exceed the 160PS threshold for Russia's preferential personal-use recycling-fee rate — standard/commercial fee schedule applies, confirm exact figure with a broker |

Two notes specific to the X90 Plus. In Egypt, the exact duty band depends on precise engine displacement in cubic centimeters, which isn't specified in the source spec sheet beyond the "1.6TGDI"/"2.0TGDI" naming — confirm the registered cc figure before assuming which band applies, since it's the difference between 30% and 100% duty. In Russia, both the 145kW (197PS) and 187kW (254PS) engines sit above the 160PS cutoff used for Russia's lowest personal-use recycling-fee tier, so expect the standard/commercial fee schedule rather than the low preferential rate often quoted in general Russia car-import guides.

Sources: [UAE customs duties guide](https://inlex-partners.com/blog/uae-customs-duties/), [Saudi Arabia VAT — ZATCA](https://zatca.gov.sa/en/RulesRegulations/VAT/Pages/default.aspx), [Qatar import duties](https://traddal.com/resources/calculate-duties-taxes-imports-qatar), [Nigeria 2026 vehicle tariff cut](https://www.premiumtimesng.com/news/893489-customs-announces-lower-tariffs-on-imported-vehicles-sets-%E2%82%A611tn-revenue-goal.html), [Egypt car import customs duties](https://www.yallamotor.com/news/2025-car-import-customs-duties-in-egypt:-full-guide,-tax-rates,-and-cost-calculations-54641), [Kazakhstan customs calculator](https://stsx.co/customs-calculator), [Russia recycling fee rules](https://eng.autostat.ru/news/27063/).

## Jetour X90 Plus vs Jetour X70 Plus: Which Flagship Fits Your Market?

If the X90 Plus's full-size footprint (4858mm long, 2850mm wheelbase) and $12,990-$26,500 FOB range are more vehicle and more budget than your target buyers need, it's worth knowing Jetour also sells the [Jetour X70 Plus](/cars/jetour-x70-plus/) as a smaller sibling in the same flagship-tier family. We don't have verified specs or FOB pricing for the X70 Plus in this guide — check the dedicated product page for its dimensions, engine options, and current pricing — but as a general rule, let seating requirement decide first: if your market genuinely needs factory 6/7-seat capacity with the cargo and interior room that implies, the X90 Plus is the right starting point; if you're serving buyers who rarely fill a third row and want a smaller footprint or lower entry price, it's worth comparing against the X70 Plus before committing to an order.

## Best For / Not Ideal For

**Best for:**
- Importers in markets that already have GCC or EAC certification coverage (Saudi Arabia, UAE, Qatar, Russia, Kazakhstan), where homologation friction is lower
- Buyers who need genuine factory 6- or 7-seat capacity — large families, tour operators, ride-hailing fleets — not just an occasional-use third row
- Buyers who want an engine choice: the 1.6TGDI for lower running costs and, in tiered markets like Egypt, potentially lower duty exposure, or the 2.0TGDI for extra torque when routinely loaded with 6-7 occupants

**Not ideal for:**
- Buyers who need a fixed, published factory price to budget against — none exists for the X90 Plus yet, so every order needs a live quote tied to current trade-platform listings
- Buyers wanting a hybrid or EV powertrain — the X90 Plus lineup covered here is ICE-only (1.6TGDI/2.0TGDI), with no electrified option in the current spec sheet
- Cost-sensitive buyers targeting Egypt with the larger 2.0TGDI engine — if it lands in the >1,600cc duty band, customs duty alone hits 100% of value before VAT and fees are even added
- Markets outside the seven listed above — importing there means starting homologation and certification verification from scratch rather than relying on an established dealer channel

## Get a Current Quote for the Jetour X90 Plus

FOB pricing, seat configuration availability, and duty/tax rules shift by market and by month — the fastest way to get numbers you can actually budget against is to ask directly. [Message us on WhatsApp](https://wa.me/8615964467914?text=Hi%2C%20I%27m%20interested%20in%20importing%20the%20Jetour%20X90%20Plus.%20Please%20send%20current%20FOB%20pricing%20and%20available%20configurations.) at +86 159 6446 7914 with your target country, preferred engine, and seat configuration, or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com) with the same details. See the full [Jetour X90 Plus product page](/cars/jetour-x90-plus/) for additional photos and specs.`,
    faqs: [
      { q: 'What\'s the difference between the Jetour X90 Plus\'s two engine options?', a: 'The entry 1.6TGDI makes 145kW (197PS) and 290N·m of torque, while the flagship 2.0TGDI makes 187kW (254PS) and 390N·m. Both route power through a 7-speed wet dual-clutch transmission to the front wheels, and Jetour rates both configurations for a 190km/h top speed. The practical difference is torque and mid-range pull rather than top speed — the 2.0TGDI\'s extra 100N·m matters most when the vehicle is loaded with 6-7 occupants and cargo.' },
      { q: 'Is the Jetour X90 Plus available with 7 seats?', a: 'Yes. It\'s a factory-built SUV offered in 5, 6, or 7-seat configurations, with cargo space ranging from 486L behind the third row (5-seat layout, seats up) to 1052L with all seats folded flat. Confirm your target market\'s specific seat-count and cargo requirement with your supplier before ordering, since not every configuration is necessarily stocked at every export point.' },
      { q: 'What certifications does the Jetour X90 Plus carry for import?', a: 'It holds GCC conformity certification, covering Gulf Cooperation Council markets like Saudi Arabia, UAE, and Qatar, and EAC (Eurasian Conformity) certification, covering Russia and Kazakhstan. Confirm with your supplier that the specific unit and engine variant you\'re ordering matches the certification required for your destination market, since certification can be configuration-specific.' },
      { q: 'How much does the Jetour X90 Plus cost FOB, and why isn\'t there a fixed price?', a: 'Trade-platform listings currently show FOB prices ranging from $12,990 to $26,500 depending on engine, seat configuration, and trim. Jetour has not published an official factory list price, so this range reflects real market listings rather than a manufacturer MSRP — get a current quote tied to your exact spec before budgeting, since prices move with trim and demand.' },
      { q: 'Which countries can I import the Jetour X90 Plus into right now?', a: 'Based on official and regional-dealer sources, the X90 Plus is currently sold through official or regional-dealer channels in Saudi Arabia, UAE, Russia, Egypt, Nigeria, Qatar, and Kazakhstan. If your target market isn\'t on this list, it doesn\'t necessarily mean import is impossible — it means there\'s no confirmed dealer presence yet, so homologation and certification feasibility need separate verification.' },
    ], related: ['how-to-choose-jetour-lineup', 'top-7-chinese-suv-for-russia-2026', 'import-cars-from-china-to-saudi-arabia-2026'],
  },
  'nevo-a07-buying-guide-bev-vs-erev': {
    slug: 'nevo-a07-buying-guide-bev-vs-erev', category: 'guide', categoryLabel: 'Buyer Guide',
    title: 'NEVO A07 Buying Guide: BEV vs EREV, Specs, Pricing',
    excerpt: 'The NEVO A07 comes as a 730km-range BEV or a 1,570km-combined EREV — the real decision most buyers face. Here\'s the spec breakdown, honest FOB pricing range, confirmed export markets, and sourced import-duty numbers for Russia, Kyrgyzstan, and Saudi Arabia.',
    hero: '/images/vehicles/evautopro-nevo-a07-01.webp', date: '2026-07-18 13:30:00', readMin: 9,
    body: `The NEVO A07 — sold in China as the Qiyuan A07 — is a mid-large RWD sedan built on two distinct powertrains: a pure-electric BEV with a 79kWh LFP battery rated at 730km CLTC range, and an EREV with a 1.5L range-extender engine plus a 35.1kWh battery good for 1,570km combined range. Confirmed FOB export pricing for the [NEVO A07](/cars/nevo-a07/) runs $19,640–22,450 per unit, though quotes vary by trim and trading platform. The decision that actually matters for most buyers isn't trim color or options — it's BEV or EREV, and the right answer depends heavily on where the car is going.

## What Is the NEVO A07, Exactly?

The NEVO A07 is the export badge for a vehicle sold domestically in China as the Qiyuan A07. It's a mid-large, 5-seat sedan with a rear-wheel-drive layout — a configuration more common on premium/executive sedans than budget front-drive cars, and a useful signal of which segment this model is aiming at.

Exterior tech includes hidden (flush) door handles, a styling choice shared with several recent Chinese EV launches. Inside, the cabin is built around an AR-HUD (augmented-reality head-up display) and a 15.4-inch central touchscreen running on a Qualcomm Snapdragon 8155 chip — the same chipset widely used across current-generation Chinese EV infotainment systems for fast UI response and split-screen multitasking.

The single biggest thing to understand before requesting a quote is that "NEVO A07" isn't one car — it's two, sharing a body but differing completely in how they store and deliver energy. One is a full battery-electric vehicle; the other is an extended-range electric vehicle with a small gasoline engine on board purely to recharge the battery, not to drive the wheels directly. That distinction is covered in full below, because it's the real decision facing most buyers, not a footnote.

## BEV or EREV — Which NEVO A07 Should You Buy?

This is the core choice. Both versions use electric motors to drive the wheels, but they solve the range problem in opposite ways.

The **BEV** uses a single 190kW/255PS motor drawing from a 79kWh LFP (lithium iron phosphate) battery, rated at 730km on China's CLTC test cycle. LFP chemistry is generally valued for thermal stability and longer cycle life versus higher-density NMC packs, though we don't have model-specific cycle-life figures to quote here. There's no engine, no fuel tank, and no combustion maintenance — just a charger.

The **EREV** uses a more powerful 200kW/268PS motor, but a much smaller 35.1kWh battery, backed by a 1.5L range-extender engine that generates electricity to keep driving once the battery is low. That gives it only 310km of pure-electric range for daily commuting, but a combined range of 1,570km once you count the engine's contribution — more than double the BEV's total range, with the tradeoff of carrying an engine and needing occasional fuel stops.

| | BEV | EREV |
|---|---|---|
| Motor power | 190kW / 255PS | 200kW / 268PS |
| Range-extender engine | None | 1.5L |
| Battery | 79kWh LFP | 35.1kWh |
| Pure-electric range | 730km (CLTC) | 310km (CLTC) |
| Combined range | 730km | 1,570km |
| Refuels via | Charging only | Charging + gasoline |
| Best fit | Markets with dense, reliable charging | Markets with sparse or unreliable charging |

If you're deploying into a city with mature DC fast-charging infrastructure and mostly do daily-range driving, the BEV's simpler drivetrain and longer pure-electric range make sense. If you're serving a market where public charging is thin, unreliable, or nonexistent outside major cities — which describes a lot of the export corridors this model actually ships into — the EREV's 1,570km combined range removes range anxiety from the equation entirely.

## How Big Is the NEVO A07, and How Does It Drive?

Confirmed dimensions and drivetrain figures for the EREV version: length/width/height of 4905×1910×1480mm, a 2900mm wheelbase, curb weight of 1805kg, and a top speed of 172km/h. That places it in the mid-large sedan class — longer and wider than a compact sedan, with a wheelbase (2900mm) generous enough to suggest strong rear legroom, though we don't have official cabin measurements to confirm that directly.

One thing to flag honestly: the dimensions, weight, and top speed above are the figures we have confirmed for the EREV. We were not given separately verified figures for the BEV version, and while it's common for a manufacturer to share a body shell across powertrain variants (the battery-only BEV would plausibly weigh differently given the pack-size difference — 79kWh versus 35.1kWh), we're not going to assume that or invent BEV-specific numbers. If BEV-specific weight, dimensions, or top speed matter for your shipping calculations or homologation paperwork, ask us to confirm them before you order.

The RWD layout itself is worth noting for buyers used to front-drive Chinese EV exports — it's a mechanical layout more associated with larger, higher-positioned sedans, and it changes weight distribution versus a front-drive equivalent, though we don't have a published front/rear weight split to quote.

## What Does It Cost to Import a NEVO A07?

Our confirmed FOB export price range for the NEVO A07 is **$19,640–22,450 per unit**. That's the figure we can stand behind from our own channel.

Be aware that pricing quoted across different B2B trading platforms for this model varies more widely — we've seen figures anywhere from $14,000 to $23,000 depending on the source and trim referenced. That spread is large enough that treating any single number you see online as a fixed, final price would be a mistake. Trim level (BEV vs. EREV, equipment package), order volume, and which platform is quoting all move the number. Request a current, trim-specific quote before committing to an order rather than budgeting off a headline figure from a listing site.

We don't have confirmed MOQ (minimum order quantity) or production lead-time figures to share here — ask directly when requesting your quote so you can build an accurate delivery timeline.

## Where Can the NEVO A07 Actually Be Delivered?

We have confirmed real delivery records for the NEVO A07 to three markets: **Russia, Kyrgyzstan, and Saudi Arabia**, moved through established export channels.

We want to be direct about what we're not claiming: some trading platforms advertise this model as available to "50+ export countries." We looked into that claim and could not independently confirm it, so we're not repeating it as fact here. If your destination market isn't Russia, Kyrgyzstan, or Saudi Arabia, that doesn't necessarily mean it's unavailable — it means we don't have a confirmed delivery record for it yet, and you should ask us directly about logistics, homologation, and lead time for your specific country before assuming availability.

## What Import Duties and Taxes Should You Budget For?

Duty and tax rules change often and vary sharply by destination, so treat the figures below as a planning baseline sourced at the time of writing (July 2026), not a guarantee — confirm current numbers with local customs before you order.

**Russia**: Vehicles are subject to a per-unit "utilization" (recycling) fee. As of January 1, 2025, that fee is 667,400 rubles for electric vehicles and series hybrids up to three years old, rising to 1.17 million rubles for units older than three years, with the schedule set to increase 10–20% annually through 2030 ([AUTOSTAT](https://eng.autostat.ru/news/25667/)). The fee is calculated partly on motor power, and vehicles above roughly 90kW — which covers both the A07 BEV (190kW) and EREV (200kW) — fall into the higher EV-tier bracket rather than a baseline passenger-car rate.

**Kyrgyzstan**: The Eurasian Economic Union (EAEU), which sets Kyrgyzstan's common external tariff, granted a 2026 duty-free import quota specifically for "series hybrids" (EAEU tariff code 8703 80 000 5) — a category that covers EREV-type vehicles like the A07 EREV — capped at 15,000 units, restricted to permanent residents of Kyrgyzstan, with resale to Russian, Kazakh, or Belarusian citizens prohibited ([Eurasian Economic Commission](https://eec.eaeunion.org/en/news/mezhpravsovet-predostavil-tarifnuyu-lgotu-na-vvoz-elektromobiley-v-armeniyu-belarus-i-kyrgyzstan-v-2/)). Some 2026 reporting indicates this quota may already be close to exhausted ([AKIpress](https://akipress.com/news:905600:Kyrgyzstan_s_duty-free_import_quota_for_15,000_electric_vehicles_exhausted/)); once it's used up, imports revert to the EAEU's 15% common external tariff. Confirm live quota status before ordering.

**Saudi Arabia**: VAT is confirmed at 15%, in effect since July 2020, and the GCC common external tariff applies a baseline of at least 5% on most goods imported from outside the GCC bloc ([U.S. Commercial Service Saudi Arabia guide](https://www.trade.gov/country-commercial-guides/saudi-arabia-import-tariffs)). We could not independently verify the exact HS-code-specific duty line for this vehicle through ZATCA's public portal at time of writing, so treat combined landed tax/duty in the region of 20% of assessed value as a planning estimate and confirm the precise figure with ZATCA before committing.

## Who Should Buy the NEVO A07 — and Who Shouldn't?

**Best for:**
- Buyers in markets with sparse or unreliable public charging who want the EREV's 1,570km combined range as an anxiety-free buffer
- Buyers in EAEU markets like Kyrgyzstan who may qualify for the 2026 duty-free "series hybrid" quota (confirm live status first)
- Buyers who want maximum pure-EV range on an LFP pack for daily driving with zero engine involvement — the BEV's 730km CLTC / 79kWh combination
- Buyers who want a modern tech package (AR-HUD, 15.4" Snapdragon 8155 screen, hidden door handles) in a mid-large RWD sedan body

**Not ideal for:**
- Buyers who need one locked FOB number before requesting a quote — actual pricing depends on trim and moves within a documented $14,000–23,000 spread across trading platforms
- Buyers outside Russia, Kyrgyzstan, and Saudi Arabia who need pre-confirmed delivery logistics — other markets aren't verified yet, so ask before assuming availability
- Buyers who need BEV-specific curb weight, dimensions, or top speed confirmed upfront for homologation — our verified data currently covers the EREV's figures only
- Buyers who treat CLTC range numbers as guaranteed real-world range — CLTC is a lab test cycle, and actual range shifts with driving conditions, temperature, and load

## Ready to Get a Current Quote?

FOB pricing, delivery timelines, and duty specifics move by trim and by destination country — everything above is a planning baseline, not a final quote. Message us on WhatsApp at [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27m%20interested%20in%20the%20NEVO%20A07%20-%20please%20send%20current%20FOB%20pricing%20and%20export%20details%20for%20my%20country.) with your destination country and whether you want the BEV or EREV, or email [gacaicai@gmail.com](mailto:gacaicai@gmail.com?subject=NEVO%20A07%20Inquiry). Full specs and photos are on the [NEVO A07](/cars/nevo-a07/) product page.`,
    faqs: [
      { q: 'What\'s the real difference between the NEVO A07 BEV and EREV?', a: 'The BEV runs a single 190kW/255PS motor off a 79kWh LFP battery for 730km CLTC range with no engine at all. The EREV pairs a 200kW/268PS motor with a 1.5L range-extender engine and a smaller 35.1kWh battery, giving 310km of pure-electric range for daily driving plus 1,570km combined range once the engine contributes. Pick the BEV where charging is reliable; pick the EREV where it isn\'t.' },
      { q: 'Is the NEVO A07 the same car as the Qiyuan A07?', a: 'Yes. NEVO A07 is the export name for the same vehicle sold domestically in China as the Qiyuan A07. Both badges cover the same mid-large, 5-seat, RWD sedan with hidden door handles, an AR-HUD, and a 15.4-inch Snapdragon 8155-powered touchscreen — there\'s no difference in the underlying product.' },
      { q: 'How much does a NEVO A07 cost FOB?', a: 'Our confirmed FOB range is $19,640–22,450 per unit. Other trading platforms quote anywhere from $14,000 to $23,000 depending on trim and source, so treat any single number you see online as a starting point rather than a fixed price. Request a current, trim-specific quote before ordering.' },
      { q: 'Can I import a NEVO A07 to my country?', a: 'We have confirmed delivery records to Russia, Kyrgyzstan, and Saudi Arabia through established export channels. We could not verify broader "50+ countries" claims made by some trading platforms, so if your market isn\'t one of these three, ask us directly about logistics and homologation before assuming it\'s available.' },
      { q: 'What import duties apply in Russia, Kyrgyzstan, or Saudi Arabia?', a: 'Each market differs and the rules change yearly. Russia charges a per-vehicle utilization fee (667,400 rubles for EVs/series hybrids under three years old as of 2025, rising annually through 2030). Kyrgyzstan has a 2026 EAEU duty-free quota for series hybrids that may already be exhausted. Saudi Arabia applies 15% VAT plus a roughly 5% GCC baseline customs duty. Confirm exact current figures with local customs before ordering.' },
    ], related: ['what-is-nevo-changan-new-energy-brand-explained', 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'deepal-s07-alternatives'],
  },
  'jetour-dashing-vs-x50-entry-level-comparison': {
    slug: 'jetour-dashing-vs-x50-entry-level-comparison', category: 'product', categoryLabel: 'Model Comparison',
    title: 'Jetour Dashing vs Jetour X50: Which Entry-Level SUV Fits Your Market?',
    excerpt: 'The Jetour Dashing (FOB $13,000-16,800) and Jetour X50 (FOB $9,000-13,500) are both compact SUVs from Jetour, but they differ sharply in size, tech, and price. Here\'s the full spec-by-spec breakdown to help you pick the right entry-level model for your market.',
    hero: '/images/vehicles/evautopro-jetour-dashing-01.webp', date: '2026-07-18 15:00:00', readMin: 8,
    body: `Both the Jetour Dashing and the Jetour X50 are compact, front-wheel-drive, five-seat SUVs sold under the same brand, but they sit at different points on the price-and-size spectrum. The Dashing is the larger, better-equipped model, with FOB pricing of $13,000-16,800 and a flagship 197PS turbo option, while the X50 is the smaller, export-only model priced at FOB $9,000-13,500 with a single 156PS engine. For a distributor sourcing an **entry-level SUV** from Jetour, the real decision is whether your market wants more size, screen, and driver-assist tech at a higher landed cost, or the lowest possible entry price on a smaller footprint. Both models are currently confirmed for sale in the Gulf region.

## What Are the Core Differences Between the Jetour Dashing and Jetour X50?

The [Jetour Dashing](/cars/jetour-dashing/) is part of Jetour's "Vanguard Technology" line, positioned as a youth-focused compact SUV with two engine tiers and a tech-forward cabin. The [Jetour X50](/cars/jetour-x50/) is a smaller, simpler compact SUV built for export markets only — it's a rebadged Soueast DX5. Soueast and Jetour are sibling brands under Chery Holding, and a platform-sharing arrangement between them began around 2022, which is why the X50 carries Jetour badging on a Soueast-engineered base. One practical consequence: the X50 does not appear on Jetour's main global site (jetourglobal.com) because it's maintained by regional distributors rather than the central Jetour team, so buyers typically confirm it through local dealer inventory rather than the global product catalog.

Both models share the same basic layout — FWD, 5-seat, compact SUV body style — and even overlap on their entry-level engine output (115kW/156PS on both). Where they diverge is in overall size, cabin technology, and how far up the price ladder each one goes. The Dashing offers a second, more powerful engine tier that the X50 does not; the X50 keeps things to one drivetrain configuration across its lineup, which is part of why it can be priced lower.

## How Do Their Engines and Performance Compare?

The Dashing gives buyers a choice of two powertrains. The entry engine is a 1.5T producing 115kW/156PS, available with either a 6-speed manual or a DCT gearbox. The flagship engine is a 1.6TGDI making 145kW/197PS and 290N·m of torque, paired exclusively with a 7-speed DCT. Jetour rates the Dashing's top speed at 200km/h.

The X50 offers a single powertrain: a 1.5T turbo producing 115kW/156PS and 230N·m of torque, mated to a 6-speed wet DCT. Jetour has not published a top-speed figure for the X50 in the data available here. Notably, this 1.5T unit is from the same core powertrain family used in the larger Jetour X70, so the engine itself is a known quantity in Jetour's lineup — it's simply carried into a smaller, lighter body in the X50.

In practical terms: if a market's buyers care about having a manual-transmission option or a higher-output flagship trim, the Dashing covers both; the X50's single-spec approach trades that flexibility for a simpler, lower-cost lineup. Torque output between the two entry-level 156PS engines differs slightly (230N·m on the X50 versus figures not separately broken out for the Dashing's base 1.5T beyond its shared power rating), which is a detail distributors should confirm directly with Jetour for their specific market allocation.

## Which Model Is Bigger — Does Size Matter for Your Market?

Size is one of the clearest differentiators between these two models, and it's a major driver of the price gap.

| Dimension | Jetour Dashing | Jetour X50 |
|---|---|---|
| Length | 4600mm | 4397mm |
| Width | 1900mm | 1841mm |
| Height | 1685mm | 1654mm |
| Wheelbase | 2720mm | 2601mm |
| Curb weight | 1530kg | Not provided |

The Dashing is longer by 203mm, wider by 59mm, and has a wheelbase 119mm longer than the X50's. In a compact SUV segment, that wheelbase difference typically translates into noticeably more rear legroom and cargo space in the Dashing. For markets where family-sized interior room is a selling point, the Dashing's larger footprint is a real advantage. For markets where tight urban parking, narrower streets, or lower per-unit landed weight and shipping cost matter more, the X50's smaller dimensions work in its favor — a lighter, smaller vehicle generally means lower shipping and, in many markets, lower registration or fuel-consumption-linked costs, though exact figures for those categories aren't part of the data provided here.

Neither size is objectively "better" — it depends entirely on what your buyers in that specific market are used to and what they're cross-shopping against.

## How Do the Tech and Safety Features Differ?

This is where the price gap becomes most visible, and it's worth being direct about it: the X50's lower price is not just about a smaller body — it also reflects a simpler feature set.

The Dashing comes with a 15.6-inch touchscreen, an 8-inch head-up display (HUD), and L2.5 assisted driving capability. The X50 comes with a 10.25-inch touchscreen and 6 airbags; no HUD or assisted-driving tier is listed for the X50 in the data available here. On the transmission side, the Dashing's flagship engine pairs with a 7-speed DCT while the X50 uses a 6-speed wet DCT across its lineup.

None of this makes the X50 a bad vehicle — 10.25 inches is still a full modern touchscreen, and 6 airbags is a legitimate safety baseline. But buyers who cross-shop the two side by side, especially in markets where the Dashing is also available, will notice the gap immediately: bigger screen, HUD, and a driver-assist tier on the Dashing versus a more basic (and less expensive) equipment list on the X50. Distributors should set buyer expectations accordingly rather than presenting the X50 as a stripped-price version of the exact same experience.

## What's the Full Spec-by-Spec Comparison?

| Spec | Jetour Dashing | Jetour X50 |
|---|---|---|
| Body style | Compact SUV | Compact SUV |
| Drivetrain | FWD | FWD |
| Seats | 5 | 5 |
| Entry engine | 1.5T, 115kW/156PS | 1.5T, 115kW/156PS/230N·m |
| Entry transmission | 6-speed manual or DCT | 6-speed wet DCT |
| Flagship engine | 1.6TGDI, 145kW/197PS/290N·m | Not offered |
| Flagship transmission | 7-speed DCT | — |
| Top speed | 200km/h | Not provided |
| Length x Width x Height | 4600 x 1900 x 1685mm | 4397 x 1841 x 1654mm |
| Wheelbase | 2720mm | 2601mm |
| Curb weight | 1530kg | Not provided |
| Touchscreen | 15.6" | 10.25" |
| Head-up display | 8" HUD | Not offered |
| Driver assist | L2.5 assisted driving | Not specified |
| Airbags | Not specified | 6 |
| FOB price range | $13,000-16,800 | $9,000-13,500 |
| Certifications | GCC, EAC, SASO | GCC |
| Confirmed markets | Saudi Arabia, UAE, Russia | UAE, Saudi Arabia, Kazakhstan, Panama, Chile, Philippines, Malaysia |

## Which Markets Are Each Model Actually Sold In?

The Dashing is confirmed for sale in Saudi Arabia, UAE, and Russia, and it carries three certifications: GCC, EAC (Eurasian Economic Union), and SASO (Saudi Arabia). That EAC certification lines up directly with its Russia market presence, and SASO with its Saudi presence — the certification list matches the confirmed sales markets closely.

The X50 has a broader confirmed footprint: it's been spotted on-lot in UAE, Saudi Arabia, Kazakhstan, Panama, Chile, Philippines, and Malaysia, based on regional dealer sites and photos. Its only listed certification is GCC, which covers the Gulf markets (UAE, Saudi Arabia) directly but doesn't explain its presence in Kazakhstan, Latin America, or Southeast Asia — those markets likely operate under separate regional homologation handled by local distributors, consistent with the X50 being a distributor-managed export model rather than one centrally coordinated by Jetour's global team.

For a distributor evaluating either model, this matters practically: if your market requires GCC certification, both models qualify. If it requires EAC or SASO specifically, only the Dashing currently has that certification on record. And if you're in a market like Kazakhstan, Panama, Chile, Philippines, or Malaysia where the X50 has on-the-ground presence but the Dashing doesn't have confirmed sales, that's a meaningful data point — it suggests regional distributors have already done groundwork for the X50 in those territories that hasn't been replicated for the Dashing yet.

## Best For / Not Ideal For

**Jetour Dashing — best for:**
- Markets where buyers cross-shop on cabin tech (15.6" screen, HUD) and want an assisted-driving feature (L2.5)
- Buyers who want a manual-transmission option or a higher-output 197PS flagship trim
- Markets needing EAC or SASO certification specifically
- Family-oriented buyers who value the extra 119mm of wheelbase and larger overall footprint

**Jetour Dashing — not ideal for:**
- Markets where FOB budget is capped well under $13,000
- Buyers who don't value the extra tech and would rather pay less for a smaller, simpler vehicle

**Jetour X50 — best for:**
- Markets prioritizing the lowest possible entry price point (FOB from $9,000)
- Markets already showing on-the-ground distributor presence — Kazakhstan, Panama, Chile, Philippines, Malaysia — where local homologation groundwork may already exist
- Buyers who want a smaller, easier-to-park compact SUV with a straightforward single-spec lineup

**Jetour X50 — not ideal for:**
- Buyers expecting HUD, a large 15.6" screen, or assisted-driving features — none of these are offered
- Markets requiring EAC or SASO certification, since only GCC certification is confirmed
- Buyers who want a manual-transmission or higher-power engine option, since the X50 offers only one drivetrain configuration

## Frequently Asked Questions

**What's the actual price difference between the Jetour Dashing and Jetour X50?**
FOB pricing for the Dashing runs $13,000-16,800; the X50 runs $9,000-13,500. There's a $13,000-13,500 overlap zone where a base-spec Dashing and a top-spec X50 could land close together, but on average the Dashing costs more — which tracks with its larger body, second engine tier, and added tech (bigger screen, HUD, L2.5 assist).

**Is the Jetour X50 the same vehicle as the Jetour X70?**
No. The X50 is a distinct, smaller model — a rebadged Soueast DX5 — but it shares its core 1.5T powertrain family (115kW/156PS) with the Jetour X70. So the engine lineage is related, but the body, dimensions, and overall vehicle are not the same.

**Why isn't the Jetour X50 listed on Jetour's main global website?**
Because it's an export-only model maintained by regional distributors rather than the central jetourglobal.com team. Soueast and Jetour are sibling brands under Chery Holding, and a platform-sharing arrangement between them began around 2022 — that's the basis for the X50 carrying Jetour badging.

**Which markets currently sell the Jetour Dashing vs the Jetour X50?**
The Dashing is confirmed in Saudi Arabia, UAE, and Russia (GCC, EAC, SASO certified). The X50 has been confirmed on-lot in UAE, Saudi Arabia, Kazakhstan, Panama, Chile, Philippines, and Malaysia, though it's only certified to GCC standard in the data available here.

**Does the Jetour X50 offer the same safety and driver-assist tech as the Dashing?**
No. The Dashing includes L2.5 assisted driving as a feature; that capability isn't listed for the X50, which is confirmed to have 6 airbags. This is a genuine gap between the two models, not just a marketing difference — buyers wanting assisted-driving tech should look to the Dashing.

## Ready to Compare Sourcing Options?

If you're weighing the Jetour Dashing against the Jetour X50 for your specific market's certification requirements and price point, reach out and we'll walk through the fit together.

**WhatsApp:** [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27m%20interested%20in%20comparing%20the%20Jetour%20Dashing%20and%20Jetour%20X50%20for%20my%20market.%20Can%20you%20share%20more%20details%3F)

**Email:** [gacaicai@gmail.com](mailto:gacaicai@gmail.com)`,
    faqs: [
      { q: 'What\'s the actual price difference between the Jetour Dashing and Jetour X50?', a: 'FOB pricing for the Dashing runs $13,000-16,800; the X50 runs $9,000-13,500. There\'s a $13,000-13,500 overlap zone where a base-spec Dashing and a top-spec X50 could land close together, but on average the Dashing costs more, which tracks with its larger body, second engine tier, and added tech (bigger screen, HUD, L2.5 assist).' },
      { q: 'Is the Jetour X50 the same vehicle as the Jetour X70?', a: 'No. The X50 is a distinct, smaller model, a rebadged Soueast DX5, but it shares its core 1.5T powertrain family (115kW/156PS) with the Jetour X70. So the engine lineage is related, but the body, dimensions, and overall vehicle are not the same.' },
      { q: 'Why isn\'t the Jetour X50 listed on Jetour\'s main global website?', a: 'Because it\'s an export-only model maintained by regional distributors rather than the central jetourglobal.com team. Soueast and Jetour are sibling brands under Chery Holding, and a platform-sharing arrangement between them began around 2022, which is the basis for the X50 carrying Jetour badging.' },
      { q: 'Which markets currently sell the Jetour Dashing vs the Jetour X50?', a: 'The Dashing is confirmed in Saudi Arabia, UAE, and Russia (GCC, EAC, SASO certified). The X50 has been confirmed on-lot in UAE, Saudi Arabia, Kazakhstan, Panama, Chile, Philippines, and Malaysia, though it\'s only certified to GCC standard in the data available here.' },
      { q: 'Does the Jetour X50 offer the same safety and driver-assist tech as the Dashing?', a: 'No. The Dashing includes L2.5 assisted driving as a feature; that capability isn\'t listed for the X50, which is confirmed to have 6 airbags. This is a genuine gap between the two models, not just a marketing difference, so buyers wanting assisted-driving tech should look to the Dashing.' },
    ], related: [],
  },
  'jetour-t1-vs-t1-idm-ice-or-phev': {
    slug: 'jetour-t1-vs-t1-idm-ice-or-phev', category: 'product', categoryLabel: 'Model Comparison',
    title: 'Jetour T1 vs T1 i-DM: Gasoline or Plug-In Hybrid — Which Should You Import?',
    excerpt: 'Same 4705mm body, same 2800mm wheelbase, same cabin tech — the Jetour T1 and T1 i-DM differ almost entirely in powertrain. Here\'s how the gasoline and plug-in hybrid versions compare on power, price, 4WD availability, and import duties across Russia, Saudi Arabia, and the UAE.',
    hero: '/images/vehicles/evautopro-jetour-t1-01.webp', date: '2026-07-18 16:30:00', readMin: 7,
    body: `The Jetour T1 and Jetour T1 i-DM share the exact same 4705×1967×1843mm body, 2800mm wheelbase, and cabin tech — the only real decision is what's under the hood. The T1 runs a conventional 1.5T or flagship 2.0T petrol engine (up to 187kW/254PS/390N·m) with available real-time 4WD, while the T1 i-DM pairs a 1.5T dedicated hybrid engine (99kW/200N·m) with a 150kW/310N·m electric motor and a 26.7kWh LFP battery, FWD only. For most buyers weighing Jetour T1 vs T1 i-DM, the choice isn't styling — it's whether your market's duty structure, terrain needs, and customer expectations favor a gasoline drivetrain or a plug-in hybrid one.

## What's actually different between the T1 and the T1 i-DM?

These are the same vehicle sold under two names in two markets. In China, the gasoline version is badged Jetour Freedom (捷途自由者); the plug-in hybrid version is badged Shanhai T1 (山海T1). On the export site they're listed as two trims of one platform: [Jetour T1](/cars/jetour-t1/) and [Jetour T1 i-DM](/cars/jetour-t1-idm/).

Both share identical exterior dimensions (4705×1967×1843mm), the same 2800mm wheelbase, and the same cabin tech stack — a 15.6"/12.8" touchscreen depending on trim, a Snapdragon 8155 chipset, and multi-language voice control including Russian. So if you're choosing based on how the car looks or how the cabin feels, you won't find a meaningful difference — both are the same crossover SUV body.

Where they diverge is entirely mechanical: engine type, transmission, drivetrain layout, and battery. The T1 is a straightforward internal-combustion crossover with a choice of two engine states of tune. The T1 i-DM replaces that with a dedicated hybrid engine, an electric motor, a single-speed DHT (dedicated hybrid transmission), and an LFP battery pack — plug-in capable, meaning it can run on grid-charged electric power for part of its usage before the engine engages.

## How do the two powertrains stack up on paper?

| Spec | Jetour T1 (Gasoline) | Jetour T1 i-DM (PHEV) |
|---|---|---|
| China domestic name | Jetour Freedom (捷途自由者) | Shanhai T1 (山海T1) |
| Body / platform | 4705×1967×1843mm, 2800mm wheelbase | Same — 4705×1967×1843mm, 2800mm wheelbase |
| Engine | 1.5T (135kW) or 2.0T (187kW/254PS/390N·m) | 1.5T dedicated hybrid engine (99kW/200N·m) |
| Electric motor | — | 150kW/310N·m |
| Battery | — | 26.7kWh LFP |
| Transmission | 7DCT (1.5T) or 8AT (2.0T) | Single-speed DHT |
| Drivetrain | FWD (1.5T) or real-time 4WD w/ electronic limited-slip diff (2.0T Lux) | FWD only (export lineup) |
| Top speed | 180km/h | Not provided by Jetour |
| Curb weight | 1811kg | Not provided by Jetour |
| Electric-only / combined range | — | Not officially published — confirm before ordering |
| Infotainment | 15.6"/12.8" by trim, Snapdragon 8155, multi-language voice incl. Russian | Same |
| L2 driver assist | 2.0T Lux trim only | Both trims |
| FOB price | $18,700–$21,200 | $21,700–$24,500 |
| Export markets | Russia, Saudi Arabia, UAE, South Africa | Russia, Saudi Arabia, UAE |
| Certifications | GCC, EAC | GCC, EAC |

Two things stand out that aren't obvious from spec sheets alone. First, L2 driver assist is standard across both T1 i-DM trims but limited to the top 2.0T Lux trim on the gasoline T1 — so a base-trim T1 buyer gets less driver assistance than any T1 i-DM buyer. Second, 4WD only exists on the gasoline side; the PHEV export lineup is FWD-only for now.

## Does the T1 i-DM cost more to land, and by how much?

Yes. FOB pricing for the T1 i-DM runs $21,700–$24,500 versus $18,700–$21,200 for the gasoline T1 — roughly a $3,000 premium at comparable trim, before freight, insurance, and destination-market duties are added. That premium buys the hybrid engine, electric motor, DHT, and 26.7kWh LFP battery pack.

What it does not yet buy you is a published electric range figure to quote a customer. Jetour has not released an official combined WLTC or CLTC range number for the T1 i-DM, so if a client asks "how many kilometers on electric power," you cannot answer that with a hard number today — get it in writing from Jetour or your EV Auto Pro contact before committing to an order where range is part of the sales pitch.

Whether that $3,000 gap is worth it depends entirely on your destination market: fuel-cost differentials, any duty treatment that favors hybrids, and whether your customer base actually values plug-in capability over straightforward gasoline simplicity.

## Which markets can you actually import each version into?

This is where the two models genuinely part ways in availability. The gasoline T1 is currently listed for Russia, Saudi Arabia, UAE, and South Africa. The T1 i-DM is listed for Russia, Saudi Arabia, and UAE only — South Africa does not currently have the plug-in hybrid version on the export site.

If South Africa is your target market, the decision is already made for you: order the T1. For Russia, Saudi Arabia, and UAE, both versions are available and both carry the same certifications — GCC (Gulf Cooperation Council conformity) and EAC (Eurasian Economic Union conformity for Russia and neighboring EAEU markets). Neither model has a certification advantage over the other in the three markets where both are sold.

## Does the T1 i-DM offer 4WD like the T1's 2.0T Lux trim?

No — not on the export lineup as it stands. The gasoline T1's 2.0T Lux trim has a real-time 4WD system with an electronic limited-slip differential, engineered for traction on loose or slick surfaces. The T1 i-DM sold through the export site is FWD only.

It's worth noting that China's domestic Shanhai T1 lineup does include a rear-motor AWD trim — the platform is capable of it — but that configuration is not currently listed for export markets. If you have a customer who specifically needs 4WD traction (mountain routes in Saudi Arabia, winter conditions in Russia, unpaved terrain in South Africa), the gasoline T1's 2.0T Lux trim is your only confirmed 4WD option right now between these two models.

## What will import duties and fees look like in Russia, Saudi Arabia, and the UAE?

Duty treatment for these two powertrains is not a simple story, and the numbers below should be confirmed with a customs broker at time of shipment rather than treated as final:

- **UAE**: Standard passenger vehicle imports carry a 5% customs duty on CIF value plus 5% VAT, per UAE customs guidance. Fully electric vehicles have benefited from duty incentives in some periods, but that BEV-specific treatment is not confirmed to extend to plug-in hybrids — the T1 i-DM should be assumed subject to the standard 5% rate unless your broker confirms an exemption applies to your specific import channel.
- **Saudi Arabia**: ZATCA applies a 5% customs duty on motor cars plus 15% VAT on the duty-inclusive value. No hybrid-specific carve-out for that standard "motor cars" tariff line appeared in official ZATCA guidance, so plan for both the T1 and T1 i-DM to face the same 5%+15% structure unless you find written confirmation otherwise.
- **Russia**: the utilization (recycling) fee is structured differently by powertrain rather than being a flat rate. Gasoline models are assessed largely by engine displacement and horsepower; hybrids and EVs are assessed off the electric motor's peak (or 30-minute) power output, and crossing certain power thresholds moves a vehicle into a materially higher fee bracket. Rates were re-indexed again from January 1, 2026 under a phased schedule Russia adopted in 2024, so pull a current quote for the exact trim and kW figures rather than reusing last year's number.

Because Russia's fee logic genuinely diverges by powertrain, don't assume the T1 i-DM is automatically cheaper or pricier to land than the T1 — run the landed-cost math for your specific destination and trim before locking in an order.

## Which buyer should choose which version?

**Best for the Jetour T1 (gasoline):**
- Markets or customers who need 4WD now — the electronic-LSD real-time 4WD system is only confirmed on the 2.0T Lux trim.
- South Africa import programs, where the T1 is currently the only version listed.
- Buyers prioritizing the lower $18,700–$21,200 FOB entry point and a fueling model with no charging-infrastructure dependency.

**Best for the Jetour T1 i-DM (PHEV):**
- Russia, Saudi Arabia, or UAE buyers targeting customers who want lower running costs from the 26.7kWh LFP battery and standard L2 driver assist across the whole trim range, not just the top gasoline trim.
- Importers comfortable confirming exact electric range, duty classification, and delivery timing with Jetour and local customs before finalizing orders.

**Not ideal for:**
- Anyone needing 4WD in a PHEV — it isn't offered on the export T1 i-DM lineup today.
- South Africa orders — the i-DM isn't listed for that market; use the T1.
- Sales pitches that require a hard electric-range number today — it isn't published yet, so don't promise a figure to a customer until Jetour confirms one in writing.

## Frequently asked questions

**Is the Jetour T1 i-DM available with 4WD?**
Not on the export lineup. The T1 i-DM sold through the export site is FWD only. Real-time 4WD with an electronic limited-slip differential is available only on the gasoline T1's 2.0T Lux trim. China's domestic Shanhai T1 range does include a rear-motor AWD trim, but it has not been listed for export markets, so it isn't currently orderable through evautopro.com.

**What's the FOB price difference between the T1 and T1 i-DM?**
The gasoline T1 is priced $18,700–$21,200 FOB. The T1 i-DM is priced $21,700–$24,500 FOB — roughly a $3,000 premium at comparable trim for the hybrid engine, 150kW/310N·m electric motor, DHT, and 26.7kWh LFP battery pack, before freight and destination-market duties.

**What's the electric range of the T1 i-DM?**
Jetour has not published an official combined WLTC or CLTC range figure for the T1 i-DM as of this writing. The battery is a 26.7kWh LFP pack paired with a 150kW/310N·m motor and a 99kW/200N·m 1.5T hybrid engine, but no combined range or fuel-economy number is available yet — confirm this directly with Jetour or your EV Auto Pro contact before quoting a customer.

**Which markets can I currently import the T1 i-DM into?**
Russia, Saudi Arabia, and the UAE. Unlike the gasoline T1, which is also listed for South Africa, the T1 i-DM is not currently available for South African import through the export lineup.

**Do import duties differ between the gasoline T1 and the plug-in hybrid T1 i-DM?**
In Russia, yes structurally — the utilization fee for gasoline vehicles is calculated off engine displacement and horsepower, while hybrids and EVs are calculated off electric motor power output, with different thresholds triggering higher fee brackets. In the UAE and Saudi Arabia, both currently fall under the same standard vehicle duty structure (5% customs duty in both markets) based on available official guidance, though PHEV-specific exemptions are not confirmed — verify with your customs broker before ordering.

## Ready to compare landed costs for your market?

Both the [Jetour T1](/cars/jetour-t1/) and [Jetour T1 i-DM](/cars/jetour-t1-idm/) are in EV Auto Pro's export lineup for Russia, Saudi Arabia, and the UAE (T1 only for South Africa). If you need current FOB quotes, trim availability, or help running the landed-cost comparison for your specific destination, reach out directly:

- WhatsApp: [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27m%20comparing%20the%20Jetour%20T1%20and%20T1%20i-DM%20for%20import%20%E2%80%94%20can%20you%20send%20current%20FOB%20pricing%20and%20trim%20availability%20for%20my%20market%3F)
- Email: [gacaicai@gmail.com](mailto:gacaicai@gmail.com)`,
    faqs: [
      { q: 'Is the Jetour T1 i-DM available with 4WD?', a: 'Not on the export lineup. The T1 i-DM sold through the export site is FWD only. Real-time 4WD with an electronic limited-slip differential is available only on the gasoline T1\'s 2.0T Lux trim. China\'s domestic Shanhai T1 range does include a rear-motor AWD trim, but it has not been listed for export markets, so it isn\'t currently orderable through evautopro.com.' },
      { q: 'What\'s the FOB price difference between the T1 and T1 i-DM?', a: 'The gasoline T1 is priced $18,700-$21,200 FOB. The T1 i-DM is priced $21,700-$24,500 FOB — roughly a $3,000 premium at comparable trim for the hybrid engine, 150kW/310N·m electric motor, DHT, and 26.7kWh LFP battery pack, before freight and destination-market duties.' },
      { q: 'What\'s the electric range of the T1 i-DM?', a: 'Jetour has not published an official combined WLTC or CLTC range figure for the T1 i-DM as of this writing. The battery is a 26.7kWh LFP pack paired with a 150kW/310N·m motor and a 99kW/200N·m 1.5T hybrid engine, but no combined range or fuel-economy number is available yet — confirm this directly with Jetour or your EV Auto Pro contact before quoting a customer.' },
      { q: 'Which markets can I currently import the T1 i-DM into?', a: 'Russia, Saudi Arabia, and the UAE. Unlike the gasoline T1, which is also listed for South Africa, the T1 i-DM is not currently available for South African import through the export lineup.' },
      { q: 'Do import duties differ between the gasoline T1 and the plug-in hybrid T1 i-DM?', a: 'In Russia, yes structurally — the utilization fee for gasoline vehicles is calculated off engine displacement and horsepower, while hybrids and EVs are calculated off electric motor power output, with different thresholds triggering higher fee brackets. In the UAE and Saudi Arabia, both currently fall under the same standard vehicle duty structure (5% customs duty in both markets) based on available official guidance, though PHEV-specific exemptions are not confirmed — verify with your customs broker before ordering.' },
    ], related: ['how-to-choose-jetour-lineup', 'bev-vs-phev-vs-erev-vs-hybrid-which-to-import', 'can-you-drive-phev-without-charging'],
  },
  'jetour-g700-luxury-off-road-phev-deep-dive': {
    slug: 'jetour-g700-luxury-off-road-phev-deep-dive', category: 'product', categoryLabel: 'Model Comparison',
    title: 'Jetour G700: Luxury Off-Road PHEV Flagship for Export',
    excerpt: 'Jetour\'s new flagship pairs a 665kW PHEV powertrain with genuine off-road hardware (35°/28°/21° angles, 900mm wading) and up to 1000km combined range — full specs, trim comparison, and current export markets for buyers.',
    hero: '/images/vehicles/evautopro-jetour-g700-01.webp', date: '2026-07-18 18:00:00', readMin: 9,
    body: `The Jetour G700 is Jetour's new flagship luxury off-road plug-in hybrid, launched in October 2025 under the brand's Zongheng (GAIA) series. It pairs a 2.0T engine with dual electric motors and a 2-speed DHT to deliver a combined 665kW / 904PS / 1135N·m through a 4WD system, backed by a 34.13kWh LFP battery for 100km of pure-electric WLTC range and up to 1000km combined range with the engine running. FOB pricing for export runs $46,300–$58,200, and the model is currently confirmed for sale in the UAE and Qatar with GCC certification, expanding into Latin America in 2026.

## What Is the Jetour G700, and Why Is It Jetour's New Flagship?

The G700 sits at the top of Jetour's lineup as its first dedicated luxury off-road PHEV, built under the Zongheng (GAIA) series that Jetour launched to compete in the premium off-road SUV segment. Where earlier Jetour models targeted value-focused SUV buyers, the G700 is positioned as a halo product: a full-size off-roader with genuine trail hardware (35°/28°/21° approach/departure/breakover angles, 230mm ground clearance) combined with plug-in hybrid efficiency and a tech-heavy cabin.

Dimensionally, the G700 is a large vehicle — 5198mm long, 2050mm wide, 1956mm tall, on a 2870mm wheelbase, with a curb weight of 3180kg. That places it in the same size class as full-size luxury off-road SUVs, and the weight reflects the combination of a traditional body-on-frame-capable off-road structure with a sizeable battery pack and dual-motor hybrid hardware.

For export buyers, the "flagship" positioning matters commercially as much as technically: it's the model Jetour is using to enter premium GCC and Latin American markets rather than volume segments, launching first in the UAE (September 2025) and Qatar (November 2025) before expanding further. Buyers considering the G700 should evaluate it as a top-of-lineup halo model — priced and equipped accordingly — rather than a mainstream SUV replacement. Full specifications and current configuration options are listed on the [Jetour G700 product page](/cars/jetour-g700/).

## What Powers the 665kW System, and How Fast Is It?

The G700's powertrain combines a 2.0T turbocharged engine with dual electric motors through a 2-speed DHT (dedicated hybrid transmission), driving all four wheels. Combined system output is 665kW (904PS) and 1135N·m of torque — figures that place it well above typical mainstream PHEV SUVs and into performance-flagship territory.

That output translates directly into acceleration: Jetour rates the G700 at 0-100km/h in 4.6 seconds, with a top speed of 180km/h. For a 3180kg off-road-capable SUV, that acceleration figure comes from the instant torque delivery of the dual-motor electric side layering onto the combustion engine's output — a common PHEV advantage, but unusually strong here given the vehicle's size and off-road-oriented mass.

The 2-speed DHT is notable because most PHEV systems use a single-speed reduction gear; a 2-speed unit is typically chosen to better manage both low-speed off-road torque multiplication and high-speed cruising efficiency, which fits the G700's dual identity as an off-roader and a long-distance touring flagship. Combined with full-time 4WD, the driveline is built to put that torque down across varied terrain and surface conditions rather than just on-road.

For export buyers coming from diesel or naturally aspirated V6 body-on-frame off-roaders, the G700's powertrain represents a significant power and torque step up, delivered through a smaller-displacement engine supplemented by electrification rather than sheer displacement.

## How Far Can the G700 Go on Electric Power Alone?

The G700 uses a 34.13kWh LFP (lithium iron phosphate) battery pack, which delivers 100km of pure-electric range on the WLTC test cycle. LFP chemistry is generally favored for its thermal stability and cycle life, which matters for a vehicle marketed on off-road durability and long ownership cycles rather than maximum energy density.

With the 2.0T engine engaged, combined range extends up to 1000km — putting the G700 in the long-range PHEV category where a full tank-and-charge cycle can cover cross-country distances without refueling or recharging stops, a relevant selling point in export markets with sparser charging infrastructure, such as parts of the GCC and Latin America.

Charging is handled through an 800V platform, which allows DC fast-charging from 30% to 80% state of charge in approximately 30 minutes. The 800V architecture is a meaningful spec for export buyers evaluating future-proofing: it's the same voltage class used by current-generation flagship EVs, and it means the G700 isn't limited by 400V-era charging speeds even though it's a plug-in hybrid rather than a pure EV.

For buyers in markets where public DC fast-charging is still being built out, the practical takeaway is that the G700 functions as a capable hybrid on combustion power alone (up to 1000km combined) with the 100km electric range available for daily local driving on a home or destination charger, rather than requiring frequent fast-charging stops.

## Can the G700 Actually Handle Off-Road Terrain?

Yes — the G700's off-road geometry is genuine, not cosmetic. Approach, departure, and breakover angles of 35°/28°/21° are consistent with dedicated off-road SUVs, not soft-roaders, and 230mm of ground clearance gives meaningful room to clear rocks, ruts, and uneven trail surfaces. Wading depth is rated at 900mm, which covers most river-crossing and flood-transit scenarios encountered on serious off-road routes.

These figures matter in context: the G700's 3180kg weight and 4WD system need to be paired with real geometry to justify the "off-road flagship" label, and the specs given here (rather than marketing language) are what buyers should compare against competing off-road PHEVs in the same class.

The G700 also includes a 360° transparent chassis camera system, which displays a real-time view beneath the vehicle — showing wheel position and terrain directly under the chassis, normally hidden from the driver. This is specifically an off-road tool: it helps drivers place wheels precisely on rock crawls, avoid obstacles the undercarriage can't see, and navigate tight trail sections where visual judgment alone is unreliable.

Combined, the approach/departure/breakover angles, ground clearance, wading depth, and transparent chassis camera give the G700 a genuine off-road capability profile that goes beyond typical crossover-SUV specs — relevant for export buyers in markets like the GCC, where desert and off-highway driving is a real use case rather than a marketing angle.

## What's Inside the Cabin, and How Do the Trims Differ?

The G700 is offered in two trim tiers with a meaningful seating and technology difference: Comfort trim seats 5, while Luxury and Flagship trims seat 6. Buyers should confirm which configuration they're ordering, since the seating layout — not just equipment level — changes between trims.

| Feature | Comfort Trim | Luxury / Flagship Trim |
|---|---|---|
| Seating | 5 seats | 6 seats |
| L2 autonomous driving assist | Not specified as included | Included |
| 15.6" touchscreen (Snapdragon 8255) | Standard across trims | Standard across trims |
| 35.4" LCD digital instrument cluster | Standard across trims | Standard across trims |
| 360° transparent chassis camera | Standard across trims | Standard across trims |

The infotainment core — a 15.6" touchscreen running on a Snapdragon 8255 chipset — is a current-generation automotive SoC choice, paired with a 35.4" LCD instrument display that spans a significant portion of the dashboard width. L2 autonomous driving assist (lane-centering and adaptive driving-assist features typical of L2 systems) is confirmed as available on Luxury and Flagship trim, giving upper-trim buyers a highway-assist feature set on top of the off-road hardware shared across the range.

For export buyers, the practical decision point is seating capacity plus driver-assist features: fleet or family-use buyers wanting 6-seat capacity and L2 assist should specify Luxury or Flagship trim, while 5-seat Comfort trim covers buyers prioritizing base configuration and cost within the FOB range.

## What Does the G700 Cost, and Where Can Export Buyers Get It?

FOB pricing for the Jetour G700 ranges from $46,300 to $58,200, varying by trim and configuration. That range should be treated as the ex-works starting point for export orders — it does not include destination-market duties, VAT, freight, or local registration costs, which vary by country and should be confirmed directly with local customs and tax authorities before landed-cost budgeting.

The G700 is currently sold in the UAE, where it launched in September 2025, and Qatar, where it followed in November 2025 — both markets covered under GCC certification. Jetour is expanding the model into Latin America in 2026, with Ecuador, Panama, and Mexico named as target markets; this is described as early-market allocation, meaning availability and timing in these markets is still in rollout rather than fully established.

For distributors and fleet buyers evaluating the G700 for a new market, the current confirmed footprint (UAE, Qatar, GCC certification) plus the named 2026 Latin American expansion gives a clear picture of where Jetour is prioritizing supply. Buyers in markets outside this list should ask directly about allocation timing rather than assume availability. Full current configuration and ordering details are maintained on the [Jetour G700 product page](/cars/jetour-g700/).

## Best For / Not Ideal For

**Best for:**
- Distributors and buyers in markets with real off-road use cases (desert, unpaved terrain, river crossings) who also want PHEV efficiency and long combined range
- Fleet or family buyers who need 6-seat capacity and are willing to specify Luxury/Flagship trim for L2 driving assist
- Markets with 800V-capable DC fast-charging infrastructure, where the 30-minute 30%→80% charge time is actually usable
- Buyers positioning a genuine flagship/halo model in a premium GCC- or Latin America-facing lineup, rather than a volume mainstream SUV

**Not ideal for:**
- Budget-focused fleet orders — at $46,300–$58,200 FOB, the G700 is priced as a flagship, not an entry-level SUV
- Markets with little to no DC fast-charging access, where the 100km electric range and 800V charging advantage go largely unused and the vehicle functions mainly as a heavy combustion-hybrid
- Buyers needing confirmed availability outside the UAE, Qatar, and the named 2026 Latin American markets (Ecuador, Panama, Mexico) — other regions are not yet confirmed
- Applications requiring the 6-seat Luxury/Flagship configuration on a Comfort-trim budget, since the seating and L2 assist differences are trim-locked, not optional add-ons

## Frequently Asked Questions

**What is the actual difference between Comfort and Luxury/Flagship trim on the G700?**
Comfort trim seats 5; Luxury and Flagship trim seats 6. Luxury/Flagship also includes L2 autonomous driving assist, which is not confirmed as available on Comfort. Core tech — the 15.6" touchscreen, Snapdragon 8255 chipset, 35.4" instrument display, and 360° transparent chassis camera — is standard across trims.

**How long does it take to charge the G700's battery?**
On the 800V platform, DC fast-charging takes the 34.13kWh LFP battery from 30% to 80% state of charge in approximately 30 minutes. Full electric range on a full charge is 100km (WLTC).

**What's the total driving range with a full tank and full charge?**
Combined range with the 2.0T engine and battery working together is up to 1000km. Pure-electric-only range on the WLTC cycle is 100km.

**Where can I currently buy the Jetour G700 for export?**
It's confirmed for sale in the UAE (launched September 2025) and Qatar (launched November 2025) under GCC certification. Jetour is expanding into Latin America in 2026, naming Ecuador, Panama, and Mexico as target markets under early-market allocation.

**Is the G700 good off-road, or is it mostly a luxury cruiser with off-road styling?**
The specs indicate genuine off-road capability: 35°/28°/21° approach/departure/breakover angles, 230mm ground clearance, 900mm wading depth, and a 360° transparent chassis camera for terrain visibility. These are dedicated off-road figures, not soft-roader numbers.

---

Interested in FOB pricing, trim availability, or export documentation for the Jetour G700? Contact EV Auto Pro directly:

- **WhatsApp:** [+86 159 6446 7914](https://wa.me/8615964467914?text=Hi%2C%20I%27m%20interested%20in%20the%20Jetour%20G700%20PHEV%20for%20export%20-%20can%20you%20share%20current%20FOB%20pricing%20and%20trim%20availability%3F)
- **Email:** [gacaicai@gmail.com](mailto:gacaicai@gmail.com)`,
    faqs: [
      { q: 'What is the actual difference between Comfort and Luxury/Flagship trim on the G700?', a: 'Comfort trim seats 5; Luxury and Flagship trim seats 6. Luxury/Flagship also includes L2 autonomous driving assist, which is not confirmed as available on Comfort. Core tech — the 15.6" touchscreen, Snapdragon 8255 chipset, 35.4" instrument display, and 360° transparent chassis camera — is standard across trims.' },
      { q: 'How long does it take to charge the G700\'s battery?', a: 'On the 800V platform, DC fast-charging takes the 34.13kWh LFP battery from 30% to 80% state of charge in approximately 30 minutes. Full electric range on a full charge is 100km (WLTC).' },
      { q: 'What\'s the total driving range with a full tank and full charge?', a: 'Combined range with the 2.0T engine and battery working together is up to 1000km. Pure-electric-only range on the WLTC cycle is 100km.' },
      { q: 'Where can I currently buy the Jetour G700 for export?', a: 'It\'s confirmed for sale in the UAE (launched September 2025) and Qatar (launched November 2025) under GCC certification. Jetour is expanding into Latin America in 2026, naming Ecuador, Panama, and Mexico as target markets under early-market allocation.' },
      { q: 'Is the G700 good off-road, or is it mostly a luxury cruiser with off-road styling?', a: 'The specs indicate genuine off-road capability: 35°/28°/21° approach/departure/breakover angles, 230mm ground clearance, 900mm wading depth, and a 360° transparent chassis camera for terrain visibility. These are dedicated off-road figures, not soft-roader numbers.' },
    ], related: ['jetour-g700-luxury-off-road-phev-deep-dive'],
  },

};

export const newsSlugs = Object.keys(news);

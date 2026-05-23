export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  iconPath: string;  // Lucide SVG path
  heroBadges: string[];
  intro: string;
  phases?: { num: number; label: string; icon: string; desc: string; days: string }[];
  steps?: { num: number; phase: string; title: string; days: string; youDo: string[]; weDo: string[] }[];
  features?: { icon: string; title: string; desc: string }[];
  pricing?: { headline: string; items: { name: string; desc: string; price: string }[] };
  faqs: { q: string; a: string }[];
  trustStats: { num: string; label: string }[];
};

export const services: Record<string, Service> = {

  'export-process': {
    slug: 'export-process',
    title: 'Export Process',
    subtitle: '8-step from inquiry to delivery',
    tagline: 'Transparent timeline. Each milestone tracked. Founder-led personal review.',
    iconPath: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/>',
    heroBadges: ['8-Step Process', 'Founder-Led Review', '24h Reply Guarantee'],
    intro: 'Our 8-step export process is designed for transparency. Every milestone is tracked, every fee disclosed up-front. Founder Cai personally reviews each order.',
    phases: [
      { num: 1, label: 'Inquiry', icon: '💬', desc: 'Send spec → Quote', days: '< 1 day' },
      { num: 2, label: 'Order', icon: '📋', desc: 'PI signed → Deposit', days: '1-2 days' },
      { num: 3, label: 'Production', icon: '🏭', desc: 'Sourcing + QC', days: '5-15 days' },
      { num: 4, label: 'Shipping', icon: '🚢', desc: 'RoRo / Container / Block Train', days: '18-45 days' },
      { num: 5, label: 'After-Sales', icon: '🛠', desc: 'Parts + Warranty', days: 'Ongoing' },
    ],
    steps: [
      { num: 1, phase: 'Inquiry', title: 'Instant Inquiry Response', days: '< 24 hours',
        youDo: ['Send target market + quantity', 'Specify model preferences', 'Share import license (if applicable)'],
        weDo: ['Founder Cai reviews personally', 'Confirm stock availability', 'Send FOB + CIF quote', 'Recommend alternatives if specs unavailable'] },
      { num: 2, phase: 'Order', title: 'Contract & Pro Forma Invoice', days: '1-2 days',
        youDo: ['Review PI terms', 'Sign + return PI scan', 'Pay 30% T/T deposit'],
        weDo: ['Issue formal PI with breakdown', 'Confirm deposit via SWIFT', 'Lock factory production slot'] },
      { num: 3, phase: 'Production', title: 'Vehicle Sourcing & Allocation', days: '2-3 days',
        youDo: ['Confirm final config (color/trim)', 'Confirm shipping method'],
        weDo: ['Allocate from bonded stock OR factory order', 'Lock production batch', 'Issue tracking number'] },
      { num: 4, phase: 'Production', title: 'Pre-Shipment Inspection', days: '3-5 days',
        youDo: ['Review photo + video report', 'Approve or request adjustment'],
        weDo: ['Multi-point QC inspection', 'Photo + 360° video report', 'Destination cert pre-check'] },
      { num: 5, phase: 'Production', title: 'Vehicle Readiness & Final Payment', days: '5-10 days',
        youDo: ['Pay final 70% balance', 'Provide consignee details', 'Confirm port preference'],
        weDo: ['Export packaging', 'MoFCOM customs declaration', 'Marine cargo insurance', 'Bonded warehouse exit'] },
      { num: 6, phase: 'Shipping', title: 'Logistics Booking & B/L', days: '3-5 days',
        youDo: ['Confirm consignee + notify party', 'Approve B/L draft'],
        weDo: ['Book RoRo / Container / Block Train', 'Issue Bill of Lading (B/L)', 'Send certificate of origin'] },
      { num: 7, phase: 'Shipping', title: 'Sea / Rail Transit', days: '18-45 days',
        youDo: ['Receive GPS tracking updates', 'Prepare destination customs'],
        weDo: ['Real-time GPS tracking', 'Daily WhatsApp update', 'Coordinate with destination agent'] },
      { num: 8, phase: 'After-Sales', title: 'Delivery + Parts Network', days: 'Arrival + Ongoing',
        youDo: ['Handle local import customs', 'Receive vehicle + documents'],
        weDo: ['Document handover', 'Activate parts depot', 'Technical support hotline', 'Warranty claim coordination'] },
    ],
    faqs: [
      { q: 'Can you deliver urgent orders within 7 days?', a: 'Yes for in-stock units to nearby ports. Air freight available for ≤2 units (premium cost).' },
      { q: 'Can I change order config after PI signed?', a: 'Yes if production not started. Color/trim changes free within 48h of PI. After factory allocation, 5-10% change fee.' },
      { q: 'What if vehicle fails inspection?', a: 'You can: (a) replacement unit (no extra cost), (b) factory rework, or (c) cancel + refund.' },
      { q: 'Who pays for marine cargo insurance?', a: 'Included in CIF quotes (we cover). For FOB, you can buy separately OR we coordinate (1.5-2% cargo value).' },
      { q: 'How is final balance handled?', a: 'T/T 70% before container loading. Signed photo evidence of loaded vehicle + container number triggers B/L release within 24h.' },
      { q: 'Real-time shipment tracking?', a: 'Yes. GPS link on B/L issue. Daily WhatsApp update. Final 7 days before arrival: hourly updates.' },
    ],
    trustStats: [
      { num: '24h', label: 'Reply guarantee' }, { num: '98%', label: 'On-time delivery' },
      { num: '0', label: 'Hidden fees' }, { num: 'Cai', label: 'Personal review' },
    ],
  },

  'shipping': {
    slug: 'shipping',
    title: 'Shipping & Logistics',
    subtitle: 'RoRo / Container / Block Train / Truck',
    tagline: 'All modes covered. Marine cargo insurance included. GPS tracking + daily WhatsApp.',
    iconPath: '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/>',
    heroBadges: ['4 Shipping Modes', 'Marine Insurance Included', 'Real-Time GPS Tracking'],
    intro: 'We coordinate all major shipping modes from Shanghai to your destination — RoRo, Container, Block Train, and Truck. Marine cargo insurance included in CIF quotes. Real-time tracking + daily WhatsApp updates throughout transit.',
    features: [
      { icon: '🚢', title: 'RoRo (Roll-on/Roll-off)', desc: 'Dedicated car carrier vessel. Most cost-effective for ≥5 units. Direct port-to-port. 18-45 days depending on destination.' },
      { icon: '📦', title: 'Container 40HC', desc: '1-4 units per container. Higher per-unit cost but flexible MOQ. Supports CKD parts shipment. Mixed cargo possible.' },
      { icon: '🚆', title: 'Block Train (Khorgos)', desc: 'Rail freight via Khorgos border to Central Asia + Russia. 18-22 days. 30% cheaper than RoRo for inland destinations.' },
      { icon: '🚛', title: 'Truck (Border Crossing)', desc: 'Direct truck via Khorgos for KZ/UZ/KGZ. Fastest for 1-5 units. 5-15 days to Almaty/Tashkent.' },
      { icon: '✈️', title: 'Air Freight (Express)', desc: 'For emergency single VIP unit. 4-7 days. 3-5x ocean freight cost. Limited to premium dealers.' },
      { icon: '🌊', title: 'Multi-modal', desc: 'Mixed Sea + Rail + Truck for remote destinations. We coordinate handoff between modes.' },
    ],
    faqs: [
      { q: 'RoRo vs Container — which to choose?', a: 'RoRo: lower cost ≥5 units, fastest, dedicated car carrier. Container: better for ≤4 units or mixed cargo, supports CKD. We recommend based on quantity and destination.' },
      { q: 'How long does shipping take?', a: 'Russia (SPB): 30-45 days RoRo. UAE (Jebel Ali): 18-25 days. Kazakhstan (via Khorgos rail): 18-22 days. Brazil (Santos): 35-50 days.' },
      { q: 'Is marine cargo insurance included?', a: 'Yes for CIF quotes (we pay). For FOB, you can buy separately OR we coordinate on your behalf (1.5-2% cargo value).' },
      { q: 'Can I track my shipment in real-time?', a: 'Yes. GPS tracking link sent on B/L issue. Daily WhatsApp updates. Final 7 days: hourly updates.' },
      { q: 'What if container is damaged in transit?', a: 'Marine insurance covers ALL RISKS. Photo evidence + B/L → claim resolved within 14 days. We handle entire claim process for CIF orders.' },
      { q: 'Block Train route to Russia?', a: 'Khorgos border → Astana (KZ) → Yekaterinburg → Moscow. 18-22 days. Best for inland Russia destinations. 30% cheaper than RoRo SPB.' },
    ],
    trustStats: [
      { num: '4', label: 'Shipping modes' }, { num: '60+', label: 'Destinations' },
      { num: '98%', label: 'On-time rate' }, { num: '0', label: 'Lost shipments' },
    ],
  },

  'inspection': {
    slug: 'inspection',
    title: 'Pre-Shipment Inspection',
    subtitle: '360° QC + Photo / Video Report',
    tagline: 'Multi-point quality inspection at bonded warehouse. Independent third-party available on request.',
    iconPath: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="m8 11 2 2 4-4"/>',
    heroBadges: ['Multi-Point QC', 'Photo + 360° Video', 'Third-Party Available'],
    intro: 'Every unit undergoes 360° pre-shipment inspection at our Shanghai bonded warehouse. You receive photo + 360° video report for approval before container loading. Independent third-party inspection (SGS / Bureau Veritas) available on request.',
    features: [
      { icon: '🔍', title: 'Exterior Inspection', desc: 'Paint match, panel gaps, dents/scratches, glass clarity, light functionality, tire condition. 30+ inspection points.' },
      { icon: '🪑', title: 'Interior Inspection', desc: 'Seat condition, dashboard, infotainment, A/C, all switches/buttons. Mileage verification < 50 km from factory.' },
      { icon: '⚙', title: 'Drivetrain Inspection', desc: 'Engine start, transmission shift, brake response, suspension, exhaust. For EV: battery health % + charging port test.' },
      { icon: '🔌', title: 'Electrical Test', desc: 'All ECUs scanned. Software updated to latest. CAN bus diagnostic logs reviewed. No active fault codes.' },
      { icon: '📸', title: 'Photo + 360° Video', desc: 'Full vehicle walk-around video. 50+ photos: exterior every angle, interior every detail, undercarriage, engine bay.' },
      { icon: '🏛', title: '3rd-Party Option', desc: 'SGS / Bureau Veritas / Intertek inspection available. Independent report. Cost: $200-500/unit depending on scope.' },
    ],
    pricing: {
      headline: 'Inspection Options',
      items: [
        { name: 'Standard QC (Included)', desc: 'Our 360° multi-point inspection + photo/video report.', price: 'Free with every order' },
        { name: 'Enhanced QC (Optional)', desc: 'Extended testing: 100km road test + dyno test + extra documentation.', price: '$80 per unit' },
        { name: '3rd-Party SGS', desc: 'Independent SGS inspector + certified report. International acceptance.', price: '$280-450 per unit' },
        { name: '3rd-Party Bureau Veritas', desc: 'BV inspection + certified report. Used by major insurance companies.', price: '$320-500 per unit' },
      ],
    },
    faqs: [
      { q: 'Is inspection included in the FOB price?', a: 'Yes. Standard 360° QC + photo/video report is included free. Enhanced QC or third-party (SGS/BV) optional add-on.' },
      { q: 'What if vehicle fails inspection?', a: 'We do not load failed units. You get: (a) replacement unit (no extra cost), (b) factory rework (3-5 days), or (c) cancel + refund deposit. We side with you, not the factory.' },
      { q: 'How long does inspection take?', a: '3-5 days from arrival at our bonded warehouse to completion of report. Faster for in-stock units (already pre-inspected).' },
      { q: 'Can I see the inspection report before payment?', a: 'Yes. Photo + 360° video report shared via WhatsApp / email before final balance payment. You approve before container loading.' },
      { q: 'When to choose third-party inspection?', a: 'Recommended for: orders ≥10 units, first-time partnership, high-value vehicles ($30K+ FOB), markets with strict customs (Brazil, Mexico).' },
      { q: 'Do you inspect for transit damage too?', a: 'Pre-shipment QC is at loading. Transit damage is covered by marine cargo insurance. We coordinate the claim process if damage occurs.' },
    ],
    trustStats: [
      { num: '360°', label: 'Photo/video' }, { num: '30+', label: 'Inspection points' },
      { num: '100%', label: 'Pre-shipment QC' }, { num: '24h', label: 'Report turnaround' },
    ],
  },

  'financing': {
    slug: 'financing',
    title: 'Payment & Financing',
    subtitle: 'T/T, L/C, OA — Flexible Terms',
    tagline: 'Standard T/T 30+70. L/C at sight from major banks. OA credit after first successful order.',
    iconPath: '<line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    heroBadges: ['T/T + L/C + OA', 'USD Default · CNY Direct', 'No Crypto / Escrow'],
    intro: 'We offer flexible B2B payment terms compatible with international trade practices. T/T 30% deposit + 70% before shipment is standard. L/C at sight from major banks accepted. OA (Open Account) credit terms available after first successful order.',
    features: [
      { icon: '💵', title: 'T/T Bank Wire (Standard)', desc: '30% T/T deposit on PI signing + 70% before container loading. SWIFT transfer to our Bank of China / ICBC USD account.' },
      { icon: '📄', title: 'L/C at Sight', desc: 'Letter of Credit at sight from major banks (HSBC, JPMorgan, Citi, BNP Paribas, Sberbank, Emirates NBD, Banco do Brasil, etc).' },
      { icon: '📅', title: 'OA Credit (Repeat Buyers)', desc: 'Open Account 30/60/90 days credit terms available after first successful order. Credit verification + bank reference required.' },
      { icon: '🪙', title: 'CNY Direct (Select Markets)', desc: 'Direct CNY settlement available for repeat buyers in Russia / Pakistan / Iran / Belarus. Saves 1-2% on currency conversion.' },
      { icon: '🏦', title: 'Western Union (Small Orders)', desc: 'For orders ≤2 units. Faster than T/T (24h). Higher fees. Useful for sample orders.' },
      { icon: '❌', title: 'NOT Accepted', desc: 'We do NOT accept cryptocurrency (USDT/Bitcoin/ETH), third-party escrow, or PayPal. International trade compliance requirements.' },
    ],
    pricing: {
      headline: 'Payment Schedule',
      items: [
        { name: 'T/T 30% Deposit', desc: 'On PI signing. Triggers production slot / stock allocation.', price: 'Within 5 days of PI' },
        { name: 'T/T 70% Final Balance', desc: 'Before container loading. Triggers B/L release.', price: 'Within 24h of loading' },
        { name: 'L/C at Sight', desc: 'Document presentation against payment. Cost: bank fees on both sides.', price: 'Per L/C terms' },
        { name: 'OA Credit', desc: 'Net 30/60/90 days after B/L. Available for established partners only.', price: 'Subject to verification' },
      ],
    },
    faqs: [
      { q: 'Why T/T 30+70 split?', a: 'Industry standard for B2B vehicle export. 30% deposit confirms order + funds production. 70% before shipment ensures payment before vessel sailing. Reduces risk for both sides.' },
      { q: 'Can I pay in my local currency?', a: 'USD is invoicing default. Your bank can wire from RUB/AED/KZT/BRL/etc — conversion at your bank rate. CNY direct settlement available for select markets.' },
      { q: 'How does L/C work?', a: 'You open L/C at sight from your bank in USD. We present documents (B/L + invoice + packing list + COC) to your bank. Bank pays us, releases docs to you. Used for high-value or first-time orders.' },
      { q: 'When can I get OA credit?', a: 'After first successful order paid in full + delivered + we receive credit reference from your bank. Net 30 starting. Net 60-90 after 2-3 successful orders.' },
      { q: 'Currency risk — who pays?', a: 'USD invoicing means you bear currency risk from order to payment. To lock rate, pay deposit early or use L/C at sight (locks rate at issue).' },
      { q: 'Do you accept crypto?', a: 'No. International trade compliance requires regulated banking channels. We accept T/T / L/C / OA only. Western Union for small orders ≤2 units.' },
    ],
    trustStats: [
      { num: '4', label: 'Payment methods' }, { num: '0', label: 'Hidden fees' },
      { num: 'USD', label: 'Default invoice' }, { num: '90d', label: 'OA max credit' },
    ],
  },

  'after-sales': {
    slug: 'after-sales',
    title: 'After-Sales & Parts',
    subtitle: 'Parts Depots + Warranty Coordination',
    tagline: 'Spare parts depots in Moscow / Almaty / Dubai. Genuine OEM + aftermarket. Warranty claim support.',
    iconPath: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/><path d="M3.5 21 8 16.5"/>',
    heroBadges: ['Parts Depots Worldwide', 'Genuine OEM', 'Warranty Coordination'],
    intro: 'Vehicle delivery is just the start. We maintain spare parts depots in Moscow, Almaty, and Dubai. Other markets: parts ship from Shanghai within 7-14 days. Warranty claim coordination via global service partners.',
    features: [
      { icon: '🇷🇺', title: 'Moscow Parts Depot', desc: 'Active depot for Russia + CIS. Genuine OEM + aftermarket inventory. 3-7 day delivery to Russian cities.' },
      { icon: '🇰🇿', title: 'Almaty Parts Depot', desc: 'Central Asia hub. Serves Kazakhstan + Uzbekistan + Kyrgyzstan. 5-10 day delivery to remote regions.' },
      { icon: '🇦🇪', title: 'Dubai Parts Depot', desc: 'Gulf hub. Serves UAE + Saudi + Oman + Bahrain + Qatar. 3-7 day delivery via DHL/FedEx Express.' },
      { icon: '🚚', title: 'Shanghai Hub (Other Markets)', desc: 'Brazil / Egypt / Mexico / Africa: parts ship from Shanghai. 7-14 day delivery via DHL/FedEx/EMS.' },
      { icon: '🛡', title: 'Warranty Coordination', desc: 'Vehicle: 5-year/100K km. Battery: 8-year/160K km. We coordinate factory warranty claims via local authorized partners.' },
      { icon: '🎓', title: 'Technical Training', desc: 'Factory training (3-5 days) for distributor partner service teams. Diagnostic tools + common repairs + software updates.' },
    ],
    pricing: {
      headline: 'After-Sales Plans',
      items: [
        { name: 'Standard Warranty (Included)', desc: 'Factory 5-year / 100K km vehicle. 8-year / 160K km battery on EV/PHEV. We coordinate claims.', price: 'Free with every order' },
        { name: 'Extended Warranty', desc: 'Add 2-3 extra years for major components. Available for select models.', price: '$400-1,200 per vehicle' },
        { name: 'Distributor Training', desc: '3-5 day factory training in China for your service team. Diagnostic + repair + software.', price: '$2,500 per person (excl. travel)' },
        { name: 'Parts Stock Setup', desc: 'Initial parts inventory package for new distributor (recommended).', price: '$5,000-15,000 (varies)' },
      ],
    },
    faqs: [
      { q: 'What is the standard warranty?', a: 'Vehicle: 5-year / 100,000 km. Battery (BEV/PHEV/EREV): 8-year / 160,000 km. Powertrain: 5-year / 100,000 km. Varies slightly by brand.' },
      { q: 'How do warranty claims work?', a: 'Photo + video evidence of issue + VIN + date → we submit to factory → factory approves parts replacement → we ship parts from nearest depot → local authorized partner installs (or you self-install with our remote guidance).' },
      { q: 'Where can my customer claim warranty service?', a: 'For markets with depots (Moscow/Almaty/Dubai): local authorized Changan/Geely/Jetour partners. Other markets: we coordinate remote diagnosis + parts shipment.' },
      { q: 'How fast do parts arrive?', a: 'Russia/CIS (Moscow depot): 3-7 days. Central Asia (Almaty): 5-10 days. Gulf (Dubai): 3-7 days. Other markets (Shanghai): 7-14 days.' },
      { q: 'Do you provide diagnostic tools?', a: 'Yes. OEM diagnostic tool packages available for distributor partners. Includes software updates + scan tool + technical hotline access.' },
      { q: 'What about software / OTA updates?', a: 'Modern Chinese NEVs support OTA. We ensure latest software at shipment. Major firmware updates: remote install via WiFi or service appointment.' },
    ],
    trustStats: [
      { num: '3', label: 'Parts depots' }, { num: '7-14', label: 'Days global delivery' },
      { num: '5yr', label: 'Vehicle warranty' }, { num: '8yr', label: 'Battery warranty' },
    ],
  },

};

export const serviceSlugs = Object.keys(services);

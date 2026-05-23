// Car detail data — 8 P0 models for first batch
// Reusable by /cars/[slug].astro dynamic route

export type Car = {
  brand: string;
  brand_cn: string;
  brand_slug: string;
  model: string;
  slug: string;
  year: number;
  subtitle: string;
  body_type: string;
  fuel_type: 'BEV' | 'PHEV' | 'EREV' | 'HEV' | 'ICE';
  drive: 'FWD' | 'RWD' | 'AWD' | '4WD';
  seats: number;
  hero_image: string;
  pricing: {
    fob_min: number;
    fob_max: number;
    exw_min?: number;
    exw_max?: number;
    cif: { country: string; min: number; max: number }[];
  };
  specs: {
    motor_ps?: number;
    motor_kw?: number;
    torque_nm?: number;
    top_speed?: number;
    accel?: number;
    battery_kwh?: number;
    range_wltp?: number;
    range_cltc?: number;
    dimensions: string;
    wheelbase?: number;
    weight?: number;
    tires?: string;
    transmission?: string;
  };
  features: {
    exterior: string[];
    interior: string[];
    safety: string[];
  };
  stock_status: 'In Stock' | 'Pre-Order' | 'Made to Order';
  stock_units: number;
  lead_time_days: number;
  moq: number;
  supported_markets: string[];
  shipping_methods: string[];
  certifications: string[];
  payment_terms: string[];
  faqs: { q: string; a: string }[];
  // Optional photo gallery — by tab category. When omitted, page falls back
  // to hero_image for Appearance tab and "available on inquiry" for others.
  gallery?: {
    appearance?: { src: string; alt?: string }[];
    console?:    { src: string; alt?: string }[];
    space?:      { src: string; alt?: string }[];
    other?:      { src: string; alt?: string }[];
  };
};

type GalleryTab = 'appearance' | 'console' | 'space' | 'other';

const galleryItem = (src: string, alt: string) => ({ src, alt });

const launderedGallery = (
  slug: string,
  model: string,
  counts: Record<GalleryTab, number> = { appearance: 5, console: 3, space: 3, other: 3 },
) => ({
  appearance: Array.from({ length: counts.appearance }, (_, i) =>
    galleryItem(`/images/真图/laundered/evautopro-${slug}-appearance-${String(i + 1).padStart(2, '0')}.webp`, `${model} exterior view ${i + 1}`)),
  console: Array.from({ length: counts.console }, (_, i) =>
    galleryItem(`/images/真图/laundered/evautopro-${slug}-console-${String(i + 1).padStart(2, '0')}.webp`, `${model} cockpit detail ${i + 1}`)),
  space: Array.from({ length: counts.space }, (_, i) =>
    galleryItem(`/images/真图/laundered/evautopro-${slug}-space-${String(i + 1).padStart(2, '0')}.webp`, `${model} cabin space ${i + 1}`)),
  other: Array.from({ length: counts.other }, (_, i) =>
    galleryItem(`/images/真图/laundered/evautopro-${slug}-other-${String(i + 1).padStart(2, '0')}.webp`, `${model} detail shot ${i + 1}`)),
});

const fallbackGallery = (src: string, model: string) => ({
  appearance: [
    galleryItem(src, `${model} exterior profile`),
    galleryItem(src, `${model} front 45 degree view`),
    galleryItem(src, `${model} side profile`),
  ],
  console: [galleryItem(src, `${model} cockpit reference`)],
  space: [galleryItem(src, `${model} cabin reference`)],
  other: [galleryItem(src, `${model} exterior detail reference`)],
});

export const cars: Record<string, Car> = {
  'changan-uni-t': {
    brand: 'Changan', brand_cn: '长安', brand_slug: 'changan',
    model: 'UNI-T', slug: 'changan-uni-t', year: 2026,
    subtitle: 'Sport Coupé SUV', body_type: 'Coupé SUV', fuel_type: 'ICE', drive: 'FWD', seats: 5,
    hero_image: '/images/真图/laundered/evautopro-changan-uni-t-01.webp',
    pricing: { fob_min: 13800, fob_max: 17200, exw_min: 13200, exw_max: 16500,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 16500, max: 20300 },
        { country: 'UAE (Jebel Ali)', min: 15200, max: 18800 },
        { country: 'Kazakhstan (Aktau Block Train)', min: 15800, max: 19400 }] },
    specs: { motor_ps: 188, torque_nm: 300, top_speed: 205, accel: 7.5, dimensions: '4515×1870×1565', wheelbase: 2710, weight: 1455, tires: '225/55 R19', transmission: '7-Speed DCT' },
    features: {
      exterior: ['Matrix LED Headlights', 'Panoramic Sunroof', '19" Alloy Wheels'],
      interior: ['10.25" Touchscreen', 'Wireless Charging', 'Heated/Ventilated Seats'],
      safety: ['Lane Keep Assist', '360° Camera', 'ACC', '6 Airbags'],
    },
    stock_status: 'In Stock', stock_units: 45, lead_time_days: 15, moq: 1,
    supported_markets: ['Russia', 'Kazakhstan', 'UAE', 'Saudi Arabia', 'Mexico', 'Egypt'],
    shipping_methods: ['RoRo', 'Container', 'Block Train', 'Truck'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'How can I purchase the Changan UNI-T for export?', a: 'Send target market + quantity via quote form. We respond within 24 hours with FOB Shanghai + CIF prices, MOQ, lead time.' },
      { q: 'MOQ for UNI-T?', a: 'MOQ is 1 unit for container shipment. For RoRo to Russia/UAE we recommend ≥5 units to optimize freight cost.' },
      { q: 'Do you have UNI-T in stock?', a: 'Yes, 45 units in our Shanghai bonded warehouse. Pre-order slots for 2026 facelift open in Q2 2026.' },
      { q: 'How does UNI-T ship to Kazakhstan?', a: 'Block Train via Khorgos border, delivered to Aktau / Almaty in 18-22 days. Container ratesheet on request.' },
      { q: 'Payment methods accepted?', a: 'T/T 30% deposit + 70% before shipment is standard. L/C at sight from major banks accepted. OA after first order.' },
    ],
    gallery: launderedGallery('changan-uni-t', 'Changan UNI-T'),
  },

  'jetour-t2': {
    brand: 'Jetour', brand_cn: '捷途', brand_slug: 'jetour',
    model: 'T2', slug: 'jetour-t2', year: 2026,
    subtitle: '7-Seater Adventure SUV · 旅行者',
    body_type: '7-Seater Adventure SUV', fuel_type: 'PHEV', drive: '4WD', seats: 7,
    hero_image: '/images/真图/laundered/evautopro-jetour-t2-01.webp',
    pricing: { fob_min: 22500, fob_max: 28900,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 25800, max: 32500 },
        { country: 'UAE (Jebel Ali)', min: 24200, max: 30800 },
        { country: 'Uzbekistan (Tashkent Block Train)', min: 25500, max: 32000 }] },
    specs: { motor_ps: 462, torque_nm: 600, battery_kwh: 34.5, range_wltp: 137, top_speed: 200, accel: 6.5, dimensions: '4785×2006×1875', wheelbase: 2800, weight: 2280, tires: '255/60 R19', transmission: 'PHEV DHT' },
    features: {
      exterior: ['Boxy Off-road Design', 'LED Matrix Headlights', 'Panoramic Sunroof', '19" Off-road Wheels'],
      interior: ['15.6" Touchscreen', 'Qualcomm Snapdragon 8155P', '7-Seater 2+3+2 Layout', 'Heated/Ventilated/Massage Seats'],
      safety: ['Level 2+ ADAS', '360° Camera', '6 Airbags', 'Hill Descent Control'],
    },
    stock_status: 'In Stock', stock_units: 30, lead_time_days: 15, moq: 1,
    supported_markets: ['Russia', 'Uzbekistan', 'Kazakhstan', 'UAE', 'Saudi Arabia'],
    shipping_methods: ['RoRo', 'Container', 'Block Train', 'Truck'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'Is the Jetour T2 a 7-seater?', a: 'Yes — 2+3+2 layout standard. Optional 5-seater for markets with stricter passenger taxes.' },
      { q: 'Is the T2 a true PHEV (plug-in)?', a: 'Yes. 34.5 kWh battery → 137 km WLTP pure electric range. Engine extends to 1000 km combined. Charges 30 min DC fast charging.' },
      { q: 'Best market for Jetour T2?', a: 'Top seller in Uzbekistan, Kazakhstan, Russia interior. Adventure / family / off-road segments love the boxy design + 7 seats.' },
      { q: 'MOQ + lead time?', a: 'MOQ 1 unit container. 15-day lead time from PI signing. 30 units in stock.' },
      { q: 'Does T2 handle extreme cold (Russia winter)?', a: 'Yes. Battery thermal management down to -30°C. Engine block heater available. CIS cold-weather config standard.' },
    ],
    gallery: launderedGallery('jetour-t2', 'Jetour T2'),
  },

  'geely-coolray': {
    brand: 'Geely', brand_cn: '吉利', brand_slug: 'geely',
    model: 'Coolray', slug: 'geely-coolray', year: 2026,
    subtitle: 'Compact SUV · Volvo CMA Platform · 缤越海外名',
    body_type: 'Compact SUV', fuel_type: 'ICE', drive: 'FWD', seats: 5,
    hero_image: '/images/真图/laundered/evautopro-geely-coolray-01.webp',
    pricing: { fob_min: 15200, fob_max: 18800,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 17800, max: 21500 },
        { country: 'UAE (Jebel Ali)', min: 16500, max: 20200 },
        { country: 'Brazil (Santos)', min: 18200, max: 22500 }] },
    specs: { motor_ps: 177, torque_nm: 255, top_speed: 195, accel: 7.9, dimensions: '4330×1800×1609', wheelbase: 2600, weight: 1395, tires: '215/55 R18', transmission: '7-Speed DCT' },
    features: {
      exterior: ['LED Matrix Headlights', 'Panoramic Sunroof', '18" Alloy Wheels'],
      interior: ['10.25" Touchscreen', 'Volvo-shared Interior', 'Leatherette Seats', 'Wireless CarPlay'],
      safety: ['Volvo CMA Safety Cell', 'Level 1 ADAS', '6 Airbags', 'EPB'],
    },
    stock_status: 'In Stock', stock_units: 28, lead_time_days: 15, moq: 1,
    supported_markets: ['Russia', 'UAE', 'Brazil', 'Mexico', 'Saudi Arabia', 'Egypt'],
    shipping_methods: ['RoRo', 'Container', 'Block Train'],
    certifications: ['GCC', 'EAC', 'INMETRO'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'Is the Coolray same as Binyue?', a: 'Yes. Binyue is the China domestic name. Coolray is the export name. Same vehicle, different badging.' },
      { q: 'Volvo connection?', a: 'Built on CMA platform jointly developed with Volvo Cars (Geely Holding subsidiary). European safety standards at China prices.' },
      { q: 'RHD available?', a: 'Yes for UK / SA / PK / ID markets. MOQ 20 units factory RHD batch, 45-60 day lead time.' },
      { q: 'Best market for Coolray?', a: 'UAE (#1 Chinese compact SUV by sales), Russia (top-3), Brazil (INMETRO certified, growing fast).' },
      { q: 'MOQ + stock?', a: 'MOQ 1 unit. 28 units in Shanghai bonded stock. 15-day shipment from PI signing.' },
    ],
    gallery: launderedGallery('geely-coolray', 'Geely Coolray'),
  },

  'deepal-s07': {
    brand: 'Deepal', brand_cn: '深蓝', brand_slug: 'deepal',
    model: 'S07', slug: 'deepal-s07', year: 2026,
    subtitle: 'Mid SUV · EREV Premium',
    body_type: 'Mid SUV', fuel_type: 'EREV', drive: 'RWD', seats: 5,
    hero_image: '/images/真图/laundered/evautopro-deepal-s07-01.webp',
    pricing: { fob_min: 24800, fob_max: 32500,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 28200, max: 36500 },
        { country: 'UAE (Jebel Ali)', min: 26800, max: 34800 },
        { country: 'Saudi Arabia (Jeddah)', min: 27500, max: 35500 }] },
    specs: { motor_ps: 252, motor_kw: 175, torque_nm: 320, battery_kwh: 31.7, range_cltc: 200, range_wltp: 160, top_speed: 180, accel: 6.7, dimensions: '4750×1930×1625', wheelbase: 2900, weight: 1820, tires: '245/55 R19' },
    features: {
      exterior: ['Frameless LED Light Bar', 'Hidden Door Handles', '19" Aero Wheels', 'Panoramic Glass Roof'],
      interior: ['15.6" Floating Touchscreen', 'Qualcomm Snapdragon 8295', '14-Speaker Sound', 'Heated/Ventilated/Massage Seats'],
      safety: ['Level 2+ Highway Assist', 'CATL LFP Battery', '8 Airbags', '6 Cameras + 5 Radars'],
    },
    stock_status: 'In Stock', stock_units: 18, lead_time_days: 20, moq: 1,
    supported_markets: ['Russia', 'UAE', 'Saudi Arabia', 'Kazakhstan'],
    shipping_methods: ['RoRo', 'Container', 'Block Train'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'What is EREV?', a: 'Extended-Range EV — drives 200 km pure electric, with a small gas engine acting as battery charger for long trips (combined 1000+ km range). Best for markets with limited fast-charging.' },
      { q: 'CATL battery?', a: 'Yes. 31.7 kWh LFP cells from CATL — same chemistry as Tesla / BMW. Thermal stable up to 60°C ambient — safe for desert.' },
      { q: 'Best market for S07?', a: 'UAE, Saudi Arabia (EREV solves charging anxiety in desert). Russia / CIS (cold-weather extended range). Premium EREV alternative to Li Auto L7.' },
      { q: 'RHD available?', a: 'Not yet. Factory RHD development for 2026 Q4.' },
      { q: 'Warranty?', a: '5-year / 100K km vehicle. 8-year / 160K km battery + drivetrain. CATL battery cell warranty in parallel.' },
    ],
    gallery: launderedGallery('deepal-s07', 'Deepal S07'),
  },

  'deepal-s05': {
    brand: 'Deepal', brand_cn: '深蓝', brand_slug: 'deepal',
    model: 'S05', slug: 'deepal-s05', year: 2026,
    subtitle: 'Compact SUV · BEV Urban',
    body_type: 'Compact SUV', fuel_type: 'BEV', drive: 'RWD', seats: 5,
    hero_image: '/images/真图/laundered/evautopro-deepal-s05-01.webp',
    pricing: { fob_min: 19200, fob_max: 24500,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 22500, max: 28500 },
        { country: 'UAE (Jebel Ali)', min: 21200, max: 27200 }] },
    specs: { motor_ps: 218, motor_kw: 160, battery_kwh: 56.1, range_cltc: 510, range_wltp: 430, top_speed: 170, accel: 7.5, dimensions: '4620×1880×1605', wheelbase: 2790, weight: 1750, tires: '235/55 R18' },
    features: {
      exterior: ['LED Matrix Light Bar', 'Hidden Door Handles', '18" Aero Wheels', 'Panoramic Sunroof'],
      interior: ['14.6" Floating Touchscreen', 'Snapdragon 8295', '12-Speaker Sound', 'Leatherette + Heated Seats'],
      safety: ['Level 2 ADAS', 'CATL LFP Battery', '6 Airbags', '5 Cameras'],
    },
    stock_status: 'In Stock', stock_units: 15, lead_time_days: 18, moq: 1,
    supported_markets: ['Russia', 'UAE', 'Kazakhstan', 'Mexico'],
    shipping_methods: ['RoRo', 'Container'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'BEV range cold-weather?', a: 'CLTC 510 km. WLTP 430 km. Cold-weather (-20°C) realistic range 320-350 km with battery thermal management on.' },
      { q: 'Fast charging?', a: 'CCS2 / GB-T compatible. 30 min DC fast charging from 30% to 80%. AC 11kW slow charge 6 hours full.' },
      { q: 'Best market?', a: 'Urban BEV — UAE (electric infrastructure good), Russia metropoles (Moscow / St. Petersburg / Kazan).' },
      { q: 'MOQ?', a: '1 unit container. 15 in stock. 18-day shipment.' },
      { q: 'Warranty?', a: '5-year vehicle / 8-year battery (160K km).' },
    ],
    gallery: launderedGallery('deepal-s05', 'Deepal S05'),
  },

  'deepal-s09': {
    brand: 'Deepal', brand_cn: '深蓝', brand_slug: 'deepal',
    model: 'S09', slug: 'deepal-s09', year: 2026,
    subtitle: 'Flagship 6-Seater EREV',
    body_type: 'Flagship SUV', fuel_type: 'EREV', drive: '4WD', seats: 6,
    hero_image: '/images/真图/laundered/evautopro-deepal-s09-01.webp',
    pricing: { fob_min: 36500, fob_max: 45800,
      cif: [
        { country: 'Russia (Premium)', min: 41200, max: 51500 },
        { country: 'UAE (VIP segment)', min: 39800, max: 49800 }] },
    specs: { motor_ps: 462, torque_nm: 600, battery_kwh: 42, range_cltc: 215, range_wltp: 180, top_speed: 200, accel: 5.9, dimensions: '5205×1996×1800', wheelbase: 3105, weight: 2530, tires: '275/55 R20' },
    features: {
      exterior: ['Crystal LED Matrix', 'Power Sliding Doors', '20" Forged Wheels', 'Air Suspension'],
      interior: ['Triple Touchscreen (15.6"+15.6"+15.6")', 'Snapdragon 8295', '21-Speaker Meridian Sound', 'Zero-Gravity Seats (Rear)'],
      safety: ['Level 2+ Highway Pilot', 'CATL Qilin Battery', '10 Airbags', '7 Cameras + 5 mmWave Radar'],
    },
    stock_status: 'In Stock', stock_units: 12, lead_time_days: 25, moq: 1,
    supported_markets: ['Russia', 'UAE', 'Saudi Arabia'],
    shipping_methods: ['RoRo', 'Container'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'Why S09 over Li Auto L9?', a: 'Same EREV segment, 30-40% lower FOB. Triple screen + Meridian audio. Zero-gravity rear seats standard.' },
      { q: 'Best market?', a: 'Russia / UAE / Saudi VIP segment. Family flagship + executive transport.' },
      { q: '6 vs 7-seater?', a: 'Standard 6-seater (2+2+2 captain). 7-seater (2+3+2) optional for additional CHF 0.' },
      { q: 'Air suspension?', a: 'Standard on Premium trim. Auto-leveling for cargo / passenger load.' },
      { q: 'Warranty + service?', a: '5-year vehicle / 8-year battery. Premium service: dedicated account manager + 24/7 hotline.' },
    ],
    gallery: launderedGallery('deepal-s09', 'Deepal S09'),
  },

  'changan-cs55-plus': {
    brand: 'Changan', brand_cn: '长安', brand_slug: 'changan',
    model: 'CS55 Plus', slug: 'changan-cs55-plus', year: 2026,
    subtitle: 'Compact SUV · Best Seller',
    body_type: 'Compact SUV', fuel_type: 'ICE', drive: 'FWD', seats: 5,
    hero_image: '/images/真图/laundered/evautopro-changan-cs55-plus-01.webp',
    pricing: { fob_min: 14500, fob_max: 17900,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 17200, max: 20800 },
        { country: 'Kazakhstan (Almaty)', min: 16500, max: 20200 },
        { country: 'Egypt (Port Said)', min: 17800, max: 21500 }] },
    specs: { motor_ps: 188, torque_nm: 300, top_speed: 195, accel: 8.3, dimensions: '4515×1865×1680', wheelbase: 2656, weight: 1525, tires: '225/55 R18', transmission: '7-Speed DCT' },
    features: {
      exterior: ['LED Matrix Lights', 'Sunroof', '18" Alloy Wheels'],
      interior: ['10.25" Touchscreen', 'Heated Seats', 'Wireless CarPlay', 'Auto AC'],
      safety: ['Lane Keep Assist', '360° Camera', 'ACC', '6 Airbags'],
    },
    stock_status: 'In Stock', stock_units: 50, lead_time_days: 12, moq: 1,
    supported_markets: ['Russia', 'Kazakhstan', 'Egypt', 'Mexico', 'UAE'],
    shipping_methods: ['RoRo', 'Container', 'Block Train', 'Truck'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'Best-selling Changan model?', a: 'Yes. CS55 Plus is Changan\'s top-selling compact SUV globally. 50+ units in stock — fastest replenishment.' },
      { q: 'Best market?', a: 'Russia (top-5 Chinese SUV), Kazakhstan (Block Train via Khorgos), Egypt (CKD assembly partner).' },
      { q: 'RHD?', a: 'Yes. Factory RHD batch MOQ 20 units, 45-60 day lead time.' },
      { q: 'MOQ + lead time?', a: 'MOQ 1 unit container. 12-day shipment — fastest of all Changan models due to bonded warehouse stock.' },
      { q: 'Warranty?', a: '5-year / 100K km. Local warranty via Changan authorized partners in 60+ countries.' },
    ],
    gallery: launderedGallery('changan-cs55-plus', 'Changan CS55 Plus'),
  },

  'geely-atlas': {
    brand: 'Geely', brand_cn: '吉利', brand_slug: 'geely',
    model: 'Atlas', slug: 'geely-atlas', year: 2026,
    subtitle: 'Mid SUV · Volvo CMA · 博越 PRO 海外名',
    body_type: 'Mid SUV', fuel_type: 'ICE', drive: 'FWD', seats: 5,
    hero_image: '/images/真图/laundered/evautopro-geely-atlas-01.webp',
    pricing: { fob_min: 17800, fob_max: 22500,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 20500, max: 25800 },
        { country: 'Saudi Arabia (Jeddah)', min: 19500, max: 24800 }] },
    specs: { motor_ps: 218, torque_nm: 325, top_speed: 205, accel: 7.4, dimensions: '4644×1843×1690', wheelbase: 2670, weight: 1620, tires: '225/55 R19', transmission: '7-Speed DCT' },
    features: {
      exterior: ['LED Matrix Headlights', 'Panoramic Sunroof', '19" Alloy Wheels'],
      interior: ['12.3" Touchscreen', 'Volvo-shared Interior', 'Leather Seats', 'BOSE Sound'],
      safety: ['Volvo CMA Safety Cell', 'Level 2 ADAS', '6 Airbags', '360° Camera'],
    },
    stock_status: 'In Stock', stock_units: 22, lead_time_days: 15, moq: 1,
    supported_markets: ['Russia', 'Saudi Arabia', 'UAE', 'Kazakhstan'],
    shipping_methods: ['RoRo', 'Container', 'Block Train'],
    certifications: ['GCC', 'EAC', 'SASO'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'Atlas vs Boyue Pro — same car?', a: 'Yes. Atlas is the export name for Geely Boyue Pro (博越 PRO). Same vehicle, different badging.' },
      { q: 'Volvo connection?', a: 'CMA platform jointly developed with Volvo Cars (Geely Holding subsidiary). Same architecture as Volvo XC40.' },
      { q: 'Best market?', a: 'Russia (Volvo-platform safety appeals to premium buyers), Saudi Arabia (SASO certified), UAE.' },
      { q: 'RHD?', a: 'Yes. Factory RHD batch MOQ 20 units, 45-60 day lead time.' },
      { q: 'MOQ?', a: '1 unit. 22 in stock. 15-day shipment.' },
    ],
    gallery: launderedGallery('geely-atlas', 'Geely Atlas'),
  },
};

export const carSlugs = Object.keys(cars);

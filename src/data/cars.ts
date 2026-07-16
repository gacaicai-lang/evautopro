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
    galleryItem(`/images/vehicles/evautopro-${slug}-appearance-${String(i + 1).padStart(2, '0')}.webp`, `${model} exterior view ${i + 1}`)),
  console: Array.from({ length: counts.console }, (_, i) =>
    galleryItem(`/images/vehicles/evautopro-${slug}-console-${String(i + 1).padStart(2, '0')}.webp`, `${model} cockpit detail ${i + 1}`)),
  space: Array.from({ length: counts.space }, (_, i) =>
    galleryItem(`/images/vehicles/evautopro-${slug}-space-${String(i + 1).padStart(2, '0')}.webp`, `${model} cabin space ${i + 1}`)),
  other: Array.from({ length: counts.other }, (_, i) =>
    galleryItem(`/images/vehicles/evautopro-${slug}-other-${String(i + 1).padStart(2, '0')}.webp`, `${model} detail shot ${i + 1}`)),
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
    hero_image: '/images/vehicles/evautopro-changan-uni-t-01.webp',
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
    model: 'T2 i-DM', slug: 'jetour-t2', year: 2026,
    subtitle: 'Plug-in Hybrid Adventure SUV · 旅行者',
    body_type: 'Adventure SUV', fuel_type: 'PHEV', drive: 'FWD', seats: 5,
    hero_image: '/images/vehicles/evautopro-jetour-t2-01.webp',
    pricing: { fob_min: 22500, fob_max: 28900,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 25800, max: 32500 },
        { country: 'UAE (Jebel Ali)', min: 24200, max: 30800 },
        { country: 'Uzbekistan (Tashkent Block Train)', min: 25500, max: 32000 }] },
    specs: { motor_ps: 224, motor_kw: 165, torque_nm: 390, battery_kwh: 26.7, top_speed: 190, dimensions: '4785×2006×1875', wheelbase: 2800, weight: 2110, tires: '255/55 R20', transmission: '3-Speed DHT' },
    features: {
      exterior: ['Hardcore Style Body + Steel Cage Structure', '64" Panoramic Sunroof', 'Matrix LED Headlights', 'Sony-Branded Audio Badge'],
      interior: ['15.6" Touchscreen, Multi-language (EN/ES/AR/FA/PT)', '50W Wireless Fast Charging', 'Electric 6-Way Ventilated Front Seats', 'Sony 12-Speaker Sound incl. Trunk Subwoofer'],
      safety: ['L2 Driving Assistance (ACC/TJA/ICA)', 'BSD/LDW/LKA/AEB/FCW/RCW All Standard', '540° Panoramic Camera + Front/Rear Radar', 'Wading Sensor System + Hill Descent Control'],
    },
    stock_status: 'In Stock', stock_units: 30, lead_time_days: 15, moq: 1,
    supported_markets: ['Russia', 'Uzbekistan', 'Kazakhstan', 'UAE', 'Saudi Arabia'],
    shipping_methods: ['RoRo', 'Container', 'Block Train', 'Truck'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'How many seats does the Jetour T2 have?', a: '5 seats — official jetourglobal.com spec sheet, not the 7-seater layout some early listings assumed. Cargo area is generous for the class.' },
      { q: 'Is the T2 a true PHEV (plug-in)?', a: 'Yes. 26.7 kWh LFP battery, NEDC pure-electric range 139 km. 1.5T engine + dual front motors (165 kW / 390 N·m combined) extend range for long hauls. CCS2 DC fast charge 30%→80% in ~30 min.' },
      { q: 'Best market for Jetour T2?', a: 'Highest search demand of any Jetour model — 33,100/mo in UAE alone. Strong across Uzbekistan, Kazakhstan and Russia interior; adventure / family / off-road buyers respond to the boxy design.' },
      { q: 'MOQ + lead time?', a: 'MOQ 1 unit container. 15-day lead time from PI signing. 30 units in stock.' },
      { q: 'Is 4WD available on the T2 i-DM?', a: 'The export-spec T2 i-DM is front-wheel drive only. A higher-power 4WD variant exists in the China domestic market — contact us if your market needs it and we can check factory availability.' },
    ],
    gallery: launderedGallery('jetour-t2', 'Jetour T2'),
  },

  'jetour-g700': {
    brand: 'Jetour', brand_cn: '捷途', brand_slug: 'jetour',
    model: 'G700', slug: 'jetour-g700', year: 2026,
    subtitle: 'Luxury Off-Road PHEV SUV · Zongheng/GAIA Series',
    body_type: 'Full-size Off-Road SUV', fuel_type: 'PHEV', drive: '4WD', seats: 6,
    hero_image: '/images/vehicles/evautopro-jetour-g700-01.webp',
    pricing: { fob_min: 46300, fob_max: 58200,
      cif: [
        { country: 'UAE (Jebel Ali)', min: 50000, max: 62900 },
        { country: 'Saudi Arabia (Jeddah)', min: 50900, max: 64000 }] },
    specs: { motor_ps: 904, motor_kw: 665, torque_nm: 1135, battery_kwh: 34.13, range_wltp: 100, top_speed: 180, accel: 4.6, dimensions: '5198×2050×1956', wheelbase: 2870, weight: 3180, transmission: '2-Speed DHT' },
    features: {
      exterior: ['GAIA Off-Road Design · High-Strength Body Structure', 'LED Matrix Headlights', 'Panoramic Sunroof (Comfort/Luxury trim)', '800V Ultra-Fast Charging Platform (170kW DC)'],
      interior: ['15.6" Touchscreen + Qualcomm Snapdragon 8255', 'Multi-Function Seats w/ Table, Leg Rest & Massage', 'Premium Audio (12-18 Speakers by trim)', '35.4" LCD Instrument Panel'],
      safety: ['L2 Autonomous Driving Assistance (Luxury/Flagship trim)', '360° Transparent Chassis Camera View', 'CATL Safety Guardian Battery Monitoring', 'Multi-Domain Controller + up to 3 mmWave Radars'],
    },
    stock_status: 'Made to Order', stock_units: 0, lead_time_days: 30, moq: 1,
    supported_markets: ['UAE', 'Saudi Arabia', 'Qatar'],
    shipping_methods: ['RoRo', 'Container'],
    certifications: ['GCC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'What is the Jetour G700?', a: 'Jetour\'s new flagship luxury off-road PHEV, launched October 2025 under the Zongheng/GAIA series. Combined system output 665 kW / 904 PS / 1135 N·m across a 2.0T engine + dual electric motors.' },
      { q: 'Real-world range?', a: '34.13 kWh LFP battery gives 100 km WLTC pure-electric range; combined range with the engine is rated up to 1000 km. 800V platform DC fast-charges 30%→80% in about 30 minutes.' },
      { q: 'Off-road capability?', a: 'Approach/departure/breakover angles of 35°/28°/21°, 230mm ground clearance, 900mm wading depth — built for serious off-road use, not just styling.' },
      { q: 'Where is G700 currently sold?', a: 'UAE (Sep 2025), Qatar (Nov 2025), and expanding into Latin America (Ecuador, Panama, Mexico in 2026). Early-market allocation — contact us for current lead time.' },
      { q: 'Seating configuration?', a: '5 seats on Comfort trim, 6 seats on Luxury and Flagship trim.' },
    ],
    gallery: {
      appearance: [
        galleryItem('/images/vehicles/evautopro-jetour-g700-appearance-01.webp', 'Jetour G700 studio side profile'),
        galleryItem('/images/vehicles/evautopro-jetour-g700-appearance-02.webp', 'Jetour G700 desert off-road action shot'),
        galleryItem('/images/vehicles/evautopro-jetour-g700-appearance-03.webp', 'Jetour G700 blue paint, off-road dust trail'),
      ],
    },
  },

  'jetour-t1': {
    brand: 'Jetour', brand_cn: '捷途', brand_slug: 'jetour',
    model: 'T1', slug: 'jetour-t1', year: 2026,
    subtitle: 'Compact Crossover SUV · China domestic name "Jetour Freedom"',
    body_type: 'Compact SUV', fuel_type: 'ICE', drive: '4WD', seats: 5,
    hero_image: '/images/vehicles/evautopro-jetour-t1-01.webp',
    pricing: { fob_min: 18700, fob_max: 21200,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 21500, max: 24600 },
        { country: 'Saudi Arabia (Jeddah)', min: 20400, max: 23300 },
        { country: 'UAE (Jebel Ali)', min: 20100, max: 22900 }] },
    specs: { motor_ps: 254, motor_kw: 187, torque_nm: 390, top_speed: 180, dimensions: '4705×1967×1843', wheelbase: 2800, weight: 1811, tires: '235/60 R19', transmission: '8AT' },
    features: {
      exterior: ['Crossover Design Combining Urban & Off-Road Styles', 'LED Matrix Headlights', '540° Panoramic Parking Display', 'Panoramic Sunroof (Lux trim)'],
      interior: ['15.6" Touchscreen (Lux) / 12.8" (Comfort) · Snapdragon 8155', 'TOUR OS 2.0 System', '64-Color Ambient Lighting (Lux trim)', 'Multi-language Voice incl. Russian/English'],
      safety: ['L2 Driver Assistance incl. LKA/AEB/FCW (2.0T Lux trim)', 'Electronic Limited-Slip Differential (2.0T trim)', '540° Panoramic Camera System', 'Hill Descent + Hill Hold Control'],
    },
    stock_status: 'Made to Order', stock_units: 0, lead_time_days: 30, moq: 1,
    supported_markets: ['Russia', 'Saudi Arabia', 'UAE', 'South Africa'],
    shipping_methods: ['RoRo', 'Container', 'Block Train'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'What is the Jetour T1?', a: 'A compact crossover SUV, China domestic name "Jetour Freedom" (捷途自由者). Real-time 4WD available on the 2.0T Lux trim — a genuine strength in this segment.' },
      { q: 'Engine options?', a: 'Entry 1.5T (135 kW, 7DCT, FWD) or flagship 2.0T (187 kW / 390 N·m, 8AT, real-time 4WD).' },
      { q: 'Best export market?', a: 'Real search demand of 9,900/mo in UAE and 3,600/mo in Saudi Arabia. Official spec sheet lists Russian as a supported infotainment language, signaling CIS as a priority market.' },
      { q: 'MOQ and lead time?', a: 'Newly catalogued model — made to order, MOQ 1 unit, ~30-day lead time while we build first-batch stock.' },
      { q: 'Where is T1 currently on sale?', a: 'UAE (Dec 2024), Saudi Arabia (global debut Feb 2025), South Africa (Oct 2025), Philippines (Oct 2025), Indonesia (Jun 2026).' },
    ],
    gallery: {
      appearance: [
        galleryItem('/images/vehicles/evautopro-jetour-t1-appearance-01.webp', 'Jetour T1 studio side profile, green'),
        galleryItem('/images/vehicles/evautopro-jetour-t1-appearance-02.webp', 'Jetour T1 desert off-road action shot'),
      ],
    },
  },

  'jetour-t1-idm': {
    brand: 'Jetour', brand_cn: '捷途', brand_slug: 'jetour',
    model: 'T1 i-DM', slug: 'jetour-t1-idm', year: 2026,
    subtitle: 'Plug-in Hybrid Compact SUV · China domestic name "Shanhai T1" (山海T1)',
    body_type: 'Compact SUV', fuel_type: 'PHEV', drive: 'FWD', seats: 5,
    hero_image: '/images/vehicles/evautopro-jetour-t1-idm-01.webp',
    pricing: { fob_min: 21700, fob_max: 24500,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 24900, max: 28200 },
        { country: 'Saudi Arabia (Jeddah)', min: 23700, max: 26800 }] },
    specs: { motor_kw: 150, torque_nm: 310, battery_kwh: 26.7, dimensions: '4705×1967×1843', wheelbase: 2800, tires: '235/60 R19', transmission: '1-Speed DHT' },
    features: {
      exterior: ['Storm-eye LED Headlights (Red Dot Design Award)', 'Horizon Light Bar', 'New Rugged Aesthetic Body Design', 'Dual-layer Sunproof Glass'],
      interior: ['15.6" Touchscreen + 10.25" Digital Instrument', 'Snapdragon 8155 Chip', 'TOUR OS 2.0 System', 'Cloud-Like Ventilated Seats (Premium trim)'],
      safety: ['L2 Assisted Driving incl. LKA/LDW/AEB/FCW (both trims)', '540° Panoramic Camera + Parking Radar', 'Battery Side Guards + Aluminium Underbody Guard', 'Full Speed Adaptive Cruise Control'],
    },
    stock_status: 'Made to Order', stock_units: 0, lead_time_days: 30, moq: 1,
    supported_markets: ['Russia', 'Saudi Arabia', 'UAE'],
    shipping_methods: ['RoRo', 'Container', 'Block Train'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'Is T1 i-DM the same as "ShanHai T1"?', a: 'Yes — Shanhai T1 (山海T1) is the China domestic name for the same vehicle Jetour exports as "T1 i-DM." Same car, different market naming.' },
      { q: 'What powers the T1 i-DM?', a: '1.5T dedicated hybrid engine (99 kW / 200 N·m) + 150 kW / 310 N·m electric motor, 26.7 kWh LFP battery, single-speed DHT. Official spec sheet does not publish a combined WLTC/CLTC range figure — ask us for the latest confirmed number.' },
      { q: 'Is 4WD available?', a: 'The export version is front-wheel drive only. A rear-motor AWD trim exists in the China domestic lineup but is not currently listed on the export site — we can check factory availability on request.' },
      { q: 'MOQ and lead time?', a: 'Newly catalogued model — made to order, MOQ 1 unit, ~30-day lead time while we build first-batch stock.' },
      { q: 'Best export market?', a: 'Ships alongside T1 to Russia/CIS, Saudi Arabia, UAE and South Africa — same target markets, PHEV option for buyers wanting lower running costs.' },
    ],
    gallery: {
      appearance: [
        galleryItem('/images/vehicles/evautopro-jetour-t1-idm-appearance-01.webp', 'Jetour T1 i-DM studio side profile, gold'),
        galleryItem('/images/vehicles/evautopro-jetour-t1-idm-appearance-02.webp', 'Jetour T1 i-DM on coastal bridge road'),
      ],
    },
  },

  'geely-coolray': {
    brand: 'Geely', brand_cn: '吉利', brand_slug: 'geely',
    model: 'Coolray', slug: 'geely-coolray', year: 2026,
    subtitle: 'Compact SUV · Volvo CMA Platform · 缤越海外名',
    body_type: 'Compact SUV', fuel_type: 'ICE', drive: 'FWD', seats: 5,
    hero_image: '/images/vehicles/evautopro-geely-coolray-01.webp',
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
    hero_image: '/images/vehicles/evautopro-deepal-s07-01.webp',
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
    hero_image: '/images/vehicles/evautopro-deepal-s05-01.webp',
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
    hero_image: '/images/vehicles/evautopro-deepal-s09-01.webp',
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
    hero_image: '/images/vehicles/evautopro-changan-cs55-plus-01.webp',
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

  'jetour-dashing': {
    brand: 'Jetour', brand_cn: '捷途', brand_slug: 'jetour',
    model: 'Dashing', slug: 'jetour-dashing', year: 2026,
    subtitle: 'Compact SUV · Vanguard Technology',
    body_type: 'Compact SUV', fuel_type: 'ICE', drive: 'FWD', seats: 5,
    hero_image: '/images/vehicles/evautopro-jetour-dashing-01.webp',
    pricing: { fob_min: 13000, fob_max: 16800,
      cif: [
        { country: 'Saudi Arabia (Jeddah)', min: 14300, max: 18500 },
        { country: 'UAE (Jebel Ali)', min: 14000, max: 18100 },
        { country: 'Russia (St. Petersburg)', min: 15200, max: 19700 }] },
    specs: { motor_ps: 197, motor_kw: 145, torque_nm: 290, top_speed: 200, dimensions: '4600×1900×1685', wheelbase: 2720, weight: 1530, tires: '235/55 R19', transmission: '7-Speed DCT' },
    features: {
      exterior: ['540° Panoramic Parking Display', 'LED Matrix Headlights', 'Panoramic Sunroof', '19"-20" Alloy Wheels'],
      interior: ['15.6" Touchscreen (Snapdragon Cockpit Chip)', '8" Head-Up Display', 'Sony Surround Hi-Fi 8-Speaker System', '40W Wireless Fast Charging'],
      safety: ['L2.5 Assisted Driving System', '540° Panoramic Parking + Transparent Chassis View', 'Automatic Emergency Braking (AEB)', 'Rear Cross Traffic Alert'],
    },
    stock_status: 'Made to Order', stock_units: 0, lead_time_days: 30, moq: 1,
    supported_markets: ['Saudi Arabia', 'UAE', 'Russia'],
    shipping_methods: ['RoRo', 'Container'],
    certifications: ['GCC', 'EAC', 'SASO'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'What is the Jetour Dashing positioned as?', a: 'A youth-focused compact SUV — Jetour\'s official "Vanguard Technology" line. 15.6" touchscreen, L2.5 assisted driving, and a dedicated Youth trim aimed at first-time SUV buyers.' },
      { q: 'Engine options for the Dashing?', a: 'Entry 1.5T (115kW/156PS) with 6-speed manual or DCT, or flagship 1.6TGDI (145kW/197PS/290N·m) with 7-speed DCT. A plug-in i-DM hybrid variant also exists in China but is not yet in our export catalog — ask us if you need PHEV.' },
      { q: 'Best export market for Dashing?', a: 'Jetour closed 2024 with 568,387 units sold globally, +80.3% YoY, and a 12% SUV market share in Saudi Arabia — Dashing\'s youth-trim positioning fits that Gulf growth directly.' },
      { q: 'MOQ and lead time?', a: 'This is a newly catalogued model — made to order, MOQ 1 unit, ~30-day lead time from PI signing while we build first-batch stock. Contact us for current availability.' },
      { q: 'Certifications available?', a: 'GCC and EAC compliance available; SASO certification path for Saudi Arabia on request.' },
    ],
    gallery: {
      appearance: [
        galleryItem('/images/vehicles/evautopro-jetour-dashing-appearance-01.webp', 'Jetour Dashing studio side profile'),
        galleryItem('/images/vehicles/evautopro-jetour-dashing-appearance-02.webp', 'Jetour Dashing front 3/4 with DASHING badge, mountain backdrop'),
      ],
      console: [
        galleryItem('/images/vehicles/evautopro-jetour-dashing-console-01.webp', 'Jetour Dashing infotainment touchscreen'),
        galleryItem('/images/vehicles/evautopro-jetour-dashing-console-02.webp', 'Jetour Dashing steering wheel detail'),
        galleryItem('/images/vehicles/evautopro-jetour-dashing-console-03.webp', 'Jetour Dashing center console and shifter'),
      ],
      space: [
        galleryItem('/images/vehicles/evautopro-jetour-dashing-space-01.webp', 'Jetour Dashing open cargo area with camping gear'),
      ],
      other: [
        galleryItem('/images/vehicles/evautopro-jetour-dashing-other-01.webp', 'Jetour Dashing side mirror detail'),
        galleryItem('/images/vehicles/evautopro-jetour-dashing-other-02.webp', 'Jetour Dashing taillight detail'),
        galleryItem('/images/vehicles/evautopro-jetour-dashing-other-03.webp', 'Jetour Dashing center console detail'),
      ],
    },
  },

  'jetour-x70-plus': {
    brand: 'Jetour', brand_cn: '捷途', brand_slug: 'jetour',
    model: 'X70 Plus', slug: 'jetour-x70-plus', year: 2026,
    subtitle: 'Big Family SUV · 7-Seater',
    body_type: 'Mid-size SUV', fuel_type: 'ICE', drive: 'FWD', seats: 7,
    hero_image: '/images/vehicles/evautopro-jetour-x70-plus-01.webp',
    pricing: { fob_min: 11000, fob_max: 18300,
      cif: [
        { country: 'Russia (St. Petersburg)', min: 12900, max: 21400 },
        { country: 'Egypt (Port Said)', min: 13300, max: 22100 },
        { country: 'UAE (Jebel Ali)', min: 11900, max: 19800 }] },
    specs: { motor_ps: 197, motor_kw: 145, torque_nm: 290, top_speed: 185, dimensions: '4749×1900×1720', wheelbase: 2720, weight: 1540, tires: '235/55 R19', transmission: '7-Speed DCT' },
    features: {
      exterior: ['LED Matrix Taillights (Meteor-style graphics)', 'Quad Exhaust Tips', '19"-20" Alloy Wheels', '62" Ultra-Wide Panoramic Sunroof'],
      interior: ['Dual Digital Cockpit Screens (10.25"-12.3", trim-dependent)', '39 Storage Compartments', 'Suspended Floating Center Console', '50W Wireless Fast Charging'],
      safety: ['L2.5 Assisted Driving', '360° Panoramic Camera', '75% High-Strength Steel Body Cage', '6 Airbags + Bosch 9.3 ESP'],
    },
    stock_status: 'Made to Order', stock_units: 0, lead_time_days: 30, moq: 1,
    supported_markets: ['Russia', 'Egypt', 'UAE', 'Kazakhstan'],
    shipping_methods: ['RoRo', 'Container', 'Block Train'],
    certifications: ['GCC', 'EAC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'How many seats does the X70 Plus have?', a: 'Configurable 5, 6, or 7-seat cabin layouts from the factory — tell us your target market\'s passenger-tax rules and we\'ll spec accordingly.' },
      { q: 'Engine options?', a: 'Entry 1.5T (115kW/156PS, 6-speed manual or wet DCT) or flagship 1.6TGDI (145kW/197PS/290N·m, 7-speed DCT). WLTC combined fuel consumption ~7.6-7.8 L/100km.' },
      { q: 'Best market for X70 Plus?', a: 'The X70 series (including X70 Plus) has sold 800,000+ units globally as of 2025 — strong demand in Russia and other family-SUV markets, plus government/fleet interest in North Africa.' },
      { q: 'MOQ and lead time?', a: 'This is a newly catalogued model — made to order, MOQ 1 unit, ~30-day lead time from PI signing while we build first-batch stock. Contact us for current availability.' },
      { q: 'Safety equipment?', a: '75% high-strength steel body cage, 6 airbags, Bosch 9.3 ESP, 360° panoramic camera, hill descent control. Independent crash-test ratings are not yet published for this model — ask us for the latest data.' },
    ],
    gallery: {
      appearance: [
        galleryItem('/images/vehicles/evautopro-jetour-x70-plus-appearance-01.webp', 'Jetour X70 Plus studio side profile'),
        galleryItem('/images/vehicles/evautopro-jetour-x70-plus-appearance-02.webp', 'Jetour X70 Plus studio side profile, alternate angle'),
        galleryItem('/images/vehicles/evautopro-jetour-x70-plus-appearance-03.webp', 'Jetour X70 Plus studio front 3/4 with X70 PLUS badge'),
      ],
      console: [
        galleryItem('/images/vehicles/evautopro-jetour-x70-plus-console-01.webp', 'Jetour X70 Plus cockpit with red leather interior'),
      ],
      space: [
        galleryItem('/images/vehicles/evautopro-jetour-x70-plus-space-01.webp', 'Jetour X70 Plus rear cabin with seats folded'),
      ],
      other: [
        galleryItem('/images/vehicles/evautopro-jetour-x70-plus-other-01.webp', 'Jetour X70 Plus exhaust and rear bumper detail'),
        galleryItem('/images/vehicles/evautopro-jetour-x70-plus-other-02.webp', 'Jetour X70 Plus wheel and body detail'),
        galleryItem('/images/vehicles/evautopro-jetour-x70-plus-other-03.webp', 'Jetour X70 Plus LED headlight and grille detail'),
      ],
    },
  },

  'geely-atlas': {
    brand: 'Geely', brand_cn: '吉利', brand_slug: 'geely',
    model: 'Atlas', slug: 'geely-atlas', year: 2026,
    subtitle: 'Mid SUV · Volvo CMA · 博越 PRO 海外名',
    body_type: 'Mid SUV', fuel_type: 'ICE', drive: 'FWD', seats: 5,
    hero_image: '/images/vehicles/evautopro-geely-atlas-01.webp',
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

  'nevo-q05': {
    brand: 'Changan NEVO', brand_cn: '长安启源', brand_slug: 'qiyuan',
    model: 'NEVO Q05', slug: 'nevo-q05', year: 2026,
    subtitle: 'Compact Electric SUV · China domestic name "Qiyuan Q05"',
    body_type: 'Compact SUV', fuel_type: 'BEV', drive: 'FWD', seats: 5,
    hero_image: '/images/vehicles/evautopro-nevo-q05-01.webp',
    pricing: { fob_min: 18500, fob_max: 21800,
      cif: [
        { country: 'UAE (Jebel Ali)', min: 20000, max: 23600 },
        { country: 'Kazakhstan (Almaty)', min: 21500, max: 25500 }] },
    specs: { motor_ps: 163, motor_kw: 120, torque_nm: 190, battery_kwh: 51.9, range_wltp: 462, top_speed: 160, accel: 8.2, dimensions: '4435×1855×1600', wheelbase: 2735, tires: '225/60 R17', transmission: 'Single-Speed Reduction Gear' },
    features: {
      exterior: ['LED Flowing Taillights (Ultra trim)', 'Panoramic Glass Roof w/ Power Sunshade (Ultra trim)', 'Power Tailgate w/ Anti-pinch (Ultra trim)', '17"-18" Alloy Wheels'],
      interior: ['14.6" Touchscreen + 10.17" Digital Instrument', 'Microfiber Leather Seats', '256-Color Ambient Lighting (Ultra trim)', '50W Wireless Fast Charging (Ultra trim)'],
      safety: ['3D Transparent Chassis Panoramic View', 'Integrated Adaptive Cruise + Lane Centering', 'Front + Side Airbags (Curtain Airbags on Ultra)', 'Tire Pressure Monitoring + ISOFIX'],
    },
    stock_status: 'Made to Order', stock_units: 0, lead_time_days: 30, moq: 1,
    supported_markets: ['UAE', 'Kazakhstan'],
    shipping_methods: ['RoRo', 'Container'],
    certifications: ['GCC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'What is NEVO? Is this the same as "Qiyuan"?', a: 'Yes — Changan Qiyuan (长安启源) is the China domestic brand name; NEVO is the official export-market brand name used on Changan\'s global site and in Thailand, where this exact Q05 launched in May 2026.' },
      { q: 'Is the Q05 a genuine BEV?', a: 'Yes — 51.9 kWh LFP battery (CATL), 462 km NEDC range, single front motor (120 kW / 163 PS). This is the current-generation electric platform, not the earlier plug-in hybrid Q05 sold in some markets — confirm generation with us before ordering, the two are not interchangeable.' },
      { q: 'Where is this confirmed on official sale today?', a: 'Thailand (launched May 2026, CKD-assembled) and Uzbekistan. Announced for future launch in South Africa (2027), Indonesia/Latin America/Europe (H2 2026) — not yet live in those markets.' },
      { q: 'Charging?', a: 'AC up to 6.6 kW, DC fast charging up to 162 kW — 30%→80% in about 15 minutes. Ultra trim supports V2L (vehicle-to-load, 6.6 kW discharge).' },
      { q: 'MOQ and lead time?', a: 'Newly catalogued for our export program — made to order, MOQ 1 unit, ~30-day lead time. Contact us for current factory allocation.' },
    ],
    gallery: {
      appearance: [
        galleryItem('/images/vehicles/evautopro-nevo-q05-01.webp', 'NEVO Q05 studio side profile, silver'),
        galleryItem('/images/vehicles/evautopro-nevo-q05-appearance-01.webp', 'NEVO Q05 studio side profile, dark green'),
      ],
    },
  },

  'nevo-a07': {
    brand: 'Changan NEVO', brand_cn: '长安启源', brand_slug: 'qiyuan',
    model: 'NEVO A07', slug: 'nevo-a07', year: 2026,
    subtitle: 'Mid-Large Sedan · BEV or EREV · China domestic name "Qiyuan A07"',
    body_type: 'Mid-Large Sedan', fuel_type: 'EREV', drive: 'RWD', seats: 5,
    hero_image: '/images/vehicles/evautopro-nevo-a07-01.webp',
    pricing: { fob_min: 19640, fob_max: 22450,
      cif: [
        { country: 'UAE (Jebel Ali)', min: 21200, max: 24300 },
        { country: 'Saudi Arabia (Jeddah)', min: 21500, max: 24700 }] },
    specs: { motor_ps: 268, motor_kw: 200, battery_kwh: 35.1, range_cltc: 310, top_speed: 172, dimensions: '4905×1910×1480', wheelbase: 2900, weight: 1805, tires: '19"' },
    features: {
      exterior: ['Frameless Flush Door Handles', 'Hidden Door Handles', 'Large Panoramic Glass Roof', 'Through-type LED Taillights'],
      interior: ['AR-HUD Augmented Reality Head-Up Display', '15.4" Touchscreen (Snapdragon 8155)', 'D-shaped Steering Wheel', 'Dual Wireless Charging Pads'],
      safety: ['L2 Assisted Driving + Full-Speed Adaptive Cruise', '540° Panoramic Camera + Transparent Chassis', 'Anti-pinch Power Tailgate', 'Multi-airbag Protection'],
    },
    stock_status: 'Made to Order', stock_units: 0, lead_time_days: 30, moq: 1,
    supported_markets: ['UAE', 'Saudi Arabia', 'Russia'],
    shipping_methods: ['RoRo', 'Container'],
    certifications: ['GCC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'BEV or EREV — which version is this?', a: 'NEVO A07 is available in both: a pure-electric version (190kW/255PS motor, 79kWh LFP battery, 730km CLTC) and an extended-range EREV version (200kW/268PS motor + 1.5L range-extender engine, 35.1kWh battery, 310km pure-electric / 1,570km combined). Tell us which powertrain your market needs.' },
      { q: 'Is this the same brand as NEVO Q05?', a: 'Yes — A07 was Changan Qiyuan\'s first model (debuted 2023), exported under the NEVO brand name like the rest of the lineup.' },
      { q: 'Real export track record?', a: 'A trading-platform claim of "50+ export countries" could not be officially confirmed and should be treated as marketing, not verified fact. What is confirmed: real delivery records to Russia, Kyrgyzstan and Saudi Arabia via established export channels.' },
      { q: 'FOB pricing accuracy?', a: 'Multiple trade platforms quote different FOB figures for this model ($14,000-$23,000 range depending on source and trim) — confirm current pricing with us before ordering rather than relying on any single listed number.' },
      { q: 'MOQ and lead time?', a: 'Newly catalogued for our export program — made to order, MOQ 1 unit, ~30-day lead time. Contact us for current factory allocation.' },
    ],
    gallery: {
      appearance: [
        galleryItem('/images/vehicles/evautopro-nevo-a07-01.webp', 'NEVO A07 real-world exterior, front 3/4'),
      ],
      console: [
        galleryItem('/images/vehicles/evautopro-nevo-a07-console-01.webp', 'NEVO A07 cockpit with tablet-style touchscreen'),
      ],
    },
  },

  // NEVO Q07: research complete (specs/pricing/FAQs all sourced — see
  // qiyuan-真实阵容研究-2026-07-16.md §6.3), but no real photo could be
  // verified this session (browser tool couldn't reach candidate sources).
  // Kept as a ready:false quote-form entry in brands/qiyuan.astro until a
  // real image is sourced — do not re-add here with a substitute photo.

  'volkswagen-magotan': {
    brand: 'Volkswagen', brand_cn: '大众', brand_slug: 'volkswagen',
    model: 'Magotan', slug: 'volkswagen-magotan', year: 2025,
    subtitle: 'Mid-size Sedan · FAW-Volkswagen · China\'s First Official VW Export Model · 迈腾',
    body_type: 'Mid-size Sedan', fuel_type: 'ICE', drive: 'FWD', seats: 5,
    hero_image: '/images/vehicles/evautopro-volkswagen-magotan-01.webp',
    pricing: { fob_min: 21420, fob_max: 28736,
      cif: [
        { country: 'UAE (Jebel Ali)', min: 23200, max: 31100 },
        { country: 'Saudi Arabia (Jeddah)', min: 23600, max: 31600 }] },
    specs: { motor_ps: 150, motor_kw: 110, torque_nm: 250, top_speed: 210, accel: 9.4, dimensions: '4866×1832×1479', wheelbase: 2871, weight: 1452, tires: '215/55 R17', transmission: '7-Speed DCT' },
    features: {
      exterior: ['Polygonal Grille w/ Chrome Strips + Blackened LED Headlights', 'Full-width Smoked LED Taillights w/ Chrome Trim', '18" Semi-closed Alloy Wheels (Luxury trim)', 'Panoramic Sunroof'],
      interior: ['Triple-screen Cockpit: 10.25" Digital Instrument + 15" 2K Floating Display + 11.6" Co-pilot Screen (top trim)', 'Qualcomm Snapdragon 8155, 5G + AR Real-scene Navigation', 'Head-Up Display + Electronic Gear Shifter', '12-Way Power-Adjustable Microfiber Leather Seats'],
      safety: ['DJI-developed L2+ Assisted Driving (Adaptive Cruise, Lane Keep, Lane Change Assist)', 'Front + Rear Parking Radar with Reverse Camera', 'Auto Hold Hill-start Assist', 'Electronic Parking Brake + Ventilated Front Discs'],
    },
    stock_status: 'Made to Order', stock_units: 0, lead_time_days: 30, moq: 1,
    supported_markets: ['UAE', 'Saudi Arabia', 'Kazakhstan'],
    shipping_methods: ['RoRo', 'Container'],
    certifications: ['GCC'], payment_terms: ['T/T 30+70', 'L/C at sight'],
    faqs: [
      { q: 'Is the Magotan a genuine official Volkswagen export model?', a: 'Yes — it\'s the flagship model of FAW-Volkswagen\'s first-ever official export program. 554 Magotan + Sagitar units departed Shanghai Port in September 2025 for the Middle East, with Volkswagen Brand Middle East\'s own General Manager receiving the first unit at the handover ceremony.' },
      { q: 'Is "Magotan" the same car as the Kazakhstan-market "Passat"?', a: 'Yes for the Kazakhstan case specifically — FAW-Volkswagen\'s Magotan will be rebadged "Passat" for the Kazakhstan market (certified July 2026). This is different from SAIC-Volkswagen\'s own separate "Passat Pro" model sold in China and Uzbekistan — same name, two different cars from two different joint ventures.' },
      { q: 'What powertrain options are available?', a: '1.4T (150 hp / 110 kW / 250 N·m, dry 7-speed DCT) on Comfort/Luxury trims, or 2.0T (186 hp / 137 kW / 320 N·m, wet 7-speed DCT) on the top Luxury trim.' },
      { q: 'Which markets can this ship to today?', a: 'Middle East (UAE/Saudi Arabia) has been live since November 2025. Kazakhstan just completed certification (July 2026) — sales expected H2 2026 via distributor Orbis Auto/Mercur Autos.' },
      { q: 'MOQ and lead time?', a: 'Made to order — this is a newly catalogued model for our export program. MOQ 1 unit, ~30-day lead time. Contact us for current factory allocation.' },
    ],
    gallery: {
      appearance: [
        galleryItem('/images/vehicles/evautopro-volkswagen-magotan-01.webp', 'Volkswagen Magotan studio 3/4 view, black'),
      ],
    },
  },

  // Volkswagen Sagitar and Tiguan L Pro: research complete (specs/pricing/
  // FAQs sourced — see volkswagen-真实阵容研究-2026-07-16.md §5, §6) but
  // no real photo verified this session (image-source fetches timed out
  // repeatedly). Kept as ready:false quote-form entries in
  // brands/volkswagen.astro pending real images — do not add here with a
  // substitute photo.
};

export const carSlugs = Object.keys(cars);

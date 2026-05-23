#!/usr/bin/env python3
"""统一风格图片批量升级 - faq-style brand-red + emoji + 场景 + pastel 背景
Overwrites existing SVG placeholders. File names unchanged → .astro code untouched.
"""
from pathlib import Path

BASE = Path('/Users/linlin/sites/evautopro.com/public/images')

BRAND = '#e53e2f'
BRAND_700 = '#b22e21'
INK_50 = '#fafafa'
INK_500 = '#71717a'
INK_900 = '#18181b'

def make_themed(filename, ratio, main_icon, scene_icon, title, subtitle, bg_from, bg_to, label_tag=None):
    """统一主题 SVG: brand-red 圆 + 主图标 + 场景装饰 + 文字"""
    w, h = ratio
    circle_r = min(w, h) * 0.22
    circle_cx = w * 0.28
    circle_cy = h * 0.50
    main_icon_size = circle_r * 1.4
    scene_icon_size = min(w, h) * 0.45

    title_x = w * 0.55
    title_y = h * 0.42
    subtitle_y = h * 0.55

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{bg_from}"/>
      <stop offset="100%" stop-color="{bg_to}"/>
    </linearGradient>
    <linearGradient id="brand" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{BRAND}"/>
      <stop offset="100%" stop-color="{BRAND_700}"/>
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#bg)"/>
  <!-- Decorative scene icon (large, faded, right-bottom) -->
  <text x="{w * 0.92}" y="{h * 0.92}" font-family="-apple-system, sans-serif" font-size="{scene_icon_size}" opacity="0.10" text-anchor="end">{scene_icon}</text>
  <!-- Main brand circle -->
  <circle cx="{circle_cx}" cy="{circle_cy}" r="{circle_r}" fill="url(#brand)"/>
  <text x="{circle_cx}" y="{circle_cy + circle_r*0.35}" font-family="-apple-system, sans-serif" font-size="{main_icon_size}" fill="white" text-anchor="middle">{main_icon}</text>
  <!-- Title -->
  <text x="{title_x}" y="{title_y}" font-family="-apple-system, sans-serif" font-size="{min(w, h)*0.07}" font-weight="800" fill="{INK_900}">{title}</text>
  <text x="{title_x}" y="{subtitle_y}" font-family="-apple-system, sans-serif" font-size="{min(w, h)*0.035}" fill="{INK_500}">{subtitle}</text>
  <!-- Top-left label -->'''
    if label_tag:
        svg += f'''
  <rect x="{w*0.04}" y="{h*0.06}" width="{w*0.13}" height="{h*0.07}" rx="{h*0.035}" fill="{BRAND}"/>
  <text x="{w*0.105}" y="{h*0.10}" font-family="-apple-system, sans-serif" font-size="{min(w,h)*0.03}" font-weight="700" fill="white" text-anchor="middle">{label_tag}</text>'''
    svg += f'''
  <!-- Brand watermark bottom -->
  <text x="{w*0.04}" y="{h*0.94}" font-family="-apple-system, sans-serif" font-size="{min(w,h)*0.025}" font-weight="600" fill="{INK_900}" opacity="0.45">EV AUTO PRO</text>
</svg>'''
    return svg

# ===== Markets 8 国 (overwrite market-{code}.svg) =====
markets = [
    ('market-ru.svg', '🇷🇺', '🏛', 'Russia', 'EAC · Block Train · Russian Ops', '#fee2e2', '#fecaca', 'RU'),
    ('market-ae.svg', '🇦🇪', '🌆', 'UAE', 'GCC · Jebel Ali RoRo', '#fef3c7', '#fde68a', 'AE'),
    ('market-kz.svg', '🇰🇿', '🏔', 'Kazakhstan', 'EAC · Khorgos Direct', '#dbeafe', '#bfdbfe', 'KZ'),
    ('market-uz.svg', '🇺🇿', '🕌', 'Uzbekistan', "O'zStandart · Tashkent Rail", '#d1fae5', '#a7f3d0', 'UZ'),
    ('market-sa.svg', '🇸🇦', '🕌', 'Saudi Arabia', 'SASO + GCC · Jeddah RoRo', '#fef3c7', '#fde047', 'SA'),
    ('market-eg.svg', '🇪🇬', '🐪', 'Egypt', 'EOS · Port Said · CKD Hub', '#fce7f3', '#fbcfe8', 'EG'),
    ('market-br.svg', '🇧🇷', '🌴', 'Brazil', 'INMETRO · Santos · LATAM', '#d1fae5', '#86efac', 'BR'),
    ('market-mx.svg', '🇲🇽', '🌵', 'Mexico', 'NOM · Manzanillo · USMCA', '#fee2e2', '#fca5a5', 'MX'),
]
for fname, icon, scene, title, sub, bf, bt, tag in markets:
    (BASE / fname).write_text(make_themed(fname, (800, 600), icon, scene, title, sub, bf, bt, tag))
    print(f"✓ {fname}")

# ===== Use-Case 5 collections =====
usecases = [
    ('usecase-electric-suv.svg', '⚡', '🚙', 'Electric SUVs', 'BEV / EREV / PHEV', '#e0f2fe', '#bae6fd', 'EV'),
    ('usecase-phev-hybrid.svg', '🔋', '🚗', 'PHEV / Hybrid', 'Plug-in + Range Extender', '#fef3c7', '#fde68a', 'PHEV'),
    ('usecase-pickup.svg', '🛻', '🏔', 'Pickup Trucks', 'Workhorse for Africa / Asia', '#fee2e2', '#fecaca', 'TRUCK'),
    ('usecase-rhd.svg', '↔', '🇬🇧', 'Right-Hand Drive', 'UK · SA · PK · ID · KE', '#dbeafe', '#93c5fd', 'RHD'),
    ('usecase-under-15k.svg', '💰', '🚘', 'Under $15,000', 'Entry-Price Affordable', '#d1fae5', '#86efac', '$15K'),
]
for fname, icon, scene, title, sub, bf, bt, tag in usecases:
    (BASE / fname).write_text(make_themed(fname, (800, 600), icon, scene, title, sub, bf, bt, tag))
    print(f"✓ {fname}")

# ===== Hero port loading (16:9 landscape) =====
(BASE / 'hero-port-loading.svg').write_text(make_themed(
    'hero-port-loading.svg', (1600, 900),
    '🚢', '⚓', 'Shanghai Port', 'NEV Export Loading Bay · 200+ Units in Stock',
    '#fef2f0', '#fecaca', 'P0'
))
print("✓ hero-port-loading.svg")

# ===== About team =====
(BASE / 'about-team.svg').write_text(make_themed(
    'about-team.svg', (1200, 900),
    '👥', '🏢', 'Founder-Led Team', '15+ Years China Export · Guangzhou HQ',
    '#dbeafe', '#bfdbfe', 'TEAM'
))
print("✓ about-team.svg")

# ===== Tool compare mockup =====
(BASE / 'tool-compare-mockup.svg').write_text(make_themed(
    'tool-compare-mockup.svg', (1200, 900),
    '⚖', '📊', 'Compare & Customize', 'Side-by-Side Model Comparison',
    '#e0e7ff', '#c7d2fe', 'TOOL'
))
print("✓ tool-compare-mockup.svg")

# ===== Catalogue cover (4:5 portrait) =====
(BASE / 'catalogue-cover.svg').write_text(make_themed(
    'catalogue-cover.svg', (800, 1000),
    '📕', '📋', '50-Page Catalogue', 'All 50+ Models · FOB Pricing · Specs',
    '#fee2e2', '#fecaca', 'PDF'
))
print("✓ catalogue-cover.svg")

# ===== Cars without real images (use car silhouette emoji + brand bg) =====
cars_no_real = [
    ('car-changan-uni-t.svg', '🚗', 'Changan UNI-T', 'Sport Coupé SUV · 1.5T ICE', '#fee2e2'),
    ('car-changan-uni-k.svg', '🚙', 'Changan UNI-K', 'Flagship Mid SUV · PHEV', '#fee2e2'),
    ('car-changan-uni-z.svg', '🚗', 'Changan UNI-Z', 'Coupé SUV', '#fee2e2'),
    ('car-changan-cs55-plus.svg', '🚙', 'Changan CS55 Plus', 'Best-Seller Compact SUV', '#fee2e2'),
    ('car-changan-cs75-plus.svg', '🚙', 'Changan CS75 Plus', 'Mid SUV', '#fee2e2'),
    ('car-changan-cs35-plus.svg', '🚗', 'Changan CS35 Plus', 'Entry SUV', '#fee2e2'),
    ('car-changan-x5-plus.svg', '🚗', 'Changan X5 Plus', 'Sedan', '#fee2e2'),
    ('car-changan-eado.svg', '🚗', 'Changan Eado', 'Compact Sedan', '#fee2e2'),
    ('car-deepal-s07.svg', '⚡', 'Deepal S07', 'EREV Mid SUV · 200km Electric', '#dbeafe'),
    ('car-deepal-s05.svg', '⚡', 'Deepal S05', 'BEV Compact SUV · 510 km', '#dbeafe'),
    ('car-deepal-s09.svg', '⚡', 'Deepal S09', 'Flagship 6-Seater EREV', '#dbeafe'),
    ('car-volkswagen-id-3.svg', '⚡', 'VW ID.3', 'BEV Hatchback · MEB Platform', '#fef3c7'),
    ('car-volkswagen-id-7.svg', '⚡', 'VW ID.7', 'BEV Premium Sedan', '#fef3c7'),
]
for fname, icon, title, sub, bf in cars_no_real:
    bt = '#fecaca' if bf == '#fee2e2' else '#bfdbfe' if bf == '#dbeafe' else '#fde68a'
    (BASE / fname).write_text(make_themed(fname, (800, 500), icon, '🚘', title, sub, bf, bt, None))
    print(f"✓ {fname}")

print(f"\n✅ All themed images regenerated under {BASE}/")

#!/usr/bin/env python3
"""Generate SVG placeholders for all 60 image slots per image-guide.md
Color palette: brand red (#e53e2f) + ink greys
Output: public/images/{filename}.svg
After real images arrive, just `mv {file}.svg {file}.jpg`
"""
import os, re

BASE = '/Users/linlin/sites/evautopro.com/public/images'
os.makedirs(BASE, exist_ok=True)

# Color palette (matches Tailwind tokens)
BRAND = '#e53e2f'
BRAND_BG = '#fef2f0'
INK_50 = '#fafafa'
INK_100 = '#f4f4f5'
INK_200 = '#e4e4e7'
INK_300 = '#d4d4d8'
INK_400 = '#a1a1aa'
INK_500 = '#71717a'
INK_900 = '#18181b'

PRIORITY_COLORS = {
    'P0': BRAND,
    'P1': '#f59e0b',
    'P2': INK_400,
    'P3': INK_300,
}

def svg(w, h, name, priority, label, sublabel='', icon=''):
    pc = PRIORITY_COLORS.get(priority, INK_400)
    icon_block = ''
    if icon:
        icon_block = f'''<text x="{w/2}" y="{h/2-20}" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="64" fill="{INK_300}" text-anchor="middle" dominant-baseline="middle">{icon}</text>'''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" preserveAspectRatio="xMidYMid slice">
  <rect width="{w}" height="{h}" fill="{INK_100}"/>
  <rect x="20" y="20" width="56" height="24" rx="4" fill="{pc}"/>
  <text x="48" y="36" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">{priority}</text>
  {icon_block}
  <text x="{w/2}" y="{h/2+30}" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="600" fill="{INK_500}" text-anchor="middle">{label}</text>
  <text x="{w/2}" y="{h/2+54}" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="{INK_400}" text-anchor="middle">{sublabel}</text>
  <text x="{w-20}" y="{h-16}" font-family="-apple-system, BlinkMacSystemFont, monospace" font-size="11" fill="{INK_300}" text-anchor="end">{w}×{h}</text>
</svg>'''

def write(filename, content):
    p = os.path.join(BASE, filename)
    with open(p, 'w') as f:
        f.write(content)

# 1. Hero (P0)
write('hero-port-loading.svg', svg(1600, 1200, '', 'P0', 'hero-port-loading.jpg', '港口装船 / Shanghai Loading Bay', '🚢'))

# 2. Top Cards 4 入口
for s in ['brands', 'cars', 'markets', 'process']:
    write(f'card-{s}.svg', svg(400, 400, '', 'P1', f'card-{s}.jpg', s.title(), '📦'))

# 3. 35 brand logos (just first letter big)
brands = ['aito','avatr','aion','audi','bmw','byd','byd-leopard','buick','changan','chery','chevrolet','deepal','denza','dongfeng','foton','ford','gac-mitsubishi','geely','haval','honda','hyundai','jetour','kia','leapmotor','lexus','mazda','nissan','qiyuan','saic','tesla','toyota','volkswagen','voyah','wuling','xiaomi','xpeng','zeekr']
brand_names = {'aito':'AITO','avatr':'AVATR','aion':'Aion','audi':'Audi','bmw':'BMW','byd':'BYD','byd-leopard':'BYD Leopard','buick':'Buick','changan':'Changan','chery':'Chery','chevrolet':'Chevrolet','deepal':'Deepal','denza':'Denza','dongfeng':'Dongfeng','foton':'Foton','ford':'Ford','gac-mitsubishi':'GAC Mitsubishi','geely':'Geely','haval':'Haval','honda':'Honda','hyundai':'Hyundai','jetour':'Jetour','kia':'Kia','leapmotor':'Leapmotor','lexus':'Lexus','mazda':'Mazda','nissan':'Nissan','qiyuan':'Qiyuan','saic':'SAIC','tesla':'Tesla','toyota':'Toyota','volkswagen':'Volkswagen','voyah':'Voyah','wuling':'Wuling','xiaomi':'Xiaomi','xpeng':'Xpeng','zeekr':'Zeekr'}
for slug in brands:
    name = brand_names[slug]
    initial = name[0]
    s = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80">
  <rect width="200" height="80" fill="white" stroke="{INK_200}" stroke-width="1"/>
  <text x="100" y="46" font-family="-apple-system, sans-serif" font-size="22" font-weight="800" fill="{INK_900}" text-anchor="middle">{name}</text>
</svg>'''
    write(f'brand-{slug}.svg', s)

# 4. Car thumbnails (8 P0 + 9 P1)
cars_p0 = ['changan-uni-t', 'jetour-t2', 'geely-coolray', 'deepal-s07', 'deepal-s05', 'deepal-s09', 'changan-cs55-plus', 'geely-atlas']
cars_p1 = ['changan-uni-k', 'changan-uni-z', 'changan-cs75-plus', 'jetour-x70-plus', 'jetour-dasheng', 'geely-emgrand', 'geely-monjaro', 'volkswagen-id-3', 'volkswagen-id-7']
for slug in cars_p0 + cars_p1:
    p = 'P0' if slug in cars_p0 else 'P1'
    pretty = ' '.join(w.upper() if w in ('uni', 'cs', 'id') else w.title() for w in slug.split('-'))
    write(f'car-{slug}.svg', svg(800, 500, '', p, f'car-{slug}.jpg', pretty, '🚗'))

# 5. Single car hero (1600×1200) for /cars/changan-uni-t/
write('car-hero-changan-uni-t.svg', svg(1600, 1200, '', 'P0', 'car-changan-uni-t-hero.jpg', '2026 Changan UNI-T · Front 3/4 angle', '🚗'))

# 6. Use case images (5 P2)
for s, label in [('electric-suv','Electric SUV'), ('phev-hybrid','PHEV / Hybrid'), ('pickup','Pickup Trucks'), ('rhd','Right-Hand Drive'), ('under-15k','Under $15K')]:
    write(f'usecase-{s}.svg', svg(800, 600, '', 'P2', f'usecase-{s}.jpg', label, '🌍'))

# 7. Trust badges 3 (icons, white bg)
for s, icon in [('authorized', '🏷'), ('warehouse', '📦'), ('logistics', '🚚')]:
    sw = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <rect width="80" height="80" rx="12" fill="{BRAND}"/>
  <text x="40" y="55" font-family="sans-serif" font-size="40" text-anchor="middle">{icon}</text>
</svg>'''
    write(f'trust-{s}.svg', sw)

# 8. About team (P1)
write('about-team.svg', svg(1200, 800, '', 'P1', 'about-team.jpg', '15-year founder + Russian/Arabic/Spanish ops team', '👥'))

# 9. Advantage icons (6 P2)
for i, icon in enumerate(['🏭', '🤝', '🇷🇺', '📋', '💰', '🛠'], 1):
    sw = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <rect width="80" height="80" rx="12" fill="{BRAND_BG}"/>
  <text x="40" y="55" font-family="sans-serif" font-size="40" text-anchor="middle">{icon}</text>
</svg>'''
    write(f'advantage-{i}.svg', sw)

# 10. Compare tool mockup (P3)
write('tool-compare-mockup.svg', svg(1200, 800, '', 'P3', 'tool-compare-mockup.jpg', 'Compare & Customize · UI Preview', '⚡'))

# 11. Markets 8 国 (P1)
for code, name in [('ru','Russia'), ('ae','UAE'), ('kz','Kazakhstan'), ('uz','Uzbekistan'), ('sa','Saudi Arabia'), ('eg','Egypt'), ('br','Brazil'), ('mx','Mexico')]:
    write(f'market-{code}.svg', svg(600, 400, '', 'P1', f'market-{code}.jpg', name, '🌍'))

# 12. Testimonial avatars (4 P2)
for i, (initial, color) in enumerate([('A', '#3b82f6'), ('M', '#10b981'), ('D', '#f59e0b'), ('C', '#8b5cf6')], 1):
    sw = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="100" fill="{color}"/>
  <text x="100" y="130" font-family="sans-serif" font-size="80" font-weight="700" fill="white" text-anchor="middle">{initial}</text>
</svg>'''
    write(f'testimonial-{i}.svg', sw)

# 13. Certifications logo wall (8 P0)
for code, label in [('mofcom','商务部'),('aeo','AEO'),('iso','ISO 9001'),('gcc','GCC'),('eac','EAC'),('inmetro','INMETRO'),('gso','GSO'),('saso','SASO')]:
    sw = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <rect width="200" height="100" fill="white" stroke="{INK_200}"/>
  <text x="100" y="50" font-family="sans-serif" font-size="20" font-weight="800" fill="{INK_900}" text-anchor="middle">{label}</text>
  <text x="100" y="72" font-family="sans-serif" font-size="11" fill="{INK_500}" text-anchor="middle">CERTIFIED</text>
</svg>'''
    write(f'cert-{code}.svg', sw)

# 14. Blog thumbnails (3 P2)
for s in ['top-chinese-evs-for-russia-2026', 'how-to-import-chinese-cars-to-uae', 'phev-vs-bev-which-for-central-asia']:
    write(f'blog-{s}.svg', svg(800, 500, '', 'P2', f'blog-{s}.jpg', s.replace('-', ' ').title()[:50], '📝'))

# 15. Catalogue PDF cover
write('catalogue-cover.svg', svg(400, 560, '', 'P2', 'catalogue-cover.jpg', '50-page Model Catalogue', '📕'))

# 16. Favicon (32×32 brand red square + EV)
fav = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="{BRAND}"/>
  <text x="16" y="22" font-family="sans-serif" font-size="14" font-weight="800" fill="white" text-anchor="middle">EV</text>
</svg>'''
with open('/Users/linlin/sites/evautopro.com/public/favicon.svg', 'w') as f:
    f.write(fav)

# OG default
write('og-default.svg', svg(1200, 630, '', 'P0', 'og-default.jpg', 'EV Auto Pro · China NEV Export', '🚗'))

import glob
files = sorted(glob.glob(os.path.join(BASE, '*.svg')))
print(f'✅ Generated {len(files)} SVG placeholders')
for f in files[:10]:
    print(f'  {os.path.basename(f)}')
print(f'  ... +{len(files)-10} more')

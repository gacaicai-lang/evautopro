#!/usr/bin/env python3
"""Generate 6 FAQ category illustration SVGs (themed, brand-red palette)
Output: public/images/faq-{slug}.svg
真图到位后改 .svg → .jpg/.webp 同名替换
"""
from pathlib import Path

BASE = Path('/Users/linlin/sites/evautopro.com/public/images')

BRAND = '#e53e2f'
BRAND_700 = '#b22e21'
INK_50 = '#fafafa'
INK_100 = '#f4f4f5'
INK_900 = '#18181b'

categories = [
    {
        'slug': 'sourcing',
        'icon': '🏭',
        'title': 'Sourcing & Inventory',
        'sub': '车型库 · 仓储 · 验车',
        'sceneIcon': '🚗',
        'bg_from': '#fef2f0',
        'bg_to': '#fde5e1',
    },
    {
        'slug': 'logistics',
        'icon': '🚢',
        'title': 'Logistics & Customs',
        'sub': 'RoRo · Container · Block Train',
        'sceneIcon': '⚓',
        'bg_from': '#e0f2fe',
        'bg_to': '#bae6fd',
    },
    {
        'slug': 'payment',
        'icon': '💰',
        'title': 'Payment & Transactions',
        'sub': 'T/T · L/C · OA · USD/CNY',
        'sceneIcon': '🏦',
        'bg_from': '#fef3c7',
        'bg_to': '#fde68a',
    },
    {
        'slug': 'quality',
        'icon': '🛡',
        'title': 'Compliance & Quality',
        'sub': 'EAC · GCC · INMETRO · ISO',
        'sceneIcon': '📜',
        'bg_from': '#d1fae5',
        'bg_to': '#a7f3d0',
    },
    {
        'slug': 'oem',
        'icon': '🔧',
        'title': 'OEM & Customization',
        'sub': '贴牌 · RHD · CKD · 改装',
        'sceneIcon': '⚙',
        'bg_from': '#e0e7ff',
        'bg_to': '#c7d2fe',
    },
    {
        'slug': 'warranty',
        'icon': '🛠',
        'title': 'Warranty & After-Sales',
        'sub': '5 年保 · 配件 · 培训',
        'sceneIcon': '🔍',
        'bg_from': '#fce7f3',
        'bg_to': '#fbcfe8',
    },
]

for c in categories:
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c['bg_from']}"/>
      <stop offset="100%" stop-color="{c['bg_to']}"/>
    </linearGradient>
    <linearGradient id="brand" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{BRAND}"/>
      <stop offset="100%" stop-color="{BRAND_700}"/>
    </linearGradient>
  </defs>

  <!-- Background gradient -->
  <rect width="800" height="600" fill="url(#bg)"/>

  <!-- Decorative scene icon (large, faded) -->
  <text x="700" y="540" font-family="-apple-system, sans-serif" font-size="240" opacity="0.12" text-anchor="end">{c['sceneIcon']}</text>

  <!-- Main brand-red gradient circle with main icon -->
  <circle cx="280" cy="280" r="140" fill="url(#brand)"/>
  <text x="280" y="335" font-family="-apple-system, sans-serif" font-size="140" fill="white" text-anchor="middle">{c['icon']}</text>

  <!-- Title text right side -->
  <text x="450" y="240" font-family="-apple-system, sans-serif" font-size="42" font-weight="800" fill="{INK_900}" >FAQ</text>
  <text x="450" y="285" font-family="-apple-system, sans-serif" font-size="28" font-weight="600" fill="{INK_900}" >{c['title']}</text>
  <text x="450" y="320" font-family="-apple-system, sans-serif" font-size="16" fill="#52525b">{c['sub']}</text>

  <!-- Priority badge -->
  <rect x="40" y="40" width="80" height="32" rx="16" fill="{BRAND}"/>
  <text x="80" y="61" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">FAQ</text>

  <!-- Brand watermark bottom -->
  <text x="40" y="560" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="{INK_900}" opacity="0.5">EV AUTO PRO</text>
</svg>'''
    out = BASE / f"faq-{c['slug']}.svg"
    out.write_text(svg)
    print(f"✓ Generated {out.name}")

print(f"\n✅ Done — 6 FAQ category illustrations in {BASE}/")

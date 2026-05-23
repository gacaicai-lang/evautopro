#!/usr/bin/env python3
"""launder-all.py - 批量给真图防溯源 + 重命名
处理 public/images/真图/car-{brand}-{model}-{view}.jpg
输出  public/images/真图/laundered/evautopro-{brand}-{model}-{idx}.webp
"""
import os, re, random, sys
from pathlib import Path
from PIL import Image, ImageEnhance, ImageOps

REAL_DIR = Path('/Users/linlin/sites/evautopro.com/public/images/真图')
OUT_DIR = REAL_DIR / 'laundered'
OUT_DIR.mkdir(exist_ok=True)

def launder(src, dst):
    img = Image.open(src).convert('RGB')
    w, h = img.size
    cx = random.randint(int(w*0.05), int(w*0.08))
    cy = random.randint(int(h*0.05), int(h*0.08))
    img = img.crop((cx, cy, w-cx, h-cy))
    if random.random() < 0.3:
        img = ImageOps.mirror(img)
    for enh, lo, hi in [(ImageEnhance.Brightness, 0.95, 1.05),
                        (ImageEnhance.Contrast,   0.95, 1.08),
                        (ImageEnhance.Color,      0.92, 1.08),
                        (ImageEnhance.Sharpness,  0.9,  1.1)]:
        img = enh(img).enhance(random.uniform(lo, hi))
    target_w = 1280
    img = img.resize((target_w, int(img.height * target_w / img.width)), Image.LANCZOS)
    img.save(dst, 'webp', quality=82, method=6)

# group by car slug (everything between car- and last segment)
groups = {}
for img in REAL_DIR.glob('car-*.jpg'):
    m = re.match(r'^car-(.+?)-(front|side|kv|rear|interior|top|hero)\.jpg$', img.name)
    if not m: continue
    slug = m.group(1)
    groups.setdefault(slug, []).append(img)

print(f'找到 {len(groups)} 个车型 / {sum(len(v) for v in groups.values())} 张图\n')

total = 0
for slug, imgs in sorted(groups.items()):
    for i, src in enumerate(sorted(imgs), 1):
        out_name = f'evautopro-{slug}-{i:02d}.webp'
        out = OUT_DIR / out_name
        try:
            launder(src, out)
            print(f'  ✓ {src.name} → {out_name}')
            total += 1
        except Exception as e:
            print(f'  ✗ {src.name} FAILED: {e}')

print(f'\n✅ 共处理 {total} 张图 → {OUT_DIR}')

#!/usr/bin/env python3
"""Hero-image spotlight effect (fallback for unavailable rembg):
- Aggressive 25-30% crop to make car fill the frame
- Brightness +15%, Saturation +25% to make car colors pop
- White-mix overlay 20% on top + bottom to fade background toward white
- Keeps middle band (where the car is) untouched

Output: writes back to <slug>/prepped/hero-XX.jpg in place.
Subsequent image_launder.py then runs its own 3-pass on this prepped file.

Usage: python3 scripts/hero-spotlight.py [slug1 slug2 ...]   (default: all 8)
"""
import sys
from pathlib import Path
from PIL import Image, ImageEnhance, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
REAL_DIR = ROOT / "public/images/真图"

SLUGS = ["changan-uni-t", "changan-cs55-plus", "geely-atlas", "geely-coolray",
         "jetour-t2", "deepal-s05", "deepal-s07", "deepal-s09"]


def spotlight(src: Path, dst: Path):
    img = Image.open(src).convert("RGB")
    w, h = img.size

    # 1. Center-crop to make car fill more of the frame
    cl = int(w * 0.10)
    cr = int(w * 0.10)
    ct = int(h * 0.08)
    cb = int(h * 0.12)
    img = img.crop((cl, ct, w - cr, h - cb))
    w, h = img.size

    # 2. Color boost: saturation + slight brightness
    img = ImageEnhance.Color(img).enhance(1.28)
    img = ImageEnhance.Brightness(img).enhance(1.08)
    img = ImageEnhance.Contrast(img).enhance(1.04)

    # 3. Top + bottom white fade (gradient overlay to push background toward white)
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    fade_top = int(h * 0.30)
    fade_bot = int(h * 0.25)
    # top fade: alpha from 130 (top) to 0 (band end)
    for y in range(fade_top):
        a = int(140 * (1 - y / fade_top))
        draw.line([(0, y), (w, y)], fill=(255, 255, 255, a))
    # bottom fade: alpha from 0 (band start) to 100 (bottom) — softer
    for y in range(fade_bot):
        a = int(100 * (y / fade_bot))
        draw.line([(0, h - fade_bot + y), (w, h - fade_bot + y)], fill=(255, 255, 255, a))
    # side fades — vignette toward white
    side_w = int(w * 0.18)
    for x in range(side_w):
        a = int(80 * (1 - x / side_w))
        draw.line([(x, 0), (x, h)], fill=(255, 255, 255, a))
        draw.line([(w - 1 - x, 0), (w - 1 - x, h)], fill=(255, 255, 255, a))

    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    dst.parent.mkdir(parents=True, exist_ok=True)
    img.save(dst, "JPEG", quality=92, optimize=True)


def main():
    slugs = sys.argv[1:] or SLUGS
    total = 0
    for slug in slugs:
        prepped = REAL_DIR / slug / "prepped"
        heroes = sorted([f for f in prepped.glob("hero-*") if f.suffix.lower() in (".jpg", ".jpeg", ".png")])
        if not heroes:
            print(f"  {slug}: no hero files")
            continue
        print(f"=== {slug} ===")
        for f in heroes:
            spotlight(f, f)  # overwrite in place
            print(f"  ✓ {f.name}")
            total += 1
    print(f"\nspotlight applied to {total} hero images")


if __name__ == "__main__":
    main()

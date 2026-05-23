#!/usr/bin/env python3
"""Create clearly marked AI-fallback source images when official scraping fails.

This is a local deterministic fallback only for blocked environments. The
generated files are not claimed as official photos; SOURCES.md and the
verification report label them as AI fallback assets.
"""

from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
REAL_DIR = ROOT / "public/images/真图"

MODELS = {
    "changan-uni-t": ("Changan UNI-T", (184, 188, 194), (42, 46, 52)),
    "changan-cs55-plus": ("Changan CS55 Plus", (72, 76, 82), (214, 94, 48)),
    "deepal-s05": ("Deepal S05", (142, 188, 218), (36, 74, 110)),
    "deepal-s07": ("Deepal S07", (192, 196, 202), (36, 88, 132)),
    "deepal-s09": ("Deepal S09", (34, 38, 44), (88, 118, 150)),
}

CATEGORIES = {
    "hero": 2,
    "appearance": 5,
    "console": 3,
    "space": 3,
    "other": 3,
}


def lerp(a: int, b: int, t: float) -> int:
    return int(a + (b - a) * t)


def background(draw: ImageDraw.ImageDraw, w: int, h: int, seed: int) -> None:
    rng = random.Random(seed)
    top = (222 + rng.randint(-8, 8), 228 + rng.randint(-8, 8), 232 + rng.randint(-8, 8))
    bottom = (184 + rng.randint(-10, 10), 194 + rng.randint(-10, 10), 202 + rng.randint(-10, 10))
    for y in range(h):
        t = y / h
        color = tuple(lerp(top[i], bottom[i], t) for i in range(3))
        draw.line((0, y, w, y), fill=color)
    floor_y = int(h * 0.68)
    draw.polygon([(0, floor_y), (w, int(h * 0.56)), (w, h), (0, h)], fill=(170, 176, 180))
    for i in range(8):
        x = int(w * (i / 7))
        draw.line((x, floor_y - 80, x - 220, h), fill=(205, 210, 214), width=2)


def car_body(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], color: tuple[int, int, int], accent: tuple[int, int, int], variant: int) -> None:
    x0, y0, x1, y1 = box
    w = x1 - x0
    h = y1 - y0
    roof = [
        (x0 + int(w * 0.20), y0 + int(h * 0.48)),
        (x0 + int(w * 0.34), y0 + int(h * 0.18)),
        (x0 + int(w * 0.68), y0 + int(h * 0.16)),
        (x0 + int(w * 0.84), y0 + int(h * 0.48)),
    ]
    body = [
        (x0 + int(w * 0.06), y0 + int(h * 0.58)),
        (x0 + int(w * 0.16), y0 + int(h * 0.38)),
        (x0 + int(w * 0.88), y0 + int(h * 0.40)),
        (x0 + int(w * 0.98), y0 + int(h * 0.66)),
        (x0 + int(w * 0.90), y0 + int(h * 0.82)),
        (x0 + int(w * 0.10), y0 + int(h * 0.82)),
    ]
    shadow = (0, 0, 0, 68)
    draw.ellipse((x0 + int(w * 0.07), y0 + int(h * 0.76), x1 - int(w * 0.04), y1), fill=shadow)
    draw.polygon(body, fill=color, outline=tuple(max(0, c - 32) for c in color))
    draw.polygon(roof, fill=tuple(min(255, c + 22) for c in color), outline=tuple(max(0, c - 28) for c in color))
    glass = (34, 48, 62)
    draw.polygon([
        (x0 + int(w * 0.32), y0 + int(h * 0.24)),
        (x0 + int(w * 0.47), y0 + int(h * 0.22)),
        (x0 + int(w * 0.47), y0 + int(h * 0.47)),
        (x0 + int(w * 0.25), y0 + int(h * 0.47)),
    ], fill=glass)
    draw.polygon([
        (x0 + int(w * 0.50), y0 + int(h * 0.22)),
        (x0 + int(w * 0.67), y0 + int(h * 0.24)),
        (x0 + int(w * 0.80), y0 + int(h * 0.47)),
        (x0 + int(w * 0.50), y0 + int(h * 0.47)),
    ], fill=(38, 56, 70))
    draw.line((x0 + int(w * 0.18), y0 + int(h * 0.66), x0 + int(w * 0.84), y0 + int(h * 0.64)), fill=accent, width=max(5, w // 80))
    draw.rounded_rectangle((x0 + int(w * 0.83), y0 + int(h * 0.52), x0 + int(w * 0.96), y0 + int(h * 0.58)), radius=8, fill=(226, 236, 244))
    draw.rounded_rectangle((x0 + int(w * 0.06), y0 + int(h * 0.58), x0 + int(w * 0.18), y0 + int(h * 0.63)), radius=8, fill=(246, 248, 250))
    for cx in (x0 + int(w * 0.25), x0 + int(w * 0.76)):
        cy = y0 + int(h * 0.82)
        r = int(h * 0.16)
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(18, 20, 24))
        draw.ellipse((cx - int(r * 0.58), cy - int(r * 0.58), cx + int(r * 0.58), cy + int(r * 0.58)), fill=(202, 206, 210))
        for spoke in range(6):
            a = spoke * math.pi / 3 + variant * 0.12
            draw.line((cx, cy, cx + math.cos(a) * r * 0.52, cy + math.sin(a) * r * 0.52), fill=(78, 82, 88), width=3)


def cockpit(draw: ImageDraw.ImageDraw, w: int, h: int, accent: tuple[int, int, int], seed: int) -> None:
    rng = random.Random(seed)
    draw.rounded_rectangle((140, 190, w - 140, h - 170), radius=44, fill=(28, 30, 34))
    draw.rounded_rectangle((210, 245, w - 210, 390), radius=26, fill=(44, 48, 54))
    draw.rounded_rectangle((w // 2 - 260, 260, w // 2 + 260, 350), radius=18, fill=(16, 28, 40))
    for i in range(6):
        x = w // 2 - 220 + i * 88
        draw.rectangle((x, 286, x + 48, 326), fill=tuple(min(255, c + rng.randint(20, 80)) for c in accent))
    draw.ellipse((300, 340, 560, 600), outline=(210, 214, 218), width=24)
    draw.rounded_rectangle((w // 2 - 100, 430, w // 2 + 130, h - 120), radius=34, fill=(56, 58, 62))
    draw.ellipse((w // 2 - 70, 500, w // 2 - 10, 560), outline=(190, 194, 198), width=6)
    draw.ellipse((w // 2 + 30, 500, w // 2 + 90, 560), outline=(190, 194, 198), width=6)


def seats(draw: ImageDraw.ImageDraw, w: int, h: int, color: tuple[int, int, int], seed: int) -> None:
    base = tuple(max(18, c - 80) for c in color)
    for x in (260, 650, 1040):
        draw.rounded_rectangle((x, 210, x + 260, 760), radius=46, fill=base)
        draw.rounded_rectangle((x + 30, 250, x + 230, 520), radius=36, fill=tuple(min(255, c + 22) for c in base))
        for i in range(5):
            draw.line((x + 58 + i * 36, 275, x + 95 + i * 22, 510), fill=(112, 118, 126), width=4)
    draw.rounded_rectangle((120, 700, w - 120, 900), radius=38, fill=(48, 50, 54))


def detail(draw: ImageDraw.ImageDraw, w: int, h: int, color: tuple[int, int, int], accent: tuple[int, int, int], seed: int) -> None:
    rng = random.Random(seed)
    draw.rounded_rectangle((170, 180, w - 170, h - 180), radius=70, fill=tuple(min(255, c + 16) for c in color))
    for i in range(12):
        x = 260 + i * 82
        y = 300 + int(math.sin(i * 0.7) * 45)
        draw.rounded_rectangle((x, y, x + 58, y + 210), radius=18, fill=tuple(max(0, c - rng.randint(18, 48)) for c in color))
    draw.line((240, h - 280, w - 240, h - 280), fill=accent, width=22)
    draw.rounded_rectangle((w - 460, 260, w - 220, 350), radius=24, fill=(236, 242, 248))


def make_image(slug: str, label: str, color: tuple[int, int, int], accent: tuple[int, int, int], category: str, idx: int) -> Image.Image:
    w, h = 1920, 1080
    img = Image.new("RGBA", (w, h), (255, 255, 255, 255))
    draw = ImageDraw.Draw(img, "RGBA")
    seed = abs(hash((slug, category, idx))) % 999999
    background(draw, w, h, seed)
    if category in {"hero", "appearance"}:
        scale = 1.0 if category == "hero" else 0.88 + idx * 0.025
        x0 = int(160 + (idx % 3) * 40)
        y0 = int(320 - (idx % 2) * 35)
        car_body(draw, (x0, y0, int(x0 + 1450 * scale), int(y0 + 520 * scale)), color, accent, idx)
    elif category == "console":
        cockpit(draw, w, h, accent, seed)
    elif category == "space":
        seats(draw, w, h, color, seed)
    else:
        detail(draw, w, h, color, accent, seed)
    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=90, threshold=3))
    return img.convert("RGB")


def main() -> None:
    for slug, (label, color, accent) in MODELS.items():
        out_dir = REAL_DIR / slug
        out_dir.mkdir(parents=True, exist_ok=True)
        for category, count in CATEGORIES.items():
            for idx in range(1, count + 1):
                name = f"{category}-{idx:02d}.jpg"
                img = make_image(slug, label, color, accent, category, idx)
                img.save(out_dir / name, "JPEG", quality=92, optimize=True)
                print(f"wrote {slug}/{name}")


if __name__ == "__main__":
    main()

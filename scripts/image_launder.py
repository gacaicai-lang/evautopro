#!/usr/bin/env python3
"""Three-pass image laundering for Eva Auto Pro car photos.

Usage:
    python3 scripts/image_launder.py <src_dir> <slug>

Input files may be named:
    hero-01.jpg
    appearance-01.jpg
    console-01.jpg
    space-01.jpg
    other-01.jpg

Output files are written to:
    public/images/真图/laundered/evautopro-{slug}-*.webp
"""

from __future__ import annotations

import io
import random
import re
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
REAL_DIR = ROOT / "public/images/真图"
OUT_DIR = REAL_DIR / "laundered"


def _perspective_coeffs(src: list[tuple[float, float]], dst: list[tuple[float, float]]) -> list[float]:
    matrix = []
    vector = []
    for (x, y), (u, v) in zip(src, dst):
        matrix.append([x, y, 1, 0, 0, 0, -u * x, -u * y])
        matrix.append([0, 0, 0, x, y, 1, -v * x, -v * y])
        vector.extend([u, v])
    return np.linalg.solve(np.array(matrix, dtype=np.float64), np.array(vector, dtype=np.float64)).tolist()


def _output_name(src: Path, slug: str, idx: int) -> str:
    stem = src.stem.lower()
    match = re.match(r"^(hero|appearance|console|space|other)[-_]?(\d+)?", stem)
    if not match:
        return f"evautopro-{slug}-{idx:02d}.webp"

    tab, number = match.groups()
    number = int(number or idx)
    if tab == "hero":
        return f"evautopro-{slug}-{number:02d}.webp"
    return f"evautopro-{slug}-{tab}-{number:02d}.webp"


def launder_image(src: Path, dst: Path, seed: str | None = None) -> Path:
    rng = random.Random(seed or f"{src}-{dst}")
    img = Image.open(src).convert("RGB")
    is_ai_generated = "ai_generated" in src.parts

    # Pass 1a: aggressive edge crop — guaranteed to nuke top-left logos,
    # bottom-edge media-watermarks ("懂车帝", "汽车之家", OEM免责条款 etc).
    # crops 18-24% per side instead of the prior 7-16% which sometimes left
    # corner watermarks visible (esp. for media-sourced raws).
    w, h = img.size
    if is_ai_generated:
        # AI studio renders are already clean and centered; preserve hero framing.
        crop_l = rng.randint(int(w * 0.005), int(w * 0.018))
        crop_r = rng.randint(int(w * 0.005), int(w * 0.018))
        crop_t = rng.randint(int(h * 0.004), int(h * 0.014))
        crop_b = rng.randint(int(h * 0.004), int(h * 0.014))
    else:
        crop_l = rng.randint(int(w * 0.18), int(w * 0.24))
        crop_r = rng.randint(int(w * 0.17), int(w * 0.23))
        crop_t = rng.randint(int(h * 0.15), int(h * 0.22))
        crop_b = rng.randint(int(h * 0.15), int(h * 0.22))
    img = img.crop((crop_l, crop_t, w - crop_r, h - crop_b))
    if not is_ai_generated and rng.random() < 0.3:
        img = ImageOps.mirror(img)

    for enhancer, lo, hi in [
        (ImageEnhance.Brightness, 0.94, 1.06),
        (ImageEnhance.Contrast, 0.93, 1.09),
        (ImageEnhance.Color, 0.90, 1.10),
        (ImageEnhance.Sharpness, 0.92, 1.12),
    ]:
        img = enhancer(img).enhance(rng.uniform(lo, hi))

    # Pass 2: subtle geometry and frequency disruption.
    img = img.rotate(
        rng.uniform(-2.2, 2.2),
        resample=Image.Resampling.BICUBIC,
        expand=False,
        fillcolor=tuple(int(v) for v in np.asarray(img).reshape(-1, 3).mean(axis=0)),
    )

    w, h = img.size
    max_dx = w * rng.uniform(0.005, 0.015)
    max_dy = h * rng.uniform(0.005, 0.015)
    src_quad = [(0, 0), (w, 0), (w, h), (0, h)]
    dst_quad = [
        (rng.uniform(0, max_dx), rng.uniform(0, max_dy)),
        (w - rng.uniform(0, max_dx), rng.uniform(0, max_dy)),
        (w - rng.uniform(0, max_dx), h - rng.uniform(0, max_dy)),
        (rng.uniform(0, max_dx), h - rng.uniform(0, max_dy)),
    ]
    img = img.transform(
        (w, h),
        Image.Transform.PERSPECTIVE,
        _perspective_coeffs(src_quad, dst_quad),
        Image.Resampling.BICUBIC,
    )
    img = img.filter(ImageFilter.GaussianBlur(radius=rng.uniform(0.3, 0.5)))

    arr = np.asarray(img).astype(np.int16)
    noise = np.random.default_rng(abs(hash(seed or src.name)) % (2**32)).normal(0, rng.uniform(2, 4), arr.shape)
    arr = np.clip(arr + noise, 0, 255).astype(np.uint8)
    img = Image.fromarray(arr, mode="RGB").filter(
        ImageFilter.UnsharpMask(radius=1.0, percent=65, threshold=3)
    )

    # Low-opacity lighting sweep changes low-frequency structure enough for
    # pHash while remaining visually plausible on automotive photography.
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay, "RGBA")
    if rng.random() < 0.5:
        draw.polygon([(0, 0), (int(img.width * 0.62), 0), (0, img.height)], fill=(255, 255, 255, rng.randint(12, 24)))
        draw.polygon([(img.width, 0), (img.width, img.height), (int(img.width * 0.35), img.height)], fill=(0, 0, 0, rng.randint(10, 22)))
    else:
        draw.polygon([(0, 0), (img.width, 0), (img.width, int(img.height * 0.42))], fill=(255, 255, 255, rng.randint(10, 20)))
        draw.polygon([(0, int(img.height * 0.65)), (img.width, img.height), (0, img.height)], fill=(0, 0, 0, rng.randint(12, 24)))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")

    target_w = 1280
    img = img.resize((target_w, int(img.height * target_w / img.width)), Image.Resampling.LANCZOS)

    if is_ai_generated:
        _remove_ai_wheel_badges(img, src.stem.lower())

    # Pass 3: JPEG encode/decode before final stripped WebP.
    buf = io.BytesIO()
    img.save(buf, "JPEG", quality=88, optimize=True)
    buf.seek(0)
    img = Image.open(buf).convert("RGB")

    dst.parent.mkdir(parents=True, exist_ok=True)
    _save_webp_target(img, dst)
    return dst


def _remove_ai_wheel_badges(img: Image.Image, stem: str) -> None:
    """Cover tiny synthetic wheel-center marks while keeping natural wheel caps."""
    draw = ImageDraw.Draw(img)
    w, h = img.size
    if "02" in stem:
        candidates = [(0.235, 0.725, 0.020), (0.765, 0.725, 0.020)]
    else:
        candidates = [(0.585, 0.735, 0.020), (0.825, 0.725, 0.018)]

    arr = np.asarray(img)
    for x_ratio, y_ratio, r_ratio in candidates:
        x = int(w * x_ratio)
        y = int(h * y_ratio)
        r = max(12, int(w * r_ratio))
        x1, y1 = max(0, x - r), max(0, y - r)
        x2, y2 = min(w, x + r), min(h, y + r)
        patch = arr[y1:y2, x1:x2]
        if patch.size == 0:
            continue
        luminance = patch[..., :3].mean(axis=2).mean()
        if luminance > 145:
            continue
        draw.ellipse((x - r, y - r, x + r, y + r), fill=(28, 29, 30), outline=(95, 98, 102), width=max(2, r // 8))
        inner = max(4, r // 3)
        draw.ellipse((x - inner, y - inner, x + inner, y + inner), fill=(55, 57, 60))


def _save_webp_target(img: Image.Image, dst: Path) -> None:
    min_bytes = 80 * 1024
    max_bytes = 180 * 1024
    best: bytes | None = None

    for quality in [82, 86, 90, 94, 96, 78, 75, 72, 69]:
        buf = io.BytesIO()
        img.save(buf, "WEBP", quality=quality, method=6, exif=b"", icc_profile=None)
        data = buf.getvalue()
        if min_bytes <= len(data) <= max_bytes:
            dst.write_bytes(data)
            return
        if len(data) <= max_bytes:
            best = data
        elif best is None:
            best = data

    dst.write_bytes(best or b"")


def main() -> None:
    if len(sys.argv) < 3:
        print("Usage: python3 scripts/image_launder.py <src_dir> <slug>")
        sys.exit(1)

    src_dir = Path(sys.argv[1]).expanduser()
    slug = sys.argv[2]
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    files = [p for p in sorted(src_dir.iterdir()) if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}]
    count = 0
    for idx, src in enumerate(files, 1):
        try:
            out = OUT_DIR / _output_name(src, slug, idx)
            launder_image(src, out, seed=f"{slug}-{src.name}-{idx}")
            print(f"✓ {src.name} -> {out.name}")
            count += 1
        except Exception as exc:
            print(f"✗ {src.name} FAILED: {exc}")

    print(f"\nProcessed {count} images -> {OUT_DIR}")


if __name__ == "__main__":
    main()

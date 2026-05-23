#!/usr/bin/env python3
"""Write pHash distance report for original vs laundered images.

This implements the standard imagehash-style pHash locally because installing
the imagehash package is not always possible in the locked Codex sandbox.
"""

from __future__ import annotations

import json
from datetime import datetime
from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
REAL_DIR = ROOT / "public/images/真图"
OUT_DIR = REAL_DIR / "laundered"
REPORT = ROOT / "03-build/launder-verification.md"
SCRAPE_LOG = ROOT / "03-build/official-scrape-log.json"

TARGETS = ["changan-uni-t", "changan-cs55-plus", "deepal-s05", "deepal-s07", "deepal-s09"]
CATEGORIES = {"hero": 2, "appearance": 5, "console": 3, "space": 3, "other": 3}


def dct_matrix(n: int) -> np.ndarray:
    mat = np.zeros((n, n), dtype=np.float64)
    factor = np.pi / (2 * n)
    for k in range(n):
        alpha = np.sqrt(1 / n) if k == 0 else np.sqrt(2 / n)
        for i in range(n):
            mat[k, i] = alpha * np.cos((2 * i + 1) * k * factor)
    return mat


DCT = dct_matrix(32)


def phash(path: Path) -> np.ndarray:
    with Image.open(path) as img:
        gray = img.convert("L").resize((32, 32), Image.Resampling.LANCZOS)
    pixels = np.asarray(gray, dtype=np.float64)
    coeffs = DCT @ pixels @ DCT.T
    low = coeffs[:8, :8].copy()
    vals = low.flatten()[1:]
    median = np.median(vals)
    return vals > median


def distance(a: Path, b: Path) -> int:
    return int(np.count_nonzero(phash(a) != phash(b)))


def source_for(slug: str, category: str, idx: int) -> Path:
    return REAL_DIR / slug / f"{category}-{idx:02d}.jpg"


def output_for(slug: str, category: str, idx: int) -> Path:
    if category == "hero":
        return OUT_DIR / f"evautopro-{slug}-{idx:02d}.webp"
    return OUT_DIR / f"evautopro-{slug}-{category}-{idx:02d}.webp"


def load_scrape_summary() -> str:
    if not SCRAPE_LOG.exists():
        return "- Official scrape log missing; fallback reason must be reviewed manually."
    data = json.loads(SCRAPE_LOG.read_text(encoding="utf-8"))
    lines = []
    for item in data:
        downloaded = len(item.get("downloaded", []))
        errors = item.get("errors", [])
        reason = "official images downloaded" if downloaded else "; ".join(e.get("reason", "") for e in errors[:3])
        lines.append(f"- `{item['slug']}`: {downloaded} official downloads. Fallback reason: {reason or 'no qualifying official images found'}.")
    return "\n".join(lines)


def main() -> None:
    rows = []
    failures = []
    for slug in TARGETS:
        for category, count in CATEGORIES.items():
            for idx in range(1, count + 1):
                src = source_for(slug, category, idx)
                dst = output_for(slug, category, idx)
                if not src.exists() or not dst.exists():
                    rows.append((slug, category, idx, src.name, dst.name, "MISSING", "❌"))
                    failures.append(dst.name)
                    continue
                dist = distance(src, dst)
                status = "✅" if dist >= 10 else "❌"
                if dist < 10:
                    failures.append(dst.name)
                rows.append((slug, category, idx, src.name, dst.name, str(dist), status))

    lines = [
        "# Launder Verification Report",
        f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        "",
        "## Official Sourcing Attempts",
        "",
        load_scrape_summary(),
        "",
        "Note: `imagehash` could not be installed in the sandbox because outbound pip networking is blocked; this report uses a local standard pHash implementation (32x32 grayscale DCT, top-left 8x8, Hamming distance).",
        "",
        "## AI Fallback Disclosure",
        "",
        "The five target models use local AI-fallback source images only because Playwright/curl official-site download attempts in this Codex sandbox cannot resolve external hosts after the configured local proxy failed. No fallback image is represented as an official photo.",
        "",
        "| Slug | Category | # | Original | Laundered | pHash Distance | Status |",
        "|---|---:|---:|---|---|---:|---|",
    ]
    for slug, category, idx, src, dst, dist, status in rows:
        lines.append(f"| {slug} | {category} | {idx} | {src} | {dst} | {dist} | {status} |")
    lines.extend([
        "",
        "## Result",
        "",
        "✅ All checked files meet pHash distance >= 10." if not failures else f"❌ Files below threshold or missing: {', '.join(failures)}",
    ])
    REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"wrote {REPORT}")
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Scrape official model pages for high-resolution car images.

The script intentionally uses Playwright first, then records every attempted
URL and failure reason so the image sourcing report can justify any fallback.
"""

from __future__ import annotations

import asyncio
import json
import os
import re
import sys
from pathlib import Path
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

from PIL import Image
from playwright.async_api import async_playwright


ROOT = Path(__file__).resolve().parents[1]
REAL_DIR = ROOT / "public/images/真图"
LOG_PATH = ROOT / "03-build/official-scrape-log.json"

MODELS = {
    "changan-uni-t": "https://www.changan.com.cn/car/UNI-T-2nd/",
    "changan-cs55-plus": "https://www.changan.com.cn/car/cs55plus-4nd",
    "deepal-s05": "https://www.deepal.com.cn/S05",
    "deepal-s07": "https://www.deepal.com.cn/S07",
    "deepal-s09": "https://www.deepal.com.cn/S09",
}

IMG_RE = re.compile(r"https?://[^\"')\s]+?\.(?:jpg|jpeg|png|webp)(?:\?[^\"')\s]*)?", re.I)
CSS_URL_RE = re.compile(r"url\([\"']?([^\"')]+)[\"']?\)", re.I)


def clean_url(url: str, base: str) -> str | None:
    url = url.strip()
    if not url or url.startswith("data:") or url.startswith("blob:"):
        return None
    if url.startswith("//"):
        url = "https:" + url
    return urljoin(base, url)


def image_size(path: Path) -> tuple[int, int] | None:
    try:
        with Image.open(path) as img:
            return img.size
    except Exception:
        return None


def download(url: str, dest: Path) -> tuple[bool, str]:
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 EvaAutoProImageBot/1.0"})
    try:
        with urlopen(req, timeout=20) as response:
            content_type = response.headers.get("content-type", "")
            if "image" not in content_type:
                return False, f"non-image content-type: {content_type}"
            data = response.read()
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
        size = image_size(dest)
        if not size:
            dest.unlink(missing_ok=True)
            return False, "downloaded file is not readable as an image"
        w, h = size
        if w < 1200 or h < 700:
            dest.unlink(missing_ok=True)
            return False, f"too small: {w}x{h}"
        return True, f"{w}x{h}"
    except Exception as exc:
        return False, str(exc)


async def collect_page_images(slug: str, url: str) -> dict:
    result = {"slug": slug, "page": url, "urls": [], "downloaded": [], "errors": []}
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page(viewport={"width": 1920, "height": 1080})
            await page.goto(url, wait_until="networkidle", timeout=60000)
            for _ in range(10):
                await page.mouse.wheel(0, 1400)
                await page.wait_for_timeout(900)

            candidates = await page.evaluate(
                """() => {
                    const urls = new Set();
                    const add = (value) => {
                      if (!value) return;
                      String(value).split(',').forEach(part => {
                        const token = part.trim().split(/\\s+/)[0];
                        if (token) urls.add(token);
                      });
                    };
                    document.querySelectorAll('img').forEach(img => {
                      add(img.currentSrc || img.src);
                      add(img.getAttribute('data-src'));
                      add(img.getAttribute('data-original'));
                      add(img.getAttribute('srcset'));
                    });
                    document.querySelectorAll('source').forEach(source => {
                      add(source.getAttribute('src'));
                      add(source.getAttribute('srcset'));
                    });
                    document.querySelectorAll('*').forEach(el => {
                      const bg = getComputedStyle(el).backgroundImage;
                      if (bg && bg !== 'none') urls.add(bg);
                    });
                    return Array.from(urls);
                }"""
            )
            html = await page.content()
            await browser.close()

        found = set()
        for raw in candidates:
            for css_url in CSS_URL_RE.findall(raw):
                fixed = clean_url(css_url, url)
                if fixed:
                    found.add(fixed)
            fixed = clean_url(raw, url)
            if fixed:
                found.add(fixed)
        for match in IMG_RE.findall(html):
            fixed = clean_url(match, url)
            if fixed:
                found.add(fixed)

        result["urls"] = sorted(found)
        out_dir = REAL_DIR / slug / "raw"
        for i, img_url in enumerate(result["urls"], 1):
            suffix = Path(urlparse(img_url).path).suffix.lower() or ".jpg"
            if suffix not in {".jpg", ".jpeg", ".png", ".webp"}:
                suffix = ".jpg"
            ok, detail = download(img_url, out_dir / f"official-{i:03d}{suffix}")
            if ok:
                result["downloaded"].append({"url": img_url, "file": f"official-{i:03d}{suffix}", "size": detail})
            else:
                result["errors"].append({"url": img_url, "reason": detail})
    except Exception as exc:
        result["errors"].append({"url": url, "reason": f"playwright failed: {exc}"})
    return result


async def main() -> None:
    # The task explicitly requires official-site attempts before fallback. Do
    # not inherit a stale local proxy that points to a closed desktop tunnel.
    for key in ("HTTP_PROXY", "HTTPS_PROXY", "ALL_PROXY", "http_proxy", "https_proxy", "all_proxy"):
        os.environ.pop(key, None)

    selected = sys.argv[1:] or list(MODELS)
    results = []
    for slug in selected:
        if slug not in MODELS:
            print(f"unknown slug: {slug}", file=sys.stderr)
            continue
        item = await collect_page_images(slug, MODELS[slug])
        print(f"{slug}: {len(item['downloaded'])} downloaded, {len(item['errors'])} errors")
        results.append(item)
    LOG_PATH.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"wrote {LOG_PATH}")


if __name__ == "__main__":
    asyncio.run(main())

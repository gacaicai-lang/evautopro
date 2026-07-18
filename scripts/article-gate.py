#!/usr/bin/env python3
"""Content publish gate for evautopro.com articles (src/data/news.ts).

Runs in CI before every deploy. HARD failures block the deploy; WARN items
are printed for the review step but do not block (legacy articles predate
some structural rules).

Origin: 2026-07-18. The site shipped articles containing fabricated company
credentials ("MOFCOM authorized exporter since 2018", invented dealer MoUs)
and FOB prices for models that don't exist in the catalog (UNI-K, CS75 Plus,
MG ZS...). Those were cleaned by hand; this gate exists so the same class of
defect can never silently ship again. Validated against history: this script
FAILS on the pre-cleanup file (git show a4d7a9a^:src/data/news.ts) and PASSES
on the cleaned one.

Usage:
    python3 scripts/article-gate.py               # gate src/data/news.ts
    python3 scripts/article-gate.py <file.ts>     # gate an arbitrary snapshot
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NEWS = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "src/data/news.ts")
CARS = os.path.join(ROOT, "src/data/cars.ts")
PUB = os.path.join(ROOT, "public")

hard, warn = [], []


def parse_entries(src):
    """Split news.ts into per-article chunks keyed by slug."""
    keys = [(m.group(1), m.start()) for m in re.finditer(r"^  '([a-z0-9-]+)': \{", src, re.M)]
    out = {}
    for i, (slug, start) in enumerate(keys):
        end = keys[i + 1][1] if i + 1 < len(keys) else len(src)
        out[slug] = src[start:end]
    return out


news_src = open(NEWS, encoding="utf-8").read()
cars_src = open(CARS, encoding="utf-8").read()
entries = parse_entries(news_src)
car_slugs = set(re.findall(r"slug: '([a-z0-9-]+)'", cars_src))
news_slugs = set(entries)

# ---------------------------------------------------------------- HARD 1
# First-person fabricated-credential claims. Educational mentions of MOFCOM/
# licences are fine; what must never ship is EV Auto Pro claiming a specific
# credential, MoU, or "since <year>" history for itself. Sentence-scoped.
CLAIM = re.compile(
    r"(?:EV Auto Pro|[Ww]e|[Oo]ur)[^.!?\n]{0,90}"
    r"(?:MOFCOM|AEO|MoU|authori[sz]ed (?:exporter|dealer)|dealer relationships? across)"
    r"|(?:MoU|MOFCOM|AEO|[Aa]uthori[sz]ed)[^.!?\n]{0,50}since \d{4}"
)
for slug, body in entries.items():
    for m in CLAIM.finditer(body):
        hard.append(f"[{slug}] fabricated-credential claim: ...{m.group(0)[:100]}...")

# ---------------------------------------------------------------- HARD 2
# Pricing quoted for models that are not in cars.ts. Mentioning a phantom
# model honestly ("ask us about UNI-K availability") is allowed; quoting a
# price/MOQ/lead-time for it is not.
PHANTOMS = [
    "UNI-K", "UNI-Z", "CS75 Plus", "CS35 Plus", "X5 Plus", "MG ZS",
    "Monjaro", "Emgrand",  # researched 2026-07-18: not yet publishable
]
for slug, body in entries.items():
    for line in body.split("\n"):
        if "$" not in line and "FOB" not in line and "MOQ" not in line:
            continue
        for name in PHANTOMS:
            if name in line and re.search(r"\$[\d,]+|FOB|MOQ \d", line):
                hard.append(f"[{slug}] price/terms quoted for non-catalog model {name}: {line.strip()[:110]}")

# ---------------------------------------------------------------- HARD 3
# Internal links must resolve.
for slug, body in entries.items():
    for target in re.findall(r"\]\(/cars/([a-z0-9-]+)/\)", body):
        if target not in car_slugs:
            hard.append(f"[{slug}] broken /cars/ link: {target}")
    for target in re.findall(r"\]\(/news/([a-z0-9-]+)/\)", body):
        if target not in news_slugs:
            hard.append(f"[{slug}] broken /news/ link: {target}")

# ---------------------------------------------------------------- HARD 4
# Every referenced image file must exist.
for slug, body in entries.items():
    heroes = re.findall(r"hero: '(/images/[^']+)'", body)
    inline = re.findall(r"!\[[^\]]*\]\((/images/[^)]+)\)", body)
    for img in heroes + inline:
        if not os.path.exists(PUB + img):
            hard.append(f"[{slug}] missing image file: {img}")

# ---------------------------------------------------------------- HARD 5
# related[] slugs must exist (an article pointing at a typo'd slug renders
# a dead related-articles block).
for slug, body in entries.items():
    m = re.search(r"related: \[([^\]]*)\]", body)
    if not m:
        hard.append(f"[{slug}] no related[] array")
        continue
    rels = re.findall(r"'([a-z0-9-]+)'", m.group(1))
    for r in rels:
        if r not in news_slugs:
            hard.append(f"[{slug}] related[] points at nonexistent article: {r}")

# ---------------------------------------------------------------- WARN
# Structural quality bar (site-content-engine skill). Hard for NEW content
# by review policy, but legacy articles predate these rules, so CI only warns.
for slug, body in entries.items():
    bm = re.search(r"body: `(.*?)`,\n    faqs:", body, re.S)
    if not bm:
        warn.append(f"[{slug}] could not parse body")
        continue
    text = bm.group(1)
    opening = text.split("##")[0].strip()
    if len(opening) < 120:
        warn.append(f"[{slug}] opening before first H2 is thin ({len(opening)} chars) — must directly answer the title")
    elif not re.search(r"\d", opening):
        warn.append(f"[{slug}] opening has no concrete number")
    faqs = re.findall(r"\{ q: '(?:[^'\\]|\\.)*', a: '((?:[^'\\]|\\.)*)'", body)
    if len(faqs) < 3:
        warn.append(f"[{slug}] only {len(faqs)} FAQs (want 3-5)")
    for a in faqs:
        w = len(a.split())
        if w < 15:
            warn.append(f"[{slug}] FAQ answer too thin ({w} words): {a[:60]}...")
    if not re.search(r"wa\.me|mailto:", text):
        warn.append(f"[{slug}] no WhatsApp/email CTA")
    if not re.search(r"\]\(/cars/[a-z0-9-]+/\)", text):
        warn.append(f"[{slug}] no product-page link in body")

# Cross-article template smell: 12-word shingles shared by 3+ articles
# (CTA boilerplate is exempted — it is intentionally consistent).
shingles = {}
for slug, body in entries.items():
    bm = re.search(r"body: `(.*?)`,\n    faqs:", body, re.S)
    if not bm:
        continue
    text = re.sub(r"\*\*Talk to us[^`]*", "", bm.group(1))
    words = re.sub(r"[^a-z0-9 ]", " ", text.lower()).split()
    for i in range(len(words) - 11):
        sh = " ".join(words[i : i + 12])
        shingles.setdefault(sh, set()).add(slug)
seen_pairs = set()
for sh, slugs in shingles.items():
    if len(slugs) >= 3:
        key = tuple(sorted(slugs))
        if key not in seen_pairs:
            seen_pairs.add(key)
            warn.append(f"template phrase in {len(slugs)} articles ({', '.join(sorted(slugs)[:3])}...): \"{sh[:70]}\"")

# ---------------------------------------------------------------- report
for w in warn:
    print(f"WARN  {w}")
print(f"\n{len(entries)} articles checked: {len(hard)} hard failures, {len(warn)} warnings")
if hard:
    print("\nDEPLOY BLOCKED — fix these before pushing:")
    for h in hard:
        print(f"FAIL  {h}")
    sys.exit(1)
print("GATE PASSED")

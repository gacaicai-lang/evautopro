# Image tasks for Codex — evautopro.com

Master list of every photo the site needs, with format, naming and location.
Prioritised: **A** breaks the site's credibility today, **B** are empty
placeholder slots, **C** is polish.

## Conventions (apply to every image)

- **Format:** `.webp`, quality ~82, no alpha.
- **Size:** long edge ~1600px (hero/wide ~1920px). Keep under ~250KB.
- **No text baked in:** no Chinese marketing copy, no price captions, no
  watermarks, no dealer plate numbers, no OEM logos you don't have rights to.
- **Real & licensed only:** company-owned or properly licensed photos. Do NOT
  scrape OEM sites or strip watermarks — that already caused problems here.
- **Keep the exact filename** when replacing an existing file (the site
  references it by that path). For new slots, replace the `.svg` placeholder
  with a `.webp` of the **same base name**, then tell me so I flip the one
  `src` extension in code (or keep `.svg`-named if easier and I'll leave it).

---

## A. Car detail gallery — "Interior" tab shows EXTERIOR photos (fix first)

On every `/cars/<model>/` page the **Interior** gallery tab pulls from the
`-console-*` and `-space-*` files, but those files are actually **exterior
shots** — several also have Chinese marketing text and blur smears baked in.

**Replace all 48 files** in `public/images/vehicles/` with real **interior**
photos (dashboard, cockpit, seats, cabin space) of the matching model:

```
evautopro-<slug>-console-01.webp   → real cockpit / dashboard / center console
evautopro-<slug>-console-02.webp
evautopro-<slug>-console-03.webp
evautopro-<slug>-space-01.webp     → real cabin / seats / rear space
evautopro-<slug>-space-02.webp
evautopro-<slug>-space-03.webp
```

for each `<slug>`:
`changan-uni-t, changan-cs55-plus, jetour-t2, geely-coolray, geely-atlas,
deepal-s05, deepal-s07, deepal-s09` (6 files × 8 models = 48).

## C. Car gallery exterior/detail cleanup (same folder)

Many `-appearance-*` and `-other-*` files (Jetour T2 especially) have Chinese
ad text ("向往 就前往 / 13.99万") and blur smears. Replace any with baked-in
text or visible blur damage with clean exterior/detail photos, same filenames.

---

## B. Empty placeholder slots (currently grey "Real photo to be added" frames)

### Services page — `public/images/services/`
5 cards on `/services/`. 16:10, ~1600×1000.

| File | Photo |
|---|---|
| `export-process.svg` | Export paperwork / a deal being reviewed, or cars staged for a China export order |
| `shipping.svg` | Cars on a RoRo vessel / car carrier / containers at port |
| `inspection.svg` | A real vehicle being inspected (walk-around, under-hood, QC) — NOT electronics |
| `financing.svg` | Trade-finance / L-C / signing context (professional, not stock cash) |
| `after-sales.svg` | Genuine spare parts / parts warehouse / service |

### About page — `public/images/about/`
See `public/images/about/README-for-codex.md`. Slots: `loading-1/2/3.svg`
(cars loading onto RoRo / container / carrier), `team.svg` (real team group
photo, Guangzhou HQ), `office.svg`, `warehouse.svg`.

### Founder & contact
`/about/founder/` and `/contact/` currently show a plain "C" initial where the
founder photo goes. A real photo of the founder (with consent) replaces it —
tell me and I'll wire the `src`.

---

## What I (Claude) still do after you deliver

For any file you save with a **new extension** (e.g. `.webp` replacing a
`.svg` slot), point me at it and I flip the one `src` line in
`src/pages/...` and `src/data/...` and redeploy. Same-name replacements of the
existing `.webp` gallery files need no code change — they go live on the next
deploy automatically.

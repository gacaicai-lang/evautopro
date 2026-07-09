# About-page photo slots — replace these placeholders with real photos

Each `.svg` in this folder is a labeled placeholder rendered in a real
section on `/about/`. Replace each with a **real photograph** to give the
About page authentic human/operational presence (this is the missing
"real photos" the site owner asked for).

## How to replace (keep the wiring intact)

The About page references these by the exact paths below. Two options:

1. **Same filename, same extension** — save the real photo as an optimized
   `.svg`-named file? No. Instead:
2. **Save as `.webp` with the same base name** (recommended), then update the
   one `aboutPhotos` data block at the top of
   `src/pages/about/index.astro` to point at the new extension. Each slot is
   a single `src:` string — a one-line edit per photo.

Target ~1600px on the long edge, compressed webp, no text/watermark overlays,
no Chinese marketing text baked in.

## What each slot needs

| File | Section on /about/ | Wanted photo |
|---|---|---|
| `loading-1.svg` | "From China to Your Port" | Passenger cars **driving onto / loaded on a RoRo vessel** (the key shot the owner asked for) |
| `loading-2.svg` | "From China to Your Port" | Cars **being loaded into a shipping container** (or secured inside one) |
| `loading-3.svg` | "From China to Your Port" | Cars on a **car-carrier truck or block train** heading to port |
| `team.svg` | "Our Team" | **Real group photo** of the EV Auto Pro team at the Guangzhou office (staff consent required) |
| `office.svg` | "Inside Our Operation" | The **Guangzhou office** — real workspace |
| `warehouse.svg` | "Inside Our Operation" | The **bonded warehouse** with real vehicle stock |

Only use photos the company owns or is licensed to use — no scraped or
watermark-removed images (a prior issue on this site).

#!/usr/bin/env python3
"""Generate branded SVG infographics for news articles from real data.
Output: public/images/news/*.svg (crisp, on-brand, final assets — not placeholders).

Brand palette: red #e53e2f, ink-900 #18181b, ink-600 #52525b, ink-500 #71717a,
ink-300 #d4d4d8, ink-200 #e4e4e7, ink-50 #fafafa, white. Single-hue / single-series,
so no categorical CVD concern (per dataviz skill).
"""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public/images/news"
OUT.mkdir(parents=True, exist_ok=True)

RED = "#e53e2f"; INK9 = "#18181b"; INK6 = "#52525b"; INK5 = "#71717a"
INK3 = "#d4d4d8"; INK2 = "#e4e4e7"; INK05 = "#fafafa"
FONT = "-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"


def esc(s): return s.replace("&", "&amp;").replace("<", "&lt;")


# ---------------------------------------------------------------------------
# 1. Russia — Chinese SUV power vs the 160 hp recycling-fee line
# ---------------------------------------------------------------------------
def russia_160hp():
    models = [  # (label, PS) ascending
        ("Geely Coolray", 177), ("Changan UNI-T", 188), ("Changan CS55 Plus", 188),
        ("Geely Atlas", 218), ("Deepal S05", 218), ("Deepal S07", 252),
        ("Jetour T2", 462), ("Deepal S09", 462),
    ]
    W, H = 820, 520
    x0, xr = 176, 60           # left label margin, right value margin
    plot_w = W - x0 - xr
    y0, row = 96, 44
    bar_h = 24
    vmax = 480                 # headroom above 462
    px = plot_w / vmax
    line_ps = 162              # 160 hp ≈ 162 PS
    line_x = x0 + line_ps * px

    s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" font-family="{FONT}">']
    s.append(f'<rect width="{W}" height="{H}" fill="white"/>')
    # title + subtitle
    s.append(f'<text x="32" y="42" font-size="21" font-weight="700" fill="{INK9}">Chinese SUV power vs Russia&#39;s 160&#8202;hp line</text>')
    s.append(f'<text x="32" y="66" font-size="13.5" fill="{INK5}">Engine power in PS (metric hp). From Dec 2025 the recycling fee&#39;s preferential rate stops at 160&#8202;hp.</text>')
    # reference line + label
    s.append(f'<line x1="{line_x:.1f}" y1="{y0-14}" x2="{line_x:.1f}" y2="{y0+len(models)*row-row+bar_h+6}" stroke="{INK9}" stroke-width="2" stroke-dasharray="5 4"/>')
    s.append(f'<text x="{line_x+7:.1f}" y="{y0-18}" font-size="12.5" font-weight="700" fill="{INK9}">160&#8202;hp preferential line</text>')
    # bars
    for i, (label, ps) in enumerate(models):
        y = y0 + i * row
        bw = ps * px
        s.append(f'<text x="{x0-12}" y="{y+bar_h/2+4:.1f}" font-size="13" fill="{INK6}" text-anchor="end">{esc(label)}</text>')
        # rounded data-end (4px) anchored to baseline at x0
        s.append(f'<rect x="{x0}" y="{y}" width="{bw:.1f}" height="{bar_h}" rx="4" fill="{RED}"/>')
        s.append(f'<text x="{x0+bw+8:.1f}" y="{y+bar_h/2+4:.1f}" font-size="12.5" font-weight="700" fill="{INK9}">{ps} PS</text>')
    # footer note
    s.append(f'<text x="32" y="{H-18}" font-size="11.5" fill="{INK5}">Every current EV Auto Pro SUV sits above the line — budget the fee per model. Source: EV Auto Pro catalog.</text>')
    s.append('</svg>')
    (OUT / "russia-160hp.svg").write_text("\n".join(s))
    print("russia-160hp.svg")


# ---------------------------------------------------------------------------
# 2. Kazakhstan — landed-cost breakdown of a BEV (Deepal S05)
# ---------------------------------------------------------------------------
def kazakhstan_cost():
    # (label, value, color) — composition of landed cost, BEV, indicative USD
    parts = [
        ("FOB China", 19200, RED),
        ("Freight + insurance", 2000, INK6),
        ("Import duty (0%, BEV/WTO)", 0, INK3),
        ("VAT 16%", 3390, INK9),
    ]
    total = sum(v for _, v, _ in parts)
    W, H = 820, 360
    x0, xr = 32, 32
    bar_x, bar_y = 32, 150
    bar_w = W - bar_x - xr
    bar_h = 62
    scale = bar_w / total

    s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" font-family="{FONT}">']
    s.append(f'<rect width="{W}" height="{H}" fill="white"/>')
    s.append(f'<text x="32" y="42" font-size="21" font-weight="700" fill="{INK9}">Landed cost of a battery-electric SUV to Kazakhstan</text>')
    s.append(f'<text x="32" y="66" font-size="13.5" fill="{INK5}">Indicative, Deepal S05, 2026 rates. Recycling fee (&#1091;&#1090;&#1080;&#1083;&#1100;&#1089;&#1073;&#1086;&#1088;) added separately — confirm current MRP.</text>')
    # segmented bar with 2px white gaps
    x = bar_x
    for label, val, color in parts:
        if val == 0:
            continue
        w = val * scale
        s.append(f'<rect x="{x:.1f}" y="{bar_y}" width="{w-2:.1f}" height="{bar_h}" fill="{color}"/>')
        # segment value centered if wide enough
        if w > 70:
            s.append(f'<text x="{x+w/2:.1f}" y="{bar_y+bar_h/2+5:.1f}" font-size="13" font-weight="700" fill="white" text-anchor="middle">${val:,}</text>')
        x += w
    # legend row
    lx, ly = 32, 250
    for label, val, color in parts:
        sw = 14
        s.append(f'<rect x="{lx}" y="{ly-11}" width="{sw}" height="{sw}" rx="3" fill="{color}"/>')
        txt = f"{label}  ${val:,}" if val else f"{label}"
        s.append(f'<text x="{lx+sw+7}" y="{ly+1}" font-size="12.5" fill="{INK6}">{esc(txt)}</text>')
        ly += 26
    # total callout
    s.append(f'<text x="{W-xr}" y="132" font-size="13" fill="{INK5}" text-anchor="end">Indicative landed, before recycling fee</text>')
    s.append(f'<text x="{W-xr}" y="118" font-size="26" font-weight="700" fill="{RED}" text-anchor="end">~${total:,}</text>')
    s.append(f'<text x="32" y="{H-18}" font-size="11.5" fill="{INK5}">VAT applies to CIF + duty. Orientation only — not a final quote. Source: EV Auto Pro; Kazakhstan customs rules 2026.</text>')
    s.append('</svg>')
    (OUT / "kazakhstan-cost.svg").write_text("\n".join(s))
    print("kazakhstan-cost.svg")


if __name__ == "__main__":
    russia_160hp()
    kazakhstan_cost()
    print("Done ->", OUT)

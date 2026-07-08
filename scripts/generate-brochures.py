#!/usr/bin/env python3
"""Generate per-vehicle PDF brochures from src/data/cars.ts into public/brochures/.

Parses the cars.ts data with regexes (the file is data-only TS), renders a
2-page A4 brochure: hero image + key specs + pricing table + equipment +
export facts + contact block. Re-run after editing cars.ts.
"""
import re, os, json, sys
from pathlib import Path
from fpdf import FPDF
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
CARS_TS = (ROOT / 'src/data/cars.ts').read_text(encoding='utf-8')
OUT = ROOT / 'public/brochures'
OUT.mkdir(exist_ok=True)

BRAND_RED = (229, 62, 47)
INK = (24, 24, 27)
GREY = (113, 113, 122)

def field(block, name, pattern=r"'([^']*)'"):
    m = re.search(rf"{name}:\s*{pattern}", block)
    return m.group(1) if m else None

def num(block, name):
    m = re.search(rf"{name}:\s*([0-9.]+)", block)
    return float(m.group(1)) if m else None

def strlist(block, name):
    m = re.search(rf"{name}:\s*\[([^\]]*)\]", block)
    if not m: return []
    return re.findall(r"'([^']*)'", m.group(1))

# Split per-car blocks on top-level keys like 'changan-uni-t': {
car_blocks = re.split(r"\n  '([a-z0-9-]+)':\s*\{", CARS_TS)[1:]
cars = list(zip(car_blocks[0::2], car_blocks[1::2]))

def make_pdf(slug, block):
    brand = field(block, 'brand')
    model = field(block, 'model')
    year = int(num(block, 'year') or 2026)
    subtitle = field(block, 'subtitle') or ''
    body_type = field(block, 'body_type')
    fuel = field(block, 'fuel_type')
    drive = field(block, 'drive')
    seats = int(num(block, 'seats') or 5)
    hero = field(block, 'hero_image')
    fob_min, fob_max = num(block, 'fob_min'), num(block, 'fob_max')
    dims = field(block, 'dimensions')
    cif_rows = re.findall(r"\{ country: '([^']*)', min: ([0-9]+), max: ([0-9]+) \}", block)
    specs = {
        'Power': f"{int(num(block,'motor_ps'))} PS" if num(block,'motor_ps') else None,
        'Torque': f"{int(num(block,'torque_nm'))} N·m" if num(block,'torque_nm') else None,
        '0-100 km/h': f"{num(block,'accel')} s" if num(block,'accel') else None,
        'Top speed': f"{int(num(block,'top_speed'))} km/h" if num(block,'top_speed') else None,
        'Battery': f"{num(block,'battery_kwh')} kWh" if num(block,'battery_kwh') else None,
        'Range (CLTC)': f"{int(num(block,'range_cltc'))} km" if num(block,'range_cltc') else None,
        'Range (WLTP)': f"{int(num(block,'range_wltp'))} km" if num(block,'range_wltp') else None,
        'Transmission': field(block, 'transmission'),
        'Dimensions (mm)': dims,
        'Wheelbase': f"{int(num(block,'wheelbase'))} mm" if num(block,'wheelbase') else None,
        'Curb weight': f"{int(num(block,'weight'))} kg" if num(block,'weight') else None,
        'Tires': field(block, 'tires'),
        'Drive / Seats': f"{drive} / {seats} seats",
        'Fuel type': 'Gasoline (ICE)' if fuel == 'ICE' else fuel,
    }
    stock = int(num(block, 'stock_units') or 0)
    lead = int(num(block, 'lead_time_days') or 0)
    moq = int(num(block, 'moq') or 1)
    certs = strlist(block, 'certifications')
    shipping = strlist(block, 'shipping_methods')
    payment = strlist(block, 'payment_terms')
    markets = strlist(block, 'supported_markets')
    feats = {}
    for cat in ('exterior', 'interior', 'safety'):
        feats[cat] = strlist(block, cat)

    pdf = FPDF('P', 'mm', 'A4')
    pdf.set_auto_page_break(True, margin=16)
    pdf.add_page()

    # Header band
    pdf.set_fill_color(*INK)
    pdf.rect(0, 0, 210, 26, 'F')
    pdf.set_xy(12, 7)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font('helvetica', 'B', 16)
    pdf.cell(0, 6, 'EV AUTO PRO', ln=1)
    pdf.set_x(12)
    pdf.set_font('helvetica', '', 9)
    pdf.set_text_color(200, 200, 205)
    pdf.cell(0, 5, 'China NEV Export Specialist  ·  evautopro.com', ln=1)

    # Title
    pdf.set_xy(12, 32)
    pdf.set_text_color(*INK)
    pdf.set_font('helvetica', 'B', 22)
    pdf.cell(0, 9, f'{year} {brand} {model}', ln=1)
    pdf.set_x(12)
    pdf.set_font('helvetica', '', 11)
    pdf.set_text_color(*GREY)
    safe_subtitle = subtitle.encode('latin-1', 'ignore').decode('latin-1')
    safe_subtitle = re.sub(r'(\s*·\s*)+', ' · ', safe_subtitle).strip(' ·')
    line = safe_subtitle if body_type.lower() in safe_subtitle.lower() else f'{safe_subtitle}  ·  {body_type}'
    pdf.cell(0, 6, line, ln=1)

    # Hero image (convert webp -> temp jpg)
    img_path = ROOT / 'public' / hero.lstrip('/')
    y_img = 52
    if img_path.exists():
        im = Image.open(img_path).convert('RGB')
        tmp = f'/tmp/brochure-{slug}.jpg'
        im.save(tmp, 'JPEG', quality=88)
        w, h = im.size
        draw_w = 186
        draw_h = draw_w * h / w
        if draw_h > 92:
            draw_h = 92
            draw_w = draw_h * w / h
        pdf.image(tmp, x=(210 - draw_w) / 2, y=y_img, w=draw_w, h=draw_h)
        y = y_img + draw_h + 8
    else:
        y = y_img

    # Price band
    pdf.set_xy(12, y)
    pdf.set_fill_color(254, 242, 240)
    pdf.rect(12, y, 186, 16, 'F')
    pdf.set_xy(16, y + 3)
    pdf.set_font('helvetica', 'B', 14)
    pdf.set_text_color(*BRAND_RED)
    pdf.cell(90, 10, f'US${int(fob_min):,} - ${int(fob_max):,}  FOB China')
    pdf.set_font('helvetica', '', 9)
    pdf.set_text_color(*GREY)
    pdf.cell(0, 10, f'MOQ {moq}  ·  {stock} units in stock  ·  {lead}-day lead time')
    y += 22

    # Specs two-column table
    pdf.set_xy(12, y)
    pdf.set_font('helvetica', 'B', 12)
    pdf.set_text_color(*INK)
    pdf.cell(0, 7, 'Technical Specifications', ln=1)
    rows = [(k, v) for k, v in specs.items() if v]
    col_w, row_h = 93, 6.4
    half = (len(rows) + 1) // 2
    y0 = pdf.get_y() + 1
    for col, chunk in enumerate((rows[:half], rows[half:])):
        for i, (k, v) in enumerate(chunk):
            pdf.set_xy(12 + col * col_w, y0 + i * row_h)
            pdf.set_font('helvetica', '', 8.5)
            pdf.set_text_color(*GREY)
            pdf.cell(34, row_h, k)
            pdf.set_font('helvetica', 'B', 8.5)
            pdf.set_text_color(*INK)
            pdf.cell(col_w - 36, row_h, str(v))
    pdf.set_y(y0 + half * row_h + 4)

    # Page 2: pricing by destination + equipment + export facts + contact
    pdf.add_page()
    pdf.set_xy(12, 14)
    pdf.set_font('helvetica', 'B', 12)
    pdf.set_text_color(*INK)
    pdf.cell(0, 7, 'Export Pricing by Destination (USD, reference)', ln=1)
    pdf.set_font('helvetica', 'B', 8.5)
    pdf.set_x(12)
    pdf.set_fill_color(244, 244, 245)
    pdf.cell(110, 7, '  Incoterm / Destination', fill=True)
    pdf.cell(76, 7, 'Price range', fill=True, ln=1)
    pdf.set_x(12)
    pdf.set_font('helvetica', 'B', 9)
    pdf.set_text_color(*BRAND_RED)
    pdf.cell(110, 7, '  FOB China (base)')
    pdf.cell(76, 7, f'${int(fob_min):,} - ${int(fob_max):,}', ln=1)
    pdf.set_text_color(*INK)
    pdf.set_font('helvetica', '', 9)
    for country, mn, mx in cif_rows:
        pdf.set_x(12)
        safe_country = country.encode('latin-1', 'ignore').decode('latin-1')
        pdf.cell(110, 7, f'  CIF {safe_country}')
        pdf.cell(76, 7, f'${int(mn):,} - ${int(mx):,}', ln=1)
    pdf.set_x(12)
    pdf.set_font('helvetica', 'I', 8)
    pdf.set_text_color(*GREY)
    pdf.cell(0, 6, 'Final quote depends on configuration, quantity and current freight rates. Any port worldwide on request.', ln=1)
    pdf.ln(3)

    # Equipment
    pdf.set_x(12)
    pdf.set_font('helvetica', 'B', 12)
    pdf.set_text_color(*INK)
    pdf.cell(0, 7, 'Standard & Available Equipment', ln=1)
    for title, items in (('Exterior', feats['exterior']), ('Interior & Comfort', feats['interior']), ('Safety & Assistance', feats['safety'])):
        pdf.set_x(12)
        pdf.set_font('helvetica', 'B', 9)
        pdf.set_text_color(*BRAND_RED)
        pdf.cell(0, 6, title, ln=1)
        pdf.set_x(12)
        pdf.set_font('helvetica', '', 9)
        pdf.set_text_color(*INK)
        safe_items = '  ·  '.join(items).encode('latin-1', 'ignore').decode('latin-1')
        pdf.multi_cell(186, 5.5, safe_items)
        pdf.ln(1)
    pdf.ln(2)

    # Export facts
    pdf.set_x(12)
    pdf.set_font('helvetica', 'B', 12)
    pdf.cell(0, 7, 'Export Facts', ln=1)
    facts = [
        ('Certification', '  ·  '.join(certs)),
        ('Shipping', '  /  '.join(shipping) + '  -  from Shanghai / Ningbo / Shenzhen / Tianjin / Qingdao'),
        ('Payment terms', '  ·  '.join(payment)),
        ('Active markets', ', '.join(markets)),
        ('Inspection', 'EV Auto Pro Export PDI - full photo & video report of your actual units before loading'),
        ('Documents', 'Commercial Invoice, Packing List, B/L, Certificate of Origin, Export License, CoC'),
    ]
    for k, v in facts:
        pdf.set_x(12)
        pdf.set_font('helvetica', 'B', 9)
        pdf.set_text_color(*GREY)
        pdf.cell(34, 6, k)
        pdf.set_font('helvetica', '', 9)
        pdf.set_text_color(*INK)
        pdf.multi_cell(152, 6, v)

    # Contact band
    pdf.set_y(-42)
    pdf.set_fill_color(*INK)
    pdf.rect(0, pdf.get_y(), 210, 42, 'F')
    pdf.set_xy(12, pdf.get_y() + 8)
    pdf.set_font('helvetica', 'B', 12)
    pdf.set_text_color(255, 255, 255)
    pdf.cell(0, 7, 'Get your quote within 24 hours', ln=1)
    pdf.set_x(12)
    pdf.set_font('helvetica', '', 10)
    pdf.set_text_color(220, 220, 225)
    pdf.cell(0, 7, 'WhatsApp / Phone: +86 159 6446 7914      Email: cai@evautopro.com', ln=1)
    pdf.set_x(12)
    pdf.cell(0, 7, f'evautopro.com/cars/{slug}/      Shandong Wencai Import & Export Co., Ltd.', ln=1)

    out = OUT / f'evautopro-{slug}.pdf'
    pdf.output(str(out))
    return out

for slug, block in cars:
    p = make_pdf(slug, block)
    print(f'{p.relative_to(ROOT)}  {p.stat().st_size // 1024} KB')
print('Done.')

import json, re
import sys
BR = json.load(open(sys.argv[1] if len(sys.argv) > 1 else '/Users/philip/Claude/ev-research-data/new-brand-facts-round2.json'))
def E(s): return str(s).replace("\\","\\\\").replace("'","\\'")

TEMPLATE = '''---
import BaseLayout from '../../layouts/BaseLayout.astro';

// {NAME} ({CN}) brand page — export-sourcing framing (honest template, built 2026-07-23).
// Presents evautopro as sourcing {NAME} for export; does NOT raise dealer-authorization
// either way (per Philip). Discipline: NO fabricated MoU/cases/stock/FOB — models are
// quote-on-request; all brand facts verified via research (see ev-research-data/new-brand-facts-round2.json).
// Model photos: set image/imageType per model when real (or labeled-illus) images land.

const brand = {{ name: '{NAME}', cn: '{CN}', slug: '{SLUG}', tagline: '{TAGLINE}', hero_image: '/images/faq-sourcing.webp' }};
const heroBadges = [{BADGES}];
const stats = [{STATS}];
const brandStory = `{STORY}`;
const models = [{MODELS}];
const advantages = [{ADV}];
const markets = [{MARKETS}];
const brandFaqs = [{FAQS}];
---

<BaseLayout title="{NAME} ({CN}) Export Sourcing from China | EV Auto Pro" description="{META}">
  <section class="relative bg-ink-900 overflow-hidden">
    <div class="absolute inset-0"><img src={{brand.hero_image}} alt="China NEV export sourcing" class="w-full h-full object-cover opacity-30" /><div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/40"></div></div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-40">
      <p class="text-brand-500 font-bold text-sm uppercase tracking-widest mb-4">{{brand.cn}} · {{brand.name}}</p>
      <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">{{brand.tagline}}</h1>
      <div class="flex flex-wrap gap-3 mb-10">{{heroBadges.map(b => (<span class="px-4 py-2 bg-white/10 border border-white/20 text-white text-sm rounded-full">{{b}}</span>))}}</div>
      <div class="flex flex-wrap gap-3">
        <a href={{`/contact/quote/?brand=${{encodeURIComponent(brand.name)}}`}} class="inline-flex items-center px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors">Request a {{brand.name}} Quote</a>
        <a href={{`https://wa.me/8615964467914?text=${{encodeURIComponent('Hi, I would like to source ' + brand.name + ' for export. Can you share availability and a quote?')}}`}} class="inline-flex items-center px-8 py-4 bg-white hover:bg-ink-100 text-ink-900 font-semibold rounded-lg transition-colors">💬 WhatsApp Cai</a>
      </div>
    </div>
  </section>
  <section class="py-12 bg-white border-b border-ink-200"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 lg:grid-cols-4 gap-8">{{stats.map(s => (<div><div class="text-3xl lg:text-4xl font-bold text-brand-500">{{s.num}}</div><div class="text-sm font-semibold text-ink-900 mt-1">{{s.label}}</div><div class="text-xs text-ink-500">{{s.sub}}</div></div>))}}</div></div></section>
  <section class="py-24 lg:py-32"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><p class="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-2">About the Brand</p><h2 class="text-3xl lg:text-4xl font-bold text-ink-900 mb-8">Who is {{brand.name}}?</h2>{{brandStory.split('\\n\\n').map(p => (<p class="text-base text-ink-700 leading-relaxed mb-5">{{p}}</p>))}}</div></section>
  <section class="py-16 bg-ink-50"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid sm:grid-cols-[80px_1fr] gap-6 items-start"><div class="w-20 h-20 rounded-2xl bg-brand-500 flex items-center justify-center text-4xl">📦</div><div><h3 class="text-2xl font-bold text-ink-900 mb-2">How EV Auto Pro sources {{brand.name}} for export</h3><p class="text-base text-ink-700 leading-relaxed">For dealers and fleet buyers who want {{brand.name}} units for export, we handle procurement with factory-traceable invoicing, export and destination-market documentation (EAC / GCC / INMETRO), and shipping (RoRo, container, or block train). We quote real availability and landed cost per confirmed order — so the number you get is one we can actually hold to.</p></div></div></div></section>
  <section id="models" class="py-24 lg:py-32"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="mb-12"><p class="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-2">Lineup</p><h2 class="text-3xl lg:text-4xl font-bold text-ink-900">{{brand.name}} models we can source</h2><p class="text-sm text-ink-500 mt-3 max-w-2xl">We quote availability, specs and landed cost per confirmed configuration — request a quote for your market.</p></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{{models.map(m => (<a href={{`/contact/quote/?brand=${{encodeURIComponent(brand.name)}}&model=${{encodeURIComponent(m.name)}}`}} class="group block bg-white border border-ink-200 hover:border-brand-500 hover:shadow-lg rounded-xl overflow-hidden transition-all">{{m.image && (<div class="relative aspect-[3/2] bg-ink-100 overflow-hidden"><img src={{m.image}} alt={{m.name + (m.imageType === 'illus' ? ' — illustration' : ' — photo')}} class="w-full h-full object-cover" loading="lazy" />{{m.imageType === 'illus' && (<span class="absolute bottom-2 right-2 px-2 py-0.5 bg-ink-900/70 text-white text-[10px] font-medium rounded backdrop-blur-sm">Illustration</span>)}}</div>)}}<div class="p-6"><div class="flex items-center gap-2 mb-3"><span class="px-2 py-0.5 bg-ink-100 text-ink-600 text-xs rounded">{{m.body}}</span><span class="px-2 py-0.5 bg-brand-50 text-brand-700 text-xs rounded">{{m.fuel}}</span></div><h3 class="text-xl font-semibold text-ink-900 group-hover:text-brand-500 transition-colors mb-2">{{m.name}}</h3><p class="text-sm text-ink-600 leading-relaxed mb-4">{{m.note}}</p><span class="inline-flex items-center text-sm font-semibold text-brand-500">Request a quote →</span></div></a>))}}</div></div></section>
  <section class="py-24 lg:py-32 bg-ink-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><p class="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-2">Why {{brand.name}}</p><h2 class="text-3xl lg:text-4xl font-bold text-ink-900">Why dealers ask us for {{brand.name}}</h2></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{{advantages.map(a => (<div class="bg-white border border-ink-200 rounded-2xl p-8 hover:border-brand-500 hover:shadow-md transition-all"><div class="text-4xl mb-4">{{a.icon}}</div><h3 class="text-base font-bold text-ink-900 mb-2">{{a.title}}</h3><p class="text-sm text-ink-600 leading-relaxed">{{a.desc}}</p></div>))}}</div></div></section>
  <section class="py-24 lg:py-32"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="mb-16"><p class="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-2">Where {{brand.name}} Is Established</p><h2 class="text-3xl lg:text-4xl font-bold text-ink-900">{{brand.name}}'s real overseas markets</h2><p class="text-sm text-ink-500 mt-3 max-w-2xl">Publicly reported brand presence in regions EV Auto Pro serves. Confirm current availability for your specific country with us before ordering.</p></div><div class="grid grid-cols-2 lg:grid-cols-5 gap-5">{{markets.map(m => (<div class="bg-white border border-ink-200 rounded-xl p-6"><div class="text-xs text-ink-500 font-semibold uppercase tracking-wider mb-1">{{m.code}}</div><h3 class="text-lg font-bold text-ink-900">{{m.name}}</h3><p class="text-xs text-brand-500 font-semibold mt-2">{{m.stat}}</p></div>))}}</div></div></section>
  <section class="py-24 lg:py-32 bg-ink-50"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><p class="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-2">{{brand.name}} FAQ</p><h2 class="text-3xl lg:text-4xl font-bold text-ink-900">Common {{brand.name}} questions</h2></div><div class="space-y-3">{{brandFaqs.map(f => (<details class="group bg-white border border-ink-200 rounded-xl overflow-hidden hover:border-brand-500 transition-colors"><summary class="flex items-start justify-between gap-4 cursor-pointer p-5 list-none"><span class="font-semibold text-base text-ink-900 flex-1 group-open:text-brand-500 transition-colors">{{f.q}}</span><svg class="flex-shrink-0 w-5 h-5 text-ink-500 group-open:rotate-180 transition-transform mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></summary><div class="px-5 pb-5 pt-1 text-sm text-ink-700 leading-relaxed border-t border-ink-100"><div class="pt-4">{{f.a}}</div></div></details>))}}</div></div></section>
  <section class="py-24 lg:py-32 bg-ink-900 relative overflow-hidden"><div class="absolute inset-0 opacity-10"><img src="/images/faq-logistics.webp" alt="" class="w-full h-full object-cover" /></div><div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">Source {{brand.name}} from China</h2><p class="text-lg text-ink-300 mb-10 max-w-2xl mx-auto">Export procurement, documentation &amp; shipping · real landed-cost quote for your market</p><div class="flex flex-wrap justify-center gap-3"><a href={{`/contact/quote/?brand=${{encodeURIComponent(brand.name)}}`}} class="inline-flex items-center px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors">Request a Quote</a><a href={{`https://wa.me/8615964467914?text=${{encodeURIComponent('Hi, I would like to source ' + brand.name + ' for export.')}}`}} class="inline-flex items-center px-8 py-4 bg-white hover:bg-ink-100 text-ink-900 font-semibold rounded-lg transition-colors">💬 WhatsApp Cai</a></div></div></section>
  <script type="application/ld+json" set:html={{JSON.stringify({{ '@context':'https://schema.org','@type':'Brand', name: brand.name, alternateName: brand.cn, description: brandStory.replace(/\\n/g,' '), url: `https://evautopro.com/brands/${{brand.slug}}/` }})}} />
</BaseLayout>
'''

for b in BR:
    slug=b['slug']; name=b['brand_en'].split(' (')[0]
    badges=", ".join(f"'{E(x)}'" for x in b['badges'])
    ym = re.search(r"(19|20)\d{2}", b['founded'])
    founded_yr = ym.group(0) if ym else 'Est.'
    stats=f"{{ num: '{founded_yr}', label: 'Brand Founded', sub: '{E(b['hq'].split(',')[0])}' }}, "
    stats+=f"{{ num: 'NEV', label: 'Core Focus', sub: '{E(b['badges'][1])}' }}, "
    stats+=f"{{ num: 'Export', label: 'Real Footprint', sub: '{E(b['markets'][0]['name'])} +' }}, "
    stats+=f"{{ num: '{len(b['models'])}+', label: 'Models Sourceable', sub: 'On request' }}"
    story_bits = [b['positioning'], b['export_markets'][:400]]
    if b.get('official_export_status') == 'parallel-only':
        story_bits.append(b['official_export_note'])
    story_bits.append("EV Auto Pro sources " + name + " from China for export. For dealers and fleet buyers we handle procurement with factory-traceable invoicing, export and destination-market documentation (EAC / GCC / INMETRO), and shipping. Ask us for current availability and a landed-cost quote for your market.")
    story = E("\n\n".join(story_bits))
    models=", ".join(f"{{ name: '{E(m['name'])}', body: '{E(m['body'])}', fuel: '{E(m['fuel'])}', note: '{E(m['note'])}', image: '', imageType: '' }}" for m in b['models'])
    adv=", ".join(f"{{ icon: '{a['icon']}', title: '{E(a['title'])}', desc: '{E(a['desc'])}' }}" for a in b['adv'])
    markets=", ".join(f"{{ code: '{m['code']}', name: '{E(m['name'])}', stat: '{E(m['stat'])}' }}" for m in b['markets'])
    if b.get('official_export_status') == 'parallel-only':
        faq1 = (f"Yes — with an honest caveat. {name} currently sells through official channels in China only, so export units move through China's parallel-export channel. "
                f"We source the units, handle export and destination-market documentation and shipping, and are upfront about warranty and after-sales implications before you commit. "
                f"Tell us the model, destination country and quantity and we'll confirm feasibility and send a real quote.")
    else:
        faq1 = (f"Yes. We source {name} from China for export to dealers and fleet buyers. Tell us the model, destination country and quantity, "
                f"and we'll confirm current availability and send a real FOB/CIF quote with the duty and certification picture for your market.")
    faqs=[
      (f"Can EV Auto Pro supply {name} for export?", faq1),
      (f"How much does {name} cost in USD for export?", f"We quote {name} per confirmed model and configuration rather than publishing a fixed price we cannot hold. Send us the model, country and quantity and we'll come back with a real FOB/CIF number plus the duty and certification picture for your market."),
      (f"Who owns {name}?", b['ownership'][:300]),
      (f"Which markets is {name} available in?", (b['export_markets'][:260] + ' ' + b['official_export_note'])[:400] if b.get('official_export_status') != 'official' else b['export_markets'][:320]),
    ]
    faqs_s=", ".join(f"{{ q: '{E(q)}', a: '{E(a)}' }}" for q,a in faqs)
    meta=E(f"Source {name} ({b['brand_cn']}) from China for export. {b['tagline']}. EV Auto Pro handles procurement, documentation and shipping — request an availability and landed-cost quote.")[:300]
    out=TEMPLATE.format(NAME=E(name),CN=E(b['brand_cn']),SLUG=slug,TAGLINE=E(b['tagline']),
        BADGES=badges,STATS=stats,STORY=story,MODELS=models,ADV=adv,MARKETS=markets,FAQS=faqs_s,META=meta)
    open(f'src/pages/brands/{slug}.astro','w').write(out)
    print(f"OK {slug}.astro  ({b.get('official_export_status','?')}, {len(b['models'])} models, {len(b['markets'])} markets)")

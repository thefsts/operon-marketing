import { CheckCircle2, Sparkles } from 'lucide-react';
import { addOnCatalog, recommendedStacks } from '../lib/pricing';

const publicCategories = ['Growth', 'Operations', 'Branding', 'Phase 2'] as const;
const addOnImages: Record<string, string> = {
  Growth: '/product-screenshots/social_dashboard.png',
  Operations: '/product-screenshots/inventory.png',
  Branding: '/product-screenshots/dashboard_main.png',
  'Phase 2': '/product-screenshots/pos_register_full.png',
};

export default function AddOnsSection() {
  const publicAddOns = publicCategories.flatMap((category) => addOnCatalog.filter((item) => item.category === category));
  return <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 text-center">
    <div className="px-6 pb-8 pt-9 sm:px-8 lg:px-10"><p className="text-sm font-semibold uppercase tracking-[.18em] text-cyan-700">Powerful add-ons to do more</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Extend OPERON without overcrowding your plan</h2><p className="mx-auto mt-3 max-w-3xl text-slate-600">Add focused growth, operations and branding capabilities when your business needs them. Extra storage, contacts and other capacity are managed separately through account usage and billing.</p></div>
    <div className="grid gap-px border-y border-slate-200 bg-slate-200 sm:grid-cols-2 xl:grid-cols-4">{publicAddOns.map((addon)=><article key={addon.name} className="flex min-h-64 flex-col bg-white text-left"><div className="h-28 overflow-hidden bg-slate-100"><img src={addOnImages[addon.category] ?? '/product-screenshots/dashboard_main.png'} alt="" loading="lazy" className="h-full w-full object-cover object-top"/></div><div className="flex flex-1 flex-col p-5"><div className="flex items-start justify-between gap-3"><h3 className="font-bold text-slate-950">{addon.name}</h3>{addon.phaseTwo&&<span className="shrink-0 rounded-full bg-violet-50 px-2 py-1 text-[10px] font-bold uppercase text-violet-700">Coming Soon</span>}</div><p className="mt-2 text-base font-bold text-cyan-700">{addon.price}</p><p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{addon.description}</p>{addon.setupFee&&<p className="mt-3 text-xs font-semibold text-amber-800">{addon.setupFee}</p>}</div></article>)}</div>
    <div className="m-6 rounded-3xl border border-cyan-200 bg-white p-6 sm:m-8 sm:p-8 lg:m-10"><Sparkles className="mx-auto h-7 w-7 text-cyan-700"/><h3 className="mt-3 text-2xl font-bold text-slate-950">Bundle & save</h3><p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-600">Choose 2 or more qualifying OPERON add-ons and save 15% on the eligible add-on subtotal. Annual and combo discounts do not stack; the best eligible automatic discount applies.</p><div className="mt-7 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">{recommendedStacks.map((stack)=><article key={stack.system} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left"><h4 className="text-center font-bold text-slate-950">{stack.system}</h4><ul className="mt-4 space-y-2">{stack.items.map((item)=><li key={item} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"/><span>{item}</span></li>)}</ul></article>)}</div></div>
  </section>;
}

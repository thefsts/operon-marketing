import { Check } from 'lucide-react';
import { annualPrice, type PricingFamily } from '../lib/pricing';

type Props = { family: PricingFamily; onSelect?: (planName: string) => void };

export default function PricingFamilySection({ family, onSelect }: Props) {
  return <section id={family.id} className="scroll-mt-28">
    <div className="mb-7"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">{family.name}</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Choose the level that fits your operation</h2><p className="mt-3 max-w-3xl text-slate-600">{family.description}</p></div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{family.plans.map((plan)=><article key={plan.name} className={`relative rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${plan.highlighted?'border-cyan-300 ring-1 ring-cyan-100':'border-slate-200'}`}>
      {plan.highlighted&&<span className="absolute right-5 top-5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">Popular</span>}
      <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{plan.description}</p>
      <div className="mt-6">{plan.monthlyPrice===null?<span className="text-3xl font-bold text-slate-950">Contact Sales</span>:<><div className="flex items-end gap-1"><span className="text-4xl font-bold tracking-tight text-slate-950">${plan.monthlyPrice}</span><span className="pb-1 text-sm text-slate-500">/ month</span></div><p className="mt-2 text-sm font-semibold text-emerald-700">${annualPrice(plan.monthlyPrice).toLocaleString()} / year when paid in full · save 10%</p></>}</div>
      <div className="mt-6 flex items-start gap-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"/>Automatic discounts do not stack. Eligible customers receive the applicable best discount.</div>
      {onSelect&&<button type="button" onClick={()=>onSelect(plan.name)} className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">{plan.monthlyPrice===null?'Contact Sales':`Choose ${plan.name}`}</button>}
    </article>)}</div>
  </section>;
}

import { Check, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { annualPrice, type PricingFamily } from '../lib/pricing';

type Props = { family: PricingFamily; onSelect?: (planName: string) => void };

export default function PricingFamilySection({ family, onSelect }: Props) {
  return <section id={family.id} className="scroll-mt-28 text-center">
    <div className="mx-auto mb-8 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">{family.name}</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Choose the level that fits your operation</h2><p className="mt-3 text-slate-600">{family.description}</p><Link to={family.servicePath} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900">Explore the full {family.name} service <ExternalLink className="h-4 w-4"/></Link></div>
    <div className={`grid items-stretch gap-5 ${family.plans.length >= 5 ? 'md:grid-cols-2 xl:grid-cols-5' : 'md:grid-cols-2 xl:grid-cols-4'}`}>{family.plans.map((plan)=><article key={plan.name} className={`relative flex h-full min-h-[31rem] flex-col rounded-3xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${plan.highlighted?'border-cyan-300 bg-cyan-50/40 ring-1 ring-cyan-100':'border-slate-200'}`}>
      {plan.highlighted&&<span className="mx-auto mb-3 rounded-full bg-cyan-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Most Popular</span>}
      <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">{plan.description}</p>
      <div className="mt-5 min-h-20">{plan.monthlyPrice===null?<><span className="text-2xl font-bold text-slate-950">Contact Sales</span><p className="mt-2 text-xs text-slate-500">Launch pricing is being finalized.</p></>:<><div className="flex items-end justify-center gap-1"><span className="text-4xl font-bold tracking-tight text-slate-950">${plan.monthlyPrice}</span><span className="pb-1 text-sm text-slate-500">/ month</span></div><p className="mt-2 text-xs font-semibold text-emerald-700">${annualPrice(plan.monthlyPrice).toLocaleString()} / year paid in full · save 10%</p></>}</div>
      <div className="mt-5 flex-1 border-t border-slate-200 pt-5"><p className="mb-3 text-sm font-bold text-slate-950">{plan.features[0]?.startsWith('Everything in') ? `${plan.name} adds` : 'Key features'}</p><ul className="space-y-3 text-left">{plan.features.map((feature)=><li key={feature} className="flex items-start gap-2 text-sm leading-5 text-slate-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"/><span>{feature}</span></li>)}</ul></div>
      {onSelect?<button type="button" onClick={()=>onSelect(plan.name)} className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">{plan.monthlyPrice===null?'Contact Sales':`Choose ${plan.name}`}</button>:<Link to={family.servicePath} className="mt-6 block w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">{plan.monthlyPrice===null?'View Service':'View Plan Details'}</Link>}
    </article>)}</div>
  </section>;
}

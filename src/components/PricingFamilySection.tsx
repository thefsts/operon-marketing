import { Check, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { annualPrice, type PricingFamily } from '../lib/pricing';

type Props = { family: PricingFamily; onSelect?: (planName: string) => void };

const valueGroups = [
  { title: 'CRM & customer operations', matches: ['crm', 'contact', 'client', 'lead', 'borrower', 'roster', 'customer'] },
  { title: 'Team & office operations', matches: ['team', 'staff', 'office', 'branch', 'brokerage', 'calendar', 'approval', 'collaboration'] },
  { title: 'Workflow & automation', matches: ['workflow', 'automation', 'pipeline', 'milestone', 'transaction', 'campaign'] },
  { title: 'Reporting & management', matches: ['report', 'analytics', 'visibility', 'control', 'oversight', 'production'] },
  { title: 'Industry & advanced capability', matches: ['inventory', 'pos', 'gym', 'range', 'facility', 'location', 'membership', 'listing', 'loan'] },
  { title: 'Branding & enterprise', matches: ['white-label', 'white label', 'brand', 'domain', 'enterprise', 'custom'] },
] as const;

function accumulatedFeatures(family: PricingFamily, planIndex: number) {
  const seen = new Set<string>();
  const result: string[] = [];
  family.plans.slice(0, planIndex + 1).forEach((plan) => plan.features.forEach((feature) => {
    if (feature.startsWith('Everything in')) return;
    const key = feature.toLowerCase();
    if (!seen.has(key)) { seen.add(key); result.push(feature); }
  }));
  return result;
}

function groupFeatures(features: string[]) {
  const used = new Set<string>();
  const groups = valueGroups.map((group) => {
    const items = features.filter((feature) => group.matches.some((match) => feature.toLowerCase().includes(match)));
    items.forEach((item) => used.add(item));
    return { title: group.title, items };
  }).filter((group) => group.items.length);
  const other = features.filter((feature) => !used.has(feature));
  if (other.length) groups.push({ title: 'Additional plan value', items: other });
  return groups;
}

export default function PricingFamilySection({ family, onSelect }: Props) {
  const [showComparison, setShowComparison] = useState(false);
  const annualEligible = family.id !== 'founding-beta';

  return <section id={family.id} className="scroll-mt-28 text-center">
    <div className="mx-auto mb-8 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">{family.name}</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Choose the level that fits your operation</h2><p className="mt-3 text-slate-600">{family.description}</p><Link to={family.servicePath} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900">Explore the full {family.name} service <ExternalLink className="h-4 w-4"/></Link></div>

    <div className={`grid items-stretch gap-5 ${family.plans.length >= 5 ? 'md:grid-cols-2 xl:grid-cols-5' : 'md:grid-cols-2 xl:grid-cols-4'}`}>{family.plans.map((plan, planIndex)=>{
      const included = accumulatedFeatures(family, planIndex);
      return <article key={plan.name} className={`relative flex h-full min-h-[36rem] flex-col rounded-3xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${plan.highlighted?'border-cyan-300 bg-cyan-50/40 ring-1 ring-cyan-100':'border-slate-200'}`}>
        {plan.highlighted&&<span className="mx-auto mb-3 rounded-full bg-cyan-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Most Popular</span>}
        <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">{plan.description}</p>
        <div className="mt-5 min-h-24">{plan.monthlyPrice===null?<><span className="text-2xl font-bold text-slate-950">Contact Sales</span><p className="mt-2 text-xs text-slate-500">Pricing is confirmed with the final scope.</p></>:<><div className="flex items-end justify-center gap-1"><span className="text-4xl font-bold tracking-tight text-slate-950">${plan.monthlyPrice.toLocaleString()}</span><span className="pb-1 text-sm text-slate-500">/ month</span></div>{annualEligible?<p className="mt-2 text-xs font-semibold text-emerald-700">${annualPrice(plan.monthlyPrice).toLocaleString()} / year paid in full · save 10%</p>:<p className="mt-2 text-xs font-semibold text-slate-500">Monthly beta pricing · annual 10% discount does not apply</p>}</>}</div>
        <div className="mt-5 flex-1 border-t border-slate-200 pt-5"><p className="mb-3 text-sm font-bold text-slate-950">What you get at this level</p><ul className="space-y-3 text-left">{included.slice(0, 8).map((feature)=><li key={feature} className="flex items-start gap-2 text-sm leading-5 text-slate-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"/><span>{feature}</span></li>)}</ul>{included.length>8&&<p className="mt-3 text-xs font-semibold text-cyan-700">+ {included.length-8} more included capabilities</p>}</div>
        {onSelect?<button type="button" onClick={()=>onSelect(plan.name)} className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">{plan.monthlyPrice===null?'Contact Sales':`Choose ${plan.name}`}</button>:<Link to={family.servicePath} className="mt-6 block w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">{plan.monthlyPrice===null?'View Service':'View Plan Details'}</Link>}
      </article>})}</div>

    <button type="button" onClick={()=>setShowComparison((value)=>!value)} aria-expanded={showComparison} className="mx-auto mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-5 py-3 text-sm font-bold text-cyan-800 hover:bg-cyan-100">{showComparison?'Hide detailed comparison':'See all features & compare plans'}<ChevronDown className={`h-4 w-4 transition ${showComparison?'rotate-180':''}`}/></button>

    {showComparison&&<div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm"><table className="w-full min-w-[900px] border-collapse text-left"><thead><tr className="bg-slate-50"><th className="sticky left-0 z-10 min-w-64 border-b border-r border-slate-200 bg-slate-50 p-5 text-sm font-bold text-slate-950">Included capability</th>{family.plans.map((plan)=><th key={plan.name} className="min-w-40 border-b border-slate-200 p-5 text-center text-sm font-bold text-slate-950">{plan.name}{plan.monthlyPrice!==null&&<span className="mt-1 block text-xs font-medium text-slate-500">${plan.monthlyPrice.toLocaleString()}/mo</span>}</th>)}</tr></thead><tbody>{valueGroups.map((group)=>{
      const allFeatures=accumulatedFeatures(family,family.plans.length-1); const items=groupFeatures(allFeatures).find((candidate)=>candidate.title===group.title)?.items??[]; if(!items.length)return null;
      return <tr key={group.title}><td colSpan={family.plans.length+1} className="border-b border-slate-200 bg-cyan-50/60 px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-cyan-800">{group.title}</td></tr>})}{accumulatedFeatures(family,family.plans.length-1).map((feature)=><tr key={feature} className="border-b border-slate-100 last:border-0"><td className="sticky left-0 border-r border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{feature}</td>{family.plans.map((plan,planIndex)=>{const has=accumulatedFeatures(family,planIndex).some((item)=>item.toLowerCase()===feature.toLowerCase());return <td key={plan.name} className="p-4 text-center">{has?<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700" aria-label="Included"><Check className="h-4 w-4"/></span>:<span className="text-slate-300" aria-label="Not included">—</span>}</td>})}</tr>)}</tbody></table></div>}
  </section>;
}

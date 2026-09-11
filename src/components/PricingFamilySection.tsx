import { Check, ChevronDown, ExternalLink, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { type PricingFamily } from '../lib/pricing';

type BillingCycle = 'monthly' | 'yearly';
type Props = { family: PricingFamily; billingCycle?: BillingCycle; onSelect?: (planName: string) => void; showHeading?: boolean };
type FeatureGroup = { title: string; items: string[] };

const valueGroups = [
  { title: 'CRM & customer operations', matches: ['crm', 'contact', 'client', 'lead', 'borrower', 'roster', 'customer'] },
  { title: 'Team & office operations', matches: ['team', 'staff', 'office', 'branch', 'brokerage', 'calendar', 'approval', 'collaboration'] },
  { title: 'Workflow & automation', matches: ['workflow', 'automation', 'pipeline', 'milestone', 'transaction', 'campaign', 'follow-up'] },
  { title: 'Reporting & management', matches: ['report', 'analytics', 'visibility', 'control', 'oversight', 'production'] },
  { title: 'Industry & advanced capability', matches: ['inventory', 'pos', 'gym', 'range', 'facility', 'location', 'membership', 'listing', 'loan', 'commerce', 'order'] },
  { title: 'Branding & enterprise', matches: ['white-label', 'white label', 'brand', 'domain', 'enterprise', 'custom'] },
] as const;

const annualTotal = (monthlyPrice: number) => Math.round(monthlyPrice * 12 * 0.85);
const effectiveMonthlyAnnual = (monthlyPrice: number) => Math.round(monthlyPrice * 0.85);

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

function groupFeatures(features: string[]): FeatureGroup[] {
  const used = new Set<string>();
  const groups: FeatureGroup[] = valueGroups.map((group) => {
    const items = features.filter((feature) => group.matches.some((match) => feature.toLowerCase().includes(match)));
    items.forEach((item) => used.add(item));
    return { title: group.title, items };
  }).filter((group) => group.items.length);
  const other = features.filter((feature) => !used.has(feature));
  if (other.length) groups.push({ title: 'Additional plan value', items: other });
  return groups;
}

export default function PricingFamilySection({ family, billingCycle = 'monthly', onSelect, showHeading = true }: Props) {
  const [showComparison, setShowComparison] = useState(false);

  return <section id={family.id} className="scroll-mt-28 text-center">
    {showHeading && <div className="mx-auto mb-6 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">{family.name}</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Choose the plan that fits your business</h2><p className="mt-3 text-slate-600">{family.description}</p><Link to={family.servicePath} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900">Explore the full {family.name} service <ExternalLink className="h-4 w-4"/></Link></div>}

    <div className={`grid items-stretch gap-4 ${family.plans.length >= 5 ? 'md:grid-cols-2 xl:grid-cols-5' : 'md:grid-cols-2 xl:grid-cols-4'}`}>{family.plans.map((plan, planIndex)=>{const included=accumulatedFeatures(family,planIndex);const shownPrice=plan.monthlyPrice===null?null:billingCycle==='yearly'?effectiveMonthlyAnnual(plan.monthlyPrice):Math.round(plan.monthlyPrice);return <article key={plan.name} className={`relative flex h-full min-h-[31rem] flex-col rounded-2xl border bg-white p-5 text-center shadow-sm ${plan.highlighted?'border-emerald-400 ring-1 ring-emerald-300':'border-slate-200'}`}>{plan.highlighted&&<span className="mx-auto -mt-9 mb-3 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white shadow-sm">Most Popular</span>}<h3 className="text-lg font-bold text-slate-950">{plan.name}</h3><div className="mt-2 min-h-20">{shownPrice===null?<><span className="text-2xl font-bold text-slate-950">Contact Sales</span><p className="mt-2 text-xs text-slate-500">Pricing confirmed with final scope.</p></>:<><div className="flex items-end justify-center gap-1"><span className="text-4xl font-bold tracking-tight text-slate-950">${shownPrice}</span><span className="pb-1 text-sm text-slate-500">/mo</span></div>{billingCycle==='yearly'&&<p className="mt-2 text-xs font-semibold text-emerald-700">${annualTotal(plan.monthlyPrice!).toLocaleString()} billed yearly</p>}</>}<p className="mt-2 text-xs font-semibold text-slate-500">{plan.description}</p></div><div className="mt-4 flex-1 border-t border-slate-100 pt-4"><ul className="space-y-2.5 text-left">{included.slice(0,10).map((feature)=><li key={feature} className="flex items-start gap-2 text-sm leading-5 text-slate-600"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted?'text-emerald-500':'text-sky-500'}`}/><span>{feature}</span></li>)}</ul>{included.length>10&&<p className="mt-3 text-xs font-semibold text-sky-700">+ {included.length-10} more included capabilities</p>}</div>{onSelect?<button type="button" onClick={()=>onSelect(plan.name)} className={`mt-5 w-full rounded-lg px-4 py-3 text-sm font-semibold text-white ${plan.highlighted?'bg-emerald-500 hover:bg-emerald-600':'bg-sky-500 hover:bg-sky-600'}`}>{plan.monthlyPrice===null?'Contact Sales':'Start Free Trial'}</button>:<Link to={family.servicePath} className={`mt-5 block w-full rounded-lg px-4 py-3 text-sm font-semibold text-white ${plan.highlighted?'bg-emerald-500 hover:bg-emerald-600':'bg-sky-500 hover:bg-sky-600'}`}>{plan.monthlyPrice===null?'Contact Sales':'Start Free Trial'}</Link>}</article>})}</div>

    <button type="button" onClick={()=>setShowComparison((value)=>!value)} aria-expanded={showComparison} className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-bold text-sky-800 hover:bg-sky-100">{showComparison?'Hide detailed comparison':'See all features & compare plans'}<ChevronDown className={`h-4 w-4 transition ${showComparison?'rotate-180':''}`}/></button>

    {showComparison&&<div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm"><table className="w-full min-w-[900px] border-collapse text-left"><thead><tr className="bg-slate-50"><th className="sticky left-0 z-10 min-w-64 border-b border-r border-slate-200 bg-slate-50 p-5 text-sm font-bold text-slate-950">Included capability</th>{family.plans.map((plan)=><th key={plan.name} className="min-w-40 border-b border-slate-200 p-5 text-center text-sm font-bold text-slate-950">{plan.name}{plan.monthlyPrice!==null&&<span className="mt-1 block text-xs font-medium text-slate-500">{billingCycle==='yearly'?`$${effectiveMonthlyAnnual(plan.monthlyPrice)}/mo annual`:`$${Math.round(plan.monthlyPrice)}/mo`}</span>}</th>)}</tr></thead><tbody>{groupFeatures(accumulatedFeatures(family,family.plans.length-1)).flatMap((group)=>[<tr key={`${group.title}-heading`}><td colSpan={family.plans.length+1} className="border-b border-slate-200 bg-sky-50 px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-sky-800">{group.title}</td></tr>,...group.items.map((feature)=><tr key={feature} className="border-b border-slate-100 last:border-0"><td className="sticky left-0 border-r border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{feature}</td>{family.plans.map((plan,planIndex)=>{const has=accumulatedFeatures(family,planIndex).some((item)=>item.toLowerCase()===feature.toLowerCase());return <td key={plan.name} className="p-4 text-center">{has?<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700" aria-label="Included"><Check className="h-4 w-4"/></span>:<span className="text-slate-300" aria-label="Not included">—</span>}</td>})}</tr>)])}</tbody></table></div>}
  </section>;
}

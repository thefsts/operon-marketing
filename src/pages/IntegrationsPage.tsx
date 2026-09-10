import { useMemo, useState } from 'react';
import { ArrowRight, Calendar, CreditCard, Mail, MessageSquare, Plug, Search, Webhook } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';

type Integration = { name: string; category: string; description: string; availability: 'Available by configuration' | 'Provider setup required' | 'Planned / verify availability' };

const integrations: Integration[] = [
  { name: 'Gmail', category: 'Communication', description: 'Connect customer and business email workflows with OPERON records and activity.', availability: 'Provider setup required' },
  { name: 'Microsoft 365 / Outlook', category: 'Communication', description: 'Connect supported Microsoft email and business communication workflows.', availability: 'Provider setup required' },
  { name: 'Slack', category: 'Communication', description: 'Bring supported OPERON notifications and team workflows into Slack.', availability: 'Planned / verify availability' },
  { name: 'Google Calendar', category: 'Calendar & Scheduling', description: 'Coordinate supported OPERON appointments and scheduling with Google Calendar.', availability: 'Provider setup required' },
  { name: 'Microsoft Calendar', category: 'Calendar & Scheduling', description: 'Coordinate supported schedules with Microsoft calendar services.', availability: 'Provider setup required' },
  { name: 'Stripe', category: 'Payments & Commerce', description: 'Connect supported payment and billing workflows using a customer-owned Stripe account.', availability: 'Provider setup required' },
  { name: 'Square', category: 'Payments & Commerce', description: 'Connect supported commerce, payment, and POS workflows where configured.', availability: 'Provider setup required' },
  { name: 'QuickBooks', category: 'Accounting & Operations', description: 'Support accounting workflow connections between OPERON and QuickBooks where available.', availability: 'Planned / verify availability' },
  { name: 'Gusto', category: 'Accounting & Operations', description: 'Support workforce and payroll-related workflow connections where available.', availability: 'Planned / verify availability' },
  { name: 'DocuSign', category: 'Documents', description: 'Support electronic-signature and document workflow connections where configured.', availability: 'Planned / verify availability' },
  { name: 'Webhooks', category: 'Developer & Automation', description: 'Use scoped event-driven connections for approved OPERON workflows.', availability: 'Available by configuration' },
  { name: 'OPERON API', category: 'Developer & Automation', description: 'Developer access for approved integrations, automation, and connected applications as released.', availability: 'Available by configuration' },
  { name: 'Zapier / Make-style workflows', category: 'Developer & Automation', description: 'Automation pathways designed for supported third-party workflow tools.', availability: 'Planned / verify availability' },
  { name: 'Resend', category: 'Email & Notifications', description: 'Transactional email delivery used in supported OPERON notification workflows.', availability: 'Available by configuration' },
  { name: 'Business messaging providers', category: 'Email & Notifications', description: 'Messaging connections depend on provider approval, credentials, usage costs, and release readiness.', availability: 'Planned / verify availability' },
];

const categoryIcons = { 'Communication': MessageSquare, 'Calendar & Scheduling': Calendar, 'Payments & Commerce': CreditCard, 'Accounting & Operations': Plug, 'Documents': Plug, 'Developer & Automation': Webhook, 'Email & Notifications': Mail } as const;
const categories = ['All', ...Array.from(new Set(integrations.map((item)=>item.category)))] as const;

export default function IntegrationsPage() {
  const [category, setCategory] = useState<string>('All');
  const [query, setQuery] = useState('');
  const filtered = useMemo(()=>integrations.filter((item)=>(category==='All'||item.category===category)&&(`${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase()))),[category,query]);

  return <div className="min-h-screen bg-white text-slate-900"><GlobalHeader/><main id="main-content" className="pt-20">
    <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white text-center"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">OPERON Integration Marketplace</span><h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Connect OPERON to the tools your business already uses.</h1><p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Browse connections by business function, understand what each connection is designed to do, and see whether provider setup or release verification is still required.</p>
      <div className="mx-auto mt-8 max-w-2xl"><label className="relative block"><Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"/><span className="sr-only">Search integrations</span><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search integrations and capabilities" className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"/></label></div>
    </div></section>

    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Integration categories">{categories.map((item)=><button key={item} type="button" role="tab" aria-selected={category===item} onClick={()=>setCategory(item)} className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${category===item?'border-cyan-700 bg-cyan-700 text-white':'border-slate-200 bg-white text-slate-700 hover:border-cyan-300'}`}>{item}</button>)}</div>
      <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((integration)=>{const Icon=categoryIcons[integration.category as keyof typeof categoryIcons]??Plug;return <article key={integration.name} className="flex h-full min-h-72 flex-col rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"><div className="flex items-start justify-between gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700"><Icon className="h-6 w-6"/></div><span className={`rounded-full px-3 py-1 text-[11px] font-bold ${integration.availability==='Available by configuration'?'bg-emerald-50 text-emerald-700':integration.availability==='Provider setup required'?'bg-amber-50 text-amber-800':'bg-slate-100 text-slate-600'}`}>{integration.availability}</span></div><p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-cyan-700">{integration.category}</p><h2 className="mt-2 text-xl font-bold text-slate-950">{integration.name}</h2><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{integration.description}</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">Ask about this integration <ArrowRight className="h-4 w-4"/></Link></article>})}</div>
      {filtered.length===0&&<div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">No integrations match that search yet.</div>}
      <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-center text-sm leading-6 text-amber-900">Availability depends on provider credentials, platform approvals, customer-owned subscriptions, and OPERON release readiness. A marketplace listing does not mean a provider connection is live; OPERON only treats an integration as production-ready after end-to-end verification.</div>
      <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-center text-white lg:flex lg:items-center lg:justify-between lg:text-left"><div><h2 className="text-2xl font-bold">Need a specific integration?</h2><p className="mt-2 text-slate-300">Tell us what your business uses and we will confirm the current connection path, requirements, and availability.</p></div><Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 lg:mt-0">Contact us <ArrowRight className="h-4 w-4"/></Link></div>
    </section>
  </main><GlobalFooter/></div>;
}

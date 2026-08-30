import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, CalendarDays, CheckCircle2, FileCheck2, Layers3, MapPin, Megaphone, MessageSquareText, Share2, Sparkles, Users2, WandSparkles } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const capabilities = [
  { icon: CalendarDays, title: 'Unified content calendar', text: 'Plan client and brand content across channels from one calendar with campaign context attached.' },
  { icon: Share2, title: 'Multi-channel publishing', text: 'Coordinate posts across supported social networks without separating publishing from customer and campaign records.' },
  { icon: WandSparkles, title: 'AI content assistance', text: 'Generate ideas, first drafts, variations, captions, and campaign concepts with a human-review workflow.' },
  { icon: FileCheck2, title: 'Approvals & collaboration', text: 'Route content to teammates and clients for review before anything is scheduled or published.' },
  { icon: Users2, title: 'Client & brand workspaces', text: 'Keep each client, brand, asset set, campaign, and publishing workflow organized inside OPERON.' },
  { icon: BarChart3, title: 'Campaign performance', text: 'Bring publishing activity, engagement, leads, and CRM outcomes into a clearer reporting flow.' },
];

const editions = [
  { name: 'OPERON Add-On', label: 'For existing OPERON customers', copy: 'Add Social Publisher Pro to an existing OPERON CRM account and connect social publishing directly to contacts, campaigns, leads, tasks, and reporting.', cta: 'Add to OPERON', path: '/contact' },
  { name: 'Social Media Business Edition', label: 'For agencies & social-first businesses', copy: 'A fuller operating environment for agencies, consultants, creators, and marketing teams that need client workspaces, approvals, campaign management, and CRM tools together.', cta: 'Talk to Sales', path: '/contact' },
];

const workflow = ['Create campaign', 'Build content', 'Review & approve', 'Schedule & publish', 'Track engagement', 'Convert activity into CRM follow-up'];

export default function SocialMediaMarketingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="relative overflow-hidden border-b border-blue-100 bg-[radial-gradient(circle_at_75%_20%,rgba(124,58,237,.14),transparent_28rem),radial-gradient(circle_at_15%_35%,rgba(6,182,212,.11),transparent_22rem),linear-gradient(180deg,#f8fbff_0%,#ffffff_86%)]">
          <div className="absolute inset-0 opacity-35" style={{backgroundImage:'radial-gradient(#cbd5e1 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex rounded-full border border-violet-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-violet-700 shadow-sm">OPERON Social Publisher Pro™</span>
              <h1 className="mt-6 text-5xl font-black tracking-[-.055em] text-slate-950 sm:text-6xl">YOUR SOCIAL,<br/><span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">IN SYNC.</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Plan, create, approve, publish, and measure social campaigns inside the same system managing your customers, leads, tasks, workflows, and business operations.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">Talk to Sales<ArrowRight className="h-4 w-4"/></Link><Link to="/pricing" className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-black text-slate-800 shadow-sm">View OPERON Plans</Link></div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">{['Connected to CRM','Human approval controls','Agency-ready workflows'].map(x=><span key={x} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/>{x}</span>)}</div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-200/45 via-blue-200/40 to-violet-200/45 blur-3xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_35px_90px_rgba(30,64,175,.18)]">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><div className="flex items-center gap-3"><img src="/operon-logo-transparent.png" alt="OPERON" className="h-7 w-auto"/><span className="text-xs font-black uppercase tracking-[.16em] text-slate-400">Social Publisher Pro</span></div><Megaphone className="h-5 w-5 text-violet-600"/></div>
                <div className="grid gap-4 p-5 sm:grid-cols-3">{[['Scheduled','28'],['Approvals','7'],['Campaigns','9']].map(([l,v])=><div key={l} className="rounded-2xl bg-slate-50 p-4"><p className="text-xs text-slate-500">{l}</p><p className="mt-2 text-2xl font-black">{v}</p></div>)}</div>
                <div className="grid gap-4 px-5 pb-5 sm:grid-cols-[1.4fr_.9fr]">
                  <div className="rounded-2xl border border-slate-100 p-5"><div className="flex items-center justify-between"><p className="font-black">Content calendar</p><CalendarDays className="h-4 w-4 text-blue-600"/></div><div className="mt-4 grid grid-cols-7 gap-2">{Array.from({length:28}).map((_,i)=><div key={i} className={`aspect-square rounded-lg ${[3,7,11,13,18,22,25].includes(i)?'bg-gradient-to-br from-blue-500 to-violet-500':'bg-slate-100'}`} />)}</div></div>
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-5 text-white"><Sparkles className="h-5 w-5"/><p className="mt-5 text-xs font-bold text-white/70">AI ASSIST</p><p className="mt-1 font-black">4 posts are ready for review.</p><div className="mt-5 rounded-xl bg-white/15 p-3 text-xs">Create variations, then approve before scheduling.</div></div>
                </div>
                <div className="flex flex-wrap justify-center gap-2 border-t border-slate-100 px-5 py-4">{['f','◎','in','𝕏','♪','▶','p'].map(x=><span key={x} className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-xs font-black text-slate-700">{x}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><p className="text-sm font-black uppercase tracking-[.18em] text-blue-700">Everything in one flow</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">Social publishing should not live in a disconnected tool.</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(({icon:Icon,title,text})=><article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50"><Icon className="h-5 w-5 text-blue-600"/></div><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></section>

        <section className="border-y border-slate-200 bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><p className="text-sm font-black uppercase tracking-[.18em] text-violet-700">Connected workflow</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">From idea to revenue follow-up.</h2><div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-6">{workflow.map((step,i)=><div key={step} className="relative rounded-2xl border border-slate-200 bg-white p-5"><span className="text-xs font-black text-blue-600">0{i+1}</span><p className="mt-3 text-sm font-black">{step}</p>{i<workflow.length-1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-slate-50 text-slate-400 lg:block"/>}</div>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-6 lg:grid-cols-2">{editions.map((edition,i)=><article key={edition.name} className={`rounded-[2rem] border p-8 ${i===1?'border-violet-200 bg-gradient-to-br from-violet-50 to-blue-50':'border-blue-200 bg-gradient-to-br from-blue-50 to-white'}`}><p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">{edition.label}</p><h2 className="mt-3 text-2xl font-black">{edition.name}</h2><p className="mt-3 leading-7 text-slate-600">{edition.copy}</p><Link to={edition.path} className="mt-6 inline-flex items-center gap-2 font-black text-blue-700">{edition.cta}<ArrowRight className="h-4 w-4"/></Link></article>)}</div></section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><div className="grid gap-6 overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white lg:grid-cols-[1.05fr_.95fr] lg:p-12"><div><div className="flex items-center gap-3"><MapPin className="h-6 w-6 text-cyan-400"/><p className="text-xs font-black uppercase tracking-[.18em] text-cyan-300">Geofence Marketing</p></div><h2 className="mt-4 text-3xl font-black">Add location-aware campaigns when the strategy calls for it.</h2><p className="mt-4 max-w-2xl text-slate-300">Geofence Marketing is positioned as a separate OPERON marketing capability so variable provider and campaign costs stay outside the base CRM subscription. Availability depends on approved providers and account eligibility.</p></div><div className="grid gap-3 sm:grid-cols-2">{[['Audience zones',Layers3],['Campaign messaging',MessageSquareText],['CRM follow-up',Users2],['Performance view',BarChart3]].map(([label,Icon])=><div key={label as string} className="rounded-2xl border border-white/10 bg-white/5 p-5"><Icon className="h-5 w-5 text-cyan-300"/><p className="mt-3 font-black">{label as string}</p></div>)}</div></div></section>
      </main>
      <GlobalFooter />
    </div>
  );
}

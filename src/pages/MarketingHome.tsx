import { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, Briefcase, Building2, FileSignature, Globe2, HeartPulse, MapPin, Megaphone, ShoppingCart, Sparkles, Trophy, Users, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddOnsSection from '../components/AddOnsSection';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';

const slides = [
  { eyebrow: 'The operating system for modern business', title: 'YOUR BUSINESS,', accent: 'IN SYNC.', body: 'CRM, marketing, sales, operations, automation, and AI connected around the way your business actually works.', primary: '/start', primaryLabel: 'Start Your Setup', secondary: '/platform', secondaryLabel: 'Explore OPERON' },
  { eyebrow: 'OPERON Social Publisher Pro™', title: 'YOUR SOCIAL,', accent: 'IN SYNC.', body: 'Create, publish, manage clients, run campaigns, coordinate approvals, and connect social activity to the rest of your CRM.', primary: '/social-publisher-pro', primaryLabel: 'Explore Social Publisher Pro', secondary: '/pricing', secondaryLabel: 'View Plans' },
  { eyebrow: 'Industry-adaptive CRM', title: 'YOUR INDUSTRY,', accent: 'IN SYNC.', body: 'Legal, healthcare, real estate, sports, hospitality, retail, social media, and service teams can start with workflows built around their world.', primary: '/platform', primaryLabel: 'Find Your Solution', secondary: '/contact', secondaryLabel: 'Talk to Sales' },
];

const systems = [
  ['CRM', Users], ['Social Publisher Pro', Megaphone], ['Marketing', Sparkles], ['Sales Pipeline', BarChart3],
  ['Operations', Workflow], ['Contracts', FileSignature], ['POS', ShoppingCart], ['AI Assistant', Globe2],
] as const;

const industries = [
  { name: 'Social Media & Marketing', copy: 'Publishing, AI content, clients, campaigns, approvals, analytics, leads, and agency operations in one CRM.', path: '/social-publisher-pro', icon: Megaphone },
  { name: 'Real Estate & Mortgage', copy: 'Leads, listings, deals, documents, marketing, and professional workflows connected from first contact to close.', path: '/real-estate', icon: Building2 },
  { name: 'Legal', copy: 'Client, matter, document, task, and communication workflows with compliance-supporting controls.', path: '/legal', icon: Briefcase },
  { name: 'Healthcare', copy: 'Business and patient-facing workflows designed with privacy, permissions, and compliance needs in mind.', path: '/healthcare', icon: HeartPulse },
  { name: 'Sports', copy: 'Teams, rosters, scheduling, registrations, parent/player workflows, payments, and communications.', path: '/sports', icon: Trophy },
  { name: 'POS & Hospitality', copy: 'Customer operations, POS workflows, inventory-ready tools, marketing, and business management.', path: '/restaurant-retail-crm', icon: ShoppingCart },
];

function ProductVisual({ slide }: { slide: number }) {
  return <div className="relative mx-auto w-full max-w-[620px]">
    <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-cyan-200/50 via-blue-200/30 to-violet-200/50 blur-3xl" />
    <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_35px_90px_rgba(30,64,175,0.18)]">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-3"><img src="/operon-logo-transparent.png" alt="" className="h-7 w-auto" /><span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Workspace</span></div>
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-cyan-400"/><span className="h-2 w-2 rounded-full bg-blue-500"/><span className="h-2 w-2 rounded-full bg-violet-500"/></div>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-3">
        {slide === 1 ? [['Scheduled','28'],['Clients','12'],['Campaigns','9']] : slide === 2 ? [['Open Leads','1,247'],['Deals Won','312'],['Tasks','86']] : [['Revenue','$248,690'],['New Leads','1,067'],['Deals Won','312']].map(([label,value]) => <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4"><p className="text-xs text-slate-500">{label}</p><p className="mt-2 text-xl font-black text-slate-950">{value}</p><p className="mt-1 text-xs font-semibold text-emerald-600">↑ active</p></div>)}
      </div>
      <div className="grid gap-4 px-5 pb-5 sm:grid-cols-[1.65fr_1fr]">
        <div className="rounded-2xl border border-slate-100 p-5"><div className="flex items-center justify-between"><p className="font-bold text-slate-900">{slide === 1 ? 'Campaign performance' : slide === 2 ? 'Pipeline activity' : 'Revenue overview'}</p><BarChart3 className="h-4 w-4 text-blue-600"/></div><div className="mt-8 flex h-28 items-end gap-2">{[38,58,45,72,65,88,78,100,83,110,98,126].map((h,i)=><span key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-cyan-300" style={{height:`${h}px`}} />)}</div></div>
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-5 text-white"><Sparkles className="h-5 w-5"/><p className="mt-5 text-xs font-semibold text-white/70">OPERON AI</p><p className="mt-1 font-bold">Your next best action is ready.</p><div className="mt-5 rounded-xl bg-white/15 p-3 text-xs">{slide === 1 ? 'Review 4 posts awaiting approval.' : slide === 2 ? 'Follow up with 7 high-value opportunities.' : '3 workflows can be automated today.'}</div></div>
      </div>
    </div>
    {slide === 1 && <div className="absolute -bottom-7 left-4 right-4 flex justify-center gap-2 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur">{['f','◎','in','𝕏','♪','▶','p'].map(x=><span key={x} className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-xs font-black text-slate-700">{x}</span>)}</div>}
  </div>;
}

export default function MarketingHome() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(() => setSlide(v => (v + 1) % slides.length), 6500);
    return () => window.clearInterval(id);
  }, []);
  const active = slides[slide];

  return <div className="min-h-screen bg-white text-slate-900"><GlobalHeader /><main id="main-content" className="pt-20">
    <section className="relative overflow-hidden border-b border-blue-100 bg-[radial-gradient(circle_at_80%_15%,rgba(59,130,246,.12),transparent_25rem),linear-gradient(180deg,#f8fbff_0%,#ffffff_80%)]">
      <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(#bfdbfe 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
      <div className="relative mx-auto grid min-h-[650px] max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8 lg:py-20">
        <div><span className="inline-flex rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700 shadow-sm">{active.eyebrow}</span><h1 className="mt-6 text-5xl font-black tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-7xl">{active.title}<br/><span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">{active.accent}</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{active.body}</p><div className="mt-8 flex flex-wrap gap-3"><Link to={active.primary} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">{active.primaryLabel}<ArrowRight className="h-4 w-4"/></Link><Link to={active.secondary} className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 shadow-sm hover:border-blue-300">{active.secondaryLabel}</Link></div><div className="mt-8 flex gap-2" aria-label="Hero slides">{slides.map((s,i)=><button key={s.title} onClick={()=>setSlide(i)} aria-label={`Show ${s.title} ${s.accent}`} className={`h-2.5 rounded-full transition-all ${i===slide?'w-10 bg-blue-600':'w-2.5 bg-slate-300 hover:bg-slate-400'}`} />)}</div></div>
        <ProductVisual slide={slide}/>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><p className="text-center text-sm font-black text-slate-700">Powerful alone. <span className="text-blue-600">Unstoppable together.</span></p><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{systems.map(([name,Icon])=><div key={name} className="group rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"><Icon className="mx-auto h-5 w-5 text-blue-600"/><p className="mt-2 text-xs font-bold text-slate-700">{name}</p></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white lg:grid-cols-[1.1fr_.9fr] lg:p-12"><div><p className="text-xs font-black uppercase tracking-[.18em] text-cyan-100">OPERON Social Publisher Pro™</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Create. Publish. Engage. Track. Convert.</h2><p className="mt-4 max-w-2xl text-blue-50">Social publishing connected directly to clients, leads, campaigns, approvals, billing, and business operations. Existing OPERON customers can add Social Publisher Pro, while agencies can choose a complete Social Media Business Edition.</p><Link to="/social-publisher-pro" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-blue-700">Explore Social Publisher Pro<ArrowRight className="h-4 w-4"/></Link></div><div className="grid grid-cols-2 gap-3">{['Content Calendar','AI Content','Client Brands','Approvals','Campaigns','Analytics'].map(x=><div key={x} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"><p className="font-bold">{x}</p><p className="mt-1 text-xs text-blue-100">Connected to OPERON CRM</p></div>)}</div></div></section>

    <section className="border-y border-slate-200 bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><p className="text-sm font-black uppercase tracking-[.18em] text-blue-700">One CRM. Many industries.</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Your business has its own flow. OPERON is built to meet it there.</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{industries.map(({name,copy,path,icon:Icon})=><Link key={name} to={path} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"><div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50"><Icon className="h-5 w-5 text-blue-600"/></div><h3 className="mt-5 text-xl font-black">{name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">Explore solution<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></span></Link>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,.08)] lg:grid-cols-2 lg:p-12"><div><MapPin className="h-7 w-7 text-cyan-600"/><h2 className="mt-4 text-3xl font-black">Marketing that moves with your audience.</h2><p className="mt-4 leading-7 text-slate-600">Geofence Marketing extends OPERON marketing workflows with location-based campaign planning around selected geographic targets. Provider availability and campaign delivery depend on approved partners and account eligibility.</p></div><div><Sparkles className="h-7 w-7 text-violet-600"/><h2 className="mt-4 text-3xl font-black">AI where the work happens.</h2><p className="mt-4 leading-7 text-slate-600">OPERON AI is designed to assist across customer records, content, campaigns, tasks, workflows, and business operations instead of living in a disconnected chat window.</p></div></div></section>

    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><AddOnsSection /></section>
  </main><GlobalFooter /></div>;
}

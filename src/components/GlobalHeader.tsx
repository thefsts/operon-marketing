import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const solutions = [
  { name: 'Small Business CRM', path: '/small-business-crm', desc: 'Service businesses, contractors, and growing teams' },
  { name: 'Restaurant / Retail / Clubs + POS', path: '/restaurant-retail-crm', desc: 'Restaurants, retail, bars, nightclubs, hospitality, and clubs' },
  { name: 'Real Estate CRM', path: '/real-estate', desc: 'Agents, teams, brokerages, listings, and transactions' },
  { name: 'Mortgage CRM', path: '/mortgage', desc: 'Borrowers, loan pipeline, referrals, milestones, and closings' },
  { name: 'Healthcare CRM', path: '/healthcare', desc: 'Business and practice workflows for healthcare teams' },
  { name: 'Legal CRM', path: '/legal', desc: 'Clients, matters, documents, deadlines, and firm operations' },
  { name: 'Sports & Fitness CRM', path: '/sports', desc: 'Teams, gyms, scheduling, memberships, payments, and portals' },
  { name: 'Gun / FFL CRM', path: '/gun-ffl-crm', desc: 'FFL retail, inventory, POS, range, and business workflows' },
  { name: 'E-Commerce CRM', path: '/e-commerce', desc: 'Customers, orders, catalog, inventory, and storefront operations' },
  { name: 'POS System', path: '/pos', desc: 'CRM-connected point of sale, inventory, and operations' },
];

const featuredSolutions = [
  { name: 'Social Publisher Pro™', path: '/social-publisher-pro', desc: 'Publishing, approvals, campaigns, analytics, and CRM-connected marketing', tone: 'violet' as const },
  { name: 'Geofence Business Edition', path: '/geofence', desc: 'Geofence marketing business system for marketers and agencies selling managed campaigns', tone: 'cyan' as const },
];

type GlobalHeaderProps = { transparent?: boolean };

export default function GlobalHeader(_props: GlobalHeaderProps = {}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const navClass = (path: string) => `text-sm font-semibold transition ${location.pathname === path ? 'text-cyan-700' : 'text-slate-700 hover:text-cyan-700'}`;

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(event.target as Node)) setSolutionsOpen(false); };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setSolutionsOpen(false); };
    document.addEventListener('mousedown', onPointerDown); document.addEventListener('keydown', onKeyDown);
    return () => { document.removeEventListener('mousedown', onPointerDown); document.removeEventListener('keydown', onKeyDown); };
  }, []);

  const closeAll = () => { setSolutionsOpen(false); setMobileOpen(false); };

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,.03)] backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"><Link to="/" className="inline-flex items-center" aria-label="OPERON CRM home"><img src="/operon-logo-transparent.png" alt="OPERON CRM" className="h-12 w-auto object-contain" /></Link>
      <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation"><Link to="/" className={navClass('/')}>Home</Link><Link to="/platform" className={navClass('/platform')}>About</Link>
        <div ref={menuRef} className="relative" onMouseEnter={()=>setSolutionsOpen(true)} onMouseLeave={()=>setSolutionsOpen(false)}><button type="button" onClick={()=>setSolutionsOpen((open)=>!open)} onFocus={()=>setSolutionsOpen(true)} className="inline-flex items-center gap-1 py-7 text-sm font-semibold text-slate-700 transition hover:text-cyan-700" aria-haspopup="menu" aria-expanded={solutionsOpen}>Industries <ChevronDown className={`h-4 w-4 transition ${solutionsOpen?'rotate-180':''}`}/></button>{solutionsOpen&&<div className="absolute left-1/2 top-[calc(100%-0.5rem)] w-[48rem] -translate-x-1/2 pt-3" role="menu"><div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl"><div className="grid grid-cols-2 gap-1">{solutions.map((solution)=><Link key={solution.path+solution.name} to={solution.path} onClick={closeAll} className="rounded-xl px-4 py-3 text-center transition hover:bg-slate-50" role="menuitem"><div className="font-semibold text-slate-950">{solution.name}</div><div className="mt-1 text-xs leading-5 text-slate-500">{solution.desc}</div></Link>)}</div><div className="mt-4 grid grid-cols-2 gap-3">{featuredSolutions.map((solution)=><Link key={solution.name} to={solution.path} onClick={closeAll} className={`rounded-2xl border px-5 py-4 text-center ${solution.tone==='violet'?'border-violet-100 bg-violet-50':'border-cyan-100 bg-cyan-50'}`} role="menuitem"><div className={`font-semibold ${solution.tone==='violet'?'text-violet-950':'text-cyan-950'}`}>{solution.name}</div><div className={`mt-1 text-xs ${solution.tone==='violet'?'text-violet-700':'text-cyan-700'}`}>{solution.desc}</div></Link>)}</div></div></div>}</div>
        <Link to="/pricing" className={navClass('/pricing')}>Pricing</Link><Link to="/integrations" className={navClass('/integrations')}>Integrations</Link><Link to="/contact" className={navClass('/contact')}>Contact</Link><LanguageSwitcher/><a href={`${APP_URL}/login`} className="text-sm font-semibold text-slate-700 hover:text-cyan-700">Login</a><Link to="/start" className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">Get Started</Link>
      </nav><button type="button" className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden" onClick={()=>setMobileOpen((open)=>!open)} aria-label={mobileOpen?'Close navigation':'Open navigation'} aria-expanded={mobileOpen}>{mobileOpen?<X className="h-6 w-6"/>:<Menu className="h-6 w-6"/>}</button></div>
    {mobileOpen&&<div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden"><nav className="mx-auto max-w-7xl px-4 py-5 text-center sm:px-6" aria-label="Mobile navigation"><div className="grid gap-1 sm:grid-cols-2"><Link to="/" onClick={closeAll} className="rounded-lg px-3 py-2 font-semibold">Home</Link><Link to="/platform" onClick={closeAll} className="rounded-lg px-3 py-2 font-semibold">About</Link></div><div className="mt-5 py-2 text-xs font-bold uppercase tracking-[.16em] text-slate-400">Industries</div><div className="grid gap-1 sm:grid-cols-2">{solutions.map((solution)=><Link key={solution.path+solution.name} to={solution.path} onClick={closeAll} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700">{solution.name}</Link>)}</div><div className="mt-4 grid gap-2 sm:grid-cols-2">{featuredSolutions.map((solution)=><Link key={solution.name} to={solution.path} onClick={closeAll} className={`rounded-lg px-3 py-3 text-sm font-semibold ${solution.tone==='violet'?'bg-violet-50 text-violet-800':'bg-cyan-50 text-cyan-800'}`}>{solution.name}</Link>)}</div><div className="mt-4 grid gap-1 sm:grid-cols-3"><Link to="/pricing" onClick={closeAll} className="rounded-lg px-3 py-2 font-semibold">Pricing</Link><Link to="/integrations" onClick={closeAll} className="rounded-lg px-3 py-2 font-semibold">Integrations</Link><Link to="/contact" onClick={closeAll} className="rounded-lg px-3 py-2 font-semibold">Contact</Link></div><div className="mx-auto mt-3 flex justify-center"><LanguageSwitcher/></div><a href={`${APP_URL}/login`} className="mt-2 block rounded-lg px-3 py-2 font-semibold">Login</a><Link to="/start" onClick={closeAll} className="mx-auto mt-3 block max-w-xs rounded-xl bg-slate-950 px-4 py-3 text-center font-semibold text-white">Get Started</Link></nav></div>}
  </header>;
}

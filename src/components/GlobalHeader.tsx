import { useState } from 'react';
import { ChevronDown, MapPin, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const solutionGroups = [
  {
    title: 'Business Systems',
    items: [
      { name: 'Small Business CRM', path: '/small-business-crm', desc: 'Service businesses, contractors, and local teams' },
      { name: 'Restaurant / Retail / Clubs + POS', path: '/restaurant-retail-crm', desc: 'Restaurants, retail, bars, nightclubs, hospitality, and clubs' },
      { name: 'Real Estate CRM', path: '/real-estate', desc: 'Clients, listings, deals, documents, and commissions' },
      { name: 'Mortgage CRM', path: '/mortgage', desc: 'Borrowers, loan pipeline, milestones, referrals, and closings' },
      { name: 'Healthcare CRM', path: '/healthcare', desc: 'Professional workflows for healthcare teams' },
      { name: 'Legal CRM', path: '/legal', desc: 'Clients, matters, documents, tasks, and deadlines' },
      { name: 'Sports & Fitness CRM', path: '/sports', desc: 'Teams, schedules, registrations, payments, and portals' },
      { name: 'Gun / FFL CRM', path: '/gun-ffl-crm', desc: 'FFL retail, inventory, POS, customer, and compliance-support workflows' },
      { name: 'E-Commerce CRM', path: '/e-commerce', desc: 'Customers, orders, inventory, and storefront operations' },
      { name: 'POS System', path: '/pos', desc: 'Point-of-sale workflows connected to CRM and operations' },
    ],
  },
  {
    title: 'Growth & Operations',
    items: [
      { name: 'Lead Generation', path: '/lead-generation', desc: 'Capture, organize, and route incoming opportunities' },
      { name: 'Reputation Management', path: '/reputation-management', desc: 'Customer feedback, reviews, and reputation workflows' },
      { name: 'Client Billing', path: '/client-billing', desc: 'Invoices, payment status, recurring workflows, and reporting' },
      { name: 'Compliance Workflows', path: '/compliance', desc: 'Role-aware access, records, acknowledgments, and audit support' },
      { name: 'Integrations', path: '/integrations', desc: 'Connect communications, calendars, payments, accounting, and automation' },
      { name: 'API Documentation', path: '/api-docs', desc: 'Developer and integration reference' },
    ],
  },
];

type GlobalHeaderProps = { transparent?: boolean };

export default function GlobalHeader(_props: GlobalHeaderProps = {}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  const navClass = (path: string) => `text-sm font-semibold transition ${location.pathname === path ? 'text-cyan-700' : 'text-slate-700 hover:text-cyan-700'}`;
  const closeSolutions = () => setSolutionsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,.03)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center" aria-label="OPERON CRM home"><img src="/operon-logo-transparent.png" alt="OPERON CRM" className="h-12 w-auto object-contain" /></Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          <Link to="/" className={navClass('/')}>Home</Link>
          <Link to="/platform" className={navClass('/platform')}>About</Link>
          <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
            <button type="button" onClick={() => setSolutionsOpen((open) => !open)} onFocus={() => setSolutionsOpen(true)} className="inline-flex items-center gap-1 py-7 text-sm font-semibold text-slate-700 transition hover:text-cyan-700" aria-haspopup="menu" aria-expanded={solutionsOpen}>
              Solutions <ChevronDown className={`h-4 w-4 transition ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {solutionsOpen && (
              <div className="absolute left-1/2 top-[calc(100%-0.5rem)] w-[58rem] -translate-x-1/2 pt-3" role="menu">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
                  <div className="grid gap-5 lg:grid-cols-[1.35fr_.85fr]">
                    {solutionGroups.map((group) => (
                      <div key={group.title}>
                        <div className="px-3 pb-2 text-xs font-bold uppercase tracking-[.16em] text-slate-400">{group.title}</div>
                        <div className="grid grid-cols-2 gap-1">
                          {group.items.map((solution) => (
                            <Link key={solution.path} to={solution.path} onClick={closeSolutions} className="rounded-xl px-3 py-3 text-center transition hover:bg-slate-50" role="menuitem">
                              <div className="font-semibold text-slate-950">{solution.name}</div>
                              <div className="mt-1 text-xs leading-5 text-slate-500">{solution.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Link to="/social-publisher-pro" onClick={closeSolutions} className="rounded-2xl border border-violet-100 bg-violet-50 px-5 py-4 text-center" role="menuitem">
                      <div className="font-semibold text-violet-950">Social Publisher Pro™</div>
                      <div className="mt-1 text-xs text-violet-700">Publishing, approvals, campaigns, analytics, and CRM-connected marketing</div>
                    </Link>
                    <Link to="/geofence" onClick={closeSolutions} className="rounded-2xl border border-cyan-100 bg-cyan-50 px-5 py-4 text-center" role="menuitem">
                      <div className="flex items-center justify-center gap-2 font-semibold text-cyan-950"><MapPin className="h-4 w-4" />Operon Geofence™</div>
                      <div className="mt-1 text-xs text-cyan-700">Location intelligence for workforce, operations, and marketing</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/pricing" className={navClass('/pricing')}>Pricing</Link>
          <Link to="/integrations" className={navClass('/integrations')}>Integrations</Link>
          <Link to="/contact" className={navClass('/contact')}>Contact</Link>
          <LanguageSwitcher />
          <a href={`${APP_URL}/login`} className="text-sm font-semibold text-slate-700 hover:text-cyan-700">Login</a>
          <Link to="/start" className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">Get Started</Link>
        </nav>
        <button type="button" className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen}>{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-5 text-center sm:px-6" aria-label="Mobile navigation">
            <div className="grid gap-1 sm:grid-cols-2"><Link to="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 font-semibold">Home</Link><Link to="/platform" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 font-semibold">About</Link></div>
            {solutionGroups.map((group) => <div key={group.title} className="mt-5"><div className="py-2 text-xs font-bold uppercase tracking-[.16em] text-slate-400">{group.title}</div><div className="grid gap-1 sm:grid-cols-2">{group.items.map((solution) => <Link key={solution.path} to={solution.path} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700">{solution.name}</Link>)}</div></div>)}
            <div className="mt-4 grid gap-2 sm:grid-cols-2"><Link to="/social-publisher-pro" onClick={() => setMobileOpen(false)} className="rounded-lg bg-violet-50 px-3 py-3 text-sm font-semibold text-violet-800">Social Publisher Pro™</Link><Link to="/geofence" onClick={() => setMobileOpen(false)} className="rounded-lg bg-cyan-50 px-3 py-3 text-sm font-semibold text-cyan-800">Operon Geofence™</Link></div>
            <div className="mt-4 grid gap-1 sm:grid-cols-3"><Link to="/pricing" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 font-semibold">Pricing</Link><Link to="/integrations" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 font-semibold">Integrations</Link><Link to="/contact" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 font-semibold">Contact</Link></div>
            <div className="mx-auto mt-3 flex justify-center"><LanguageSwitcher /></div>
            <a href={`${APP_URL}/login`} className="mt-2 block rounded-lg px-3 py-2 font-semibold">Login</a>
            <Link to="/start" onClick={() => setMobileOpen(false)} className="mx-auto mt-3 block max-w-xs rounded-xl bg-slate-950 px-4 py-3 text-center font-semibold text-white">Get Started</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useState, useEffect } from 'react';
import { Trophy, Users, Calendar, CheckCircle, ArrowRight, Menu, X, CreditCard, FileCheck, Star, Activity, Globe, Shield, Sparkles, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(plan?: string) {
  localStorage.setItem('operon_funnel_type', 'sports');
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'sports');
  if (plan) localStorage.setItem('operon_selected_plan', plan);
}

export default function SportsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    saveFunnel();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Users, title: 'Full Roster Management', desc: 'Players, parents/guardians, and coaches with role-based permissions. Separate communication groups and relationship tracking.', color: 'from-blue-500 to-cyan-400' },
    { icon: Calendar, title: 'Smart Scheduling', desc: 'Practices, games, and tournaments with calendar views, RSVP tracking, recurring events, and location management.', color: 'from-green-500 to-emerald-400' },
    { icon: Activity, title: 'Attendance Tracking', desc: 'Present, absent, late, excused — tracked per player per event with parent notification support.', color: 'from-indigo-500 to-violet-400' },
    { icon: FileCheck, title: 'Digital Waivers & Forms', desc: 'E-signature waivers with timestamp and IP verification. Liability, medical, photo release, and travel forms.', color: 'from-orange-500 to-amber-400' },
    { icon: CreditCard, title: 'Payments & Registrations', desc: 'Season fees, camp registrations, tournament entries. Payment plans, auto-renew, and overdue alerts.', color: 'from-purple-500 to-pink-400' },
    { icon: Star, title: 'Parent Portal', desc: 'Dedicated portal for parents — view schedules, RSVP, sign waivers, make payments, and message staff.', color: 'from-rose-500 to-red-400' },
    { icon: Trophy, title: 'Player Portal', desc: 'Player dashboard with stats, achievements, skill ratings, attendance history, and upcoming events.', color: 'from-yellow-500 to-orange-400' },
    { icon: Globe, title: 'Website Widgets', desc: 'Embeddable schedule, roster, registration, payment portal, and waiver widgets for your organization website.', color: 'from-cyan-500 to-blue-400' },
    { icon: Shield, title: 'Stats & Analytics', desc: 'Season statistics, skill ratings, attendance rates, and payment summaries. Coach notes and player development.', color: 'from-teal-500 to-cyan-400' },
  ];

  const tiers = [
    {
      name: 'Starter Sports',
      monthly: 49, annual: 39,
      desc: 'Core tools for small teams and individual coaches',
      badge: null,
      dark: false,
      accentClass: 'border-slate-200 hover:border-green-300',
      btnClass: 'border-2 border-green-500 text-green-700 hover:bg-green-50',
      priceColor: 'text-green-600',
      features: [
        'Basic roster management',
        'Game & practice scheduling',
        'Team messaging',
        'Attendance tracking',
        'Up to 1 team',
      ],
    },
    {
      name: 'Growth Sports',
      monthly: 79, annual: 63,
      desc: 'Expanding teams with payments and registrations',
      badge: null,
      dark: false,
      accentClass: 'border-slate-200 hover:border-blue-300',
      btnClass: 'border-2 border-blue-500 text-blue-700 hover:bg-blue-50',
      priceColor: 'text-blue-600',
      features: [
        'Everything in Starter',
        'Online payments & invoicing',
        'Season registrations',
        'Advanced attendance',
        'Up to 3 teams',
      ],
    },
    {
      name: 'Pro Sports',
      monthly: 199, annual: 159,
      desc: 'Full system with branding, portals, and automation',
      badge: 'Most Popular',
      dark: false,
      accentClass: 'border-purple-300 shadow-lg shadow-purple-100',
      btnClass: 'border-2 border-purple-500 text-purple-700 hover:bg-purple-50',
      priceColor: 'text-purple-600',
      features: [
        'Everything in Growth',
        'Parent & player portals',
        'Digital waivers & forms',
        'Partial branding (custom colors, CRM + email)',
        'Document automation',
        'Up to 10 teams',
      ],
    },
    {
      name: 'Elite Sports Suite',
      monthly: 250, annual: 200,
      desc: 'Full branding, mobile app icon, every feature unlocked',
      badge: 'Best Value',
      dark: true,
      accentClass: 'border-green-500 shadow-xl shadow-green-200',
      btnClass: 'bg-white text-green-700 font-bold hover:bg-green-50',
      priceColor: 'text-white',
      features: [
        'Everything in Pro',
        'Full custom branding',
        'Team logo throughout system',
        'Full CRM + email + widget branding',
        'Mobile app branded icon',
        'Powered by Operon (subtle)',
        'Unlimited teams & players',
        'Priority support & onboarding',
      ],
    },
  ];

  const steps = [
    { n: '01', title: 'Choose your setup', desc: 'Tell us about your organization — sport, size, and what you need most.' },
    { n: '02', title: 'Configure your system', desc: 'Set up your roster, schedule templates, payment options, and portal settings.' },
    { n: '03', title: 'Invite your team', desc: 'Add coaches, players, and parents with their specific access roles.' },
    { n: '04', title: 'AI finishes setup', desc: 'Our AI guides you through any remaining configuration and suggests optimizations.' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="inline-flex">
              <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-9 w-auto object-contain" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-slate-600 hover:text-green-600 transition-colors text-sm font-medium">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-green-600 transition-colors text-sm font-medium">How It Works</a>
              <a href="#pricing" className="text-slate-600 hover:text-green-600 transition-colors text-sm font-medium">Pricing</a>
              <a href={`${APP_URL}/login`} className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Login</a>
              <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all">
                Start Your Sports Setup
              </a>
            </div>
            <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-5 space-y-4">
            <a href="#features" className="block text-slate-700 font-medium">Features</a>
            <a href="#pricing" className="block text-slate-700 font-medium">Pricing</a>
            <a href={`${APP_URL}/login`} className="block text-slate-700 font-medium">Login</a>
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="block w-full text-center px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold">
              Start Your Sports Setup
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-green-950 to-emerald-950 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/50 border border-green-700 text-green-300 text-sm font-semibold mb-6">
            <Trophy className="w-4 h-4" /> Sports CRM Suite
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Run your entire sports organization<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              — not just your team
            </span>
          </h1>
          <p className="text-slate-300 text-xl mb-4 max-w-2xl mx-auto">
            Teams, schedules, registrations, payments, communication, and merch — all in one platform.
          </p>
          <p className="text-green-400/80 text-sm mb-10 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> AI will help you finish setup automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all flex items-center gap-2"
            >
              Book Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`${APP_URL}/login`}
              onClick={() => saveFunnel()}
              className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 text-center">
            {['Roster','Messaging','Scheduling','Attendance','Payments','Registrations','Waivers'].map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Everything Your Organization Needs</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">One system for rosters, schedules, payments, waivers, portals, and communication.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-green-300 hover:shadow-md transition-all group">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feat.color} mb-4`}>
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Who It's For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🏅', title: 'Sports Teams & Clubs', items: ['Youth & adult leagues','Multi-team management','Full roster + parent contacts','Season scheduling & tournaments'] },
              { emoji: '🏋️', title: 'Coaches & Trainers', items: ['Individual athlete tracking','Skills & progress notes','Class scheduling & billing','Certification tracking'] },
              { emoji: '🎓', title: 'Athletic Organizations', items: ['Multi-sport programs','Staff & volunteer management','Compliance & waivers','Membership tiers'] },
            ].map((card, i) => (
              <div key={i} className="p-7 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                <div className="text-4xl mb-3">{card.emoji}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <ul className="space-y-2.5">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent + Player Portals */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Parent & Player Portals</h2>
              <p className="text-slate-600 text-lg mb-6">Give parents and players their own dedicated access — without flooding your inbox or staff schedule.</p>
              <div className="space-y-4">
                {[
                  { label: 'Parent Portal', items: ['View upcoming schedule & RSVP','Sign waivers & forms digitally','Make payments & view history','Message coaching staff'] },
                  { label: 'Player Portal', items: ['View personal stats & achievements','Track attendance history','See upcoming events','Access team communications'] },
                ].map((portal, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      {portal.label}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {portal.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 text-white">
              <Trophy className="w-10 h-10 mb-4 text-green-200" />
              <h3 className="text-2xl font-bold mb-3">Website Widgets</h3>
              <p className="text-green-100 mb-5">Embed live schedules, roster pages, registration forms, and payment portals directly on your organization's website.</p>
              <ul className="space-y-2">
                {['Live schedule widget','Online registration embed','Payment portal embed','Waiver signing widget','Public roster display'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-green-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How It Works</h2>
            <p className="text-slate-500 text-lg">Up and running in under an hour. AI helps finish the rest.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-200">
                  <span className="text-white font-bold text-lg">{step.n}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute mt-7 ml-full w-8">
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Sports Suite Pricing</h2>
            <p className="text-slate-500 text-lg mb-6">Choose the package that fits your organization. Add to any Operon plan or run standalone.</p>
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-2 py-1">
              <button onClick={() => setBilling('monthly')} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${billing === 'monthly' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Monthly</button>
              <button onClick={() => setBilling('annual')} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${billing === 'annual' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                Annual <span className="text-green-500 font-bold text-xs">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <div key={i} className={`relative p-6 rounded-2xl border-2 flex flex-col transition-all ${tier.accentClass} ${tier.dark ? 'bg-gradient-to-b from-green-600 to-emerald-700' : 'bg-white'}`}>
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs font-bold shadow">
                    {tier.badge}
                  </div>
                )}
                <div className="mb-4">
                  <h4 className={`text-lg font-bold mb-1 ${tier.dark ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h4>
                  <p className={`text-sm ${tier.dark ? 'text-green-100' : 'text-slate-500'}`}>{tier.desc}</p>
                </div>
                <div className="mb-5">
                  <span className={`text-3xl font-bold ${tier.priceColor}`}>
                    ${billing === 'annual' ? tier.annual : tier.monthly}
                  </span>
                  <span className={`text-sm ${tier.dark ? 'text-green-200' : 'text-slate-500'}`}>/month</span>
                  {billing === 'annual' && (
                    <p className={`text-xs mt-0.5 ${tier.dark ? 'text-green-200' : 'text-green-600'}`}>Save 20% billed annually</p>
                  )}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${tier.dark ? 'text-green-50' : 'text-slate-600'}`}>
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.dark ? 'text-white' : 'text-green-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${APP_URL}/login`}
                  onClick={() => saveFunnel(tier.name)}
                  className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${tier.btnClass}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Trophy className="w-12 h-12 text-green-400 mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Run Your Sports Organization?</h2>
          <p className="text-slate-300 text-lg mb-8">Set up your roster, schedule, and portals in one afternoon. AI will help you finish everything.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all flex items-center gap-2">
              Book Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-8 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Operon CRM. All rights reserved. Created by <a href="https://fullstacktechsolutions.com" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400">Full Stack Tech & Solutions</a></p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link to="/integrations" className="hover:text-slate-300 transition-colors">Integrations</Link>
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
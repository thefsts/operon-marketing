import { useState, useEffect } from 'react';
import { Home, CheckCircle, ArrowRight, Menu, X, FileText, Users, BarChart3, Kanban, FileSignature, Shield, Sparkles, Building2, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(plan?: string) {
  localStorage.setItem('operon_funnel_type', 'real_estate');
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'real_estate');
  if (plan) localStorage.setItem('operon_selected_plan', plan);
}

export default function RealEstatePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    saveFunnel();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Kanban, title: 'Deal Pipeline', desc: 'Visual pipeline from lead to close. Track every deal, offer, negotiation, and closing step with drag-and-drop simplicity.', color: 'from-emerald-500 to-teal-400' },
    { icon: Home, title: 'Listings Management', desc: 'Manage active listings, property details, showing schedules, and status updates in one organized place.', color: 'from-green-500 to-emerald-400' },
    { icon: Users, title: 'Client Tracking', desc: 'Complete client profiles with communication history, buyer preferences, property interests, and follow-up reminders.', color: 'from-blue-500 to-cyan-400' },
    { icon: FileSignature, title: 'Documents & E-Signatures', desc: 'Contracts, disclosures, and agreements with built-in e-signature. Everything stored and organized by transaction.', color: 'from-purple-500 to-indigo-400' },
    { icon: Shield, title: 'License & Credential Tracking', desc: 'Track agent licenses, renewal dates, E&O insurance, and credential status with automated expiration alerts.', color: 'from-rose-500 to-pink-400' },
    { icon: BarChart3, title: 'Commission & Revenue Tracking', desc: 'Track commissions per deal, split structures, and revenue summaries. Know exactly where your income stands.', color: 'from-amber-500 to-orange-400' },
    { icon: FileText, title: 'Regulatory Disclosures', desc: 'Track required disclosures per transaction. Automated reminders ensure nothing is missed before close.', color: 'from-cyan-500 to-blue-400' },
    { icon: MapPin, title: 'Service Area Management', desc: 'Define your market areas, track listings by location, and manage geographic territories for your team.', color: 'from-teal-500 to-green-400' },
  ];

  const steps = [
    { n: '01', title: 'Add your listings', desc: 'Import or create your active listings and current pipeline.' },
    { n: '02', title: 'Set up your pipeline', desc: 'Configure deal stages to match your sales process — from inquiry to close.' },
    { n: '03', title: 'Add clients & contacts', desc: 'Build your client database with buyer/seller profiles and history.' },
    { n: '04', title: 'AI optimizes your workflow', desc: 'Our AI suggests next steps, follow-ups, and pipeline improvements.' },
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
              <a href="#features" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">How It Works</a>
              <Link to="/#pricing" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">Pricing</Link>
              <a href={`${APP_URL}/login`} className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Login</a>
              <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                Start Your Real Estate Setup
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
            <Link to="/#pricing" className="block text-slate-700 font-medium">Pricing</Link>
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="block w-full text-center px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold">Start Setup</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-700 text-emerald-300 text-sm font-semibold mb-6">
            <Home className="w-4 h-4" /> Real Estate CRM
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Close More Deals and Manage<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Your Pipeline in One Place
            </span>
          </h1>
          <p className="text-slate-300 text-xl mb-4 max-w-2xl mx-auto">
            Listings, clients, deals, documents, commissions, and compliance — everything your brokerage or agency needs in a single platform.
          </p>
          <p className="text-emerald-400/80 text-sm mb-10 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> AI will help you configure your system and optimize your workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all flex items-center gap-2">
              Start Your Real Estate Setup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact" className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Quick capabilities bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 text-center">
            {['Listings','Pipeline','Client Tracking','Marketing','Documents'].map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Built for Real Estate Professionals</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Every tool your brokerage or agency needs — configured for real estate workflows.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all">
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

      {/* Deal + Client detail */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200">
              <Kanban className="w-10 h-10 text-emerald-600 mb-5" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Deal Pipeline & Listings</h3>
              <p className="text-slate-600 mb-5">Track every transaction from first contact through closing — with a visual pipeline that mirrors your process.</p>
              <ul className="space-y-3">
                {['Visual drag-and-drop pipeline','Listing status management','Offer tracking & negotiation log','Showing scheduler','Close date reminders & alerts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200">
              <Users className="w-10 h-10 text-blue-600 mb-5" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Client & Contact Management</h3>
              <p className="text-slate-600 mb-5">Build lasting relationships with a CRM designed around how real estate professionals work with buyers and sellers.</p>
              <ul className="space-y-3">
                {['Buyer & seller profiles','Communication history','Property interest tracking','Automated follow-up reminders','Referral source tracking'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing + Automation */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Marketing & Automation</h2>
              <p className="text-slate-600 text-lg mb-6">Stay in front of clients automatically — without spending hours managing campaigns.</p>
              <div className="space-y-4">
                {[
                  { title: 'Email Campaigns', desc: 'Send market updates, new listings, and nurture sequences to segmented client lists.' },
                  { title: 'Social Media Scheduling', desc: 'Schedule listing posts, market updates, and brand content across your social accounts.' },
                  { title: 'Automated Follow-Ups', desc: 'Set triggers to automatically reach out to leads, check in with past clients, and follow up after showings.' },
                  { title: 'AI-Powered Suggestions', desc: 'Let AI recommend the best next action for each client and deal based on activity history.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">{item.title} — </span>
                      <span className="text-slate-600 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
              <Building2 className="w-10 h-10 mb-4 text-emerald-200" />
              <h3 className="text-2xl font-bold mb-3">Compliance & Document Management</h3>
              <p className="text-emerald-100 mb-5">Keep transactions compliant and documentation organized — from disclosure tracking to final closing docs.</p>
              <ul className="space-y-2.5">
                {['License & credential tracking','Regulatory disclosure management','Transaction document storage','E-signature on contracts & agreements','Audit-friendly activity history'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-emerald-100 text-sm">
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
            <p className="text-slate-500 text-lg">Set up your CRM in a few simple steps. AI does the heavy lifting.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200">
                  <span className="text-white font-bold text-lg">{step.n}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Link to main */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Pricing for Real Estate Teams</h2>
          <p className="text-slate-500 text-lg mb-6">Start with any Operon plan — all include the real estate CRM. Upgrade as your team grows.</p>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              { name: 'Starter', price: '$29', note: '/month', desc: '2 users · Basic CRM · Listings' },
              { name: 'Professional', price: '$49', note: '/month', desc: '4 users · Pipeline · Automation', popular: true },
              { name: 'Business', price: '$99', note: '/month', desc: '10 users · Docs · E-Signatures' },
            ].map((plan, i) => (
              <div key={i} className={`p-6 rounded-2xl border-2 text-center ${plan.popular ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                {plan.popular && <div className="text-xs font-bold text-emerald-600 mb-2">Most Popular</div>}
                <div className="text-2xl font-bold text-slate-900">{plan.price}<span className="text-slate-500 text-sm font-normal">{plan.note}</span></div>
                <div className="font-semibold text-slate-800 mt-1">{plan.name}</div>
                <div className="text-slate-500 text-sm mt-1">{plan.desc}</div>
              </div>
            ))}
          </div>
          <Link to="/#pricing" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
            View full pricing details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Home className="w-12 h-12 text-emerald-400 mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Run Your Real Estate CRM?</h2>
          <p className="text-slate-300 text-lg mb-8">Set up your pipeline, add your listings, and let AI help you optimize your workflow.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all flex items-center gap-2">
              Start Your Real Estate CRM <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact" className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
              <Phone className="w-5 h-5" /> Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-8 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Operon CRM. All rights reserved. Created by <a href="https://fullstacktechsolutions.com" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400">Full Stack Tech & Solutions</a></p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
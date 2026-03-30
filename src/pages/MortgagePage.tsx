import { useState, useEffect } from 'react';
import { Building2, CheckCircle, ArrowRight, Menu, X, FileText, Users, BarChart3, Kanban, FileSignature, Shield, Sparkles, Calculator, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(plan?: string) {
  localStorage.setItem('operon_funnel_type', 'mortgage');
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'mortgage');
  if (plan) localStorage.setItem('operon_selected_plan', plan);
}

export default function MortgagePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    saveFunnel();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Kanban, title: 'Loan Pipeline', desc: 'Visual pipeline from application to closing. Track every loan stage, condition, and milestone with drag-and-drop simplicity.', color: 'from-indigo-500 to-purple-400' },
    { icon: Users, title: 'Client Management', desc: 'Complete borrower profiles with communication history, document status, and follow-up reminders.', color: 'from-blue-500 to-cyan-400' },
    { icon: FileText, title: 'Document Workflows', desc: 'Organize, track, and manage loan documents with automated condition clearing and status updates.', color: 'from-emerald-500 to-green-400' },
    { icon: Calendar, title: 'Appointment Scheduling', desc: 'Built-in calendar for loan consultations, document reviews, and closing appointments with automated reminders.', color: 'from-violet-500 to-purple-400' },
    { icon: FileSignature, title: 'E-Signatures', desc: 'Secure electronic signatures integrated directly in your workflow. DocuSign API included at no charge.', color: 'from-amber-500 to-orange-400' },
    { icon: Calculator, title: 'Application Tracking', desc: 'Track applications from pre-qualification through underwriting to closing with status visibility.', color: 'from-rose-500 to-pink-400' },
    { icon: Shield, title: 'Compliance Management', desc: 'TRID, KYC, and regulatory compliance tracking with automated reminders for deadlines and disclosures.', color: 'from-cyan-500 to-blue-400' },
    { icon: BarChart3, title: 'Performance Analytics', desc: 'Track loan volume, closing rates, time-to-close, and team performance with detailed reporting.', color: 'from-teal-500 to-emerald-400' },
  ];

  const steps = [
    { n: '01', title: 'Add your pipeline', desc: 'Configure loan stages from application through closing.' },
    { n: '02', title: 'Import clients', desc: 'Add borrowers, co-borrowers, and referral partners.' },
    { n: '03', title: 'Set up documents', desc: 'Configure document checklists for each loan type.' },
    { n: '04', title: 'AI optimizes workflow', desc: 'AI suggests next steps and automates follow-ups.' },
  ];

  const pricingPlans = [
    { name: 'Starter', price: '$49', note: '/month', desc: 'Small teams · Basic CRM · Loan Pipeline' },
    { name: 'Professional', price: '$69', note: '/month', desc: 'Growing teams · Documents · Automation' },
    { name: 'Growth', price: '$99', note: '/month', desc: 'Scaling teams · AI insights · Reporting', popular: true },
    { name: 'Business', price: '$150', note: '/month', desc: 'Established teams · E-Sign · Compliance' },
    { name: 'Enterprise', price: '$299', note: '/month', desc: 'Large lenders · White-label · TRID' },
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
              <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">How It Works</a>
              <Link to="/#pricing" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">Pricing</Link>
              <a href={`${APP_URL}/login`} className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Login</a>
              <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
                Start Your Mortgage Setup
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
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="block w-full text-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold">Start Setup</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-300 text-sm font-semibold mb-6">
            <Building2 className="w-4 h-4" /> Mortgage CRM
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Manage Clients, Applications, Documents<br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
              and Closings in One System
            </span>
          </h1>
          <p className="text-slate-300 text-xl mb-4 max-w-2xl mx-auto">
            Loan pipeline, borrower tracking, document workflows, and appointment scheduling — everything your mortgage business needs in a single platform.
          </p>
          <p className="text-indigo-400/80 text-sm mb-10 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> AI will help you configure your system and optimize your workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center gap-2">
              Start Your Mortgage Setup
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
            {['Loan Pipeline','Documents','Client Tracking','Scheduling','Compliance'].map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Built for Mortgage Professionals</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Every tool your mortgage business needs — configured for lending workflows.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
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

      {/* Pipeline + Client detail */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="p-8 rounded-2xl bg-indigo-50 border border-indigo-200">
              <Kanban className="w-10 h-10 text-indigo-600 mb-5" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Loan Pipeline Management</h3>
              <p className="text-slate-600 mb-5">Track every loan from application through closing — with a visual pipeline that mirrors your process.</p>
              <ul className="space-y-3">
                {['Visual drag-and-drop pipeline','Application status tracking','Condition management','Milestone reminders','Closing date coordination'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200">
              <Users className="w-10 h-10 text-blue-600 mb-5" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Borrower & Partner Management</h3>
              <p className="text-slate-600 mb-5">Build lasting relationships with a CRM designed for mortgage professionals working with borrowers and referral partners.</p>
              <ul className="space-y-3">
                {['Borrower & co-borrower profiles','Communication history','Referral partner tracking','Automated follow-up reminders','Document status visibility'].map((item, i) => (
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

      {/* Calendar & Scheduling */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Built-In Scheduling & Calendar</h2>
              <p className="text-slate-600 text-lg mb-6">Manage appointments, consultations, and closing schedules with an integrated calendar system.</p>
              <div className="space-y-4">
                {[
                  { title: 'Loan Consultations', desc: 'Schedule and track initial consultations with potential borrowers.' },
                  { title: 'Document Review Meetings', desc: 'Coordinate document review sessions with borrowers and partners.' },
                  { title: 'Closing Appointments', desc: 'Manage closing schedules with automated reminders.' },
                  { title: 'AI-Powered Scheduling', desc: 'Let AI suggest optimal times and manage your calendar automatically.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">{item.title} — </span>
                      <span className="text-slate-600 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
              <Calendar className="w-10 h-10 mb-4 text-indigo-200" />
              <h3 className="text-2xl font-bold mb-3">AI-Powered Calendar Assistant</h3>
              <p className="text-indigo-100 mb-5">Your AI assistant helps manage your schedule, reminds you of upcoming appointments, and suggests optimal times for meetings.</p>
              <ul className="space-y-2.5">
                {['Day/week/month calendar views','Drag-and-drop rescheduling','Automated reminders','AI schedule optimization'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-indigo-100 text-sm">
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-200">
                  <span className="text-white font-bold text-lg">{step.n}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Pricing for Mortgage Teams</h2>
          <p className="text-slate-500 text-lg mb-6">Premium vertical with advanced workflows. Start with any plan — upgrade as your team grows.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`p-5 rounded-2xl border-2 text-center ${plan.popular ? 'border-indigo-400 bg-indigo-50 ring-2 ring-indigo-400' : 'border-slate-200 bg-white'}`}>
                {plan.popular && <div className="text-xs font-bold text-indigo-600 mb-2">Most Popular</div>}
                <div className="text-2xl font-bold text-slate-900">{plan.price}<span className="text-slate-500 text-sm font-normal">{plan.note}</span></div>
                <div className="font-semibold text-slate-800 mt-1">{plan.name}</div>
                <div className="text-slate-500 text-xs mt-1">{plan.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel('growth')} className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
              Start Your Setup
            </a>
            <Link to="/contact" className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-100 transition-all">
              Book Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Building2 className="w-12 h-12 text-indigo-400 mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Run Your Mortgage CRM?</h2>
          <p className="text-slate-300 text-lg mb-8">Set up your pipeline, add your borrowers, and let AI help you optimize your workflow.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center gap-2">
              Start Your Mortgage CRM <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
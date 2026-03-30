import { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Users, Brain, FolderKanban, FileCheck, FileText, ShoppingCart,
  Megaphone, Zap, Building2, Home, Scale, Stethoscope,
  Store, Briefcase, BarChart3, Kanban, FileSignature,
  Share2, MapPin, MessageSquare, Shield, CheckCircle, ArrowRight,
  Play, Menu, X, Sparkles, Mail, User, Building, Phone,
  Trophy, Calendar, CreditCard, Star, Activity, Globe, ChevronRight,
  Linkedin, Facebook, Instagram, Twitter, MonitorSmartphone, Clock,
  Target, Mic, PenTool, Download, Layers
} from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

// ─── Funnel localStorage helpers ────────────────────────────────────────────
function saveFunnel(type: string) {
  localStorage.setItem('operon_funnel_type', type);
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'industry');
}

function clearFunnel() {
  ['operon_funnel_type','operon_last_url','operon_last_step','operon_selected_plan',
   'operon_business_type','operon_needs','operon_size','operon_current_system'].forEach(k => localStorage.removeItem(k));
}

export default function MarketingHome() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [sportsBilling, setSportsBilling] = useState<'monthly' | 'annual'>('monthly');
  const [showDemo, setShowDemo] = useState(false);
  const [demoEnded, setDemoEnded] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', company: '', phone: '' });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [continueBanner, setContinueBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    // Check for saved funnel progress
    const saved = localStorage.getItem('operon_funnel_type');
    if (saved && localStorage.getItem('operon_last_step')) {
      setContinueBanner(true);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContinueFunnel = useCallback(() => {
    const lastUrl = localStorage.getItem('operon_last_url');
    const funnelType = localStorage.getItem('operon_funnel_type');
    setContinueBanner(false);
    if (lastUrl && lastUrl !== window.location.href) {
      window.location.href = lastUrl;
    } else if (funnelType) {
      navigate(`/${funnelType.replace('_', '-')}`);
    }
  }, [navigate]);

  const handleStartOver = useCallback(() => {
    clearFunnel();
    setContinueBanner(false);
  }, []);

  const handleStartDemo = () => {
    setShowDemo(true);
    setDemoEnded(false);
    setLeadSubmitted(false);
    setLeadForm({ name: '', email: '', company: '', phone: '' });
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLeadSubmitting(false);
    setLeadSubmitted(true);
  };

  // ─── Industries (5 focused) ───────────────────────────────────────────────
  const industries = [
    {
      name: 'Real Estate',
      icon: Home,
      color: 'from-emerald-500 to-teal-400',
      tagColor: 'bg-emerald-100 text-emerald-700',
      description: 'Brokerages, agents, and property managers — listings, pipelines, client tracking, commissions, and documents in one place.',
      tags: ['Listings Management', 'Deal Pipeline', 'Client Tracking', 'Commission Tracking', 'Document Storage'],
      path: '#real-estate',
    },
    {
      name: 'Legal',
      icon: Scale,
      color: 'from-amber-500 to-orange-400',
      tagColor: 'bg-amber-100 text-amber-700',
      description: 'Law firms and attorneys — case management, documents, confidentiality controls, time tracking, and billing.',
      tags: ['Case Management', 'Document Vault', 'Confidentiality Controls', 'Time Tracking', 'Client Billing'],
      path: '#healthcare',
    },
    {
      name: 'Medical',
      icon: Stethoscope,
      color: 'from-rose-500 to-red-400',
      tagColor: 'bg-rose-100 text-rose-700',
      description: 'Healthcare providers and clinics — HIPAA-ready structure, patient workflows, role-based access, and compliance-aware records.',
      tags: ['HIPAA-Ready Structure', 'Patient Workflows', 'Role-Based Access', 'Audit Trails', 'Appointment Scheduling'],
      path: '#healthcare',
    },
    {
      name: 'Sports & Athletics',
      icon: Trophy,
      color: 'from-green-500 to-emerald-400',
      tagColor: 'bg-green-100 text-green-700',
      description: 'Teams, coaches, trainers, and athletic organizations — rosters, schedules, attendance, waivers, payments, and parent/player portals.',
      tags: ['Roster Management', 'Game Scheduling', 'Attendance Tracking', 'Waivers & Forms', 'Parent & Player Portals'],
      path: '#sports',
    },
    {
      name: 'Service Businesses',
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-400',
      tagColor: 'bg-blue-100 text-blue-700',
      description: 'HVAC, plumbing, cleaning, landscaping — job scheduling, dispatching, estimates, invoicing, and customer management.',
      tags: ['Job Scheduling', 'Dispatch', 'Estimates & Invoices', 'Customer CRM', 'Service Areas'],
      path: '#services',
    },
  ];

  const corePlatformModules = [
    { icon: Users, title: 'CRM', desc: 'Contacts, deals, pipelines' },
    { icon: Brain, title: 'AI Assistant', desc: 'Intelligent automation & help' },
    { icon: Mic, title: 'Voice AI', desc: 'Speech-to-text & voice commands' },
    { icon: FolderKanban, title: 'Projects', desc: 'Tasks & project tracking' },
    { icon: FileCheck, title: 'Contracts', desc: 'E-signatures & storage' },
    { icon: FileText, title: 'Documents', desc: 'Secure document vault' },
    { icon: ShoppingCart, title: 'POS', desc: 'Point of sale system' },
    { icon: Megaphone, title: 'Marketing', desc: 'Campaigns & social media' },
    { icon: Zap, title: 'Automation', desc: 'Workflow automation' },
  ];

  const coreFeatures = [
    { icon: BarChart3, title: 'Smart Dashboard', description: 'Real-time analytics and KPIs tailored to your industry. See what matters most at a glance.' },
    { icon: Kanban, title: 'Pipeline Management', description: 'Visual deal pipeline with drag-and-drop. Track every opportunity from lead to close.' },
    { icon: FileSignature, title: 'Proposals & E-Signatures', description: 'Professional proposals with built-in e-signatures. Close deals faster with smart templates.' },
    { icon: Share2, title: 'Social Media Marketing', description: 'Schedule posts, track engagement, and manage all your social accounts in one place.' },
    { icon: MessageSquare, title: 'AI-Powered Assistant', description: 'Get help with emails, proposals, follow-ups, and tasks. Your intelligent business partner.' },
    { icon: Mic, title: 'Voice AI Integration', description: 'Speak naturally to create contacts, update deals, and control your CRM. Hands-free productivity with multiple voice personalities.' },
    { icon: Download, title: 'Import & Export', description: 'Seamlessly import contacts and data from CSV, Excel, or JSON. Export reports and data with one click.' },
    { icon: MapPin, title: 'Geofence Marketing', description: 'Target customers in specific locations. Perfect for service area businesses.', comingSoon: true },
  ];

  const sportsTiers = [
    {
      name: 'Starter Sports',
      price: { monthly: 49, annual: 39 },
      desc: 'Core tools for small teams and individual coaches',
      accent: 'border-slate-200',
      btnClass: 'border-2 border-green-500 text-green-700 hover:bg-green-50',
      features: ['Basic roster management', 'Game & practice scheduling', 'Team messaging', 'Attendance tracking (basic)', 'Up to 1 team'],
    },
    {
      name: 'Growth Sports',
      price: { monthly: 79, annual: 63 },
      desc: 'Expanding teams with payments and registrations',
      accent: 'border-slate-200',
      btnClass: 'border-2 border-blue-500 text-blue-700 hover:bg-blue-50',
      features: ['Everything in Starter', 'Online payments & invoicing', 'Season registrations', 'Advanced attendance', 'Up to 3 teams'],
    },
    {
      name: 'Pro Sports',
      price: { monthly: 199, annual: 159 },
      desc: 'Full system with branding, portals, and automation',
      accent: 'border-purple-300',
      btnClass: 'border-2 border-purple-500 text-purple-700 hover:bg-purple-50',
      features: ['Everything in Growth', 'Parent & player portals', 'Digital waivers & forms', 'Partial branding (custom colors, CRM + email branding)', 'Document automation', 'Up to 10 teams'],
      badge: 'Popular',
    },
    {
      name: 'Elite Sports Suite',
      price: { monthly: 250, annual: 200 },
      desc: 'Full branding, mobile app icon, and every feature unlocked',
      accent: 'border-green-400',
      btnClass: 'bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/30',
      dark: true,
      features: ['Everything in Pro', 'Full custom branding', 'Team logo throughout', 'Full CRM + email + widget branding', 'Mobile app branded icon', 'Powered by Operon (subtle)', 'Unlimited teams & players', 'Priority support & onboarding'],
      badge: 'Best Value',
    },
  ];

  const mainPricing = [
    {
      name: 'Starter',
      monthly: 49, annual: 39,
      annualBilled: 468,
      desc: 'Perfect for small teams getting started',
      features: ['Up to 2 users', '1,000 contacts', 'Basic CRM', 'Task management', 'Mobile app', 'Email support'],
      cta: 'Book Demo',
      highlighted: false,
    },
    {
      name: 'Professional',
      monthly: 69, annual: 55,
      annualBilled: 660,
      desc: 'For growing businesses',
      features: ['Up to 5 users', '5,000 contacts', 'Project management', 'Basic automation', 'AI Assistant', 'Priority email support'],
      cta: 'Book Demo',
      highlighted: false,
    },
    {
      name: 'Growth',
      monthly: 99, annual: 79,
      annualBilled: 948,
      desc: 'Most popular for scaling',
      features: ['Up to 10 users', '10,000 contacts', 'Documents & contracts', 'E-signatures', 'Advanced automation', 'Marketing tools', 'Priority support'],
      cta: 'Book Demo',
      highlighted: true,
    },
    {
      name: 'Business',
      monthly: 150, annual: 120,
      annualBilled: 1440,
      desc: 'For established teams',
      features: ['Up to 25 users', '25,000 contacts', 'Custom fields', 'Social media marketing', 'API access', 'Advanced reporting', 'Premium support'],
      cta: 'Book Demo',
      highlighted: false,
    },
    {
      name: 'Enterprise',
      monthly: 299, annual: 239,
      annualBilled: 2868,
      desc: 'For large organizations',
      features: ['Unlimited users', 'Unlimited contacts', 'White-label included', 'Multi-business support', 'Full compliance suite', 'Custom integrations', 'Dedicated support & SLA'],
      cta: 'Book Demo',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* Continue Where You Left Off — subtle toast banner */}
      {continueBanner && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 bg-slate-900 text-white rounded-full shadow-2xl shadow-slate-900/30 border border-slate-700 text-sm font-medium">
          <span>Continue where you left off?</span>
          <button onClick={handleContinueFunnel} className="px-4 py-1.5 bg-cyan-500 hover:bg-cyan-400 rounded-full text-white font-semibold transition-colors text-xs">Continue</button>
          <button onClick={handleStartOver} className="px-3 py-1.5 text-slate-400 hover:text-white transition-colors text-xs">Start Over</button>
        </div>
      )}

      {/* ─── Navigation ─────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/97 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-slate-900/80 backdrop-blur-md'}`} style={{minHeight: '72px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <a href="/" className="inline-flex items-center">
              <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-12 w-auto object-contain max-w-[200px]" />
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a href="#platform" className={`transition-colors text-sm font-medium ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>Platform</a>
              <a href="#industries" className={`transition-colors text-sm font-medium ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>Industries</a>
              <a href="#about" className={`transition-colors text-sm font-medium ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>About</a>
              <a href="#sports" className={`transition-colors text-sm font-medium flex items-center gap-1 ${scrolled ? 'text-slate-700 hover:text-green-600' : 'text-white/90 hover:text-white'}`}>
                <Trophy className="w-3.5 h-3.5" />Sports
              </a>
              <a href="#compliance" className={`transition-colors text-sm font-medium ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>Compliance</a>
              <a href="#pricing" className={`transition-colors text-sm font-medium ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>Pricing</a>
              <LanguageSwitcher />
              <a href={`${APP_URL}/login`} className={`transition-colors text-sm font-medium ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>Login</a>
              <a
                href="/start"
                onClick={() => saveFunnel('start')}
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Get Started
              </a>
            </div>

            <button className={`md:hidden ${scrolled ? 'text-slate-700' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-100 shadow-lg">
            <div className="px-4 py-5 space-y-4">
              <a href="#platform" className="block text-slate-700 hover:text-cyan-600 font-medium">Platform</a>
              <a href="#industries" className="block text-slate-700 hover:text-cyan-600 font-medium">Industries</a>
              <a href="#sports" className="block text-slate-700 hover:text-green-600 font-medium flex items-center gap-1"><Trophy className="w-4 h-4" />Sports</a>
              <a href="#compliance" className="block text-slate-700 hover:text-cyan-600 font-medium">Compliance</a>
              <a href="#pricing" className="block text-slate-700 hover:text-cyan-600 font-medium">Pricing</a>
              <a href="#about" className="block text-slate-700 hover:text-cyan-600 font-medium">About</a>
              <div className="pt-2 border-t border-slate-100"><LanguageSwitcher /></div>
              <a href={`${APP_URL}/login`} className="block text-slate-700 hover:text-cyan-600 font-medium">Login</a>
              <a href="/start" onClick={() => saveFunnel('start')} className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-32 w-auto object-contain" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Operon — The Operating System<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              for Modern Businesses
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
            Replace your CRM, marketing tools, storefront, accounting, and operations — all in one platform.
          </p>
          <p className="text-base text-cyan-400/80 mb-10 font-medium">
            Stop using 5 different tools to run your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
            >
              Book Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/start"
              onClick={() => saveFunnel('start')}
              className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Start Free Trial
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-slate-400 text-sm">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-400" />No credit card required</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-400" />14-day free trial</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-400" />Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* ─── Industry Funnel Entry ───────────────────────────────────────── */}
      {/* ───────────────────────────────────────────────────────────────────────────────────────────── THE PROBLEM ───────────────────────────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Most businesses are stuck juggling disconnected tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Users, text: 'CRM in one place', color: 'text-red-500' },
              { icon: CreditCard, text: 'Payments in another', color: 'text-orange-500' },
              { icon: Megaphone, text: 'Marketing somewhere else', color: 'text-amber-500' },
              { icon: FileText, text: 'Spreadsheets holding everything together', color: 'text-yellow-600' },
            ].map(({ icon: Icon, text, color }, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className={`w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-slate-700 font-medium">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-lg mt-8 font-medium">
            This slows growth and creates chaos.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────────────────────────── THE SOLUTION ───────────────────────────────────────────────────────────────────────────────────────────── */}
      <section id="solution" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Operon brings everything together
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              One system to run your entire business — from clients to revenue.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Users, label: 'CRM & Deals', color: 'from-blue-500 to-cyan-400' },
              { icon: Calendar, label: 'Appointments & Scheduling', color: 'from-emerald-500 to-green-400' },
              { icon: CreditCard, label: 'Payments & Invoicing', color: 'from-purple-500 to-pink-400' },
              { icon: Megaphone, label: 'Marketing Automation', color: 'from-orange-500 to-amber-400' },
              { icon: ShoppingCart, label: 'Commerce & Storefront', color: 'from-rose-500 to-red-400' },
              { icon: MonitorSmartphone, label: 'POS & Inventory', color: 'from-indigo-500 to-violet-400' },
              { icon: BarChart3, label: 'Accounting & Reports', color: 'from-teal-500 to-cyan-400' },
              { icon: Brain, label: 'AI Assistant', color: 'from-fuchsia-500 to-purple-400' },
            ].map(({ icon: Icon, label, color }, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all hover:-translate-y-0.5">
                <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────────────────────────── INDUSTRIES ───────────────────────────────────────────────────────────────────────────────────────────── */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for every type of business
            </h2>
            <p className="text-slate-500 text-lg">Choose your industry to see how Operon works for you.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Service Businesses', icon: Briefcase, path: '#services', funnel: 'service', color: 'hover:border-blue-400 hover:bg-blue-50', iconColor: 'text-blue-600 bg-blue-100' },
              { label: 'Retail & E-Commerce', icon: Store, path: '#services', funnel: 'ecommerce', color: 'hover:border-purple-400 hover:bg-purple-50', iconColor: 'text-purple-600 bg-purple-100' },
              { label: 'Restaurants', icon: Store, path: '#services', funnel: 'pos', color: 'hover:border-orange-400 hover:bg-orange-50', iconColor: 'text-orange-600 bg-orange-100' },
              { label: 'Healthcare', icon: Stethoscope, path: '#healthcare', funnel: 'medical', color: 'hover:border-rose-400 hover:bg-rose-50', iconColor: 'text-rose-600 bg-rose-100' },
              { label: 'Real Estate & Mortgage', icon: Home, path: '#real-estate', funnel: 'real_estate', color: 'hover:border-emerald-400 hover:bg-emerald-50', iconColor: 'text-emerald-600 bg-emerald-100' },
              { label: 'Sports Organizations', icon: Trophy, path: '#sports', funnel: 'sports', color: 'hover:border-green-400 hover:bg-green-50', iconColor: 'text-green-600 bg-green-100' },
              { label: 'Franchises & Multi-location', icon: Building2, path: '#services', funnel: 'enterprise', color: 'hover:border-cyan-400 hover:bg-cyan-50', iconColor: 'text-cyan-600 bg-cyan-100' },
              { label: 'Legal', icon: Scale, path: '#legal', funnel: 'legal', color: 'hover:border-amber-400 hover:bg-amber-50', iconColor: 'text-amber-600 bg-amber-100' },
            ].map(({ label, icon: Icon, path, funnel, color, iconColor }) => (
              <a
                key={label}
                href={path}
                onClick={() => saveFunnel(funnel)}
                className={`group flex items-center gap-4 p-5 rounded-2xl border-2 border-slate-200 bg-white transition-all cursor-pointer ${color} hover:shadow-md`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-800 text-lg group-hover:text-slate-900">{label}</span>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

{/* ───────────────────────────────────────────────────────────────────────────────────────────── COMPARISON ───────────────────────────────────────────────────────────────────────────────────────────── */}
      <section id="comparison" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Operon wins
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-5 font-semibold text-slate-900">Competitor</th>
                  <th className="text-left p-5 font-semibold text-slate-900">What they offer</th>
                  <th className="text-left p-5 font-semibold text-slate-900">Operon advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-5 font-medium text-slate-800">TeamSnap</td>
                  <td className="p-5 text-slate-500">Team management only</td>
                  <td className="p-5 text-cyan-600 font-medium">Full organization system</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-5 font-medium text-slate-800">Shopify</td>
                  <td className="p-5 text-slate-500">Store only</td>
                  <td className="p-5 text-cyan-600 font-medium">Full business platform</td>
                </tr>
                <tr>
                  <td className="p-5 font-medium text-slate-800">HubSpot</td>
                  <td className="p-5 text-slate-500">CRM only</td>
                  <td className="p-5 text-cyan-600 font-medium">Full operating system</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-slate-900 text-lg mt-8 font-semibold">
            Operon replaces your entire tech stack.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────────────────────────── INTEGRATIONS PREVIEW ───────────────────────────────────────────────────────────────────────────────────────────── */}
      <section id="integrations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Connect with the tools you already use
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Native integrations and Zapier support for seamless connectivity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-10">
            {[
              { name: 'Slack', icon: MessageSquare },
              { name: 'Twilio', icon: Phone },
              { name: 'PayPal', icon: CreditCard },
              { name: 'Square', icon: CreditCard },
              { name: 'Afterpay', icon: CreditCard },
              { name: 'Zip', icon: CreditCard },
              { name: 'Zapier', icon: Zap },
              { name: 'Make', icon: Zap },
            ].map(({ name, icon: Icon }, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all">
                <Icon className="w-8 h-8 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">{name}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/integrations" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors">
              View All Integrations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────────────────────────── Core Features ───────────────────────────────────────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Powerful Tools for Every Business</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">From startups to enterprises, Operon scales with your growth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all hover:-translate-y-0.5">
                <div className="w-11 h-11 mb-4 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                {feature.comingSoon && (
                  <span className="inline-flex items-center gap-1 mt-3 px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                    <Sparkles className="w-3 h-3" /> Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Compliance Section ──────────────────────────────────────────── */}
      <section id="compliance" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-5">
              <Shield className="w-4 h-4" />
              Designed for Regulated Industries
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Compliance-Aware by Design</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Operon is designed to support compliance requirements for Medical, Legal, and Real Estate businesses — with the structure, access controls, and audit trails that regulated industries need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Stethoscope,
                title: 'Medical & Healthcare',
                color: 'from-rose-500 to-red-400',
                bg: 'bg-rose-50 border-rose-200',
                tagBg: 'bg-rose-100 text-rose-700',
                points: [
                  'HIPAA-ready structure and workflows',
                  'Role-based access for staff and providers',
                  'Patient record handling with audit logs',
                  'Appointment and document management',
                  'Designed to support compliance requirements',
                ],
              },
              {
                icon: Scale,
                title: 'Legal & Law Firms',
                color: 'from-amber-500 to-orange-400',
                bg: 'bg-amber-50 border-amber-200',
                tagBg: 'bg-amber-100 text-amber-700',
                points: [
                  'Attorney-client confidentiality controls',
                  'Case and matter management',
                  'Secure document vault with access logs',
                  'Time tracking and billing integration',
                  'Conflict-of-interest check workflows',
                ],
              },
              {
                icon: Home,
                title: 'Real Estate',
                color: 'from-emerald-500 to-teal-400',
                bg: 'bg-emerald-50 border-emerald-200',
                tagBg: 'bg-emerald-100 text-emerald-700',
                points: [
                  'License tracking and verification',
                  'Regulatory disclosure management',
                  'Secure transaction document storage',
                  'Audit-friendly activity history',
                  'Business credential management',
                ],
              },
            ].map((card, i) => (
              <div key={i} className={`p-7 rounded-2xl border ${card.bg}`}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.color} mb-5`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <ul className="space-y-2.5">
                  {card.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              <strong className="text-slate-800">Important:</strong> Operon CRM is designed to support compliance requirements for regulated industries. It is not a substitute for legal counsel or formal compliance certification. We recommend working with your compliance team to ensure all regulatory obligations are met.
            </p>
            <a
              href="#healthcare"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
            >
              Learn about our compliance features <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Main Pricing ────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto mb-8">Start free. Scale as you grow. No hidden fees.</p>

            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-2 py-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${billingPeriod === 'monthly' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${billingPeriod === 'annual' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Annual <span className="text-green-500 font-bold text-xs">–20%</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-4">
            {mainPricing.map((plan, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl transition-all flex flex-col ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-cyan-50 to-blue-50 border-2 border-cyan-400 shadow-xl'
                    : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow">
                    Most Popular
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-slate-500 text-sm">{plan.desc}</p>
                </div>
                <div className="mb-5">
                  <span className="text-4xl font-bold text-slate-900">${billingPeriod === 'annual' ? plan.annual : plan.monthly}</span>
                  <span className="text-slate-500 text-sm">/month</span>
                  {billingPeriod === 'annual' && (
                    <p className="text-xs text-green-600 mt-1">Billed ${plan.annualBilled}/year</p>
                  )}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.name === 'Enterprise' ? '/contact' : `${APP_URL}/login`}
                  className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* ADD-ONS Section */}
          <div className="mt-12 pt-12 border-t border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">ADD-ONS</h3>
              <p className="text-slate-500">Enhance your plan with powerful add-ons</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* E-commerce Add-on */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-green-300">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <ShoppingCart className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">E-commerce</h4>
                <p className="text-slate-500 text-sm mb-3">Online store with payments, inventory, and mobile shopping.</p>
                <div className="text-xl font-bold text-slate-900">
                  +$25<span className="text-sm font-normal text-slate-500">/month</span>
                </div>
              </div>

              {/* POS System Add-on */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-blue-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <MonitorSmartphone className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">POS System</h4>
                <p className="text-slate-500 text-sm mb-3">Point-of-sale with hardware integration and real-time sync.</p>
                <div className="text-xl font-bold text-slate-900">
                  +$49<span className="text-sm font-normal text-slate-500">/month</span>
                </div>
              </div>

              {/* Social Media Marketing Add-on */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-purple-300">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Share2 className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Social Media Marketing</h4>
                <p className="text-slate-500 text-sm mb-3">Schedule posts, track engagement, manage social accounts.</p>
                <div className="text-xl font-bold text-slate-900">
                  +$29<span className="text-sm font-normal text-slate-500">/month</span>
                </div>
              </div>

              {/* Geofence Marketing Add-on */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-orange-300 relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    COMING SOON
                  </span>
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Geofence Marketing</h4>
                <p className="text-slate-500 text-sm mb-3">Location-based marketing with targeted campaigns.</p>
                <div className="text-lg font-semibold text-slate-400">
                  Coming Soon
                </div>
              </div>

              {/* Lead Generation Add-on */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-cyan-300">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-cyan-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Lead Generation</h4>
                <p className="text-slate-500 text-sm mb-3">Smart lead scoring, prospect tracking, and source analytics.</p>
                <div className="text-xl font-bold text-slate-900">
                  +$39<span className="text-sm font-normal text-slate-500">/month</span>
                </div>
              </div>

              {/* Reputation Management Add-on */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-yellow-300">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Reputation Management</h4>
                <p className="text-slate-500 text-sm mb-3">Review monitoring, automated requests, and sentiment analysis.</p>
                <div className="text-xl font-bold text-slate-900">
                  +$29<span className="text-sm font-normal text-slate-500">/month</span>
                </div>
              </div>

              {/* Voice AI Add-on */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-violet-300">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-3">
                  <Mic className="w-5 h-5 text-violet-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Voice AI</h4>
                <p className="text-slate-500 text-sm mb-3">Speech-to-text, voice commands, and multiple AI voice personalities for hands-free CRM control.</p>
                <div className="text-xl font-bold text-slate-900">
                  +$49<span className="text-sm font-normal text-slate-500">/month</span>
                </div>
              </div>

              {/* DocuSign Integration - Included Free */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-blue-300">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <FileSignature className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">DocuSign Integration</h4>
                <p className="text-slate-500 text-sm mb-3">Secure electronic signatures and document workflows integrated directly in your CRM.</p>
                <div className="text-xl font-bold text-emerald-600">
                  Included<span className="text-sm font-normal text-slate-500"> at no charge</span>
                </div>
              </div>

              {/* Multi-Business Add-on */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:border-emerald-300">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Multi-Business</h4>
                <p className="text-slate-500 text-sm mb-3">Manage multiple businesses or brands from a single CRM account with easy switching.</p>
                <div className="text-xl font-bold text-slate-900">
                  +$39<span className="text-sm font-normal text-slate-500">/month</span>
                </div>
              </div>
            </div>

            {/* Bundle Savings */}
            <div className="mt-6 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-4 text-center">
              <p className="text-slate-700 text-sm">
                <span className="font-semibold">💡 Bundle & Save:</span> Add 2 or more add-ons and save 15% on your total add-on cost!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────────── Sports CRM Suite ──────────────────────────────────────────────────────────────────────────────── */}
      <section id="sports" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold mb-5">
              <Trophy className="w-4 h-4" /> Sports CRM Suite
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Built for Sports Organizations
              </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Manage rosters, schedules, attendance, waivers, payments, and player/parent portals — all in one platform designed for sports teams, coaches, and athletic organizations.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              { icon: Users, title: 'Roster Management', description: 'Players, parents, coaches with role-based permissions and separate communication groups.', color: 'from-blue-500 to-cyan-400' },
              { icon: Calendar, title: 'Smart Scheduling', description: 'Practices, games, tournaments — calendar views, RSVP tracking, and recurring events.', color: 'from-green-500 to-emerald-400' },
              { icon: Activity, title: 'Attendance Tracking', description: 'Present, absent, late, excused — per player per event with parent notification.', color: 'from-indigo-500 to-violet-400' },
              { icon: FileCheck, title: 'Digital Waivers', description: 'E-signature waivers with timestamp and IP verification. Liability, medical, travel forms.', color: 'from-orange-500 to-amber-400' },
              { icon: CreditCard, title: 'Payments & Registrations', description: 'Season fees, camp registrations, tournament entries with payment plans and auto-renew.', color: 'from-purple-500 to-pink-400' },
              { icon: Star, title: 'Parent & Player Portals', description: 'Dedicated access for parents and players — schedules, waivers, payments, and messaging.', color: 'from-rose-500 to-red-400' },
            ].map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-green-300 hover:shadow-md transition-all group">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feat.color} mb-4`}>
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Sports Pricing */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Sports Suite Pricing</h3>
            <p className="text-slate-500 mb-6">Add sports management to any Operon plan — or run standalone.</p>

            <div className="inline-flex items-center gap-3 bg-slate-100 rounded-full px-2 py-1 mb-8">
              <button
                onClick={() => setSportsBilling('monthly')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${sportsBilling === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSportsBilling('annual')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${sportsBilling === 'annual' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              >
                Annual <span className="text-green-500 font-bold text-xs">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {sportsTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border-2 ${tier.accent} bg-white transition-all hover:shadow-lg flex flex-col ${tier.dark ? 'bg-gradient-to-b from-green-600 to-emerald-700 border-green-500 text-white' : ''}`}
              >
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
                  <span className={`text-3xl font-bold ${tier.dark ? 'text-white' : 'text-green-600'}`}>
                    ${sportsBilling === 'annual' ? tier.price.annual : tier.price.monthly}
                  </span>
                  <span className={`text-sm ${tier.dark ? 'text-green-200' : 'text-slate-500'}`}>/month</span>
                  {sportsBilling === 'annual' && (
                    <p className={`text-xs mt-0.5 ${tier.dark ? 'text-green-200' : 'text-green-600'}`}>
                      Save 20% billed annually
                    </p>
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
                  onClick={() => { saveFunnel('sports'); localStorage.setItem('operon_selected_plan', tier.name); }}
                  className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${tier.btnClass}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#sports" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors">
              View full Sports CRM details <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>


      {/* ─── Real Estate & Mortgage Section ─── */}
      <section id="real-estate" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-5">
              <Home className="w-4 h-4" /> Real Estate & Mortgage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Built for Real Estate, Mortgage & Title
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Manage listings, leads, deals, commissions, and client relationships — all in one platform designed for brokerages, agents, title companies, and mortgage professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Home, title: 'Listings Management', description: 'Track active listings, status updates, and property details. Link listings to deals and contacts automatically.', color: 'from-emerald-500 to-teal-400' },
              { icon: Kanban, title: 'Deal Pipeline', description: 'Visual pipeline from lead to close. Track every stage — prospect, showing, offer, under contract, closed.', color: 'from-blue-500 to-cyan-400' },
              { icon: Users, title: 'Client Tracking', description: 'Full CRM for buyers, sellers, and referral partners. Notes, activities, and automated follow-ups.', color: 'from-violet-500 to-purple-400' },
              { icon: FileSignature, title: 'Commission Tracking', description: 'Track agent splits, referral fees, and payouts. Auto-calculate commissions on closed deals.', color: 'from-amber-500 to-orange-400' },
              { icon: FileText, title: 'Document Vault', description: 'Secure storage for contracts, disclosures, title documents, and compliance records.', color: 'from-rose-500 to-red-400' },
              { icon: Building2, title: 'Title Company Tools', description: 'Coordinate title searches, closing schedules, and escrow documentation in one place.', color: 'from-cyan-500 to-blue-400' },
            ].map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feat.color} mb-4`}>
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/start" onClick={() => saveFunnel('real_estate')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Book Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Mortgage Section ─── */}
      <section id="mortgage" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-5">
              <Building2 className="w-4 h-4" /> Mortgage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Mortgage CRM & Pipeline Management
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Streamline loan pipelines, referral partner management, and compliance documentation for mortgage brokers and loan officers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Kanban, title: 'Loan Pipeline', description: 'Track every loan from application to closing. Manage stages, milestones, and deadlines in one visual board.', color: 'from-blue-500 to-indigo-400' },
              { icon: Users, title: 'Referral Partner CRM', description: 'Manage real estate agent relationships, track referrals, and automate partner communications.', color: 'from-cyan-500 to-blue-400' },
              { icon: FileCheck, title: 'Compliance Docs', description: 'Store and organize loan documents, disclosures, and compliance records securely.', color: 'from-violet-500 to-purple-400' },
              { icon: Zap, title: 'Automated Follow-ups', description: 'Never miss a touchpoint. Automated emails and SMS keep borrowers and partners updated.', color: 'from-amber-500 to-orange-400' },
              { icon: BarChart3, title: 'Production Reporting', description: 'Track volume, pull-through rates, and loan officer performance with real-time dashboards.', color: 'from-emerald-500 to-teal-400' },
              { icon: Shield, title: 'RESPA Compliance Ready', description: 'Structure your communications and documentation to stay compliant with RESPA and TRID guidelines.', color: 'from-rose-500 to-red-400' },
            ].map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feat.color} mb-4`}>
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/start" onClick={() => saveFunnel('mortgage')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Book Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Healthcare Section ─── */}
      <section id="healthcare" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold mb-5">
              <Stethoscope className="w-4 h-4" /> Healthcare
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              HIPAA-Ready CRM for Healthcare Providers
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Built for medical practices, clinics, therapists, and healthcare organizations. HIPAA-ready structure, patient workflows, and compliance-aware records management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Shield, title: 'HIPAA-Ready Structure', description: 'Role-based access controls, audit trails, and data handling designed to support HIPAA compliance.', color: 'from-rose-500 to-red-400' },
              { icon: Users, title: 'Patient Workflows', description: 'Manage patient intake, follow-ups, and care coordination with structured workflow automation.', color: 'from-blue-500 to-cyan-400' },
              { icon: Calendar, title: 'Appointment Scheduling', description: 'Integrated scheduling with reminders, cancellation management, and provider availability.', color: 'from-emerald-500 to-teal-400' },
              { icon: FileText, title: 'Secure Document Vault', description: 'Encrypted storage for patient records, consent forms, and clinical documentation.', color: 'from-violet-500 to-purple-400' },
              { icon: Activity, title: 'Audit Trails', description: 'Complete audit logs for all record access and modifications — essential for compliance reviews.', color: 'from-amber-500 to-orange-400' },
              { icon: MessageSquare, title: 'Compliant Messaging', description: 'Structured communication channels with appropriate privacy controls for patient interactions.', color: 'from-cyan-500 to-blue-400' },
            ].map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feat.color} mb-4`}>
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/start" onClick={() => saveFunnel('medical')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Book Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Legal Section ─── */}
      <section id="legal" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold mb-5">
              <Scale className="w-4 h-4" /> Legal
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              CRM & Case Management for Law Firms
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Purpose-built for attorneys, law firms, and legal professionals. Case management, confidential document storage, time tracking, and client billing — all in one system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Scale, title: 'Case Management', description: 'Organize matters, track case stages, deadlines, and link all communications and documents to each case.', color: 'from-amber-500 to-orange-400' },
              { icon: FileText, title: 'Confidential Document Vault', description: 'Encrypted, access-controlled storage for sensitive legal documents with full version history.', color: 'from-blue-500 to-indigo-400' },
              { icon: Shield, title: 'Confidentiality Controls', description: 'Role-based permissions ensure only authorized team members access sensitive client information.', color: 'from-violet-500 to-purple-400' },
              { icon: Clock, title: 'Time Tracking', description: 'Track billable hours per matter with detailed time entries, timers, and reporting.', color: 'from-emerald-500 to-teal-400' },
              { icon: CreditCard, title: 'Client Billing', description: 'Generate invoices from time entries, track retainers, and manage trust account balances.', color: 'from-rose-500 to-red-400' },
              { icon: FileSignature, title: 'E-Signatures', description: 'Secure, legally binding electronic signatures for engagement letters, contracts, and agreements.', color: 'from-cyan-500 to-blue-400' },
            ].map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feat.color} mb-4`}>
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/start" onClick={() => saveFunnel('legal')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Book Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Title Companies Section ─── */}
      <section id="title-companies" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-semibold mb-5">
              <FileCheck className="w-4 h-4" /> Title Companies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Title & Escrow Management
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Coordinate closings, manage title orders, track escrow, and communicate with all transaction parties from one streamlined platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: FileCheck, title: 'Title Order Management', description: 'Track title orders from open to close with status updates, task assignments, and deadline tracking.', color: 'from-teal-500 to-emerald-400' },
              { icon: Building2, title: 'Closing Coordination', description: 'Manage all parties — buyers, sellers, agents, lenders — with shared access to closing documents and schedules.', color: 'from-blue-500 to-cyan-400' },
              { icon: FileText, title: 'Escrow Documentation', description: 'Centralized storage for all escrow documents with version control and audit history.', color: 'from-violet-500 to-purple-400' },
              { icon: MessageSquare, title: 'Transaction Communications', description: 'Keep all parties informed with automated status updates, reminders, and messaging.', color: 'from-amber-500 to-orange-400' },
              { icon: Shield, title: 'Compliance Records', description: 'Maintain complete compliance documentation with audit trails for every transaction.', color: 'from-rose-500 to-red-400' },
              { icon: BarChart3, title: 'Pipeline Reporting', description: 'Track open orders, projected closings, and team performance with real-time dashboards.', color: 'from-indigo-500 to-blue-400' },
            ].map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feat.color} mb-4`}>
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/start" onClick={() => saveFunnel('title')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Book Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-5">
              <Briefcase className="w-4 h-4" /> Service Businesses
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              The All-in-One Platform for Service Businesses
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              HVAC, plumbing, cleaning, landscaping, consulting, and more. Manage jobs, dispatch crews, send estimates, invoice clients, and grow your business — from one system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Calendar, title: 'Job Scheduling', description: 'Schedule service appointments, assign technicians, and manage recurring jobs with calendar views.', color: 'from-blue-500 to-cyan-400' },
              { icon: MapPin, title: 'Dispatch & Routing', description: 'Assign jobs to field crews with location-aware dispatching and real-time status updates.', color: 'from-emerald-500 to-teal-400' },
              { icon: FileText, title: 'Estimates & Quotes', description: 'Professional estimates with line items, photos, and e-signature approval. Convert to invoices instantly.', color: 'from-amber-500 to-orange-400' },
              { icon: CreditCard, title: 'Invoicing & Payments', description: 'Send invoices, collect payments in the field, and track accounts receivable all in one place.', color: 'from-violet-500 to-purple-400' },
              { icon: Users, title: 'Customer CRM', description: 'Full customer history — jobs, communications, invoices, and notes — always at your fingertips.', color: 'from-rose-500 to-red-400' },
              { icon: Zap, title: 'Workflow Automation', description: 'Automate follow-up messages, appointment reminders, review requests, and recurring billing.', color: 'from-cyan-500 to-blue-400' },
            ].map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feat.color} mb-4`}>
                  <feat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/start" onClick={() => saveFunnel('service')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Book Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4" /> About Operon
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built to Be Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Business Operating System
              </span>
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Operon was built with a single conviction: every business — regardless of size or industry — deserves a complete, connected platform that replaces the chaos of managing 10 different tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We believe business owners should spend their time growing their business — not wrestling with software. Operon brings CRM, marketing, scheduling, documents, payments, AI automation, and industry-specific tools into one unified platform so you can operate smarter, faster, and with complete confidence.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">Who We Help</h3>
              <p className="text-slate-300 leading-relaxed">
                From independent real estate agents to multi-location healthcare groups, from solo attorneys to growing sports organizations — Operon is designed to adapt to your industry, your workflow, and your team's way of working. One system. Endless capability.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { icon: Globe, title: 'Any Industry', desc: 'Built with vertical-specific features for real estate, legal, healthcare, sports, mortgage, title, and service businesses.' },
                { icon: Shield, title: 'Compliance Ready', desc: 'HIPAA-aware architecture, audit trails, and role-based access controls built in from the ground up.' },
                { icon: Brain, title: 'AI-Powered', desc: 'Intelligent automation, AI assistant, voice commands, and smart insights that learn your business patterns.' },
                { icon: Zap, title: 'Business Operating System', desc: 'Not just a CRM — a complete operating system replacing 10+ tools: CRM, marketing, docs, billing, scheduling, and more.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: '10+', label: 'Industries Served' },
              { number: '50+', label: 'Platform Modules' },
              { number: '99.9%', label: 'Uptime SLA' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-16 w-auto object-contain mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Choose your industry, set up your system, and let AI guide you through the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/start"
              onClick={() => saveFunnel('start')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
            >
              Start Your Setup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={handleStartDemo}
              className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="inline-flex mb-5">
                <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-12 w-auto object-contain" />
              </a>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                The operating system for modern businesses. Any industry. Complete compliance. AI-powered.
              </p>
              <div className="flex items-center gap-2.5">
                {[
                  { href: 'https://linkedin.com/company/operoncrm', label: 'LinkedIn', Icon: Linkedin },
                  { href: 'https://twitter.com/operoncrm', label: 'X / Twitter', Icon: Twitter },
                  { href: 'https://facebook.com/operoncrm', label: 'Facebook', Icon: Facebook },
                  { href: 'https://instagram.com/operoncrm', label: 'Instagram', Icon: Instagram },
                ].map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Product</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#platform" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Industries</a></li>
                <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                <li><a href="#integrations" className="hover:text-cyan-400 transition-colors">Integrations</a></li>
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">Lead Generation</a></li>
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">Reputation</a></li>
                <li><button onClick={handleStartDemo} className="hover:text-cyan-400 transition-colors">Demo</button></li>
                <li><a href={`${APP_URL}/login`} className="hover:text-cyan-400 transition-colors">Login</a></li>
                <li><a href="/docs" className="hover:text-cyan-400 transition-colors">API Docs</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Industries</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#real-estate" className="hover:text-cyan-400 transition-colors">Real Estate</a></li>
                <li><a href="#healthcare" className="hover:text-cyan-400 transition-colors">Legal</a></li>
                <li><a href="#healthcare" className="hover:text-cyan-400 transition-colors">Medical</a></li>
                <li><a href="#sports" className="hover:text-green-400 transition-colors">Sports & Athletics</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">POS & Retail</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Service Business</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Company</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Support</a></li>
                <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Partners</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Legal</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                <li><a href="/cookie-policy" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#healthcare" className="hover:text-cyan-400 transition-colors">Compliance</a></li>
                <li><a href="#healthcare" className="hover:text-cyan-400 transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-slate-500 text-sm">
              <p>© {new Date().getFullYear()} Operon CRM. All rights reserved.</p>
              <span className="hidden md:inline text-slate-700">|</span>
              <p>Created by <a href="https://fullstacktechsolutions.com" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">Full Stack Tech & Solutions</a></p>
            </div>
            <div className="flex items-center gap-5 text-slate-500 text-sm">
              <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-slate-300 transition-colors">Terms</a>
              <a href="/cookie-policy" className="hover:text-slate-300 transition-colors">Cookies</a>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-slate-300 transition-colors">
                ↑ Top
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Demo Modal ──────────────────────────────────────────────────── */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <button onClick={() => setShowDemo(false)} className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full text-white transition-colors">
              <X className="w-5 h-5" />
            </button>

            {!demoEnded ? (
              <div className="aspect-video bg-slate-800 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="h-full flex">
                    <div className="w-16 bg-slate-900 border-r border-slate-700 flex flex-col items-center py-4 gap-4">
                      <div className="w-8 h-8 rounded-lg overflow-hidden">
                        <img src="/operon-logo-transparent.png" alt="Operon" className="w-full h-full object-contain" />
                      </div>
                      {[1,2,3,4].map(n => <div key={n} className="w-8 h-8 bg-slate-700 rounded-lg" />)}
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-8 w-32 bg-slate-700 rounded" />
                        <div className="flex gap-2">
                          <div className="h-8 w-24 bg-cyan-600 rounded-lg" />
                          <div className="h-8 w-24 bg-slate-700 rounded-lg" />
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        {[['Total Leads','2,847','+12%'],['Active Deals','156','+8%'],['Revenue MTD','$48,290','+23%'],['Tasks Due','24','-5%']].map(([label, value, change], i) => (
                          <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                            <div className="text-slate-400 text-xs mb-1">{label}</div>
                            <div className="text-2xl font-bold text-white">{value}</div>
                            <div className={`text-xs ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{change}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                        <div className="text-slate-300 text-sm mb-3">Sales Pipeline</div>
                        <div className="flex gap-3">
                          {['Lead','Qualified','Proposal','Negotiation','Closed'].map((stage, i) => (
                            <div key={i} className="flex-1 bg-slate-700 rounded-lg p-3 text-center">
                              <div className="text-xl font-bold text-white">{[42,28,15,8,12][i]}</div>
                              <div className="text-xs text-slate-400">{stage}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Play className="w-5 h-5 text-white" />
                      </button>
                      <div className="h-1 w-64 bg-white/30 rounded-full">
                        <div className="h-full w-1/3 bg-cyan-400 rounded-full" />
                      </div>
                      <span className="text-white text-sm">1:23 / 4:00</span>
                    </div>
                    <button onClick={() => setDemoEnded(true)} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors text-sm">
                      Skip to End
                    </button>
                  </div>
                </div>
              </div>
            ) : !leadSubmitted ? (
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
                  <p className="text-slate-400">Start your free trial — no credit card required.</p>
                </div>
                <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto space-y-4">
                  {[
                    { icon: User, placeholder: 'Your Name', type: 'text', key: 'name', required: true },
                    { icon: Mail, placeholder: 'Work Email', type: 'email', key: 'email', required: true },
                    { icon: Building, placeholder: 'Company Name', type: 'text', key: 'company', required: true },
                    { icon: Phone, placeholder: 'Phone (optional)', type: 'tel', key: 'phone', required: false },
                  ].map(({ icon: Icon, placeholder, type, key, required }) => (
                    <div key={key} className="relative">
                      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        value={leadForm[key as keyof typeof leadForm]}
                        onChange={e => setLeadForm({ ...leadForm, [key]: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  ))}
                  <button type="submit" disabled={leadSubmitting} className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50">
                    {leadSubmitting ? 'Submitting…' : 'Get Started Free'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-10 text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to Operon!</h3>
                <p className="text-slate-400 mb-6">Check your email for next steps to access your free trial.</p>
                <a href={`${APP_URL}/login`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all">
                  Go to Dashboard <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
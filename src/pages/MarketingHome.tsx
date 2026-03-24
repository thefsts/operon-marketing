import { useState, useEffect } from 'react';
import {
  Users, Brain, FolderKanban, FileCheck, FileText, ShoppingCart,
  Megaphone, Zap, Building2, Home, Scale, Stethoscope, Laptop,
  Store, Briefcase, BarChart3, Kanban, CheckSquare, FileSignature,
  Share2, MapPin, MessageSquare, Shield, CheckCircle, ArrowRight,
  Play, Menu, X
} from 'lucide-react';

export default function MarketingHome() {
  // App URL for login/signup - can be configured
  const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = [
    { name: 'Service Companies', icon: Briefcase, color: 'from-blue-500 to-cyan-400', description: 'HVAC, plumbing, cleaning, landscaping, and all service-based businesses' },
    { name: 'Real Estate', icon: Home, color: 'from-emerald-500 to-teal-400', description: 'Brokerages, agents, property management, and real estate professionals' },
    { name: 'Mortgage', icon: Building2, color: 'from-purple-500 to-pink-400', description: 'Lenders, loan officers, and mortgage brokerage firms' },
    { name: 'Legal', icon: Scale, color: 'from-amber-500 to-orange-400', description: 'Law firms, attorneys, and legal service providers' },
    { name: 'Medical', icon: Stethoscope, color: 'from-rose-500 to-red-400', description: 'Healthcare providers, clinics, and medical practices (HIPAA ready)' },
    { name: 'IT & Tech', icon: Laptop, color: 'from-indigo-500 to-violet-400', description: 'MSPs, software companies, and technology consultants' },
    { name: 'Retail', icon: Store, color: 'from-pink-500 to-rose-400', description: 'Retail stores, e-commerce, and consumer goods businesses' },
  ];

  const features = [
    { icon: BarChart3, title: 'Smart Dashboard', description: 'Real-time analytics and KPIs tailored to your industry. See what matters most at a glance.' },
    { icon: Kanban, title: 'Pipeline Management', description: 'Visual deal pipeline with drag-and-drop. Track every opportunity from lead to close.' },
    { icon: CheckSquare, title: 'Task Automation', description: 'Automated workflows and task assignment. Never miss a follow-up again.' },
    { icon: FileSignature, title: 'Proposals & Quotes', description: 'Professional proposals with e-signatures. Close deals faster with templates.' },
    { icon: FileCheck, title: 'Contract Management', description: 'Create, sign, and store contracts. Automated reminders and renewals.' },
    { icon: Share2, title: 'Social Media Marketing', description: 'Schedule posts, track engagement, and manage all your social accounts in one place.' },
    { icon: MapPin, title: 'Geofence Marketing', description: 'Target customers in specific locations. Perfect for service area businesses.' },
    { icon: MessageSquare, title: 'AI Assistant', description: 'Get help with emails, proposals, and tasks. Your AI-powered business partner.' },
  ];

  const complianceFeatures = [
    { title: 'Business Verification', description: 'License verification, tax ID validation, and business credentials management.' },
    { title: 'Regulatory Disclosures', description: 'Industry-specific disclosure tracking and automated compliance reminders.' },
    { title: 'Document Retention', description: 'Secure document storage with audit trails and retention policies.' },
    { title: 'Role-Based Access', description: 'Granular permissions ensure the right people see the right information.' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Matrix-style background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="matrix-rain" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse" />
                <div className="absolute inset-1 bg-[#0a0a0f] rounded-full" />
                <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full opacity-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/80 rounded-full" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                OPERON
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#industries" className="text-gray-400 hover:text-white transition-colors">Industries</a>
              <a href="#compliance" className="text-gray-400 hover:text-white transition-colors">Compliance</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <button
                href="${APP_URL}/login"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Login
              </button>
              <button
                href="${APP_URL}/login"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-400 hover:text-white">Features</a>
              <a href="#industries" className="block text-gray-400 hover:text-white">Industries</a>
              <a href="#compliance" className="block text-gray-400 hover:text-white">Compliance</a>
              <a href="#pricing" className="block text-gray-400 hover:text-white">Pricing</a>
              <button href="${APP_URL}/login" className="block text-gray-400 hover:text-white">Login</button>
              <button
                href="${APP_URL}/login"
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Animated gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Planet logo */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-2 bg-[#0a0a0f] rounded-full" />
            <div className="absolute inset-4 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full opacity-90" />
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-transparent to-purple-600 -translate-y-1/2 rounded-full" />
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent -translate-x-1/2 rounded-full transform rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/90 rounded-full shadow-lg shadow-cyan-500/50" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              OPERON
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
            The Operating System for Modern Businesses
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            One platform. Any industry. Complete compliance. AI-powered automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              href="${APP_URL}/login"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              href="${APP_URL}/login"
              className="px-8 py-4 border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              View Demo
            </button>
            <button
              href="${APP_URL}/login"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Login →
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/40 rounded-full animate-scroll" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Business Platform Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Run Your Business
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A complete ecosystem designed for efficiency, compliance, and growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'CRM', desc: 'Contact & deal management' },
              { icon: Brain, title: 'AI Assistant', desc: 'Intelligent automation' },
              { icon: FolderKanban, title: 'Projects', desc: 'Task & project tracking' },
              { icon: FileCheck, title: 'Contracts', desc: 'E-signatures & storage' },
              { icon: FileText, title: 'Documents', desc: 'Secure document vault' },
              { icon: ShoppingCart, title: 'POS', desc: 'Point of sale system' },
              { icon: Megaphone, title: 'Marketing', desc: 'Campaigns & social' },
              { icon: Zap, title: 'Automation', desc: 'Workflow automation' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all hover:bg-white/10 cursor-pointer"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Adaptive Section */}
      <section id="industries" className="py-24 relative bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Industry Adaptive
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              OPERON adapts to your industry with specialized terminology, compliance requirements, and workflows
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, i) => (
              <button
                key={i}
                onClick={() => setActiveIndustry(i)}
                className={`px-6 py-3 rounded-full border transition-all ${
                  activeIndustry === i
                    ? `bg-gradient-to-r ${industry.color} border-transparent text-white`
                    : 'border-white/20 text-gray-400 hover:border-white/40'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>

          <div className="relative max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  activeIndustry === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${industry.color} bg-opacity-10 border border-white/10`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{industry.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">{industry.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {i === 0 && ['License Tracking', 'Service Areas', 'Dispatch', 'Estimates', 'Job Photos'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm">{tag}</span>
                    ))}
                    {i === 1 && ['MLS Integration', 'License Verification', 'Commission Tracking', 'CMA Reports', 'Showing Scheduler'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm">{tag}</span>
                    ))}
                    {i === 2 && ['NMLS Tracking', 'Rate Sheets', 'Loan Pipeline', 'TRID Compliance', 'Referral Partners'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm">{tag}</span>
                    ))}
                    {i === 3 && ['Bar Association', 'Case Management', 'Trust Accounting', 'Conflict Checks', 'Time Tracking'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm">{tag}</span>
                    ))}
                    {i === 4 && ['HIPAA Compliance', 'Patient Records', 'Insurance Billing', 'SOAP Notes', 'Appointments'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm">{tag}</span>
                    ))}
                    {i === 5 && ['Ticket Management', 'PSA Tools', 'RMM Integration', 'SLA Tracking', 'Contracts'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm">{tag}</span>
                    ))}
                    {i === 6 && ['Inventory', 'POS Integration', 'E-commerce', 'Loyalty Programs', 'Vendor Management'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Every Business
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From startups to enterprises, OPERON scales with your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-24 relative bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Compliance Built-In</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise-Grade Compliance
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                OPERON is built for regulated industries. From HIPAA to GDPR, we handle compliance so you can focus on your business.
              </p>

              <div className="space-y-4">
                {complianceFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl" />
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Compliance Status</p>
                    <p className="text-sm text-green-400">All requirements verified</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Business License</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Verified</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan-500 to-green-500" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Tax ID (EIN)</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Verified</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan-500 to-green-500" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Disclosures Acknowledged</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Complete</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan-500 to-green-500" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20">
                  <p className="text-sm text-gray-300">
                    <span className="font-medium text-cyan-400">HIPAA Ready:</span> Your business meets all compliance requirements for healthcare operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Start free. Scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-gray-500 mb-6">Perfect for small teams getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Up to 3 users', '1,000 contacts', 'Basic CRM', 'Email support', 'Mobile app'].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                href="${APP_URL}/login"
                className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-colors font-medium"
              >
                Start Free Trial
              </button>
            </div>

            {/* Pro */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-purple-600/10 border border-cyan-500/30">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-gray-500 mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Up to 10 users', '10,000 contacts', 'Full CRM + Projects', 'AI Assistant', 'Documents & Contracts', 'Priority support'].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                href="${APP_URL}/login"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-medium hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-500 mb-6">For regulated industries</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Unlimited users', 'Unlimited contacts', 'Full compliance suite', 'HIPAA/GDPR ready', 'Custom integrations', 'Dedicated support', 'SLA guarantee'].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                href="${APP_URL}/login"
                className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-colors font-medium"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of businesses running on OPERON. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              href="${APP_URL}/login"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2"
            >
              Start Now — It's Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              href="${APP_URL}/login"
              className="px-8 py-4 border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/5 transition-all"
            >
              Book a Demo
            </button>
            <button
              href="${APP_URL}/login"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Login →
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full" />
                  <div className="absolute inset-1 bg-[#0a0a0f] rounded-full" />
                  <div className="absolute inset-1.5 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full opacity-80" />
                </div>
                <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  OPERON
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                The Operating System for Modern Businesses
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 OPERON. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for Matrix rain effect */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes scroll {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        .matrix-rain {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.03), transparent),
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.01) 2px, rgba(255, 255, 255, 0.01) 4px);
          background-size: 100% 100%, 20px 20px;
        }
      `}</style>
    </div>
  );
}
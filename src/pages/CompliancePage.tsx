import { useState, useEffect } from 'react';
import { Shield, Stethoscope, Scale, Home, CheckCircle, ArrowRight, Menu, X, Lock, FileText, Users, Eye, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(type: string) {
  localStorage.setItem('operon_funnel_type', type);
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'compliance');
}

export default function CompliancePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'medical' | 'legal' | 'realestate'>('medical');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const savedFunnel = localStorage.getItem('operon_funnel_type');
    if (savedFunnel === 'medical') setActiveTab('medical');
    else if (savedFunnel === 'legal') setActiveTab('legal');
    else if (savedFunnel === 'real_estate') setActiveTab('realestate');
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = {
    medical: {
      label: 'Medical & Healthcare',
      icon: Stethoscope,
      color: 'from-rose-500 to-red-400',
      tagBg: 'bg-rose-50 border-rose-200',
      accentText: 'text-rose-600',
      headline: 'HIPAA-Ready Structure for Healthcare Providers',
      subheadline: 'Operon is designed to support compliance requirements for clinics, practices, and healthcare organizations — with role-based access, audit-friendly workflows, and secure document handling.',
      features: [
        { icon: Lock, title: 'Role-Based Access Control', desc: 'Granular permissions ensure staff see only what they need. Separate access levels for providers, front desk, billing, and administrators.' },
        { icon: FileText, title: 'Structured Patient Workflows', desc: 'Patient intake, appointment scheduling, and follow-up workflows designed around healthcare operations.' },
        { icon: Eye, title: 'Audit-Friendly Activity Logs', desc: 'Every record view, edit, and export is logged with timestamp and user. Full audit trail for compliance reviews.' },
        { icon: Shield, title: 'HIPAA-Ready Infrastructure', desc: 'Designed to support HIPAA requirements. Data handling, storage, and access patterns built for regulated healthcare environments.' },
        { icon: Users, title: 'Patient & Contact Management', desc: 'Secure patient profiles with document attachments, communication history, and intake form storage.' },
        { icon: AlertCircle, title: 'Compliance Disclaimer Tracking', desc: 'Track required disclosures, acknowledgments, and consent forms with timestamped digital records.' },
      ],
      callout: 'Operon is designed to support HIPAA compliance requirements. It is not a substitute for a formal HIPAA compliance program or legal counsel. We recommend working with your compliance officer to ensure all regulatory obligations are met.',
      cta: 'Start Your Medical Setup',
      funnel: 'medical',
    },
    legal: {
      label: 'Legal & Law Firms',
      icon: Scale,
      color: 'from-amber-500 to-orange-400',
      tagBg: 'bg-amber-50 border-amber-200',
      accentText: 'text-amber-600',
      headline: 'Built for Attorney Confidentiality and Case Management',
      subheadline: 'Operon supports law firms with structured matter management, confidential document handling, time tracking, and the access controls required for attorney-client relationships.',
      features: [
        { icon: Lock, title: 'Attorney-Client Confidentiality Controls', desc: 'Matter-level access controls ensure client information is only accessible to assigned attorneys and staff.' },
        { icon: FileText, title: 'Case & Matter Management', desc: 'Organize cases, matters, and client files with structured workflows from intake through resolution.' },
        { icon: Eye, title: 'Document Vault with Access Logs', desc: 'Secure document storage with full access logging. Know exactly who viewed or edited any file.' },
        { icon: Shield, title: 'Conflict-of-Interest Checks', desc: 'Workflow support for conflict checking before matter intake, with documented results.' },
        { icon: Users, title: 'Time Tracking & Billing', desc: 'Track billable hours per matter, generate billing summaries, and manage client invoicing.' },
        { icon: AlertCircle, title: 'Regulatory Disclosure Tracking', desc: 'Track required disclosures, engagement letters, and compliance acknowledgments for each matter.' },
      ],
      callout: 'Operon is designed to support operational compliance for law firms. It does not provide legal advice and is not a substitute for formal bar compliance programs. Consult your state bar requirements and compliance counsel.',
      cta: 'Start Your Legal Setup',
      funnel: 'legal',
    },
    realestate: {
      label: 'Real Estate',
      icon: Home,
      color: 'from-emerald-500 to-teal-400',
      tagBg: 'bg-emerald-50 border-emerald-200',
      accentText: 'text-emerald-600',
      headline: 'License Tracking and Business Compliance for Real Estate',
      subheadline: 'Operon supports brokerages and agents with license verification, regulatory disclosure management, transaction document storage, and audit-friendly activity history.',
      features: [
        { icon: Shield, title: 'License & Credential Management', desc: 'Track agent licenses, renewal dates, and credential status. Automated alerts before expiration.' },
        { icon: FileText, title: 'Regulatory Disclosure Management', desc: 'Track required disclosures per transaction. Ensure all required documents are signed before deal close.' },
        { icon: Lock, title: 'Transaction Document Storage', desc: 'Secure storage for contracts, disclosures, inspection reports, and closing documents with organized access.' },
        { icon: Eye, title: 'Audit-Friendly Activity History', desc: 'Full activity log for every deal — document views, edits, communications, and status changes.' },
        { icon: Users, title: 'Role-Based Team Access', desc: 'Separate access levels for agents, brokers, transaction coordinators, and administrative staff.' },
        { icon: AlertCircle, title: 'Business Credential Tracking', desc: 'Track business license, tax ID, E&O insurance, and other credential requirements in one place.' },
      ],
      callout: 'Operon is designed to support compliance workflows for real estate businesses. It is not a licensed compliance service and does not substitute for legal or regulatory guidance from your state real estate commission or broker.',
      cta: 'Start Your Real Estate Setup',
      funnel: 'real_estate',
    },
  };

  const faqs = [
    { q: 'Is Operon HIPAA certified?', a: 'Operon is designed to support HIPAA compliance requirements with appropriate data handling, access controls, and audit logging. We do not claim formal HIPAA certification. Healthcare organizations should work with their compliance officer to evaluate fit for their specific requirements.' },
    { q: 'Does Operon sign a Business Associate Agreement (BAA)?', a: 'For healthcare organizations operating under HIPAA, we encourage you to contact us to discuss data handling requirements and appropriate agreements for your use case.' },
    { q: 'Is my data encrypted?', a: 'Yes. Data is encrypted in transit and at rest using industry-standard encryption. Access is controlled through role-based permissions and all access is logged.' },
    { q: 'Can I control who sees specific client records?', a: 'Yes. Operon supports granular role-based access control. You can restrict visibility of specific contacts, matters, patients, or documents to specific users or roles.' },
    { q: 'Does Operon claim to be fully legally compliant?', a: 'No. Operon is designed to support compliance requirements — it provides the structure, tools, and workflows that regulated businesses need. Formal compliance certification and legal obligations remain with your organization and its counsel.' },
  ];

  const active = industries[activeTab];
  const ActiveIcon = active.icon;

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
              <Link to="/#features" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Platform</Link>
              <Link to="/#industries" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Industries</Link>
              <Link to="/#pricing" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Pricing</Link>
              <a href={`${APP_URL}/login`} className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Login</a>
              <a href="/start" className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all">Get Started</a>
            </div>
            <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-5 space-y-4">
            <Link to="/" className="block text-slate-700 font-medium">Home</Link>
            <Link to="/#pricing" className="block text-slate-700 font-medium">Pricing</Link>
            <a href={`${APP_URL}/login`} className="block text-slate-700 font-medium">Login</a>
            <a href="/start" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold">Get Started</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 to-blue-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Compliance-Aware Platform
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Built for Regulated Industries
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-8">
            Operon is designed to support compliance requirements for Medical, Legal, and Real Estate businesses — with role-based access, document handling, and audit-friendly structure.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-900/30 border border-amber-700/50 text-amber-300 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            Operon is designed to support compliance — not a substitute for formal certification or legal counsel.
          </div>
        </div>
      </section>

      {/* Industry Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab switcher */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'medical' as const, label: 'Medical & Healthcare', icon: Stethoscope },
              { key: 'legal' as const, label: 'Legal & Law Firms', icon: Scale },
              { key: 'realestate' as const, label: 'Real Estate', icon: Home },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                  activeTab === key
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Active industry content */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-5 mb-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <ActiveIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{active.headline}</h2>
                <p className="text-slate-600 text-lg">{active.subheadline}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {active.features.map((feat, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${active.tagBg}`}>
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                    <feat.icon className={`w-5 h-5 ${active.accentText}`} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Compliance disclaimer callout */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex gap-3 mb-8">
              <AlertCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm leading-relaxed">{active.callout}</p>
            </div>

            <a
              href={`${APP_URL}/login`}
              onClick={() => saveFunnel(active.funnel)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all"
            >
              {active.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Core Compliance Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Core Compliance Capabilities</h2>
            <p className="text-slate-500 text-lg">Across all regulated industries, Operon provides these foundational compliance-aware features.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Lock, title: 'Role-Based Access', desc: 'Granular permissions control who sees what — down to individual records and documents.' },
              { icon: Eye, title: 'Audit Trails', desc: 'Every action is logged with user, timestamp, and context. Full history for compliance reviews.' },
              { icon: FileText, title: 'Document Handling', desc: 'Secure document storage with version history, access controls, and organized retrieval.' },
              { icon: Shield, title: 'Compliance-Aware Workflows', desc: 'Workflows designed with compliance steps built in — disclosures, acknowledgments, sign-offs.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Compliance FAQ</h2>
            <p className="text-slate-500">Common questions about Operon's compliance approach.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Set Up Your Compliance-Ready CRM?</h2>
          <p className="text-slate-300 text-lg mb-8">Start your free trial and configure Operon for your industry.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/login`} className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all flex items-center gap-2">
              Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact" className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer bottom */}
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
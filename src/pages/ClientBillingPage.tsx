import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CreditCard, DollarSign, FileText, Clock, Send,
  CheckCircle, Menu, X, Linkedin, Facebook, Instagram, Twitter,
  Repeat, PieChart, Shield, Zap
} from 'lucide-react';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const features = [
  {
    icon: CreditCard,
    title: 'Multiple Payment Methods',
    description: 'Accept credit cards, ACH, PayPal, Square, and more. Give clients flexibility in how they pay.'
  },
  {
    icon: FileText,
    title: 'Automated Invoicing',
    description: 'Generate and send invoices automatically. Set up recurring billing for retainer clients.'
  },
  {
    icon: Clock,
    title: 'Payment Tracking',
    description: 'Know exactly who owes what and when. Track payment status in real-time.'
  },
  {
    icon: Send,
    title: 'One-Click Payments',
    description: 'Send payment links that let clients pay instantly. No portals to log into, no friction.'
  },
  {
    icon: Repeat,
    title: 'Recurring Billing',
    description: 'Set up automatic billing cycles for subscriptions, retainers, and ongoing services.'
  },
  {
    icon: PieChart,
    title: 'Revenue Analytics',
    description: 'Track MRR, ARR, and payment trends. Understand your revenue at a glance.'
  }
];

const benefits = [
  'Get paid 2x faster with one-click payments',
  'Reduce manual invoicing by 90%',
  'Accept payments from anywhere',
  'Automate payment reminders',
  'Track revenue in real-time',
  'Secure, PCI-compliant processing'
];

export default function ClientBillingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-10 w-auto object-contain max-w-[160px]" />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link to="/#platform" className="hover:text-cyan-600 transition-colors">Features</Link>
              <Link to="/#industries" className="hover:text-cyan-600 transition-colors">Industries</Link>
              <Link to="/pricing" className="hover:text-cyan-600 transition-colors">Pricing</Link>
              <Link to="/integrations" className="hover:text-cyan-600 transition-colors">Integrations</Link>
              <a href={`${APP_URL}/login`} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">Sign In</a>
              <Link to="/contact" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">Book Demo</Link>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link to="/#platform" className="block py-2 text-slate-600">Features</Link>
              <Link to="/#industries" className="block py-2 text-slate-600">Industries</Link>
              <Link to="/pricing" className="block py-2 text-slate-600">Pricing</Link>
              <Link to="/integrations" className="block py-2 text-slate-600">Integrations</Link>
              <a href={`${APP_URL}/login`} className="block py-2 text-slate-600">Sign In</a>
              <Link to="/contact" className="block py-2 text-cyan-600">Book Demo</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4" />
            Client Billing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Paid Faster{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              With Less Effort
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Automated invoicing, multiple payment options, and real-time tracking. Everything you need to streamline your billing process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {benefits.slice(0, 4).map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Streamline Your Billing Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From invoices to payments, everything you need to manage client billing in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-300 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Accept Every Payment Method</h2>
          <p className="text-slate-600 mb-8">Integrate with the payment providers your clients prefer</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['PayPal', 'Square', 'Stripe', 'Credit Cards', 'ACH', 'Wire Transfer'].map((method) => (
              <div key={method} className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium">
                {method}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Getting Paid Faster</h2>
          <p className="text-lg text-slate-600 mb-8">
            Client billing is included with all plans. Start accepting payments today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors">
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
              Book Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="inline-flex mb-5">
                <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-12 w-auto object-contain" />
              </Link>
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
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Product</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link to="/#platform" className="hover:text-cyan-400 transition-colors">Features</Link></li>
                <li><Link to="/#industries" className="hover:text-cyan-400 transition-colors">Industries</Link></li>
                <li><Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link to="/integrations" className="hover:text-cyan-400 transition-colors">Integrations</Link></li>
                <li><Link to="/lead-generation" className="hover:text-cyan-400 transition-colors">Lead Generation</Link></li>
                <li><Link to="/reputation-management" className="hover:text-cyan-400 transition-colors">Reputation</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Industries</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link to="/real-estate" className="hover:text-cyan-400 transition-colors">Real Estate</Link></li>
                <li><Link to="/compliance" className="hover:text-cyan-400 transition-colors">Legal</Link></li>
                <li><Link to="/compliance" className="hover:text-cyan-400 transition-colors">Medical</Link></li>
                <li><Link to="/sports" className="hover:text-green-400 transition-colors">Sports & Athletics</Link></li>
                <li><Link to="/pos" className="hover:text-cyan-400 transition-colors">POS & Retail</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Company</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Legal</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-slate-500 text-sm">
              <p>© {new Date().getFullYear()} Operon CRM. All rights reserved.</p>
              <span className="hidden md:inline text-slate-700">|</span>
              <p>Created by <a href="https://fullstacktechsolutions.com" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">Full Stack Tech & Solutions</a></p>
            </div>
            <div className="flex items-center gap-5 text-slate-500 text-sm">
              <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-slate-300 transition-colors">↑ Top</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
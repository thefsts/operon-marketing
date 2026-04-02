import { useState, useEffect } from 'react';
import { ShoppingCart, CheckCircle, ArrowRight, Menu, X, CreditCard, Users, BarChart3, Zap, Package, Tag, Repeat, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(bizType?: string) {
  localStorage.setItem('operon_funnel_type', 'pos');
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'pos');
  if (bizType) localStorage.setItem('operon_business_type', bizType);
}

export default function POSPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBiz, setSelectedBiz] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    saveFunnel();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessTypes = [
    { key: 'restaurant', label: 'Restaurant', emoji: '🍽️' },
    { key: 'retail', label: 'Retail Store', emoji: '🛍️' },
    { key: 'salon', label: 'Salon / Barber', emoji: '✂️' },
    { key: 'service', label: 'Service Shop', emoji: '🔧' },
    { key: 'boutique', label: 'Boutique', emoji: '👗' },
    { key: 'other', label: 'Other', emoji: '🏪' },
  ];

  const features = [
    {
      group: 'POS Operations',
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500',
      items: [
        { title: 'Checkout & Payments', desc: 'Fast, reliable checkout with card, cash, and digital payment support.' },
        { title: 'Receipts', desc: 'Digital and print receipts with your branding and order details.' },
        { title: 'Discounts & Promo Codes', desc: 'Create and apply discounts, promotions, and coupon codes at checkout.' },
        { title: 'Transaction History', desc: 'Full record of every transaction, refund, and void with timestamps.' },
      ],
    },
    {
      group: 'Customer Management',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { title: 'Customer Profiles', desc: 'Build a customer database automatically from POS transactions.' },
        { title: 'Purchase History', desc: 'See every transaction, product, and visit for any customer.' },
        { title: 'Follow-Up Marketing', desc: 'Send targeted messages and offers based on purchase behavior.' },
        { title: 'Loyalty & Retention', desc: 'Track repeat customers and create loyalty incentives.' },
      ],
    },
    {
      group: 'Staff & Operations',
      icon: Zap,
      color: 'from-amber-500 to-orange-500',
      items: [
        { title: 'Staff Roles & Permissions', desc: 'Control what each staff member can see and do in the system.' },
        { title: 'Activity Tracking', desc: 'Monitor transactions and activity by employee.' },
        { title: 'Notes & Workflows', desc: 'Add internal notes, task assignments, and operational workflows.' },
        { title: 'Scheduling (optional)', desc: 'Manage staff schedules and shifts within the same platform.' },
      ],
    },
    {
      group: 'Reporting & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      items: [
        { title: 'Sales Summaries', desc: 'Daily, weekly, and monthly sales totals by product, category, or staff.' },
        { title: 'Transaction Records', desc: 'Exportable transaction logs for accounting and reconciliation.' },
        { title: 'Customer Value Insights', desc: 'Identify your best customers and highest-value products.' },
        { title: 'Trend Analysis', desc: 'Track performance over time and spot growth opportunities.' },
      ],
    },
  ];

  const steps = [
    { n: '01', title: 'Choose your business type', desc: 'Tell us what kind of POS business you run.' },
    { n: '02', title: 'Set up your products & workflow', desc: 'Add your menu items, services, or products. Configure your POS layout.' },
    { n: '03', title: 'Start taking payments', desc: 'Begin processing transactions and building your customer database.' },
    { n: '04', title: 'AI optimizes your operations', desc: 'Our AI helps you complete setup and suggests ways to improve retention and revenue.' },
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
              <a href="#features" className="text-slate-600 hover:text-purple-600 transition-colors text-sm font-medium">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-purple-600 transition-colors text-sm font-medium">How It Works</a>
              <Link to="/#pricing" className="text-slate-600 hover:text-purple-600 transition-colors text-sm font-medium">Pricing</Link>
              <a href={`${APP_URL}/login`} className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Login</a>
              <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Start Your POS Setup
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
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold">Start Your POS Setup</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/50 border border-purple-700 text-purple-300 text-sm font-semibold mb-6">
            <ShoppingCart className="w-4 h-4" /> POS + Business Operations
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Run Your POS, Customer Management,<br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
              and Business Operations From One Platform
            </span>
          </h1>
          <p className="text-slate-300 text-xl mb-4 max-w-3xl mx-auto">
            Whether you run a restaurant, retail store, salon, barbershop, service counter, or shop — Operon helps you manage payments, customers, promotions, and operations in one connected system.
          </p>
          <p className="text-purple-400/80 text-sm mb-10 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> AI will help you configure your POS and CRM automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all flex items-center gap-2">
              Start Your POS Setup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact" className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Business type selector */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What type of business are you?</h2>
          <p className="text-slate-500 mb-8">Select your type and we'll show you how Operon fits your workflow.</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {businessTypes.map((biz) => (
              <button
                key={biz.key}
                onClick={() => { setSelectedBiz(biz.key); saveFunnel(biz.key); }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                  selectedBiz === biz.key
                    ? 'border-purple-500 bg-purple-50 shadow-md'
                    : 'border-slate-200 hover:border-purple-300 hover:bg-purple-50/50'
                }`}
              >
                <span className="text-2xl">{biz.emoji}</span>
                <span className="text-xs font-semibold text-slate-700 text-center">{biz.label}</span>
              </button>
            ))}
          </div>
          {selectedBiz && (
            <div className="mt-6">
              <a href={`${APP_URL}/login`} onClick={() => saveFunnel(selectedBiz)} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Set Up My {businessTypes.find(b => b.key === selectedBiz)?.label} System <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Capabilities bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 text-center">
            {[{icon: CreditCard, label:'Payments'},{icon: Tag, label:'Discounts'},{icon: Users, label:'Customers'},{icon: Repeat, label:'Loyalty'},{icon: Package, label:'Inventory'},{icon: BarChart3, label:'Reports'},{icon: Clock, label:'History'}].map(({icon: Icon, label}, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-xs font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-purple-500/10 hover-lift">
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-slate-400 text-sm">Operon CRM - POS Dashboard</div>
            </div>
            <div className="bg-slate-900 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Today's Sales</span>
                    <ShoppingCart className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">$4,287</div>
                  <div className="text-green-400 text-xs mt-1">+12% vs yesterday</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Transactions</span>
                    <CreditCard className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">156</div>
                  <div className="text-purple-400 text-xs mt-1">Avg: $27.49</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Top Seller</span>
                    <Package className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">89 units</div>
                  <div className="text-amber-400 text-xs mt-1">Restock needed</div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700/50">
                <div className="text-slate-400 text-sm mb-3">Recent Transactions</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-white text-sm">Order #2847 - Card</span>
                    </div>
                    <span className="text-green-400 text-xs">$47.50</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-white text-sm">Order #2846 - Cash</span>
                    </div>
                    <span className="text-blue-400 text-xs">$23.00</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-white text-sm">Order #2845 - Digital</span>
                    </div>
                    <span className="text-purple-400 text-xs">$89.99</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <span className="text-white text-sm">VIP Customer - Sarah M.</span>
                    </div>
                    <span className="text-amber-400 text-xs">Loyalty: Gold</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Built for Any POS Business</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Operon combines POS, CRM, marketing, and business operations in one connected system — for any business that takes in-person payments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((group, i) => (
              <div key={i} className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                    <group.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{group.group}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {group.items.map((item, j) => (
                    <div key={j}>
                      <div className="font-semibold text-slate-800 text-sm mb-1">{item.title}</div>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POS Hardware Coming Soon */}
      <section className="py-14 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-sm font-semibold mb-5">
            <Clock className="w-4 h-4" /> Coming Soon
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">POS Hardware Integration</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Operon will support dedicated POS hardware — terminals, tablets, receipt printers, barcode scanners, and full POS station setups. Hardware integration and supported devices coming soon.
          </p>
          <div className="grid sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[{ emoji: '🖥️', label: 'Terminals' },{ emoji: '📱', label: 'Tablets' },{ emoji: '🖨️', label: 'Receipt Printers' },{ emoji: '📷', label: 'Barcode Scanners' }].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 text-center">
                <div className="text-2xl mb-2">{item.emoji}</div>
                <div className="text-slate-300 text-sm font-medium">{item.label}</div>
                <div className="text-slate-500 text-xs mt-1">Coming Soon</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How It Works</h2>
            <p className="text-slate-500 text-lg">Up and running in minutes. AI helps finish the rest.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-200">
                  <span className="text-white font-bold text-lg">{step.n}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ShoppingCart className="w-12 h-12 text-purple-400 mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Run Your POS + CRM?</h2>
          <p className="text-slate-300 text-lg mb-8">Set up your system in minutes. Payments, customers, and operations — all in one place.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/login`} onClick={() => saveFunnel()} className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all flex items-center gap-2">
              Start Your POS Setup <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact" className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              Book a Demo
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
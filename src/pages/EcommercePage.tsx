import { useState, useEffect } from 'react';
import { ShoppingBag, CreditCard, Store, Users, BarChart, Globe, Shield, Truck, CheckCircle, ArrowRight, Sparkles, ChevronRight, Zap, Smartphone, Package, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(plan?: string) {
  localStorage.setItem('operon_funnel_type', 'ecommerce');
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'ecommerce');
  if (plan) localStorage.setItem('operon_selected_plan', plan);
}

export default function EcommercePage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  useEffect(() => {
    saveFunnel();
  }, []);

  const features = [
    { icon: Store, title: 'White-Label Storefront', desc: 'Branded online store with your own domain, custom design, and seamless brand experience. Fully customizable to match your identity.', color: 'from-blue-500 to-cyan-400' },
    { icon: CreditCard, title: 'Multiple Payment Options', desc: 'Accept payments through Square, PayPal, Afterpay, and Zip. Give your customers flexibility in how they pay.', color: 'from-green-500 to-emerald-400' },
    { icon: Package, title: 'Inventory Management', desc: 'Real-time stock tracking, product catalog management, automated low-stock alerts, and multi-location inventory support.', color: 'from-indigo-500 to-violet-400' },
    { icon: Truck, title: 'Shipping Management', desc: 'Automated shipping calculations, multiple carrier integrations, tracking updates, and fulfillment workflows.', color: 'from-orange-500 to-amber-400' },
    { icon: Smartphone, title: 'Mobile Shopping', desc: 'Mobile-optimized store experience, push notifications for orders, and seamless mobile checkout process.', color: 'from-purple-500 to-pink-400' },
    { icon: BarChart, title: 'Analytics Dashboard', desc: 'Sales analytics, customer insights, conversion tracking, revenue reports, and performance metrics in real-time.', color: 'from-rose-500 to-red-400' },
    { icon: Users, title: 'Customer Management', desc: 'Customer profiles, order history, loyalty programs, email marketing integration, and CRM capabilities.', color: 'from-yellow-500 to-orange-400' },
    { icon: Globe, title: 'Multi-Channel Sales', desc: 'Sell online, in-person, and through social media. Unified inventory and order management across all channels.', color: 'from-cyan-500 to-blue-400' },
    { icon: Shield, title: 'Secure Transactions', desc: 'PCI-compliant payment processing, fraud detection, secure checkout, and data protection for customer information.', color: 'from-teal-500 to-cyan-400' },
  ];

  const tiers = [
    {
      name: 'Starter Commerce',
      monthly: 49,
      annual: 39,
      desc: 'Essential tools for small online stores',
      badge: null,
      dark: false,
      accentClass: 'border-slate-200 hover:border-green-300',
      btnClass: 'border-2 border-green-500 text-green-700 hover:bg-green-50',
      priceColor: 'text-green-600',
      features: [
        'Basic product catalog',
        'Up to 100 products',
        'Square payments',
        'Standard shipping',
        'Email support',
      ],
    },
    {
      name: 'Growth Commerce',
      monthly: 79,
      annual: 63,
      desc: 'Growing stores with advanced features',
      badge: null,
      dark: false,
      accentClass: 'border-slate-200 hover:border-blue-300',
      btnClass: 'border-2 border-blue-500 text-blue-700 hover:bg-blue-50',
      priceColor: 'text-blue-600',
      features: [
        'Everything in Starter',
        'Unlimited products',
        'PayPal integration',
        'Advanced shipping',
        'Inventory management',
        'Basic analytics',
      ],
    },
    {
      name: 'Pro Commerce',
      monthly: 199,
      annual: 159,
      desc: 'Full-featured e-commerce solution',
      badge: 'Most Popular',
      dark: false,
      accentClass: 'border-purple-300 shadow-lg shadow-purple-100',
      btnClass: 'border-2 border-purple-500 text-purple-700 hover:bg-purple-50',
      priceColor: 'text-purple-600',
      features: [
        'Everything in Growth',
        'Afterpay & Zip integration',
        'Advanced analytics',
        'Customer management',
        'Marketing automation',
        'Multi-currency support',
      ],
    },
    {
      name: 'Elite Commerce Suite',
      monthly: 250,
      annual: 200,
      desc: 'Enterprise e-commerce with full branding',
      badge: 'Best Value',
      dark: true,
      accentClass: 'border-green-500 shadow-xl shadow-green-200',
      btnClass: 'bg-white text-green-700 font-bold hover:bg-green-50',
      priceColor: 'text-white',
      features: [
        'Everything in Pro',
        'Full white-label branding',
        'Custom domain',
        'API access',
        'Priority support',
        'Unlimited everything',
        'Advanced integrations',
      ],
    },
  ];

  const pricingTiers = [
    { name: 'Starter Commerce', price: billing === 'monthly' ? 49 : 39, period: billing === 'monthly' ? '/month' : '/month (billed annually)', cta: 'Start Free Trial', popular: false },
    { name: 'Growth Commerce', price: billing === 'monthly' ? 79 : 63, period: billing === 'monthly' ? '/month' : '/month (billed annually)', cta: 'Start Free Trial', popular: false },
    { name: 'Pro Commerce', price: billing === 'monthly' ? 199 : 159, period: billing === 'monthly' ? '/month' : '/month (billed annually)', cta: 'Start Free Trial', popular: true },
    { name: 'Elite Commerce Suite', price: billing === 'monthly' ? 250 : 200, period: billing === 'monthly' ? '/month' : '/month (billed annually)', cta: 'Start Free Trial', popular: false },
  ];

  const integrations = [
    { name: 'Square', desc: 'Point of sale and payments', icon: CreditCard },
    { name: 'PayPal', desc: 'Global payment processing', icon: ShoppingBag },
    { name: 'Afterpay', desc: 'Buy now, pay later', icon: Zap },
    { name: 'Zip', desc: 'Installment payments', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">E-commerce CRM</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete E-commerce<br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Platform & Store
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Launch your online store with powerful CRM capabilities. Manage products, inventory, payments, 
              and customers in one unified platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition">
                Start Free Trial
              </Link>
              <a href="#features" className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-blue-500 transition">
                See Features
              </a>
            </div>
            <div className="mt-12 flex justify-center items-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Sell Online
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful e-commerce features combined with CRM capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 group">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Payment Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accept payments through multiple platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition text-center">
                <integration.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{integration.name}</h3>
                <p className="text-gray-600 text-sm">{integration.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  billing === 'monthly' ? 'bg-white shadow text-gray-900' : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`px-6 py-2 rounded-lg font-semibold transition relative ${
                  billing === 'annual' ? 'bg-white shadow text-gray-900' : 'text-gray-600'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl transition-all duration-300 ${
                  tier.dark
                    ? 'bg-gradient-to-br from-green-600 to-emerald-700 text-white'
                    : 'bg-white border-2 ' + tier.accentClass
                } ${tier.badge ? 'transform scale-105' : ''}`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                      {tier.badge}
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${tier.dark ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm ${tier.dark ? 'text-green-100' : 'text-gray-600'}`}>{tier.desc}</p>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${tier.dark ? 'text-white' : tier.priceColor}`}>
                    ${billing === 'monthly' ? tier.monthly : tier.annual}
                  </span>
                  <span className={`text-sm ${tier.dark ? 'text-green-100' : 'text-gray-600'}`}>
                    /month
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-2">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.dark ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={`text-sm ${tier.dark ? 'text-white' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/start"
                  onClick={() => saveFunnel(tier.name)}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                    tier.dark
                      ? tier.btnClass
                      : tier.btnClass
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Launch Your Store?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses selling with Operon E-commerce
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition">
              Start Free Trial
            </Link>
            <Link to="/contact" className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white/10 transition">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
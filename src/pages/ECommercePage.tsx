import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, CheckCircle, ArrowRight, Package, CreditCard, Truck, 
  BarChart3, Users, Zap, Shield, Globe, Warehouse, Tag, Clock, Sparkles
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const features = [
  { icon: Package, title: 'Product Catalog', desc: 'Manage unlimited products with variants, categories, and inventory tracking.' },
  { icon: CreditCard, title: 'Payment Processing', desc: 'Accept payments via Stripe, PayPal, and more with automatic reconciliation.' },
  { icon: Truck, title: 'Shipping Integration', desc: 'Connect with major carriers and automate shipping calculations.' },
  { icon: BarChart3, title: 'Sales Analytics', desc: 'Real-time dashboards for revenue, orders, and product performance.' },
  { icon: Users, title: 'Customer Management', desc: 'Full CRM integration with purchase history and lifetime value tracking.' },
  { icon: Zap, title: 'Order Automation', desc: 'Automate order workflows, confirmations, and follow-ups.' },
  { icon: Warehouse, title: 'Inventory Sync', desc: 'Real-time inventory across all sales channels.' },
  { icon: Globe, title: 'Multi-Channel', desc: 'Sell on your website, marketplaces, and social media from one system.' },
];

const plans = [
  {
    name: 'Starter',
    price: 49,
    desc: 'New e-commerce businesses',
    features: ['Up to 100 products', 'Order management', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Growth',
    price: 99,
    desc: 'Growing online stores',
    popular: true,
    features: ['Up to 1,000 products', 'Multi-channel sync', 'Advanced analytics', 'Priority support', 'Automation workflows'],
  },
  {
    name: 'Business',
    price: 199,
    desc: 'Established e-commerce',
    features: ['Unlimited products', 'Custom integrations', 'White-label options', 'Dedicated support', 'API access'],
  },
  {
    name: 'Enterprise',
    price: 399,
    desc: 'Large-scale operations',
    features: ['Everything in Business', 'Custom development', 'SLA guarantee', 'Account manager'],
  },
];

export default function ECommercePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-blue-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <ShoppingCart className="w-4 h-4" />
            E-Commerce CRM
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Run Your Online Store<br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Inside Your CRM
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10">
            Full e-commerce integration with inventory, orders, payments, and customer management — all in one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/auth/signup?category=ecommerce`} className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center gap-2">
              Start Your Store
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/pricing" className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-900/50 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Products', value: 'Unlimited' },
              { label: 'Channels', value: 'Multi' },
              { label: 'Payments', value: 'Integrated' },
              { label: 'Support', value: '24/7' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-indigo-500/10 hover-lift">
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-slate-400 text-sm">Operon CRM - E-Commerce Dashboard</div>
            </div>
            <div className="bg-slate-900 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Today's Orders</span>
                    <ShoppingCart className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">84</div>
                  <div className="text-green-400 text-xs mt-1">+23% vs yesterday</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Revenue Today</span>
                    <BarChart3 className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">$7,842</div>
                  <div className="text-green-400 text-xs mt-1">On track for goal</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Pending Shipments</span>
                    <Truck className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">31</div>
                  <div className="text-amber-400 text-xs mt-1">5 priority</div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700/50">
                <div className="text-slate-400 text-sm mb-3">Recent Orders</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-white text-sm">Order #1847 - Shipped</span>
                    </div>
                    <span className="text-green-400 text-xs">$189.00</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <span className="text-white text-sm">Order #1846 - Processing</span>
                    </div>
                    <span className="text-amber-400 text-xs">$342.50</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-white text-sm">Order #1845 - New</span>
                    </div>
                    <span className="text-blue-400 text-xs">$78.00</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-white text-sm">Low stock alert: SKU-2847</span>
                    </div>
                    <span className="text-purple-400 text-xs">3 left</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Sell Online
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A complete e-commerce platform built into your CRM for seamless operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your AI Sales Assistant
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Operon's AI learns your business and acts as a personal assistant — helping you stay on top of orders, inventory alerts, customer follow-ups, and sales opportunities.
              </p>
              <ul className="space-y-3">
                {[
                  'Smart inventory alerts before stockouts',
                  'Automated customer follow-ups after purchase',
                  'Product recommendations based on customer behavior',
                  'Daily sales summaries and insights',
                  'Personalized task reminders',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-2xl border border-white/10 p-6">
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-white text-sm">3 orders need attention today. Inventory alert: Widget A is running low (12 units). I've sent follow-up emails to 8 customers who haven't completed checkout.</p>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg p-4 max-w-xs">
                    <p className="text-white text-sm">What's my best-selling product this month?</p>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-white text-sm">Your top seller is the Premium Widget with 234 units sold. Revenue: $11,700. Would you like me to create a restock order?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              E-Commerce Pricing
            </h2>
            <p className="text-slate-400 text-lg">
              Start small, scale as you grow. All plans include core e-commerce features.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-slate-900/50 border rounded-2xl p-6 ${plan.popular ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="text-xs font-bold text-indigo-400 mb-2">MOST POPULAR</div>
                )}
                <h3 className="font-bold text-white text-lg mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">${plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${APP_URL}/auth/signup?category=ecommerce&plan=${plan.name.toLowerCase()}`}
                  className={`block w-full text-center py-3 rounded-lg font-semibold ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } transition-all`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Get started in minutes with everything you need to sell online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`${APP_URL}/auth/signup?category=ecommerce`} className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all">
              Start Free Trial
            </a>
            <Link to="/contact" className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
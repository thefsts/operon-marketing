import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CreditCard, DollarSign, FileText, Clock, Send,
  CheckCircle, Repeat, PieChart, Shield, Zap
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

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
  return (
    <div className="min-h-screen bg-slate-50">
      <GlobalHeader />

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

      <GlobalFooter />
    </div>
  );
}
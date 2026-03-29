import React, { useState } from 'react';
import { Check, Zap, Building, Users, ArrowRight, Sparkles, ShoppingCart, MonitorSmartphone, Share2, MapPin, Clock, CreditCard } from 'lucide-react';

interface Plan {
  name: string;
  description: string;
  price: number;
  priceId: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    price: 29,
    priceId: 'price_starter_monthly',
    features: [
      'CRM & Leads',
      'Deals & Pipeline',
      'Tasks & Activities',
      'Basic Appointments',
      'Email support',
      '5GB storage',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    description: 'For growing businesses that need more power',
    price: 79,
    priceId: 'price_pro_monthly',
    features: [
      'Full CRM',
      'Marketing (Email/SMS)',
      'Automation workflows',
      'AI Assistant (basic)',
      'Advanced reporting',
      'Priority support',
      '50GB storage',
      'Webhooks & API access',
    ],
    highlighted: true,
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: 199,
    priceId: 'price_enterprise_monthly',
    features: [
      'Everything in Pro',
      'Commerce included',
      'POS + Inventory',
      'Accounting module',
      'White-label options',
      'API access',
      'Unlimited storage',
      '24/7 dedicated support',
      'Custom training & onboarding',
    ],
    cta: 'Book Demo',
  },
];

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (plan: Plan) => {
    if (plan.name === 'Enterprise') {
      window.location.href = '/contact';
      return;
    }
    
    setLoading(plan.name);
    
    // Simulate Stripe checkout redirect
    // In production, this would call your backend to create a Stripe Checkout session
    const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';
    window.location.href = `${APP_URL}/signup?plan=${plan.priceId}&billing=${billingCycle}`;
  };

  const getPrice = (monthlyPrice: number) => {
    if (billingCycle === 'annual') {
      return Math.round(monthlyPrice * 0.8); // 20% discount
    }
    return monthlyPrice;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effect */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(217, 70, 239, 0.15) 0%, transparent 50%)`,
        }} />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            OPERON
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="/pricing" className="text-cyan-400">Pricing</a>
            <a href="/docs" className="text-gray-400 hover:text-white transition-colors">API Docs</a>
            <a href={`${import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com'}/login`} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              Sign In
            </a>
          </nav>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple pricing. <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Powerful platform.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Replace multiple tools with one system.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-white/5 rounded-full p-1.5">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.popular
                  ? 'bg-gradient-to-b from-cyan-500/10 to-fuchsia-500/10 border-2 border-cyan-500/50 scale-105'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${getPrice(plan.price)}</span>
                  <span className="text-gray-400">/{billingCycle === 'annual' ? 'mo' : 'month'}</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-sm text-gray-500 mt-1">
                    Billed annually (${getPrice(plan.price) * 12}/year)
                  </p>
                )}
              </div>

              <button
                onClick={() => handleSubscribe(plan)}
                disabled={loading === plan.name}
                className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white hover:opacity-90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } disabled:opacity-50`}
              >
                {loading === plan.name ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {plan.cta}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ADD-ONS Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Add more power when you need it</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enhance your plan with powerful add-ons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* E-commerce Add-on */}
            <div className="bg-gradient-to-b from-green-500/10 to-emerald-500/5 border border-green-500/30 rounded-2xl p-6 hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">E-commerce</h3>
              <p className="text-gray-400 text-sm mb-4">White-label online store with inventory, payments, and mobile shopping.</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-bold text-green-400">+$25</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Product catalog</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Multiple payments</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Inventory tracking</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Mobile store</li>
              </ul>
              <a href="/ecommerce" className="text-green-400 text-sm font-medium hover:text-green-300 transition">Learn more →</a>
            </div>

            {/* POS System Add-on */}
            <div className="bg-gradient-to-b from-blue-500/10 to-indigo-500/5 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <MonitorSmartphone className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">POS System</h3>
              <p className="text-gray-400 text-sm mb-4">Point-of-sale system with hardware integration and real-time sync.</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-bold text-blue-400">+$49</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Hardware support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Real-time sync</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Inventory sync</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Multi-location</li>
              </ul>
              <a href="/pos" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition">Learn more →</a>
            </div>

            {/* Social Media Marketing Add-on */}
            <div className="bg-gradient-to-b from-purple-500/10 to-pink-500/5 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Social Media Marketing</h3>
              <p className="text-gray-400 text-sm mb-4">Schedule posts, track engagement, and manage all your social accounts.</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-bold text-purple-400">+$29</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Post scheduling</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Analytics dashboard</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Multi-platform</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /> Content calendar</li>
              </ul>
              <span className="text-purple-400 text-sm font-medium">Coming soon</span>
            </div>

            {/* Geofence Marketing Add-on - COMING SOON */}
            <div className="bg-gradient-to-b from-orange-500/10 to-amber-500/5 border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500/50 transition-all relative overflow-hidden">
              <div className="absolute top-3 right-3 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" /> COMING SOON
              </div>
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Geofence Marketing</h3>
              <p className="text-gray-400 text-sm mb-4">Location-based marketing with targeted campaigns and real-time triggers.</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-bold text-orange-400">TBD</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 mb-4">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-400 opacity-50" /> Location targeting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-400 opacity-50" /> Push notifications</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-400 opacity-50" /> Campaign analytics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-400 opacity-50" /> Real-time triggers</li>
              </ul>
              <span className="text-orange-400 text-sm font-medium">Join waitlist</span>
            </div>
          </div>

          {/* Add-on Bundle Savings */}
          <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-500/30 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Bundle & Save</h3>
            </div>
            <p className="text-gray-400 text-sm">Add 2 or more add-ons and save 15% on your total add-on cost!</p>
          </div>
        </div>

        {/* Value Section */}
        <div className="mb-16 bg-gradient-to-r from-cyan-500/5 to-fuchsia-500/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Replace 5+ tools with one platform
          </h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { name: 'CRM', icon: Users },
              { name: 'Marketing', icon: Zap },
              { name: 'Storefront', icon: ShoppingCart },
              { name: 'Accounting', icon: CreditCard },
              { name: 'Scheduling', icon: Clock },
            ].map(({ name, icon: Icon }, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-6">
            All included in one subscription. No more juggling multiple tools.
          </p>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <Building className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Our enterprise team can create a tailored solution for your organization with custom features,
            dedicated support, and flexible deployment options.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:opacity-90 transition-colors"
          >
            Book Demo
            <ArrowRight size={18} />
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, all plans include a 14-day free trial. No credit card required to start.',
              },
              {
                q: 'What happens to my data if I cancel?',
                a: 'Your data is retained for 30 days after cancellation. You can export everything during that period. After 30 days, data is permanently deleted.',
              },
              {
                q: 'Do you offer discounts for startups or non-profits?',
                a: 'Yes! We offer 50% off for registered non-profits and special startup pricing. Contact our sales team for details.',
              },
              {
                q: 'How does billing work for API usage?',
                a: 'Each plan includes a generous API allowance. Overage is billed at $0.001 per additional API call. Enterprise plans can negotiate custom rates.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="/pricing" className="text-cyan-400">Pricing</a>
          <a href="/integrations" className="hover:text-cyan-400 transition-colors">Integrations</a>
          <a href="/docs" className="hover:text-cyan-400 transition-colors">API Docs</a>
          <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
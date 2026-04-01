import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Users, Utensils, Store, Clock, Shield, BarChart3, Zap,
  Star, ChefHat, Coffee, ShoppingBag, Wine, Pizza, IceCream
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

// NO BETA DISCOUNT for Restaurant/Retail
const plans = [
  {
    name: 'Starter',
    description: 'Single location restaurant or shop',
    monthlyPrice: 69,
    annualPrice: 62,
    priceId: 'price_restaurant_starter',
    features: [
      '5,000 contacts',
      'POS integration starter',
      'Online ordering management',
      'Basic customer loyalty',
      'Review monitoring',
      'Email marketing (2,000/mo)',
      'Basic reporting',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'Growing single-location business',
    monthlyPrice: 99,
    annualPrice: 89,
    priceId: 'price_restaurant_growth',
    features: [
      '15,000 contacts',
      'Full POS integration',
      'Online ordering & delivery',
      'Advanced loyalty program',
      'Review management & response',
      'Email marketing (10,000/mo)',
      'SMS included (1,000/mo)',
      'Advanced analytics',
      'Priority support',
    ],
    popular: true,
    cta: 'Get Full Access',
  },
  {
    name: 'Pro',
    description: 'High-volume single location',
    monthlyPrice: 150,
    annualPrice: 135,
    priceId: 'price_restaurant_pro',
    features: [
      '50,000 contacts',
      'Everything in Growth',
      'Multi-channel marketing',
      'Advanced loyalty & rewards',
      'Reputation management suite',
      'Email marketing (25,000/mo)',
      'SMS included (2,500/mo)',
      'Custom integrations',
      'Dedicated support',
    ],
    cta: 'Scale Up',
  },
  {
    name: 'White Label',
    description: 'Create your own branded system',
    monthlyPrice: 199,
    annualPrice: 179,
    priceId: 'price_restaurant_whitelabel',
    features: [
      'Unlimited contacts',
      'Everything in Pro',
      'Full white-label solution',
      'Email marketing (50,000/mo)',
      'SMS included (5,000/mo)',
      'Custom domain',
      'API access',
      'Includes up to 20 licenses',
      'Additional users: $5/seat/month',
      'Branded mobile app coming soon',
      'Account manager',
    ],
    cta: 'Start Your Platform',
  },
];

const industries = [
  { icon: Utensils, name: 'Restaurants', desc: 'Full-service dining establishments' },
  { icon: Coffee, name: 'Cafes & Coffee Shops', desc: 'Quick service and beverage focused' },
  { icon: Pizza, name: 'Pizzerias', desc: 'Delivery and takeout optimized' },
  { icon: Wine, name: 'Bars & Breweries', desc: 'Nightlife and beverage service' },
  { icon: ShoppingBag, name: 'Retail Stores', desc: 'Brick and mortar retail' },
  { icon: IceCream, name: 'Dessert Shops', desc: 'Sweet treats and ice cream' },
  { icon: ChefHat, name: 'Ghost Kitchens', desc: 'Delivery-only concepts' },
  { icon: Store, name: 'Multi-Location', desc: 'Chains and franchises' },
];

const features = [
  { icon: Store, title: 'POS Integration', desc: 'Connect with your POS to capture customer data automatically.' },
  { icon: Users, title: 'Customer Loyalty', desc: 'Build rewards programs that drive repeat business.' },
  { icon: Star, title: 'Review Management', desc: 'Monitor and respond to reviews from Google, Yelp, and Facebook.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Track visits, spending patterns, and campaign performance.' },
  { icon: Zap, title: 'Automation', desc: 'Automated campaigns for birthdays, re-engagement, and promos.' },
  { icon: Clock, title: 'Online Ordering', desc: 'Manage orders and delivery from one dashboard.' },
  { icon: Shield, title: 'Reputation', desc: 'Protect and grow your online reputation proactively.' },
  { icon: Users, title: 'Team Management', desc: 'Multiple users with role-based permissions.' },
];

export default function RestaurantRetailCRMPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const handlePlanSelect = (planName: string, priceId: string) => {
    localStorage.setItem('operon_selected_plan', planName);
    localStorage.setItem('operon_selected_price_id', priceId);
    localStorage.setItem('operon_funnel_type', 'restaurant_retail_crm');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=restaurant_retail`;
  };

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Utensils className="w-4 h-4" />
              Restaurant & Retail CRM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Turn Customers Into<br />Loyal Fans
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              The complete CRM and marketing system for restaurants and retail. Manage customers, reviews, loyalty, and marketing in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#pricing"
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                View Pricing
              </a>
            </div>
            <p className="text-orange-200 mt-4 text-sm">No credit card required • Set up in minutes</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for Food & Retail Businesses
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Whether you run a single location or multiple stores, Operon helps you grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-orange-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{industry.name}</h3>
                <p className="text-slate-500 text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Purpose-built for the restaurant and retail industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                <p className="text-slate-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pricing That Fits Your Business
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
              Choose the plan for your restaurant or retail operation.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`text-lg font-medium ${billingPeriod === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-orange-600' : 'bg-slate-300'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}
              >
                Annual
                <span className="text-orange-600 text-sm font-medium ml-1">(Save 10%)</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 ${
                  plan.popular ? 'ring-2 ring-orange-600 shadow-xl' : 'shadow-lg hover:shadow-xl'
                } transition`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 text-sm mt-1 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-slate-500">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelect(plan.name.toLowerCase().replace(' ', '_'), plan.priceId)}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Multi-Location Note */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              <strong>Multi-Location:</strong> Add additional locations for $10/mo each • <strong>Add-ons:</strong> Additional Users $5/seat
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-slate-500 text-lg">
              Get started quickly and see results in your first month.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Connect POS', desc: 'Link your POS system to capture customer data.' },
              { step: '2', title: 'Import Customers', desc: 'Bring in existing customer lists.' },
              { step: '3', title: 'Set Up Loyalty', desc: 'Configure rewards and campaigns.' },
              { step: '4', title: 'Watch It Grow', desc: 'Automated marketing drives repeat visits.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Utensils className="w-12 h-12 text-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Restaurant or Retail Business?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Start your free trial today. No credit card required. See results in your first month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-slate-400 mt-4 text-sm">
            Join 500+ restaurants and retail locations using Operon
          </p>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
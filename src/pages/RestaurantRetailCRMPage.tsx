import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Users, Utensils, Store, Clock, Shield, BarChart3, Zap,
  Star, ChefHat, Coffee, ShoppingBag, Wine, Pizza, IceCream, Sparkles, 
  TrendingUp, MessageSquare, Calendar, Target, Award
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

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
      'Includes up to 20 licenses',
      'Custom domain & branding',
      'API access',
      'Priority support',
    ],
    cta: 'Go White Label',
  },
];

const businessTypes = [
  { icon: Utensils, name: 'Restaurants', desc: 'Full-service dining' },
  { icon: Coffee, name: 'Cafes & Coffee Shops', desc: 'Quick service beverages' },
  { icon: Pizza, name: 'Pizzerias', desc: 'Delivery & takeout focused' },
  { icon: Wine, name: 'Bars & Nightlife', desc: 'Entertainment venues' },
  { icon: IceCream, name: 'Dessert Shops', desc: 'Sweet treats & ice cream' },
  { icon: ShoppingBag, name: 'Retail Stores', desc: 'Brick & mortar shops' },
];

const features = [
  { icon: Store, title: 'POS Integration', desc: 'Connect with Square, Toast, Clover, and more' },
  { icon: Users, title: 'Customer Database', desc: 'Auto-capture every customer interaction' },
  { icon: Star, title: 'Loyalty Program', desc: 'Points, rewards, and VIP tiers built-in' },
  { icon: BarChart3, title: 'Sales Analytics', desc: 'Track trends, peak times, and top items' },
  { icon: MessageSquare, title: 'SMS Marketing', desc: 'Targeted campaigns that drive visits' },
  { icon: TrendingUp, title: 'Online Ordering', desc: 'Commission-free ordering & delivery' },
  { icon: Shield, title: 'Review Management', desc: 'Monitor and respond to all reviews' },
  { icon: Sparkles, title: 'AI Assistant', desc: 'Smart promotions and predictions' },
];

const aiFeatures = [
  { title: 'Smart Promotion Engine', desc: 'AI analyzes sales patterns and automatically suggests promotions for slow periods to boost revenue.' },
  { title: 'Customer Segmentation', desc: 'Automatically group customers by behavior - VIPs, at-risk, lapsed - for targeted marketing.' },
  { title: 'Demand Forecasting', desc: 'Predict busy periods and staffing needs based on historical data and local events.' },
  { title: 'Review Response AI', desc: 'Generate thoughtful, on-brand responses to customer reviews in seconds.' },
];

function saveFunnel(type: string) {
  localStorage.setItem('operon_funnel_type', type);
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'restaurant-retail');
}

function handlePlanSelect(planKey: string, priceId: string) {
  saveFunnel('restaurant_retail');
  const selectedPlan = { plan: planKey, priceId };
  localStorage.setItem('operon_selected_plan', JSON.stringify(selectedPlan));
  window.location.href = `${APP_URL}/signup?plan=${planKey}`;
}

export default function RestaurantRetailCRMPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <GlobalHeader transparent={!isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <ChefHat className="w-4 h-4" />
              Built for Food & Retail
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Restaurant & Retail CRM
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              POS integration, customer loyalty, and automated marketing for restaurants 
              and retail stores. Turn every transaction into a relationship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/start"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#pricing"
                className="px-8 py-4 bg-gray-700/30 text-white rounded-xl font-semibold hover:bg-gray-600/30 transition-all border border-gray-600/50 inline-flex items-center justify-center gap-2"
              >
                View Pricing
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Works with your POS
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                No contracts
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Every Food & Retail Business
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From food trucks to fine dining, we adapt to your unique workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {businessTypes.map((type, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur rounded-xl p-4 border border-gray-700/50 hover:border-orange-500/50 transition-all text-center group">
                <type.icon className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm mb-1">{type.name}</h3>
                <p className="text-gray-400 text-xs">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              One platform connects your POS, customers, and marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI That Understands Your Business
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Let Operon's AI analyze your sales patterns, predict customer behavior, 
                and automate marketing that drives repeat visits.
              </p>
              <div className="space-y-4">
                {aiFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-700/50 backdrop-blur rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Operon AI</div>
                  <div className="text-xs text-gray-400">Restaurant Intelligence</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-orange-400">Insight:</span> Your Tuesday lunch traffic is down 15%. Consider a "Taste of Tuesday" promotion to boost visits.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-green-400">Automated:</span> Sent loyalty rewards to 47 VIP customers. Expected return rate: 68%.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-cyan-400">Prediction:</span> Based on weather forecast, expect 25% more delivery orders this weekend. Prep staffed accordingly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing That Fits Your Business
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Choose the plan for your restaurant or retail operation.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`text-lg font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-orange-500' : 'bg-gray-600'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-white' : 'text-gray-500'}`}
              >
                Annual
                <span className="text-orange-400 text-sm font-medium ml-1">(Save 10%)</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-700/50 backdrop-blur rounded-2xl p-6 border ${
                  plan.popular ? 'border-orange-500 shadow-lg shadow-orange-500/20' : 'border-gray-700/50 hover:border-gray-600'
                } transition-all`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="text-gray-400 text-sm mt-1 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelect(plan.name.toLowerCase().replace(' ', '_'), plan.priceId)}
                  className={`w-full py-3 rounded-lg font-semibold transition text-sm ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/25'
                      : 'bg-gray-600 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Multi-Location Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Multi-Location:</strong> Add additional locations for $10/mo each • <strong className="text-white">Add-ons:</strong> Additional Users $5/seat
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 text-lg">
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-orange-400">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Utensils className="w-12 h-12 text-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Restaurant or Retail Business?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
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
              className="px-8 py-4 bg-gray-700/30 text-white rounded-xl font-semibold hover:bg-gray-600/30 transition-all border border-gray-600/50 inline-flex items-center justify-center"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            Join 500+ restaurants and retail locations using Operon
          </p>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
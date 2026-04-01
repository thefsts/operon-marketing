import { useState } from 'react';
import { Check, CheckCircle2, ArrowRight, Users, Utensils, Store, Clock, Shield, BarChart3, Zap, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(type: string) {
  localStorage.setItem('operon_funnel_type', type);
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'plan');
}

function clearFunnel() {
  ['operon_funnel_type','operon_last_url','operon_last_step','operon_selected_plan',
   'operon_business_type','operon_needs','operon_size','operon_current_system'].forEach(k => localStorage.removeItem(k));
}

export default function RestaurantRetailCRMPage() {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGetStarted = (planName: string, price?: number) => {
    clearFunnel();
    saveFunnel('restaurant_retail_crm');
    if (price) {
      localStorage.setItem('operon_selected_plan', planName);
      localStorage.setItem('operon_selected_price', price.toString());
    }
    window.location.href = `${APP_URL}/auth/signup?ref=restaurant_retail&utm_source=specialty_page`;
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Single location restaurant or shop',
      monthlyPrice: 69,
      annualPrice: 62,
      features: [
        '5,000 contacts',
        'POS integration starter',
        'Online ordering management',
        'Basic customer loyalty',
        'Review monitoring',
        'Email marketing (2,000/mo)',
        'Basic reporting',
        'Email support',
      ]
    },
    {
      name: 'Growth',
      description: 'Growing single-location business',
      monthlyPrice: 99,
      annualPrice: 89,
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
      popular: true
    },
    {
      name: 'Pro',
      description: 'High-volume single location',
      monthlyPrice: 150,
      annualPrice: 135,
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
      ]
    },
    {
      name: 'White Label',
      description: 'Create your own branded system',
      monthlyPrice: 199,
      annualPrice: 179,
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
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold text-slate-900">OperonCRM</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-600 hover:text-blue-600 transition">Home</a>
              <a href="/pricing" className="text-slate-600 hover:text-blue-600 transition">Pricing</a>
              <a href="/#features" className="text-slate-600 hover:text-blue-600 transition">Features</a>
              <a
                href={APP_URL}
                className="text-slate-600 hover:text-blue-600 transition"
              >
                Login
              </a>
              <button
                onClick={() => handleGetStarted('starter')}
                className="bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition"
              >
                Start Free Trial
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <a href="/" className="block text-slate-600 hover:text-blue-600 py-2">Home</a>
              <a href="/pricing" className="block text-slate-600 hover:text-blue-600 py-2">Pricing</a>
              <a href="/#features" className="block text-slate-600 hover:text-blue-600 py-2">Features</a>
              <a href={APP_URL} className="block text-slate-600 hover:text-blue-600 py-2">Login</a>
              <button
                onClick={() => handleGetStarted('starter')}
                className="w-full bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Utensils className="w-4 h-4 mr-2" />
            Built for Restaurants & Retail Businesses
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Turn Customers Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
              {' '}Loyal Fans
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            The complete CRM and marketing system for restaurants and retail. Manage customers, 
            reviews, loyalty, and marketing in one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleGetStarted('starter')}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a href="#pricing" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Everything Included Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything Included Out of the Box</h2>
            <p className="text-xl text-slate-600">Powerful tools designed for restaurant and retail success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Store className="w-8 h-8 text-orange-600" />,
                title: 'POS Integration',
                description: 'Seamlessly connect with your POS. Capture customer data automatically with every transaction.',
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: 'Customer Loyalty',
                description: 'Build loyal customers with rewards programs, points, and exclusive offers. Drive repeat business.',
              },
              {
                icon: <Shield className="w-8 h-8 text-orange-600" />,
                title: 'Review Management',
                description: 'Monitor and respond to reviews from Google, Yelp, and Facebook. Protect and grow your reputation.',
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
                title: 'Advanced Analytics',
                description: 'Track customer visits, spending patterns, and campaign performance. Data-driven decisions.',
              },
              {
                icon: <Zap className="w-8 h-8 text-orange-600" />,
                title: 'Marketing Automation',
                description: 'Automated email and SMS campaigns. Birthday rewards, follow-ups, and promotional messages.',
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-600" />,
                title: 'Online Ordering',
                description: 'Manage online orders and delivery. Complete view of every customer, in-store and online.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition">
                {feature.icon}
                <h3 className="text-xl font-semibold text-slate-900 mt-4 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pricing That Fits Your Business</h2>
            <p className="text-xl text-slate-600 mb-8">Choose the plan for your restaurant or retail operation</p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
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
                <span className="text-orange-600 text-sm font-medium ml-1">(Save 10-20%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 ${
                  plan.popular ? 'ring-2 ring-orange-600 shadow-xl scale-105' : 'shadow-lg hover:shadow-xl'
                } transition`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 mt-2 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-slate-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleGetStarted(plan.name.toLowerCase(), billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice)}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Multi-Location & Enterprise */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-3">Multi-Location & Enterprise</h3>
              <p className="text-slate-300 mb-2 text-lg">
                Manage multiple locations from one dashboard with centralized control and local flexibility.
              </p>
              <p className="text-slate-400 mb-6">
                Custom integrations, dedicated support, and enterprise-grade features for growing chains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                >
                  Contact Sales
                </a>
                <a
                  href="tel:+1-888-555-0123"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
                >
                  Call Us for Enterprise Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Businesses Choose Operon</h2>
            <p className="text-xl text-slate-600">Stop losing customers to competitors</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Unified Customer View',
                description: 'See every customer interaction - in-store, online, reviews, and marketing. Complete context at your fingertips.',
                icon: <Users className="w-12 h-12 text-orange-600" />
              },
              {
                title: 'Automated Marketing',
                description: 'Set it and forget it. Automated campaigns bring customers back. Birthday rewards, re-engagement, and promotions run automatically.',
                icon: <Zap className="w-12 h-12 text-orange-600" />
              },
              {
                title: 'Review & Reputation',
                description: 'Monitor and respond to reviews instantly. Turn happy customers into 5-star reviews and address concerns before they spread.',
                icon: <Shield className="w-12 h-12 text-orange-600" />
              },
              {
                title: 'Loyalty That Works',
                description: 'Build programs your customers actually use. Points, rewards, and exclusive offers that drive repeat visits and higher spend.',
                icon: <Store className="w-12 h-12 text-orange-600" />
              },
            ].map((reason, index) => (
              <div key={index} className="flex gap-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
                <div className="flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-lg text-slate-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Start your free trial today. No credit card required. See results in your first month.
          </p>
          <button
            onClick={() => handleGetStarted('starter')}
            className="bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition inline-flex items-center"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-6 h-6" />
          </button>
          <p className="text-slate-500 mt-4">
            Join 500+ restaurants and retail locations already using OperonCRM
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="/#features" className="hover:text-white transition">Features</a></li>
                <li><a href="/#integrations" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:text-white transition">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p>&copy; 2024 OperonCRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
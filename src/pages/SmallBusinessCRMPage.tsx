import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Zap, Users, BarChart3, Clock, Phone, Mail, Calendar, 
  FileText, MessageSquare, TrendingUp, Settings, Shield, Flame, Briefcase,
  Wrench, Home as HomeIcon, Droplets, Leaf, Truck, Sparkles
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

// Beta discount eligible tiers
const betaDiscountTiers = ['Growth', 'Pro'];

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for solo service providers',
    monthlyPrice: 29,
    annualPrice: 26,
    priceId: 'price_small_starter',
    features: [
      'CRM & Lead management',
      '1,000 contacts',
      'Email marketing (500/mo)',
      'Basic calendar sync',
      'Simple lead forms',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'For growing small businesses',
    monthlyPrice: 49,
    annualPrice: 44,
    priceId: 'price_small_growth',
    betaDiscount: true,
    features: [
      'Everything in Starter',
      '5,000 contacts',
      'Email marketing (2,000/mo)',
      'Task management',
      'Basic reporting',
      'Automated follow-ups',
      'Priority email support',
    ],
    cta: 'Upgrade Now',
  },
  {
    name: 'Pro',
    description: 'For established small businesses',
    monthlyPrice: 79,
    annualPrice: 71,
    priceId: 'price_small_pro',
    popular: true,
    betaDiscount: true,
    features: [
      'Everything in Growth',
      '15,000 contacts',
      'Unlimited pipelines',
      'Email marketing (10,000/mo)',
      'Advanced reporting & analytics',
      'SMS included (500/mo)',
      'Phone & email support',
    ],
    cta: 'Get Full Access',
  },
  {
    name: 'Elite',
    description: 'For scaling operations',
    monthlyPrice: 99,
    annualPrice: 89,
    priceId: 'price_small_elite',
    features: [
      'Everything in Pro',
      '25,000 contacts',
      'Email marketing (25,000/mo)',
      'Advanced automation',
      'Team collaboration (5 seats)',
      'White-label reporting',
      'Priority support',
    ],
    cta: 'Scale Your Business',
  },
  {
    name: 'White Label',
    description: 'Build your own CRM brand',
    monthlyPrice: 199,
    annualPrice: 179,
    priceId: 'price_small_whitelabel',
    features: [
      'Everything in Elite',
      'Unlimited contacts',
      'Full white-label branding',
      'Email marketing (50,000/mo)',
      'Includes up to 20 licenses',
      'Additional users: $5/seat/month',
      'Custom domain & API access',
      'Branded mobile app coming soon',
      'Dedicated account manager',
    ],
    cta: 'Start Your Own Platform',
  },
];

const industries = [
  { icon: Wrench, name: 'General Contractors', desc: 'Manage projects, clients, and billing' },
  { icon: HomeIcon, name: 'HVAC', desc: 'Service calls, maintenance contracts, dispatch' },
  { icon: Droplets, name: 'Plumbing', desc: 'Job scheduling, estimates, invoicing' },
  { icon: Sparkles, name: 'Cleaning Services', desc: 'Recurring jobs, team routing, customer CRM' },
  { icon: Leaf, name: 'Lawn Care & Landscaping', desc: 'Route optimization, seasonal contracts' },
  { icon: Truck, name: 'Moving & Delivery', desc: 'Quotes, scheduling, customer management' },
  { icon: Briefcase, name: 'Consultants', desc: 'Client pipeline, projects, invoicing' },
  { icon: Settings, name: 'Other Service Businesses', desc: 'Any local service business' },
];

const features = [
  { icon: Users, title: 'Client CRM', desc: 'Store all client info, history, and communications in one place.' },
  { icon: BarChart3, title: 'Pipeline Management', desc: 'Visual deal tracking from lead to close.' },
  { icon: Calendar, title: 'Scheduling', desc: 'Book appointments and send automatic reminders.' },
  { icon: FileText, title: 'Estimates & Invoices', desc: 'Create and send professional documents in seconds.' },
  { icon: MessageSquare, title: 'SMS & Email', desc: 'Communicate with clients directly from the platform.' },
  { icon: TrendingUp, title: 'Reporting', desc: 'Track revenue, jobs, and team performance.' },
  { icon: Zap, title: 'Automation', desc: 'Automate follow-ups, reminders, and workflows.' },
  { icon: Shield, title: 'Secure Data', desc: 'Bank-level encryption for your business data.' },
];

export default function SmallBusinessCRMPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const handlePlanSelect = (planName: string, priceId: string) => {
    localStorage.setItem('operon_selected_plan', planName);
    localStorage.setItem('operon_selected_price_id', priceId);
    localStorage.setItem('operon_funnel_type', 'small_business');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=small_business`;
  };

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Small Business CRM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The CRM Built for<br />Service Businesses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Manage clients, jobs, scheduling, and invoicing in one simple system. Built specifically for contractors, HVAC, plumbing, cleaning, and local service businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
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
            <p className="text-blue-200 mt-4 text-sm">No credit card required • Set up in minutes</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for These Industries
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Operon CRM is designed specifically for local service businesses. If you serve clients, manage jobs, and need better organization — this is for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
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
              Everything You Need to Run Your Business
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              No more juggling multiple apps. Operon gives you all the tools in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
              Start small and scale as you grow. All plans include the core features you need.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-blue-600' : 'bg-slate-300'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}
              >
                Annual
                <span className="text-blue-600 text-sm font-medium ml-1">(Save 10-20%)</span>
              </button>
            </div>

            {/* Beta Discount Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on Growth & Pro tiers!
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => {
              const hasBetaDiscount = plan.betaDiscount;
              const discountedPrice = hasBetaDiscount
                ? (billingPeriod === 'monthly' ? plan.monthlyPrice * 0.5 : plan.annualPrice * 0.5).toFixed(2)
                : null;

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-6 ${
                    plan.popular ? 'ring-2 ring-blue-600 shadow-xl' : 'shadow-lg hover:shadow-xl'
                  } transition`}
                >
                  {/* Beta Discount Badge */}
                  {hasBetaDiscount && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                      <Flame className="w-4 h-4" />
                      50% OFF
                    </div>
                  )}
                  {/* Most Popular Badge */}
                  {plan.popular && !hasBetaDiscount && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-slate-600 text-sm mt-1 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    {hasBetaDiscount ? (
                      <div>
                        <div className="text-slate-400 line-through text-lg">
                          ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}/mo
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-orange-600">${discountedPrice}</span>
                          <span className="text-slate-500">/mo</span>
                        </div>
                        <div className="text-orange-600 text-sm font-medium mt-1">Beta Price</div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-slate-900">
                          ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-slate-500">/month</span>
                      </div>
                    )}
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
                      hasBetaDiscount
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                        : plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Add-ons Note */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              <strong>Add-ons:</strong> Multi-Business $10/mo • Additional Users $5/seat • eSignature Included
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
              Get started in minutes, not days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your account in under 2 minutes. No credit card required.' },
              { step: '2', title: 'Import Your Data', desc: 'Bring in your contacts from spreadsheets or other systems.' },
              { step: '3', title: 'Start Managing', desc: 'Track clients, jobs, and payments all in one place.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Service Business?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join thousands of service businesses using Operon CRM to manage clients, jobs, and payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all inline-flex items-center justify-center gap-2"
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
            Questions? Call us at (888) 555-0123
          </p>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
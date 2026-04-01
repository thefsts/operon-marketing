import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, Check, ArrowRight, Users, BarChart3, Calendar, FileText, 
  MessageSquare, Shield, Zap, Clock, FileSignature, Briefcase,
  Building, Landmark, Gavel, Search, DollarSign, Flame
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

// Beta discount eligible tiers for Legal
const betaDiscountTiers = ['Growth', 'Business'];

const plans = [
  {
    name: 'Self-Employed',
    description: 'Solo practitioners',
    monthlyPrice: 49,
    annualPrice: 44,
    priceId: 'price_legal_selfemployed',
    features: [
      'Case management',
      'Client CRM',
      'Basic calendar',
      'Document storage (1GB)',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Small Firm',
    description: '2-5 attorneys',
    monthlyPrice: 79,
    annualPrice: 71,
    priceId: 'price_legal_smallfirm',
    features: [
      'Everything in Self-Employed',
      'Team collaboration',
      'Advanced calendar',
      'Document storage (5GB)',
      'Task management',
      'Phone support',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    description: 'Growing law firms',
    monthlyPrice: 99,
    annualPrice: 89,
    priceId: 'price_legal_growth',
    betaDiscount: true,
    features: [
      'Everything in Small Firm',
      'AI-powered insights',
      'Conflict checking',
      'Time tracking',
      'Document storage (20GB)',
      'Reporting & analytics',
      'Priority support',
    ],
    cta: 'Upgrade Now',
  },
  {
    name: 'Business',
    description: 'Established practices',
    monthlyPrice: 149,
    annualPrice: 134,
    priceId: 'price_legal_business',
    popular: true,
    betaDiscount: true,
    features: [
      'Everything in Growth',
      'E-Signatures included',
      'Trust accounting',
      'Billing & invoicing',
      'Document storage (50GB)',
      'API access',
      'Dedicated support',
    ],
    cta: 'Get Full Access',
  },
  {
    name: 'White Label',
    description: 'Your branded CRM',
    monthlyPrice: 299,
    annualPrice: 269,
    priceId: 'price_legal_whitelabel',
    features: [
      'Everything in Business',
      'Full white-label branding',
      'Unlimited documents',
      'Includes up to 20 licenses',
      'Additional users: $5/seat/month',
      'Custom domain',
      'Dedicated account manager',
    ],
    cta: 'Start Your Platform',
  },
];

const industries = [
  { icon: Building, name: 'Law Firms', desc: 'Full practice management for firms of all sizes' },
  { icon: Briefcase, name: 'Solo Practitioners', desc: 'Everything a solo attorney needs to succeed' },
  { icon: Landmark, name: 'Corporate Legal', desc: 'In-house counsel and legal departments' },
  { icon: Gavel, name: 'Litigation', desc: 'Case tracking, court dates, and deadlines' },
  { icon: FileText, name: 'Estate Planning', desc: 'Will, trust, and probate management' },
  { icon: DollarSign, name: 'Transactional', desc: 'Deal tracking and document management' },
  { icon: Search, name: 'IP & Patent', desc: 'Intellectual property filing and tracking' },
  { icon: Users, name: 'Family Law', desc: 'Client management with sensitivity' },
];

const features = [
  { icon: BarChart3, title: 'Case Pipeline', desc: 'Visual pipeline from intake to resolution with drag-and-drop simplicity.' },
  { icon: Users, title: 'Client CRM', desc: 'Complete client profiles with matter history and communication logs.' },
  { icon: Calendar, title: 'Court Calendar', desc: 'Track court dates, deadlines, and depositions with conflict checking.' },
  { icon: FileSignature, title: 'E-Signatures', desc: 'Retainer agreements and legal documents signed in minutes.' },
  { icon: Shield, title: 'Conflict Checking', desc: 'Check for conflicts before taking on new matters.' },
  { icon: FileText, title: 'Document Management', desc: 'Organize documents by matter with secure access controls.' },
  { icon: Clock, title: 'Time Tracking', desc: 'Track billable hours with integrated billing and invoicing.' },
  { icon: Zap, title: 'AI Assistant', desc: 'AI helps with deadlines, document drafting, and task management.' },
];

export default function LegalPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const handlePlanSelect = (planName: string, priceId: string) => {
    localStorage.setItem('operon_selected_plan', planName);
    localStorage.setItem('operon_selected_price_id', priceId);
    localStorage.setItem('operon_funnel_type', 'legal');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=legal`;
  };

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Legal CRM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The CRM Built for<br />Law Firms & Attorneys
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Manage cases, clients, court dates, and documents in one unified system. Built specifically for legal professionals with AI-powered deadline tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="px-8 py-4 bg-white text-amber-700 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
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
            <p className="text-amber-200 mt-4 text-sm">No credit card required • Set up in minutes</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for Legal Professionals
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Operon CRM is designed for the unique needs of law firms and legal departments. From solo practitioners to large firms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-amber-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
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
              Everything Your Practice Needs
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Purpose-built for legal workflows with AI-powered assistance throughout.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
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
              Pricing for Law Firms
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
              Premium vertical with advanced legal workflows. Start with any plan — upgrade as your firm grows.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-amber-600' : 'bg-slate-300'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}
              >
                Annual
                <span className="text-amber-600 text-sm font-medium ml-1">(Save 10%)</span>
              </button>
            </div>

            {/* Beta Discount Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on Growth & Business tiers!
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
                    plan.popular ? 'ring-2 ring-amber-600 shadow-xl' : 'shadow-lg hover:shadow-xl'
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
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                          ? 'bg-amber-600 text-white hover:bg-amber-700'
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
              <strong>Add-ons:</strong> Additional Users $5/seat • E-Signature Included • Trust Accounting Available
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
              Get your legal CRM running in minutes. AI helps configure everything.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Add Clients', desc: 'Import or create client and matter profiles.' },
              { step: '2', title: 'Set Up Pipeline', desc: 'Configure case stages to match your practice.' },
              { step: '3', title: 'Add Calendar', desc: 'Enter court dates, deadlines, and meetings.' },
              { step: '4', title: 'AI Optimizes', desc: 'AI tracks deadlines and suggests tasks.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
          <Scale className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Set up your case pipeline, configure your calendar, and let AI help you never miss a deadline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Book a Demo
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
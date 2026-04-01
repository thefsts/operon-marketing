import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Users, BarChart3, Calendar, FileText, Shield, 
  Flame, Stethoscope, Heart, Brain, Activity, Clock, Zap
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const plans = [
  {
    name: 'Self-Employed',
    description: 'Individual practitioners',
    monthlyPrice: 49,
    annualPrice: 44,
    priceId: 'price_professional_selfemployed',
    features: [
      'CRM & client management',
      'Document workflows',
      'Basic compliance tools',
      'E-signatures included',
      'Email support',
      '500 contacts',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Small Business',
    description: 'Small practices',
    monthlyPrice: 69,
    annualPrice: 62,
    priceId: 'price_professional_smallbusiness',
    features: [
      'Everything in Self-Employed',
      'Client pipelines',
      'Automation workflows',
      '1,500 contacts',
      '3 users',
      'Priority support',
    ],
    cta: 'Upgrade Now',
  },
  {
    name: 'Growth',
    description: 'Growing practices',
    monthlyPrice: 99,
    annualPrice: 89,
    priceId: 'price_professional_growth',
    betaDiscount: true,
    features: [
      'Everything in Small Business',
      'Advanced document automation',
      'Compliance suite',
      '3,000 contacts',
      '7 users',
      'Advanced reporting',
    ],
    cta: 'Grow Your Practice',
  },
  {
    name: 'Business',
    description: 'Established practices',
    monthlyPrice: 149,
    annualPrice: 134,
    priceId: 'price_professional_business',
    popular: true,
    betaDiscount: true,
    features: [
      'Everything in Growth',
      'Multi-business support',
      'Advanced workflows',
      '7,000 contacts',
      '15 users',
      'Premium support',
      'HIPAA-ready tools',
    ],
    cta: 'Take Full Control',
  },
  {
    name: 'White Label',
    description: 'For healthcare organizations',
    monthlyPrice: 299,
    annualPrice: 269,
    priceId: 'price_professional_whitelabel',
    features: [
      'Everything in Business',
      'Unlimited contacts',
      'Brand the system as your own',
      'Industry-specific compliance',
      'Includes up to 20 licenses',
      'Additional users: $5/seat/month',
      'Branded mobile app coming soon',
      'Dedicated support',
    ],
    cta: 'Launch Your Platform',
  },
];

const specialties = [
  { icon: Stethoscope, name: 'Primary Care', desc: 'Family medicine, internal medicine' },
  { icon: Heart, name: 'Cardiology', desc: 'Heart health specialists' },
  { icon: Brain, name: 'Mental Health', desc: 'Psychiatrists, psychologists, therapists' },
  { icon: Activity, name: 'Physical Therapy', desc: 'Rehabilitation and physical therapy' },
  { icon: Users, name: 'Dentists', desc: 'Dental practices and oral surgery' },
  { icon: Zap, name: 'Urgent Care', desc: 'Walk-in clinics and urgent care centers' },
  { icon: Shield, name: 'Specialty Clinics', desc: 'Dermatology, orthopedics, and more' },
  { icon: BarChart3, name: 'Medical Groups', desc: 'Multi-provider practices' },
];

const features = [
  { icon: Users, title: 'Patient CRM', desc: 'Complete patient records, history, and communication tracking.' },
  { icon: Calendar, title: 'Appointment Scheduling', desc: 'Online booking, reminders, and calendar management.' },
  { icon: FileText, title: 'Document Management', desc: 'Secure storage for patient files and forms.' },
  { icon: Shield, title: 'HIPAA-Ready', desc: 'Built with compliance in mind for healthcare providers.' },
  { icon: BarChart3, title: 'Reporting', desc: 'Practice analytics and performance tracking.' },
  { icon: Zap, title: 'Automation', desc: 'Automated appointment reminders and follow-ups.' },
];

export default function HealthcarePage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const handlePlanSelect = (planName: string, priceId: string) => {
    localStorage.setItem('operon_selected_plan', planName);
    localStorage.setItem('operon_selected_price_id', priceId);
    localStorage.setItem('operon_funnel_type', 'healthcare');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=professional`;
  };

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-rose-600 via-rose-700 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4" />
              Medical CRM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The CRM Built for<br />Healthcare Providers
            </h1>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto mb-8">
              Manage patients, appointments, documents, and compliance in one HIPAA-ready system. Built for clinics, dentists, specialists, and medical practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="px-8 py-4 bg-white text-rose-600 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
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
            <p className="text-rose-200 mt-4 text-sm">No credit card required • HIPAA-ready</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for Medical Practices
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Operon CRM is designed for healthcare providers who need better patient management and practice operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialties.map((specialty, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-rose-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                  <specialty.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{specialty.name}</h3>
                <p className="text-slate-500 text-sm">{specialty.desc}</p>
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
              Everything You Need to Run Your Practice
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              One system for patient management, scheduling, and compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center mb-3">
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
              Pricing for Medical Practices
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
              Start small and scale as your practice grows.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-rose-600' : 'bg-slate-300'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}
              >
                Annual
                <span className="text-rose-600 text-sm font-medium ml-1">(Save 10-20%)</span>
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
                    plan.popular ? 'ring-2 ring-rose-600 shadow-xl' : 'shadow-lg hover:shadow-xl'
                  } transition`}
                >
                  {hasBetaDiscount && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                      <Flame className="w-4 h-4" />
                      50% OFF
                    </div>
                  )}
                  {plan.popular && !hasBetaDiscount && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                          ? 'bg-rose-600 text-white hover:bg-rose-700'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Practice?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join healthcare providers using Operon CRM for better patient management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
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
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
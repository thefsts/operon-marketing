import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Users, BarChart3, Calendar, FileText, Shield,
  Flame, Stethoscope, Heart, Brain, Activity, Clock, Zap, Sparkles, Lock, ClipboardCheck
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
      'Custom domain & API access',
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

const aiFeatures = [
  { title: 'Smart Scheduling', desc: 'AI optimizes appointment scheduling to reduce no-shows and maximize provider utilization.' },
  { title: 'Patient Communication', desc: 'Automated follow-ups and reminders personalized for each patient\'s care plan.' },
  { title: 'Document Intelligence', desc: 'AI organizes patient documents and flags missing information or expiring consents.' },
  { title: 'Compliance Monitoring', desc: 'Continuous monitoring of compliance requirements with automated alerts for renewals.' },
];

const complianceFeatures = [
  { title: 'HIPAA Compliance', desc: 'Built-in safeguards for protected health information (PHI)' },
  { title: 'Audit Trails', desc: 'Complete logging of all data access and modifications' },
  { title: 'Encryption', desc: 'End-to-end encryption for data at rest and in transit' },
  { title: 'Access Controls', desc: 'Role-based permissions and user management' },
];

export default function HealthcarePage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlanSelect = (planName: string, priceId: string) => {
    localStorage.setItem('operon_selected_plan', planName);
    localStorage.setItem('operon_selected_price_id', priceId);
    localStorage.setItem('operon_funnel_type', 'healthcare');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=professional`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <GlobalHeader transparent={!isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-rose-950/50 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 text-rose-400 text-sm font-medium mb-8">
              <Stethoscope className="w-4 h-4" />
              Medical CRM
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                The CRM Built for
              </span>
              <br />
              <span className="text-white">Healthcare Providers</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-8">
              Manage patients, appointments, documents, and compliance in one HIPAA-ready system. 
              Built for clinics, dentists, specialists, and medical practices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/start"
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#pricing"
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center gap-2"
              >
                View Pricing
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-rose-400" />
                HIPAA-ready
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Medical Practices
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Operon CRM is designed for healthcare providers who need better patient management.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialties.map((specialty, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700/50 hover:border-rose-500/50 transition-all text-center group">
                <specialty.icon className="w-8 h-8 text-rose-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm mb-1">{specialty.name}</h3>
                <p className="text-slate-400 text-xs">{specialty.desc}</p>
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
              Everything You Need to Run Your Practice
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              One platform for patient management, scheduling, and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700/50 hover:border-rose-500/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your AI Healthcare Assistant
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Let Operon's AI help manage your practice, optimize scheduling, 
                and ensure compliance while you focus on patient care.
              </p>
              <div className="space-y-4">
                {aiFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-slate-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Operon AI</div>
                  <div className="text-xs text-slate-400">Healthcare Intelligence</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4 text-sm">
                  <span className="text-rose-400">Reminder:</span> 3 patients due for annual checkups this week. AI can send automated reminders.
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-sm">
                  <span className="text-green-400">Optimized:</span> Schedule suggestion: Move 2 afternoon appointments to morning to reduce gaps.
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-sm">
                  <span className="text-cyan-400">Compliance:</span> 2 consent forms expiring this month. Action required for continued care.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              HIPAA-Ready
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built with Healthcare Compliance in Mind
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Operon CRM includes built-in safeguards to help healthcare providers protect patient information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing for Healthcare Practices
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Choose the plan that fits your practice size. All plans include HIPAA-ready features.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`text-lg font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-slate-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-rose-500' : 'bg-slate-700'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-white' : 'text-slate-500'}`}
              >
                Annual
                <span className="text-rose-400 text-sm font-medium ml-1">(Save 10-20%)</span>
              </button>
            </div>

            {/* Beta Discount Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on Growth & Business Plans!
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
                  className={`relative bg-slate-800/50 backdrop-blur rounded-2xl p-6 border ${
                    plan.popular ? 'border-rose-500 shadow-lg shadow-rose-500/20' : 'border-slate-700/50 hover:border-slate-600'
                  } transition-all`}
                >
                  {/* Beta Discount Badge */}
                  {hasBetaDiscount && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 whitespace-nowrap">
                      <Flame className="w-3 h-3" />
                      50% OFF
                    </div>
                  )}
                  {/* Most Popular Badge */}
                  {plan.popular && !hasBetaDiscount && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mt-1 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    {hasBetaDiscount ? (
                      <div>
                        <div className="text-slate-500 line-through text-lg">
                          ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}/mo
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-orange-400">${discountedPrice}</span>
                          <span className="text-slate-400">/mo</span>
                        </div>
                        <div className="text-orange-400 text-xs font-medium mt-1">Beta Price</div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl font-bold">
                          ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-slate-400">/month</span>
                      </div>
                    )}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-rose-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePlanSelect(plan.name.toLowerCase().replace(' ', '_'), plan.priceId)}
                    className={`w-full py-3 rounded-lg font-semibold transition text-sm ${
                      hasBetaDiscount
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/25'
                        : plan.popular
                          ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:shadow-lg hover:shadow-rose-500/25'
                          : 'bg-slate-700 text-white hover:bg-slate-600'
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
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Add-ons:</strong> Multi-Business $10/mo • Additional Users $5/seat • E-signatures included
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Stethoscope className="w-12 h-12 text-rose-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Practice?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join healthcare providers using Operon CRM for better patient management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center"
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
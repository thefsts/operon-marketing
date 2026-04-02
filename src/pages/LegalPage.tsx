import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, Check, ArrowRight, Users, BarChart3, Calendar, FileText,
  MessageSquare, Shield, Zap, Clock, FileSignature, Briefcase,
  Building, Landmark, Gavel, Search, DollarSign, Flame, Sparkles
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

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
  { icon: Sparkles, title: 'AI Assistant', desc: 'AI helps with deadlines, document drafting, and task management.' },
];

const aiFeatures = [
  { title: 'Deadline Intelligence', desc: 'AI automatically calculates deadlines based on court rules and sends advance warnings.' },
  { title: 'Document Analysis', desc: 'AI summarizes documents, extracts key dates, and highlights important clauses.' },
  { title: 'Task Prioritization', desc: 'AI suggests optimal task ordering based on deadlines and importance.' },
  { title: 'Client Communication', desc: 'AI helps draft client updates and follow-ups based on case progress.' },
];

export default function LegalPage() {
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
    localStorage.setItem('operon_funnel_type', 'legal');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=legal`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <GlobalHeader transparent={!isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-amber-950/50 to-gray-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium mb-8">
              <Scale className="w-4 h-4" />
              Legal CRM
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                The CRM Built for
              </span>
              <br />
              <span className="text-white">Law Firms & Attorneys</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              Manage cases, clients, court dates, and documents in one unified system. 
              Built specifically for legal professionals with AI-powered deadline tracking.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/start"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all inline-flex items-center justify-center gap-2"
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
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm mb-12">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-400" />
                E-signatures included
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-400" />
                Conflict checking
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-400" />
                No credit card required
              </div>
            </div>
            
            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-amber-500/10 hover-lift">
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-gray-400 text-sm">Operon CRM - Legal</div>
                  <div className="w-16" />
                </div>
                <div className="bg-gray-900 p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
                      <div className="text-gray-400 text-xs mb-1">Active Cases</div>
                      <div className="text-2xl font-bold text-white">34</div>
                      <div className="text-green-400 text-xs">5 new this week</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">
                      <div className="text-gray-400 text-xs mb-1">Billable Hours</div>
                      <div className="text-2xl font-bold text-white">127</div>
                      <div className="text-gray-400 text-xs">This month</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
                      <div className="text-gray-400 text-xs mb-1">Documents Pending</div>
                      <div className="text-2xl font-bold text-white">18</div>
                      <div className="text-gray-400 text-xs">Awaiting signature</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['Intake', 'Discovery', 'Filing', 'Closed'].map((stage, i) => (
                      <div key={stage} className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-2">{stage}</div>
                        <div className="space-y-2">
                          {[1, 2].slice(0, i === 3 ? 1 : 2).map((_, j) => (
                            <div key={j} className="bg-gray-700/50 rounded p-2 text-xs text-gray-300 truncate">
                              Case #{i}{j + 1}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Legal Professionals
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From solo practitioners to large firms, Operon adapts to your practice area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur rounded-xl p-4 border border-gray-700/50 hover:border-amber-500/50 transition-all text-center group">
                <industry.icon className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm mb-1">{industry.name}</h3>
                <p className="text-gray-400 text-xs">{industry.desc}</p>
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
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              One platform for case management, client communication, and deadline tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-amber-400" />
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
                Your AI Legal Assistant
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Let Operon's AI help manage deadlines, analyze documents, 
                and keep your practice running smoothly.
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Operon AI</div>
                  <div className="text-xs text-gray-400">Legal Intelligence</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-amber-400">Deadline Alert:</span> Motion filing due in 5 days for Smith v. Jones. AI suggests starting draft today.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-green-400">Conflict Check:</span> New client "Acme Corp" - No conflicts found in database of 500+ matters.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-cyan-400">Time Entry:</span> 3.5 billable hours logged today. Don't forget to enter your time.
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
              Pricing for Law Firms
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Choose the plan that fits your practice. All plans include case management and calendar.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-amber-500' : 'bg-gray-600'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-white' : 'text-gray-500'}`}
              >
                Annual
                <span className="text-amber-400 text-sm font-medium ml-1">(Save 10-20%)</span>
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
                ? (plan.monthlyPrice * 0.5).toFixed(2)
                : null;

              return (
                <div
                  key={index}
                  className={`relative bg-gray-700/50 backdrop-blur rounded-2xl p-6 border ${
                    plan.popular ? 'border-amber-500 shadow-lg shadow-amber-500/20' : 'border-gray-700/50 hover:border-gray-600'
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
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mt-1 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    {hasBetaDiscount ? (
                      <div>
                        <div className="text-gray-500 line-through text-lg">
                          ${plan.monthlyPrice}/month
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-orange-400">${discountedPrice}</span>
                          <span className="text-gray-400">/mo</span>
                        </div>
                        <div className="text-orange-400 text-xs font-medium mt-1">Beta Price</div>
                        <div className="text-gray-500 text-xs mt-1">Same price for monthly & annual billing</div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl font-bold">
                          ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-gray-400">/month</span>
                      </div>
                    )}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePlanSelect(plan.name.toLowerCase().replace(' ', '_'), plan.priceId)}
                    className={`w-full py-3 rounded-lg font-semibold transition text-sm ${
                      hasBetaDiscount
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/25'
                        : plan.popular
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/25'
                          : 'bg-gray-600 text-white hover:bg-slate-600'
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
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Add-ons:</strong> Additional Users $5/seat • E-Signature Included • Trust Accounting Available
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-amber-400">
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
      <section className="py-20 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
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
              className="px-8 py-4 bg-gray-700/30 text-white rounded-xl font-semibold hover:bg-gray-600/30 transition-all border border-gray-600/50 inline-flex items-center justify-center"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
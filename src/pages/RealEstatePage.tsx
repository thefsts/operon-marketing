import { useState, useEffect } from 'react';
import { Home, CheckCircle, ArrowRight, FileText, Users, BarChart3, Kanban, FileSignature, Shield, Sparkles, Building2, Phone, Calendar, Check, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(plan?: string) {
  localStorage.setItem('operon_funnel_type', 'real_estate');
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'real_estate');
  if (plan) localStorage.setItem('operon_selected_plan', plan);
}

const features = [
  { icon: Kanban, title: 'Deal Pipeline', desc: 'Visual pipeline from lead to close with drag-and-drop simplicity.', color: 'from-emerald-500 to-teal-400' },
  { icon: Calendar, title: 'Showing Scheduler', desc: 'Built-in calendar for showings, meetings, and closings.', color: 'from-violet-500 to-purple-400' },
  { icon: Home, title: 'Listings Management', desc: 'Manage active listings, details, and showing schedules.', color: 'from-green-500 to-emerald-400' },
  { icon: Users, title: 'Client Tracking', desc: 'Complete client profiles with communication history.', color: 'from-blue-500 to-cyan-400' },
  { icon: FileSignature, title: 'E-Signatures', desc: 'Contracts and agreements with built-in e-signature.', color: 'from-purple-500 to-indigo-400' },
  { icon: Shield, title: 'License Tracking', desc: 'Track agent licenses and renewal dates with alerts.', color: 'from-rose-500 to-pink-400' },
  { icon: BarChart3, title: 'Commission Tracking', desc: 'Track commissions, splits, and revenue summaries.', color: 'from-amber-500 to-orange-400' },
  { icon: Sparkles, title: 'AI Assistant', desc: 'AI helps manage your schedule and suggests actions.', color: 'from-cyan-500 to-blue-400' },
];

const aiFeatures = [
  { title: 'Smart Follow-Up Reminders', desc: 'AI analyzes client interactions and prompts you to reach out at the perfect time to stay top-of-mind.' },
  { title: 'Pipeline Predictions', desc: 'AI predicts which deals are most likely to close and suggests actions to move stuck deals forward.' },
  { title: 'Showing Optimization', desc: 'AI suggests optimal showing times based on client preferences and your schedule.' },
  { title: 'Document Organization', desc: 'AI automatically organizes documents by transaction and flags missing disclosures.' },
];

const plans = [
  {
    name: 'Self-Employed',
    description: 'Solo agents',
    monthlyPrice: 49,
    annualPrice: 44,
    priceId: 'price_realestate_self',
    features: [
      'CRM & client database',
      '1,000 contacts',
      'Deal pipeline',
      'Basic listings',
      'Email marketing (1,000/mo)',
      'Calendar sync',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Small Business',
    description: 'Small teams',
    monthlyPrice: 69,
    annualPrice: 62,
    priceId: 'price_realestate_small',
    features: [
      'Everything in Self-Employed',
      '5,000 contacts',
      'Advanced pipeline',
      'Automation workflows',
      'Email marketing (5,000/mo)',
      'SMS (500/mo)',
      'Priority support',
    ],
    cta: 'Upgrade Now',
  },
  {
    name: 'Growth',
    description: 'Growing teams',
    monthlyPrice: 99,
    annualPrice: 89,
    priceId: 'price_realestate_growth',
    popular: true,
    betaDiscount: true,
    features: [
      'Everything in Small Business',
      '15,000 contacts',
      'AI-powered insights',
      'Advanced reporting',
      'Email marketing (10,000/mo)',
      'SMS (1,000/mo)',
      'E-signatures included',
      'Phone & email support',
    ],
    cta: 'Get Full Access',
  },
  {
    name: 'Business',
    description: 'Established teams',
    monthlyPrice: 149,
    annualPrice: 134,
    priceId: 'price_realestate_business',
    features: [
      'Everything in Growth',
      '25,000 contacts',
      'Team collaboration (5 seats)',
      'Commission tracking',
      'Email marketing (25,000/mo)',
      'SMS (2,500/mo)',
      'Custom integrations',
      'Dedicated support',
    ],
    cta: 'Scale Up',
  },
  {
    name: 'White Label',
    description: 'Brokerages & teams',
    monthlyPrice: 299,
    annualPrice: 269,
    priceId: 'price_realestate_whitelabel',
    features: [
      'Everything in Business',
      'Unlimited contacts',
      'Full white-label branding',
      'Email marketing (50,000/mo)',
      'Includes up to 20 licenses',
      'Additional users: $5/seat/month',
      'Custom domain & API access',
      'Priority support',
    ],
    cta: 'Go White Label',
  },
];

export default function RealEstatePage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950/50 to-gray-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8">
              <Home className="w-4 h-4" />
              Real Estate CRM
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Close More Deals
              </span>
              <br />
              <span className="text-white">Manage Your Pipeline in One Place</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              Listings, clients, deals, documents, commissions, and compliance — 
              everything your brokerage needs in a single platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/start"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all inline-flex items-center justify-center gap-2"
              >
                Start Your Setup
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
                <Check className="w-5 h-5 text-emerald-400" />
                E-signatures included
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                AI-powered insights
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                No contracts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Capabilities Bar */}
      <section className="py-12 bg-gray-800/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {['Listings', 'Pipeline', 'Client Tracking', 'Marketing', 'Documents'].map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-gray-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Real Estate Professionals
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every tool your brokerage or agency needs — configured for real estate workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal + Client detail */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700/50 backdrop-blur rounded-2xl p-8 border border-emerald-500/30">
              <Kanban className="w-10 h-10 text-emerald-400 mb-5" />
              <h3 className="text-2xl font-bold mb-4">Deal Pipeline & Listings</h3>
              <p className="text-gray-400 mb-5">Track every transaction from first contact through closing — with a visual pipeline that mirrors your process.</p>
              <ul className="space-y-3">
                {['Visual drag-and-drop pipeline', 'Listing status management', 'Offer tracking & negotiation log', 'Showing scheduler', 'Close date reminders & alerts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-700/50 backdrop-blur rounded-2xl p-8 border border-blue-500/30">
              <Users className="w-10 h-10 text-blue-400 mb-5" />
              <h3 className="text-2xl font-bold mb-4">Client & Contact Management</h3>
              <p className="text-gray-400 mb-5">Build lasting relationships with a CRM designed for how real estate professionals work with buyers and sellers.</p>
              <ul className="space-y-3">
                {['Buyer & seller profiles', 'Communication history', 'Property interest tracking', 'Automated follow-up reminders', 'Referral source tracking'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
                Your AI Real Estate Assistant
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Let Operon's AI help manage your workflow, predict deal outcomes, 
                and keep you focused on closing deals.
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Operon AI</div>
                  <div className="text-xs text-gray-400">Real Estate Intelligence</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-emerald-400">Follow-up:</span> The Johnsons viewed 3 properties last week. Best time to call: 6-8pm today.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-cyan-400">Pipeline:</span> 4 deals likely to close this month. Projected volume: $1.2M.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-purple-400">Suggestion:</span> 15 clients haven't been contacted in 30+ days. Schedule touch-base calls.
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
              Pricing for Real Estate Teams
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Start with any plan — all include real estate CRM features. Upgrade as your team grows.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-emerald-500' : 'bg-gray-600'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-white' : 'text-gray-500'}`}
              >
                Annual
                <span className="text-emerald-400 text-sm font-medium ml-1">(Save 10-20%)</span>
              </button>
            </div>

            {/* Beta Discount Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on Growth Plan!
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
                    plan.popular ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' : 'border-gray-700/50 hover:border-gray-600'
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
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
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
                        <Check className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => saveFunnel(plan.name.toLowerCase().replace(' ', '_'))}
                    className={`w-full py-3 rounded-lg font-semibold transition text-sm ${
                      hasBetaDiscount
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/25'
                        : plan.popular
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/25'
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
              <strong className="text-white">Add-ons:</strong> Multi-Business $10/mo • Additional Users $5/seat • E-signatures included in Growth+
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Home className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Run Your Real Estate CRM?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Set up your pipeline, add your listings, and let AI help you optimize your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all inline-flex items-center justify-center gap-2"
            >
              Start Your Real Estate CRM
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-gray-700/30 text-white rounded-xl font-semibold hover:bg-gray-600/30 transition-all border border-gray-600/50 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
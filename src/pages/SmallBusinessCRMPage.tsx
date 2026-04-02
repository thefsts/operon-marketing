import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Zap, Users, BarChart3, Clock, Phone, Mail, Calendar, 
  FileText, MessageSquare, TrendingUp, Settings, Shield, Flame, Briefcase,
  Wrench, Home as HomeIcon, Droplets, Leaf, Truck, Sparkles, Star, ChevronRight,
  Building2, Target, Award
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
    ],
    cta: 'Go White Label',
  },
];

const industries = [
  { icon: Wrench, name: 'Contractors', desc: 'Plumbers, electricians, HVAC, general contractors' },
  { icon: HomeIcon, name: 'Home Services', desc: 'Cleaning, landscaping, pest control' },
  { icon: Truck, name: 'Mobile Services', desc: 'Detailing, repairs, delivery services' },
  { icon: Droplets, name: 'Cleaning & Maintenance', desc: 'Janitorial, pool service, carpet cleaning' },
  { icon: Leaf, name: 'Landscaping & Lawn', desc: 'Lawn care, tree services, irrigation' },
  { icon: Briefcase, name: 'Professional Services', desc: 'Consultants, freelancers, agencies' },
];

const features = [
  { icon: Users, title: 'Client Management', desc: 'Complete contact history, notes, and preferences' },
  { icon: Calendar, title: 'Job Scheduling', desc: 'Drag-and-drop calendar with reminders' },
  { icon: FileText, title: 'Estimates & Invoices', desc: 'Create and send in seconds, get paid faster' },
  { icon: MessageSquare, title: 'SMS & Email', desc: 'Reach clients their way, all tracked' },
  { icon: BarChart3, title: 'Pipeline Tracking', desc: 'Visual job board from lead to completion' },
  { icon: Sparkles, title: 'AI Assistant', desc: 'Smart suggestions and task automation' },
  { icon: TrendingUp, title: 'Reporting', desc: 'Revenue, job completion, client retention' },
  { icon: Shield, title: 'Secure & Cloud-Based', desc: 'Access from anywhere, data always safe' },
];

const aiFeatures = [
  { title: 'Smart Lead Scoring', desc: 'AI analyzes incoming leads and prioritizes the hottest opportunities so you focus on what matters most.' },
  { title: 'Automated Follow-ups', desc: 'Never miss a follow-up again. AI schedules and sends personalized messages at the perfect time.' },
  { title: 'Job Recommendations', desc: 'Get intelligent suggestions for scheduling, pricing, and resource allocation based on historical data.' },
  { title: 'Client Insights', desc: 'AI analyzes client patterns to help you upsell services and improve customer satisfaction.' },
];

function saveFunnel(type: string) {
  localStorage.setItem('operon_funnel_type', type);
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'small-business');
}

function handlePlanSelect(planKey: string, priceId: string) {
  saveFunnel('small_business');
  const selectedPlan = { plan: planKey, priceId };
  localStorage.setItem('operon_selected_plan', JSON.stringify(selectedPlan));
  window.location.href = `${APP_URL}/signup?plan=${planKey}`;
}

export default function SmallBusinessCRMPage() {
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Beta Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              Limited Beta Sale - 50% OFF Growth & Pro Plans
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Small Business CRM
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              Built for service businesses, contractors, and local pros. 
              Manage clients, jobs, and payments in one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/start"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all inline-flex items-center justify-center gap-2"
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
                <Check className="w-5 h-5 text-green-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Set up in minutes
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Cancel anytime
              </div>
            </div>
            
            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-cyan-500/10 hover-lift">
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-gray-400 text-sm">Operon CRM - Small Business</div>
                  <div className="w-16" />
                </div>
                <div className="bg-gray-900 p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">
                      <div className="text-gray-400 text-xs mb-1">Active Jobs</div>
                      <div className="text-2xl font-bold text-white">24</div>
                      <div className="text-green-400 text-xs">+5 this week</div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
                      <div className="text-gray-400 text-xs mb-1">Pending Estimates</div>
                      <div className="text-2xl font-bold text-white">8</div>
                      <div className="text-gray-400 text-xs">Awaiting response</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
                      <div className="text-gray-400 text-xs mb-1">This Month Revenue</div>
                      <div className="text-2xl font-bold text-white">$12,450</div>
                      <div className="text-green-400 text-xs">+18% vs last month</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['New Leads', 'Scheduled', 'In Progress', 'Completed'].map((stage, i) => (
                      <div key={stage} className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-2">{stage}</div>
                        <div className="space-y-2">
                          {[1, 2].slice(0, i === 3 ? 1 : 2).map((_, j) => (
                            <div key={j} className="bg-gray-700/50 rounded p-2 text-xs text-gray-300 truncate">
                              Job #{i}{j + 1}
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Service Businesses
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you're a solo contractor or managing a team, Operon adapts to your workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur rounded-xl p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all text-center group">
                <industry.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
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
              Everything You Need to Run Your Business
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              One platform to manage clients, jobs, and payments. No more juggling multiple apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
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
                Your AI Assistant Works Behind the Scenes
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Let Operon's AI handle the repetitive tasks while you focus on growing your business. 
                Smart automation that learns from your workflow.
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Operon AI</div>
                  <div className="text-xs text-gray-400">Always learning</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-purple-400">Suggestion:</span> Follow up with John Smith about the kitchen remodel quote. Best time to call: 2-4pm.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-green-400">Automated:</span> Sent appointment reminder to 5 clients for tomorrow's jobs.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-cyan-400">Insight:</span> Your email open rate increased 23% this month. Best performing subject: "Your estimate is ready"
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Start small and scale as you grow. All plans include the core features you need.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-white' : 'text-gray-500'}`}
              >
                Annual
                <span className="text-cyan-400 text-sm font-medium ml-1">(Save 10-20%)</span>
              </button>
            </div>

            {/* Beta Discount Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on Growth & Pro tiers!
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => {
              const hasBetaDiscount = plan.betaDiscount;
              // Beta discount applies to base monthly price, no additional annual savings
              const discountedPrice = hasBetaDiscount
                ? (plan.monthlyPrice * 0.5).toFixed(2)
                : null;

              return (
                <div
                  key={index}
                  className={`relative bg-gray-700/50 backdrop-blur rounded-2xl p-6 border ${
                    plan.popular ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' : 'border-gray-700/50 hover:border-gray-600'
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
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
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
                          <span className="text-gray-400">/month</span>
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
                        <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
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
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25'
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
              <strong className="text-white">Add-ons:</strong> Multi-Business $10/mo • Additional Users $5/seat • eSignature Included
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-cyan-400">
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
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Service Business?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
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
              className="px-8 py-4 bg-gray-700/30 text-white rounded-xl font-semibold hover:bg-gray-600/30 transition-all border border-gray-600/50 inline-flex items-center justify-center"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            Questions? Call us at (888) 555-0123
          </p>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
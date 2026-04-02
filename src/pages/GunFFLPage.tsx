import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Users, FileCheck, Check, ArrowRight, CreditCard,
  Star, Activity, Zap, Clock, Target, Award, Crosshair, 
  AlertTriangle, Database, Flame, Settings, Brain, MessageSquare
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

// Beta discount eligible tiers for Gun FFL - Growth & Pro
const betaDiscountTiers = ['Growth', 'Pro'];

const plans = [
  {
    name: 'Starter',
    description: 'Core tools for small shops',
    monthlyPrice: 29,
    annualPrice: 26,
    priceId: 'price_ffl_starter',
    features: [
      'Basic inventory tracking',
      'Customer database',
      'Form 4473 digital storage',
      'FFL license management',
      'Up to 500 contacts',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'Growing shops with compliance',
    monthlyPrice: 49,
    annualPrice: 44,
    priceId: 'price_ffl_growth',
    betaDiscount: true,
    features: [
      'Everything in Starter',
      'ATS (Acquisition & Disposition)',
      'Bound book digital backup',
      'NFA item tracking',
      'Up to 2,500 contacts',
      'Priority email support',
    ],
    cta: 'Upgrade Now',
  },
  {
    name: 'Pro',
    description: 'Full system with POS & compliance',
    monthlyPrice: 79,
    annualPrice: 71,
    priceId: 'price_ffl_pro',
    popular: true,
    betaDiscount: true,
    features: [
      'Everything in Growth',
      'Integrated POS system',
      'Background check integration',
      'Automated compliance alerts',
      'Up to 10,000 contacts',
      'SMS included (500/mo)',
      'Phone & email support',
    ],
    cta: 'Get Full Access',
  },
  {
    name: 'Elite',
    description: 'Multi-location operations',
    monthlyPrice: 99,
    annualPrice: 89,
    priceId: 'price_ffl_elite',
    features: [
      'Everything in Pro',
      'Multi-store inventory sync',
      'Advanced reporting',
      'Range management tools',
      'Unlimited contacts',
      'Priority support & onboarding',
      'Custom workflows',
    ],
    cta: 'Scale Up',
  },
  {
    name: 'White Label',
    description: 'Your branded FFL platform',
    monthlyPrice: 199,
    annualPrice: 179,
    priceId: 'price_ffl_whitelabel',
    features: [
      'Everything in Elite',
      'Full white-label branding',
      'Custom domain',
      'API access',
      'Includes up to 20 licenses',
      'Additional users: $5/seat/month',
      'Branded mobile app coming soon',
      'Dedicated account manager',
    ],
    cta: 'Start Your Platform',
  },
];

const businessTypes = [
  { icon: Shield, name: 'Gun Shops', desc: 'Retail firearm sales' },
  { icon: Crosshair, name: 'Shooting Ranges', desc: 'Range & retail operations' },
  { icon: Target, name: 'Firearm Instructors', desc: 'Training businesses' },
  { icon: Award, name: 'Gunsmiths', desc: 'Repair & customization' },
  { icon: Users, name: 'Collectors (C&R)', desc: 'Curio & relic collectors' },
  { icon: Database, name: 'Pawn Shops', desc: 'FFL pawn operations' },
  { icon: Settings, name: 'Manufacturers', desc: 'Firearm manufacturing' },
  { icon: Star, name: 'Importers/Exporters', desc: 'International trade' },
];

const features = [
  { icon: FileCheck, title: 'Digital Form 4473', desc: 'Electronic 4473 with e-signature storage and retrieval.' },
  { icon: Database, title: 'A&D Bound Book', desc: 'Digital acquisition and disposition bound book with ATF compliance.' },
  { icon: Shield, title: 'Compliance Tracking', desc: 'License expiration alerts and inspection readiness tools.' },
  { icon: Users, title: 'Customer Database', desc: 'Track customers, preferences, and purchase history.' },
  { icon: CreditCard, title: 'Integrated POS', desc: 'Point-of-sale built for firearm retailers.' },
  { icon: AlertTriangle, title: 'Alert System', desc: 'Automated reminders for licenses, compliance deadlines.' },
  { icon: Target, title: 'Inventory Management', desc: 'Track firearms, accessories, and ammunition.' },
  { icon: Activity, title: 'Reporting', desc: 'ATF-compliant reports and business analytics.' },
];

export default function GunFFLPage() {
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
    localStorage.setItem('operon_funnel_type', 'gun_ffl');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=gun_ffl`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <GlobalHeader transparent={!isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-gray-900 to-orange-900/20"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              FFL Dealer CRM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Complete CRM for<br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">FFL Dealers & Gun Shops</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Manage inventory, customers, compliance, and sales in one system. 
              Built specifically for Federal Firearms License holders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-gray-700/30 text-white rounded-xl font-semibold hover:bg-gray-600/30 transition-all border border-gray-600/50"
              >
                Book a Demo
              </Link>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              No credit card required • Free 14-day trial
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-800/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="font-medium">ATF Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-amber-400" />
              <span className="font-medium">Digital Form 4473</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-amber-400" />
              <span className="font-medium">A&D Bound Book</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span className="font-medium">License Alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-amber-500/10 hover-lift">
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-gray-400 text-sm">Operon CRM - FFL Dashboard</div>
            </div>
            <div className="bg-gray-900 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Firearms in Stock</span>
                    <Shield className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">847</div>
                  <div className="text-green-400 text-xs mt-1">+12% this month</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Pending 4473 Forms</span>
                    <FileCheck className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">23</div>
                  <div className="text-amber-400 text-xs mt-1">5 due today</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Compliance Status</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-green-400">98.7%</div>
                  <div className="text-gray-400 text-xs mt-1">All systems operational</div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700/50">
                <div className="text-gray-400 text-sm mb-3">Recent A&D Transactions</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-white text-sm">Glock 19 Gen 5 - Acquisition</span>
                    </div>
                    <span className="text-gray-400 text-xs">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <span className="text-white text-sm">Smith & Wesson M&P - Disposition</span>
                    </div>
                    <span className="text-gray-400 text-xs">15 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-white text-sm">Form 4473 #2847 - Completed</span>
                    </div>
                    <span className="text-gray-400 text-xs">1 hour ago</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-700/30 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-white text-sm">License Renewal Alert - 30 days</span>
                    </div>
                    <span className="text-gray-400 text-xs">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for All <span className="text-amber-400">FFL Types</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From small gun shops to multi-location ranges, Operon scales with your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {businessTypes.map((type, index) => (
              <div key={index} className="bg-gray-700/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition text-center">
                <div className="w-14 h-14 rounded-lg bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-1">{type.name}</h3>
                <p className="text-gray-400 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Run Your <span className="text-amber-400">FFL</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Compliance, inventory, customers, and sales—all in one integrated system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition">
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Highlight */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay ATF Compliant,<br />
                <span className="text-amber-400">Automatically</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our system helps you maintain compliance with ATF regulations. 
                From digital Form 4473 storage to bound book management, 
                we've built tools specifically for FFL dealers.
              </p>
              <ul className="space-y-4">
                {[
                  'Digital Form 4473 with e-signature capture',
                  'Acquisition & Disposition (A&D) bound book',
                  'Automatic license expiration alerts',
                  'Inspection-ready reports at your fingertips',
                  'NFA item tracking and forms',
                  'Secure, encrypted data storage',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-700/50 backdrop-blur rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Compliance Alerts</h3>
                  <p className="text-gray-400 text-sm">Never miss a deadline</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'FFL License Expires', days: '45 days', urgent: false },
                  { label: 'ATF Inspection Due', days: '90 days', urgent: false },
                  { label: 'Form 4473 Audit', days: '30 days', urgent: true },
                ].map((alert, i) => (
                  <div key={i} className={`p-4 rounded-lg ${alert.urgent ? 'bg-red-500/10 border border-red-500/20' : 'bg-gray-600/50'}`}>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{alert.label}</span>
                      <span className={`text-sm ${alert.urgent ? 'text-red-400' : 'text-gray-400'}`}>{alert.days}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold">AI Assistant</h3>
                  <p className="text-gray-400 text-sm">FFL Operations Helper</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-300 text-sm">"Check my inventory for any firearms approaching the 90-day acquisition threshold for ATF reporting."</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                  <p className="text-purple-300 text-sm">"Found 3 firearms acquired 85+ days ago. I've prepared the acquisition report for your review. One requires immediate attention."</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Ask about compliance, inventory, customers..."
                  className="flex-1 bg-gray-700/50 border border-gray-700/50 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                />
                <button className="p-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your <span className="text-purple-400">AI-Powered</span> FFL Assistant
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Get instant help with compliance questions, inventory checks, and customer management. 
                The AI assistant understands FFL regulations and helps keep your business running smoothly.
              </p>
              <ul className="space-y-3">
                {[
                  'Compliance deadline reminders and ATF regulation guidance',
                  'Inventory alerts for acquisition thresholds',
                  'Customer lookup and purchase history summaries',
                  'Automated report generation for inspections',
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              FFL Dealer <span className="text-amber-400">Pricing</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Start small and scale as your shop grows.
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
                <span className="text-amber-400 text-sm font-medium ml-1">(Save 10%)</span>
              </button>
            </div>

            {/* Beta Discount Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on Growth & Pro tiers!
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
                    plan.popular ? 'border-amber-500' : 'border-gray-700/50'
                  } hover:border-amber-500/50 transition`}
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
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mt-1 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    {hasBetaDiscount ? (
                      <div>
                        <div className="text-gray-500 line-through text-lg">
                          ${plan.monthlyPrice}/month
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-amber-400">${discountedPrice}</span>
                          <span className="text-gray-400">/mo</span>
                        </div>
                        <div className="text-amber-400 text-sm font-medium mt-1">Beta Price</div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-white">
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
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      hasBetaDiscount
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                        : plan.popular
                          ? 'bg-amber-500 text-white hover:bg-amber-600'
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
              <strong className="text-white">Add-ons:</strong> Multi-Location $20/mo • Additional Users $5/seat • Range Module $15/mo
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It <span className="text-amber-400">Works</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Get set up quickly. AI helps configure your FFL operations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Enter FFL Info', desc: 'Add your license details.' },
              { step: '2', title: 'Import Inventory', desc: 'Add firearms manually or import.' },
              { step: '3', title: 'Set Up Customers', desc: 'Import your customer list.' },
              { step: '4', title: 'Go Live', desc: 'Start using the full system.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4 border border-amber-500/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-900/20 via-gray-900 to-orange-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your FFL Operations?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join other FFL dealers using Operon to manage compliance, inventory, and customers in one system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-gray-700/30 text-white rounded-xl font-semibold hover:bg-gray-600/30 transition-all border border-gray-600/50"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            Questions? Call us at (888) 555-0123
          </p>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
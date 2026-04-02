import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, Users, Calendar, Check, ArrowRight, CreditCard, FileCheck,
  Star, Activity, Globe, Shield, Sparkles, Flame, Zap, Clock,
  Dumbbell, Target, Award, Medal, School
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const plans = [
  {
    name: 'Starter',
    description: 'Core tools for small teams',
    monthlyPrice: 29,
    annualPrice: 26,
    priceId: 'price_sports_starter',
    features: [
      'Basic roster management',
      'Game & practice scheduling',
      'Team messaging',
      'Attendance tracking',
      'Up to 1 team',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'Expanding teams with payments',
    monthlyPrice: 49,
    annualPrice: 44,
    priceId: 'price_sports_growth',
    betaDiscount: true,
    features: [
      'Everything in Starter',
      'Online payments & invoicing',
      'Season registrations',
      'Advanced attendance',
      'Up to 3 teams',
      'Priority email support',
    ],
    cta: 'Upgrade Now',
  },
  {
    name: 'Pro',
    description: 'Full system with portals',
    monthlyPrice: 79,
    annualPrice: 71,
    priceId: 'price_sports_pro',
    popular: true,
    betaDiscount: true,
    features: [
      'Everything in Growth',
      'Parent & player portals',
      'Digital waivers & forms',
      'Document automation',
      'Up to 10 teams',
      'SMS included (500/mo)',
      'Phone & email support',
    ],
    cta: 'Get Full Access',
  },
  {
    name: 'Elite',
    description: 'Full branding, every feature',
    monthlyPrice: 99,
    annualPrice: 89,
    priceId: 'price_sports_elite',
    features: [
      'Everything in Pro',
      'Full custom branding',
      'Team logo throughout system',
      'Unlimited teams & players',
      'Priority support & onboarding',
      'Website widgets',
    ],
    cta: 'Scale Up',
  },
  {
    name: 'White Label',
    description: 'Your branded sports platform',
    monthlyPrice: 199,
    annualPrice: 179,
    priceId: 'price_sports_whitelabel',
    features: [
      'Everything in Elite',
      'Full white-label branding',
      'Custom domain',
      'API access',
      'Includes up to 20 licenses',
      'Additional users: $5/seat/month',
      'Custom domain & API access',
      'Dedicated account manager',
    ],
    cta: 'Start Your Platform',
  },
];

const industries = [
  { icon: Trophy, name: 'Youth Sports Leagues', desc: 'Full season management' },
  { icon: Dumbbell, name: 'Fitness & Training', desc: 'Classes and personal training' },
  { icon: Medal, name: 'Individual Coaches', desc: 'Private coaching businesses' },
  { icon: Award, name: 'Sports Academies', desc: 'Multi-program organizations' },
  { icon: Target, name: 'Martial Arts Studios', desc: 'Belt tracking and memberships' },
  { icon: Users, name: 'Multi-Sport Orgs', desc: 'Complex organization management' },
  { icon: Activity, name: 'Tournament Organizers', desc: 'Event and registration management' },
  { icon: Star, name: 'Club Teams', desc: 'Travel and club sports' },
  { icon: School, name: 'School Athletic Programs', desc: 'K-12 and college athletics' },
];

const features = [
  { icon: Users, title: 'Roster Management', desc: 'Players, parents/guardians, and coaches with role-based permissions.' },
  { icon: Calendar, title: 'Smart Scheduling', desc: 'Practices, games, and tournaments with RSVP tracking.' },
  { icon: Activity, title: 'Attendance Tracking', desc: 'Track attendance per player per event with notifications.' },
  { icon: FileCheck, title: 'Digital Waivers', desc: 'E-signature waivers with timestamp verification.' },
  { icon: CreditCard, title: 'Payments', desc: 'Season fees, registrations, and tournament entries.' },
  { icon: Star, title: 'Parent Portal', desc: 'View schedules, RSVP, sign waivers, and make payments.' },
  { icon: Trophy, title: 'Player Portal', desc: 'Stats, achievements, and upcoming events.' },
  { icon: Globe, title: 'Website Widgets', desc: 'Embed schedules, rosters, and registration forms.' },
];

const aiFeatures = [
  { title: 'Smart Scheduling', desc: 'AI suggests optimal practice times based on player availability and facility constraints.' },
  { title: 'Communication Automation', desc: 'Automated reminders for games, practices, and upcoming events to players and parents.' },
  { title: 'Roster Optimization', desc: 'AI helps balance teams and suggests lineup changes based on attendance patterns.' },
  { title: 'Payment Reminders', desc: 'Automated payment reminders and follow-ups for outstanding balances.' },
];

export default function SportsPage() {
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
    localStorage.setItem('operon_funnel_type', 'sports');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=sports`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <GlobalHeader transparent={!isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-950/50 to-gray-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Beta Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              Limited Beta Sale - 50% OFF Growth & Pro Plans
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sports Organization CRM
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              Teams, schedules, registrations, payments, waivers, and communication — 
              all in one platform. Built for leagues, clubs, and sports organizations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/start"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all inline-flex items-center justify-center gap-2"
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
              <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-green-500/10 hover-lift">
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-gray-400 text-sm">Operon CRM - Sports</div>
                  <div className="w-16" />
                </div>
                <div className="bg-gray-900 p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
                      <div className="text-gray-400 text-xs mb-1">Active Teams</div>
                      <div className="text-2xl font-bold text-white">12</div>
                      <div className="text-gray-400 text-xs">156 athletes</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">
                      <div className="text-gray-400 text-xs mb-1">Upcoming Events</div>
                      <div className="text-2xl font-bold text-white">8</div>
                      <div className="text-gray-400 text-xs">This week</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
                      <div className="text-gray-400 text-xs mb-1">Registrations</div>
                      <div className="text-2xl font-bold text-white">89</div>
                      <div className="text-green-400 text-xs">+23 this week</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['Registration', 'Active', 'Competition', 'Complete'].map((stage, i) => (
                      <div key={stage} className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400 mb-2">{stage}</div>
                        <div className="space-y-2">
                          {[1, 2].slice(0, i === 3 ? 1 : 2).map((_, j) => (
                            <div key={j} className="bg-gray-700/50 rounded p-2 text-xs text-gray-300 truncate">
                              Team #{i}{j + 1}
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
              Built for Sports Organizations
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From youth leagues to training academies, Operon helps you manage everything.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur rounded-xl p-4 border border-gray-700/50 hover:border-green-500/50 transition-all text-center group">
                <industry.icon className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
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
              Everything You Need to Run Your Organization
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              One platform for rosters, scheduling, payments, and communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-green-400" />
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
                Your AI Sports Assistant
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Let Operon's AI handle scheduling, communication, and reminders 
                while you focus on coaching and building great teams.
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Operon AI</div>
                  <div className="text-xs text-gray-400">Sports Intelligence</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-green-400">Schedule:</span> 15 players confirmed for Saturday's game vs Thunder. 3 pending responses.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-cyan-400">Reminder:</span> Practice tomorrow at 5pm. Sent notifications to all 18 team members.
                </div>
                <div className="bg-gray-600/50 rounded-lg p-4 text-sm">
                  <span className="text-amber-400">Payment:</span> 4 players have outstanding registration fees. Automated reminders sent.
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
              Pricing for Sports Organizations
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Choose the plan that fits your organization size. All plans include roster management and scheduling.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-green-500' : 'bg-gray-600'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-white' : 'text-gray-500'}`}
              >
                Annual
                <span className="text-green-400 text-sm font-medium ml-1">(Save 10-20%)</span>
              </button>
            </div>

            {/* Beta Discount Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on Growth & Pro Plans!
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
                    plan.popular ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-gray-700/50 hover:border-gray-600'
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
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
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
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
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
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/25'
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
              <strong className="text-white">Add-ons:</strong> Multi-Team $10/mo • Additional Users $5/seat • Website Widgets Included
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
              Up and running in under an hour. AI helps finish the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Setup', desc: 'Tell us about your organization.' },
              { step: '2', title: 'Configure System', desc: 'Set up roster, schedule, and payments.' },
              { step: '3', title: 'Invite Team', desc: 'Add coaches, players, and parents.' },
              { step: '4', title: 'AI Optimizes', desc: 'AI helps finish configuration.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-green-400">
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
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="w-12 h-12 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Run Your Sports Organization?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Set up your roster, schedule, and portals in one afternoon. AI helps you finish everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all inline-flex items-center justify-center gap-2"
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
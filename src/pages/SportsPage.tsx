import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, Users, Calendar, Check, ArrowRight, CreditCard, FileCheck, 
  Star, Activity, Globe, Shield, Sparkles, Flame, Zap, Clock,
  Dumbbell, Target, Award, Medal
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

// Beta discount eligible tiers for Sports - Growth & Pro (Small Business pricing)
const betaDiscountTiers = ['Growth', 'Pro'];

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
      'Branded mobile app coming soon',
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

export default function SportsPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const handlePlanSelect = (planName: string, priceId: string) => {
    localStorage.setItem('operon_selected_plan', planName);
    localStorage.setItem('operon_selected_price_id', priceId);
    localStorage.setItem('operon_funnel_type', 'sports');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=sports`;
  };

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              Sports Organization CRM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Run Your Entire Sports<br />Organization
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Teams, schedules, registrations, payments, waivers, and communication — all in one platform. Built for leagues, clubs, and sports organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
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
            <p className="text-green-200 mt-4 text-sm">No credit card required • Set up in minutes</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for Sports Organizations
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From youth leagues to training academies, Operon helps you manage everything.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-green-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
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
              Everything Your Organization Needs
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              One system for rosters, schedules, payments, waivers, portals, and communication.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                <p className="text-slate-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Highlight */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Parent Portal</h3>
              <p className="text-slate-600 mb-6">
                Give parents their own access to view schedules, RSVP for events, sign waivers, and make payments.
              </p>
              <ul className="space-y-3">
                {[
                  'View upcoming schedule & RSVP',
                  'Sign waivers & forms digitally',
                  'Make payments & view history',
                  'Message coaching staff',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Player Portal</h3>
              <p className="text-slate-600 mb-6">
                Players can track their stats, achievements, attendance, and upcoming events.
              </p>
              <ul className="space-y-3">
                {[
                  'View personal stats & achievements',
                  'Track attendance history',
                  'See upcoming events',
                  'Access team communications',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Sports Pricing
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
              Start small and scale as your organization grows.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-green-600' : 'bg-slate-300'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}
              >
                Annual
                <span className="text-green-600 text-sm font-medium ml-1">(Save 10%)</span>
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
                    plan.popular ? 'ring-2 ring-green-600 shadow-xl' : 'shadow-lg hover:shadow-xl'
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
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                          ? 'bg-green-600 text-white hover:bg-green-700'
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
              <strong>Add-ons:</strong> Multi-Team $10/mo • Additional Users $5/seat • Website Widgets Included
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
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
          <Trophy className="w-12 h-12 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Run Your Sports Organization?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Set up your roster, schedule, and portals in one afternoon. AI helps you finish everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all inline-flex items-center justify-center gap-2"
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
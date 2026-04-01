import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, CheckCircle, ArrowRight, MessageSquare, TrendingUp, 
  Shield, Bell, BarChart3, Globe, Sparkles, AlertCircle, ThumbsUp
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const features = [
  { icon: Star, title: 'Review Monitoring', desc: 'Track reviews from Google, Yelp, Facebook, and 50+ platforms in one dashboard.' },
  { icon: MessageSquare, title: 'Review Response', desc: 'Respond to reviews quickly with AI-assisted templates and workflows.' },
  { icon: TrendingUp, title: 'Sentiment Analysis', desc: 'AI-powered sentiment tracking to understand customer perception.' },
  { icon: Bell, title: 'Real-Time Alerts', desc: 'Get notified instantly when new reviews are posted.' },
  { icon: BarChart3, title: 'Performance Reports', desc: 'Detailed analytics on ratings, response times, and trends.' },
  { icon: Globe, title: 'Listing Management', desc: 'Keep business information accurate across all platforms.' },
  { icon: Shield, title: 'Competitor Tracking', desc: 'Monitor competitor reviews and ratings in your area.' },
  { icon: ThumbsUp, title: 'Review Generation', desc: 'Ethically request reviews from satisfied customers.' },
];

const plans = [
  {
    name: 'Starter',
    price: 99,
    desc: 'Single business monitoring',
    features: [
      'Review monitoring (5 platforms)',
      'Google Business sync',
      'Monthly reports',
      'Email alerts',
      'Basic analytics',
    ],
  },
  {
    name: 'Professional',
    price: 199,
    desc: 'Multi-location businesses',
    popular: true,
    features: [
      'Everything in Starter',
      'Unlimited platforms',
      'Multiple locations (up to 5)',
      'Competitor analysis',
      'Response templates',
      'Sentiment analysis',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 399,
    desc: 'Up to 2 businesses',
    note: 'No white labeling',
    features: [
      'Everything in Professional',
      '2 businesses included',
      'Dedicated account manager',
      'Priority support',
      'Custom reporting',
      'API access',
    ],
  },
];

const ethicsPoints = [
  'We never post fake reviews',
  'No review gating or manipulation',
  'Transparent, honest reputation building',
  'Compliant with all platform guidelines',
  'Real customers, real feedback',
];

export default function ReputationManagementPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-950 via-yellow-950/30 to-amber-950/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Reputation Management
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Honest, Ethical<br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Reputation Management
            </span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10">
            Monitor reviews, manage your online presence, and build trust with customers — without fake reviews or manipulation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${APP_URL}/auth/signup?category=reputation`} className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/pricing" className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Ethics Banner */}
      <section className="py-8 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border-y border-yellow-500/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {ethicsPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Reputation Management
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to monitor, manage, and improve your online reputation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 text-lg">
              Build your reputation the right way in 4 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Connect', desc: 'Link your business profiles from Google, Yelp, Facebook, and more.' },
              { step: '02', title: 'Monitor', desc: 'Track all reviews in one dashboard with real-time alerts.' },
              { step: '03', title: 'Respond', desc: 'Reply to reviews quickly with AI-assisted templates.' },
              { step: '04', title: 'Improve', desc: 'Generate more authentic reviews from happy customers.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/20">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-slate-400 text-lg">
              Starting at these prices. Onboarding costs may vary based on report volume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-slate-900/50 border rounded-2xl p-6 ${plan.popular ? 'border-yellow-500 ring-2 ring-yellow-500/20' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="text-xs font-bold text-yellow-400 mb-2">MOST POPULAR</div>
                )}
                <h3 className="font-bold text-white text-lg mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-2">{plan.desc}</p>
                {plan.note && (
                  <p className="text-yellow-400 text-xs mb-4">* {plan.note}</p>
                )}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">Starting at ${plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${APP_URL}/auth/signup?category=reputation&plan=${plan.name.toLowerCase()}`}
                  className={`block w-full text-center py-3 rounded-lg font-semibold ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white hover:shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } transition-all`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-6">
            * Prices shown are starting prices. Onboarding costs may increase based on report volume and business complexity.
          </p>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI Works For You
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Our AI assistant monitors your reputation 24/7, alerts you to issues, and helps you respond professionally — acting as your personal reputation manager.
              </p>
              <ul className="space-y-3">
                {[
                  'Instant alerts for negative reviews',
                  'AI-suggested response templates',
                  'Daily reputation summaries',
                  'Competitor monitoring alerts',
                  'Sentiment trend reports',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-2xl border border-white/10 p-6">
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 text-sm font-medium">Alert</span>
                  </div>
                  <p className="text-white text-sm">New 2-star review on Google from John D. I've drafted a professional response for your approval.</p>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg p-4 max-w-xs">
                    <p className="text-white text-sm">Approve and send response</p>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-white text-sm">Response sent! Your average rating is now 4.6 stars. Great job addressing customer concerns!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border-y border-yellow-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build Your Reputation the Right Way
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Honest reputation management that builds real trust with customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`${APP_URL}/auth/signup?category=reputation`} className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all">
              Get Started
            </a>
            <Link to="/contact" className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
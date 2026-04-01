import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Users, BarChart3, Calendar, Zap, Globe, 
  Share2, Megaphone, Target, Smartphone, MapPin, Sparkles, Flame,
  Camera, TrendingUp, MessageSquare
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

// Beta discount eligible tiers for Social Media - Growth ONLY
const betaDiscountTiers = ['Growth'];

const plans = [
  {
    name: 'Starter',
    description: 'For individual marketers',
    monthlyPrice: 49,
    annualPrice: 44,
    priceId: 'price_smm_starter',
    features: [
      '3 social profiles',
      '2,500 contacts',
      'Basic scheduling',
      'Content calendar',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'For growing marketing teams',
    monthlyPrice: 99,
    annualPrice: 89,
    priceId: 'price_smm_growth',
    betaDiscount: true,
    features: [
      '10 social profiles',
      '15,000 contacts',
      'Advanced scheduling',
      'AI content suggestions',
      'Team collaboration (5 users)',
      'Social listening',
      'Lead capture funnels',
      'Email & SMS support',
    ],
    cta: 'Upgrade Now',
  },
  {
    name: 'Pro',
    description: 'For established agencies',
    monthlyPrice: 149,
    annualPrice: 134,
    priceId: 'price_smm_pro',
    popular: true,
    features: [
      '25 social profiles',
      '50,000 contacts',
      'Everything in Growth',
      'FULL AI assistant included',
      'AI content generation',
      'Lead capture funnels',
      'Advanced analytics',
      'Team collaboration (10 users)',
      'Mobile app coming soon',
      'Priority support',
    ],
    cta: 'Get Full Access',
  },
  {
    name: 'White Label',
    description: 'Build your own SMM platform',
    monthlyPrice: 249,
    annualPrice: 224,
    priceId: 'price_smm_whitelabel',
    features: [
      'Unlimited profiles',
      '100,000 contacts',
      'Everything in Pro',
      'FULL AI assistant included',
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
  { icon: Megaphone, name: 'Social Media Agencies', desc: 'Manage multiple client accounts' },
  { icon: Camera, name: 'Content Creators', desc: 'Schedule and track content performance' },
  { icon: TrendingUp, name: 'Digital Marketers', desc: 'Full marketing stack in one platform' },
  { icon: Users, name: 'Marketing Teams', desc: 'Collaborate on campaigns and content' },
  { icon: Target, name: 'Lead Generation', desc: 'Capture and nurture leads from social' },
  { icon: Globe, name: 'Multi-Location Brands', desc: 'Manage social for multiple locations' },
  { icon: MessageSquare, name: 'Community Managers', desc: 'Engage and grow communities' },
  { icon: BarChart3, name: 'Analytics Firms', desc: 'Track and report on social metrics' },
];

const features = [
  { icon: Share2, title: 'Multi-Platform Posting', desc: 'Schedule and publish to Facebook, Instagram, Twitter, LinkedIn, and more.' },
  { icon: Calendar, title: 'Content Calendar', desc: 'Visual calendar to plan, organize, and schedule all your content.' },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Track engagement, reach, clicks, and conversions across all platforms.' },
  { icon: Users, title: 'Client Management', desc: 'Separate workspaces with permissions for each client.' },
  { icon: Zap, title: 'AI Content Assistant', desc: 'AI-powered suggestions for captions, hashtags, and content ideas.' },
  { icon: MapPin, title: 'Geofencing', desc: 'Target audiences by location for localized marketing campaigns.' },
  { icon: Smartphone, title: 'Mobile App', desc: 'Manage your social media on the go (coming soon).' },
  { icon: Sparkles, title: 'AI Content Generation', desc: 'Generate complete posts with AI-powered writing.' },
];

export default function SocialMediaMarketingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const handlePlanSelect = (planName: string, priceId: string) => {
    localStorage.setItem('operon_selected_plan', planName);
    localStorage.setItem('operon_selected_price_id', priceId);
    localStorage.setItem('operon_funnel_type', 'social_media_marketing');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=social_media_marketing`;
  };

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Megaphone className="w-4 h-4" />
              Social Media Marketing CRM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The CRM Built for<br />Social Media Marketers
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Manage clients, schedule content, track performance, and grow your agency with AI-powered tools. All in one unified platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="px-8 py-4 bg-white text-purple-700 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
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
            <p className="text-purple-200 mt-4 text-sm">No credit card required • Set up in minutes</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built for Social Media Professionals
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Whether you're a solo marketer or running an agency, Operon has the tools you need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-purple-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
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
              Everything You Need to Succeed
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Powerful tools for social media marketing success with AI-powered automation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                <p className="text-slate-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Mobile Feature Highlight */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI-Powered Content Creation</h3>
              <p className="text-slate-600 mb-6">
                Let AI help you create engaging content. Generate captions, hashtags, and full posts with AI assistance.
              </p>
              <ul className="space-y-3">
                {[
                  'AI caption and hashtag suggestions',
                  'Content ideas based on trends',
                  'Auto-scheduling optimization',
                  'Performance prediction',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobile App Coming Soon</h3>
              <p className="text-slate-600 mb-6">
                Manage your social media on the go. Full-featured mobile app for iOS and Android.
              </p>
              <ul className="space-y-3">
                {[
                  'Schedule posts from anywhere',
                  'Real-time notifications',
                  'Quick engagement tools',
                  'Team collaboration on mobile',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
              Choose the plan that fits your marketing needs. Scale as you grow.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-purple-600' : 'bg-slate-300'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}
              >
                Annual
                <span className="text-purple-600 text-sm font-medium ml-1">(Save 10%)</span>
              </button>
            </div>

            {/* Beta Discount Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on Growth tier!
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => {
              const hasBetaDiscount = plan.betaDiscount;
              const discountedPrice = hasBetaDiscount
                ? (billingPeriod === 'monthly' ? plan.monthlyPrice * 0.5 : plan.annualPrice * 0.5).toFixed(2)
                : null;

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-6 ${
                    plan.popular ? 'ring-2 ring-purple-600 shadow-xl' : 'shadow-lg hover:shadow-xl'
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
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
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
              <strong>Add-ons:</strong> Additional Users $5/seat • White Label includes 20 licenses • Mobile App Coming Soon
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
              Get started in minutes and start managing your social media like a pro.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Connect Profiles', desc: 'Link your social media accounts.' },
              { step: '2', title: 'Import Clients', desc: 'Add clients and team members.' },
              { step: '3', title: 'Create Content', desc: 'Schedule posts with AI assistance.' },
              { step: '4', title: 'Track & Report', desc: 'Monitor performance and ROI.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
          <Megaphone className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Social Media Agency?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Start your free trial today. No credit card required. Join hundreds of marketers using Operon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center gap-2"
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
          <p className="text-slate-400 mt-4 text-sm">
            Questions? Call us at (888) 555-0123
          </p>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
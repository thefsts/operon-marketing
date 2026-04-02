import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, ArrowRight, Users, BarChart3, Calendar, Zap, Globe,
  Share2, Megaphone, Target, Smartphone, MapPin, Sparkles, Flame,
  Camera, TrendingUp, MessageSquare
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

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

const aiFeatures = [
  { title: 'Content Generation', desc: 'AI generates complete social media posts including captions, hashtags, and image suggestions.' },
  { title: 'Best Time to Post', desc: 'AI analyzes your audience engagement patterns and suggests optimal posting times.' },
  { title: 'Hashtag Research', desc: 'AI researches and suggests the most effective hashtags for your content and audience.' },
  { title: 'Engagement Automation', desc: 'AI helps respond to comments and messages with smart, on-brand suggestions.' },
];

export default function SocialMediaMarketingPage() {
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
    localStorage.setItem('operon_funnel_type', 'social_media_marketing');
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=social_media_marketing`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <GlobalHeader transparent={!isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Beta Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              Limited Beta Sale - 50% OFF Growth Plan
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                Social Media Marketing CRM
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-8">
              Manage clients, schedule content, track performance, and grow your agency 
              with AI-powered tools. All in one unified platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/start"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center gap-2"
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
                <Check className="w-5 h-5 text-purple-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-purple-400" />
                AI content assistant
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-purple-400" />
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
              Built for Social Media Professionals
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Whether you're a solo marketer or running an agency, Operon has the tools you need.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/50 transition-all text-center group">
                <industry.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm mb-1">{industry.name}</h3>
                <p className="text-slate-400 text-xs">{industry.desc}</p>
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
              Everything You Need to Succeed
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Powerful tools for social media marketing success with AI-powered automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-purple-400" />
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
                Your AI Marketing Assistant
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Let Operon's AI help create content, schedule posts at optimal times, 
                and engage with your audience automatically.
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Operon AI</div>
                  <div className="text-xs text-slate-400">Social Intelligence</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4 text-sm">
                  <span className="text-purple-400">Content:</span> Generated 5 post variations for your product launch campaign. Click to review.
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-sm">
                  <span className="text-cyan-400">Optimal Time:</span> Best time to post for your audience is Wednesday 2-4pm. Schedule now?
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-sm">
                  <span className="text-green-400">Hashtags:</span> Suggested: #DigitalMarketing #SocialMediaTips #ContentCreator (85% relevance)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing for Social Media Professionals
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Choose the plan that fits your needs. All plans include scheduling and analytics.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-purple-500' : 'bg-slate-700'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-white' : 'text-slate-500'}`}
              >
                Annual
                <span className="text-purple-400 text-sm font-medium ml-1">(Save 10-20%)</span>
              </button>
            </div>

            {/* Beta Discount Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on Growth Plan!
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => {
              const hasBetaDiscount = plan.betaDiscount;
              const discountedPrice = hasBetaDiscount
                ? (plan.monthlyPrice * 0.5).toFixed(2)
                : null;

              return (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur rounded-2xl p-6 border ${
                    plan.popular ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-slate-700/50 hover:border-slate-600'
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
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mt-1 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    {hasBetaDiscount ? (
                      <div>
                        <div className="text-slate-500 line-through text-lg">
                          ${plan.monthlyPrice}/month
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-orange-400">${discountedPrice}</span>
                          <span className="text-slate-400">/mo</span>
                        </div>
                        <div className="text-orange-400 text-xs font-medium mt-1">Beta Price</div>
                        <div className="text-slate-500 text-xs mt-1">Same price for monthly & annual billing</div>
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
                        <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
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
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
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
              <strong className="text-white">Add-ons:</strong> Additional Users $5/seat • White Label includes 20 licenses • Mobile App Coming Soon
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
            <p className="text-slate-400 text-lg">
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-purple-400">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Megaphone className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Social Media Agency?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Start your free trial today. No credit card required. Join hundreds of marketers using Operon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center gap-2"
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
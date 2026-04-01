import { useState, useEffect } from 'react';
import { Check, CheckCircle2, ArrowRight, Megaphone, BarChart3, Users, Share2, Calendar, Zap, Menu, X, Globe } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(type: string) {
  localStorage.setItem('operon_funnel_type', type);
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'plan');
}

function clearFunnel() {
  ['operon_funnel_type','operon_last_url','operon_last_step','operon_selected_plan',
   'operon_business_type','operon_needs','operon_size','operon_current_system'].forEach(k => localStorage.removeItem(k));
}

export default function SocialMediaMarketingPage() {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGetStarted = (planName: string, price?: number) => {
    clearFunnel();
    saveFunnel('social_media_marketing');
    if (price) {
      localStorage.setItem('operon_selected_plan', planName);
      localStorage.setItem('operon_selected_price', price.toString());
    }
    window.location.href = `${APP_URL}/auth/signup?ref=social_media&utm_source=specialty_page`;
  };

  const plans = [
    {
      name: 'Starter',
      description: 'For individual marketers',
      monthlyPrice: 49,
      annualPrice: 44,
      features: [
        '3 social profiles',
        '2,500 contacts',
        'Basic scheduling',
        'Content calendar',
        'Basic analytics',
        'Email support',
      ]
    },
    {
      name: 'Growth',
      description: 'For growing marketing teams',
      monthlyPrice: 99,
      annualPrice: 89,
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
      popular: true
    },
    {
      name: 'Pro',
      description: 'For established agencies',
      monthlyPrice: 149,
      annualPrice: 134,
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
      ]
    },
    {
      name: 'White Label',
      description: 'Build your own SMM platform',
      monthlyPrice: 249,
      annualPrice: 224,
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
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold text-slate-900">OperonCRM</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-600 hover:text-blue-600 transition">Home</a>
              <a href="/pricing" className="text-slate-600 hover:text-blue-600 transition">Pricing</a>
              <a href="/#features" className="text-slate-600 hover:text-blue-600 transition">Features</a>
              <a
                href={APP_URL}
                className="text-slate-600 hover:text-blue-600 transition"
              >
                Login
              </a>
              <button
                onClick={() => handleGetStarted('starter')}
                className="bg-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-purple-700 transition"
              >
                Start Free Trial
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <a href="/" className="block text-slate-600 hover:text-blue-600 py-2">Home</a>
              <a href="/pricing" className="block text-slate-600 hover:text-blue-600 py-2">Pricing</a>
              <a href="/#features" className="block text-slate-600 hover:text-blue-600 py-2">Features</a>
              <a href={APP_URL} className="block text-slate-600 hover:text-blue-600 py-2">Login</a>
              <button
                onClick={() => handleGetStarted('starter')}
                className="w-full bg-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-purple-700 transition"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Megaphone className="w-4 h-4 mr-2" />
            Built for Social Media Marketers & Agencies
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Manage Social Media &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              {' '}Marketing in One Place
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            The complete CRM and marketing system for social media professionals. Manage clients, 
            schedule content, track performance, and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleGetStarted('starter')}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a href="#pricing" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Everything Included Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-slate-600">Powerful tools for social media marketing success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Share2 className="w-8 h-8 text-purple-600" />,
                title: 'Social Media Management',
                description: 'Schedule and publish content across all major platforms. Facebook, Instagram, Twitter, LinkedIn, and more.',
              },
              {
                icon: <Calendar className="w-8 h-8 text-purple-600" />,
                title: 'Content Calendar',
                description: 'Plan and organize your content with visual calendar. Drag, drop, and schedule posts with ease.',
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
                title: 'Analytics & Reporting',
                description: 'Track performance across all platforms. Engagement, reach, clicks, and conversions in one dashboard.',
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: 'Client Management',
                description: 'Manage all your clients from one dashboard. Separate workspaces, permissions, and reporting.',
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: 'AI Content Suggestions',
                description: 'Get AI-powered suggestions for captions, hashtags, and content ideas. Save time and improve engagement.',
              },
              {
                icon: <Globe className="w-8 h-8 text-purple-600" />,
                title: 'Social Listening',
                description: 'Monitor mentions, hashtags, and competitors. Stay ahead of trends and engage with your audience.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition">
                {feature.icon}
                <h3 className="text-xl font-semibold text-slate-900 mt-4 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600 mb-8">Choose the plan that fits your marketing needs</p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
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
                <span className="text-purple-600 text-sm font-medium ml-1">(Save 10-20%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 ${
                  plan.popular ? 'ring-2 ring-purple-600 shadow-xl scale-105' : 'shadow-lg hover:shadow-xl'
                } transition`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 mt-2 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-slate-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleGetStarted(plan.name.toLowerCase(), billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice)}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Need Enterprise Features?</h3>
            <p className="text-slate-300 mb-4">
              Multi-account management, custom integrations, or dedicated support? Let's talk.
            </p>
            <a
              href="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Marketers Choose Operon</h2>
            <p className="text-xl text-slate-600">The all-in-one platform for social media success</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Manage All Clients in One Place',
                description: 'No more switching between tools. Handle all your clients, campaigns, and reporting from a single dashboard.',
                icon: <Users className="w-12 h-12 text-purple-600" />
              },
              {
                title: 'Save Time with Automation',
                description: 'Schedule posts in advance, automate reporting, and let AI help with content creation. Focus on strategy, not busywork.',
                icon: <Zap className="w-12 h-12 text-purple-600" />
              },
              {
                title: 'Prove ROI with Analytics',
                description: 'Track every metric that matters. Show clients exactly how your work is driving engagement, leads, and revenue.',
                icon: <BarChart3 className="w-12 h-12 text-purple-600" />
              },
              {
                title: 'White Label & Scale',
                description: 'Build your own brand with white-label options. Perfect for agencies ready to scale with their own platform.',
                icon: <Share2 className="w-12 h-12 text-purple-600" />
              },
            ].map((reason, index) => (
              <div key={index} className="flex gap-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <div className="flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-lg text-slate-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Grow Your Social Media?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Start your free trial today. No credit card required. Cancel anytime.
          </p>
          <button
            onClick={() => handleGetStarted('starter')}
            className="bg-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition inline-flex items-center"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-6 h-6" />
          </button>
          <p className="text-slate-500 mt-4">
            Join 300+ marketers already growing with OperonCRM
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="/#features" className="hover:text-white transition">Features</a></li>
                <li><a href="/#integrations" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:text-white transition">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p>&copy; 2024 OperonCRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
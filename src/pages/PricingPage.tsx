import React, { useState } from 'react';
import { Check, ArrowRight, Clock, HeadphonesIcon, PhoneCall, Zap, Users, Building2, ShoppingCart, Stethoscope, Home, Scale, Share2 } from 'lucide-react';

// Pricing categories and plans
const pricingCategories = [
  {
    id: 'small_business',
    name: 'Small Business CRM',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
    description: 'CRM & Lead management for service businesses',
    plans: [
      {
        name: 'Starter',
        description: 'Perfect for solo service providers',
        monthlyPrice: 29,
        annualPrice: 29,
        priceId: 'price_1THAT76YOBWSVWEpL7ryaAnO',
        features: [
          'CRM & Lead management',
          'Job tracking & scheduling',
          'Basic invoicing',
          'Email support',
          'Mobile app',
          '500 contacts',
        ],
        cta: 'Start Now',
      },
      {
        name: 'Growth',
        description: 'For growing service businesses',
        monthlyPrice: 49,
        annualPrice: 49,
        priceId: 'price_1THAT86YOBWSVWEpcdEBsggY',
        popular: true,
        features: [
          'Everything in Starter',
          'Marketing automation',
          'AI Assistant (basic)',
          'SMS notifications',
          '2,000 contacts',
          'Priority support',
        ],
        cta: 'Upgrade Your Plan',
      },
      {
        name: 'Pro',
        description: 'For established businesses',
        monthlyPrice: 79,
        annualPrice: 79,
        priceId: 'price_1THAT86YOBWSVWEpGAAAwjnc',
        features: [
          'Everything in Growth',
          'Advanced automation',
          'E-signatures included',
          'API access',
          '5,000 contacts',
          '10 users',
        ],
        cta: 'Start Free Trial',
      },
      {
        name: 'Elite',
        description: 'Best value for scaling',
        monthlyPrice: 99,
        annualPrice: 99,
        priceId: 'price_1THAT96YOBWSVWEpydzMsxUv',
        highlighted: true,
        features: [
          'Everything in Pro',
          'Unlimited contacts',
          'Advanced reporting',
          'White-label branding',
          '15 users',
          'Priority support',
        ],
        cta: 'Get Started Now',
      },
      {
        name: 'White Label',
        description: 'For business owners and resellers',
        monthlyPrice: 199,
        annualPrice: 199,
        priceId: 'price_1THAT96YOBWSVWEp0WlM1I2A',
        licenseLimit: 20,
        features: [
          'Everything in Elite',
          'Brand the system as your own',
          'Up to 20 licenses included',
          'Reseller dashboard',
          'Custom branding',
          'Priority dedicated support',
        ],
        cta: 'Start Scaling Your Business',
      },
    ],
  },
  {
    id: 'restaurant_retail',
    name: 'Restaurant / Retail CRM',
    icon: ShoppingCart,
    color: 'from-orange-500 to-red-500',
    description: 'POS system included for restaurants & retail',
    plans: [
      {
        name: 'Starter',
        description: 'Perfect for new or small locations',
        monthlyPrice: 69,
        annualPrice: 69,
        priceId: 'price_1THATA6YOBWSVWEpHb9iqA2h',
        features: [
          'POS system included',
          'Order management',
          'Basic reporting',
          'Staff tracking',
          'Inventory (basic)',
          '1,000 contacts',
        ],
        cta: 'Start Your System Today',
      },
      {
        name: 'Growth',
        description: 'For growing businesses',
        monthlyPrice: 99,
        annualPrice: 99,
        priceId: 'price_1THATA6YOBWSVWEpfhY3WFkc',
        popular: true,
        features: [
          'Everything in Starter',
          'Inventory management',
          'Customer tracking & loyalty',
          'Advanced reporting',
          'Online ordering',
          '3,000 contacts',
        ],
        cta: 'Upgrade Your System',
      },
      {
        name: 'Pro',
        description: 'For serious operations',
        monthlyPrice: 150,
        annualPrice: 150,
        priceId: 'price_1THATB6YOBWSVWEplxXy0X8k',
        highlighted: true,
        features: [
          'Everything in Growth',
          'Delivery integrations (DoorDash, Uber Eats)',
          'Advanced automation',
          'Multi-location support (2 locations)',
          'AI-powered insights',
          '5,000 contacts',
        ],
        cta: 'Get Full Control',
      },
      {
        name: 'White Label',
        description: 'For business owners and resellers',
        monthlyPrice: 199,
        annualPrice: 199,
        priceId: 'price_1THATC6YOBWSVWEpPqGTcmoO',
        licenseLimit: 20,
        features: [
          'Everything in Pro',
          'Brand the system as your own',
          'Up to 20 licenses included',
          'Multi-location (3 locations)',
          'Reseller dashboard',
          'Custom branding',
        ],
        cta: 'Start Scaling Your Business',
      },
    ],
  },
  {
    id: 'professional',
    name: 'Professional CRM',
    icon: Home,
    color: 'from-emerald-500 to-green-500',
    description: 'For Real Estate, Legal, Medical & Licensed Industries',
    plans: [
      {
        name: 'Self-Employed',
        description: 'For solo licensed professionals',
        monthlyPrice: 49,
        annualPrice: 49,
        priceId: 'price_1THATC6YOBWSVWEpj3ixLjzZ',
        features: [
          'CRM & client management',
          'Document workflows',
          'Basic compliance tools',
          'E-signatures included',
          'Email support',
          '500 contacts',
        ],
        cta: 'Start Now',
      },
      {
        name: 'Small Business',
        description: 'For small practices',
        monthlyPrice: 69,
        annualPrice: 69,
        priceId: 'price_1THATD6YOBWSVWEpWC5B8qwZ',
        features: [
          'Everything in Self-Employed',
          'Client pipelines',
          'Automation workflows',
          '1,500 contacts',
          '3 users',
          'Priority support',
        ],
        cta: 'Upgrade Your Plan',
      },
      {
        name: 'Growth',
        description: 'For growing professional practices',
        monthlyPrice: 99,
        annualPrice: 99,
        priceId: 'price_1THATE6YOBWSVWEpgBbefTAv',
        popular: true,
        highlighted: true,
        features: [
          'Everything in Small Business',
          'Advanced document automation',
          'Compliance suite',
          '3,000 contacts',
          '7 users',
          'Advanced reporting',
        ],
        cta: 'Get Started Now',
      },
      {
        name: 'Business',
        description: 'For established professional firms',
        monthlyPrice: 149,
        annualPrice: 149,
        priceId: 'price_1THATE6YOBWSVWEpjA8ysqTa',
        features: [
          'Everything in Growth',
          'Multi-business support',
          'Advanced workflows',
          '7,000 contacts',
          '15 users',
          'Premium support',
        ],
        cta: 'Start Free Trial',
      },
      {
        name: 'White Label',
        description: 'For professional firms and resellers',
        monthlyPrice: 299,
        annualPrice: 299,
        priceId: 'price_1THATE6YOBWSVWEpRlw3R3pK',
        licenseLimit: 20,
        features: [
          'Everything in Business',
          'Brand the system as your own',
          'Up to 20 licenses included',
          'Industry-specific compliance',
          'Reseller dashboard',
          'Custom branding',
        ],
        cta: 'Scale Your Practice',
      },
    ],
  },
  {
    id: 'social_media',
    name: 'Social Media Marketing',
    icon: Share2,
    color: 'from-purple-500 to-pink-500',
    description: 'Multi-platform scheduling & analytics',
    plans: [
      {
        name: 'Starter',
        description: 'For small social media teams',
        monthlyPrice: 29,
        annualPrice: 29,
        priceId: 'price_1THATF6YOBWSVWEprUeU4Ctp',
        features: [
          'Social scheduling',
          'Basic analytics',
          '3 social profiles',
          'Content calendar',
          'Email support',
        ],
        cta: 'Start Now',
      },
      {
        name: 'Growth',
        description: 'For growing social media presence',
        monthlyPrice: 49,
        annualPrice: 49,
        priceId: 'price_1THATF6YOBWSVWEpApInFYks',
        popular: true,
        highlighted: true,
        features: [
          'Everything in Starter',
          '10 social profiles',
          'Advanced analytics',
          'AI content suggestions',
          'Team collaboration',
        ],
        cta: 'Get Started Now',
      },
      {
        name: 'Pro',
        description: 'For agencies and large teams',
        monthlyPrice: 99,
        annualPrice: 99,
        priceId: 'price_1THATG6YOBWSVWEplMCvO9Jj',
        features: [
          'Everything in Growth',
          'Unlimited social profiles',
          'Custom branding',
          'White-label reports',
          'Priority support',
        ],
        cta: 'Start Free Trial',
      },
      {
        name: 'White Label',
        description: 'For agencies and resellers',
        monthlyPrice: 199,
        annualPrice: 199,
        priceId: 'price_1THATG6YOBWSVWEpeAk1Wwvk',
        licenseLimit: 20,
        features: [
          'Everything in Pro',
          'Brand the system as your own',
          'Up to 20 licenses included',
          'Agency dashboard',
          'Client management',
        ],
        cta: 'Scale Your Agency',
      },
    ],
  },
];

// Add-ons
const addOns = [
  {
    name: 'Multi-Business',
    price: 10,
    description: 'Manage multiple businesses from one account ($10/month per additional business)',
  },
  {
    name: 'Advanced Automation',
    price: 29,
    description: 'Advanced workflow automation and AI features',
  },
];

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState(pricingCategories[0].id);

  const handleSubscribe = (plan: any) => {
    if (plan.name.includes('White Label') || plan.name.includes('Enterprise')) {
      window.location.href = '/contact';
      return;
    }
    
    const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';
    window.location.href = `${APP_URL}/register?plan=${plan.priceId}&billing=${billingCycle}`;
  };

  const selectedCategoryData = pricingCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-10 w-auto" />
              <span className="text-xl font-bold text-slate-900">Operon</span>
            </a>
            <div className="flex items-center gap-4">
              <a href={`${import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com'}/login`} className="text-slate-600 hover:text-slate-900">
                Login
              </a>
              <a href="/start" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple pricing. Powerful platform.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Replace multiple tools with one system. Built for your industry.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-1.5 shadow-sm border border-slate-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                Billed Annually
              </span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        {selectedCategoryData && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <p className="text-slate-600 text-lg">{selectedCategoryData.description}</p>
            </div>
            
            <div className={`grid gap-6 ${
              selectedCategoryData.plans.length === 4 ? 'md:grid-cols-4' : 
              selectedCategoryData.plans.length === 5 ? 'lg:grid-cols-5' : 'md:grid-cols-3'
            }`}>
              {selectedCategoryData.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-6 transition-all ${
                    plan.highlighted
                      ? `bg-gradient-to-b ${selectedCategoryData.color} text-white scale-105 shadow-2xl`
                      : plan.popular
                      ? 'bg-white border-2 border-cyan-500 shadow-xl'
                      : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-slate-900 rounded-full text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlighted ? 'text-white/80' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className={`text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      ${billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice}
                    </div>
                    <div className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-slate-500'}`}>
                      per month, {billingCycle === 'annual' ? 'billed annually' : 'billed monthly'}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-white' : 'text-cyan-500'
                        }`} />
                        <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-slate-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.licenseLimit && (
                    <div className={`mb-4 p-3 rounded-lg ${
                      plan.highlighted ? 'bg-white/10' : 'bg-slate-50'
                    }`}>
                      <div className="text-xs font-semibold">
                        ⚠️ White Label: Up to {plan.licenseLimit} licenses included
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => handleSubscribe(plan)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-white text-slate-900 hover:bg-slate-100'
                        : `bg-gradient-to-r ${selectedCategoryData.color} text-white hover:shadow-lg`
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Multi-Location & Enterprise */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-400 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">Multi-Location</h3>
            </div>
            <p className="text-slate-600 mb-4">
              For businesses with multiple locations. Centralized control, multi-location reporting, team management across locations.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700">
              Contact Us <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-400 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">Enterprise</h3>
            </div>
            <p className="text-slate-600 mb-4">
              For large organizations, high-volume businesses, and custom needs. Dedicated support, custom integrations, SLA guarantees.
            </p>
            <div className="flex items-center gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700">
                Contact Us <ArrowRight className="w-5 h-5" />
              </a>
              <span className="text-sm text-slate-500">or</span>
              <a href="tel:+18005551234" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700">
                <PhoneCall className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Add More Power When You Need It</h2>
          <p className="text-slate-600 mb-6">
            Enhance your plan with these additional features. eSignature integrations are included at no extra cost.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addOn) => (
              <div key={addOn.name} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">
                    {addOn.name} - ${addOn.price}/month
                  </div>
                  <div className="text-sm text-slate-600">
                    {addOn.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust & Support */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5 text-cyan-600" />
              Set up in minutes
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <HeadphonesIcon className="w-5 h-5 text-cyan-600" />
              Priority support
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Check className="w-5 h-5 text-cyan-600" />
              No credit card required
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            Questions? <a href="/contact" className="text-cyan-600 font-semibold hover:underline">Contact our sales team</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          © 2025 Operon CRM. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
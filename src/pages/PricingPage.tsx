import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, PhoneCall, Zap, Users, Building2, ShoppingCart, Stethoscope, Home, Scale, Share2, Briefcase, Flame } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

// Beta discount configuration
const betaDiscounts: Record<string, { tiers: string[]; percentage: number }> = {
  'small_business': { tiers: ['Growth', 'Pro'], percentage: 50 },
  'professional': { tiers: ['Growth', 'Business'], percentage: 50 },
  'social_media': { tiers: ['Growth'], percentage: 50 },
};

// Pricing categories and plans - FINAL VERSION WITH BETA DISCOUNTS
const pricingCategories = [
  {
    id: 'small_business',
    name: 'Small Business CRM',
    title: 'Simple CRM for Service Businesses',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
    description: 'CRM & Lead management for service businesses',
    popularPlan: 'Pro',
    plans: [
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
        licenseLimit: 20,
        features: [
          'Everything in Elite',
          'Unlimited contacts',
          'Full white-label branding',
          'Email marketing (50,000/mo)',
          'Includes up to 20 licenses',
          'Additional users: $5/seat/month',
          'Custom domain & API access',
          'Branded mobile app coming soon',
          'Dedicated account manager',
        ],
        cta: 'Start Your Own Platform',
      },
    ],
  },
  {
    id: 'restaurant_retail',
    name: 'Restaurant / Retail CRM',
    title: 'Complete Business System with POS Built-In',
    icon: ShoppingCart,
    color: 'from-orange-500 to-red-500',
    description: 'POS system included for restaurants & retail',
    popularPlan: 'Pro',
    plans: [
      {
        name: 'Starter',
        description: 'Single location restaurant or shop',
        monthlyPrice: 69,
        annualPrice: 62,
        priceId: 'price_restaurant_starter',
        features: [
          'POS system included',
          '5,000 contacts',
          'Online ordering management',
          'Basic customer loyalty',
          'Review monitoring',
          'Email marketing (2,000/mo)',
          'Basic reporting',
          'Email support',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Growth',
        description: 'Growing single-location business',
        monthlyPrice: 99,
        annualPrice: 89,
        priceId: 'price_restaurant_growth',
        features: [
          'Everything in Starter',
          '15,000 contacts',
          'Full POS integration',
          'Online ordering & delivery',
          'Advanced loyalty program',
          'Review management & response',
          'Email marketing (10,000/mo)',
          'SMS included (1,000/mo)',
          'Priority support',
        ],
        cta: 'Upgrade Now',
      },
      {
        name: 'Pro',
        description: 'High-volume single location',
        monthlyPrice: 150,
        annualPrice: 135,
        priceId: 'price_restaurant_pro',
        popular: true,
        features: [
          'Everything in Growth',
          '50,000 contacts',
          'Multi-channel marketing',
          'Delivery integrations (DoorDash, Uber Eats)',
          'Advanced loyalty & rewards',
          'Reputation management suite',
          'Email marketing (25,000/mo)',
          'SMS included (2,500/mo)',
          'Dedicated support',
        ],
        cta: 'Run Your Business Smarter',
      },
      {
        name: 'White Label',
        description: 'Create your own branded system',
        monthlyPrice: 199,
        annualPrice: 179,
        priceId: 'price_restaurant_whitelabel',
        licenseLimit: 20,
        features: [
          'Everything in Pro',
          'Unlimited contacts',
          'Full white-label solution',
          'Email marketing (50,000/mo)',
          'SMS included (5,000/mo)',
          'Includes up to 20 licenses',
          'Additional users: $5/seat/month',
          'Custom domain & API access',
          'Branded mobile app coming soon',
          'Account manager',
        ],
        cta: 'Start Scaling',
      },
    ],
    customTier: {
      name: 'Multi-Location & Enterprise',
      description: 'Manage multiple locations from one dashboard with centralized control and local flexibility.',
      features: [
        'Custom integrations',
        'Dedicated support',
        'Enterprise-grade features',
        'Volume pricing available',
      ],
      cta: 'Contact Us',
      ctaAlt: 'Call Us for Enterprise Solutions',
    },
  },
  {
    id: 'professional',
    name: 'Professional CRM',
    title: 'For Licensed Industries',
    icon: Home,
    color: 'from-emerald-500 to-green-500',
    description: 'For Real Estate, Legal, Medical & Licensed Industries',
    popularPlan: 'Business',
    industries: ['Real Estate', 'Mortgage', 'Title', 'Legal', 'Medical'],
    plans: [
      {
        name: 'Self-Employed',
        description: 'For solo licensed professionals',
        monthlyPrice: 49,
        annualPrice: 44,
        priceId: 'price_professional_selfemployed',
        features: [
          'CRM & client management',
          'Document workflows',
          'Basic compliance tools',
          'E-signatures included',
          'Email support',
          '500 contacts',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Small Business',
        description: 'For small practices',
        monthlyPrice: 69,
        annualPrice: 62,
        priceId: 'price_professional_smallbusiness',
        features: [
          'Everything in Self-Employed',
          'Client pipelines',
          'Automation workflows',
          '1,500 contacts',
          '3 users',
          'Priority support',
        ],
        cta: 'Upgrade Now',
      },
      {
        name: 'Growth',
        description: 'For growing professional practices',
        monthlyPrice: 99,
        annualPrice: 89,
        priceId: 'price_professional_growth',
        betaDiscount: true,
        features: [
          'Everything in Small Business',
          'Advanced document automation',
          'Compliance suite',
          '3,000 contacts',
          '7 users',
          'Advanced reporting',
        ],
        cta: 'Grow Your Business',
      },
      {
        name: 'Business',
        description: 'For established professional firms',
        monthlyPrice: 149,
        annualPrice: 134,
        priceId: 'price_professional_business',
        popular: true,
        betaDiscount: true,
        features: [
          'Everything in Growth',
          'Multi-business support',
          'Advanced workflows',
          '7,000 contacts',
          '15 users',
          'Premium support',
        ],
        cta: 'Take Full Control',
      },
      {
        name: 'White Label',
        description: 'For professional firms and resellers',
        monthlyPrice: 299,
        annualPrice: 269,
        priceId: 'price_professional_whitelabel',
        licenseLimit: 20,
        features: [
          'Everything in Business',
          'Unlimited contacts',
          'Brand the system as your own',
          'Industry-specific compliance',
          'Includes up to 20 licenses',
          'Additional users: $5/seat/month',
          'Reseller dashboard',
          'Custom branding',
          'Branded mobile app coming soon',
          'Dedicated support',
        ],
        cta: 'Launch Your Platform',
      },
    ],
    customTiers: [
      {
        name: 'Multi-Location',
        description: 'Manage multiple practice locations.',
        cta: 'Contact Us',
      },
      {
        name: 'Enterprise',
        description: 'Enterprise-grade features for large organizations.',
        cta: 'Call Us for Enterprise Solutions',
      },
    ],
  },
  {
    id: 'social_media',
    name: 'Social Media Marketing',
    title: 'Grow Your Brand Automatically',
    icon: Share2,
    color: 'from-purple-500 to-pink-500',
    description: 'Multi-platform scheduling, analytics & AI-powered marketing',
    popularPlan: 'Pro',
    plans: [
      {
        name: 'Starter',
        description: 'For individual marketers',
        monthlyPrice: 49,
        annualPrice: 44,
        priceId: 'price_social_starter',
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
        priceId: 'price_social_growth',
        betaDiscount: true,
        features: [
          'Everything in Starter',
          '10 social profiles',
          '15,000 contacts',
          'Advanced scheduling',
          'AI content suggestions',
          'Team collaboration (5 users)',
          'Social listening',
          'Lead capture funnels',
          'Email & SMS support',
        ],
        cta: 'Grow Faster',
      },
      {
        name: 'Pro',
        description: 'For established agencies',
        monthlyPrice: 149,
        annualPrice: 134,
        priceId: 'price_social_pro',
        popular: true,
        features: [
          'Everything in Growth',
          '25 social profiles',
          '50,000 contacts',
          'FULL AI assistant included',
          'AI content generation',
          'Lead capture funnels',
          'Advanced analytics',
          'Team collaboration (10 users)',
          'Mobile app coming soon',
          'Priority support',
        ],
        cta: 'Automate Your Marketing',
      },
      {
        name: 'White Label',
        description: 'Build your own SMM platform',
        monthlyPrice: 249,
        annualPrice: 224,
        priceId: 'price_social_whitelabel',
        licenseLimit: 20,
        features: [
          'Everything in Pro',
          'Unlimited profiles',
          '100,000 contacts',
          'FULL AI assistant included',
          'Full white-label branding',
          'Custom domain & API access',
          'Includes up to 20 licenses',
          'Additional users: $5/seat/month',
          'Branded mobile app coming soon',
          'Dedicated account manager',
        ],
        cta: 'Start Your Agency',
      },
    ],
  },
];

// Add-ons - FINAL VERSION
const addOns = [
  {
    name: 'Multi-Business',
    price: 10,
    description: 'Manage multiple businesses from one account',
    priceNote: '$10/month per additional business',
  },
  {
    name: 'Additional Users',
    price: 5,
    description: 'Add more team members to your account',
    priceNote: '$5/month per seat after included limits',
  },
  {
    name: 'eSignature',
    price: 0,
    description: 'Electronic signature integrations included',
    priceNote: 'Included at no extra cost',
    included: true,
  },
];

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState('small_business');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const currentCategory = pricingCategories.find(c => c.id === activeCategory);

  const handlePlanSelect = (planName: string, priceId: string) => {
    const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';
    localStorage.setItem('operon_selected_plan', planName);
    localStorage.setItem('operon_selected_price_id', priceId);
    localStorage.setItem('operon_funnel_type', activeCategory);
    window.location.href = `${APP_URL}/auth/signup?plan=${planName}&category=${activeCategory}`;
  };

  const handleContactSales = (category: string, tier: string) => {
    window.location.href = `/contact?interest=${category}&tier=${encodeURIComponent(tier)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <GlobalHeader />

      {/* Hero */}
      <section className="pt-16 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Choose the system built for your business. All plans include CRM, marketing, automation, and AI-powered features.
        </p>

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
            className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-blue-600' : 'bg-slate-300'}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}
          >
            Annual
            <span className="text-blue-600 text-sm font-medium ml-1">(Save 10-20%)</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {pricingCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Current Category Title */}
      {currentCategory && (
        <div className="text-center mb-8 px-4">
          <h2 className="text-2xl font-bold text-slate-900">{currentCategory.title}</h2>
          {currentCategory.industries && (
            <p className="text-slate-600 mt-2">
              For: {currentCategory.industries.join(' • ')}
            </p>
          )}
        </div>
      )}

      {/* Pricing Cards */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {currentCategory && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {currentCategory.plans.map((plan, index) => {
                const hasBetaDiscount = plan.betaDiscount && betaDiscounts[currentCategory.id]?.tiers.includes(plan.name);
                const discountedPrice = hasBetaDiscount 
                  ? (billingPeriod === 'monthly' ? plan.monthlyPrice * 0.5 : plan.annualPrice * 0.5).toFixed(2)
                  : null;
                
                return (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl p-6 ${
                      plan.popular ? 'ring-2 ring-blue-600 shadow-xl' : 'shadow-lg hover:shadow-xl'
                    } transition`}
                  >
                    {/* Beta Discount Badge */}
                    {hasBetaDiscount && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                        <Flame className="w-4 h-4" />
                        50% OFF Beta Access
                      </div>
                    )}
                    {/* Most Popular Badge (only if no beta discount) */}
                    {plan.popular && !hasBetaDiscount && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-slate-600 text-sm mt-1 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      {hasBetaDiscount ? (
                        <div>
                          <div className="text-slate-400 line-through text-lg">
                            ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}/month
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-orange-600">${discountedPrice}</span>
                            <span className="text-slate-500">/month</span>
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
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Custom Tiers for Restaurant/Retail */}
          {currentCategory?.customTier && (
            <div className="mt-12">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-3">{currentCategory.customTier.name}</h3>
                <p className="text-slate-300 mb-4">{currentCategory.customTier.description}</p>
                <ul className="flex flex-wrap justify-center gap-4 mb-6">
                  {currentCategory.customTier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleContactSales(currentCategory.id, 'multi_location_enterprise')}
                    className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                  >
                    {currentCategory.customTier.cta}
                  </button>
                  <a
                    href="tel:+1-888-555-0123"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
                  >
                    {currentCategory.customTier.ctaAlt}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Custom Tiers for Professional */}
          {currentCategory?.customTiers && (
            <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {currentCategory.customTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-300 mb-4">{tier.description}</p>
                  <button
                    onClick={() => handleContactSales(currentCategory.id, tier.name.toLowerCase().replace(' ', '_'))}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
                  >
                    {tier.cta}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Add-ons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 ${addon.included ? 'ring-2 ring-green-500' : 'shadow'}`}>
                <h3 className="text-xl font-bold text-slate-900">{addon.name}</h3>
                <p className="text-slate-600 text-sm mt-1 mb-3">{addon.description}</p>
                <p className={`font-semibold ${addon.included ? 'text-green-600' : 'text-blue-600'}`}>
                  {addon.priceNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Start your free trial today. No credit card required. Set up in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handlePlanSelect('starter', 'default')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a
              href="/contact"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition"
            >
              Contact Sales
            </a>
          </div>
          <p className="text-slate-500 mt-4 text-sm">
            Limited onboarding spots available • No contracts • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <GlobalFooter />
    </div>
  );
}
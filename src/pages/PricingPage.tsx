import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, PhoneCall, Zap, Users, Building2, ShoppingCart, Stethoscope, Home, Scale, Share2, Briefcase, Flame, Trophy, Shield, Plus, CreditCard, MessageSquare, Globe, BarChart3, FileText, Calendar, Database, Lock, Smartphone, HeadphonesIcon, Clock, Layers, Package, Truck, Store, MapPin, Megaphone, Camera, Video, Image as ImageIcon, Sparkles, Target, TrendingUp, Award, Settings, ShieldCheck, Fingerprint, FileCheck, AlertTriangle, Crosshair, Activity, FileSignature, Receipt, Printer, Tag, Gift, Percent, DollarSign, Wallet, CreditCard as CardIcon, Building, UserPlus, Users2, Crown, Star, Zap as Lightning, Rocket, ChevronRight, Info } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

// Beta discount configuration
const betaDiscounts: Record<string, { tiers: string[]; percentage: number }> = {
  'small_business': { tiers: ['Growth', 'Pro'], percentage: 50 },
  'professional': { tiers: ['Growth', 'Business'], percentage: 50 },
  'social_media': { tiers: ['Growth'], percentage: 50 },
  'sports': { tiers: ['Growth', 'Pro'], percentage: 50 },
  'gun_ffl': { tiers: ['Growth', 'Pro'], percentage: 50 },
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
  {
    id: 'sports',
    name: 'Sports & Fitness',
    title: 'Run Your Entire Sports Organization',
    icon: Trophy,
    color: 'from-green-500 to-emerald-500',
    description: 'Rosters, scheduling, payments & parent portals',
    popularPlan: 'Pro',
    plans: [
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
        licenseLimit: 20,
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
    ],
  },
  {
    id: 'gun_ffl',
    name: 'Gun FFL / Firearms',
    title: 'The Complete CRM for FFL Dealers',
    icon: Shield,
    color: 'from-slate-600 to-slate-800',
    description: 'Inventory, compliance, POS & customer management',
    popularPlan: 'Pro',
    plans: [
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
        licenseLimit: 20,
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
    ],
  },
];

// Comprehensive Add-ons
const addOns = [
  {
    category: 'Essential Add-ons',
    items: [
      {
        name: 'Multi-Business',
        price: 10,
        description: 'Manage multiple businesses from one account',
        priceNote: '$10/month per additional business',
        icon: Building2,
      },
      {
        name: 'Additional Users',
        price: 5,
        description: 'Add more team members to your account',
        priceNote: '$5/month per seat after included limits',
        icon: UserPlus,
      },
      {
        name: 'eSignature',
        price: 0,
        description: 'Electronic signature integrations included',
        priceNote: 'Included at no extra cost',
        icon: FileSignature,
        included: true,
      },
    ],
  },
];

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState('small_business');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-gray-900 text-white">
      <GlobalHeader transparent={!isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Floating particles */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-40" />
        <div className="absolute top-60 right-40 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-40" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              Pricing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, <span className="gradient-text-animate bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the system built for your business. All plans include CRM, marketing, automation, and AI-powered features.
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
                className={`w-14 h-8 rounded-full transition-colors ${billingPeriod === 'annual' ? 'bg-blue-500' : 'bg-gray-600'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`text-lg font-medium ${billingPeriod === 'annual' ? 'text-white' : 'text-gray-500'}`}
              >
                Annual
                <span className="text-blue-400 text-sm font-medium ml-1">(Save 10-20%)</span>
              </button>
            </div>

            {/* Beta Discount Notice */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium">
              <Flame className="w-4 h-4" />
              50% OFF Beta Access on select tiers - Beta price applies regardless of billing period
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {pricingCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-${category.color.split('-')[1]}-500/25`
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-700/50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Category Title */}
      {currentCategory && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{currentCategory.title}</h2>
            {currentCategory.industries && (
              <p className="text-gray-400">
                For: {currentCategory.industries.join(' • ')}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Pricing Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentCategory && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {currentCategory.plans.map((plan, index) => {
                const hasBetaDiscount = plan.betaDiscount && betaDiscounts[currentCategory.id]?.tiers.includes(plan.name);
                // Beta discount applies to the base price, no additional annual savings
                const discountedPrice = hasBetaDiscount 
                  ? (plan.monthlyPrice * 0.5).toFixed(2)
                  : null;
                
                return (
                  <div
                    key={index}
                    className={`relative bg-gray-800/50 backdrop-blur rounded-2xl p-6 border ${
                      plan.popular ? 'border-blue-500' : 'border-gray-700/50'
                    } hover:border-blue-500/50 transition`}
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
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                            <span className="text-4xl font-bold text-orange-400">${discountedPrice}</span>
                            <span className="text-gray-400">/month</span>
                          </div>
                          <div className="text-orange-400 text-sm font-medium mt-1">Beta Price</div>
                          <div className="text-gray-500 text-xs mt-1">Same price for monthly & annual billing</div>
                        </div>
                      ) : (
                        <div>
                          <span className="text-4xl font-bold text-white">
                            ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                          </span>
                          <span className="text-gray-400">/month</span>
                          {billingPeriod === 'annual' && (
                            <div className="text-green-400 text-sm font-medium mt-1">
                              Save {Math.round((1 - plan.annualPrice / plan.monthlyPrice) * 100)}%
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
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
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-600 text-white hover:bg-slate-600'
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
              <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur rounded-2xl p-10 text-center max-w-3xl mx-auto border border-gray-700/50">
                <h3 className="text-3xl font-bold text-white mb-3">{currentCategory.customTier.name}</h3>
                <p className="text-gray-300 mb-4">{currentCategory.customTier.description}</p>
                <ul className="flex flex-wrap justify-center gap-4 mb-6">
                  {currentCategory.customTier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleContactSales(currentCategory.id, 'multi_location_enterprise')}
                    className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                  >
                    {currentCategory.customTier.cta}
                  </button>
                  <a
                    href="tel:+1-888-555-0123"
                    className="border-2 border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-white hover:bg-white hover:text-gray-900 transition"
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
                  className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur rounded-2xl p-8 text-center border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <button
                    onClick={() => handleContactSales(currentCategory.id, tier.name.toLowerCase().replace(' ', '_'))}
                    className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
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
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Power Up with <span className="text-blue-400">Add-ons</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Customize your plan with powerful add-ons to fit your specific needs.
            </p>
          </div>

          {addOns.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="w-6 h-6 text-blue-400" />
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((addon, index) => {
                  const IconComponent = addon.icon;
                  return (
                    <div
                      key={index}
                      className={`bg-gray-700/50 backdrop-blur rounded-xl p-6 border ${
                        addon.included ? 'border-green-500/50' : 'border-gray-700/50'
                      } hover:border-gray-600 transition`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          addon.included ? 'bg-green-500/20' : 'bg-blue-500/20'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            addon.included ? 'text-green-400' : 'text-blue-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-1">{addon.name}</h4>
                          <p className="text-gray-400 text-sm mb-3">{addon.description}</p>
                          <p className={`font-semibold ${
                            addon.included ? 'text-green-400' : 'text-blue-400'
                          }`}>
                            {addon.priceNote}
                          </p>
                          {addon.applicableTo && (
                            <p className="text-gray-500 text-xs mt-2">
                              Applies to: {addon.applicableTo.map(id => {
                                const cat = pricingCategories.find(c => c.id === id);
                                return cat?.name || id;
                              }).join(', ')}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get <span className="text-blue-400">Started</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today. No credit card required. Set up in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handlePlanSelect('starter', 'default')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 bg-gray-700/30 text-white rounded-xl font-semibold hover:bg-gray-600/30 transition-all border border-gray-600/50"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            Limited onboarding spots available • No contracts • Cancel anytime
          </p>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
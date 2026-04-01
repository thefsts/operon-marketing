import { useState } from 'react';
import { Check, CheckCircle2, ArrowRight, Zap, Shield, BarChart3, Users, Clock, Globe, Menu, X, ChevronDown as ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

export default function SmallBusinessCRMPage() {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGetStarted = (planName: string, price?: number) => {
    clearFunnel();
    saveFunnel('small_business_crm');
    if (price) {
      localStorage.setItem('operon_selected_plan', planName);
      localStorage.setItem('operon_selected_price', price.toString());
    }
    window.location.href = `${APP_URL}/auth/signup?ref=small_business&utm_source=specialty_page`;
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for solo service providers',
      monthlyPrice: 29,
      annualPrice: 29,
      features: [
        '1,000 contacts',
        '1 pipeline (up to 100 deals)',
        'Email marketing (up to 500 emails/mo)',
        'Basic calendar sync',
        'Simple lead forms',
        'Email support',
      ]
    },
    {
      name: 'Growth',
      description: 'For growing small businesses',
      monthlyPrice: 49,
      annualPrice: 44,
      features: [
        '5,000 contacts',
        '3 pipelines (up to 500 deals)',
        'Email marketing (up to 2,000 emails/mo)',
        'Task management',
        'Basic reporting',
        'Automated follow-ups',
        'Priority email support',
      ],
      popular: true
    },
    {
      name: 'Professional',
      description: 'For established small businesses',
      monthlyPrice: 79,
      annualPrice: 69,
      features: [
        '15,000 contacts',
        'Unlimited pipelines',
        'Email marketing (up to 10,000 emails/mo)',
        'Advanced reporting & analytics',
        'Custom workflows',
        'SMS included (500 texts/mo)',
        'Phone & email support',
      ]
    },
    {
      name: 'Business',
      description: 'For scaling operations',
      monthlyPrice: 99,
      annualPrice: 89,
      features: [
        '25,000 contacts',
        'Everything in Professional',
        'Email marketing (up to 25,000 emails/mo)',
        'Advanced automation',
        'Team collaboration (5 seats)',
        'White-label reporting',
        'Priority support',
      ]
    },
    {
      name: 'White Label',
      description: 'Build your own CRM brand',
      monthlyPrice: 199,
      annualPrice: 179,
      features: [
        'Unlimited contacts',
        'Everything in Business',
        'Full white-label branding',
        'Email marketing (up to 50,000 emails/mo)',
        'Team collaboration (10 seats)',
        'Custom domain',
        'API access',
        'Dedicated account manager',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
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
                className="w-full bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
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
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Built for Service-Based Businesses & Professionals
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Small Business CRM That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {' '}Grows With You
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Manage leads, clients, and relationships in one powerful system. Perfect for consultants, 
            coaches, agencies, and service businesses who need professional tools at small business prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleGetStarted('starter')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a href="#pricing" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Everything Included Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything You Need to Grow</h2>
            <p className="text-xl text-slate-600">Powerful features designed for small business success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: 'Lead Management',
                description: 'Capture and organize leads from multiple sources. Never miss an opportunity with automated follow-ups.',
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: 'Smart Automation',
                description: 'Automate repetitive tasks like follow-ups, appointments, and client communications. Save hours every week.',
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: 'Calendar & Scheduling',
                description: 'Integrated calendar with appointment booking. Sync with Google, Outlook, and other calendars.',
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: 'Email Marketing',
                description: 'Send professional email campaigns. Track opens, clicks, and conversions. Built-in templates included.',
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
                title: 'Reports & Analytics',
                description: 'Track performance with real-time dashboards. Understand your pipeline, revenue, and client metrics.',
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: 'Multi-Channel Communication',
                description: 'Connect via email, SMS, and more. All conversations in one place for complete context.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition">
                {feature.icon}
                <h3 className="text-xl font-semibold text-slate-900 mt-4 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600 mb-8">Choose the plan that fits your business</p>
            
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 ${
                  plan.popular ? 'ring-2 ring-blue-600 shadow-xl scale-105' : 'shadow-lg hover:shadow-xl'
                } transition`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
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
              Multi-location teams, custom integrations, or dedicated support? Let's talk.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Small Businesses Choose Operon</h2>
            <p className="text-xl text-slate-600">The CRM that simplifies your business</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Easy to Get Started',
                description: 'Set up in minutes, not days. No IT team required. Import your contacts and start selling today.',
              },
              {
                title: 'Affordable Pricing',
                description: 'Professional CRM features at small business prices. Scale up as you grow without breaking the bank.',
              },
              {
                title: 'Powerful Automation',
                description: 'Automate follow-ups, appointment reminders, and client communications. Focus on closing deals, not data entry.',
              },
              {
                title: 'All-in-One Solution',
                description: 'Manage leads, clients, projects, and communications in one place. Stop juggling multiple tools.',
              },
            ].map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-lg text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Start your free trial today. No credit card required. Cancel anytime.
          </p>
          <button
            onClick={() => handleGetStarted('starter')}
            className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition inline-flex items-center"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-6 h-6" />
          </button>
          <p className="text-slate-500 mt-4">
            Join 1,000+ small businesses already growing with OperonCRM
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
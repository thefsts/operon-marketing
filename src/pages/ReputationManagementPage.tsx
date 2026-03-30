import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Star, MessageSquare, TrendingUp, Shield, BarChart2,
  CheckCircle, Menu, X, Linkedin, Facebook, Instagram, Twitter,
  Crown, Flag, FileText, Download, AlertCircle
} from 'lucide-react';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const features = [
  {
    icon: Star,
    title: 'Smart Review Filtering',
    description: '4-5 star ratings are redirected to your public review URL (Google, Yelp, etc.). Lower ratings stay internal for improvement.',
    tier: 'basic'
  },
  {
    icon: MessageSquare,
    title: 'Automated Review Requests',
    description: 'Trigger review requests automatically when appointments complete, invoices are paid, or orders are delivered.',
    tier: 'basic'
  },
  {
    icon: TrendingUp,
    title: 'Multi-Channel Outreach',
    description: 'Send review requests via SMS or Email with customizable templates. Reach customers where they are.',
    tier: 'basic'
  },
  {
    icon: Shield,
    title: 'Reputation Protection',
    description: 'Smart filter keeps negative feedback private while encouraging happy customers to share publicly.',
    tier: 'basic'
  },
  {
    icon: BarChart2,
    title: 'Feedback Analytics',
    description: 'Track average ratings, response rates, and review distribution. Understand your customer sentiment.',
    tier: 'basic'
  },
  {
    icon: Crown,
    title: 'Featured Testimonials',
    description: 'Showcase your best reviews on your website with embeddable testimonial widgets and badges.',
    tier: 'premium'
  },
  {
    icon: Flag,
    title: 'Issue Management',
    description: 'Flag negative reviews for follow-up, assign to team members, add notes, and track resolution.',
    tier: 'premium'
  },
  {
    icon: FileText,
    title: 'Reports & Exports',
    description: 'Generate weekly/monthly reports, download CSV/JSON exports, and schedule email summaries.',
    tier: 'premium'
  }
];

const benefits = [
  'Automated review requests triggered by business events',
  'Smart filtering protects your public reputation',
  '4-5 star customers redirected to Google/Yelp',
  'Lower ratings kept internal for improvement',
  'SMS and Email outreach with custom templates',
  'Complete feedback analytics and reporting'
];

const premiumBenefits = [
  'Everything in Basic, plus:',
  'Featured testimonial management',
  'Issue tracking and resolution workflow',
  'Weekly/monthly automated reports',
  'CSV and JSON export functionality',
  'Email summary scheduling',
  'Priority support'
];

const platforms = [
  { name: 'Google Business', rating: 4.8, reviews: '1,247' },
  { name: 'Facebook', rating: 4.6, reviews: '892' },
  { name: 'Yelp', rating: 4.5, reviews: '456' },
  { name: 'Trustpilot', rating: 4.7, reviews: '324' }
];

const pricingTiers = [
  {
    name: 'Basic',
    price: 'Included',
    period: 'with Pro plan',
    description: 'Essential reputation management for growing businesses',
    features: [
      'Automated review requests',
      'Smart feedback filtering',
      'SMS & Email outreach',
      'Basic analytics dashboard',
      'Manual review requests',
      'Public review URL redirect'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Premium',
    price: '$99',
    period: '/month',
    description: 'Advanced reputation management with full reporting',
    features: [
      'Everything in Basic',
      'Featured testimonials',
      'Issue tracking & resolution',
      'Weekly/monthly reports',
      'CSV/JSON exports',
      'Email summaries',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'Full-featured reputation management for larger organizations',
    features: [
      'Everything in Premium',
      'Multi-location support',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function ReputationManagementPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-10 w-auto object-contain max-w-[160px]" />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link to="/#platform" className="hover:text-cyan-600 transition-colors">Features</Link>
              <Link to="/#industries" className="hover:text-cyan-600 transition-colors">Industries</Link>
              <Link to="/pricing" className="hover:text-cyan-600 transition-colors">Pricing</Link>
              <Link to="/integrations" className="hover:text-cyan-600 transition-colors">Integrations</Link>
              <a href={`${APP_URL}/login`} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">Sign In</a>
              <Link to="/contact" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">Book Demo</Link>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link to="/#platform" className="block py-2 text-slate-600">Features</Link>
              <Link to="/#industries" className="block py-2 text-slate-600">Industries</Link>
              <Link to="/pricing" className="block py-2 text-slate-600">Pricing</Link>
              <Link to="/integrations" className="block py-2 text-slate-600">Integrations</Link>
              <a href={`${APP_URL}/login`} className="block py-2 text-slate-600">Sign In</a>
              <Link to="/contact" className="block py-2 text-cyan-600">Book Demo</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Reputation Management Add-on
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build a 5-Star Reputation{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              on Autopilot
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Monitor, manage, and improve your online reputation across all major platforms. 
            Turn customer feedback into your competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/25 transition-all">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900">3x</div>
              <div className="text-sm text-slate-600 mt-1">More Reviews Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900">0.5+</div>
              <div className="text-sm text-slate-600 mt-1">Star Rating Increase</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900">80%</div>
              <div className="text-sm text-slate-600 mt-1">Faster Response Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900">15+</div>
              <div className="text-sm text-slate-600 mt-1">Platforms Monitored</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Everything You Need to Manage Your Reputation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive tools to monitor, respond, and improve your online presence across all platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-cyan-100 transition-all relative">
                {feature.tier === 'premium' && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                      <Crown className="w-3 h-3" />
                      Premium
                    </span>
                  </div>
                )}
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All Your Reviews in One Place
            </h2>
            <p className="text-lg text-slate-400">
              Monitor your reputation across all major platforms from a single dashboard.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-medium">{platform.name}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">{platform.rating}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{platform.reviews}</div>
                <div className="text-sm text-slate-400">Reviews</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Businesses Choose Our Reputation Management
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">1</div>
                  <div>
                    <div className="font-medium text-slate-900">Set Your Public Review URL</div>
                    <div className="text-sm text-slate-600">Add your Google Business, Yelp, or other review platform link</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">2</div>
                  <div>
                    <div className="font-medium text-slate-900">Enable Automation Triggers</div>
                    <div className="text-sm text-slate-600">Auto-send requests when appointments complete, invoices are paid, or orders delivered</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">3</div>
                  <div>
                    <div className="font-medium text-slate-900">Smart Feedback Collection</div>
                    <div className="text-sm text-slate-600">Happy customers (4-5 stars) are redirected to leave public reviews</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">4</div>
                  <div>
                    <div className="font-medium text-slate-900">Monitor & Improve</div>
                    <div className="text-sm text-slate-600">Track ratings, review internal feedback, and watch your reputation grow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Choose Your Reputation Plan
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Start with basic reputation management included in your CRM plan, or unlock premium features for advanced control.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl p-8 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white ring-4 ring-cyan-200' 
                    : 'bg-slate-50 border border-slate-200'
                }`}
              >
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-semibold mb-2 ${tier.popular ? 'text-white' : 'text-slate-900'}`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${tier.popular ? 'text-white' : 'text-slate-900'}`}>
                      {tier.price}
                    </span>
                    <span className={`text-sm ${tier.popular ? 'text-white/80' : 'text-slate-500'}`}>
                      {tier.period}
                    </span>
                  </div>
                  <p className={`mt-2 text-sm ${tier.popular ? 'text-white/80' : 'text-slate-600'}`}>
                    {tier.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-white' : 'text-green-500'}`} />
                      <span className={`text-sm ${tier.popular ? 'text-white' : 'text-slate-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={tier.popular ? "/contact" : "/pricing"}
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all ${
                    tier.popular 
                      ? 'bg-white text-cyan-600 hover:bg-slate-100' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <AlertCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Important:</strong> Operon Reputation Management helps you collect and manage customer feedback. 
              We provide tools to request reviews and redirect happy customers to public platforms. 
              We do not have direct control over external review sites like Google, Yelp, or Facebook — 
              reviews must be posted by customers on those platforms directly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your 5-Star Reputation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your free 14-day trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl transition-all">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="inline-block mb-4">
                <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-10 w-auto object-contain max-w-[160px]" />
              </Link>
              <p className="text-sm">Building better businesses with intelligent CRM solutions.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/#platform" className="hover:text-cyan-400 transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link to="/integrations" className="hover:text-cyan-400 transition-colors">Integrations</Link></li>
                <li><Link to="/docs" className="hover:text-cyan-400 transition-colors">API Docs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/sports" className="hover:text-cyan-400 transition-colors">Sports & Fitness</Link></li>
                <li><Link to="/real-estate" className="hover:text-cyan-400 transition-colors">Real Estate</Link></li>
                <li><Link to="/ecommerce" className="hover:text-cyan-400 transition-colors">E-commerce</Link></li>
                <li><Link to="/pos" className="hover:text-cyan-400 transition-colors">POS & Retail</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link></li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Operon CRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Target, Users, TrendingUp, Zap, BarChart2,
  CheckCircle, Star
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const features = [
  {
    icon: Target,
    title: 'Smart Lead Scoring',
    description: 'Automatically score leads based on engagement, demographics, and behavior. Focus on prospects most likely to convert.'
  },
  {
    icon: Users,
    title: 'Prospect Management',
    description: 'Track every prospect through your funnel with customizable statuses, tags, and source tracking.'
  },
  {
    icon: TrendingUp,
    title: 'Source Analytics',
    description: 'Measure ROI on every lead source. Know exactly which channels deliver the best results.'
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    description: 'Auto-assign leads, send follow-up sequences, and trigger actions based on lead behavior.'
  },
  {
    icon: BarChart2,
    title: 'Conversion Tracking',
    description: 'Track prospects from first touch to closed deal. Understand your true conversion rates.'
  },
  {
    icon: Star,
    title: 'Lead Qualification',
    description: 'Customizable qualification criteria ensure your sales team focuses on the right opportunities.'
  }
];

const benefits = [
  'Increase conversion rates by up to 40%',
  'Reduce lead response time to under 5 minutes',
  'Track ROI across all marketing channels',
  'Automate lead nurturing sequences',
  'Integrate with existing CRM workflows',
  'Real-time lead scoring and prioritization'
];

export default function LeadGenerationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <GlobalHeader />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Lead Generation Add-on
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Convert More Prospects{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Into Customers
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Track, score, and nurture leads with intelligent automation. Know exactly where every prospect stands in your sales funnel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {benefits.slice(0, 4).map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need to Generate More Leads</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Powerful tools to capture, qualify, and convert prospects into paying customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-300 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Generating More Leads Today</h2>
          <p className="text-lg text-slate-600 mb-8">
            Lead Generation is available as an add-on for just $15/month, or included free with Professional and Enterprise plans.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors">
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
              Book Demo
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
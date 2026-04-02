import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Zap, Shield, Users, BarChart3, Clock, Phone, Mail, 
  Calendar, FileText, MessageSquare, TrendingUp, Settings, Sparkles,
  Building2, Home, Briefcase, ShoppingCart, Stethoscope, Scale, Trophy,
  Globe, ChevronRight, Star, Play, CheckCircle
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

function saveFunnel(type: string) {
  localStorage.setItem('operon_funnel_type', type);
  localStorage.setItem('operon_last_url', window.location.href);
  localStorage.setItem('operon_last_step', 'home');
}

// Industry solutions data with images
const industries = [
  { 
    icon: Briefcase, 
    name: 'Small Business', 
    desc: 'Complete CRM for service businesses, contractors, and local pros.',
    path: '/small-business-crm',
    color: 'from-blue-500 to-cyan-400',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop'
  },
  { 
    icon: ShoppingCart, 
    name: 'Restaurant / Retail', 
    desc: 'POS, inventory, and customer management in one system.',
    path: '/restaurant-retail-crm',
    color: 'from-orange-500 to-red-400',
    price: '$69',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
  },
  { 
    icon: Home, 
    name: 'Real Estate', 
    desc: 'Listings, deals, commissions, and compliance for agents.',
    path: '/real-estate',
    color: 'from-emerald-500 to-teal-400',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
  },
  { 
    icon: Stethoscope, 
    name: 'Healthcare', 
    desc: 'HIPAA-compliant patient management and scheduling.',
    path: '/healthcare',
    color: 'from-rose-500 to-pink-400',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop'
  },
  { 
    icon: Scale, 
    name: 'Legal', 
    desc: 'Case management, time tracking, and client communications.',
    path: '/legal',
    color: 'from-amber-500 to-orange-400',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop'
  },
  { 
    icon: Trophy, 
    name: 'Sports & Fitness', 
    desc: 'Teams, leagues, facilities, and school athletic programs.',
    path: '/sports',
    color: 'from-green-500 to-emerald-400',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1461896836934-eea8ea3d6d8e?w=400&h=300&fit=crop'
  },
  { 
    icon: Globe, 
    name: 'Social Media Marketing', 
    desc: 'Content scheduling, campaigns, and analytics.',
    path: '/social-media-marketing',
    color: 'from-purple-500 to-violet-400',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop'
  },
  { 
    icon: Shield, 
    name: 'Gun FFL / Firearms', 
    desc: 'ATF-compliant sales, inventory, and compliance tracking.',
    path: '/gun-ffl-crm',
    color: 'from-slate-500 to-slate-400',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1585310988534-1e67e5a6c6e8?w=400&h=300&fit=crop'
  },
  { 
    icon: BarChart3, 
    name: 'E-Commerce', 
    desc: 'Online store integration with full order management.',
    path: '/e-commerce',
    color: 'from-indigo-500 to-blue-400',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
  },
  { 
    icon: Star, 
    name: 'Reputation Management', 
    desc: 'Reviews, brand monitoring, and online presence.',
    path: '/reputation-management',
    color: 'from-yellow-500 to-amber-400',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1560472354-b33d0a0e1f6b?w=400&h=300&fit=crop'
  },
];

// Platform features
const platformFeatures = [
  { icon: Users, title: 'CRM & Contacts', desc: 'Complete customer relationship management' },
  { icon: BarChart3, title: 'Pipelines & Deals', desc: 'Visual deal tracking and management' },
  { icon: Calendar, title: 'Scheduling', desc: 'Appointments, reminders, and calendar sync' },
  { icon: FileText, title: 'Documents', desc: 'Secure storage with e-signatures' },
  { icon: MessageSquare, title: 'Communications', desc: 'SMS, email, and chat in one inbox' },
  { icon: TrendingUp, title: 'Reporting', desc: 'Real-time analytics and dashboards' },
  { icon: Zap, title: 'Automation', desc: 'Workflow automation and triggers' },
  { icon: Sparkles, title: 'AI Assistant', desc: 'Intelligent suggestions and task automation' },
];

// Integration logos
const integrations = [
  { name: 'Stripe', logo: '💳' },
  { name: 'Google', logo: '🔍' },
  { name: 'QuickBooks', logo: '📊' },
  { name: 'Zapier', logo: '⚡' },
  { name: 'DoorDash', logo: '🚪' },
  { name: 'Uber Eats', logo: '🍔' },
];

// Competitor comparison data
const competitors = [
  { feature: 'All-in-One Platform', operon: true, salesforce: false, hubspot: false, zoho: false, pipedrive: false },
  { feature: 'Industry-Specific Versions', operon: true, salesforce: false, hubspot: false, zoho: false, pipedrive: false },
  { feature: 'Built-in POS System', operon: true, salesforce: false, hubspot: false, zoho: false, pipedrive: false },
  { feature: 'AI Assistant Included', operon: true, salesforce: true, hubspot: true, zoho: false, pipedrive: false },
  { feature: 'E-Signatures Built-in', operon: true, salesforce: true, hubspot: false, zoho: false, pipedrive: false },
  { feature: 'Compliance Tools (HIPAA, ATF)', operon: true, salesforce: true, hubspot: false, zoho: false, pipedrive: false },
  { feature: 'Unlimited Contacts', operon: true, salesforce: false, hubspot: false, zoho: false, pipedrive: false },
  { feature: 'Starting Price', operon: '$29/mo', salesforce: '$25/user', hubspot: '$15/mo', zoho: '$14/user', pipedrive: '$15/user' },
];

// Add-ons
const addOns = [
  { name: 'Multi-Business', price: '10', desc: 'Manage multiple businesses under one account', unit: 'per business/mo' },
  { name: 'White Label', price: '99', desc: 'Brand Operon as your own platform', unit: '/month' },
  { name: 'Priority Support', price: '49', desc: '24/7 dedicated support team', unit: '/month' },
];

// Coming soon features
const comingSoon = [
  { name: 'Geofence Marketing', desc: 'Location-based marketing campaigns' },
  { name: 'Business VoIP Phones', desc: 'Integrated business phone system' },
];

// Compliance items
const complianceItems = [
  { icon: Shield, title: 'HIPAA Compliance', desc: 'Healthcare data protection' },
  { icon: FileText, title: 'ATF Compliance', desc: 'Firearms sales tracking' },
  { icon: Scale, title: 'Legal Compliance', desc: 'Case and document management' },
  { icon: CheckCircle, title: 'Sports Compliance', desc: 'Athletic eligibility tracking' },
];

export default function MarketingHome() {
  const [continueBanner, setContinueBanner] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('operon_funnel_type');
    if (saved && localStorage.getItem('operon_last_step')) {
      setContinueBanner(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <GlobalHeader />

      {/* Top Announcement Bar */}
      <div className="fixed top-[80px] left-0 right-0 z-40 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white text-sm py-2 text-center font-medium">
        <span className="hidden sm:inline">Set up in minutes</span>
        <span className="sm:hidden">•</span>
        <span className="mx-2">•</span>
        <span>No contracts</span>
        <span className="mx-2">•</span>
        <span>Built for real businesses</span>
      </div>

      {/* Continue Banner */}
      {continueBanner && (
        <div className="fixed top-[116px] left-0 right-0 z-30 bg-emerald-600 text-white py-3 text-center">
          <Link to="/start" className="font-medium hover:underline">
            Continue your setup →
          </Link>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────── */}
      {/* HERO SECTION */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className={`relative min-h-screen flex items-center justify-center pt-32 bg-gradient-to-br from-slate-950 via-purple-950/50 to-blue-950 overflow-hidden ${continueBanner ? 'mt-8' : ''}`}>
        {/* Animated background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
          
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-60" />
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-delayed opacity-60" />
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-400 rounded-full animate-float opacity-60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Beta badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Limited Beta sale onboarding spots available
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Run Your Entire Business<br />
              <span className="gradient-text-animate bg-clip-text text-transparent">
                From One System
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              CRM, POS, Marketing, Scheduling, Documents, and AI Assistant — all in one powerful platform designed for your industry.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/start"
                onClick={() => saveFunnel('general')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                View Pricing
              </Link>
            </div>

            <p className="text-slate-400 text-sm">
              No credit card required • Set up in 5 minutes
            </p>
          </div>

          {/* Dashboard preview */}
          <div className="mt-16 relative animate-fade-in-up">
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-indicator">
            <span className="text-slate-500 text-xs">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" />
            </div>
          </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
              <div className="bg-slate-900 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {['Revenue', 'Leads', 'Deals', 'Tasks'].map((label, i) => (
                      <div key={label} className="bg-slate-700/50 rounded-lg p-4">
                        <div className="text-slate-400 text-xs mb-1">{label}</div>
                        <div className="text-2xl font-bold text-white">{['$24.5K', '127', '43', '18'][i]}</div>
                        <div className="text-green-400 text-xs">+12% vs last month</div>
                      </div>
                    ))}
                  </div>
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* INDUSTRY SOLUTIONS GRID */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Choose the System Built for Your Business
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Industry-specific solutions with features designed for how you work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {industries.map((industry, i) => (
              <Link
                key={i}
                to={industry.path}
                onClick={() => saveFunnel(industry.name.toLowerCase().replace(/[^a-z]/g, '_'))}
                className="group relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-slate-800/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                {/* Image with gradient overlay */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>
                
                {/* Content */}
                <div className="relative p-5">
                  <div className={`absolute -top-6 left-4 w-10 h-10 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg`}>
                    <industry.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-1 mt-2">{industry.name}</h3>
                  <p className="text-slate-400 text-xs mb-3 line-clamp-2">{industry.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-xs font-medium">From {industry.price}/mo</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* PLATFORM FEATURES */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Replace Your Entire Tech Stack
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Stop paying for 10 different tools. Operon gives you everything in one platform, working together seamlessly.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {platformFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{feature.title}</div>
                      <div className="text-slate-400 text-xs">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />
              <div className="relative bg-slate-800/80 rounded-2xl border border-white/10 p-6">
                <div className="text-sm text-slate-400 mb-4">AI Assistant</div>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-white text-sm">I've scheduled 3 appointments for tomorrow and sent follow-up emails to 12 leads. Your conversion rate is up 15% this week!</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4 max-w-xs">
                      <p className="text-white text-sm">Show me my top 5 leads this month</p>
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-white text-sm">Here are your top leads based on engagement. Would you like me to prioritize outreach?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* INTEGRATIONS */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">
              Connect with the Tools You Already Use
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrations.map((int, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span className="text-2xl">{int.logo}</span>
                <span className="font-medium">{int.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* CRM COMPARISON */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Operon Wins
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              See how Operon compares to the leading CRM platforms on the market.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-cyan-400 font-bold">Operon</th>
                  <th className="text-center py-4 px-4 text-slate-400">Salesforce</th>
                  <th className="text-center py-4 px-4 text-slate-400">HubSpot</th>
                  <th className="text-center py-4 px-4 text-slate-400">Zoho</th>
                  <th className="text-center py-4 px-4 text-slate-400">Pipedrive</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-4 px-4 text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.operon === 'boolean' ? (
                        <CheckCircle className={`w-5 h-5 mx-auto ${row.operon ? 'text-cyan-400' : 'text-red-400'}`} />
                      ) : (
                        <span className="text-cyan-400 font-bold">{row.operon}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.salesforce === 'boolean' ? (
                        <CheckCircle className={`w-5 h-5 mx-auto ${row.salesforce ? 'text-green-400' : 'text-red-400/50'}`} />
                      ) : (
                        <span className="text-slate-400">{row.salesforce}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.hubspot === 'boolean' ? (
                        <CheckCircle className={`w-5 h-5 mx-auto ${row.hubspot ? 'text-green-400' : 'text-red-400/50'}`} />
                      ) : (
                        <span className="text-slate-400">{row.hubspot}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.zoho === 'boolean' ? (
                        <CheckCircle className={`w-5 h-5 mx-auto ${row.zoho ? 'text-green-400' : 'text-red-400/50'}`} />
                      ) : (
                        <span className="text-slate-400">{row.zoho}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.pipedrive === 'boolean' ? (
                        <CheckCircle className={`w-5 h-5 mx-auto ${row.pipedrive ? 'text-green-400' : 'text-red-400/50'}`} />
                      ) : (
                        <span className="text-slate-400">{row.pipedrive}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* COMPLIANCE */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance-Aware by Design
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Built-in compliance tools for regulated industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceItems.map((item, i) => (
              <div key={i} className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SPORTS CRM SECTION */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <Trophy className="w-4 h-4" />
                Sports & Fitness CRM
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for Sports Organizations
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Manage teams, leagues, facilities, and school athletic programs with purpose-built tools.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Teams & Leagues', icon: Users },
                  { label: 'Facilities', icon: Building2 },
                  { label: 'Schools', icon: FileText },
                  { label: 'Compliance', icon: Shield },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <item.icon className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/sports"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                View Sports CRM
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 p-8">
              <div className="grid grid-cols-2 gap-4">
                {['Player Management', 'Schedule Games', 'Track Stats', 'Team Communication'].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* E-COMMERCE SECTION */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl border border-indigo-500/20 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {['Product Catalog', 'Order Management', 'Payment Processing', 'Shipping Integration'].map((item, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mb-2" />
                      <span className="text-white text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4" />
                E-Commerce
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Run Your Online Store Inside Your CRM
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Full e-commerce integration with inventory, orders, payments, and customer management in one place.
              </p>

              <Link
                to="/e-commerce"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
              >
                View E-Commerce
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* REPUTATION MANAGEMENT */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Reputation Management
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honest, Ethical Reputation Management
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Monitor reviews, manage your online presence, and build trust with customers. No fake reviews — just honest reputation building.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Starter', price: '99', desc: 'Single business monitoring', features: ['Review monitoring', 'Google Business sync', 'Monthly reports'] },
              { name: 'Professional', price: '199', desc: 'Multi-location businesses', features: ['Everything in Starter', 'Multiple locations', 'Competitor analysis', 'Response templates'] },
              { name: 'Enterprise', price: '399', desc: 'Up to 2 businesses', features: ['Everything in Professional', '2 businesses included', 'Dedicated manager', 'Priority support'], note: 'No white labeling' },
            ].map((plan, i) => (
              <div key={i} className={`bg-slate-800/50 border rounded-2xl p-6 ${i === 2 ? 'border-yellow-500/50 ring-2 ring-yellow-500/20' : 'border-white/10'}`}>
                <h3 className="font-bold text-white text-lg mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">Starting at ${plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-yellow-400" />
                      {f}
                    </li>
                  ))}
                  {plan.note && (
                    <li className="text-xs text-yellow-400 mt-2">* {plan.note}</li>
                  )}
                </ul>
                <Link
                  to="/reputation-management"
                  className="block w-full text-center py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* ADD-ONS */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Add-Ons
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Extend your platform with powerful add-ons.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {addOns.map((addon, i) => (
              <div key={i} className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                <h3 className="font-bold text-white text-lg mb-1">{addon.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{addon.desc}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">Starting at ${addon.price}</span>
                  <span className="text-slate-400"> {addon.unit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="text-slate-300 mb-4">
              Need something specific? <a href="mailto:support@operoncrm.com" className="text-cyan-400 hover:underline">Email us</a> for custom add-on development.
            </p>
          </div>

          {/* Coming Soon */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white text-center mb-6">Coming Soon</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {comingSoon.map((item, i) => (
                <div key={i} className="bg-slate-800/30 border border-white/5 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{item.name}</div>
                    <div className="text-slate-400 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* BETA OFFER */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Limited Time Beta Sale
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get 50% Off During Beta
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Be an early adopter and lock in beta pricing. Discount applies to select plans across Small Business, Professional, Sports, and FFL categories.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all"
          >
            View Beta Pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* FINAL CTA */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Built for Modern Business Operations
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join thousands of businesses running their entire operation from one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              onClick={() => saveFunnel('general')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
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
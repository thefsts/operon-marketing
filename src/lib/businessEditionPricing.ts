import type { PricingFamily } from './pricing';

/**
 * Standalone business-edition pricing for customers who use OPERON to sell
 * managed marketing services to their own clients. Client media/data/vendor
 * spend is separate from the OPERON software subscription.
 */
export const geofenceBusinessEdition: PricingFamily = {
  id: 'geofence-business',
  name: 'Geofence Business Edition',
  description: 'A standalone OPERON system for marketers and agencies that sell and manage geofence marketing services for their own clients. Media, audience/location data, impressions, maps and other third-party campaign costs are separately funded.',
  servicePath: '/geofence',
  plans: [
    {
      name: 'Solo Marketer',
      monthlyPrice: 149,
      description: 'For an individual marketer building a geofence service business.',
      features: ['Client and campaign workspace', 'Geofence campaign workflow', 'Client reporting workflow', 'Designed for managed-service resale'],
    },
    {
      name: 'Business Pro',
      monthlyPrice: 249,
      description: 'For a marketing business managing multiple client campaigns.',
      features: ['Everything in Solo Marketer', 'Multiple client campaign workflows', 'Expanded campaign organization', 'Team-ready service operations'],
    },
    {
      name: 'Agency',
      monthlyPrice: 399,
      description: 'For agencies managing a larger book of geofence clients.',
      highlighted: true,
      features: ['Everything in Business Pro', 'Expanded client and campaign capacity', 'Team workflow and approvals', 'Consolidated client reporting workflows'],
    },
    {
      name: 'Agency Pro',
      monthlyPrice: 599,
      description: 'For higher-volume agencies needing stronger operational controls.',
      features: ['Everything in Agency', 'Higher-volume agency operations', 'Expanded client workspaces', 'Advanced team and reporting workflows'],
    },
    {
      name: 'White Label',
      monthlyPrice: 799,
      description: 'For agencies that want a branded client-facing geofence business system.',
      features: ['Everything in Agency Pro', 'White-label capability', 'Branded client experience', 'Custom-domain eligibility; setup may apply'],
    },
    {
      name: 'Enterprise',
      monthlyPrice: 1499,
      description: 'Starting point for large agencies, franchises and multi-market operators; final scope is custom.',
      features: ['Everything in White Label', 'Multi-market operating model', 'Custom limits and implementation', 'Enterprise support and scope'],
    },
  ],
};

export const geofenceManagedServicePricing = [
  { name: 'Local Geofence Campaign', price: 'Starting at $1,000 + client budget' },
  { name: 'Advanced / Multi-Location Geofence', price: '$1,500–$2,500+ + client budget' },
  { name: 'Enterprise / Event / Multi-Market Geofence', price: '$3,000+ custom + client budget' },
  { name: 'Ongoing Geofence Management', price: '$500+ / month' },
] as const;

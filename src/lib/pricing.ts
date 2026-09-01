export type PricingPlan = {
  name: string;
  monthlyPrice: number | null;
  description: string;
  highlighted?: boolean;
};

export type PricingFamily = {
  id: string;
  name: string;
  description: string;
  plans: PricingPlan[];
};

export const ANNUAL_DISCOUNT_PERCENT = 10;
export const COMBO_DISCOUNT_PERCENT = 15;

export const pricingRules = {
  annual: 'Save 10% when the full year is paid in advance.',
  combo: 'Save 15% on qualifying combinations of 2 or more systems/add-ons.',
  lockout: 'Automatic discounts do not stack. The applicable best eligible discount is used.',
} as const;

export const annualPrice = (monthlyPrice: number) => Math.round(monthlyPrice * 12 * 0.9);

export const pricingFamilies: PricingFamily[] = [
  {
    id: 'small-business',
    name: 'Small Business CRM',
    description: 'Core CRM plans for service businesses, local operators, and growing teams.',
    plans: [
      { name: 'Starter', monthlyPrice: 29, description: 'Core CRM for a small operation getting started.' },
      { name: 'Growth', monthlyPrice: 49, description: 'Expanded CRM features for a growing business.' },
      { name: 'Pro', monthlyPrice: 79, description: 'Advanced CRM tools and broader operational capability.', highlighted: true },
      { name: 'Elite', monthlyPrice: 99, description: 'Top standard small-business tier before white-label.' },
      { name: 'White-Label', monthlyPrice: 199, description: 'Client-branded experience and white-label capabilities.' },
    ],
  },
  {
    id: 'restaurant-retail',
    name: 'Restaurant / Retail / Clubs CRM + POS',
    description: 'CRM and POS for restaurants, retail stores, bars, nightclubs, hospitality concepts, and club operations. Pricing is being repriced upward before public launch.',
    plans: [
      { name: 'Starter', monthlyPrice: null, description: 'Single-location CRM + POS. Final launch price pending.' },
      { name: 'Growth', monthlyPrice: null, description: 'Expanded POS, loyalty, marketing, and operations. Final launch price pending.', highlighted: true },
      { name: 'Pro', monthlyPrice: null, description: 'High-volume operation with advanced CRM/POS capability. Final launch price pending.' },
      { name: 'White-Label', monthlyPrice: null, description: 'Branded restaurant, retail, or club platform. Final launch price pending.' },
      { name: 'Multi-Location / Enterprise', monthlyPrice: null, description: 'Centralized multi-location management and custom enterprise scope.' },
    ],
  },
  {
    id: 'professional',
    name: 'Professional CRM',
    description: 'For professional practices and firms that do not require a dedicated industry system.',
    plans: [
      { name: 'Self-Employed', monthlyPrice: 49, description: 'For solo professionals and independent operators.' },
      { name: 'Small Business', monthlyPrice: 69, description: 'For small professional practices and firms.' },
      { name: 'Growth', monthlyPrice: 99, description: 'For growing professional teams needing more capability.' },
      { name: 'Business', monthlyPrice: 149, description: 'Advanced professional-business tier.', highlighted: true },
      { name: 'White-Label', monthlyPrice: 299, description: 'White-label professional CRM environment.' },
      { name: 'Enterprise', monthlyPrice: null, description: 'Custom scope, users, integrations, security, and support.' },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate CRM',
    description: 'Dedicated real-estate workflows for contacts, listings, deals, documents, marketing, and transaction pipelines. Dedicated launch pricing is being finalized.',
    plans: [
      { name: 'Agent', monthlyPrice: null, description: 'Individual-agent system. Final launch price pending.' },
      { name: 'Team', monthlyPrice: null, description: 'Shared pipeline and collaboration for real-estate teams. Final launch price pending.' },
      { name: 'Brokerage', monthlyPrice: null, description: 'Brokerage operations and expanded management. Final launch price pending.', highlighted: true },
      { name: 'White-Label', monthlyPrice: null, description: 'Branded real-estate platform. Final launch price pending.' },
      { name: 'Enterprise', monthlyPrice: null, description: 'Custom multi-office and enterprise scope.' },
    ],
  },
  {
    id: 'mortgage',
    name: 'Mortgage CRM',
    description: 'Dedicated borrower, loan-pipeline, document, milestone, referral, and closing workflows. Dedicated launch pricing is being finalized.',
    plans: [
      { name: 'Loan Officer', monthlyPrice: null, description: 'Individual loan-officer workflow. Final launch price pending.' },
      { name: 'Team', monthlyPrice: null, description: 'Shared mortgage pipeline and team workflows. Final launch price pending.' },
      { name: 'Branch', monthlyPrice: null, description: 'Branch-level operations and management. Final launch price pending.', highlighted: true },
      { name: 'White-Label', monthlyPrice: null, description: 'Branded mortgage CRM environment. Final launch price pending.' },
      { name: 'Enterprise', monthlyPrice: null, description: 'Custom multi-branch and enterprise scope.' },
    ],
  },
  {
    id: 'social-publisher',
    name: 'Social Publisher Pro',
    description: 'Social publishing, campaigns, approvals, analytics, and CRM-connected marketing workflows.',
    plans: [
      { name: 'Starter', monthlyPrice: 49, description: 'For individual marketers and small brands.' },
      { name: 'Growth', monthlyPrice: 99, description: 'Expanded profiles, scheduling, collaboration, and campaign workflows.' },
      { name: 'Pro', monthlyPrice: 149, description: 'Advanced publishing, analytics, automation, and team capability.', highlighted: true },
      { name: 'White-Label', monthlyPrice: 249, description: 'Branded social-publishing environment for agencies and operators.' },
    ],
  },
  {
    id: 'sports',
    name: 'Sports & Fitness CRM',
    description: 'Rosters, scheduling, registrations, payments, portals, and organization management.',
    plans: [
      { name: 'Starter', monthlyPrice: 29, description: 'Core tools for small teams.' },
      { name: 'Growth', monthlyPrice: 49, description: 'Expanded team and payment workflows.' },
      { name: 'Pro', monthlyPrice: 79, description: 'Full organization workflows and portals.', highlighted: true },
      { name: 'Elite', monthlyPrice: 99, description: 'Advanced organization and branding capability.' },
      { name: 'White-Label', monthlyPrice: 199, description: 'Your branded sports platform.' },
    ],
  },
  {
    id: 'gun-ffl',
    name: 'Gun / FFL CRM',
    description: 'Dedicated FFL retail, inventory, customer, POS, and compliance-support workflows. Pricing is being repriced upward before public launch.',
    plans: [
      { name: 'Starter', monthlyPrice: null, description: 'Core FFL business system. Final launch price pending.' },
      { name: 'Growth', monthlyPrice: null, description: 'Expanded inventory and operational workflows. Final launch price pending.' },
      { name: 'Pro', monthlyPrice: null, description: 'Advanced CRM, POS, and compliance-support capability. Final launch price pending.', highlighted: true },
      { name: 'Elite', monthlyPrice: null, description: 'Multi-location and advanced operational capability. Final launch price pending.' },
      { name: 'White-Label', monthlyPrice: null, description: 'Branded FFL platform. Final launch price pending.' },
    ],
  },
];

export const confirmedAddOns = [
  { name: 'Additional user seat', price: '$5 / seat / month', description: 'Charged per additional seat beyond the tier allowance.' },
  { name: 'Additional business / location', price: '$10 / business / month', description: 'For customers operating more than one business under their OPERON account.' },
] as const;

export const currentProducts = [
  { name: 'Social Publisher Pro', description: 'Dedicated social publishing and marketing system with its own $49 / $99 / $149 / $249 tiers.' },
  { name: 'Operon Geofence', description: 'Location intelligence and geofencing capability. Final standalone/add-on pricing is being finalized.' },
] as const;

export const phaseTwoAddOns = [
  {
    name: 'Phone System',
    status: 'Phase 2 · Coming Soon',
    description: 'Telnyx-first business phone capability. Usage/provider charges will be covered by add-on or pass-through pricing.',
  },
] as const;

export const clientPaidThirdPartyServices = ['QuickBooks', 'Gusto', 'DocuSign', 'Slack and similar external services'] as const;

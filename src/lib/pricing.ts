export type PricingPlan = {
  name: string;
  monthlyPrice: number | null;
  description: string;
  highlighted?: boolean;
};

export type PricingFamily = {
  id: 'small-business' | 'restaurant-retail' | 'professional';
  name: string;
  description: string;
  plans: PricingPlan[];
};

export const pricingFamilies: PricingFamily[] = [
  {
    id: 'small-business',
    name: 'Small Business CRM',
    description: 'Core CRM plans for small operations, growing teams, and white-label deployments.',
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
    name: 'Restaurant / Retail CRM + POS',
    description: 'CRM and POS plans for restaurant and retail operations.',
    plans: [
      { name: 'Starter', monthlyPrice: 69, description: 'CRM with POS included for restaurant or retail operations.' },
      { name: 'Growth', monthlyPrice: 99, description: 'Expanded POS/CRM management and growth features.', highlighted: true },
      { name: 'Pro', monthlyPrice: 150, description: 'Advanced restaurant/retail operational tier.' },
      { name: 'White-Label', monthlyPrice: 199, description: 'White-label restaurant/retail CRM + POS environment.' },
    ],
  },
  {
    id: 'professional',
    name: 'Professional CRM',
    description: 'For solo professionals, practices, firms, and regulated professional teams.',
    plans: [
      { name: 'Self-Employed', monthlyPrice: 49, description: 'For solo professionals and independent operators.' },
      { name: 'Small Business', monthlyPrice: 69, description: 'For small professional practices and firms.' },
      { name: 'Growth', monthlyPrice: 99, description: 'For growing professional teams needing more capability.' },
      { name: 'Business', monthlyPrice: 149, description: 'Advanced professional-business tier.', highlighted: true },
      { name: 'White-Label', monthlyPrice: 299, description: 'White-label professional CRM environment.' },
      { name: 'Enterprise', monthlyPrice: null, description: 'Custom scope, users, integrations, security, and support.' },
    ],
  },
];

export const confirmedAddOns = [
  {
    name: 'Additional user seat',
    price: '$5 / seat / month',
    description: 'Charged per additional seat beyond the tier allowance.',
  },
  {
    name: 'Additional business / location',
    price: '$10 / business / month',
    description: 'For customers operating more than one business under their OPERON account.',
  },
] as const;

export const phaseOneAddOns = [
  {
    name: 'Social Publisher Pro',
    status: 'Phase 1',
    description: 'Social publishing, campaign, approval, and CRM-connected marketing workflows included in the Phase 1 rollout. Availability can depend on provider/API certification and account eligibility during beta.',
  },
] as const;

export const phaseTwoAddOns = [
  {
    name: 'Phone System',
    status: 'Coming Soon',
    description: 'Telnyx-first business phone capability. Usage/provider charges will be covered by add-on or pass-through pricing.',
  },
  {
    name: 'Geofencing / Location Marketing',
    status: 'Coming Soon',
    description: 'Location-based marketing and geofencing offered separately from the base CRM. Final customer pricing is still being set.',
  },
] as const;

export const clientPaidThirdPartyServices = [
  'QuickBooks',
  'Gusto',
  'DocuSign',
  'Slack and similar external services',
] as const;

export type PricingPlan = {
  name: string;
  monthlyPrice: number | null;
  description: string;
  highlighted?: boolean;
  features: string[];
};

export type PricingFamily = {
  id: string;
  name: string;
  description: string;
  servicePath: string;
  plans: PricingPlan[];
};

export type AddOn = {
  name: string;
  price: string;
  description: string;
  category: 'Capacity' | 'Growth' | 'Operations' | 'Branding' | 'Phase 2';
  setupFee?: string;
  phaseTwo?: boolean;
};

export const ANNUAL_DISCOUNT_PERCENT = 10;
export const COMBO_DISCOUNT_PERCENT = 15;

export const pricingRules = {
  annual: 'Save 10% when the full year is paid in advance.',
  combo: 'Save 15% on the qualifying add-on subtotal when 2 or more eligible OPERON add-ons are purchased together.',
  lockout: 'Automatic discounts do not stack. The customer receives the best eligible automatic discount.',
} as const;

export const annualPrice = (monthlyPrice: number) => Math.round(monthlyPrice * 12 * 0.9);

export const pricingFamilies: PricingFamily[] = [
  {
    id: 'small-business',
    name: 'Small Business CRM',
    description: 'Core CRM, office operations, automation, and customer-management tools for service businesses and growing teams.',
    servicePath: '/small-business-crm',
    plans: [
      { name: 'Starter', monthlyPrice: 29, description: 'A clean CRM foundation for small teams.', features: ['Contacts, leads, deals and pipeline', 'Tasks, notes and activity history', 'Basic reporting and customer records'] },
      { name: 'Growth', monthlyPrice: 49, description: 'Adds team workflows and more automation.', features: ['Everything in Starter', 'Team scheduling and shared workflows', 'Expanded automation and follow-up tools'] },
      { name: 'Pro', monthlyPrice: 79, description: 'Adds Office Management for a more complete operating system.', highlighted: true, features: ['Everything in Growth', 'Office Management', 'Staff, calendars, documents and approvals', 'Advanced reporting and workflow controls'] },
      { name: 'Elite', monthlyPrice: 99, description: 'Advanced operations for businesses managing more moving parts.', features: ['Everything in Pro', 'Advanced operations management', 'Higher-capacity workflow controls', 'Priority operational tooling'] },
      { name: 'White-Label', monthlyPrice: 199, description: 'A client-branded OPERON experience.', features: ['Everything in Elite', 'White-label platform capability', 'Branding and client-facing customization', 'Custom-domain eligibility; setup fee applies'] },
    ],
  },
  {
    id: 'restaurant-retail',
    name: 'Restaurant / Retail / Clubs CRM + POS',
    description: 'CRM, POS and operations for restaurants, retail stores, bars, nightclubs, hospitality concepts, and clubs.',
    servicePath: '/restaurant-retail-crm',
    plans: [
      { name: 'Starter', monthlyPrice: null, description: 'Single-location CRM + POS. Launch price being finalized.', features: ['Customer CRM and POS workflows', 'Products, orders and basic inventory', 'Single-location reporting'] },
      { name: 'Growth', monthlyPrice: null, description: 'Adds loyalty, marketing and stronger operations.', features: ['Everything in Starter', 'Loyalty and customer marketing', 'Expanded inventory and staff workflows'] },
      { name: 'Pro', monthlyPrice: null, description: 'Adds Office/Operations Management.', highlighted: true, features: ['Everything in Growth', 'Office/Operations Management', 'Advanced staff, scheduling and purchasing workflows', 'Expanded analytics and controls'] },
      { name: 'Elite', monthlyPrice: null, description: 'Adds advanced venue and club operations.', features: ['Everything in Pro', 'Venue / Club Operations Management', 'Advanced reservation, event and location workflows', 'Higher-capacity inventory and reporting'] },
      { name: 'White-Label / Enterprise', monthlyPrice: null, description: 'Multi-location and branded enterprise deployment.', features: ['Everything in Elite', 'Multi-location management', 'White-label/custom-domain options', 'Custom implementation and support'] },
    ],
  },
  {
    id: 'professional',
    name: 'Professional CRM',
    description: 'Flexible professional-services CRM for firms and practices that do not require a dedicated industry workflow.',
    servicePath: '/platform',
    plans: [
      { name: 'Self-Employed', monthlyPrice: 49, description: 'For solo professionals.', features: ['CRM and contact management', 'Deals, tasks and activity history', 'Basic professional workflows'] },
      { name: 'Small Business', monthlyPrice: 69, description: 'Adds shared team workflows.', features: ['Everything in Self-Employed', 'Team collaboration', 'Expanded reporting and automation'] },
      { name: 'Growth', monthlyPrice: 99, description: 'Adds Office Management and client-facing workflows.', features: ['Everything in Small Business', 'Office Management', 'Documents, approvals and shared calendars'] },
      { name: 'Business', monthlyPrice: 149, description: 'Advanced firm operations.', highlighted: true, features: ['Everything in Growth', 'Advanced operational controls', 'Expanded analytics and automation', 'Priority workflow capability'] },
      { name: 'White-Label', monthlyPrice: 299, description: 'Branded professional CRM.', features: ['Everything in Business', 'White-label capability', 'Custom-domain eligibility; setup fee applies', 'Branded client experience'] },
      { name: 'Enterprise', monthlyPrice: null, description: 'Custom scope for larger organizations.', features: ['Everything in White-Label', 'Custom users, integrations and security', 'Custom implementation and support'] },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate CRM',
    description: 'Dedicated real-estate workflows for contacts, listings, deals, documents, marketing and transaction pipelines.',
    servicePath: '/real-estate',
    plans: [
      { name: 'Agent', monthlyPrice: null, description: 'Individual-agent workflow. Launch price being finalized.', features: ['Contacts and lead pipeline', 'Listings and transaction tracking', 'Tasks, notes and documents'] },
      { name: 'Team', monthlyPrice: null, description: 'Shared team workflow.', features: ['Everything in Agent', 'Team lead routing and collaboration', 'Shared calendars and pipeline visibility'] },
      { name: 'Brokerage', monthlyPrice: null, description: 'Adds Brokerage / Office Management.', highlighted: true, features: ['Everything in Team', 'Brokerage / Office Management', 'Agent oversight, approvals and reporting', 'Expanded document and transaction controls'] },
      { name: 'Elite', monthlyPrice: null, description: 'Advanced brokerage operations.', features: ['Everything in Brokerage', 'Advanced multi-office workflows', 'Higher-capacity reporting and automation'] },
      { name: 'White-Label / Enterprise', monthlyPrice: null, description: 'Branded multi-office deployment.', features: ['Everything in Elite', 'White-label/custom-domain options', 'Custom integrations and implementation'] },
    ],
  },
  {
    id: 'mortgage',
    name: 'Mortgage CRM',
    description: 'Borrower, loan-pipeline, document, milestone, referral and closing workflows for mortgage teams.',
    servicePath: '/mortgage',
    plans: [
      { name: 'Loan Officer', monthlyPrice: null, description: 'Individual loan-officer workflow. Launch price being finalized.', features: ['Borrower CRM and loan pipeline', 'Milestones, tasks and referral tracking', 'Document workflow'] },
      { name: 'Team', monthlyPrice: null, description: 'Shared mortgage team workflow.', features: ['Everything in Loan Officer', 'Team pipeline and collaboration', 'Shared calendars and follow-up'] },
      { name: 'Branch', monthlyPrice: null, description: 'Adds Branch / Office Management.', highlighted: true, features: ['Everything in Team', 'Branch / Office Management', 'Staff, approvals and production reporting', 'Expanded automation'] },
      { name: 'Elite', monthlyPrice: null, description: 'Advanced branch and multi-team operations.', features: ['Everything in Branch', 'Advanced branch controls', 'Higher-capacity reporting and workflow management'] },
      { name: 'White-Label / Enterprise', monthlyPrice: null, description: 'Custom branded mortgage deployment.', features: ['Everything in Elite', 'White-label/custom-domain options', 'Custom integrations and implementation'] },
    ],
  },
  {
    id: 'social-publisher',
    name: 'Social Publisher Pro',
    description: 'Social publishing, campaigns, approvals, analytics and CRM-connected marketing workflows.',
    servicePath: '/social-publisher-pro',
    plans: [
      { name: 'Starter', monthlyPrice: 49, description: 'For individual marketers and small brands.', features: ['Content calendar and publishing workflow', 'Campaign organization', 'Basic analytics'] },
      { name: 'Growth', monthlyPrice: 99, description: 'Adds team collaboration and stronger campaign control.', features: ['Everything in Starter', 'Approvals and collaboration', 'Expanded scheduling and campaign workflows'] },
      { name: 'Pro', monthlyPrice: 149, description: 'Advanced publishing and analytics.', highlighted: true, features: ['Everything in Growth', 'Advanced analytics and automation', 'Team and client workflow controls'] },
      { name: 'White-Label', monthlyPrice: 249, description: 'For agencies and operators needing a branded experience.', features: ['Everything in Pro', 'White-label capability', 'Branded client-facing workflows', 'Custom-domain eligibility; setup fee applies'] },
    ],
  },
  {
    id: 'sports',
    name: 'Sports & Fitness CRM',
    description: 'Rosters, scheduling, registrations, payments, portals and organization management for sports and fitness operators.',
    servicePath: '/sports',
    plans: [
      { name: 'Starter', monthlyPrice: 29, description: 'Core tools for smaller teams and trainers.', features: ['Roster and contact management', 'Scheduling and registration workflows', 'Basic payments and reporting'] },
      { name: 'Growth', monthlyPrice: 49, description: 'Adds expanded team workflows.', features: ['Everything in Starter', 'Team collaboration and portals', 'Expanded payment and communication tools'] },
      { name: 'Pro', monthlyPrice: 79, description: 'Adds Office Management.', highlighted: true, features: ['Everything in Growth', 'Office Management', 'Staff, calendars, documents and approvals', 'Advanced organization workflows'] },
      { name: 'Elite', monthlyPrice: 99, description: 'Adds Gym Management for fitness facilities and larger operations.', features: ['Everything in Pro', 'Gym Management', 'Facility, membership and location workflows', 'Expanded operations and reporting'] },
      { name: 'White-Label', monthlyPrice: 199, description: 'Your branded sports or fitness platform.', features: ['Everything in Elite', 'White-label capability', 'Custom-domain eligibility; setup fee applies', 'Branded member/client experience'] },
    ],
  },
  {
    id: 'gun-ffl',
    name: 'Gun / FFL CRM',
    description: 'Dedicated FFL retail, inventory, customer, POS and compliance-support workflows.',
    servicePath: '/gun-ffl-crm',
    plans: [
      { name: 'Starter', monthlyPrice: null, description: 'Core FFL business system. Launch price being finalized.', features: ['Customer CRM and inventory workflows', 'Sales and task tracking', 'Basic compliance-support records'] },
      { name: 'Growth', monthlyPrice: null, description: 'Adds stronger retail and operational workflows.', features: ['Everything in Starter', 'Expanded inventory and POS workflows', 'Staff and reporting capability'] },
      { name: 'Pro', monthlyPrice: null, description: 'Adds Office Management.', highlighted: true, features: ['Everything in Growth', 'Office Management', 'Advanced staff, purchasing and reporting workflows', 'Expanded operational controls'] },
      { name: 'Elite', monthlyPrice: null, description: 'Adds Gun Range Management.', features: ['Everything in Pro', 'Gun Range Management', 'Range, lane, membership and facility workflows', 'Multi-location operational capability'] },
      { name: 'White-Label / Enterprise', monthlyPrice: null, description: 'Custom branded FFL/range deployment.', features: ['Everything in Elite', 'White-label/custom-domain options', 'Custom implementation and integrations'] },
    ],
  },
];

export const addOnCatalog: AddOn[] = [
  { name: 'Extra Storage · 50 GB', price: '$19/mo', description: 'Additional managed file and document capacity.', category: 'Capacity' },
  { name: 'Extra Storage · 100 GB', price: '$29/mo', description: 'Additional managed file and document capacity.', category: 'Capacity' },
  { name: 'Extra Storage · 250 GB', price: '$59/mo', description: 'Additional managed file and document capacity.', category: 'Capacity' },
  { name: 'Extra Storage · 500 GB', price: '$99/mo', description: 'Additional managed file and document capacity.', category: 'Capacity' },
  { name: 'Extra Storage · 1 TB', price: '$179/mo', description: 'High-capacity storage expansion.', category: 'Capacity' },
  { name: 'Extra Contacts · 5,000', price: '$19/mo', description: 'Expand client/contact capacity without changing the base system.', category: 'Capacity' },
  { name: 'Extra Contacts · 25,000', price: '$49/mo', description: 'Expanded contact capacity for growing databases.', category: 'Capacity' },
  { name: 'Extra Contacts · 100,000', price: '$129/mo', description: 'High-volume client/contact capacity.', category: 'Capacity' },
  { name: 'Extra Email · 10,000/mo', price: '$19/mo', description: 'Additional monthly outbound email capacity.', category: 'Capacity' },
  { name: 'Extra Email · 25,000/mo', price: '$49/mo', description: 'Additional monthly outbound email capacity.', category: 'Capacity' },
  { name: 'Extra Email · 50,000/mo', price: '$89/mo', description: 'Additional monthly outbound email capacity.', category: 'Capacity' },
  { name: 'Extra Email · 100,000/mo', price: '$169/mo', description: 'High-volume monthly outbound email capacity.', category: 'Capacity' },
  { name: 'AI Boost', price: '$25/mo', description: 'Entry OPERON AI Credit Pack for lighter AI-assisted workflows.', category: 'Capacity' },
  { name: 'AI Plus', price: '$59/mo', description: 'Expanded OPERON AI Credit Pack.', category: 'Capacity' },
  { name: 'AI Pro', price: '$129/mo', description: 'High-usage OPERON AI Credit Pack.', category: 'Capacity' },
  { name: 'AI Power', price: '$249/mo', description: 'Heavy-use OPERON AI Credit Pack.', category: 'Capacity' },
  { name: 'Additional Standard User', price: '$10/user/mo', description: 'Additional standard seat beyond the included tier allowance.', category: 'Capacity' },
  { name: 'Additional Manager / Admin', price: '$15/user/mo', description: 'Additional higher-permission seat.', category: 'Capacity' },
  { name: 'Additional Business', price: '$19/mo', description: 'Add another business entity under the OPERON account.', category: 'Capacity' },
  { name: 'Operational Location', price: '$49–$99/location/mo', description: 'Additional POS, inventory, facility or operational location; price depends on the system.', category: 'Operations' },
  { name: 'Lead Generation', price: 'From $59/mo', description: 'Lead capture, scoring, routing, enrichment and conversion workflows.', category: 'Growth' },
  { name: 'Reputation Management', price: '$49 / $99 / $179 / $299', description: 'Review monitoring, requests, response assistance, analytics and multi-location reputation workflows.', category: 'Growth' },
  { name: 'Operon Geofence', price: '$99 / $199 / $399 / $749', description: 'Location intelligence, targeting, campaigns, attribution and multi-location geofence workflows. Media spend is separate.', category: 'Growth', setupFee: 'Optional managed campaign setup from $199' },
  { name: 'Social Publisher Pro', price: '$49 / $99 / $149 / $249', description: 'Publishing, campaigns, approvals, analytics and CRM-connected social workflows.', category: 'Growth' },
  { name: 'POS System', price: 'From $99/location/mo', description: 'CRM-connected point of sale, inventory, reporting and operational workflows.', category: 'Operations', setupFee: 'Setup from $299; advanced and multi-location setup priced higher' },
  { name: 'E-Commerce', price: 'From $49/mo', description: 'Storefront, catalog, order and customer workflows connected to OPERON.', category: 'Operations' },
  { name: 'Gym Management', price: 'From $99/mo', description: 'Facility, membership, scheduling, staff and gym-operation workflows. Included in qualifying Elite Sports & Fitness configurations.', category: 'Operations' },
  { name: 'Gun Range Management', price: 'From $149/mo', description: 'Range, lane, membership, facility and operational workflows. Included in qualifying Elite Gun / FFL configurations.', category: 'Operations' },
  { name: 'Custom Domain', price: '$29/mo', description: 'Use a customer-owned domain for qualifying OPERON experiences.', category: 'Branding', setupFee: '$149 setup' },
  { name: 'Branding Plus', price: '$99/mo', description: 'Custom domain, logo, colors and branded communications.', category: 'Branding', setupFee: '$499 setup' },
  { name: 'White-Label Platform', price: 'From $199/mo', description: 'Deeper branding and client-facing white-label capability; pricing varies by service.', category: 'Branding', setupFee: 'From $999 setup' },
  { name: 'Phone System', price: 'Pricing TBD', description: 'Telnyx-first business phone capability. Provider and usage charges will be separate or passed through.', category: 'Phase 2', phaseTwo: true },
];

export const recommendedStacks = [
  { system: 'Small Business CRM', items: ['Office Management', 'Social Publisher Pro', 'Lead Generation', 'Reputation Management'] },
  { system: 'Restaurant / Retail / Clubs', items: ['Office/Operations Management', 'Extra Location', 'Operon Geofence', 'Social Publisher Pro', 'Extra Storage', 'POS'] },
  { system: 'Real Estate CRM', items: ['Brokerage/Office Management', 'Social Publisher Pro', 'Lead Generation', 'Operon Geofence', 'Extra Storage'] },
  { system: 'Mortgage CRM', items: ['Branch/Office Management', 'Lead Generation', 'Social Publisher Pro', 'Extra Storage', 'Extra Email Capacity'] },
  { system: 'Healthcare / Legal', items: ['Office/Practice Management', 'Extra Storage', 'Extra Users', 'Client Billing / Document Capacity', 'Additional Locations'] },
  { system: 'Sports & Fitness', items: ['Office Management', 'Gym Management', 'Social Publisher Pro', 'Extra Storage', 'Extra Users / Locations'] },
  { system: 'Gun / FFL', items: ['Office Management', 'Gun Range Management', 'Extra Location', 'Extra Storage', 'POS / Multi-Location', 'Social Publisher Pro'] },
  { system: 'E-Commerce', items: ['Operations Management', 'Reputation Management', 'Social Publisher Pro', 'Lead Generation', 'Extra Email Capacity'] },
] as const;

export const confirmedAddOns = [
  { name: 'Additional Standard User', price: '$10 / user / month', description: 'Charged per additional standard seat beyond the tier allowance.' },
  { name: 'Additional Manager / Admin', price: '$15 / user / month', description: 'Higher-permission seat beyond the tier allowance.' },
  { name: 'Additional Business', price: '$19 / month', description: 'Add another business entity under the OPERON account.' },
] as const;

export const currentProducts = [
  { name: 'Social Publisher Pro', description: 'Dedicated social publishing and marketing system with its own $49 / $99 / $149 / $249 tiers.' },
  { name: 'Operon Geofence', description: 'Location intelligence and campaign capability with $99 / $199 / $399 / $749 standard tiers.' },
] as const;

export const phaseTwoAddOns = [
  { name: 'Phone System', status: 'Phase 2 · Coming Soon', description: 'Telnyx-first business phone capability. Usage/provider charges will be covered by add-on or pass-through pricing.' },
] as const;

export const clientPaidThirdPartyServices = ['QuickBooks', 'Gusto', 'DocuSign', 'Slack', 'Google Workspace', 'Microsoft 365', 'payment-provider fees', 'advertising/media spend', 'telecommunications usage'] as const;

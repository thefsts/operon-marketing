import { pricingFamilies, type PricingFamily, type PricingPlan } from './pricing';

const plan = (name: string, monthlyPrice: number, description: string, features: string[], highlighted = false): PricingPlan => ({
  name,
  monthlyPrice,
  description,
  features,
  ...(highlighted ? { highlighted: true } : {}),
});

const realEstateMortgage: PricingFamily = {
  id: 'real-estate-mortgage',
  name: 'Real Estate + Mortgage CRM',
  description: 'One OPERON pricing family for real-estate and mortgage professionals, with transaction, borrower, referral, document, office and production workflows that expand as the business grows.',
  servicePath: '/real-estate',
  plans: [
    plan('Starter', 49, 'For individual agents, loan officers and smaller operators getting their pipeline organized.', [
      'Contact, lead and referral CRM',
      'Real-estate transaction or mortgage loan pipeline',
      'Tasks, notes and activity history',
      'Basic document workflow',
      'Basic reporting and follow-up',
    ]),
    plan('Growth', 69, 'For growing professionals who need shared workflows and stronger follow-up.', [
      'Everything in Starter',
      'Shared team pipeline and collaboration',
      'Expanded calendars and follow-up workflows',
      'Lead and referral routing',
      'Expanded document and milestone tracking',
    ]),
    plan('Pro', 99, 'For teams that need office-level management, automation and stronger reporting.', [
      'Everything in Growth',
      'Office Management',
      'Agent or loan-team oversight',
      'Approvals and advanced workflow controls',
      'Expanded automation and production reporting',
    ], true),
    plan('Elite', 149, 'For brokerages, branches and larger teams managing more volume and operational complexity.', [
      'Everything in Pro',
      'Brokerage / Branch Management',
      'Advanced transaction and loan workflow controls',
      'Higher-capacity automation and reporting',
      'Multi-team operational visibility',
    ]),
    plan('White Label', 299, 'For organizations that want a branded OPERON experience and advanced deployment options.', [
      'Everything in Elite',
      'White-label platform capability',
      'Branded client-facing experience',
      'Custom-domain eligibility; setup may apply',
      'Advanced implementation options',
    ]),
  ],
};

const restaurantRetailClubs: PricingFamily = {
  id: 'restaurant-retail',
  name: 'Restaurant / Retail / Clubs CRM + POS',
  description: 'CRM, POS, inventory and venue operations for restaurants, retailers, bars, nightclubs, hospitality concepts and clubs.',
  servicePath: '/restaurant-retail-crm',
  plans: [
    plan('Starter', 69, 'For a smaller operation that needs CRM-connected POS and day-to-day sales visibility.', ['Customer CRM and POS workflows', 'Products, orders and basic inventory', 'Single-location reporting', 'Basic staff and customer records']),
    plan('Growth', 99, 'Adds stronger customer retention, inventory and team workflows.', ['Everything in Starter', 'Loyalty and customer marketing workflows', 'Expanded inventory controls', 'Expanded staff workflows', 'Operational reporting']),
    plan('Pro', 149, 'Adds Office and Operations Management for a more complete business system.', ['Everything in Growth', 'Office / Operations Management', 'Advanced staff and scheduling workflows', 'Purchasing and inventory workflows', 'Expanded analytics and controls'], true),
    plan('Elite', 199, 'Adds advanced venue, club and higher-volume operational capability.', ['Everything in Pro', 'Venue / Club Operations Management', 'Reservation and event workflows', 'Higher-capacity inventory and reporting', 'Expanded location operations']),
    plan('White Label', 299, 'For branded and advanced hospitality, retail or club deployments.', ['Everything in Elite', 'White-label platform capability', 'Branded customer experience', 'Custom-domain eligibility; setup may apply', 'Advanced implementation options']),
  ],
};

const ecommerce: PricingFamily = {
  id: 'e-commerce',
  name: 'E-Commerce CRM',
  description: 'Customer, catalog, order, inventory, fulfillment and retention workflows that keep commerce connected to OPERON CRM.',
  servicePath: '/e-commerce',
  plans: [
    plan('Starter', 49, 'For smaller online sellers that need customers and orders connected in one operating view.', ['Customer and order history', 'Catalog and product workflows', 'Basic inventory visibility', 'Commerce follow-up', 'Basic reporting']),
    plan('Growth', 79, 'Adds stronger retention, marketing and operational workflows.', ['Everything in Starter', 'Expanded inventory workflows', 'Customer segmentation and follow-up', 'Marketing workflow connections', 'Expanded reporting']),
    plan('Pro', 119, 'For growing commerce teams that need automation and stronger operational control.', ['Everything in Growth', 'Advanced commerce workflow automation', 'Team and approval workflows', 'Expanded inventory and order controls', 'Advanced reporting and customer insight'], true),
    plan('Elite', 169, 'For higher-volume commerce operations managing more products, people and workflows.', ['Everything in Pro', 'Advanced operations management', 'Higher-capacity catalog and inventory workflows', 'Expanded team controls', 'Multi-operation reporting']),
    plan('White Label', 299, 'For branded commerce operations and advanced deployments.', ['Everything in Elite', 'White-label platform capability', 'Branded customer-facing experience', 'Custom-domain eligibility; setup may apply', 'Advanced implementation options']),
  ],
};

const gunFfl: PricingFamily = {
  id: 'gun-ffl',
  name: 'Gun / FFL CRM',
  description: 'Customer, inventory, POS, office and range-management workflows for licensed firearms businesses.',
  servicePath: '/gun-ffl-crm',
  plans: [
    plan('Starter', 49, 'For smaller licensed businesses that need core CRM, inventory and sales workflows.', ['Customer CRM and inventory workflows', 'Sales and task tracking', 'Basic POS workflow support', 'Basic compliance-support records', 'Basic reporting']),
    plan('Growth', 79, 'Adds stronger retail, inventory and staff workflows.', ['Everything in Starter', 'Expanded inventory and POS workflows', 'Staff workflow capability', 'Purchasing workflow support', 'Expanded reporting']),
    plan('Pro', 119, 'Adds Office Management and advanced operational controls.', ['Everything in Growth', 'Office Management', 'Advanced staff and purchasing workflows', 'Expanded operational controls', 'Advanced reporting'], true),
    plan('Elite', 169, 'Adds Gun Range Management and more advanced facility operations.', ['Everything in Pro', 'Gun Range Management', 'Range, lane and membership workflows', 'Facility operations', 'Expanded multi-location capability']),
    plan('White Label', 299, 'For branded FFL and range operations needing advanced deployment options.', ['Everything in Elite', 'White-label platform capability', 'Branded customer-facing experience', 'Custom-domain eligibility; setup may apply', 'Advanced implementation options']),
  ],
};

const replacedIds = new Set(['real-estate', 'mortgage', 'restaurant-retail', 'gun-ffl']);
const retainedFamilies = pricingFamilies.filter((family) => !replacedIds.has(family.id));

export const approvedPricingFamilies: PricingFamily[] = [
  ...retainedFamilies.slice(0, 1),
  restaurantRetailClubs,
  ...retainedFamilies.slice(1, 2),
  realEstateMortgage,
  ecommerce,
  ...retainedFamilies.slice(2, 4),
  gunFfl,
];

import { pricingFamilies, type PricingFamily, type PricingPlan } from './pricing';

const plan = (
  name: string,
  monthlyPrice: number | null,
  description: string,
  features: string[],
  highlighted = false,
): PricingPlan => ({
  name,
  monthlyPrice,
  description,
  features,
  ...(highlighted ? { highlighted: true } : {}),
});

const requireFamily = (id: string): PricingFamily => {
  const family = pricingFamilies.find((item) => item.id === id);
  if (!family) throw new Error(`Missing pricing family: ${id}`);
  return family;
};

const smallBusiness = requireFamily('small-business');
const professional = requireFamily('professional');
const socialPublisher = requireFamily('social-publisher');
const sports = requireFamily('sports');

const restaurantRetailClubs: PricingFamily = {
  id: 'restaurant-retail',
  name: 'Restaurant / Retail / Clubs CRM + POS',
  description:
    'CRM, POS, inventory and venue operations for restaurants, retailers, bars, nightclubs, hospitality concepts and clubs.',
  servicePath: '/restaurant-retail-crm',
  plans: [
    plan(
      'Starter',
      69,
      'For a smaller operation that needs CRM-connected POS and day-to-day sales visibility.',
      [
        'Customer CRM and POS workflows',
        'Products, orders and basic inventory',
        'Single-location reporting',
        'Basic staff and customer records',
      ],
    ),
    plan(
      'Growth',
      99,
      'Adds stronger customer retention, inventory and team workflows.',
      [
        'Everything in Starter',
        'Loyalty and customer marketing workflows',
        'Expanded inventory controls',
        'Expanded staff workflows',
        'Operational reporting',
      ],
    ),
    plan(
      'Pro',
      150,
      'Advanced restaurant and retail operations with stronger management controls.',
      [
        'Everything in Growth',
        'Office / Operations Management',
        'Advanced staff and scheduling workflows',
        'Purchasing and inventory workflows',
        'Expanded analytics and controls',
      ],
      true,
    ),
    plan(
      'White Label',
      199,
      'For branded restaurant, retail, hospitality or club deployments.',
      [
        'Everything in Pro',
        'White-label platform capability',
        'Branded customer experience',
        'Custom-domain eligibility; setup may apply',
        'Advanced implementation options',
      ],
    ),
  ],
};

const realEstate: PricingFamily = {
  id: 'real-estate',
  name: 'Real Estate CRM',
  description:
    'CRM, transaction, referral, document, office and production workflows for agents, teams and brokerages.',
  servicePath: '/real-estate',
  plans: [
    plan('Starter', 49, 'For individual agents and smaller operators getting their pipeline organized.', [
      'Contact, lead and referral CRM',
      'Real-estate transaction pipeline',
      'Tasks, notes and activity history',
      'Basic document workflow',
      'Basic reporting and follow-up',
    ]),
    plan('Growth', 69, 'For growing real-estate teams that need shared workflows and stronger follow-up.', [
      'Everything in Starter',
      'Shared team pipeline and collaboration',
      'Expanded calendars and follow-up workflows',
      'Lead and referral routing',
      'Expanded document and milestone tracking',
    ]),
    plan('Pro', 99, 'For teams that need office-level management, automation and stronger reporting.', [
      'Everything in Growth',
      'Office Management',
      'Agent and team oversight',
      'Approvals and advanced workflow controls',
      'Expanded automation and production reporting',
    ], true),
    plan('Elite', 149, 'For brokerages and larger teams managing more volume and operational complexity.', [
      'Everything in Pro',
      'Brokerage Management',
      'Advanced transaction workflow controls',
      'Higher-capacity automation and reporting',
      'Multi-team operational visibility',
    ]),
    plan('White Label', 299, 'For organizations that want a branded OPERON real-estate experience.', [
      'Everything in Elite',
      'White-label platform capability',
      'Branded client-facing experience',
      'Custom-domain eligibility; setup may apply',
      'Advanced implementation options',
    ]),
  ],
};

const mortgage: PricingFamily = {
  id: 'mortgage',
  name: 'Mortgage CRM',
  description:
    'Borrower, loan-pipeline, referral, document, milestone, branch and production workflows for mortgage professionals.',
  servicePath: '/mortgage',
  plans: [
    plan('Starter', 49, 'For individual loan officers and smaller operators getting their pipeline organized.', [
      'Borrower and referral CRM',
      'Mortgage loan pipeline',
      'Tasks, notes and activity history',
      'Basic document workflow',
      'Basic reporting and follow-up',
    ]),
    plan('Growth', 69, 'For growing mortgage teams that need shared workflows and stronger follow-up.', [
      'Everything in Starter',
      'Shared team pipeline and collaboration',
      'Expanded calendars and follow-up workflows',
      'Lead and referral routing',
      'Expanded document and milestone tracking',
    ]),
    plan('Pro', 99, 'For teams that need branch-level management, automation and stronger reporting.', [
      'Everything in Growth',
      'Office / Branch Management',
      'Loan-team oversight',
      'Approvals and advanced workflow controls',
      'Expanded automation and production reporting',
    ], true),
    plan('Elite', 149, 'For branches and larger mortgage teams managing more volume and operational complexity.', [
      'Everything in Pro',
      'Advanced branch management',
      'Advanced loan workflow controls',
      'Higher-capacity automation and reporting',
      'Multi-team operational visibility',
    ]),
    plan('White Label', 299, 'For organizations that want a branded OPERON mortgage experience.', [
      'Everything in Elite',
      'White-label platform capability',
      'Branded client-facing experience',
      'Custom-domain eligibility; setup may apply',
      'Advanced implementation options',
    ]),
  ],
};

const healthcare: PricingFamily = {
  ...professional,
  id: 'healthcare',
  name: 'Healthcare CRM',
  description:
    'Professional CRM pricing for healthcare business and practice operations, with non-clinical relationship, office and workflow management.',
  servicePath: '/healthcare',
};

const legal: PricingFamily = {
  ...professional,
  id: 'legal',
  name: 'Legal CRM',
  description:
    'Professional CRM pricing for legal firms and practices, with client, matter, document, deadline and office workflows.',
  servicePath: '/legal',
};

const ecommerce: PricingFamily = {
  id: 'e-commerce',
  name: 'E-Commerce CRM',
  description:
    'Customer, catalog, order, inventory, fulfillment and retention workflows that keep commerce connected to OPERON CRM.',
  servicePath: '/e-commerce',
  plans: [
    plan('Starter', 49, 'For smaller online sellers that need customers and orders connected in one operating view.', [
      'Customer and order history',
      'Catalog and product workflows',
      'Basic inventory visibility',
      'Commerce follow-up',
      'Basic reporting',
    ]),
    plan('Growth', 79, 'Adds stronger retention, marketing and operational workflows.', [
      'Everything in Starter',
      'Expanded inventory workflows',
      'Customer segmentation and follow-up',
      'Marketing workflow connections',
      'Expanded reporting',
    ]),
    plan('Pro', 119, 'For growing commerce teams that need automation and stronger operational control.', [
      'Everything in Growth',
      'Advanced commerce workflow automation',
      'Team and approval workflows',
      'Expanded inventory and order controls',
      'Advanced reporting and customer insight',
    ], true),
    plan('Elite', 169, 'For higher-volume commerce operations managing more products, people and workflows.', [
      'Everything in Pro',
      'Advanced operations management',
      'Higher-capacity catalog and inventory workflows',
      'Expanded team controls',
      'Multi-operation reporting',
    ]),
    plan('White Label', 299, 'For branded commerce operations and advanced deployments.', [
      'Everything in Elite',
      'White-label platform capability',
      'Branded customer-facing experience',
      'Custom-domain eligibility; setup may apply',
      'Advanced implementation options',
    ]),
  ],
};

const gunFfl: PricingFamily = {
  id: 'gun-ffl',
  name: 'Gun / FFL CRM',
  description:
    'Customer, inventory, POS, office and range-management workflows for licensed firearms businesses.',
  servicePath: '/gun-ffl-crm',
  plans: [
    plan('Starter', 49, 'For smaller licensed businesses that need core CRM, inventory and sales workflows.', [
      'Customer CRM and inventory workflows',
      'Sales and task tracking',
      'Basic POS workflow support',
      'Basic compliance-support records',
      'Basic reporting',
    ]),
    plan('Growth', 79, 'Adds stronger retail, inventory and staff workflows.', [
      'Everything in Starter',
      'Expanded inventory and POS workflows',
      'Staff workflow capability',
      'Purchasing workflow support',
      'Expanded reporting',
    ]),
    plan('Pro', 119, 'Adds Office Management and advanced operational controls.', [
      'Everything in Growth',
      'Office Management',
      'Advanced staff and purchasing workflows',
      'Expanded operational controls',
      'Advanced reporting',
    ], true),
    plan('Elite', 169, 'Adds Gun Range Management and more advanced facility operations.', [
      'Everything in Pro',
      'Gun Range Management',
      'Range, lane and membership workflows',
      'Facility operations',
      'Expanded multi-location capability',
    ]),
    plan('White Label', 299, 'For branded FFL and range operations needing advanced deployment options.', [
      'Everything in Elite',
      'White-label platform capability',
      'Branded customer-facing experience',
      'Custom-domain eligibility; setup may apply',
      'Advanced implementation options',
    ]),
  ],
};

const cannabis: PricingFamily = {
  id: 'cannabis',
  name: 'Cannabis CRM',
  description:
    'CRM, regulated retail operations, customer workflows, inventory, delivery coordination and compliance-ready business operations for cannabis businesses.',
  servicePath: '/cannabis',
  plans: [
    plan('Starter', null, 'Core OPERON cannabis business workflows for a single regulated operation.', [
      'Customer and relationship CRM',
      'Retail and order workflow support',
      'Inventory and location operations',
      'Business reporting',
      'Compliance-ready operational records',
    ]),
    plan('Growth', null, 'Expanded team, inventory and customer operations for growing cannabis businesses.', [
      'Everything in Starter',
      'Expanded team workflows',
      'Multi-department operating visibility',
      'Customer retention workflows',
      'Expanded reporting',
    ]),
    plan('Pro', null, 'Advanced operational controls for regulated cannabis businesses.', [
      'Everything in Growth',
      'Office and operations management',
      'Advanced inventory and workflow controls',
      'Delivery coordination workflows',
      'Expanded management reporting',
    ], true),
    plan('Enterprise', null, 'For larger and multi-location cannabis operators requiring scoped deployment and integrations.', [
      'Everything in Pro',
      'Multi-location operating model',
      'Advanced implementation options',
      'Integration planning',
      'Custom deployment scope',
    ]),
  ],
};

export const approvedPricingFamilies: PricingFamily[] = [
  smallBusiness,
  restaurantRetailClubs,
  realEstate,
  mortgage,
  healthcare,
  legal,
  sports,
  gunFfl,
  ecommerce,
  cannabis,
  socialPublisher,
];

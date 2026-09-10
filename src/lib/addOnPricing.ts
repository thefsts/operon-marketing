export type CommercialAddOn = {
  name: string;
  price?: string;
  description: string;
  category: 'Account Expansion' | 'JONNIE AI' | 'Social & Promotion' | 'Geofence' | 'Developer & AI Connectivity' | 'Intelligence & Reporting' | 'Automation, Email & Storage' | 'Documents & Integrations' | 'Professional Services' | 'Coming Soon';
  note?: string;
  comingSoon?: boolean;
};

export const commercialAddOns: CommercialAddOn[] = [
  { name: 'Additional Business — Standard Plans', price: '50% of selected CRM tier / month', description: 'Each extra business receives its own workspace, data, pipeline, projects, invoicing, reporting, and settings.', category: 'Account Expansion' },
  { name: 'Additional Business — White Label', price: '$75 / business / month', description: 'Each additional business operating under the customer’s White Label environment.', category: 'Account Expansion' },
  { name: 'Additional User / Seat', price: '$10 / user / month', description: 'Extra employee or contractor access, subject to role-based permissions.', category: 'Account Expansion' },
  { name: 'White-Label Setup Service', price: '$499 one-time', description: 'Branding, domain/setup assistance, environment configuration, and launch support.', category: 'Account Expansion' },

  { name: 'JONNIE AI Plus', price: '$19 / month', description: 'Higher monthly AI allowance for heavier day-to-day use.', category: 'JONNIE AI' },
  { name: 'JONNIE AI Pro', price: '$39 / month', description: 'Expanded AI capacity for teams, automation, and content-heavy workflows.', category: 'JONNIE AI' },
  { name: 'JONNIE AI Power Pack', price: '$79 / month and up', description: 'High-volume AI capacity with provider-cost guardrails and owner monitoring.', category: 'JONNIE AI' },
  { name: 'Extra AI Usage', price: 'Usage-based', description: 'Additional capacity beyond included limits, priced to maintain margin over model/provider cost.', category: 'JONNIE AI' },

  { name: 'OPERON Social Publisher Pro', price: '$49 / month', description: 'Small-business social publishing, scheduling, calendar, analytics, and JONNIE-assisted content.', category: 'Social & Promotion' },
  { name: 'Social Publisher Pro Business', price: '$99 / month', description: 'More social accounts/brands, approvals, deeper analytics, campaign workflow, and paid-ad management tools.', category: 'Social & Promotion' },
  { name: 'Social Publisher Pro Agency', price: '$199 / month and up', description: 'Multi-business/client social management, team approvals, higher account limits, and consolidated reporting.', category: 'Social & Promotion' },
  { name: 'OPERON Promotion Network — Starter', price: '$99 / campaign or month', description: 'Entry promotional placement through the OPERON network; media inventory/reach rules apply.', category: 'Social & Promotion' },
  { name: 'OPERON Promotion Network — Growth', price: '$249 / campaign or month', description: 'Expanded placement, scheduling, and targeting.', category: 'Social & Promotion' },
  { name: 'OPERON Promotion Network — Pro', price: '$499 / campaign or month and up', description: 'Higher-volume or premium placement; final price may vary by reach and inventory.', category: 'Social & Promotion' },

  { name: 'Local Geofence Campaign', price: 'Starting at $1,000 + client budget', description: 'Single-market/local campaign setup and management. Client media/data budget is separate.', category: 'Geofence' },
  { name: 'Advanced / Multi-Location Geofence', price: '$1,500–$2,500+ + client budget', description: 'Multiple locations, more complex audiences, or extended campaign management.', category: 'Geofence' },
  { name: 'Enterprise / Event / Multi-Market Geofence', price: '$3,000+ custom + client budget', description: 'Large campaigns, events, multi-market targeting, advanced reporting, or custom requirements.', category: 'Geofence' },
  { name: 'Ongoing Geofence Management', price: '$500+ / month', description: 'Recurring campaign management after initial setup, depending on complexity and scope.', category: 'Geofence', note: 'Customer advertising, media, location-data, audience, map, impression, and vendor costs remain separately funded.' },

  { name: 'OPERON Developer Pro', price: '$29 / month', description: 'Advanced API keys, scoped permissions, webhooks, API logs, key rotation/revocation, and developer controls.', category: 'Developer & AI Connectivity' },
  { name: 'API Request Pack — 50K', price: '$10', description: 'Adds 50,000 API requests beyond the plan allowance.', category: 'Developer & AI Connectivity' },
  { name: 'API Request Pack — 250K', price: '$35', description: 'Adds 250,000 API requests.', category: 'Developer & AI Connectivity' },
  { name: 'API Request Pack — 1M', price: '$99', description: 'Adds 1,000,000 API requests, subject to infrastructure safeguards.', category: 'Developer & AI Connectivity' },
  { name: 'OPERON AI Gateway', price: '$79 / month', description: 'MCP/API gateway for approved external AI agents, scoped access, audit logging, and secure action controls.', category: 'Developer & AI Connectivity' },
  { name: 'AI Gateway Business', price: '$149 / month and up', description: 'Higher-volume AI-agent connectivity, more credentials, expanded logging, and enterprise controls.', category: 'Developer & AI Connectivity' },

  { name: 'OPERON Intelligence Pro', price: '$49 / month', description: 'Advanced BI, cross-module analytics, scheduled reports, executive dashboards, and deeper performance insights.', category: 'Intelligence & Reporting' },
  { name: 'Custom Executive Dashboard', price: '$49 / month per dashboard', description: 'Tailored KPI dashboard for owner, executive, or department use.', category: 'Intelligence & Reporting' },
  { name: 'Advanced Reporting Pack', price: '$29 / month', description: 'Custom report builder, scheduled delivery, complex filters, calculated fields, and advanced exports.', category: 'Intelligence & Reporting' },
  { name: 'Cross-Business Reporting', price: '$29 / month', description: 'Consolidated reporting across multiple business workspaces.', category: 'Intelligence & Reporting' },

  { name: 'Advanced Automations Pro', price: '$39 / month', description: 'Higher-value workflow automation, advanced triggers/actions, and expanded automation capacity.', category: 'Automation, Email & Storage' },
  { name: 'Automation Run Pack — 10K', price: '$15', description: 'Adds 10,000 automation runs.', category: 'Automation, Email & Storage' },
  { name: 'Automation Run Pack — 50K', price: '$49', description: 'Adds 50,000 automation runs.', category: 'Automation, Email & Storage' },
  { name: 'Email Marketing Pro', price: '$29 / month', description: 'Marketing-email campaign tools, segmentation, templates, analytics, and campaign workflows.', category: 'Automation, Email & Storage' },
  { name: 'Marketing Email Pack — 10K', price: '$15', description: 'Adds 10,000 marketing emails, subject to provider and compliance rules.', category: 'Automation, Email & Storage' },
  { name: 'Marketing Email Pack — 50K', price: '$49', description: 'Adds 50,000 marketing emails.', category: 'Automation, Email & Storage' },
  { name: 'Extra Storage — 25 GB', price: '$10 / month', description: 'Adds 25 GB of file/document storage.', category: 'Automation, Email & Storage' },
  { name: 'Extra Storage — 100 GB', price: '$29 / month', description: 'Adds 100 GB of file/document storage.', category: 'Automation, Email & Storage' },

  { name: 'Document & Proposal Pro', price: '$29 / month', description: 'Advanced proposal templates, reusable content, richer document workflows, and premium document controls.', category: 'Documents & Integrations' },
  { name: 'Advanced E-Signature', price: '$29 / month + provider usage if applicable', description: 'Premium signature workflows, routing, reminders, audit detail, and provider integrations.', category: 'Documents & Integrations' },
  { name: 'Advanced Client Portal', price: '$29 / month', description: 'Expanded client-facing workspace features and controls.', category: 'Documents & Integrations' },
  { name: 'Branded Client Portal', price: '$49 / month', description: 'Customer-branded portal experience beyond standard CRM branding.', category: 'Documents & Integrations' },
  { name: 'Premium Integrations Pack', price: '$39 / month', description: 'Premium connectors and deeper sync/automation features for external business systems.', category: 'Documents & Integrations' },
  { name: 'Advanced Forms & Lead Capture', price: '$19 / month', description: 'Higher-end forms, routing, conditional logic, and advanced lead capture.', category: 'Documents & Integrations' },

  { name: 'CRM Setup Service', price: 'Starting at $499', description: 'Hands-on implementation, workspace setup, pipeline/configuration assistance, and launch support.', category: 'Professional Services' },
  { name: 'Data Migration / CRM Import', price: '$299–$1,500+ one-time', description: 'Migration from another CRM or structured data source; price varies by volume and cleanup.', category: 'Professional Services' },
  { name: 'Custom Workflow Build', price: '$199+ per workflow', description: 'FSTS-built automation/workflow configuration.', category: 'Professional Services' },
  { name: 'Custom Integration / API Build', price: '$500+ per project', description: 'Custom connector, API, webhook, or system-integration work.', category: 'Professional Services' },
  { name: 'Training / Implementation', price: '$149 / hour or package', description: 'Live training, process design, and implementation support.', category: 'Professional Services' },
  { name: 'Priority Support', price: '$49 / month', description: 'Faster support response and elevated service.', category: 'Professional Services' },
  { name: 'Dedicated Success / Support', price: '$199 / month and up', description: 'Higher-touch account management and implementation guidance.', category: 'Professional Services' },

  { name: 'OPERON Phone System', description: 'Business phone, SMS, and voice capability will be published only after production readiness and provider economics are validated.', category: 'Coming Soon', comingSoon: true, note: 'Coming Soon — no public pricing yet.' },
];

export const addOnCategories = ['Account Expansion', 'JONNIE AI', 'Social & Promotion', 'Geofence', 'Developer & AI Connectivity', 'Intelligence & Reporting', 'Automation, Email & Storage', 'Documents & Integrations', 'Professional Services', 'Coming Soon'] as const;

export const commercialPricingRules = [
  'Founding Beta discounts apply only to the core OPERON CRM subscription; add-ons, usage packs, services, phone, geofence, social products, and premium modules remain at normal commercial pricing.',
  'Standard additional businesses are 50% of the customer’s selected CRM tier.',
  'White Label additional businesses are $75/month each.',
  'Additional users are $10/month each unless included in the customer’s plan.',
  'Third-party ad spend, telephony usage, AI-provider usage, e-signature usage, and other pass-through costs are not silently absorbed by OPERON.',
  'Usage-based products should use cost controls, warning thresholds, and owner overrides.',
  'Prices labeled “starting” or “and up” are floors; enterprise/custom work requires a quote.',
] as const;

import { Layers } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function PlatformPage() {
  return <LightFeaturePage eyebrow="About OPERON" title="One operating layer for customer relationships and business workflows." description="OPERON CRM is designed to give businesses a cleaner system for contacts, pipelines, tasks, automation, reporting, and industry-focused operations, with specialized add-ons released separately as they become production-ready." icon={Layers} features={[
    { title: 'CRM Core', description: 'Contacts, organizations, activity, notes, tasks, and customer history.' },
    { title: 'Pipelines', description: 'Visible stages for leads, opportunities, and industry-specific work.' },
    { title: 'Automation', description: 'Reduce repetitive work with controlled workflows and intelligent assistance.' },
    { title: 'Industry Configuration', description: 'Start from workflows designed for the business category instead of a generic blank CRM.' },
    { title: 'Integrations', description: 'Connect approved external services through a clean integration layer.' },
    { title: 'Expandable Add-ons', description: 'Add Phone, Social Publisher Pro, and Geofencing as Phase 2 services reach production.' },
  ]} primaryCta={{ label: 'Explore Pricing', to: '/pricing' }} />;
}

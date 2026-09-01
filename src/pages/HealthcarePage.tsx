import { Stethoscope } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function HealthcarePage() {
  return <LightFeaturePage eyebrow="Healthcare Business CRM" title="Connect healthcare business relationships, practice operations, and non-clinical workflows." description="OPERON helps healthcare organizations organize business contacts, referral relationships, outreach, permitted documents, scheduling, tasks, office operations, and non-clinical workflows in a clearer shared workspace." icon={Stethoscope} image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=82" imageAlt="Healthcare professional working in a modern medical practice" features={[
    { title: 'Business & Referral CRM', description: 'Organize permitted business contacts, organizations, referral relationships, outreach activity, and relationship history.' },
    { title: 'Operational Pipelines', description: 'Move non-clinical business workflows, outreach, onboarding, and administrative processes through visible stages.' },
    { title: 'Practice Coordination', description: 'Coordinate authorized staff tasks, office calendars, follow-up, internal assignments, and operational work.' },
    { title: 'Documents & Notes', description: 'Keep permitted business documents, references, notes, and workflow context associated with the appropriate record.' },
    { title: 'Business Reporting', description: 'Review non-clinical pipeline activity, operational workload, relationship activity, and performance signals from one workspace.' },
    { title: 'Controlled Integrations', description: 'Connect approved external services only when the organization has verified the security, privacy, and production requirements for its use case.' },
  ]} workflow={['Relationship intake', 'Route & assign', 'Coordinate work', 'Document activity', 'Review & follow up']} managementTitle="Practice / Office Management gives healthcare operators a stronger administrative workspace." managementDescription="Coordinate authorized staff, office calendars, internal tasks, permitted documents, approvals, locations, resources, and non-clinical business workflows without presenting OPERON as a clinical record system." note="Healthcare customers must configure OPERON according to their own privacy, security, HIPAA, clinical-system, data-retention, and regulatory obligations. OPERON marketing does not represent every workflow, configuration, vendor, or integration as HIPAA-ready by default." />;
}

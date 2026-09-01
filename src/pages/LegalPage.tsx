import { Scale } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function LegalPage() {
  return <LightFeaturePage eyebrow="Legal Business CRM" title="Keep client relationships, matters, documents, deadlines, and office operations organized." description="OPERON gives legal teams a professional business workspace for intake, client relationships, matter-oriented workflows, documents, tasks, calendars, billing-support activity, and office coordination." icon={Scale} image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=82" imageAlt="Legal professional reviewing documents at a desk" features={[
    { title: 'Client Intake & CRM', description: 'Organize prospects, clients, contacts, intake activity, notes, communications, and relationship history in one business workspace.' },
    { title: 'Matter Workflows', description: 'Track matters and internal work through clear stages while keeping related customer context and assignments visible.' },
    { title: 'Documents & References', description: 'Keep workflow documents, references, notes, and permitted client context connected to the appropriate matter or relationship.' },
    { title: 'Tasks & Deadlines', description: 'Coordinate internal work, reminders, appointments, follow-up, and important operational dates across authorized team members.' },
    { title: 'Billing-Support Workflow', description: 'Keep business-side billing activity, customer history, documents, and operational follow-up organized without overstating specialized legal accounting capability.' },
    { title: 'Firm Visibility', description: 'Give authorized leaders a shared view of work in progress, team workload, client activity, and office operations.' },
  ]} workflow={['Intake', 'Qualify & assign', 'Matter workflow', 'Documents & tasks', 'Billing & follow-up']} managementTitle="Office / Practice Management brings the administrative side of the firm into the same operating workspace." managementDescription="Coordinate staff, shared calendars, internal tasks, documents, approvals, office resources, permitted client-billing workflows, locations, and management reporting alongside the CRM." note="Professional customers remain responsible for legal, regulatory, ethical, retention, confidentiality, trust-accounting, court, and practice-management requirements. OPERON does not provide legal advice." />;
}

import { Scale } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function LegalPage() {
  return <LightFeaturePage eyebrow="Professional CRM · Legal" title="Keep clients, matters, documents, and deadlines organized." description="OPERON gives legal teams a professional CRM starting point for client relationships and operational workflows without presenting the CRM itself as legal advice or a legal practice-management substitute where specialized compliance is required." icon={Scale} features={[
    { title: 'Client Management', description: 'Maintain organized client records, contacts, notes, and activity.' },
    { title: 'Matter Tracking', description: 'Track matters and work stages in a visible operational pipeline.' },
    { title: 'Documents', description: 'Keep document references and workflow context connected to client activity.' },
    { title: 'Tasks & Deadlines', description: 'Organize follow-ups, internal work, and important due dates.' },
    { title: 'Team Visibility', description: 'Give authorized team members a shared view of work in progress.' },
    { title: 'Professional Integrations', description: 'Connect approved external tools as integrations are verified for production.' },
  ]} note="Professional customers remain responsible for their own legal, regulatory, retention, confidentiality, and practice-management requirements." />;
}

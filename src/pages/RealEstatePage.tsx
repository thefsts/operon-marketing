import { Home } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function RealEstatePage() {
  return <LightFeaturePage eyebrow="Professional CRM · Real Estate" title="Keep clients, properties, deals, and follow-up in one CRM." description="OPERON gives real estate professionals a structured workspace for relationships and deal operations, using the Professional CRM pricing family rather than a separate legacy price table." icon={Home} features={[
    { title: 'Client Records', description: 'Keep buyers, sellers, investors, and referral contacts organized.' },
    { title: 'Deal Pipeline', description: 'Track opportunities from lead through active transaction and close.' },
    { title: 'Property Context', description: 'Associate property and deal information with the customer workflow.' },
    { title: 'Tasks & Appointments', description: 'Manage follow-ups, showings, meetings, and transaction tasks.' },
    { title: 'Documents', description: 'Keep workflow documents and references connected to the appropriate deal.' },
    { title: 'Team Visibility', description: 'Give authorized team members a shared operational view.' },
  ]} />;
}

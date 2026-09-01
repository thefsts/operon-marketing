import { Home } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function RealEstatePage() {
  return <LightFeaturePage eyebrow="Real Estate CRM" title="Keep clients, properties, transactions, and brokerage operations moving together." description="OPERON gives agents, teams, and brokerages one structured workspace for lead relationships, property context, transaction pipelines, documents, appointments, follow-up, and office operations." icon={Home} image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=82" imageAlt="Real estate professional working with clients at a property" features={[
    { title: 'Buyer & Seller CRM', description: 'Keep buyers, sellers, investors, prospects, past clients, and referral relationships organized with a complete activity history.' },
    { title: 'Transaction Pipeline', description: 'Move opportunities from new lead through consultation, active search or listing, contract, closing, and post-close follow-up.' },
    { title: 'Property Context', description: 'Keep property details, transaction notes, appointments, documents, and customer activity connected to the right relationship.' },
    { title: 'Tasks & Appointments', description: 'Coordinate showings, meetings, follow-ups, transaction deadlines, and internal assignments from shared calendars and task workflows.' },
    { title: 'Documents & Approvals', description: 'Organize workflow documents, internal approvals, references, and transaction context without losing the customer history.' },
    { title: 'Brokerage Visibility', description: 'Give authorized leaders a clearer view of pipeline activity, agent work, office operations, and performance signals.' },
  ]} workflow={['Capture & qualify', 'Buyer / seller consult', 'Property & deal activity', 'Contract workflow', 'Close & nurture']} managementTitle="Brokerage / Office Management brings the business side of the brokerage into OPERON." managementDescription="Coordinate agents and staff, shared calendars, internal tasks, documents, approvals, office resources, transaction oversight, and reporting from the same platform that manages client relationships and opportunities." />;
}

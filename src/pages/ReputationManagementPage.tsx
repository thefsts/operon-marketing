import { Star } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function ReputationManagementPage() {
  return <LightFeaturePage eyebrow="Customer Experience" title="Keep reputation work connected to the customer relationship." description="OPERON can organize review follow-up, customer feedback, tasks, and reputation workflows as capabilities are verified and released." icon={Star} features={[
    { title: 'Feedback Tracking', description: 'Keep customer feedback and follow-up work organized.' },
    { title: 'Response Workflow', description: 'Assign and track review-response tasks across the team.' },
    { title: 'Customer Context', description: 'Connect reputation activity to the underlying customer relationship when appropriate.' },
    { title: 'Alerts & Tasks', description: 'Create operational follow-up around issues that need attention.' },
    { title: 'Reporting', description: 'Review trends and operational response activity.' },
    { title: 'Integration Ready', description: 'Connect external reputation providers only when their production integrations are verified.' },
  ]} note="External review-network coverage and automated publishing depend on provider APIs and production integration approval; the website does not promise unverified network coverage." />;
}

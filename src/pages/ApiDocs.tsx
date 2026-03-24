import React, { useState } from 'react';
import { 
  Code, 
  Key, 
  Webhook, 
  Book, 
  Terminal, 
  Copy, 
  Check,
  ChevronDown,
  ChevronRight,
  Play,
  Lock,
  Zap,
  Database,
  Users,
  BarChart3,
  Settings,
  ExternalLink
} from 'lucide-react';

interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  auth: boolean;
}

interface ApiSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  endpoints: Endpoint[];
}

const apiSections: ApiSection[] = [
  {
    id: 'authentication',
    title: 'Authentication',
    icon: <Lock className="w-5 h-5" />,
    description: 'Secure your API requests with authentication',
    endpoints: [],
  },
  {
    id: 'contacts',
    title: 'Contacts',
    icon: <Users className="w-5 h-5" />,
    description: 'Manage your customers and leads',
    endpoints: [
      { method: 'GET', path: '/api/v1/contacts', description: 'List all contacts', auth: true },
      { method: 'GET', path: '/api/v1/contacts/:id', description: 'Get a specific contact', auth: true },
      { method: 'POST', path: '/api/v1/contacts', description: 'Create a new contact', auth: true },
      { method: 'PUT', path: '/api/v1/contacts/:id', description: 'Update a contact', auth: true },
      { method: 'DELETE', path: '/api/v1/contacts/:id', description: 'Delete a contact', auth: true },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: <Database className="w-5 h-5" />,
    description: 'Manage projects and tasks',
    endpoints: [
      { method: 'GET', path: '/api/v1/projects', description: 'List all projects', auth: true },
      { method: 'GET', path: '/api/v1/projects/:id', description: 'Get a specific project', auth: true },
      { method: 'POST', path: '/api/v1/projects', description: 'Create a new project', auth: true },
      { method: 'PUT', path: '/api/v1/projects/:id', description: 'Update a project', auth: true },
      { method: 'DELETE', path: '/api/v1/projects/:id', description: 'Delete a project', auth: true },
    ],
  },
  {
    id: 'workflows',
    title: 'Workflows',
    icon: <Zap className="w-5 h-5" />,
    description: 'Trigger and manage automation workflows',
    endpoints: [
      { method: 'GET', path: '/api/v1/workflows', description: 'List all workflows', auth: true },
      { method: 'POST', path: '/api/v1/workflows/:id/trigger', description: 'Trigger a workflow', auth: true },
      { method: 'GET', path: '/api/v1/workflows/:id/executions', description: 'Get workflow executions', auth: true },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: <BarChart3 className="w-5 h-5" />,
    description: 'Access reporting and analytics data',
    endpoints: [
      { method: 'GET', path: '/api/v1/analytics/summary', description: 'Get analytics summary', auth: true },
      { method: 'GET', path: '/api/v1/analytics/reports', description: 'List available reports', auth: true },
      { method: 'GET', path: '/api/v1/analytics/reports/:id', description: 'Get a specific report', auth: true },
    ],
  },
  {
    id: 'webhooks',
    title: 'Webhooks',
    icon: <Webhook className="w-5 h-5" />,
    description: 'Real-time event notifications',
    endpoints: [
      { method: 'GET', path: '/api/v1/webhooks', description: 'List webhook endpoints', auth: true },
      { method: 'POST', path: '/api/v1/webhooks', description: 'Create a webhook', auth: true },
      { method: 'DELETE', path: '/api/v1/webhooks/:id', description: 'Delete a webhook', auth: true },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings className="w-5 h-5" />,
    description: 'Manage account and organization settings',
    endpoints: [
      { method: 'GET', path: '/api/v1/settings', description: 'Get organization settings', auth: true },
      { method: 'PUT', path: '/api/v1/settings', description: 'Update settings', auth: true },
    ],
  },
];

const codeExamples = {
  auth: `# Authentication Example
curl -X GET "https://api.operon.io/v1/contacts" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,

  listContacts: `# List Contacts
curl -X GET "https://api.operon.io/v1/contacts?limit=10&offset=0" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Response
{
  "data": [
    {
      "id": "cnt_abc123",
      "email": "john@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "company": "Acme Inc",
      "status": "active",
      "created_at": "2026-03-15T10:30:00Z"
    }
  ],
  "meta": {
    "total": 150,
    "limit": 10,
    "offset": 0
  }
}`,

  createContact: `# Create Contact
curl -X POST "https://api.operon.io/v1/contacts" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "jane@example.com",
    "first_name": "Jane",
    "last_name": "Smith",
    "company": "Tech Corp",
    "tags": ["lead", "enterprise"]
  }'

# Response
{
  "id": "cnt_def456",
  "email": "jane@example.com",
  "first_name": "Jane",
  "last_name": "Smith",
  "company": "Tech Corp",
  "tags": ["lead", "enterprise"],
  "status": "active",
  "created_at": "2026-03-21T14:20:00Z"
}`,

  triggerWorkflow: `# Trigger a Workflow
curl -X POST "https://api.operon.io/v1/workflows/wf_xyz789/trigger" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "contact_id": "cnt_abc123",
    "trigger_data": {
      "source": "api",
      "campaign": "spring-sale"
    }
  }'

# Response
{
  "execution_id": "exec_abc123",
  "workflow_id": "wf_xyz789",
  "status": "running",
  "triggered_at": "2026-03-21T14:25:00Z"
}`,

  webhook: `# Create a Webhook
curl -X POST "https://api.operon.io/v1/webhooks" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhooks/operon",
    "events": ["contact.created", "contact.updated", "workflow.completed"],
    "secret": "your-webhook-secret"
  }'

# Webhook Payload Example
{
  "id": "evt_abc123",
  "event": "contact.created",
  "data": {
    "id": "cnt_abc123",
    "email": "john@example.com",
    "first_name": "John"
  },
  "timestamp": "2026-03-21T14:30:00Z",
  "signature": "sha256=..."
}`,
};

const ApiDocs: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string>('authentication');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'reference' | 'sdks'>('overview');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'text-green-400 bg-green-400/10';
      case 'POST': return 'text-blue-400 bg-blue-400/10';
      case 'PUT': return 'text-yellow-400 bg-yellow-400/10';
      case 'DELETE': return 'text-red-400 bg-red-400/10';
      case 'PATCH': return 'text-purple-400 bg-purple-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, rgba(217, 70, 239, 0.15) 0%, transparent 50%)`,
        }} />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              OPERON
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <button
                onClick={() => setActiveTab('overview')}
                className={`${activeTab === 'overview' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'} transition-colors`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('reference')}
                className={`${activeTab === 'reference' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'} transition-colors`}
              >
                API Reference
              </button>
              <button
                onClick={() => setActiveTab('sdks')}
                className={`${activeTab === 'sdks' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'} transition-colors`}
              >
                SDKs
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a>
            <a
              href={`${import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com'}/login`}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get API Key
            </a>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'overview' && (
          <div className="max-w-4xl">
            {/* Hero */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                OPERON <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">API</span>
              </h1>
              <p className="text-xl text-gray-400">
                Build powerful integrations with our RESTful API. Automate workflows, sync data, and extend OPERON to fit your business needs.
              </p>
            </div>

            {/* Quick Start */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-cyan-400" />
                Quick Start
              </h2>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                <h3 className="font-semibold mb-4">1. Get Your API Key</h3>
                <p className="text-gray-400 mb-4">
                  Navigate to Settings → API Keys in your OPERON dashboard to generate a new API key.
                </p>
                <a
                  href={`${import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com'}/settings/api-keys`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  Go to API Settings <ExternalLink size={16} />
                </a>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-4">2. Make Your First Request</h3>
                <div className="relative">
                  <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">{codeExamples.auth}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(codeExamples.auth, 'auth')}
                    className="absolute top-2 right-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {copiedCode === 'auth' ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Key className="w-8 h-8 text-cyan-400" />,
                    title: 'Secure Authentication',
                    description: 'API keys with scoped permissions. OAuth 2.0 support for enterprise customers.',
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-cyan-400" />,
                    title: 'Rate Limiting',
                    description: 'Generous limits by plan. Professional: 1,000 req/min. Enterprise: Unlimited.',
                  },
                  {
                    icon: <Webhook className="w-8 h-8 text-cyan-400" />,
                    title: 'Webhooks',
                    description: 'Real-time event notifications. Retry logic and delivery logs.',
                  },
                  {
                    icon: <Book className="w-8 h-8 text-cyan-400" />,
                    title: 'Comprehensive Docs',
                    description: 'Interactive API reference, code examples in 6 languages, and use-case guides.',
                  },
                ].map((feature, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Code Examples */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
              <div className="space-y-6">
                {[
                  { title: 'List Contacts', code: codeExamples.listContacts, id: 'listContacts' },
                  { title: 'Create Contact', code: codeExamples.createContact, id: 'createContact' },
                  { title: 'Trigger Workflow', code: codeExamples.triggerWorkflow, id: 'triggerWorkflow' },
                  { title: 'Setup Webhook', code: codeExamples.webhook, id: 'webhook' },
                ].map((example) => (
                  <div key={example.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                      <span className="font-medium">{example.title}</span>
                      <button
                        onClick={() => copyToClipboard(example.code, example.id)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === example.id ? (
                          <>
                            <Check size={14} className="text-green-400" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-sm">
                      <code className="text-gray-300">{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'reference' && (
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="w-64 shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">API Reference</h3>
                <nav className="space-y-1">
                  {apiSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setExpandedSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        expandedSection === section.id
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.icon}
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1">
              {apiSections.map((section) => (
                <div key={section.id} className="mb-8">
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                    {section.icon}
                    {section.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{section.description}</p>

                  {section.id === 'authentication' ? (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="font-semibold mb-4">API Key Authentication</h3>
                      <p className="text-gray-400 mb-4">
                        All API requests require a valid API key in the Authorization header:
                      </p>
                      <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                        <code>Authorization: Bearer YOUR_API_KEY</code>
                      </pre>
                      <h4 className="font-semibold mb-2">API Key Permissions</h4>
                      <ul className="text-gray-400 text-sm space-y-2">
                        <li>• <strong>Read:</strong> View contacts, projects, reports</li>
                        <li>• <strong>Write:</strong> Create and update records</li>
                        <li>• <strong>Delete:</strong> Remove records</li>
                        <li>• <strong>Admin:</strong> Manage settings, API keys, webhooks</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-400">Method</th>
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-400">Endpoint</th>
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-400">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.endpoints.map((endpoint, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3">
                                <span className={`text-xs font-mono px-2 py-1 rounded ${getMethodColor(endpoint.method)}`}>
                                  {endpoint.method}
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <code className="text-sm text-cyan-400">{endpoint.path}</code>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-400">{endpoint.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sdks' && (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">SDKs & Libraries</h1>
            <p className="text-gray-400 mb-8">
              Use our official SDKs to integrate OPERON into your applications faster.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'JavaScript / TypeScript',
                  language: 'typescript',
                  install: 'npm install @operon/sdk',
                  example: `import { Operon } from '@operon/sdk';

const operon = new Operon('your-api-key');

// List contacts
const contacts = await operon.contacts.list({
  limit: 10,
  status: 'active'
});

// Create a contact
const contact = await operon.contacts.create({
  email: 'john@example.com',
  first_name: 'John',
  last_name: 'Doe'
});`,
                },
                {
                  name: 'Python',
                  language: 'python',
                  install: 'pip install operon',
                  example: `from operon import OperonClient

client = OperonClient('your-api-key')

# List contacts
contacts = client.contacts.list(
    limit=10,
    status='active'
)

# Create a contact
contact = client.contacts.create(
    email='john@example.com',
    first_name='John',
    last_name='Doe'
)`,
                },
                {
                  name: 'Ruby',
                  language: 'ruby',
                  install: 'gem install operon',
                  example: `require 'operon'

client = Operon::Client.new('your-api-key')

# List contacts
contacts = client.contacts.list(
  limit: 10,
  status: 'active'
)

# Create a contact
contact = client.contacts.create(
  email: 'john@example.com',
  first_name: 'John',
  last_name: 'Doe'
)`,
                },
                {
                  name: 'Go',
                  language: 'go',
                  install: 'go get github.com/operon/go-sdk',
                  example: `import "github.com/operon/go-sdk"

func main() {
    client := operon.NewClient("your-api-key")
    
    // List contacts
    contacts, err := client.Contacts.List(
        operon.ListParams{
            Limit:  10,
            Status: "active",
        },
    )
    
    // Create a contact
    contact, err := client.Contacts.Create(
        operon.Contact{
            Email:     "john@example.com",
            FirstName: "John",
            LastName:  "Doe",
        },
    )
}`,
                },
              ].map((sdk) => (
                <div key={sdk.name} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <span className="font-semibold">{sdk.name}</span>
                    <code className="text-sm text-cyan-400">{sdk.install}</code>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">{sdk.example}</code>
                  </pre>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-white/10 rounded-xl">
              <h3 className="font-semibold mb-2">Need another language?</h3>
              <p className="text-gray-400 mb-4">
                Our REST API works with any programming language. Check our API Reference for raw HTTP examples.
              </p>
              <button
                onClick={() => setActiveTab('reference')}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View API Reference →
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="/docs" className="text-cyan-400">API Docs</a>
          <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default ApiDocs;
import IndustryTemplate from './IndustryTemplate';

export default function SaaSPage() {
  const data = {
    industry: 'SaaS',
    tagline: 'SaaS Product Development',
    description: 'We partner with entrepreneurs and companies to build SaaS products from zero to market — handling the full technical build while you focus on go-to-market. We have delivered multi-tenant SaaS platforms across B2B, B2C, and marketplace models.',
    solutions: [
      'Multi-tenant architecture design',
      'Subscription billing integration (Stripe, Paddle, Chargebee)',
      'User management, roles, and permissions',
      'Self-serve onboarding funnels',
      'Usage analytics and product telemetry',
      'API-first design for integrations',
      'White-labelling capabilities',
      'Admin dashboards and operational tooling'
    ],
    aiCapabilities: [
      { title: 'AI Writing Assistants', desc: 'Content generation and summarization features' },
      { title: 'Embedded Analytics', desc: 'Natural language querying of data' },
      { title: 'AI Workflow Automation', desc: 'Intelligent suggestion engines' },
      { title: 'Personalization Engines', desc: 'User experience customization' }
    ]
  };

  return <IndustryTemplate {...data} />;
}

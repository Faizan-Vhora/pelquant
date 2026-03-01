import IndustryTemplate from './IndustryTemplate';

export default function ECommercePage() {
  const data = {
    industry: 'eCommerce',
    tagline: 'eCommerce & Retail Technology',
    description: 'Modern eCommerce demands more than a shopping cart. We build complete commerce ecosystems — from high-conversion storefronts and intelligent recommendation engines to warehouse management systems and omnichannel marketing automation.',
    solutions: [
      'Custom eCommerce platforms (headless, Shopify Plus, Magento)',
      'Multi-vendor marketplace platforms',
      'B2B eCommerce portals with bulk ordering',
      'D2C (Direct-to-Consumer) brand platforms',
      'Inventory and warehouse management systems (WMS)',
      'Order management systems (OMS)',
      'POS integration and omnichannel retail',
      'Subscription commerce platforms',
      'Loyalty program systems'
    ],
    aiCapabilities: [
      { title: 'Product Recommendation Engines', desc: 'Collaborative filtering and hybrid AI models' },
      { title: 'AI-Powered Search', desc: 'Semantic product search with natural language' },
      { title: 'Dynamic Pricing', desc: 'Competitor monitoring and demand-based pricing' },
      { title: 'Predictive Inventory', desc: 'Demand forecasting and reorder automation' }
    ]
  };

  return <IndustryTemplate {...data} />;
}

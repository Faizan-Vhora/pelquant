import IndustryTemplate from './IndustryTemplate';

export default function LogisticsPage() {
  const data = {
    industry: 'Logistics',
    tagline: 'Logistics & Supply Chain Solutions',
    description: 'We build intelligent logistics platforms that give supply chain operators real-time visibility, automated planning, and data-driven optimization — reducing operational costs and improving delivery performance.',
    solutions: [
      'Transport Management Systems (TMS)',
      'Fleet management and vehicle tracking platforms',
      'Last-mile delivery optimization',
      'Supply chain visibility platforms',
      'Warehouse Management Systems (WMS)',
      'Freight marketplace platforms',
      'Customs and trade compliance systems',
      'Cold chain monitoring solutions'
    ],
    aiCapabilities: [
      { title: 'Route Optimization', desc: 'Multi-stop planning with real-time traffic integration' },
      { title: 'Predictive ETA', desc: 'ML models incorporating weather and carrier performance' },
      { title: 'Demand Forecasting', desc: 'Inventory positioning optimization' },
      { title: 'AI Exception Management', desc: 'Proactive delay alerting and resolution' }
    ]
  };

  return <IndustryTemplate {...data} />;
}

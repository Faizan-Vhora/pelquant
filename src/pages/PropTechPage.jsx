import IndustryTemplate from './IndustryTemplate';

export default function PropTechPage() {
  const data = {
    industry: 'PropTech',
    tagline: 'Real Estate & Property Technology',
    description: 'We build real estate platforms that connect buyers, sellers, landlords, tenants, and agents — powered by data analytics and AI to enable smarter property decisions and more efficient management.',
    solutions: [
      'Property listing portals and marketplaces',
      'Property management systems (PMS)',
      'CRM systems for real estate agencies',
      'Real estate investment platforms',
      'Short-term rental management (Airbnb-style)',
      'Construction project management',
      'Building Information Modelling (BIM) tools',
      'Smart building IoT management'
    ],
    aiCapabilities: [
      { title: 'Automated Property Valuation', desc: 'ML-based price prediction models' },
      { title: 'AI-Powered Property Search', desc: 'Natural language queries and preference matching' },
      { title: 'Predictive Maintenance', desc: 'IoT sensor data analysis and failure prediction' },
      { title: 'Investment Return Modeling', desc: 'Rental yield and ROI calculations' }
    ]
  };

  return <IndustryTemplate {...data} />;
}

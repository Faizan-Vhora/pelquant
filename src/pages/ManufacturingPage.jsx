import IndustryTemplate from './IndustryTemplate';

export default function ManufacturingPage() {
  const data = {
    industry: 'Manufacturing',
    tagline: 'Manufacturing & Industry 4.0',
    description: 'We build software for the factory floor and industrial operations — connecting physical assets to digital intelligence for real-time monitoring, predictive maintenance, and production optimization.',
    solutions: [
      'Manufacturing Execution Systems (MES)',
      'SCADA and industrial IoT platforms',
      'Quality Management Systems (QMS)',
      'Production planning and scheduling',
      'Asset management and predictive maintenance',
      'Energy management platforms',
      'Supplier portal and vendor management'
    ],
    aiCapabilities: [
      { title: 'Predictive Maintenance', desc: 'Vibration and temperature data analysis' },
      { title: 'Computer Vision QC', desc: 'Quality inspection and defect detection' },
      { title: 'AI Production Scheduling', desc: 'Demand planning and resource optimization' },
      { title: 'Energy Optimization', desc: 'Consumption analysis and efficiency improvements' }
    ]
  };

  return <IndustryTemplate {...data} />;
}

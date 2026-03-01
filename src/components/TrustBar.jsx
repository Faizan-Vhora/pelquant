import './TrustBar.css';

const metrics = [
  { value: '13', label: 'Core Services' },
  { value: '12', label: 'Industries' },
  { value: '100%', label: 'Cloud-Native' },
  { value: '24/7', label: 'Operations' },
  { value: 'SOC 2', label: 'Compliant' },
  { value: 'Global', label: 'Deployment' }
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="trust-container">
        <div className="trust-grid">
          {metrics.map((metric, i) => (
            <div key={i} className="trust-metric">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

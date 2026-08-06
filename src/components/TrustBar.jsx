import { useEffect, useRef, useState } from 'react';
import './TrustBar.css';

const metrics = [
  {
    value: '13', label: 'Core Services', numeric: 13, suffix: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    value: '12', label: 'Industries', numeric: 12, suffix: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    )
  },
  {
    value: '100%', label: 'Cloud-Native', numeric: 100, suffix: '%',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </svg>
    )
  },
  {
    value: '24/7', label: 'Operations', numeric: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    )
  },
  {
    value: 'SOC 2', label: 'Compliant', numeric: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    value: 'Global', label: 'Deployment', numeric: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    )
  }
];

export default function TrustBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-bar" ref={ref}>
      <div className="trust-inner">
        <div className="trust-label">Why teams choose Pelquant</div>
        <div className="trust-grid">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`trust-metric ${visible ? 'visible' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-content">
                <div className="metric-value">
                  {metric.numeric != null
                    ? <CountUp end={metric.numeric} suffix={metric.suffix} active={visible} />
                    : metric.value}
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let n = 0;
    const step = end / 40;
    const t = setInterval(() => {
      n = Math.min(n + step, end);
      setCount(Math.floor(n));
      if (n >= end) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [active, end]);
  return <>{count}{suffix}</>;
}

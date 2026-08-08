import { useEffect, useRef } from 'react';
import './AmbientBackground.css';

const HOT = '255, 107, 43';   // --accent
const HOT_GLOW = '255, 133, 85'; // --accent-light
const WIRE = '235, 235, 245';  // --text-primary, used as faint linework
const MUTED = '144, 144, 176'; // --text-secondary, distant structure

function rand(min, max) {
  return min + Math.random() * (max - min);
}

// Uniform sparse scatter across the full viewport — this sits behind page
// content everywhere (not just a hero strip), so density and opacity stay
// low so it never competes with text readability.
function buildScene(width, height) {
  const nodeCount = Math.round((width * height) / 42000);
  const nodes = [];
  for (let i = 0; i < nodeCount; i++) {
    const layer = Math.random() < 0.5 ? 0 : Math.random() < 0.75 ? 1 : 2;
    nodes.push({
      x: rand(0, width),
      y: rand(0, height),
      r: layer === 2 ? rand(1.8, 2.8) : layer === 1 ? rand(1.2, 2) : rand(0.7, 1.3),
      isHot: Math.random() < 0.16,
      layer,
      phase: rand(0, Math.PI * 2),
      speed: rand(0.15, 0.4),
    });
  }

  // Right-angle "circuit trace" polylines between nearby nodes.
  const traces = [];
  const traceCandidates = nodes.filter((n) => n.layer >= 1);
  for (let i = 0; i < traceCandidates.length; i++) {
    if (Math.random() > 0.3) continue;
    const a = traceCandidates[i];
    const nearby = traceCandidates
      .filter((n) => n !== a && Math.abs(n.x - a.x) < width * 0.14 && Math.abs(n.y - a.y) < height * 0.22)
      .sort((n1, n2) => Math.hypot(n1.x - a.x, n1.y - a.y) - Math.hypot(n2.x - a.x, n2.y - a.y));
    const b = nearby[0];
    if (!b) continue;

    const midX = Math.random() > 0.5 ? b.x : a.x;
    const points = [
      { x: a.x, y: a.y },
      { x: midX, y: a.y },
      { x: midX, y: b.y },
      { x: b.x, y: b.y },
    ];

    const isHot = a.isHot && b.isHot && Math.random() < 0.6;
    traces.push({
      points,
      color: isHot ? HOT : Math.random() < 0.5 ? WIRE : MUTED,
      baseAlpha: isHot ? rand(0.08, 0.14) : rand(0.025, 0.06),
      flashAt: rand(4, 18),
      flashDuration: rand(0.8, 1.6),
      hasParticle: isHot && Math.random() < 0.4,
      particleOffset: Math.random(),
      particleSpeed: rand(0.04, 0.08),
    });
  }

  return { nodes, traces };
}

function polylineLength(points) {
  let len = 0;
  for (let i = 1; i < points.length; i++) {
    len += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
  }
  return len;
}

function pointAtT(points, t) {
  const total = polylineLength(points);
  let target = t * total;
  for (let i = 1; i < points.length; i++) {
    const segLen = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
    if (target <= segLen || i === points.length - 1) {
      const ratio = segLen === 0 ? 0 : target / segLen;
      return {
        x: points[i - 1].x + (points[i].x - points[i - 1].x) * ratio,
        y: points[i - 1].y + (points[i].y - points[i - 1].y) * ratio,
      };
    }
    target -= segLen;
  }
  return points[points.length - 1];
}

export default function AmbientBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return undefined;

    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let scene = buildScene(1, 1);
    let width = 0;
    let height = 0;
    let rafId = null;
    let visible = true;
    const start = performance.now();

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene = buildScene(width, height);
      draw(0);
    };

    function draw(elapsedMs) {
      const t = elapsedMs / 1000;
      ctx.clearRect(0, 0, width, height);

      // Extremely subtle drift, different amplitude per layer for parallax depth.
      const driftBack = Math.sin(t * 0.015) * 4;
      const driftMid = Math.sin(t * 0.022 + 1) * 6;

      // Soft breathing glow, ±3% opacity, very slow.
      const breathe = 0.5 + Math.sin(t * 0.04) * 0.03;
      const glowRadius = Math.max(width, height) * 0.6;
      const gradient = ctx.createRadialGradient(width * 0.5, height * 0.4, 0, width * 0.5, height * 0.4, glowRadius);
      gradient.addColorStop(0, `rgba(${HOT_GLOW}, ${0.018 * breathe})`);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      scene.traces.forEach((trace) => {
        const cycle = trace.flashAt + trace.flashDuration;
        const phase = t % cycle;
        const flashing = phase > trace.flashAt;
        const flashProgress = flashing ? (phase - trace.flashAt) / trace.flashDuration : 0;
        const flashBoost = flashing ? Math.sin(flashProgress * Math.PI) * 0.2 : 0;

        ctx.beginPath();
        trace.points.forEach((p, i) => {
          const x = p.x + driftMid * 0.15;
          const y = p.y;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = `rgba(${trace.color}, ${trace.baseAlpha + flashBoost})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (trace.hasParticle) {
          const particleT = (t * trace.particleSpeed + trace.particleOffset) % 1;
          const pos = pointAtT(trace.points, particleT);
          const trailT = Math.max(0, particleT - 0.03);
          const trailPos = pointAtT(trace.points, trailT);

          ctx.beginPath();
          ctx.moveTo(trailPos.x, trailPos.y);
          ctx.lineTo(pos.x, pos.y);
          ctx.strokeStyle = `rgba(${HOT}, 0.3)`;
          ctx.lineWidth = 1.3;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${HOT}, 0.6)`;
          ctx.fill();
        }
      });

      scene.nodes.forEach((node) => {
        const pulse = 0.5 + Math.sin(t * node.speed + node.phase) * 0.175; // ~15-20% swing
        const drift = node.layer === 0 ? driftBack : node.layer === 1 ? driftMid : 0;
        const x = node.x + drift * 0.1;
        const y = node.y;
        const baseAlpha = node.isHot ? 0.32 : 0.14;
        const alpha = baseAlpha * (0.75 + pulse * 0.5);

        if (node.isHot) {
          const haloR = node.r * 5;
          const halo = ctx.createRadialGradient(x, y, 0, x, y, haloR);
          halo.addColorStop(0, `rgba(${HOT_GLOW}, ${0.1 * pulse + 0.02})`);
          halo.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(x, y, haloR, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(x, y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.isHot ? HOT : MUTED}, ${alpha})`;
        ctx.fill();
      });
    }

    function loop(now) {
      if (!visible) {
        rafId = null;
        return;
      }
      draw(now - start);
      rafId = requestAnimationFrame(loop);
    }

    resize();
    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(loop);
    }

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    const handleVisibility = () => {
      visible = document.visibilityState === 'visible';
      if (visible && !prefersReducedMotion && rafId === null) {
        rafId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div ref={containerRef} className="ambient-background" aria-hidden="true">
      <canvas ref={canvasRef} className="ambient-background-canvas" />
    </div>
  );
}

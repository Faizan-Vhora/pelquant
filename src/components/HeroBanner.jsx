import { useEffect, useRef } from 'react';
import './HeroBanner.css';

const HOT = '255, 107, 43';   // --accent
const HOT_GLOW = '255, 133, 85'; // --accent-light
const WIRE = '235, 235, 245';  // --text-primary, used as faint linework
const MUTED = '144, 144, 176'; // --text-secondary, distant structure

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Nodes are concentrated toward the left/right edges, sparse in the center —
// matching the reference composition (negative space for headline content).
function buildScene(width, height) {
  const nodes = [];
  const bands = [
    { x0: 0, x1: width * 0.34, count: Math.round(width / 34) },
    { x0: width * 0.66, x1: width, count: Math.round(width / 34) },
    { x0: width * 0.34, x1: width * 0.66, count: Math.round(width / 140) },
  ];

  bands.forEach(({ x0, x1, count }) => {
    for (let i = 0; i < count; i++) {
      const layer = pick([0, 0, 1, 1, 2]); // weighted toward mid layers
      nodes.push({
        x: rand(x0, x1),
        y: rand(height * 0.06, height * 0.94),
        r: layer === 2 ? rand(2.2, 3.4) : layer === 1 ? rand(1.4, 2.4) : rand(0.8, 1.6),
        isHot: Math.random() < 0.22,
        layer,
        phase: rand(0, Math.PI * 2),
        speed: rand(0.15, 0.4),
      });
    }
  });

  // Right-angle "circuit trace" polylines between nearby nodes in the same band.
  const traces = [];
  const traceCandidates = nodes.filter((n) => n.layer >= 1);
  for (let i = 0; i < traceCandidates.length; i++) {
    if (Math.random() > 0.45) continue;
    const a = traceCandidates[i];
    const nearby = traceCandidates
      .filter((n) => n !== a && Math.abs(n.x - a.x) < width * 0.22 && Math.abs(n.y - a.y) < height * 0.6)
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
      baseAlpha: isHot ? rand(0.18, 0.3) : rand(0.05, 0.12),
      flashAt: rand(3, 14),
      flashDuration: rand(0.8, 1.6),
      hasParticle: isHot && Math.random() < 0.5,
      particleOffset: Math.random(),
      particleSpeed: rand(0.05, 0.1),
    });
  }

  // A small triangulated cluster for visual interest, echoing the reference's node graph.
  const clusterOrigin = Math.random() < 0.5
    ? { x: rand(width * 0.7, width * 0.86), y: rand(height * 0.12, height * 0.3) }
    : { x: rand(width * 0.06, width * 0.2), y: rand(height * 0.1, height * 0.28) };
  const clusterNodes = [clusterOrigin];
  for (let i = 0; i < 4; i++) {
    clusterNodes.push({
      x: clusterOrigin.x + rand(-width * 0.09, width * 0.09),
      y: clusterOrigin.y + rand(height * 0.08, height * 0.22),
    });
  }
  for (let i = 0; i < clusterNodes.length; i++) {
    for (let j = i + 1; j < clusterNodes.length; j++) {
      if (Math.random() < 0.55) {
        traces.push({
          points: [clusterNodes[i], clusterNodes[j]],
          color: WIRE,
          baseAlpha: rand(0.08, 0.16),
          flashAt: rand(4, 16),
          flashDuration: rand(0.6, 1.2),
          hasParticle: false,
        });
      }
    }
  }
  clusterNodes.forEach((c) => nodes.push({ ...c, r: rand(1.6, 2.4), isHot: true, layer: 2, phase: rand(0, Math.PI * 2), speed: rand(0.2, 0.4) }));

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

export default function HeroBanner() {
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
      const driftBack = Math.sin(t * 0.02) * 3;
      const driftMid = Math.sin(t * 0.03 + 1) * 5;

      // Soft breathing glow, ±3% opacity, very slow.
      const breathe = 0.5 + Math.sin(t * 0.05) * 0.03;
      const glowRadius = Math.max(width, height) * 0.5;
      const gradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, glowRadius);
      gradient.addColorStop(0, `rgba(${HOT_GLOW}, ${0.035 * breathe})`);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      scene.traces.forEach((trace) => {
        const cycle = trace.flashAt + trace.flashDuration;
        const phase = t % cycle;
        const flashing = phase > trace.flashAt;
        const flashProgress = flashing ? (phase - trace.flashAt) / trace.flashDuration : 0;
        const flashBoost = flashing ? Math.sin(flashProgress * Math.PI) * 0.35 : 0;

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
          ctx.strokeStyle = `rgba(${HOT}, 0.5)`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${HOT}, 0.9)`;
          ctx.fill();
        }
      });

      scene.nodes.forEach((node) => {
        const pulse = 0.5 + Math.sin(t * node.speed + node.phase) * 0.175; // ~15-20% swing
        const drift = node.layer === 0 ? driftBack : node.layer === 1 ? driftMid : 0;
        const x = node.x + drift * 0.1;
        const y = node.y;
        const baseAlpha = node.isHot ? 0.55 : 0.28;
        const alpha = baseAlpha * (0.75 + pulse * 0.5);

        if (node.isHot) {
          const haloR = node.r * 5;
          const halo = ctx.createRadialGradient(x, y, 0, x, y, haloR);
          halo.addColorStop(0, `rgba(${HOT_GLOW}, ${0.18 * pulse + 0.05})`);
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

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !prefersReducedMotion && rafId === null) {
          rafId = requestAnimationFrame(loop);
        }
      },
      { threshold: 0.01 }
    );
    intersectionObserver.observe(container);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-banner-canvas-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-banner-canvas" />
    </div>
  );
}

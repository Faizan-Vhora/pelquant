import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

const DURATION = 1200;

/**
 * Counts from 0 to `end` once `active` is true.
 *
 * Driven by requestAnimationFrame rather than setInterval: background tabs
 * clamp timers to ~1/second, which used to leave the stats parked on "0+"
 * (or some meaningless mid-count value) for anyone who opened the site in a
 * background tab. rAF simply doesn't run until the tab is visible, so the
 * count starts when it can actually be seen.
 */
export default function CountUp({ end, suffix = '', active }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!active || reducedMotion) return undefined;

    let start = null;
    const tick = (now) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / DURATION, 1);
      // easeOutCubic — fast start, gentle settle onto the real number.
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [active, end, reducedMotion]);

  // Reduced motion skips the animation entirely and shows the real figure.
  const shown = reducedMotion ? end : count;

  return (
    <>
      {shown}
      {suffix}
    </>
  );
}

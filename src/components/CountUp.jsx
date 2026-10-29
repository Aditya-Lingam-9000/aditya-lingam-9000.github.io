import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Counts the leading number of `value` up from zero when it scrolls into view.
// "70.08%" -> 0.00% ... 70.08%, "3rd" -> 0rd ... 3rd. Non-numeric values render as-is.
export default function CountUp({ value, duration = 1400 }) {
  const text = String(value);
  const match = text.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;
  const rest = match ? match[2] : '';

  const ref = useRef(null);
  const [current, setCurrent] = useState(() => (match && !prefersReducedMotion() ? 0 : target));

  useEffect(() => {
    if (!match || prefersReducedMotion()) return undefined;
    const el = ref.current;
    let frame;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setCurrent(target * eased);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return text;

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {current.toFixed(decimals)}
        {rest}
      </span>
      <span className="visually-hidden">{text}</span>
    </>
  );
}

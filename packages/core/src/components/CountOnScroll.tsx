'use client';

import { useEffect, useRef, useState } from 'react';

interface CountOnScrollProps {
  from: number;
  to: number;
  duration?: number;
  formatFn?: (value: number) => string;
  className?: string;
}

export function CountOnScroll({
  from,
  to,
  duration = 2000,
  formatFn = (value: number) => value.toLocaleString(),
  className = '',
}: CountOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = Date.now();
            const difference = to - from;

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);

              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = from + difference * easeOutQuart;

              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(to);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [from, to, duration, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {formatFn(Math.round(count))}
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

interface LoopingCounterProps {
  from: number;
  to: number;
  duration?: number;
  formatFn?: (value: number) => string;
  className?: string;
}

export function LoopingCounter({
  from,
  to,
  duration = 2000,
  formatFn = (value: number) => value.toLocaleString(),
  className = '',
}: LoopingCounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;
    let direction: 'up' | 'down' = 'up';
    let pauseUntil: number = 0;

    const animate = (timestamp: number) => {
      // Pause at the end of each cycle
      if (pauseUntil > timestamp) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeInOutQuad = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      if (direction === 'up') {
        const currentCount = from + (to - from) * easeInOutQuad;
        setCount(currentCount);

        if (progress >= 1) {
          direction = 'down';
          startTime = timestamp;
          pauseUntil = timestamp + 500; // 500ms pause
        }
      } else {
        const currentCount = to - (to - from) * easeInOutQuad;
        setCount(currentCount);

        if (progress >= 1) {
          direction = 'up';
          startTime = timestamp;
          pauseUntil = timestamp + 500; // 500ms pause
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [from, to, duration]);

  return (
    <div className={className}>
      {formatFn(Math.round(count))}
    </div>
  );
}

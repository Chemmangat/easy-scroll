'use client';

import { useEffect, useState } from 'react';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  zIndex?: number;
}

export function ScrollProgress({
  color = '#6366f1',
  height = 3,
  zIndex = 9999,
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: `${height}px`,
        zIndex,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: color,
          transition: 'width 0.1s ease-out',
        }}
      />
    </div>
  );
}

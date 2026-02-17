'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  speed?: number;
  children: React.ReactNode;
  className?: string;
}

export function ParallaxSection({
  speed = 0.5,
  children,
  className = '',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = (scrolled - elementTop) * (speed - 1);
        setOffset(parallaxOffset);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useScrollAnimation, AnimationType, ScrollAnimationOptions } from '../hooks/useScrollAnimation';

interface RevealOnScrollProps extends ScrollAnimationOptions {
  animation: AnimationType;
  children: React.ReactNode;
  className?: string;
}

export function RevealOnScroll({
  animation,
  children,
  className = '',
  delay,
  duration,
  threshold,
  once,
  easing,
}: RevealOnScrollProps) {
  const { ref } = useScrollAnimation(animation, {
    delay,
    duration,
    threshold,
    once,
    easing,
  });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}

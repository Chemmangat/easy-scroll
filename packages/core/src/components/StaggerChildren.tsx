'use client';

import React, { Children, isValidElement } from 'react';
import { AnimationType, ScrollAnimationOptions } from '../hooks/useScrollAnimation';
import { RevealOnScroll } from './RevealOnScroll';

interface StaggerChildrenProps extends Omit<ScrollAnimationOptions, 'delay'> {
  animation: AnimationType;
  staggerDelay?: number;
  children: React.ReactNode;
  className?: string;
}

export function StaggerChildren({
  animation,
  staggerDelay = 100,
  children,
  className = '',
  duration,
  threshold,
  once,
  easing,
}: StaggerChildrenProps) {
  const childArray = Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, index) => {
        if (!isValidElement(child)) return child;

        return (
          <RevealOnScroll
            key={index}
            animation={animation}
            delay={index * staggerDelay}
            duration={duration}
            threshold={threshold}
            once={once}
            easing={easing}
          >
            {child}
          </RevealOnScroll>
        );
      })}
    </div>
  );
}

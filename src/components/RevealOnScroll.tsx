'use client';

import React from 'react';
import { useScrollAnimation, AnimationType, ScrollAnimationOptions } from '../hooks/useScrollAnimation';

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type RevealOnScrollProps<T extends React.ElementType = 'div'> = AsProp<T> &
  ScrollAnimationOptions & {
    animation: AnimationType;
    children: React.ReactNode;
    className?: string;
  } & Omit<React.ComponentPropsWithoutRef<T>, keyof AsProp<T> | keyof ScrollAnimationOptions | 'animation' | 'children' | 'className'>;

export function RevealOnScroll<T extends React.ElementType = 'div'>({
  as,
  animation,
  children,
  className = '',
  delay,
  duration,
  threshold,
  once,
  easing,
  onAnimationStart,
  onAnimationComplete,
  ...rest
}: RevealOnScrollProps<T>) {
  const { ref } = useScrollAnimation(animation, {
    delay,
    duration,
    threshold,
    once,
    easing,
    onAnimationStart,
    onAnimationComplete,
  });

  const Tag = (as ?? 'div') as React.ElementType;

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}

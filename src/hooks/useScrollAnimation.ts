'use client';

import { useEffect, useRef, useState } from 'react';

export type AnimationType =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideInDown'
  | 'scaleUp'
  | 'scaleDown'
  | 'rotateIn'
  | 'rotateInLeft'
  | 'rotateInRight'
  | 'blurIn'
  | 'flipIn'
  | 'flipInX'
  | 'flipInY'
  | 'bounceIn'
  | 'zoomIn'
  | 'zoomOut';

export interface ScrollAnimationOptions {
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  easing?: string;
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
  progress: number;
}

const animationStyles: Record<AnimationType, { initial: React.CSSProperties; animate: React.CSSProperties }> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  fadeInUp: {
    initial: { opacity: 0, transform: 'translateY(40px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  fadeInDown: {
    initial: { opacity: 0, transform: 'translateY(-40px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  fadeInLeft: {
    initial: { opacity: 0, transform: 'translateX(-40px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  fadeInRight: {
    initial: { opacity: 0, transform: 'translateX(40px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  slideInLeft: {
    initial: { opacity: 0, transform: 'translateX(-60px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  slideInRight: {
    initial: { opacity: 0, transform: 'translateX(60px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  slideInUp: {
    initial: { opacity: 0, transform: 'translateY(60px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  slideInDown: {
    initial: { opacity: 0, transform: 'translateY(-60px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  scaleUp: {
    initial: { opacity: 0, transform: 'scale(0.8)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
  scaleDown: {
    initial: { opacity: 0, transform: 'scale(1.2)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
  rotateIn: {
    initial: { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' },
    animate: { opacity: 1, transform: 'rotate(0deg) scale(1)' },
  },
  rotateInLeft: {
    initial: { opacity: 0, transform: 'rotate(-45deg)' },
    animate: { opacity: 1, transform: 'rotate(0deg)' },
  },
  rotateInRight: {
    initial: { opacity: 0, transform: 'rotate(45deg)' },
    animate: { opacity: 1, transform: 'rotate(0deg)' },
  },
  blurIn: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
  },
  flipIn: {
    initial: { opacity: 0, transform: 'perspective(400px) rotateY(90deg)' },
    animate: { opacity: 1, transform: 'perspective(400px) rotateY(0deg)' },
  },
  flipInX: {
    initial: { opacity: 0, transform: 'perspective(400px) rotateX(90deg)' },
    animate: { opacity: 1, transform: 'perspective(400px) rotateX(0deg)' },
  },
  flipInY: {
    initial: { opacity: 0, transform: 'perspective(400px) rotateY(90deg)' },
    animate: { opacity: 1, transform: 'perspective(400px) rotateY(0deg)' },
  },
  bounceIn: {
    initial: { opacity: 0, transform: 'scale(0.3)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
  zoomIn: {
    initial: { opacity: 0, transform: 'scale(0.5)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
  zoomOut: {
    initial: { opacity: 0, transform: 'scale(1.5)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
};

export function useScrollAnimation(
  animation: AnimationType,
  options: ScrollAnimationOptions = {}
): UseScrollAnimationReturn {
  const {
    delay = 0,
    duration = 600,
    threshold = 0.1,
    once = true,
    easing = 'ease-out',
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      console.log('No element found for animation:', animation);
      return;
    }

    console.log('Setting up animation:', animation, 'for element:', element);

    const styles = animationStyles[animation];
    
    // Safety check: ensure animation type exists
    if (!styles) {
      console.error(`Animation type "${animation}" not found in animationStyles`);
      return;
    }
    
    // Apply initial styles
    Object.assign(element.style, styles.initial);
    console.log('Applied initial styles:', styles.initial);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersection observed:', {
            animation,
            isIntersecting: entry.isIntersecting,
            hasAnimated: hasAnimated.current,
          });

          setIsVisible(entry.isIntersecting);

          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;
            console.log('Triggering animation:', animation, 'with delay:', delay);
            
            // Trigger animation
            setTimeout(() => {
              if (element) {
                console.log('Applying animation styles:', styles.animate);
                element.style.transition = `all ${duration}ms ${easing}`;
                Object.assign(element.style, styles.animate);
              }
            }, delay);
          }

          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;
            const elementProgress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
            setProgress(elementProgress);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    console.log('Observer attached for:', animation);

    const handleScroll = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementProgress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setProgress(elementProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      console.log('Cleaning up animation:', animation);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animation, delay, duration, easing, threshold, once]);

  return { ref, isVisible, progress };
}

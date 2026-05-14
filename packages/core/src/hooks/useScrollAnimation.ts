'use client';

import { useEffect, useRef, useState } from 'react';

export type AnimationType =
  // Fade
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  // Slide
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideInDown'
  // Scale
  | 'scaleUp'
  | 'scaleDown'
  // Rotate
  | 'rotateIn'
  | 'rotateInLeft'
  | 'rotateInRight'
  // Special
  | 'blurIn'
  | 'flipIn'
  | 'flipInX'
  | 'flipInY'
  | 'bounceIn'
  | 'zoomIn'
  | 'zoomOut'
  // New in 2.0
  | 'swingIn'
  | 'dropIn'
  | 'riseFade'
  | 'expandWidth'
  | 'shrinkIn'
  | 'tiltLeft'
  | 'tiltRight'
  | 'popIn'
  | 'glideUp'
  | 'glideDown'
  | 'glideLeft'
  | 'glideRight'
  | 'spiralIn'
  | 'stretchIn'
  | 'rollInLeft'
  | 'rollInRight';

export interface ScrollAnimationOptions {
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  easing?: string;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

export interface UseScrollAnimationReturn {
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
    initial: { opacity: 0, transform: 'translateX(-80px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  slideInRight: {
    initial: { opacity: 0, transform: 'translateX(80px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  slideInUp: {
    initial: { opacity: 0, transform: 'translateY(80px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  slideInDown: {
    initial: { opacity: 0, transform: 'translateY(-80px)' },
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
    initial: { opacity: 0, transform: 'rotate(-45deg) translateX(-20px)' },
    animate: { opacity: 1, transform: 'rotate(0deg) translateX(0)' },
  },
  rotateInRight: {
    initial: { opacity: 0, transform: 'rotate(45deg) translateX(20px)' },
    animate: { opacity: 1, transform: 'rotate(0deg) translateX(0)' },
  },
  blurIn: {
    initial: { opacity: 0, filter: 'blur(12px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
  },
  flipIn: {
    initial: { opacity: 0, transform: 'perspective(600px) rotateY(90deg)' },
    animate: { opacity: 1, transform: 'perspective(600px) rotateY(0deg)' },
  },
  flipInX: {
    initial: { opacity: 0, transform: 'perspective(600px) rotateX(90deg)' },
    animate: { opacity: 1, transform: 'perspective(600px) rotateX(0deg)' },
  },
  flipInY: {
    initial: { opacity: 0, transform: 'perspective(600px) rotateY(90deg)' },
    animate: { opacity: 1, transform: 'perspective(600px) rotateY(0deg)' },
  },
  bounceIn: {
    initial: { opacity: 0, transform: 'scale(0.3)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
  zoomIn: {
    initial: { opacity: 0, transform: 'scale(0.4)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
  zoomOut: {
    initial: { opacity: 0, transform: 'scale(1.6)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
  swingIn: {
    initial: { opacity: 0, transform: 'rotate(-20deg)', transformOrigin: 'top center' },
    animate: { opacity: 1, transform: 'rotate(0deg)', transformOrigin: 'top center' },
  },
  dropIn: {
    initial: { opacity: 0, transform: 'translateY(-120px) scale(0.9)' },
    animate: { opacity: 1, transform: 'translateY(0) scale(1)' },
  },
  riseFade: {
    initial: { opacity: 0, transform: 'translateY(60px)', filter: 'blur(4px)' },
    animate: { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
  },
  expandWidth: {
    initial: { opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left center' },
    animate: { opacity: 1, transform: 'scaleX(1)', transformOrigin: 'left center' },
  },
  shrinkIn: {
    initial: { opacity: 0, transform: 'scale(1.8)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
  tiltLeft: {
    initial: { opacity: 0, transform: 'rotate(6deg) translateX(20px)' },
    animate: { opacity: 1, transform: 'rotate(0deg) translateX(0)' },
  },
  tiltRight: {
    initial: { opacity: 0, transform: 'rotate(-6deg) translateX(-20px)' },
    animate: { opacity: 1, transform: 'rotate(0deg) translateX(0)' },
  },
  popIn: {
    initial: { opacity: 0, transform: 'scale(0.6) translateY(20px)' },
    animate: { opacity: 1, transform: 'scale(1) translateY(0)' },
  },
  glideUp: {
    initial: { opacity: 0, transform: 'translateY(100px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  glideDown: {
    initial: { opacity: 0, transform: 'translateY(-100px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  glideLeft: {
    initial: { opacity: 0, transform: 'translateX(-120px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  glideRight: {
    initial: { opacity: 0, transform: 'translateX(120px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  spiralIn: {
    initial: { opacity: 0, transform: 'rotate(-180deg) scale(0.3)' },
    animate: { opacity: 1, transform: 'rotate(0deg) scale(1)' },
  },
  stretchIn: {
    initial: { opacity: 0, transform: 'scaleY(0.2) scaleX(1.4)' },
    animate: { opacity: 1, transform: 'scaleY(1) scaleX(1)' },
  },
  rollInLeft: {
    initial: { opacity: 0, transform: 'translateX(-100px) rotate(-120deg)' },
    animate: { opacity: 1, transform: 'translateX(0) rotate(0deg)' },
  },
  rollInRight: {
    initial: { opacity: 0, transform: 'translateX(100px) rotate(120deg)' },
    animate: { opacity: 1, transform: 'translateX(0) rotate(0deg)' },
  },
};

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

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
    onAnimationStart,
    onAnimationComplete,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = prefersReducedMotion();
    const styles = animationStyles[animation] ?? animationStyles['fadeIn'];

    if (reducedMotion) {
      Object.assign(element.style, styles.animate);
      setIsVisible(true);
      return;
    }

    Object.assign(element.style, styles.initial);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);

          if (entry.isIntersecting && (!once || !hasAnimated.current)) {
            hasAnimated.current = true;
            onAnimationStart?.();

            setTimeout(() => {
              if (!element) return;
              element.style.transition = `all ${duration}ms ${easing}`;
              Object.assign(element.style, styles.animate);
              setTimeout(() => {
                onAnimationComplete?.();
              }, duration);
            }, delay);
          }

          if (!once && !entry.isIntersecting && hasAnimated.current) {
            hasAnimated.current = false;
            element.style.transition = '';
            Object.assign(element.style, styles.initial);
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

    const handleScroll = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementProgress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setProgress(elementProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animation, delay, duration, easing, threshold, once, onAnimationStart, onAnimationComplete]);

  return { ref, isVisible, progress };
}

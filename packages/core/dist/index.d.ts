import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';

type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'scaleUp' | 'scaleDown' | 'rotateIn' | 'rotateInLeft' | 'rotateInRight' | 'blurIn' | 'flipIn' | 'flipInX' | 'flipInY' | 'bounceIn' | 'zoomIn' | 'zoomOut';
interface ScrollAnimationOptions {
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
declare function useScrollAnimation(animation: AnimationType, options?: ScrollAnimationOptions): UseScrollAnimationReturn;

interface RevealOnScrollProps extends ScrollAnimationOptions {
    animation: AnimationType;
    children: React$1.ReactNode;
    className?: string;
}
declare function RevealOnScroll({ animation, children, className, delay, duration, threshold, once, easing, }: RevealOnScrollProps): react_jsx_runtime.JSX.Element;

interface ScrollProgressProps {
    color?: string;
    height?: number;
    zIndex?: number;
}
declare function ScrollProgress({ color, height, zIndex, }: ScrollProgressProps): react_jsx_runtime.JSX.Element;

interface ParallaxSectionProps {
    speed?: number;
    children: React$1.ReactNode;
    className?: string;
}
declare function ParallaxSection({ speed, children, className, }: ParallaxSectionProps): react_jsx_runtime.JSX.Element;

interface CountOnScrollProps {
    from: number;
    to: number;
    duration?: number;
    formatFn?: (value: number) => string;
    className?: string;
}
declare function CountOnScroll({ from, to, duration, formatFn, className, }: CountOnScrollProps): react_jsx_runtime.JSX.Element;

interface StaggerChildrenProps extends Omit<ScrollAnimationOptions, 'delay'> {
    animation: AnimationType;
    staggerDelay?: number;
    children: React$1.ReactNode;
    className?: string;
}
declare function StaggerChildren({ animation, staggerDelay, children, className, duration, threshold, once, easing, }: StaggerChildrenProps): react_jsx_runtime.JSX.Element;

export { type AnimationType, CountOnScroll, ParallaxSection, RevealOnScroll, type ScrollAnimationOptions, ScrollProgress, StaggerChildren, useScrollAnimation };

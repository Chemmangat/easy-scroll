import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';

type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'scaleUp' | 'scaleDown' | 'rotateIn' | 'rotateInLeft' | 'rotateInRight' | 'blurIn' | 'flipIn' | 'flipInX' | 'flipInY' | 'bounceIn' | 'zoomIn' | 'zoomOut' | 'swingIn' | 'dropIn' | 'riseFade' | 'expandWidth' | 'shrinkIn' | 'tiltLeft' | 'tiltRight' | 'popIn' | 'glideUp' | 'glideDown' | 'glideLeft' | 'glideRight' | 'spiralIn' | 'stretchIn' | 'rollInLeft' | 'rollInRight';
interface ScrollAnimationOptions {
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    easing?: string;
    onAnimationStart?: () => void;
    onAnimationComplete?: () => void;
}
interface UseScrollAnimationReturn {
    ref: React.RefObject<HTMLElement>;
    isVisible: boolean;
    progress: number;
}
declare function useScrollAnimation(animation: AnimationType, options?: ScrollAnimationOptions): UseScrollAnimationReturn;

type AsProp<T extends React$1.ElementType> = {
    as?: T;
};
type RevealOnScrollProps<T extends React$1.ElementType = 'div'> = AsProp<T> & ScrollAnimationOptions & {
    animation: AnimationType;
    children: React$1.ReactNode;
    className?: string;
} & Omit<React$1.ComponentPropsWithoutRef<T>, keyof AsProp<T> | keyof ScrollAnimationOptions | 'animation' | 'children' | 'className'>;
declare function RevealOnScroll<T extends React$1.ElementType = 'div'>({ as, animation, children, className, delay, duration, threshold, once, easing, onAnimationStart, onAnimationComplete, ...rest }: RevealOnScrollProps<T>): react_jsx_runtime.JSX.Element;

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
declare function StaggerChildren({ animation, staggerDelay, children, className, duration, threshold, once, easing, onAnimationStart, onAnimationComplete, }: StaggerChildrenProps): react_jsx_runtime.JSX.Element;

export { type AnimationType, CountOnScroll, ParallaxSection, RevealOnScroll, type ScrollAnimationOptions, ScrollProgress, StaggerChildren, type UseScrollAnimationReturn, useScrollAnimation };

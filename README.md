# react-scroll-motion

> Lightweight scroll-driven animations using native CSS Scroll Timeline API. Zero dependencies. Pure performance.

[![No Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg)](tsconfig.json)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-%3C3KB-success.svg)](package.json)

## The Problem

Most animation libraries are bloated with features you don't need. GSAP, Framer Motion, and others add significant bundle size and complexity. This toolkit uses native browser APIs for smooth, performant animations with zero dependencies.

## Installation

```bash
npm install react-scroll-motion
```

## Quick Start

```tsx
import { RevealOnScroll, ScrollProgress } from 'react-scroll-motion';

export default function Page() {
  return (
    <>
      <ScrollProgress color="#6366f1" height={3} />
      
      <RevealOnScroll animation="fadeInUp" delay={200}>
        <h1>Hello World</h1>
      </RevealOnScroll>
    </>
  );
}
```

## Components

### `<RevealOnScroll>`

Wraps any element and animates it when scrolled into view.

```tsx
<RevealOnScroll 
  animation="fadeInUp"
  delay={200}
  duration={600}
  threshold={0.1}
  once={true}
  easing="ease-out"
  className="my-class"
>
  <Card />
</RevealOnScroll>
```

**Props:**
- `animation`: `'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'scaleUp' | 'scaleDown' | 'rotateIn' | 'blurIn'`
- `delay?`: `number` - Delay in ms before animation starts (default: `0`)
- `duration?`: `number` - Animation duration in ms (default: `600`)
- `threshold?`: `number` - Intersection threshold 0-1 (default: `0.1`)
- `once?`: `boolean` - Animate only once (default: `true`)
- `easing?`: `string` - CSS easing function (default: `'ease-out'`)
- `className?`: `string` - Additional CSS classes

### `<ScrollProgress>`

Fixed progress bar at the top of the page showing scroll progress.

```tsx
<ScrollProgress 
  color="#6366f1" 
  height={3} 
  zIndex={9999} 
/>
```

**Props:**
- `color?`: `string` - Progress bar color (default: `'#6366f1'`)
- `height?`: `number` - Bar height in pixels (default: `3`)
- `zIndex?`: `number` - CSS z-index (default: `9999`)

### `<ParallaxSection>`

Section where content moves slower than scroll speed for parallax effect.

```tsx
<ParallaxSection speed={0.5} className="py-32">
  <HeroContent />
</ParallaxSection>
```

**Props:**
- `speed?`: `number` - Parallax speed multiplier 0-1 (default: `0.5`)
- `children`: `React.ReactNode` - Content to parallax
- `className?`: `string` - Additional CSS classes

### `<CountOnScroll>`

Number that counts up when scrolled into view.

```tsx
<CountOnScroll 
  from={0} 
  to={10000} 
  duration={2000}
  formatFn={(n) => `$${n.toLocaleString()}`}
  className="text-4xl font-bold"
/>
```

**Props:**
- `from`: `number` - Starting number
- `to`: `number` - Ending number
- `duration?`: `number` - Count duration in ms (default: `2000`)
- `formatFn?`: `(value: number) => string` - Format function (default: `toLocaleString()`)
- `className?`: `string` - Additional CSS classes

### `<StaggerChildren>`

Animates children one by one with stagger delay.

```tsx
<StaggerChildren 
  animation="fadeInUp" 
  staggerDelay={100}
  className="grid grid-cols-3 gap-4"
>
  <Card />
  <Card />
  <Card />
</StaggerChildren>
```

**Props:**
- `animation`: Animation type (same as `RevealOnScroll`)
- `staggerDelay?`: `number` - Delay between children in ms (default: `100`)
- `duration?`: `number` - Animation duration in ms
- `threshold?`: `number` - Intersection threshold 0-1
- `once?`: `boolean` - Animate only once
- `easing?`: `string` - CSS easing function
- `className?`: `string` - Additional CSS classes

## Hook

### `useScrollAnimation()`

Low-level hook for custom animations.

```tsx
import { useScrollAnimation } from 'react-scroll-motion';

function MyComponent() {
  const { ref, isVisible, progress } = useScrollAnimation('fadeIn', {
    delay: 200,
    duration: 600,
    threshold: 0.1,
    once: true,
    easing: 'ease-out',
  });

  return (
    <div ref={ref}>
      Visible: {isVisible ? 'Yes' : 'No'}
      Progress: {Math.round(progress * 100)}%
    </div>
  );
}
```

**Returns:**
- `ref`: `React.RefObject<HTMLElement>` - Attach to element
- `isVisible`: `boolean` - Whether element is in viewport
- `progress`: `number` - Scroll progress 0-1

## Animation Types

| Type | Description |
|------|-------------|
| `fadeIn` | Fade in opacity |
| `fadeInUp` | Fade in + slide up |
| `fadeInDown` | Fade in + slide down |
| `slideInLeft` | Slide in from left |
| `slideInRight` | Slide in from right |
| `scaleUp` | Scale up from 0.8 |
| `scaleDown` | Scale down from 1.2 |
| `rotateIn` | Rotate + scale in |
| `blurIn` | Blur to clear |

## TypeScript

All components and hooks are fully typed with strict TypeScript.

```tsx
import type { AnimationType, ScrollAnimationOptions } from 'react-scroll-motion';

const animation: AnimationType = 'fadeInUp';
const options: ScrollAnimationOptions = {
  delay: 200,
  duration: 600,
  threshold: 0.1,
  once: true,
  easing: 'ease-out',
};
```

## Browser Support

This library uses native CSS Scroll Timeline API and IntersectionObserver:

- ✅ Chrome 115+
- ✅ Edge 115+
- ✅ Safari 17.5+ (with polyfill)
- ✅ Firefox (with polyfill)

For older browsers, animations gracefully degrade to instant visibility. Consider using the [scroll-timeline polyfill](https://github.com/flackr/scroll-timeline) for broader support.

## Performance

- Zero dependencies
- < 3KB gzipped
- Native browser APIs
- Hardware-accelerated transforms
- Passive scroll listeners
- Automatic cleanup on unmount

## Live Demo

[View the live demo on Vercel →](https://your-demo-url.vercel.app/demo)

## License

MIT

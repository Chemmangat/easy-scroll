# @chemmangat/easy-scroll

> Lightweight scroll-driven animations using native CSS Scroll Timeline API. Zero dependencies. Pure performance.

[![No Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg)](tsconfig.json)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-9.3KB-success.svg)](package.json)

## Installation

```bash
npm install @chemmangat/easy-scroll
```

## Quick Start

```tsx
import { RevealOnScroll, ScrollProgress } from '@chemmangat/easy-scroll';

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

```tsx
<RevealOnScroll 
  animation="fadeInUp"
  delay={200}
  duration={600}
  threshold={0.1}
  once={true}
>
  <YourContent />
</RevealOnScroll>
```

### `<ScrollProgress>`

```tsx
<ScrollProgress color="#6366f1" height={3} />
```

### `<ParallaxSection>`

```tsx
<ParallaxSection speed={0.5}>
  <YourContent />
</ParallaxSection>
```

### `<CountOnScroll>`

```tsx
<CountOnScroll 
  from={0} 
  to={10000} 
  formatFn={(n) => n.toLocaleString()}
/>
```

### `<StaggerChildren>`

```tsx
<StaggerChildren animation="scaleUp" staggerDelay={100}>
  <Card />
  <Card />
  <Card />
</StaggerChildren>
```

## Animation Types

- `fadeIn` - Fade in
- `fadeInUp` - Fade in + slide up
- `fadeInDown` - Fade in + slide down
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `scaleUp` - Scale up
- `scaleDown` - Scale down
- `rotateIn` - Rotate in
- `blurIn` - Blur to clear

## License

MIT

# Quick Start Guide

## Installation

```bash
npm install react-scroll-motion
# or
yarn add react-scroll-motion
# or
pnpm add react-scroll-motion
```

## Basic Usage

### 1. Add Scroll Progress Bar

```tsx
import { ScrollProgress } from 'react-scroll-motion';

export default function Layout({ children }) {
  return (
    <>
      <ScrollProgress color="#8b5cf6" height={4} />
      {children}
    </>
  );
}
```

### 2. Animate Elements on Scroll

```tsx
import { RevealOnScroll } from 'react-scroll-motion';

export default function Hero() {
  return (
    <RevealOnScroll animation="fadeInUp" delay={200}>
      <h1>Welcome to My Site</h1>
      <p>This content fades in and slides up when scrolled into view</p>
    </RevealOnScroll>
  );
}
```

### 3. Stagger Multiple Elements

```tsx
import { StaggerChildren } from 'react-scroll-motion';

export default function Features() {
  return (
    <StaggerChildren 
      animation="scaleUp" 
      staggerDelay={100}
      className="grid grid-cols-3 gap-6"
    >
      <Card title="Fast" />
      <Card title="Lightweight" />
      <Card title="Modern" />
    </StaggerChildren>
  );
}
```

### 4. Count Up Numbers

```tsx
import { CountOnScroll } from 'react-scroll-motion';

export default function Stats() {
  return (
    <div>
      <CountOnScroll 
        from={0} 
        to={10000} 
        duration={2000}
        formatFn={(n) => `${(n / 1000).toFixed(0)}K+`}
        className="text-4xl font-bold"
      />
      <p>Active Users</p>
    </div>
  );
}
```

### 5. Parallax Effect

```tsx
import { ParallaxSection } from 'react-scroll-motion';

export default function Hero() {
  return (
    <ParallaxSection speed={0.5} className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="container mx-auto px-6 py-32">
        <h1>Parallax Background</h1>
        <p>Background moves slower than foreground</p>
      </div>
    </ParallaxSection>
  );
}
```

## Animation Types

- `fadeIn` - Simple fade in
- `fadeInUp` - Fade in + slide up
- `fadeInDown` - Fade in + slide down
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `scaleUp` - Scale up from 0.8
- `scaleDown` - Scale down from 1.2
- `rotateIn` - Rotate + scale in
- `blurIn` - Blur to clear

## Common Options

All animation components accept these options:

```tsx
<RevealOnScroll
  animation="fadeInUp"
  delay={200}           // Delay before animation starts (ms)
  duration={600}        // Animation duration (ms)
  threshold={0.1}       // How much of element must be visible (0-1)
  once={true}          // Animate only once (default: true)
  easing="ease-out"    // CSS easing function
  className="my-class" // Additional CSS classes
>
  <YourContent />
</RevealOnScroll>
```

## Development

Run the demo locally:

```bash
npm run dev
```

Visit `http://localhost:3000/demo` to see all animations in action.

## Build

```bash
npm run build
```

## Next Steps

- Check out [EXAMPLES.md](./EXAMPLES.md) for more usage patterns
- Read the full [README.md](./README.md) for complete API documentation
- View the live demo at `/demo` route

# Usage Examples

## Basic Fade In

```tsx
import { RevealOnScroll } from 'react-scroll-motion';

export default function Hero() {
  return (
    <RevealOnScroll animation="fadeIn">
      <h1>Welcome to My Site</h1>
    </RevealOnScroll>
  );
}
```

## Slide In from Left

```tsx
<RevealOnScroll animation="slideInLeft" duration={800}>
  <div className="card">
    <h2>Feature Title</h2>
    <p>Feature description</p>
  </div>
</RevealOnScroll>
```

## Stats Counter

```tsx
import { CountOnScroll } from 'react-scroll-motion';

export default function Stats() {
  return (
    <div className="stats-grid">
      <CountOnScroll 
        from={0} 
        to={50000} 
        formatFn={(n) => `${(n / 1000).toFixed(0)}K+`}
        className="text-4xl font-bold"
      />
    </div>
  );
}
```

## Staggered List

```tsx
import { StaggerChildren } from 'react-scroll-motion';

export default function Features() {
  return (
    <StaggerChildren 
      animation="fadeInUp" 
      staggerDelay={150}
      className="grid grid-cols-3 gap-6"
    >
      <FeatureCard title="Fast" />
      <FeatureCard title="Lightweight" />
      <FeatureCard title="Modern" />
    </StaggerChildren>
  );
}
```

## Parallax Hero

```tsx
import { ParallaxSection } from 'react-scroll-motion';

export default function Hero() {
  return (
    <ParallaxSection speed={0.5} className="min-h-screen">
      <div className="hero-content">
        <h1>Scroll for Parallax Effect</h1>
      </div>
    </ParallaxSection>
  );
}
```

## Progress Bar

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

## Custom Hook Usage

```tsx
import { useScrollAnimation } from 'react-scroll-motion';

export default function CustomComponent() {
  const { ref, isVisible, progress } = useScrollAnimation('scaleUp', {
    delay: 300,
    duration: 800,
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      <p>Visible: {isVisible ? 'Yes' : 'No'}</p>
      <p>Progress: {Math.round(progress * 100)}%</p>
    </div>
  );
}
```

## Combining Multiple Animations

```tsx
import { RevealOnScroll, StaggerChildren, CountOnScroll } from 'react-scroll-motion';

export default function Section() {
  return (
    <section>
      <RevealOnScroll animation="fadeInUp">
        <h2>Our Impact</h2>
      </RevealOnScroll>

      <StaggerChildren animation="scaleUp" staggerDelay={100}>
        <StatCard>
          <CountOnScroll from={0} to={10000} />
          <span>Users</span>
        </StatCard>
        <StatCard>
          <CountOnScroll from={0} to={500} />
          <span>Projects</span>
        </StatCard>
        <StatCard>
          <CountOnScroll from={0} to={50} />
          <span>Countries</span>
        </StatCard>
      </StaggerChildren>
    </section>
  );
}
```

## With Custom Easing

```tsx
<RevealOnScroll 
  animation="fadeInUp"
  duration={1000}
  easing="cubic-bezier(0.34, 1.56, 0.64, 1)"
>
  <Card />
</RevealOnScroll>
```

## Animate Once vs Repeat

```tsx
{/* Animates every time it enters viewport */}
<RevealOnScroll animation="fadeIn" once={false}>
  <Content />
</RevealOnScroll>

{/* Animates only first time (default) */}
<RevealOnScroll animation="fadeIn" once={true}>
  <Content />
</RevealOnScroll>
```

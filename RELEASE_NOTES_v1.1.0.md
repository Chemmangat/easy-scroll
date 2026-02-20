# Release Notes - v1.1.0

## 🎉 What's New in v1.1.0

We're excited to announce version 1.1.0 of @chemmangat/easy-scroll! This release brings major enhancements to documentation, interactive demos, and real-world example components.

### 🎨 12 New Animation Types

We've expanded from 9 to **21 animation types**! New additions include:

- **Fade animations**: `fadeInLeft`, `fadeInRight`
- **Slide animations**: `slideInUp`, `slideInDown`
- **Rotate animations**: `rotateInLeft`, `rotateInRight`
- **Flip animations**: `flipIn`, `flipInX`, `flipInY`
- **Special effects**: `bounceIn`, `zoomIn`, `zoomOut`

### 🎮 Interactive Playground

Test all 21 animations in real-time with our new interactive playground:
- Select any animation from a dropdown
- Adjust duration (200-2000ms) and delay (0-1000ms) with sliders
- See live preview instantly
- Copy generated code with one click

### 📦 Example Components

Production-ready components for common use cases:

#### E-commerce
```tsx
<ProductCard 
  title="Premium Headphones" 
  price="$299" 
  image="🎧" 
  delay={0} 
/>
```

#### Hero Sections
```tsx
<HeroSection />
```

#### Pricing Tables
```tsx
<PricingCard
  name="Pro"
  price="$29"
  period="month"
  features={['Unlimited projects', 'Priority support']}
  highlighted={true}
/>
```

#### Features & Testimonials
```tsx
<FeatureCard icon="⚡" title="Fast" description="Lightning-fast performance" />
<TestimonialCard quote="Amazing!" author="John Doe" role="Developer" avatar="👨" />
```

### 📚 Enhanced Documentation

Comprehensive documentation with 7 major sections:

1. **Getting Started** - Installation, quick start, Next.js setup, browser support
2. **Components** - Detailed docs for all 5 core components with props
3. **Animations** - All 21 animation types with descriptions
4. **Interactive Playground** - Live demo with real-time controls
5. **Examples** - Real-world use cases with live previews
6. **API Reference** - Complete TypeScript interfaces and types
7. **Troubleshooting** - Common issues and solutions

### 🛠️ Developer Experience

#### CodeBlock Component
- Syntax highlighting
- One-click copy functionality
- Language indicator
- Clean, modern design

#### Better Error Handling
- Safety checks for undefined animations
- Improved error messages
- Better debugging logs

### 🚀 Performance

- Zero dependencies maintained
- Bundle size: 9.3KB (unchanged)
- Native browser APIs for optimal performance
- All animations GPU-accelerated

## 📖 Documentation

Visit our enhanced documentation at:
- **Docs**: https://easyscroll.chemmangathari.in/easy-scroll/docs
- **Demo**: https://easyscroll.chemmangathari.in/easy-scroll/demo
- **npm**: https://www.npmjs.com/package/@chemmangat/easy-scroll

## 🔧 Installation

```bash
npm install @chemmangat/easy-scroll@1.1.0
```

## 📝 Quick Example

```tsx
import { RevealOnScroll, InteractiveDemo } from '@chemmangat/easy-scroll';

// Use any of the 21 animations
<RevealOnScroll animation="fadeInUp">
  <h1>Hello World!</h1>
</RevealOnScroll>

// Try the interactive playground
<InteractiveDemo />
```

## 🐛 Bug Fixes

- Fixed undefined animation error for new animation types
- Added safety checks to prevent runtime errors
- Improved TypeScript type definitions

## 💡 What's Next?

Looking ahead to v1.2.0:
- Animation callbacks (`onAnimationComplete`, `onAnimationStart`)
- Custom animation curves
- Animation presets (subtle, normal, dramatic)
- Performance metrics display

## 🙏 Thank You

Thank you for using @chemmangat/easy-scroll! We're committed to making scroll animations easy, performant, and beautiful.

## 📞 Support

- **Issues**: https://github.com/chemmangat/easy-scroll/issues
- **Discussions**: https://github.com/chemmangat/easy-scroll/discussions
- **Website**: https://easyscroll.chemmangathari.in

---

**Full Changelog**: https://github.com/chemmangat/easy-scroll/compare/v1.0.2...v1.1.0

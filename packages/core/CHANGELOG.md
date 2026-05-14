# Changelog

All notable changes to @chemmangat/easy-scroll will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-05-14

### Added

#### 16 New Animation Types (total: 37)
- `swingIn` — pendulum swing from top anchor
- `dropIn` — drop from above with scale
- `riseFade` — rise up with blur fade (combines translate + blur)
- `expandWidth` — expand from left edge (scaleX)
- `shrinkIn` — shrink from oversized
- `tiltLeft` — tilt and slide from right
- `tiltRight` — tilt and slide from left
- `popIn` — pop up with scale + translate
- `glideUp` — long glide from bottom (100px)
- `glideDown` — long glide from top (100px)
- `glideLeft` — long glide from left (120px)
- `glideRight` — long glide from right (120px)
- `spiralIn` — full 180° rotation + scale in
- `stretchIn` — stretch from flat (scaleY) to normal
- `rollInLeft` — roll in from left with rotation
- `rollInRight` — roll in from right with rotation

#### New Component Features
- `onAnimationStart` callback — fires when animation begins
- `onAnimationComplete` callback — fires when animation finishes
- `as` prop on `RevealOnScroll` — polymorphic rendering, no forced `<div>` wrapper
- `StaggerChildren` now forwards `onAnimationStart` (first child) and `onAnimationComplete` (last child)

#### Accessibility
- `prefers-reduced-motion` support — animations are skipped entirely for users who prefer reduced motion; elements are shown immediately in their final state

### Changed
- `UseScrollAnimationReturn` is now an exported interface
- Improved `once={false}` behavior — properly resets element styles when it leaves the viewport
- Increased blur amount for `blurIn` from 10px to 12px for a more pronounced effect
- Increased slide offsets for `slideIn*` variants (40px → 80px) for more visible motion

### Fixed
- Removed all `console.log` debug statements from production code
- Fixed `once={false}` not resetting animation state correctly

### Breaking Changes
- `console.log` statements removed (no functional impact, but output will differ)
- `slideIn*` offset values increased — may affect layouts relying on exact pixel values

## [1.1.0] - 2026-02-20

### Added

#### New Animation Types (12 new animations)
- `fadeInLeft` - Fade in from left side
- `fadeInRight` - Fade in from right side
- `slideInUp` - Slide in from bottom
- `slideInDown` - Slide in from top
- `rotateInLeft` - Rotate in from left
- `rotateInRight` - Rotate in from right
- `flipIn` - Flip animation
- `flipInX` - Flip on X axis
- `flipInY` - Flip on Y axis
- `bounceIn` - Bounce effect
- `zoomIn` - Zoom in effect
- `zoomOut` - Zoom out effect

#### New Components
- `CodeBlock` - Syntax-highlighted code display with copy functionality
- `AnimationPreview` - Live animation preview component
- `InteractiveDemo` - Interactive playground for testing animations
- `ProductCard` - E-commerce product card example
- `HeroSection` - Hero section example component
- `PricingCard` - Pricing table card example
- `FeatureCard` - Feature showcase card example
- `TestimonialCard` - Testimonial card example

#### Documentation
- Enhanced Getting Started guide with troubleshooting
- Detailed component documentation with all props
- Interactive playground section
- Comprehensive examples section with real-world use cases
- Complete API reference with TypeScript types
- Troubleshooting guide for common issues
- Performance tips and best practices
- Browser compatibility information

### Fixed
- Fixed undefined animation error by adding all 21 animation types to TypeScript definitions
- Added safety check to prevent runtime errors for missing animation types
- Improved error logging for debugging

### Changed
- Updated animation type definitions to include all 21 animations
- Enhanced CodeBlock component with better spacing and icons
- Improved button styling with proper padding and gaps

### Performance
- All animations use native browser APIs for optimal performance
- Zero dependencies maintained
- Bundle size remains at 9.3KB

## [1.0.2] - 2026-02-15

### Fixed
- Fixed npm package references
- Updated README with correct package name
- Corrected homepage URL

### Changed
- Accurate bundle size reporting (9.3KB)

## [1.0.1] - 2026-02-10

### Added
- Initial release with 9 animation types
- Core components: RevealOnScroll, ScrollProgress, CountOnScroll, StaggerChildren, ParallaxSection
- TypeScript support
- Zero dependencies

### Features
- Intersection Observer API integration
- Customizable animation options (delay, duration, threshold, easing)
- React 18+ compatibility
- Server-side rendering support

[1.1.0]: https://github.com/chemmangat/easy-scroll/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/chemmangat/easy-scroll/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/chemmangat/easy-scroll/releases/tag/v1.0.1

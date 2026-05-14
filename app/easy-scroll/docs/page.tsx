'use client';

import { ScrollProgress } from '@/src/components/ScrollProgress';
import { InteractiveDemo } from '@/src/components/InteractiveDemo';
import { CodeBlock } from '@/src/components/CodeBlock';
import { ProductCard } from '@/src/components/examples/ProductCard';
import { PricingCard } from '@/src/components/examples/PricingCard';
import { FeatureCard } from '@/src/components/examples/FeatureCard';
import { TestimonialCard } from '@/src/components/examples/TestimonialCard';
import { HeroSection } from '@/src/components/examples/HeroSection';
import { useState } from 'react';

export default function DocsPage() {
  const [selectedSection, setSelectedSection] = useState('getting-started');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'components', title: 'Components' },
    { id: 'animations', title: 'Animations' },
    { id: 'playground', title: 'Interactive Playground' },
    { id: 'examples', title: 'Examples' },
    { id: 'api', title: 'API Reference' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ];

  const handleSectionChange = (sectionId: string) => {
    setSelectedSection(sectionId);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <main className="bg-[#0c0c0c] text-white h-screen flex flex-col overflow-hidden font-sans">
      <ScrollProgress color="#6d28d9" height={1} />

      {/* Nav */}
      <header className="flex-shrink-0 flex items-center justify-between px-8 h-14 border-b border-white/[0.06] bg-[#0c0c0c]">
        <a href="/easy-scroll/about" className="text-sm text-white/50 hover:text-white transition-colors">
          easy-scroll
        </a>
        <nav className="flex items-center gap-6">
          <a href="/easy-scroll/about" className="text-sm text-white/40 hover:text-white/80 transition-colors">About</a>
          <a href="/easy-scroll/demo" className="text-sm text-white/40 hover:text-white/80 transition-colors">Demo</a>
          <a
            href="https://www.npmjs.com/package/@chemmangat/easy-scroll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 hover:text-white/80 transition-colors"
          >
            npm
          </a>
        </nav>
      </header>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[90]">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border border-white/[0.08] rounded-lg transition-all text-white text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-[80]"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex">
          {/* Sidebar */}
          <aside
            className={`
              fixed lg:relative inset-y-0 left-0 z-[85]
              w-56 flex-shrink-0 border-r border-white/[0.06]
              transform transition-transform duration-200 ease-in-out
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              bg-[#0c0c0c]
            `}
          >
            <div className="p-4 pt-6">
              <div className="lg:hidden flex justify-between items-center mb-6 px-2">
                <span className="text-xs text-white/30 font-mono tracking-wider">sections</span>
                <button onClick={() => setIsSidebarOpen(false)} className="text-white/30 hover:text-white/70 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-0.5">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                      selectedSection === section.id
                        ? 'text-white bg-white/[0.06]'
                        : 'text-white/35 hover:text-white/70 hover:bg-white/[0.03]'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="max-w-3xl mx-auto px-8 py-10 pb-24">
              {selectedSection === 'getting-started' && <GettingStarted />}
              {selectedSection === 'components' && <Components />}
              {selectedSection === 'animations' && <Animations />}
              {selectedSection === 'playground' && <Playground />}
              {selectedSection === 'examples' && <Examples />}
              {selectedSection === 'api' && <APIReference />}
              {selectedSection === 'troubleshooting' && <Troubleshooting />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function GettingStarted() {
  const installCode = `npm install @chemmangat/easy-scroll`;
  
  const quickStartCode = `import { RevealOnScroll } from '@chemmangat/easy-scroll';

export default function Page() {
  return (
    <RevealOnScroll animation="fadeInUp">
      <h1>Hello World!</h1>
    </RevealOnScroll>
  );
}`;

  const nextjsCode = `// app/layout.tsx or pages/_app.tsx
import '@chemmangat/easy-scroll/dist/styles.css'; // If styles are needed

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}`;

  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-4xl font-bold mb-6">Getting Started</h2>
      <p className="text-gray-400 text-lg mb-8">
        Get up and running with Easy Scroll in under 5 minutes.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Installation</h3>
      <p className="text-gray-400 mb-4">
        Install the package using npm, yarn, or pnpm:
      </p>
      <CodeBlock code={installCode} language="bash" />

      <h3 className="text-2xl font-bold mt-8 mb-4">Quick Start</h3>
      <p className="text-gray-400 mb-4">
        Import components and start animating:
      </p>
      <CodeBlock code={quickStartCode} />

      <h3 className="text-2xl font-bold mt-8 mb-4">Next.js Setup</h3>
      <p className="text-gray-400 mb-4">
        For Next.js projects, import in your root layout:
      </p>
      <CodeBlock code={nextjsCode} />

      <h3 className="text-2xl font-bold mt-8 mb-4">Key Features</h3>
      <ul className="space-y-2 text-gray-300 mb-6">
        <li>✓ 21 built-in animations</li>
        <li>✓ Zero dependencies</li>
        <li>✓ TypeScript support</li>
        <li>✓ 9.3KB bundle size</li>
        <li>✓ React 18+ compatible</li>
        <li>✓ Server-side rendering support</li>
        <li>✓ Intersection Observer API</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Browser Support</h3>
      <p className="text-gray-400 mb-4">
        Easy Scroll works in all modern browsers that support Intersection Observer:
      </p>
      <ul className="space-y-2 text-gray-300 mb-6">
        <li>✓ Chrome 51+</li>
        <li>✓ Firefox 55+</li>
        <li>✓ Safari 12.1+</li>
        <li>✓ Edge 15+</li>
      </ul>
    </div>
  );
}

function Components() {
  const revealCode = `<RevealOnScroll 
  animation="fadeInUp"
  delay={200}
  duration={800}
  threshold={0.1}
  once={true}
>
  <div>Your content</div>
</RevealOnScroll>`;

  const progressCode = `<ScrollProgress 
  color="#8b5cf6"
  height={4}
/>`;

  const countCode = `<CountOnScroll 
  from={0}
  to={1000}
  duration={2000}
/>`;

  const staggerCode = `<StaggerChildren 
  animation="fadeInUp"
  staggerDelay={150}
>
  <Card />
  <Card />
  <Card />
</StaggerChildren>`;

  const parallaxCode = `<ParallaxSection 
  speed={0.5}
  className="min-h-screen"
>
  <div>Parallax content</div>
</ParallaxSection>`;

  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-4xl font-bold mb-6">Components</h2>
      <p className="text-gray-400 mb-8">All available components and their usage.</p>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-3">RevealOnScroll</h3>
          <p className="text-gray-400 mb-4">
            Animate elements when they scroll into view. The most versatile component with 21 animation types.
          </p>
          <CodeBlock code={revealCode} />
          <div className="mt-4 bg-zinc-950 border border-zinc-800 rounded-lg p-4">
            <h4 className="text-lg font-bold mb-2">Props:</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><code className="text-purple-400">animation</code>: Animation type (required)</li>
              <li><code className="text-purple-400">delay</code>: Delay in ms (default: 0)</li>
              <li><code className="text-purple-400">duration</code>: Duration in ms (default: 600)</li>
              <li><code className="text-purple-400">threshold</code>: Visibility threshold 0-1 (default: 0.1)</li>
              <li><code className="text-purple-400">once</code>: Animate only once (default: true)</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">ScrollProgress</h3>
          <p className="text-gray-400 mb-4">
            Display a progress bar that fills as the user scrolls down the page.
          </p>
          <CodeBlock code={progressCode} />
          <div className="mt-4 bg-zinc-950 border border-zinc-800 rounded-lg p-4">
            <h4 className="text-lg font-bold mb-2">Props:</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><code className="text-purple-400">color</code>: Color or gradient (default: &apos;#8b5cf6&apos;)</li>
              <li><code className="text-purple-400">height</code>: Height in pixels (default: 3)</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">CountOnScroll</h3>
          <p className="text-gray-400 mb-4">
            Animate numbers counting up when they scroll into view.
          </p>
          <CodeBlock code={countCode} />
          <div className="mt-4 bg-zinc-950 border border-zinc-800 rounded-lg p-4">
            <h4 className="text-lg font-bold mb-2">Props:</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><code className="text-purple-400">from</code>: Starting number (default: 0)</li>
              <li><code className="text-purple-400">to</code>: Ending number (required)</li>
              <li><code className="text-purple-400">duration</code>: Duration in ms (default: 2000)</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">StaggerChildren</h3>
          <p className="text-gray-400 mb-4">
            Animate child elements with a stagger delay between each.
          </p>
          <CodeBlock code={staggerCode} />
          <div className="mt-4 bg-zinc-950 border border-zinc-800 rounded-lg p-4">
            <h4 className="text-lg font-bold mb-2">Props:</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><code className="text-purple-400">animation</code>: Animation type (required)</li>
              <li><code className="text-purple-400">staggerDelay</code>: Delay between children in ms (default: 100)</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">ParallaxSection</h3>
          <p className="text-gray-400 mb-4">
            Create parallax scrolling effects with adjustable speed.
          </p>
          <CodeBlock code={parallaxCode} />
          <div className="mt-4 bg-zinc-950 border border-zinc-800 rounded-lg p-4">
            <h4 className="text-lg font-bold mb-2">Props:</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><code className="text-purple-400">speed</code>: Parallax speed multiplier (default: 0.5)</li>
              <li><code className="text-purple-400">className</code>: Additional CSS classes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Animations() {
  const groups = [
    {
      label: 'Fade',
      color: 'text-blue-400',
      items: [
        { name: 'fadeIn', desc: 'Smooth opacity transition' },
        { name: 'fadeInUp', desc: 'Fade in from bottom' },
        { name: 'fadeInDown', desc: 'Fade in from top' },
        { name: 'fadeInLeft', desc: 'Fade in from left' },
        { name: 'fadeInRight', desc: 'Fade in from right' },
      ],
    },
    {
      label: 'Slide',
      color: 'text-cyan-400',
      items: [
        { name: 'slideInLeft', desc: 'Slide from left (larger offset)' },
        { name: 'slideInRight', desc: 'Slide from right (larger offset)' },
        { name: 'slideInUp', desc: 'Slide from bottom (larger offset)' },
        { name: 'slideInDown', desc: 'Slide from top (larger offset)' },
      ],
    },
    {
      label: 'Scale',
      color: 'text-green-400',
      items: [
        { name: 'scaleUp', desc: 'Scale from small to normal' },
        { name: 'scaleDown', desc: 'Scale from large to normal' },
        { name: 'zoomIn', desc: 'Zoom in from very small' },
        { name: 'zoomOut', desc: 'Zoom in from oversized' },
        { name: 'bounceIn', desc: 'Bounce scale effect' },
      ],
    },
    {
      label: 'Rotate',
      color: 'text-yellow-400',
      items: [
        { name: 'rotateIn', desc: 'Slight rotate + scale in' },
        { name: 'rotateInLeft', desc: 'Rotate in from left angle' },
        { name: 'rotateInRight', desc: 'Rotate in from right angle' },
      ],
    },
    {
      label: 'Special',
      color: 'text-pink-400',
      items: [
        { name: 'blurIn', desc: 'Blur to sharp transition' },
        { name: 'flipIn', desc: '3D flip on Y axis' },
        { name: 'flipInX', desc: '3D flip on X axis' },
        { name: 'flipInY', desc: '3D flip on Y axis (alias)' },
      ],
    },
    {
      label: 'New in 2.0',
      color: 'text-purple-400',
      badge: true,
      items: [
        { name: 'swingIn', desc: 'Pendulum swing from top' },
        { name: 'dropIn', desc: 'Drop from above with scale' },
        { name: 'riseFade', desc: 'Rise up with blur fade' },
        { name: 'expandWidth', desc: 'Expand from left edge' },
        { name: 'shrinkIn', desc: 'Shrink from oversized' },
        { name: 'tiltLeft', desc: 'Tilt and slide from right' },
        { name: 'tiltRight', desc: 'Tilt and slide from left' },
        { name: 'popIn', desc: 'Pop up with scale + translate' },
        { name: 'glideUp', desc: 'Long glide from bottom' },
        { name: 'glideDown', desc: 'Long glide from top' },
        { name: 'glideLeft', desc: 'Long glide from left' },
        { name: 'glideRight', desc: 'Long glide from right' },
        { name: 'spiralIn', desc: 'Full rotation + scale in' },
        { name: 'stretchIn', desc: 'Stretch from flat to normal' },
        { name: 'rollInLeft', desc: 'Roll in from left with rotation' },
        { name: 'rollInRight', desc: 'Roll in from right with rotation' },
      ],
    },
  ];

  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-4xl font-bold mb-2">Animation Types</h2>
      <p className="text-gray-400 mb-8">37 built-in animations across 6 categories. 16 new in v2.0.</p>

      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-sm font-semibold text-white/60 font-mono tracking-wider uppercase">{group.label}</h3>
              {group.badge && (
                <span className="text-[10px] font-mono text-white/30 border border-white/[0.08] px-1.5 py-0.5 rounded">
                  new
                </span>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              {group.items.map((anim) => (
                <div key={anim.name} className="border border-white/[0.06] rounded-lg p-3 hover:border-white/[0.12] transition-all bg-white/[0.01]">
                  <code className="text-white/70 text-sm font-mono">{anim.name}</code>
                  <p className="text-white/30 text-xs mt-1">{anim.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-white/[0.07] rounded-lg p-5">
        <p className="text-white/40 text-sm">
          Try all 37 animations in the Interactive Playground. <code className="text-white/60 font-mono text-xs">riseFade</code>, <code className="text-white/60 font-mono text-xs">popIn</code>, and <code className="text-white/60 font-mono text-xs">spiralIn</code> are worth checking out.
        </p>
      </div>
    </div>
  );
}

function Playground() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-4xl font-bold mb-6">Interactive Playground</h2>
      <p className="text-gray-400 mb-8">
        Experiment with all 37 animations and adjust parameters in real-time.
      </p>
      
      <InteractiveDemo />

      <div className="mt-8 border border-white/[0.07] rounded-lg p-5">
        <p className="text-white/40 text-sm">Select an animation, adjust duration and delay, click Replay to preview, then copy the generated code.</p>
      </div>
    </div>
  );
}

function Examples() {
  const basicCode = `<RevealOnScroll animation="fadeInUp">
  <h1>Hello World</h1>
</RevealOnScroll>`;

  const staggerCode = `<StaggerChildren 
  animation="fadeInUp"
  staggerDelay={150}
>
  <Card />
  <Card />
  <Card />
</StaggerChildren>`;

  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-4xl font-bold mb-6">Examples</h2>
      <p className="text-gray-400 mb-8">Real-world examples and common use cases.</p>
      
      {/* Hero Section Example */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Hero Section</h3>
        <p className="text-gray-400 mb-4">
          Create an engaging hero section with staggered animations.
        </p>
        <div className="mb-4">
          <HeroSection />
        </div>
      </div>

      {/* E-commerce Products */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">E-commerce Product Cards</h3>
        <p className="text-gray-400 mb-4">
          Showcase products with smooth reveal animations.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <ProductCard title="Premium Headphones" price="$299" image="🎧" delay={0} />
          <ProductCard title="Smart Watch" price="$399" image="⌚" delay={100} />
          <ProductCard title="Wireless Earbuds" price="$199" image="🎵" delay={200} />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Feature Showcase</h3>
        <p className="text-gray-400 mb-4">
          Highlight key features with animated cards.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <FeatureCard 
            icon="⚡" 
            title="Lightning Fast" 
            description="Optimized for performance with native browser APIs"
            delay={0}
          />
          <FeatureCard 
            icon="🎨" 
            title="Customizable" 
            description="Full control over timing, easing, and animations"
            delay={100}
          />
          <FeatureCard 
            icon="📦" 
            title="Zero Dependencies" 
            description="Lightweight with no external dependencies"
            delay={200}
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
        <p className="text-gray-400 mb-4">
          Display customer testimonials with elegant animations.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <TestimonialCard
            quote="Easy Scroll made adding animations to my site incredibly simple. The API is intuitive and the results are stunning."
            author="Sarah Johnson"
            role="Frontend Developer"
            avatar="👩"
            delay={0}
          />
          <TestimonialCard
            quote="The performance is outstanding. Zero dependencies and a tiny bundle size make it perfect for production apps."
            author="Mike Chen"
            role="Tech Lead"
            avatar="👨"
            delay={100}
          />
        </div>
      </div>

      {/* Pricing Tables */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Pricing Tables</h3>
        <p className="text-gray-400 mb-4">
          Create compelling pricing sections with scale animations.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <PricingCard
            name="Starter"
            price="$9"
            period="month"
            features={[
              'Up to 10 projects',
              'Basic animations',
              'Community support',
              'Regular updates'
            ]}
            delay={0}
          />
          <PricingCard
            name="Pro"
            price="$29"
            period="month"
            features={[
              'Unlimited projects',
              'All animations',
              'Priority support',
              'Advanced features',
              'Custom integrations'
            ]}
            highlighted={true}
            delay={100}
          />
          <PricingCard
            name="Enterprise"
            price="$99"
            period="month"
            features={[
              'Everything in Pro',
              'Dedicated support',
              'Custom development',
              'SLA guarantee'
            ]}
            delay={200}
          />
        </div>
      </div>

      {/* Code Examples */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Basic Animation</h3>
          <CodeBlock code={basicCode} />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Stagger Children</h3>
          <CodeBlock code={staggerCode} />
        </div>
      </div>
    </div>
  );
}

function APIReference() {
  const optionsCode = `interface ScrollAnimationOptions {
  delay?: number;           // Default: 0
  duration?: number;        // Default: 600
  threshold?: number;       // Default: 0.1
  once?: boolean;           // Default: true
  easing?: string;          // Default: 'ease-out'
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}`;

  const animationTypes = `type AnimationType =
  // Fade (5)
  | 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight'
  // Slide (4)
  | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown'
  // Scale (5)
  | 'scaleUp' | 'scaleDown' | 'zoomIn' | 'zoomOut' | 'bounceIn'
  // Rotate (3)
  | 'rotateIn' | 'rotateInLeft' | 'rotateInRight'
  // Special (4)
  | 'blurIn' | 'flipIn' | 'flipInX' | 'flipInY'
  // New in 2.0 (16)
  | 'swingIn' | 'dropIn' | 'riseFade' | 'expandWidth' | 'shrinkIn'
  | 'tiltLeft' | 'tiltRight' | 'popIn'
  | 'glideUp' | 'glideDown' | 'glideLeft' | 'glideRight'
  | 'spiralIn' | 'stretchIn' | 'rollInLeft' | 'rollInRight';`;

  const hookCode = `import { useScrollAnimation } from '@chemmangat/easy-scroll';

function MyComponent() {
  const { ref, isVisible, progress } = useScrollAnimation('riseFade', {
    duration: 800,
    threshold: 0.2,
    onAnimationStart: () => console.log('started'),
    onAnimationComplete: () => console.log('done'),
  });

  return <div ref={ref}>Progress: {Math.round(progress * 100)}%</div>;
}`;

  const asPropCode = `// Render as any HTML element — no forced <div> wrapper
<RevealOnScroll as="section" animation="fadeInUp">
  <h2>Section heading</h2>
</RevealOnScroll>

<RevealOnScroll as="li" animation="slideInLeft">
  <span>List item</span>
</RevealOnScroll>`;

  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-4xl font-bold mb-6">API Reference</h2>
      <p className="text-gray-400 mb-8">Complete API documentation for all components and hooks.</p>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-3">ScrollAnimationOptions</h3>
          <p className="text-gray-400 mb-4">
            Configuration options for scroll animations.
          </p>
          <CodeBlock code={optionsCode} language="typescript" />
          
          <div className="mt-4 space-y-2">
            {[
              { prop: 'delay', desc: 'Delay before animation starts in ms.' },
              { prop: 'duration', desc: 'Animation duration in ms.' },
              { prop: 'threshold', desc: 'IntersectionObserver threshold 0–1. How much of the element must be visible.' },
              { prop: 'once', desc: 'If true, plays once. If false, replays every time the element enters the viewport.' },
              { prop: 'easing', desc: "CSS easing function. e.g. 'ease-out', 'cubic-bezier(0.4, 0, 0.2, 1)'." },
              { prop: 'onAnimationStart', desc: 'Callback fired when the animation begins.' },
              { prop: 'onAnimationComplete', desc: 'Callback fired when the animation finishes.' },
            ].map(({ prop, desc }) => (
              <div key={prop} className="border border-white/[0.06] rounded-lg p-3 flex gap-4">
                <code className="text-white/60 font-mono text-xs shrink-0 pt-0.5">{prop}</code>
                <p className="text-white/30 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">AnimationType</h3>
          <p className="text-white/40 text-sm mb-4">All 37 animation types as a TypeScript union type.</p>
          <CodeBlock code={animationTypes} language="typescript" />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Polymorphic <code className="text-white/60 font-mono text-base">as</code> prop</h3>
          <p className="text-white/40 text-sm mb-4">
            Render RevealOnScroll as any HTML element. No forced div wrapper.
          </p>
          <CodeBlock code={asPropCode} />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">useScrollAnimation Hook</h3>
          <p className="text-white/40 text-sm mb-4">
            Low-level hook for custom scroll animation implementations.
          </p>
          <CodeBlock code={hookCode} />

          <div className="mt-4 border border-white/[0.06] rounded-lg p-4 space-y-2">
            {[
              { r: 'ref', d: 'Attach to your element.' },
              { r: 'isVisible', d: 'Boolean — whether the element is in the viewport.' },
              { r: 'progress', d: 'Number 0–1 — scroll progress relative to the element.' },
            ].map(({ r, d }) => (
              <div key={r} className="flex gap-4">
                <code className="text-white/60 font-mono text-xs shrink-0 pt-0.5">{r}</code>
                <p className="text-white/30 text-xs">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Performance tips</h3>
          <div className="space-y-2">
            {[
              { tip: 'once={true}', desc: 'Animations only run once — better for performance.' },
              { tip: 'threshold', desc: 'Lower values (0.1) trigger earlier, higher (0.5) wait for more visibility.' },
              { tip: 'Limit scope', desc: "Don't animate every element. Focus on content that benefits from it." },
            ].map(({ tip, desc }) => (
              <div key={tip} className="border border-white/[0.06] rounded-lg p-3 flex gap-4">
                <code className="text-white/60 font-mono text-xs shrink-0 pt-0.5">{tip}</code>
                <p className="text-white/30 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-bold mb-2">✓ Limit animations</h4>
              <p className="text-gray-300 text-sm">
                Don&apos;t animate every element. Focus on key content for the best user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Troubleshooting() {
  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-4xl font-bold mb-6">Troubleshooting</h2>
      <p className="text-white/40 text-sm mb-8">Common issues and how to fix them.</p>

      <div className="space-y-4">
        {[
          {
            q: 'Animations not working',
            a: "Check that you're importing from '@chemmangat/easy-scroll' and that the component is rendered client-side. Add 'use client' at the top of the file in Next.js.",
            code: `'use client';\nimport { RevealOnScroll } from '@chemmangat/easy-scroll';`,
          },
          {
            q: 'Animations trigger too early or too late',
            a: 'Adjust the threshold prop. Lower values (0.1) trigger sooner, higher values (0.5) wait for more of the element to be visible.',
            code: `<RevealOnScroll threshold={0.3}>`,
          },
          {
            q: 'TypeScript errors on AnimationType',
            a: 'Import the type explicitly.',
            code: `import type { AnimationType } from '@chemmangat/easy-scroll';`,
          },
          {
            q: 'Performance feels slow',
            a: "Set once={true} (default), limit how many elements you animate, and keep duration between 400–700ms.",
            code: null,
          },
        ].map(({ q, a, code }) => (
          <div key={q} className="border border-white/[0.06] rounded-lg p-5 space-y-3">
            <h3 className="text-sm font-semibold text-white">{q}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{a}</p>
            {code && <CodeBlock code={code} />}
          </div>
        ))}
      </div>
    </div>
  );
}

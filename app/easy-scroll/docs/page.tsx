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
    <main className="bg-black text-white h-screen flex flex-col overflow-hidden">
      <ScrollProgress color="linear-gradient(90deg, #8b5cf6, #ec4899)" height={3} />

      {/* Fixed Navigation */}
      <nav className="fixed top-4 left-4 md:top-6 md:left-6 z-[100] flex gap-2 md:gap-3 flex-wrap max-w-[calc(100vw-2rem)]">
        <a
          href="https://www.chemmangathari.in/"
          className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full hover:border-purple-500/50 transition-all group shadow-xl text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-semibold">Home</span>
        </a>
        <a
          href="/easy-scroll/about"
          className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-blue-600/90 backdrop-blur-md border border-blue-500/50 rounded-full hover:bg-blue-500/90 transition-all group shadow-xl text-sm md:text-base"
        >
          <span className="font-semibold">About</span>
        </a>
        <a
          href="/easy-scroll/demo"
          className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-purple-600/90 backdrop-blur-md border border-purple-500/50 rounded-full hover:bg-purple-500/90 transition-all group shadow-xl text-sm md:text-base"
        >
          <span className="font-semibold">Demo</span>
        </a>
      </nav>

      {/* Fixed Header */}
      <header className="flex-shrink-0 pt-24 md:pt-32 pb-6 md:pb-8 px-4 md:px-6 text-center bg-black">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Documentation
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
          Complete guide to @chemmangat/easy-scroll
        </p>
      </header>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[90]">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-500 rounded-full shadow-2xl transition-all text-white font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[80]"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 h-full">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 h-full">
            {/* Sidebar - Mobile Drawer / Desktop Fixed */}
            <aside
              className={`
                fixed lg:relative inset-y-0 left-0 z-[85]
                w-72 lg:w-64 flex-shrink-0
                transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                lg:transform-none
              `}
            >
              <div className="h-full lg:h-auto bg-black lg:bg-transparent p-4 lg:p-0 pt-6 lg:pt-0">
                {/* Mobile Close Button */}
                <div className="lg:hidden flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Sections</h2>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 overflow-y-auto max-h-[calc(100vh-8rem)] lg:max-h-none custom-scrollbar">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionChange(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all mb-2 text-sm md:text-base ${
                        selectedSection === section.id
                          ? 'bg-purple-600 text-white'
                          : 'hover:bg-zinc-800 text-gray-400'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-24 custom-scrollbar">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 md:p-6 lg:p-8">
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
  const animations = [
    { name: 'fadeIn', desc: 'Smooth opacity transition' },
    { name: 'fadeInUp', desc: 'Fade in from bottom' },
    { name: 'fadeInDown', desc: 'Fade in from top' },
    { name: 'fadeInLeft', desc: 'Fade in from left' },
    { name: 'fadeInRight', desc: 'Fade in from right' },
    { name: 'slideInLeft', desc: 'Slide from left side' },
    { name: 'slideInRight', desc: 'Slide from right side' },
    { name: 'slideInUp', desc: 'Slide from bottom' },
    { name: 'slideInDown', desc: 'Slide from top' },
    { name: 'scaleUp', desc: 'Scale from small to normal' },
    { name: 'scaleDown', desc: 'Scale from large to normal' },
    { name: 'rotateIn', desc: 'Rotate while fading in' },
    { name: 'rotateInLeft', desc: 'Rotate from left' },
    { name: 'rotateInRight', desc: 'Rotate from right' },
    { name: 'blurIn', desc: 'Blur to sharp transition' },
    { name: 'flipIn', desc: 'Flip animation' },
    { name: 'flipInX', desc: 'Flip on X axis' },
    { name: 'flipInY', desc: 'Flip on Y axis' },
    { name: 'bounceIn', desc: 'Bounce effect' },
    { name: 'zoomIn', desc: 'Zoom in effect' },
    { name: 'zoomOut', desc: 'Zoom out effect' },
  ];

  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-4xl font-bold mb-6">Animation Types</h2>
      <p className="text-gray-400 mb-8">21 built-in animation types to choose from.</p>
      
      <div className="grid md:grid-cols-2 gap-4">
        {animations.map((anim) => (
          <div key={anim.name} className="bg-black/50 border border-zinc-800 rounded-lg p-4 hover:border-purple-500/30 transition-all">
            <code className="text-purple-400 text-lg font-bold">{anim.name}</code>
            <p className="text-gray-400 text-sm mt-2">{anim.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">💡 Pro Tip</h3>
        <p className="text-gray-300">
          Try different animations in the Interactive Playground to see them in action and find the perfect fit for your design.
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
        Experiment with all 21 animations and adjust parameters in real-time.
      </p>
      
      <InteractiveDemo />

      <div className="mt-8 bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">🎮 How to Use</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Select an animation type from the dropdown</li>
          <li>• Adjust duration and delay with the sliders</li>
          <li>• Click &quot;Replay Animation&quot; to see changes</li>
          <li>• Copy the generated code to use in your project</li>
        </ul>
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
  delay?: number;        // Default: 0
  duration?: number;     // Default: 600
  threshold?: number;    // Default: 0.1
  once?: boolean;        // Default: true
  easing?: string;       // Default: 'ease-out'
}`;

  const animationTypes = `type AnimationType =
  | 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight'
  | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown'
  | 'scaleUp' | 'scaleDown' | 'rotateIn' | 'rotateInLeft' | 'rotateInRight'
  | 'blurIn' | 'flipIn' | 'flipInX' | 'flipInY' | 'bounceIn' | 'zoomIn' | 'zoomOut';`;

  const hookCode = `import { useScrollAnimation } from '@chemmangat/easy-scroll';

function MyComponent() {
  const { ref, isVisible } = useScrollAnimation({
    animation: 'fadeInUp',
    duration: 800,
    threshold: 0.2
  });

  return (
    <div ref={ref}>
      {isVisible ? 'Visible!' : 'Not visible'}
    </div>
  );
}`;

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
          
          <div className="mt-4 space-y-3">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="font-bold mb-2"><code className="text-purple-400">delay</code></h4>
              <p className="text-gray-400 text-sm">
                Delay before animation starts in milliseconds. Useful for creating staggered effects.
              </p>
            </div>
            
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="font-bold mb-2"><code className="text-purple-400">duration</code></h4>
              <p className="text-gray-400 text-sm">
                Animation duration in milliseconds. Controls how long the animation takes to complete.
              </p>
            </div>
            
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="font-bold mb-2"><code className="text-purple-400">threshold</code></h4>
              <p className="text-gray-400 text-sm">
                Intersection Observer threshold (0-1). Determines how much of the element must be visible before animating.
              </p>
            </div>
            
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="font-bold mb-2"><code className="text-purple-400">once</code></h4>
              <p className="text-gray-400 text-sm">
                If true, animation only plays once. If false, animation plays every time element enters viewport.
              </p>
            </div>
            
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="font-bold mb-2"><code className="text-purple-400">easing</code></h4>
              <p className="text-gray-400 text-sm">
                CSS easing function. Examples: &apos;ease-out&apos;, &apos;ease-in-out&apos;, &apos;cubic-bezier(0.4, 0, 0.2, 1)&apos;.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">AnimationType</h3>
          <p className="text-gray-400 mb-4">
            All available animation types as a TypeScript union type.
          </p>
          <CodeBlock code={animationTypes} language="typescript" />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">useScrollAnimation Hook</h3>
          <p className="text-gray-400 mb-4">
            Low-level hook for custom scroll animation implementations.
          </p>
          <CodeBlock code={hookCode} />
          
          <div className="mt-4 bg-zinc-950 border border-zinc-800 rounded-lg p-4">
            <h4 className="text-lg font-bold mb-2">Returns:</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><code className="text-purple-400">ref</code>: React ref to attach to your element</li>
              <li><code className="text-purple-400">isVisible</code>: Boolean indicating if element is in viewport</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Performance Tips</h3>
          <div className="space-y-3">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-bold mb-2">✓ Use <code className="text-purple-400">once={`{true}`}</code></h4>
              <p className="text-gray-300 text-sm">
                For better performance, set once to true so animations only run once.
              </p>
            </div>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-bold mb-2">✓ Adjust threshold</h4>
              <p className="text-gray-300 text-sm">
                Lower threshold values (0.1) trigger animations earlier, higher values (0.5) wait until more of the element is visible.
              </p>
            </div>
            
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
      <p className="text-gray-400 mb-8">Common issues and solutions.</p>
      
      <div className="space-y-6">
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">Animations not working</h3>
          <div className="space-y-3 text-gray-300">
            <p><strong>Check browser support:</strong> Ensure your browser supports Intersection Observer API.</p>
            <p><strong>Verify imports:</strong> Make sure you&apos;re importing from the correct package:</p>
            <CodeBlock code={`import { RevealOnScroll } from '@chemmangat/easy-scroll';`} />
            <p><strong>Check threshold:</strong> If threshold is too high, animations may not trigger. Try lowering it to 0.1.</p>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">Animations triggering too early/late</h3>
          <div className="space-y-3 text-gray-300">
            <p><strong>Adjust threshold:</strong> Control when animations trigger by adjusting the threshold prop:</p>
            <CodeBlock code={`<RevealOnScroll threshold={0.3}> // Triggers when 30% visible`} />
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">TypeScript errors</h3>
          <div className="space-y-3 text-gray-300">
            <p><strong>Install types:</strong> The package includes TypeScript definitions. Ensure you&apos;re using TypeScript 4.0+.</p>
            <p><strong>Import types:</strong> Import types explicitly if needed:</p>
            <CodeBlock code={`import type { AnimationType, ScrollAnimationOptions } from '@chemmangat/easy-scroll';`} />
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">Performance issues</h3>
          <div className="space-y-3 text-gray-300">
            <p><strong>Use once prop:</strong> Set <code className="text-purple-400">once={`{true}`}</code> to prevent re-animations.</p>
            <p><strong>Limit animations:</strong> Don&apos;t animate every element on the page.</p>
            <p><strong>Reduce duration:</strong> Shorter animations (400-600ms) feel snappier and perform better.</p>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">Next.js specific issues</h3>
          <div className="space-y-3 text-gray-300">
            <p><strong>Use &apos;use client&apos;:</strong> Add &apos;use client&apos; directive at the top of files using Easy Scroll:</p>
            <CodeBlock code={`'use client';\n\nimport { RevealOnScroll } from '@chemmangat/easy-scroll';`} />
            <p><strong>SSR considerations:</strong> Animations only work client-side. Components will render without animations during SSR.</p>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">Still having issues?</h3>
          <p className="text-gray-300 mb-4">
            If you&apos;re still experiencing problems, please:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Check the GitHub issues for similar problems</li>
            <li>• Create a minimal reproduction on CodeSandbox</li>
            <li>• Open a new issue with detailed information</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

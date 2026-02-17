'use client';

import { RevealOnScroll } from '@/src/components/RevealOnScroll';
import { ScrollProgress } from '@/src/components/ScrollProgress';
import { ParallaxSection } from '@/src/components/ParallaxSection';
import { CountOnScroll } from '@/src/components/CountOnScroll';
import { InteractivePlayground } from '@/src/components/InteractivePlayground';
import { LoopingCounter } from '@/src/components/LoopingCounter';
import { StaggerChildren } from '@/src/components/StaggerChildren';

export default function DemoPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <ScrollProgress color="linear-gradient(90deg, #8b5cf6, #ec4899)" height={4} />

      {/* Navigation */}
      <nav className="fixed top-4 left-4 md:top-6 md:left-6 z-[100] flex gap-2 md:gap-3">
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
          href="/showcase"
          className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-purple-600/90 backdrop-blur-md border border-purple-500/50 rounded-full hover:bg-purple-500/90 transition-all group shadow-xl text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="font-semibold">Showcase</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll animation="blurIn" duration={1200}>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Easy Scroll
              </span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll animation="fadeInUp" delay={300} duration={800}>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Native CSS animations. Zero dependencies.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll animation="fadeInUp" delay={500} duration={800}>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Lightweight scroll-driven animations using the native Scroll Timeline API. 
              Pure performance, pure elegance.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll animation="scaleUp" delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                onClick={() => window.open('https://www.npmjs.com/package/@chemmangat/easy-scroll', '_blank')}
                className="px-10 py-5 border-2 border-gray-700 rounded-full font-bold text-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all"
              >
                View Docs
              </button>
            </div>
          </RevealOnScroll>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Why Easy Scroll */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Easy Scroll</span>?
              </h2>
              <p className="text-xl text-gray-400">Three simple reasons</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <RevealOnScroll animation="fadeInUp" delay={100}>
              <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/30 rounded-2xl p-8 text-center h-full flex flex-col">
                <div className="text-5xl mb-4">1️⃣</div>
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Easy to Install</h3>
                <p className="text-gray-300 text-lg flex-grow">
                  One command. No configuration files. No setup headaches.
                </p>
                <div className="mt-4 bg-black/50 rounded-lg p-3 font-mono text-sm text-gray-400">
                  npm i @chemmangat/easy-scroll
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeInUp" delay={200}>
              <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-2xl p-8 text-center h-full flex flex-col">
                <div className="text-5xl mb-4">2️⃣</div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">Easy to Use</h3>
                <p className="text-gray-300 text-lg flex-grow">
                  Simple React components. Intuitive props. Works immediately.
                </p>
                <div className="mt-4 bg-black/50 rounded-lg p-3 font-mono text-sm text-gray-400">
                  &lt;RevealOnScroll animation=&quot;fadeIn&quot;&gt;
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeInUp" delay={300}>
              <div className="bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/30 rounded-2xl p-8 text-center h-full flex flex-col">
                <div className="text-5xl mb-4">3️⃣</div>
                <h3 className="text-2xl font-bold mb-3 text-pink-400">Easy on Performance</h3>
                <p className="text-gray-300 text-lg flex-grow">
                  Zero dependencies. Native browser APIs. Lightweight and fast.
                </p>
                <div className="mt-4 bg-black/50 rounded-lg p-3 font-mono text-sm text-gray-400">
                  0 dependencies • 10KB gzipped
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="scaleUp" delay={400}>
            <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                Easy to install. Easy to use. Easy on performance.
              </p>
              <p className="text-lg text-gray-400 mt-4">
                That&apos;s why it&apos;s called <span className="text-blue-400 font-semibold">Easy Scroll</span>.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll animation="fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-20 tracking-tight">
              Project Stats
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCard
              label="Bundle Size"
              value={<CountOnScroll from={0} to={3} duration={2000} formatFn={(n) => `${n.toFixed(1)}KB`} />}
              icon="📦"
            />
            <StatsCard
              label="Animation Types"
              value={<CountOnScroll from={0} to={9} duration={2000} />}
              icon="🎨"
            />
            <StatsCard
              label="Components"
              value={<CountOnScroll from={0} to={5} duration={2000} />}
              icon="⚡"
            />
            <StatsCard
              label="Dependencies"
              value={<CountOnScroll from={0} to={0} duration={2000} />}
              icon="🚀"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <RevealOnScroll animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
                Built for Speed
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                No bloat. No overhead. Just buttery smooth animations powered by native browser APIs.
              </p>
            </div>
          </RevealOnScroll>

          <StaggerChildren
            animation="scaleUp"
            staggerDelay={150}
            className="grid md:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon="⚡"
              title="Zero Dependencies"
              description="No GSAP. No Framer Motion. Pure native CSS Scroll Timeline API for maximum performance and minimal bundle size."
              gradient="from-yellow-500/20 to-orange-500/20"
            />
            <FeatureCard
              icon="🎨"
              title="9 Animation Types"
              description="Fade, slide, scale, rotate, blur — all the essentials with smooth easing curves and full customization."
              gradient="from-purple-500/20 to-pink-500/20"
            />
            <FeatureCard
              icon="🪝"
              title="React Hooks"
              description="Clean, composable hooks that feel natural in your React components. TypeScript-first with full type safety."
              gradient="from-blue-500/20 to-cyan-500/20"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* Interactive Playground Section */}
      <section id="playground" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="container mx-auto px-6">
          <RevealOnScroll animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
                Try It Live
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                See the animations in action. Click replay to watch them again.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-32">
            <RevealOnScroll animation="fadeInUp">
              <div>
                <h3 className="text-4xl font-black mb-8 text-purple-400">Reveal on Scroll</h3>
                <InteractivePlayground type="reveal" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeInUp">
              <div>
                <h3 className="text-4xl font-black mb-8 text-pink-400">Stagger Children</h3>
                <InteractivePlayground type="stagger" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeInUp">
              <div>
                <h3 className="text-4xl font-black mb-8 text-blue-400">Count Animation</h3>
                <InteractivePlayground type="count" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Showcase Section - Keep for visual demos */}
      <section className="py-32 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="container mx-auto px-6">
          <RevealOnScroll animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
                See It In Action
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Watch these animations loop continuously to see the smooth effects.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-40">
            <ShowcaseItem
              animation="slideInLeft"
              title="Reveal on Scroll"
              description="Elements fade in smoothly as they enter the viewport. Control timing, easing, and threshold with simple, intuitive props."
              align="left"
              color="purple"
            />
            <ShowcaseItem
              animation="slideInRight"
              title="Stagger Children"
              description="Animate lists and grids with cascading delays. Each child animates in sequence for a polished, professional effect."
              align="right"
              color="pink"
            />
            <ShowcaseItem
              animation="slideInLeft"
              title="Count Animations"
              description="Numbers that count up when scrolled into view. Perfect for stats, metrics, and impact sections that demand attention."
              align="left"
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection speed={0.5} className="py-48 my-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <RevealOnScroll animation="fadeIn" duration={1200}>
            <div className="text-center space-y-8">
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
              <blockquote className="text-3xl md:text-5xl font-light text-gray-100 leading-relaxed tracking-tight">
                The smoothest scroll animations. Native performance, zero overhead.
              </blockquote>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
            </div>
          </RevealOnScroll>
        </div>
      </ParallaxSection>

      {/* Cards Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <RevealOnScroll animation="fadeInUp">
            <h2 className="text-6xl md:text-7xl font-black text-center mb-20 tracking-tight">
              Everything You Need
            </h2>
          </RevealOnScroll>

          <StaggerChildren
            animation="scaleUp"
            staggerDelay={100}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <MiniCard icon="📘" title="TypeScript First" description="Fully typed with strict mode. IntelliSense everywhere." />
            <MiniCard icon="⚙️" title="SSR Ready" description="Works perfectly with Next.js App Router and server components." />
            <MiniCard icon="🎯" title="Tiny Bundle" description="Less than 3KB gzipped. Your users will thank you." />
            <MiniCard icon="📱" title="Mobile Optimized" description="Smooth 60fps animations on all devices." />
            <MiniCard icon="🎛️" title="Customizable" description="Full control over timing, easing, and thresholds." />
            <MiniCard icon="♿" title="Accessible" description="Respects prefers-reduced-motion for better UX." />
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll animation="fadeIn">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight mb-8">
                Ready to Elevate?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light px-4">
                Install @chemmangat/easy-scroll and start building beautiful scroll experiences today.
              </p>
              <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl px-4 py-4 md:px-8 md:py-6 font-mono text-sm md:text-lg mb-8">
                <span className="text-gray-500">$</span>
                <span className="text-purple-400">npm install</span>
                <span className="text-white break-all">@chemmangat/easy-scroll</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 mb-4">easy-scroll - Built with Next.js, TypeScript, and native CSS Scroll Timeline API</p>
          <p className="text-gray-600 text-sm">Zero dependencies • Pure performance • Open source</p>
        </div>
      </footer>
    </main>
  );
}

function StatsCard({ label, value, icon }: { label: string; value: React.ReactNode; icon: string }) {
  return (
    <RevealOnScroll animation="scaleUp" duration={600}>
      <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 text-center hover:border-purple-500/50 transition-all hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all" />
        <div className="relative">
          <div className="text-5xl mb-4">{icon}</div>
          <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            {value}
          </div>
          <div className="text-gray-400 text-sm uppercase tracking-widest font-semibold">{label}</div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function FeatureCard({ icon, title, description, gradient }: { icon: string; title: string; description: string; gradient: string }) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-3xl p-10 backdrop-blur-sm hover:border-gray-700 transition-all hover:scale-105 flex flex-col h-full">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity`} />
      <div className="relative flex flex-col h-full">
        <div className="text-6xl mb-6">{icon}</div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-lg flex-grow">{description}</p>
      </div>
    </div>
  );
}

function ShowcaseItem({
  animation,
  title,
  description,
  align,
  color,
}: {
  animation: 'slideInLeft' | 'slideInRight';
  title: string;
  description: string;
  align: 'left' | 'right';
  color: string;
}) {
  const colorMap: Record<string, string> = {
    purple: 'from-purple-600/20 to-purple-600/5',
    pink: 'from-pink-600/20 to-pink-600/5',
    blue: 'from-blue-600/20 to-blue-600/5',
  };

  return (
    <RevealOnScroll animation={animation} duration={1000}>
      <div className={`flex flex-col md:flex-row items-center gap-16 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1">
          <div className={`relative bg-gradient-to-br ${colorMap[color]} border border-gray-800 rounded-3xl aspect-video flex items-center justify-center overflow-hidden group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Animated demo elements inside the box */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {color === 'purple' && (
                <div className="space-y-4 w-full">
                  <div className="animate-[fadeInUp_2s_ease-in-out_infinite] bg-purple-500/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-4 text-center">
                    <span className="text-sm font-semibold">Fade In Up</span>
                  </div>
                  <div className="animate-[fadeInUp_2s_ease-in-out_0.3s_infinite] bg-purple-500/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-4 text-center">
                    <span className="text-sm font-semibold">Staggered</span>
                  </div>
                  <div className="animate-[fadeInUp_2s_ease-in-out_0.6s_infinite] bg-purple-500/30 backdrop-blur-sm border border-purple-500/50 rounded-xl p-4 text-center">
                    <span className="text-sm font-semibold">Animation</span>
                  </div>
                </div>
              )}
              
              {color === 'pink' && (
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="animate-[scaleUp_2s_ease-in-out_infinite] bg-pink-500/30 backdrop-blur-sm border border-pink-500/50 rounded-xl aspect-square flex items-center justify-center">
                    <span className="text-2xl">1</span>
                  </div>
                  <div className="animate-[scaleUp_2s_ease-in-out_0.2s_infinite] bg-pink-500/30 backdrop-blur-sm border border-pink-500/50 rounded-xl aspect-square flex items-center justify-center">
                    <span className="text-2xl">2</span>
                  </div>
                  <div className="animate-[scaleUp_2s_ease-in-out_0.4s_infinite] bg-pink-500/30 backdrop-blur-sm border border-pink-500/50 rounded-xl aspect-square flex items-center justify-center">
                    <span className="text-2xl">3</span>
                  </div>
                </div>
              )}
              
              {color === 'blue' && (
                <div className="text-center">
                  <div className="text-7xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    <LoopingCounter from={0} to={9999} duration={2000} formatFn={(n) => n.toLocaleString()} />
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Live Counter</div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-5xl font-black mb-6 tracking-tight">{title}</h3>
          <p className="text-xl text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function MiniCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all group hover:scale-105 flex flex-col h-full">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
    </div>
  );
}

'use client';

import { 
  RevealOnScroll, 
  ScrollProgress, 
  CountOnScroll, 
  StaggerChildren
} from '@chemmangat/easy-scroll';

export default function ShowcasePage() {
  return (
    <main className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      <ScrollProgress color="linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)" height={3} />

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
          href="/demo"
          className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-blue-600/90 backdrop-blur-md border border-blue-500/50 rounded-full hover:bg-blue-500/90 transition-all group shadow-xl text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
          <span className="font-semibold">Demo</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <RevealOnScroll animation="fadeIn" duration={1000}>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">Powered by @chemmangat/easy-scroll</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeInUp" delay={200}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Showcase
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeInUp" delay={400}>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              A stunning demonstration of scroll-driven animations using the published npm package
            </p>
          </RevealOnScroll>

          <RevealOnScroll animation="scaleUp" delay={600}>
            <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 md:px-6 font-mono text-sm md:text-base">
              <span className="text-green-400">✓</span>
              <span className="text-gray-400">npm i</span>
              <span className="text-white break-all">@chemmangat/easy-scroll</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Easy Scroll */}
      <section className="py-24 px-6 bg-gradient-to-b from-zinc-950 via-blue-950/10 to-zinc-950">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Easy Scroll</span>?
              </h2>
              <p className="text-lg text-gray-400">Three simple reasons</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <RevealOnScroll animation="fadeInUp" delay={100}>
              <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/30 rounded-2xl p-8 text-center h-full flex flex-col">
                <div className="text-5xl mb-4">1️⃣</div>
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Easy to Install</h3>
                <p className="text-gray-300 flex-grow">
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
                <p className="text-gray-300 flex-grow">
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
                <p className="text-gray-300 flex-grow">
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
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                Easy to install. Easy to use. Easy on performance.
              </p>
              <p className="text-lg text-gray-400 mt-4">
                That&apos;s why it&apos;s called <span className="text-blue-400 font-semibold">Easy Scroll</span>.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Real-Time Counters
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealOnScroll animation="scaleUp" duration={600}>
              <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl p-8 text-center h-40 flex flex-col justify-center">
                <div className="text-5xl font-black text-blue-400 mb-2">
                  <CountOnScroll from={0} to={500} duration={2000} />+
                </div>
                <p className="text-gray-400 uppercase text-sm tracking-wider">Downloads</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="scaleUp" duration={600} delay={100}>
              <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl p-8 text-center h-40 flex flex-col justify-center">
                <div className="text-5xl font-black text-purple-400 mb-2">
                  <CountOnScroll from={0} to={150} duration={2000} />+
                </div>
                <p className="text-gray-400 uppercase text-sm tracking-wider">Stars</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="scaleUp" duration={600} delay={200}>
              <div className="bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/20 rounded-2xl p-8 text-center h-40 flex flex-col justify-center">
                <div className="text-5xl font-black text-pink-400 mb-2">
                  <CountOnScroll from={0} to={9} duration={1500} />
                </div>
                <p className="text-gray-400 uppercase text-sm tracking-wider">Animations</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Feature Cards with Stagger */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Why Choose Easy Scroll?
            </h2>
            <p className="text-center text-gray-400 text-lg mb-16">
              Built with performance and simplicity in mind
            </p>
          </RevealOnScroll>

          <StaggerChildren animation="fadeInUp" staggerDelay={120} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-400 leading-relaxed">
                Uses native browser APIs for optimal performance without any overhead
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Customizable</h3>
              <p className="text-gray-400 leading-relaxed">
                9 animation types with full control over timing, easing, and delays
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500/30 transition-all">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold mb-3">Zero Dependencies</h3>
              <p className="text-gray-400 leading-relaxed">
                Lightweight package with no external dependencies to bloat your bundle
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-green-500/30 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Easy to Use</h3>
              <p className="text-gray-400 leading-relaxed">
                Simple React components that work out of the box with minimal setup
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500/30 transition-all">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">Responsive</h3>
              <p className="text-gray-400 leading-relaxed">
                Works seamlessly across all devices and screen sizes
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">TypeScript</h3>
              <p className="text-gray-400 leading-relaxed">
                Full TypeScript support with comprehensive type definitions
              </p>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Parallax Quote */}
      <section className="py-32 my-24 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll animation="fadeIn" duration={1000}>
            <div className="space-y-6">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              <blockquote className="text-3xl md:text-5xl font-light text-gray-200 leading-relaxed">
                &ldquo;Smooth animations that bring your content to life&rdquo;
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Animation Types */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              9 Animation Types
            </h2>
            <p className="text-center text-gray-400 text-lg mb-16">
              Choose the perfect animation for your content
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            <RevealOnScroll animation="fadeIn">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">fadeIn</div>
                <p className="text-gray-400 text-sm">Smooth opacity transition</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeInUp">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">fadeInUp</div>
                <p className="text-gray-400 text-sm">Fade in from bottom</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeInDown">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">fadeInDown</div>
                <p className="text-gray-400 text-sm">Fade in from top</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="slideInLeft">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">slideInLeft</div>
                <p className="text-gray-400 text-sm">Slide from left side</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="slideInRight">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">slideInRight</div>
                <p className="text-gray-400 text-sm">Slide from right side</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="scaleUp">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">scaleUp</div>
                <p className="text-gray-400 text-sm">Scale from small to normal</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="scaleDown">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">scaleDown</div>
                <p className="text-gray-400 text-sm">Scale from large to normal</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="rotateIn">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">rotateIn</div>
                <p className="text-gray-400 text-sm">Rotate while fading in</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="blurIn">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">blurIn</div>
                <p className="text-gray-400 text-sm">Blur to sharp transition</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll animation="scaleUp">
            <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Install the package and start creating beautiful scroll animations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.npmjs.com/package/@chemmangat/easy-scroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View on npm
                </a>
                <a
                  href="/demo"
                  className="px-8 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700"
                >
                  View Demo
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            Built with ❤️ using @chemmangat/easy-scroll
          </p>
        </div>
      </footer>
    </main>
  );
}

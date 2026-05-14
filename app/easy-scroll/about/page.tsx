'use client';

import { RevealOnScroll } from '@/src/components/RevealOnScroll';
import { ScrollProgress } from '@/src/components/ScrollProgress';
import { CountOnScroll } from '@/src/components/CountOnScroll';
import { StaggerChildren } from '@/src/components/StaggerChildren';

export default function AboutPage() {
  const ALL = [
    'fadeIn','fadeInUp','fadeInDown','fadeInLeft','fadeInRight',
    'slideInLeft','slideInRight','slideInUp','slideInDown',
    'scaleUp','scaleDown','zoomIn','zoomOut','bounceIn',
    'rotateIn','rotateInLeft','rotateInRight',
    'blurIn','flipIn','flipInX','flipInY',
    'swingIn','dropIn','riseFade','expandWidth','shrinkIn',
    'tiltLeft','tiltRight','popIn',
    'glideUp','glideDown','glideLeft','glideRight',
    'spiralIn','stretchIn','rollInLeft','rollInRight',
  ];
  const NEW = new Set([
    'swingIn','dropIn','riseFade','expandWidth','shrinkIn',
    'tiltLeft','tiltRight','popIn','glideUp','glideDown',
    'glideLeft','glideRight','spiralIn','stretchIn','rollInLeft','rollInRight',
  ]);

  return (
    <main className="bg-[#0c0c0c] text-white min-h-screen w-full">
      <ScrollProgress color="#7c3aed" height={1} />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 h-14 border-b border-white/[0.07] bg-[#0c0c0c]/95 backdrop-blur-sm">
        <span className="text-sm font-semibold tracking-tight">easy-scroll</span>
        <div className="flex items-center gap-8 text-sm text-white/50">
          <a href="/easy-scroll/demo" className="hover:text-white transition-colors">Demo</a>
          <a href="/easy-scroll/docs" className="hover:text-white transition-colors">Docs</a>
          <a href="https://www.npmjs.com/package/@chemmangat/easy-scroll" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-white/70 transition-colors">npm</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-10 pt-36 pb-28">
        <RevealOnScroll animation="fadeIn" duration={500}>
          <span className="text-xs font-mono text-white/35 tracking-widest uppercase block mb-6">v2.0.0</span>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeInUp" delay={80} duration={700}>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 max-w-3xl">
            Scroll animations<br />that don&apos;t cost<br />you anything.
          </h1>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeInUp" delay={180} duration={600}>
          <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl">
            Zero dependencies. Uses IntersectionObserver and CSS transitions natively.
            Wrap a component, pick an animation, ship it.
          </p>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeInUp" delay={260} duration={600}>
          <div className="flex items-center gap-5 flex-wrap">
            <code className="text-sm font-mono text-white/80 bg-white/[0.06] border border-white/[0.1] px-5 py-3 rounded-lg whitespace-nowrap">
              npm i @chemmangat/easy-scroll
            </code>
            <a href="/easy-scroll/docs" className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
              Read the docs
            </a>
          </div>
        </RevealOnScroll>
      </section>

      {/* Stats */}
      <section className="border-t border-white/[0.07]">
        <RevealOnScroll animation="fadeIn" delay={300} duration={600}>
          <div className="max-w-5xl mx-auto px-10 grid grid-cols-3 divide-x divide-white/[0.07]">
            <div className="py-10 pr-10">
              <div className="text-4xl font-bold tabular-nums mb-2">
                <CountOnScroll from={0} to={37} duration={1400} />
              </div>
              <div className="text-sm text-white/40">animations</div>
            </div>
            <div className="py-10 px-10">
              <div className="text-4xl font-bold tabular-nums mb-2">
                <CountOnScroll from={0} to={0} duration={1400} />
              </div>
              <div className="text-sm text-white/40">dependencies</div>
            </div>
            <div className="py-10 pl-10">
              <div className="text-4xl font-bold tabular-nums mb-2">
                <CountOnScroll from={0} to={9.3} duration={1400} formatFn={(v) => v.toFixed(1) + "KB"} />
              </div>
              <div className="text-sm text-white/40">gzipped</div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* What it is */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-5xl mx-auto px-10 py-24 grid md:grid-cols-2 gap-16 items-start">
          <RevealOnScroll animation="fadeInLeft" duration={600}>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Five components.<br />Everything you need.</h2>
            <div className="space-y-3 text-[15px] text-white/60 leading-relaxed">
              <p>
                <span className="text-white font-medium">RevealOnScroll</span> — animate anything on scroll.
              </p>
              <p>
                <span className="text-white font-medium">StaggerChildren</span> — cascade animations across lists.
              </p>
              <p>
                <span className="text-white font-medium">ScrollProgress</span> — page progress indicator.
              </p>
              <p>
                <span className="text-white font-medium">CountOnScroll</span> — animated number counters.
              </p>
              <p>
                <span className="text-white font-medium">ParallaxSection</span> — depth through parallax.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fadeInRight" delay={100} duration={600}>
            <div className="rounded-xl border border-white/[0.08] overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="ml-3 text-xs text-white/30 font-mono">page.tsx</span>
              </div>
              <pre className="p-6 text-[13px] font-mono leading-relaxed text-white/60 overflow-x-auto bg-white/[0.01]">{`import { RevealOnScroll } from
  '@chemmangat/easy-scroll'

<RevealOnScroll
  animation="fadeInUp"
  delay={100}
  onAnimationComplete={onDone}
>
  <YourComponent />
</RevealOnScroll>

// any HTML element, no div wrapper
<RevealOnScroll as="li"
  animation="slideInLeft"
>
  <span>list item</span>
</RevealOnScroll>`}</pre>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* New in 2.0 */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-5xl mx-auto px-10 py-24">
          <RevealOnScroll animation="fadeIn" duration={600}>
            <h2 className="text-xs font-mono text-white/35 tracking-widest uppercase mb-12">New in v2.0</h2>
          </RevealOnScroll>

          <StaggerChildren animation="fadeInUp" staggerDelay={70} className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <p className="text-base font-semibold text-white mb-2">Animation callbacks</p>
              <p className="text-sm text-white/50 leading-relaxed">onAnimationStart and onAnimationComplete. Hook into the lifecycle without extra wrappers or state hacks.</p>
            </div>
            <div>
              <p className="text-base font-semibold text-white mb-2">Polymorphic as prop</p>
              <p className="text-sm text-white/50 leading-relaxed">Render as any element. No more wrapping a li in a div just to animate it.</p>
            </div>
            <div>
              <p className="text-base font-semibold text-white mb-2">prefers-reduced-motion</p>
              <p className="text-sm text-white/50 leading-relaxed">Automatically respected. Elements appear instantly for users who prefer reduced motion — no flicker.</p>
            </div>
            <div>
              <p className="text-base font-semibold text-white mb-2">16 new animations</p>
              <p className="text-sm text-white/50 leading-relaxed">riseFade, spiralIn, popIn, glide variants, rollIn, stretchIn, and more. Total: 37.</p>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* All animations */}
      <section className="border-t border-white/[0.07]">
        <div className="max-w-5xl mx-auto px-10 py-24">
          <RevealOnScroll animation="fadeIn" duration={600}>
            <h2 className="text-xs font-mono text-white/35 tracking-widest uppercase mb-8">All 37 animations</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {ALL.map((name) => (
                <span
                  key={name}
                  className={[
                    'text-xs font-mono px-3 py-1.5 rounded-md border transition-colors',
                    NEW.has(name)
                      ? 'text-white/80 border-white/20 bg-white/[0.05]'
                      : 'text-white/40 border-white/[0.07]',
                  ].join(' ')}
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/25 font-mono">16 new in v2.0 — highlighted above</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07]">
        <div className="max-w-5xl mx-auto px-10 py-8 flex items-center justify-between">
          <span className="text-xs text-white/25 font-mono">easy-scroll v2.0.0 · MIT</span>
          <div className="flex items-center gap-6 text-xs text-white/25">
            <a href="https://github.com/chemmangat/easy-scroll" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">GitHub</a>
            <a href="https://www.npmjs.com/package/@chemmangat/easy-scroll" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">npm</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

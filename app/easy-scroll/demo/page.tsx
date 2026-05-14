'use client';

import {
  RevealOnScroll,
  ScrollProgress,
  CountOnScroll,
  StaggerChildren,
  ParallaxSection,
} from '@chemmangat/easy-scroll';

export default function DemoPage() {
  return (
    <main className="bg-[#0c0c0c] text-white min-h-screen font-sans">
      <ScrollProgress color="#6d28d9" height={1} />

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 h-14 border-b border-white/[0.06] bg-[#0c0c0c]/90 backdrop-blur-sm">
        <a href="/easy-scroll/about" className="text-sm text-white/50 hover:text-white transition-colors">
          easy-scroll
        </a>
        <nav className="flex items-center gap-6">
          <a href="/easy-scroll/about" className="text-sm text-white/40 hover:text-white/80 transition-colors">About</a>
          <a href="/easy-scroll/docs" className="text-sm text-white/40 hover:text-white/80 transition-colors">Docs</a>
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

      {/* Hero */}
      <section className="pt-40 pb-24 px-8 max-w-3xl mx-auto">
        <RevealOnScroll animation="fadeIn" duration={500}>
          <p className="text-xs text-white/25 font-mono mb-6 tracking-wider">demo</p>
        </RevealOnScroll>
        <RevealOnScroll animation="fadeInUp" delay={60} duration={600}>
          <h1 className="text-5xl font-bold tracking-tight leading-tight mb-5">
            See it in action.
          </h1>
        </RevealOnScroll>
        <RevealOnScroll animation="fadeIn" delay={140} duration={600}>
          <p className="text-sm text-white/40 leading-relaxed max-w-sm">
            Scroll through to watch each component do its thing. All powered by the published npm package.
          </p>
        </RevealOnScroll>
      </section>

      <div className="border-t border-white/[0.06]" />

      {/* RevealOnScroll demo */}
      <section className="py-24 px-8 max-w-3xl mx-auto">
        <RevealOnScroll animation="fadeIn">
          <p className="text-xs text-white/25 font-mono mb-10 tracking-wider">RevealOnScroll</p>
        </RevealOnScroll>

        <div className="space-y-4">
          {[
            { anim: 'fadeInUp', label: 'fadeInUp' },
            { anim: 'slideInLeft', label: 'slideInLeft' },
            { anim: 'scaleUp', label: 'scaleUp' },
            { anim: 'blurIn', label: 'blurIn' },
            { anim: 'flipIn', label: 'flipIn' },
            { anim: 'riseFade', label: 'riseFade — new' },
            { anim: 'popIn', label: 'popIn — new' },
            { anim: 'spiralIn', label: 'spiralIn — new' },
          ].map(({ anim, label }) => (
            <RevealOnScroll key={anim} animation={anim as never} duration={600}>
              <div className="flex items-center justify-between px-5 py-4 border border-white/[0.07] rounded-lg bg-white/[0.02]">
                <code className="text-sm text-white/60 font-mono">{label}</code>
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <div className="border-t border-white/[0.06]" />

      {/* StaggerChildren demo */}
      <section className="py-24 px-8 max-w-3xl mx-auto">
        <RevealOnScroll animation="fadeIn">
          <p className="text-xs text-white/25 font-mono mb-10 tracking-wider">StaggerChildren</p>
        </RevealOnScroll>

        <StaggerChildren animation="fadeInUp" staggerDelay={90} className="grid grid-cols-3 gap-3">
          {['one', 'two', 'three', 'four', 'five', 'six'].map((n) => (
            <div key={n} className="aspect-square border border-white/[0.07] rounded-lg bg-white/[0.02] flex items-center justify-center">
              <span className="text-xs text-white/30 font-mono">{n}</span>
            </div>
          ))}
        </StaggerChildren>
      </section>

      <div className="border-t border-white/[0.06]" />

      {/* CountOnScroll demo */}
      <section className="py-24 px-8 max-w-3xl mx-auto">
        <RevealOnScroll animation="fadeIn">
          <p className="text-xs text-white/25 font-mono mb-10 tracking-wider">CountOnScroll</p>
        </RevealOnScroll>

        <div className="grid grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
          {[
            { to: 370, suffix: '+', label: 'weekly installs' },
            { to: 37, suffix: '', label: 'animations' },
            { to: 0, suffix: '', label: 'dependencies' },
          ].map((s) => (
            <div key={s.label} className="bg-[#0c0c0c] px-6 py-8">
              <div className="text-3xl font-bold text-white mb-1 tabular-nums">
                <CountOnScroll from={0} to={s.to} duration={1600} />
                {s.suffix}
              </div>
              <div className="text-xs text-white/25 font-mono">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/[0.06]" />

      {/* ParallaxSection demo */}
      <ParallaxSection speed={0.4} className="py-32 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-8">
          <RevealOnScroll animation="fadeIn" duration={800}>
            <p className="text-xs text-white/25 font-mono mb-6 tracking-wider">ParallaxSection</p>
            <p className="text-2xl font-light text-white/50 leading-relaxed max-w-sm">
              This block moves at a different speed than the page scroll.
            </p>
          </RevealOnScroll>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="px-8 py-8 max-w-3xl mx-auto flex items-center justify-between">
        <span className="text-xs text-white/20 font-mono">easy-scroll v2.0.0</span>
        <a href="/easy-scroll/docs" className="text-xs text-white/30 hover:text-white/60 transition-colors font-mono">
          read the docs →
        </a>
      </footer>
    </main>
  );
}

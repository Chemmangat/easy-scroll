'use client';

import { RevealOnScroll } from '../RevealOnScroll';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        <RevealOnScroll animation="fadeIn" duration={1000}>
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-sm font-medium">New Release</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeInUp" delay={200}>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Beautiful Animations
          </h1>
        </RevealOnScroll>

        <RevealOnScroll animation="fadeInUp" delay={400}>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Create stunning scroll-driven animations with just a few lines of code
          </p>
        </RevealOnScroll>

        <RevealOnScroll animation="scaleUp" delay={600}>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-semibold transition-colors">
              Get Started
            </button>
            <button className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-white font-semibold transition-colors">
              View Docs
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

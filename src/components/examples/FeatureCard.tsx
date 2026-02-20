'use client';

import { RevealOnScroll } from '../RevealOnScroll';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <RevealOnScroll animation="fadeInUp" delay={delay}>
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-purple-500/30 transition-all h-full">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </RevealOnScroll>
  );
}

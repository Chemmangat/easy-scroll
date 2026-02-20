'use client';

import { RevealOnScroll } from '../RevealOnScroll';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  delay?: number;
}

export function TestimonialCard({ quote, author, role, avatar, delay = 0 }: TestimonialCardProps) {
  return (
    <RevealOnScroll animation="fadeInUp" delay={delay}>
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 h-full flex flex-col">
        <div className="flex-grow mb-6">
          <div className="text-purple-400 text-4xl mb-4">&ldquo;</div>
          <p className="text-gray-300 text-lg leading-relaxed">{quote}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
            {avatar}
          </div>
          <div>
            <div className="font-bold text-white">{author}</div>
            <div className="text-sm text-gray-400">{role}</div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

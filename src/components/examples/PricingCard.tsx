'use client';

import { RevealOnScroll } from '../RevealOnScroll';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

export function PricingCard({ name, price, period, features, highlighted = false, delay = 0 }: PricingCardProps) {
  return (
    <RevealOnScroll animation="scaleUp" delay={delay}>
      <div className={`rounded-xl p-8 h-full flex flex-col ${
        highlighted
          ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-500 scale-105'
          : 'bg-zinc-900/50 border border-zinc-800'
      }`}>
        {highlighted && (
          <div className="inline-block mb-4 px-3 py-1 bg-purple-500 rounded-full text-xs font-bold text-white w-fit">
            POPULAR
          </div>
        )}
        
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="mb-6">
          <span className="text-5xl font-black text-white">{price}</span>
          <span className="text-gray-400 ml-2">/{period}</span>
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <span className="text-purple-400 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          highlighted
            ? 'bg-purple-600 hover:bg-purple-500 text-white'
            : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
        }`}>
          Get Started
        </button>
      </div>
    </RevealOnScroll>
  );
}

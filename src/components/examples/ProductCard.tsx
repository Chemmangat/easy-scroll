'use client';

import { RevealOnScroll } from '../RevealOnScroll';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  delay?: number;
}

export function ProductCard({ title, price, image, delay = 0 }: ProductCardProps) {
  return (
    <RevealOnScroll animation="fadeInUp" delay={delay}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all group">
        <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
          <div className="text-6xl">{image}</div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-purple-400">{price}</span>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white text-sm font-medium transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

'use client';

import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import type { AnimationType } from '../hooks/useScrollAnimation';

interface AnimationPreviewProps {
  animation: AnimationType;
  title: string;
  description: string;
}

export function AnimationPreview({ animation, title, description }: AnimationPreviewProps) {
  const [key, setKey] = useState(0);

  const replay = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-zinc-800">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
      
      <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
        <RevealOnScroll key={key} animation={animation} duration={800}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 shadow-2xl">
            <div className="text-white font-bold text-xl">Preview</div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="p-4 bg-zinc-900/30">
        <button
          onClick={replay}
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium transition-colors"
        >
          Replay Animation
        </button>
      </div>
    </div>
  );
}

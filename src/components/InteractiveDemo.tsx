'use client';

import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import type { AnimationType } from '../hooks/useScrollAnimation';
import { CodeBlock } from './CodeBlock';

const animations: AnimationType[] = [
  'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight',
  'slideInLeft', 'slideInRight', 'slideInUp', 'slideInDown',
  'scaleUp', 'scaleDown', 'rotateIn', 'rotateInLeft', 'rotateInRight',
  'blurIn', 'flipIn', 'flipInX', 'flipInY', 'bounceIn', 'zoomIn', 'zoomOut'
];

export function InteractiveDemo() {
  const [animation, setAnimation] = useState<AnimationType>('fadeInUp');
  const [duration, setDuration] = useState(600);
  const [delay, setDelay] = useState(0);
  const [key, setKey] = useState(0);

  const replay = () => setKey(prev => prev + 1);

  const code = `<RevealOnScroll
  animation="${animation}"
  duration={${duration}}
  delay={${delay}}
>
  <div>Your content here</div>
</RevealOnScroll>`;

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Controls */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Animation Type
          </label>
          <select
            value={animation}
            onChange={(e) => setAnimation(e.target.value as AnimationType)}
            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-purple-500 focus:outline-none"
          >
            {animations.map((anim) => (
              <option key={anim} value={anim}>
                {anim}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Duration: {duration}ms
          </label>
          <input
            type="range"
            min="200"
            max="2000"
            step="100"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Delay: {delay}ms
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <button
          onClick={replay}
          className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-semibold transition-colors"
        >
          Replay Animation
        </button>

        <CodeBlock code={code} />
      </div>

      {/* Preview */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8 flex items-center justify-center min-h-[400px]">
        <RevealOnScroll
          key={key}
          animation={animation}
          duration={duration}
          delay={delay}
        >
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 shadow-2xl">
            <div className="text-white text-center">
              <div className="text-3xl font-bold mb-2">Preview</div>
              <div className="text-sm opacity-90">{animation}</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

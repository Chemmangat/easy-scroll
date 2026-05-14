'use client';

import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import type { AnimationType } from '../hooks/useScrollAnimation';
import { CodeBlock } from './CodeBlock';

const animations: AnimationType[] = [
  'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight',
  'slideInLeft', 'slideInRight', 'slideInUp', 'slideInDown',
  'scaleUp', 'scaleDown', 'zoomIn', 'zoomOut', 'bounceIn',
  'rotateIn', 'rotateInLeft', 'rotateInRight',
  'blurIn', 'flipIn', 'flipInX', 'flipInY',
  'swingIn', 'dropIn', 'riseFade', 'expandWidth', 'shrinkIn',
  'tiltLeft', 'tiltRight', 'popIn',
  'glideUp', 'glideDown', 'glideLeft', 'glideRight',
  'spiralIn', 'stretchIn', 'rollInLeft', 'rollInRight',
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
      <div className="space-y-5">
        <div>
          <label className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-2">
            Animation Type
          </label>
          <select
            value={animation}
            onChange={(e) => setAnimation(e.target.value as AnimationType)}
            style={{ colorScheme: 'dark' }}
            className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-white/[0.1] rounded-lg text-white text-sm focus:border-white/30 focus:outline-none appearance-none cursor-pointer"
          >
            {animations.map((anim) => (
              <option key={anim} value={anim} style={{ background: '#1a1a1a', color: '#fff' }}>
                {anim}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Duration</label>
            <span className="text-xs font-mono text-white/60">{duration}ms</span>
          </div>
          <input
            type="range"
            min="200"
            max="2000"
            step="100"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Delay</label>
            <span className="text-xs font-mono text-white/60">{delay}ms</span>
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0"
          />
        </div>

        <button
          onClick={replay}
          className="w-full px-6 py-2.5 bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.1] rounded-lg text-white text-sm font-medium transition-colors"
        >
          Replay
        </button>

        <CodeBlock code={code} />
      </div>

      {/* Preview */}
      <div className="bg-[#111] border border-white/[0.08] rounded-xl flex items-center justify-center min-h-[380px]">
        <RevealOnScroll
          key={key}
          animation={animation}
          duration={duration}
          delay={delay}
        >
          <div className="border border-white/[0.12] rounded-xl px-10 py-8 text-center bg-white/[0.03]">
            <div className="text-2xl font-bold text-white mb-1">Preview</div>
            <div className="text-sm text-white/40 font-mono">{animation}</div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

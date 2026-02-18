'use client';

import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { StaggerChildren } from './StaggerChildren';
import { CountOnScroll } from './CountOnScroll';

type DemoType = 'reveal' | 'stagger' | 'count';

const defaultCode: Record<DemoType, string> = {
  reveal: `<RevealOnScroll 
  animation="fadeInUp" 
  delay={200}
  duration={600}
>
  <div className="p-8 bg-purple-500/20 
    border border-purple-500/50 rounded-xl">
    <h3 className="text-2xl font-bold">
      Hello World!
    </h3>
    <p className="text-gray-300 mt-2">
      This animates on scroll
    </p>
  </div>
</RevealOnScroll>`,
  stagger: `<StaggerChildren 
  animation="scaleUp" 
  staggerDelay={100}
  className="grid grid-cols-3 gap-4"
>
  <div className="p-6 bg-pink-500/20 
    border border-pink-500/50 rounded-xl 
    text-center">
    Card 1
  </div>
  <div className="p-6 bg-pink-500/20 
    border border-pink-500/50 rounded-xl 
    text-center">
    Card 2
  </div>
  <div className="p-6 bg-pink-500/20 
    border border-pink-500/50 rounded-xl 
    text-center">
    Card 3
  </div>
</StaggerChildren>`,
  count: `<CountOnScroll 
  from={0} 
  to={9999}
  duration={2000}
  formatFn={(n) => n.toLocaleString()}
  className="text-6xl font-black 
    bg-gradient-to-r from-blue-400 
    to-cyan-400 bg-clip-text 
    text-transparent"
/>`
};

interface InteractivePlaygroundProps {
  type: DemoType;
}

export function InteractivePlayground({ type }: InteractivePlaygroundProps) {
  const [code] = useState(defaultCode[type]);
  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="space-y-6 w-full overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 w-full">
        {/* Code Editor */}
        <div className="space-y-3 w-full">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Code</h4>
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 md:p-6 overflow-x-auto h-[400px] w-full">
            <pre className="text-xs md:text-sm text-gray-300 font-mono leading-relaxed">
              <code>{code}</code>
            </pre>
          </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-3 w-full">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Live Preview</h4>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-4 md:p-8 h-[400px] flex items-center justify-center overflow-hidden w-full">
            <div key={key} className="w-full max-w-full">
              {type === 'reveal' && (
                <RevealOnScroll animation="fadeInUp" delay={200} duration={600}>
                  <div className="p-4 md:p-8 bg-purple-500/20 border border-purple-500/50 rounded-xl">
                    <h3 className="text-xl md:text-2xl font-bold">Hello World!</h3>
                    <p className="text-sm md:text-base text-gray-300 mt-2">This animates on scroll</p>
                  </div>
                </RevealOnScroll>
              )}
              
              {type === 'stagger' && (
                <StaggerChildren 
                  animation="scaleUp" 
                  staggerDelay={100}
                  className="grid grid-cols-3 gap-2 md:gap-4"
                >
                  <div className="p-3 md:p-6 bg-pink-500/20 border border-pink-500/50 rounded-xl text-center text-xs md:text-base">
                    Card 1
                  </div>
                  <div className="p-3 md:p-6 bg-pink-500/20 border border-pink-500/50 rounded-xl text-center text-xs md:text-base">
                    Card 2
                  </div>
                  <div className="p-3 md:p-6 bg-pink-500/20 border border-pink-500/50 rounded-xl text-center text-xs md:text-base">
                    Card 3
                  </div>
                </StaggerChildren>
              )}
              
              {type === 'count' && (
                <CountOnScroll 
                  from={0} 
                  to={9999}
                  duration={2000}
                  formatFn={(n) => n.toLocaleString()}
                  className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                />
              )}
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <button
              onClick={handleRefresh}
              style={{
                padding: '8px 20px',
                backgroundColor: '#ffffff',
                color: '#6b7280',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
                e.currentTarget.style.borderColor = '#d1d5db';
                e.currentTarget.style.color = '#111827';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.color = '#6b7280';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
              Replay
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <div className="text-xl">💡</div>
          <div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Click <span className="text-gray-300 font-medium">Replay</span> to see the animation again. In your project, 
              these animations trigger automatically when elements scroll into view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

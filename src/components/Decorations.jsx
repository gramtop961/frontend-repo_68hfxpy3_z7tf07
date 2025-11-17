import React from 'react'

// Simple cartoon shapes built with SVGs and divs, animated with Tailwind keyframes
function Decorations() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient background overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a0a3c]/60 via-transparent to-[#ff8c1a]/10 mix-blend-screen" />

      {/* Floating smiling pumpkins */}
      {Array.from({ length: 6 }).map((_, i) => (
        <Pumpkin key={`pumpkin-${i}`} index={i} />
      ))}

      {/* Friendly ghosts */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Ghost key={`ghost-${i}`} index={i} />
      ))}

      {/* Flying bats */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Bat key={`bat-${i}`} index={i} />
      ))}

      {/* Candy corn sway */}
      {Array.from({ length: 12 }).map((_, i) => (
        <CandyCorn key={`candy-${i}`} index={i} />
      ))}

      {/* Spider webs in corners */}
      <SpiderWeb corner="tl" />
      <SpiderWeb corner="tr" />
      <SpiderWeb corner="bl" />
      <SpiderWeb corner="br" />

      {/* Witch on a broom with sparkles */}
      <Witch />
    </div>
  )
}

function Pumpkin({ index }) {
  const left = `${(index * 16 + 5) % 90}vw`
  const size = 60 + ((index * 23) % 40)
  const delay = `${(index * 1.3) % 6}s`
  return (
    <div className="absolute animate-float-slow" style={{ left, top: `${10 + (index%4)*18}vh`, animationDelay: delay }}>
      <svg width={size} height={size * 0.85} viewBox="0 0 120 100" className="opacity-90">
        <defs>
          <linearGradient id={`pump-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff8a00"/>
            <stop offset="100%" stopColor="#ffb84d"/>
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="55" rx="50" ry="35" fill={`url(#pump-${index})`} stroke="#7a2e0c" strokeWidth="3"/>
        <ellipse cx="40" cy="55" rx="18" ry="30" fill="#ffa64d" opacity="0.6"/>
        <ellipse cx="80" cy="55" rx="18" ry="30" fill="#ff9933" opacity="0.6"/>
        <path d="M58 25c10-10 18-8 23-3-8 2-12 7-13 12" fill="none" stroke="#3b7c2a" strokeWidth="4" strokeLinecap="round"/>
        <path d="M40 60 q20 12 40 0" fill="none" stroke="#3d1e10" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="45" cy="52" r="5" fill="#3d1e10"/>
        <circle cx="75" cy="52" r="5" fill="#3d1e10"/>
      </svg>
    </div>
  )
}

function Ghost({ index }) {
  const left = `${(index * 21 + 8) % 100}vw`
  const size = 46 + ((index * 19) % 36)
  const delay = `${(index * 0.9) % 5}s`
  return (
    <div className="absolute animate-float" style={{ left, top: `${5 + (index%5)*16}vh`, animationDelay: delay }}>
      <svg width={size} height={size * 1.2} viewBox="0 0 60 72" className="opacity-80">
        <defs>
          <linearGradient id={`ghost-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff"/>
            <stop offset="100%" stopColor="#d1d5db"/>
          </linearGradient>
        </defs>
        <path d="M30 6c12 0 22 10 22 22v38c-6 0-10-6-14-6s-8 6-14 6-10-6-14-6-8 6-14 6V28C-4 16 6 6 18 6Z" fill={`url(#ghost-${index})`} stroke="#9ca3af" strokeWidth="2"/>
        <circle cx="22" cy="30" r="3" fill="#1f2937"/>
        <circle cx="38" cy="30" r="3" fill="#1f2937"/>
        <path d="M22 40 q8 6 16 0" stroke="#1f2937" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  )
}

function Bat({ index }) {
  const top = `${(index * 8 + 10) % 60}vh`
  const size = 24 + ((index * 11) % 18)
  const duration = 8 + (index % 5)
  return (
    <div className="absolute" style={{ top }}>
      <svg width={size} height={size} viewBox="0 0 60 30" className="animate-bat-flight" style={{ animationDuration: `${duration}s` }}>
        <path d="M30 10c6-10 14-10 22 0-6 0-6 8-2 10-8-2-12 0-20 6-8-6-12-8-20-6 4-2 4-10-2-10 8-10 16-10 22 0Z" fill="#0b0614" stroke="#1f1533" strokeWidth="1.5"/>
        <circle cx="29" cy="9" r="1.2" fill="#ffa500"/>
        <circle cx="31" cy="9" r="1.2" fill="#ffa500"/>
      </svg>
    </div>
  )
}

function CandyCorn({ index }) {
  const left = `${(index * 7 + 2) % 100}vw`
  const size = 16 + ((index * 7) % 18)
  const delay = `${(index * 0.7) % 4}s`
  return (
    <div className="absolute animate-sway" style={{ left, top: `${65 + (index%3)*8}vh`, animationDelay: delay }}>
      <svg width={size} height={size * 1.4} viewBox="0 0 20 28">
        <path d="M10 0 20 26a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2L10 0Z" fill="#ffedd5" />
        <path d="M10 0 18 20H2L10 0Z" fill="#fb923c"/>
        <path d="M10 0 15 10H5L10 0Z" fill="#fde047"/>
      </svg>
    </div>
  )
}

function SpiderWeb({ corner }) {
  const pos = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0',
    bl: 'bottom-0 left-0',
    br: 'bottom-0 right-0',
  }[corner]
  return (
    <div className={`absolute ${pos} opacity-40`} style={{ width: 220, height: 220 }}>
      <svg viewBox="0 0 200 200" className="w-full h-full text-purple-100/50">
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="100" cy="100" r={20 + i * 18} />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={i} x1="100" y1="0" x2="100" y2="200" transform={`rotate(${i * 22.5} 100 100)`} />
          ))}
        </g>
      </svg>
    </div>
  )
}

function Witch() {
  return (
    <div className="absolute inset-x-0 top-[12vh]">
      <div className="relative w-full h-[140px] animate-witch-fly">
        {/* Sparkles */}
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_2px_rgba(251,191,36,0.6)]"
            style={{
              left: `${(i * 3 + 5) % 100}%`,
              top: `${40 + (i % 6) * 12}px`,
              animation: `sparkle 1.6s ease-in-out ${(i * 0.08).toFixed(2)}s infinite`
            }}
          />
        ))}

        {/* Witch + broom SVG */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <svg width="280" height="120" viewBox="0 0 280 120">
            {/* Broom */}
            <rect x="30" y="60" width="180" height="6" rx="3" fill="#7c3f00"/>
            <path d="M208 54 l28 0 10 6 -10 6 -28 0z" fill="#d97706"/>
            <path d="M236 54 q10 6 10 12 q-6 12-26 16 q8-12 8-28z" fill="#f59e0b" opacity="0.9"/>

            {/* Witch body */}
            <ellipse cx="120" cy="70" rx="36" ry="18" fill="#1e1630"/>
            <circle cx="140" cy="56" r="10" fill="#f8d9b8"/>
            <path d="M132 48 q8 -10 24 0" stroke="#1e1630" strokeWidth="6"/>
            <path d="M148 48 l12 -24 10 4 -12 26z" fill="#1e1630"/>
            <path d="M106 64 l-16 16" stroke="#f8d9b8" strokeWidth="6" strokeLinecap="round"/>

            {/* Hat */}
            <ellipse cx="140" cy="46" rx="22" ry="6" fill="#0b0614"/>
            <path d="M122 40 q18-22 38 0 l-10 2 q-12 -6 -18 0z" fill="#0b0614"/>
            <rect x="136" y="40" width="8" height="6" fill="#fb923c"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Decorations

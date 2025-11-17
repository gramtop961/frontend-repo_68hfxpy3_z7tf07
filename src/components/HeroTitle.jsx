import React from 'react'

function HeroTitle() {
  return (
    <div className="relative text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-orange-200 glow-text drop-shadow-xl select-none">
        Happy Halloween
      </h1>
      <p className="mt-3 text-purple-200/90 text-lg sm:text-xl font-medium select-none">
        Lighthearted • Spooky • Colorful • Cool
      </p>
      {/* Slime underline */}
      <div className="mx-auto mt-6 w-[90%] sm:w-[540px] h-8 relative">
        <svg viewBox="0 0 540 48" className="w-full h-full">
          <defs>
            <linearGradient id="slime" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f59e0b"/>
              <stop offset="50%" stopColor="#fb923c"/>
              <stop offset="100%" stopColor="#fde68a"/>
            </linearGradient>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"/>
              <feBlend in="SourceGraphic" in2="goo"/>
            </filter>
          </defs>
          <g filter="url(#goo)">
            <rect x="0" y="0" width="540" height="14" rx="7" fill="url(#slime)" />
            {Array.from({length: 10}).map((_, i) => (
              <circle key={i} cx={30 + i*52} cy={18 + (i%3)*6} r={6 + (i%4)} fill="url(#slime)" />
            ))}
          </g>
        </svg>
      </div>
    </div>
  )
}

export default HeroTitle

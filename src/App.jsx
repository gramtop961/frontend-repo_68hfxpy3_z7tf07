import React from 'react'
import HeroTitle from './components/HeroTitle'
import Decorations from './components/Decorations'
import FooterNote from './components/FooterNote'
import './index.css'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1e0b2e] via-[#2a0a3c] to-[#3b0b2e]">      
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(1200px 600px at 50% 20%, rgba(255,140,26,0.18), transparent), radial-gradient(800px 400px at 80% 60%, rgba(147,51,234,0.15), transparent)'
      }} />

      <Decorations />

      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <HeroTitle />

        {/* CTA buttons */}
        <div className="mt-10 flex items-center gap-4">
          <a href="#trick" className="rounded-xl bg-orange-500/90 hover:bg-orange-400 text-[#180a28] font-extrabold px-6 py-3 shadow-[0_0_20px_rgba(251,146,60,0.45)] transition-colors">
            Trick
          </a>
          <a href="#treat" className="rounded-xl border border-purple-300/30 bg-white/5 hover:bg-white/10 text-orange-100 font-bold px-6 py-3 backdrop-blur-sm">
            Treat
          </a>
        </div>

        {/* fun blurb */}
        <p className="mt-8 max-w-xl text-center text-purple-100/80">
          Float with friendly ghosts, giggle with pumpkins, and catch a glimpse of a chill witch cruising the night sky.
        </p>

        {/* Decorative sections to scroll a bit */}
        <section id="trick" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {['Pumpkins', 'Ghosts', 'Bats'].map((title, i) => (
            <div key={title} className="rounded-2xl p-6 bg-white/5 border border-white/10 text-orange-100 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
              <h3 className="text-2xl font-extrabold tracking-wide glow-text">{title}</h3>
              <p className="mt-2 text-purple-200/80">Playful, smiley, and totally chill.</p>
            </div>
          ))}
        </section>

        <FooterNote />
      </main>
    </div>
  )
}

export default App

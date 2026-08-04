import { useEffect, useState } from 'react'
import { useLang } from '../i18n'

// Stand-in hero shots — swap with the venue's own photos.
const slides = [
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80',
]

const SLIDE_MS = 5000

export default function Hero() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={src}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
          role="img"
          aria-hidden={i !== current}
        />
      ))}

      {/* Dark gradient overlay so text + nav stay readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />

      {/* Content — show, don't tell: just the mark and the CTA */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <h1 className="display neon-text text-[clamp(4rem,16vw,11rem)] leading-none">Rio Cantina</h1>
        <p className="display mb-10 text-xl tracking-[0.35em] text-white/80 sm:text-2xl">
          {t('footer.tagline')}
        </p>
        <button onClick={scrollToEvents} className="btn-neon text-xl">
          {t('hero.cta')}
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-neon' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

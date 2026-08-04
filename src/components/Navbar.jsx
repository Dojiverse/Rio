import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../i18n'

function PersonIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5S20 17 20 21" />
    </svg>
  )
}

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const goToEvents = (e) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname === '/') {
      document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#events')
    }
  }

  const links = [
    { key: 'nav.events', to: '/#events', onClick: goToEvents },
    { key: 'nav.tables', to: '/tables' },
    { key: 'nav.gallery', to: '/gallery' },
    { key: 'nav.dining', to: '/dining' },
    { key: 'nav.book', to: '/book' },
  ]

  const LangToggle = () => (
    <div className="flex items-center overflow-hidden rounded-full border border-line text-xs font-semibold">
      {['en', 'es'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 uppercase transition-colors ${
            lang === l ? 'bg-neon text-black' : 'text-muted hover:text-white'
          }`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  )

  return (
    <header className="nav-blur fixed inset-x-0 top-0 z-50 border-b border-line/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <Link to="/" className="display text-3xl leading-none" onClick={() => setOpen(false)}>
          <span className="glow-red">R</span>
          <span className="glow-yellow">i</span>
          <span className="glow-teal">o</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              to={l.to}
              onClick={l.onClick}
              className="display text-lg text-white/90 transition-colors hover:text-neon"
            >
              {t(l.key)}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LangToggle />
          <Link
            to="/account"
            aria-label={t('nav.account')}
            className="rounded-full p-2 text-white/90 transition-colors hover:text-neon"
            onClick={() => setOpen(false)}
          >
            <PersonIcon />
          </Link>

          {/* Mobile burger */}
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line/60 bg-ink/95 md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.key}
                to={l.to}
                onClick={(e) => {
                  if (l.onClick) l.onClick(e)
                  setOpen(false)
                }}
                className="display py-3 text-2xl text-white/90 hover:text-neon"
              >
                {t(l.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

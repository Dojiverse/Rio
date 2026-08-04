import { Link } from 'react-router-dom'
import { useLang } from '../i18n'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <p className="display text-4xl">
            <span className="glow-red">R</span>
            <span className="glow-yellow">i</span>
            <span className="glow-teal">o</span>
            <span className="ml-2 text-white">Cantina</span>
          </p>
          <p className="display mt-1 text-sm tracking-[0.25em] text-muted">{t('footer.tagline')}</p>
        </div>

        {/* Hours */}
        <div>
          <p className="display mb-3 text-xl text-white">{t('footer.hours')}</p>
          <p className="text-sm text-muted">{t('footer.hoursDining')}</p>
          <p className="text-sm text-muted">{t('footer.hoursClub')}</p>
        </div>

        {/* Contact */}
        <div>
          <p className="display mb-3 text-xl text-white">{t('footer.contact')}</p>
          <p className="text-sm text-muted">21800 Towncenter Plaza</p>
          <p className="text-sm text-muted">Sterling, VA 20164</p>
          <p className="text-sm text-muted">(703) 975-1202</p>
        </div>

        {/* Social */}
        <div>
          <p className="display mb-3 text-xl text-white">{t('footer.follow')}</p>
          <div className="flex gap-4">
            {['Instagram', 'TikTok', 'Facebook'].map((s) => (
              <a key={s} href="#" className="text-sm text-muted transition-colors hover:text-neon">
                {s}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <Link to="/book" className="text-sm text-muted hover:text-neon">{t('nav.book')}</Link>
            <Link to="/account" className="text-sm text-muted hover:text-neon">{t('nav.account')}</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-line/60 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} RIO CANTINA. {t('footer.rights')}
      </div>
    </footer>
  )
}

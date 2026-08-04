import { useState } from 'react'
import { useLang } from '../i18n'

export default function Auth() {
  const { t } = useLang()
  const [mode, setMode] = useState('signin') // 'signin' | 'signup'
  const [done, setDone] = useState(false)
  const isSignin = mode === 'signin'

  const submit = (e) => {
    e.preventDefault()
    // TODO: wire to auth provider (e.g. Supabase / Firebase / custom API)
    setDone(true)
  }

  return (
    <div className="mx-auto max-w-md px-5 pb-24 pt-32 sm:px-0">
      <h1 className="display neon-text mb-2 text-center text-6xl">
        {isSignin ? t('auth.signin') : t('auth.signup')}
      </h1>
      <p className="mb-10 text-center text-muted">{t('auth.welcome')}</p>

      {/* Mode toggle */}
      <div className="mb-8 flex overflow-hidden rounded-full border border-line">
        {[
          { key: 'signin', label: t('auth.signin') },
          { key: 'signup', label: t('auth.signup') },
        ].map((m) => (
          <button
            key={m.key}
            onClick={() => { setMode(m.key); setDone(false) }}
            className={`display flex-1 py-2.5 text-lg transition-colors ${
              mode === m.key ? 'bg-neon text-black' : 'text-muted hover:text-white'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {done ? (
        <div className="rounded-2xl border border-neon/50 bg-surface p-8 text-center">
          <p className="text-white">{t('auth.success')}</p>
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          {!isSignin && (
            <div>
              <label className="label" htmlFor="auth-name">{t('auth.name')}</label>
              <input id="auth-name" required className="field" autoComplete="name" />
            </div>
          )}
          <div>
            <label className="label" htmlFor="auth-email">{t('auth.email')}</label>
            <input id="auth-email" type="email" required className="field" autoComplete="email" />
          </div>
          <div>
            <label className="label" htmlFor="auth-pass">{t('auth.password')}</label>
            <input
              id="auth-pass"
              type="password"
              required
              minLength="8"
              className="field"
              autoComplete={isSignin ? 'current-password' : 'new-password'}
            />
          </div>
          {!isSignin && (
            <div>
              <label className="label" htmlFor="auth-confirm">{t('auth.confirm')}</label>
              <input id="auth-confirm" type="password" required minLength="8" className="field" autoComplete="new-password" />
            </div>
          )}

          <button type="submit" className="btn-neon w-full">
            {isSignin ? t('auth.signin') : t('auth.signup')}
          </button>

          {isSignin ? (
            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-muted hover:text-neon">{t('auth.forgot')}</a>
              <button type="button" onClick={() => setMode('signup')} className="text-muted hover:text-neon">
                {t('auth.noAccount')}
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => setMode('signin')} className="text-sm text-muted hover:text-neon">
              {t('auth.hasAccount')}
            </button>
          )}
        </form>
      )}
    </div>
  )
}

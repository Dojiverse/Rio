import { useState } from 'react'
import { useLang } from '../i18n'

export default function Book() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    // TODO: wire to backend / email service
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-2xl px-5 pb-24 pt-28 sm:px-8">
      <h1 className="display neon-text mb-2 text-center text-6xl sm:text-7xl">{t('book.header')}</h1>
      <p className="mb-12 text-center text-lg text-muted">{t('book.sub')}</p>

      {sent ? (
        <div className="rounded-2xl border border-neon/50 bg-surface p-8 text-center">
          <p className="display mb-2 text-3xl text-neon">✓</p>
          <p className="text-white">{t('book.success')}</p>
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="name">{t('book.name')}</label>
              <input id="name" required className="field" autoComplete="name" />
            </div>
            <div>
              <label className="label" htmlFor="email">{t('book.email')}</label>
              <input id="email" type="email" required className="field" autoComplete="email" />
            </div>
            <div>
              <label className="label" htmlFor="phone">{t('book.phone')}</label>
              <input id="phone" type="tel" className="field" autoComplete="tel" />
            </div>
            <div>
              <label className="label" htmlFor="date">{t('book.date')}</label>
              <input id="date" type="date" required className="field" />
            </div>
            <div>
              <label className="label" htmlFor="guests">{t('book.guests')}</label>
              <input id="guests" type="number" min="1" max="500" required className="field" />
            </div>
            <div>
              <label className="label" htmlFor="type">{t('book.type')}</label>
              <select id="type" className="field">
                <option>{t('book.type.birthday')}</option>
                <option>{t('book.type.private')}</option>
                <option>{t('book.type.corporate')}</option>
                <option>{t('book.type.other')}</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label" htmlFor="details">{t('book.details')}</label>
            <textarea id="details" rows="4" className="field resize-none" />
          </div>
          <button type="submit" className="btn-neon w-full">{t('book.submit')}</button>
        </form>
      )}
    </div>
  )
}

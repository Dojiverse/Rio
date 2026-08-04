import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import FloorMap from '../components/FloorMap'
import { events } from '../data/events'
import { getTable, takenByEvent, tiers } from '../data/tables'
import { useLang } from '../i18n'

const PHONE = '(703) 975-1202'

export default function Tables() {
  const { t, lang } = useLang()
  const navigate = useNavigate()
  const [params] = useSearchParams()

  const initial = events.some((e) => e.id === params.get('event')) ? params.get('event') : events[0].id
  const [eventId, setEventId] = useState(initial)
  const [selectedId, setSelectedId] = useState(null)

  const event = events.find((e) => e.id === eventId)
  const takenSet = useMemo(() => new Set(takenByEvent[eventId] || []), [eventId])
  const callOnly = event.tableMode === 'call'

  const selected = selectedId ? getTable(selectedId) : null
  const tier = selected ? tiers[selected.tier] : null

  const pickNight = (id) => {
    setEventId(id)
    setSelectedId(null)
  }

  return (
    <div className="section-pad pt-28">
      <h1 className="display glow-teal mb-2 text-center text-6xl sm:text-7xl">{t('tables.header')}</h1>
      <p className="mb-10 text-center text-lg text-muted">{t('tables.sub')}</p>

      {/* Night picker */}
      <p className="display mb-3 text-2xl text-white">{t('tables.pickNight')}</p>
      <div className="mb-6 flex flex-wrap gap-3">
        {events.map((ev) => (
          <button
            key={ev.id}
            onClick={() => pickNight(ev.id)}
            className={`display rounded-full border px-5 py-2 text-lg transition-colors ${
              ev.id === eventId
                ? 'border-neon bg-neon text-black'
                : 'border-line text-white/80 hover:border-neon/60 hover:text-neon'
            }`}
          >
            {ev.date} · {ev.title[lang]}
          </button>
        ))}
      </div>

      {/* Call-only banner for big nights */}
      {callOnly && (
        <div className="mb-6 flex flex-col items-start gap-3 rounded-2xl border border-neon/50 bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="display text-2xl text-neon">{t('tables.callOnly')}</p>
            <p className="text-sm text-muted">{t('tables.callNote')}</p>
          </div>
          <a href="tel:+17039751202" className="btn-neon shrink-0 !text-base">{t('tables.call')}</a>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
        {/* Floor map */}
        <div>
          <FloorMap takenSet={takenSet} selectedId={selectedId} onSelect={setSelectedId} />
          {/* Legend */}
          <div className="mt-4 flex gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-neon shadow-[0_0_8px_rgba(57,255,20,0.7)]" />
              {t('tables.legend.available')}
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-surface2 ring-1 ring-line" />
              {t('tables.legend.taken')}
            </span>
          </div>
        </div>

        {/* Detail panel */}
        <aside className="h-fit rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24">
          {!selected ? (
            <>
              <p className="display text-3xl text-white">{t('tables.selectPrompt')}</p>
              <p className="mt-2 text-sm text-muted">{t('tables.selectHint')}</p>
            </>
          ) : (
            <>
              <p className="display text-lg text-neon">{selected.id.toUpperCase()}</p>
              <h2 className="display text-4xl text-white">{tier.name[lang]}</h2>

              <dl className="mt-5 flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">{t('tables.seats')}</dt>
                  <dd className="font-semibold text-white">{tier.seats}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">{t('tables.bottles')}</dt>
                  <dd className="font-semibold text-white">{tier.bottles}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">{t('tables.minSpend')}</dt>
                  <dd className="font-semibold text-white">${tier.minSpend}</dd>
                </div>
                <div className="my-1 border-t border-line" />
                <div className="flex justify-between text-base">
                  <dt className="text-white">{t('tables.deposit')}</dt>
                  <dd className="display text-2xl text-neon">${tier.deposit}</dd>
                </div>
              </dl>

              {callOnly ? (
                <a href="tel:+17039751202" className="btn-neon mt-6 w-full !text-base">{t('tables.call')}</a>
              ) : (
                <button
                  onClick={() => navigate(`/tables/checkout/${eventId}/${selected.id}`)}
                  className="btn-neon mt-6 w-full"
                >
                  {t('tables.reserve')}
                </button>
              )}
            </>
          )}
        </aside>
      </div>

      {/* Large party request */}
      <div className="mt-14 flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-8 text-center">
        <p className="display text-3xl text-white">{t('tables.request.title')}</p>
        <p className="text-muted">{t('tables.request.sub')}</p>
        <Link to="/book" className="btn-ghost mt-2 !text-base">{t('tables.request.cta')}</Link>
      </div>
    </div>
  )
}

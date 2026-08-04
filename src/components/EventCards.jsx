import { Link } from 'react-router-dom'
import { events } from '../data/events'
import { useLang } from '../i18n'

export default function EventCards() {
  const { t, lang } = useLang()

  return (
    <section id="events" className="section-pad scroll-mt-16">
      <h2 className="display glow-yellow mb-2 text-center text-6xl sm:text-7xl">
        {t('events.header')}
      </h2>
      <p className="mb-6 text-center text-lg text-muted">{t('events.sub')}</p>
      <div className="divider-tropical mb-12" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((ev) => (
          <Link key={ev.id} to={`/checkout/${ev.id}`} className="card group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* Posters are portrait; blurred self-fill keeps the card landscape without cropping the artwork */}
              <img
                src={ev.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl brightness-[0.45]"
              />
              <img
                src={ev.image}
                alt={ev.title[lang]}
                loading="lazy"
                className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="display absolute left-4 top-4 rounded-full bg-ink/80 px-4 py-1.5 text-lg text-rio-yellow backdrop-blur">
                {ev.date}
              </span>
            </div>

            <div className="p-5">
              <h3 className="display text-3xl text-white">{ev.title[lang]}</h3>
              <p className="mb-4 text-sm text-muted">
                {ev.subtitle[lang]} · {ev.time}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">
                  {t('events.from')}{' '}
                  <span className="text-lg font-bold text-white">${ev.tiers[0].price}</span>
                </span>
                <span className="btn-ghost !px-5 !py-2 !text-base">{t('events.getTickets')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

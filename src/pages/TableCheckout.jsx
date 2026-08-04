import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getEvent } from '../data/events'
import { getTable, takenByEvent, tiers } from '../data/tables'
import { useLang } from '../i18n'

export default function TableCheckout() {
  const { eventId, tableId } = useParams()
  const { t, lang } = useLang()
  const [agreed, setAgreed] = useState(false)

  const event = getEvent(eventId)
  const table = getTable(tableId)
  const isTaken = (takenByEvent[eventId] || []).includes(tableId)

  // Invalid link, sold table, or call-only night — back to the map.
  if (!event || !table || isTaken || event.tableMode === 'call') {
    return <Navigate to="/tables" replace />
  }

  const tier = tiers[table.tier]
  const balance = tier.minSpend - tier.deposit

  const handlePay = () => {
    // TODO: create a Stripe Checkout Session here and redirect, e.g.
    // POST /api/create-table-session {
    //   eventId, tableId,
    //   price_data: { unit_amount: tier.deposit * 100, ... },
    //   payment_intent_data: { setup_future_usage: 'off_session' },  // save card for balance / no-show
    //   metadata: { eventId, tableId, date: event.date, seats: tier.seats },
    // }
    // Webhook on checkout.session.completed writes { eventId, tableId } to the
    // bookings DB so the table can't double-sell.
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
      <Link to={`/tables?event=${eventId}`} className="text-sm text-muted hover:text-neon">
        &larr; {t('tcheckout.back')}
      </Link>

      <h1 className="display neon-text mb-8 mt-3 text-5xl sm:text-6xl">{t('tcheckout.title')}</h1>

      {/* Event + table summary */}
      <div className="card !rounded-2xl">
        <div className="relative h-44 overflow-hidden sm:h-56">
          <img src={event.image} alt={event.title[lang]} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5">
            <p className="display text-lg text-neon">{event.date} · {event.time}</p>
            <h2 className="display text-4xl text-white">{event.title[lang]}</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-4">
          <div>
            <p className="text-xs text-muted">{t('tables.header')}</p>
            <p className="font-semibold text-white">{table.id.toUpperCase()} · {tier.name[lang]}</p>
          </div>
          <div>
            <p className="text-xs text-muted">{t('tables.seats')}</p>
            <p className="font-semibold text-white">{tier.seats}</p>
          </div>
          <div>
            <p className="text-xs text-muted">{t('tables.bottles')}</p>
            <p className="font-semibold text-white">{tier.bottles}</p>
          </div>
          <div>
            <p className="text-xs text-muted">{t('tables.minSpend')}</p>
            <p className="font-semibold text-white">${tier.minSpend}</p>
          </div>
        </div>
      </div>

      {/* Payment breakdown */}
      <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
        <div className="flex justify-between text-lg">
          <span className="text-white">{t('tcheckout.depositToday')}</span>
          <span className="display text-3xl text-neon">${tier.deposit}</span>
        </div>
        <div className="mt-2 flex justify-between text-sm text-muted">
          <span>{t('tcheckout.balance')}</span>
          <span>${balance}</span>
        </div>
        <p className="mt-3 text-xs text-muted">{t('tcheckout.balanceNote')}</p>

        {/* Off-session charge consent — required before enabling payment */}
        <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-surface2 p-4 text-sm text-white/90">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[#ff6b1a]"
          />
          <span>{t('tcheckout.consent')}</span>
        </label>

        <button
          onClick={handlePay}
          disabled={!agreed}
          className={`btn-neon mt-6 w-full ${!agreed ? 'cursor-not-allowed opacity-40' : ''}`}
        >
          {t('tcheckout.pay')} — ${tier.deposit}
        </button>
        <p className="mt-3 text-center text-xs text-muted">{t('checkout.stripeNote')}</p>
      </div>
    </div>
  )
}

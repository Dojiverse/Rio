import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getEvent } from '../data/events'
import { useLang } from '../i18n'

const FEE_RATE = 0.1 // 10% stand-in service fee

export default function Checkout() {
  const { id } = useParams()
  const { t, lang } = useLang()
  const event = getEvent(id)
  const [qty, setQty] = useState({})

  if (!event) return <Navigate to="/" replace />

  const setTier = (tierId, delta) =>
    setQty((q) => ({ ...q, [tierId]: Math.max(0, Math.min(10, (q[tierId] || 0) + delta)) }))

  const subtotal = event.tiers.reduce((sum, tier) => sum + tier.price * (qty[tier.id] || 0), 0)
  const fees = subtotal * FEE_RATE
  const total = subtotal + fees
  const hasTickets = subtotal > 0

  const handlePay = () => {
    // TODO: create a Stripe Checkout Session here and redirect.
    // e.g. POST /api/create-checkout-session { eventId, lineItems } -> stripe.redirectToCheckout
  }

  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-28 sm:px-8">
      <Link to="/#events" className="text-sm text-muted hover:text-neon">
        &larr; {t('checkout.back')}
      </Link>

      {/* Event banner */}
      <div className="card mt-4 !rounded-2xl">
        <div className="relative h-56 overflow-hidden sm:h-72">
          <img src={event.image} alt={event.title[lang]} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="display text-lg text-neon">{event.date} · {event.time}</p>
            <h1 className="display text-5xl text-white sm:text-6xl">{event.title[lang]}</h1>
            <p className="text-muted">{event.subtitle[lang]}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        {/* Ticket tiers */}
        <div>
          <h2 className="display mb-4 text-3xl text-white">{t('checkout.tickets')}</h2>
          <div className="flex flex-col gap-4">
            {event.tiers.map((tier) => (
              <div key={tier.id} className="flex items-center justify-between rounded-2xl border border-line bg-surface p-5">
                <div>
                  <p className="font-semibold text-white">{tier.name[lang]}</p>
                  <p className="text-sm text-muted">
                    ${tier.price} <span className="text-xs">{t('checkout.perTicket')}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTier(tier.id, -1)}
                    className="h-9 w-9 rounded-full border border-line text-lg text-white transition-colors hover:border-neon hover:text-neon"
                    aria-label="Decrease"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-lg font-bold text-white">{qty[tier.id] || 0}</span>
                  <button
                    onClick={() => setTier(tier.id, 1)}
                    className="h-9 w-9 rounded-full border border-line text-lg text-white transition-colors hover:border-neon hover:text-neon"
                    aria-label="Increase"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order summary */}
        <aside className="h-fit rounded-2xl border border-line bg-surface p-6">
          <h2 className="display mb-4 text-3xl text-white">{t('checkout.summary')}</h2>

          <div className="flex flex-col gap-2 text-sm">
            {event.tiers
              .filter((tier) => qty[tier.id] > 0)
              .map((tier) => (
                <div key={tier.id} className="flex justify-between text-muted">
                  <span>{qty[tier.id]} × {tier.name[lang]}</span>
                  <span>${(tier.price * qty[tier.id]).toFixed(2)}</span>
                </div>
              ))}

            {!hasTickets && <p className="text-muted">{t('checkout.empty')}</p>}

            {hasTickets && (
              <>
                <div className="my-2 border-t border-line" />
                <div className="flex justify-between text-muted">
                  <span>{t('checkout.subtotal')}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>{t('checkout.fees')}</span>
                  <span>${fees.toFixed(2)}</span>
                </div>
                <div className="mt-1 flex justify-between text-lg font-bold text-white">
                  <span>{t('checkout.total')}</span>
                  <span className="text-neon">${total.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>

          <button
            onClick={handlePay}
            disabled={!hasTickets}
            className={`btn-neon mt-6 w-full ${!hasTickets ? 'cursor-not-allowed opacity-40' : ''}`}
          >
            {t('checkout.continue')}
          </button>
          <p className="mt-3 text-center text-xs text-muted">{t('checkout.stripeNote')}</p>

          <Link
            to={`/tables?event=${event.id}`}
            className="mt-4 block text-center text-sm text-neon hover:underline"
          >
            {t('checkout.wantTable')} &rarr;
          </Link>
        </aside>
      </div>
    </div>
  )
}

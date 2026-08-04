import { useState } from 'react'
import { menu, foodImages } from '../data/menu'
import { useLang } from '../i18n'

export default function Dining() {
  const { t, lang } = useLang()
  const [orderNote, setOrderNote] = useState(false)

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative flex h-[60svh] min-h-[420px] items-end overflow-hidden">
        <img
          src={foodImages[0]}
          alt="Dining room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8">
          <h1 className="display glow-yellow text-7xl sm:text-8xl">{t('dining.header')}</h1>
          <p className="mb-6 text-lg text-white/80">{t('dining.sub')}</p>
          <button onClick={() => setOrderNote(true)} className="btn-neon">
            {t('dining.order')}
          </button>
          {orderNote && (
            <p className="mt-4 max-w-md rounded-xl border border-neon/40 bg-surface/90 px-4 py-3 text-sm text-white">
              {t('dining.orderSoon')}
            </p>
          )}
        </div>
      </section>

      {/* Food photo strip — show, don't tell */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-14 sm:grid-cols-3 sm:px-8 lg:grid-cols-5">
        {foodImages.slice(1).map((src, i) => (
          <div
            key={src}
            className={`overflow-hidden rounded-2xl border border-line ${i === 0 ? 'col-span-2 row-span-2 sm:col-span-1' : ''}`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </section>

      {/* Menu */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 className="display glow-yellow mb-12 text-center text-6xl">{t('dining.menu')}</h2>

        <div className="flex flex-col gap-14">
          {menu.map((section) => (
            <div key={section.key}>
              <h3 className="display mb-6 border-b border-line pb-3 text-4xl text-white">
                {t(section.key)}
              </h3>
              <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.name.en} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{item.name[lang]}</p>
                      <p className="text-sm text-muted">{item.desc[lang]}</p>
                    </div>
                    <span className="display shrink-0 text-2xl text-neon">${item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

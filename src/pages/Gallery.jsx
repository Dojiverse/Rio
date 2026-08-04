import { useEffect, useState } from 'react'
import { galleryImages } from '../data/gallery'
import { useLang } from '../i18n'

export default function Gallery() {
  const { t } = useLang()
  const [lightbox, setLightbox] = useState(null) // index or null

  // Esc closes, arrows navigate
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % galleryImages.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + galleryImages.length) % galleryImages.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <div className="section-pad pt-28">
      <h1 className="display glow-teal mb-2 text-center text-6xl sm:text-7xl">{t('gallery.header')}</h1>
      <p className="mb-12 text-center text-lg text-muted">{t('gallery.sub')}</p>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>button]:mb-4">
        {galleryImages.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            className="group block w-full overflow-hidden rounded-2xl border border-line transition-all duration-300 hover:border-neon/50"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 top-6 text-4xl text-white/80 hover:text-neon"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

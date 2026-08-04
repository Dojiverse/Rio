import { tables } from '../data/tables'
import { useLang } from '../i18n'

// Interactive venue floor plan. Green = available, dim = taken.
// Reference point: entrance at the bottom, lined up with the middle of
// dance floor 1 (between DF3 and DF6).
export default function FloorMap({ takenSet, selectedId, onSelect }) {
  const { t } = useLang()

  const tableClass = (tb) => {
    if (takenSet.has(tb.id)) return 'tbl tbl-taken'
    if (tb.id === selectedId) return 'tbl tbl-selected'
    return 'tbl tbl-available'
  }

  const handle = (tb) => {
    if (!takenSet.has(tb.id)) onSelect(tb.id === selectedId ? null : tb.id)
  }

  const seatLabel = (tb) => {
    const cx = tb.shape === 'circle' ? tb.cx : tb.x + tb.w / 2
    const cy = tb.shape === 'circle' ? tb.cy : tb.y + tb.h / 2
    return (
      <text x={cx} y={cy + 5} textAnchor="middle" className="tbl-label" pointerEvents="none">
        {tb.id.toUpperCase()}
      </text>
    )
  }

  return (
    <svg viewBox="0 0 1140 450" className="w-full rounded-2xl border border-line bg-[#0f0f10]" role="group" aria-label="Venue floor map">
      {/* ================= Room 1 (right) ================= */}

      {/* Stage 1 — straight ahead from the entrance */}
      <rect x="640" y="20" width="240" height="70" rx="8" fill="#1c1c1f" stroke="#2a2a2e" />
      <text x="760" y="62" textAnchor="middle" className="map-zone">{t('map.stage')}</text>

      {/* Restrooms (top right) */}
      <rect x="920" y="25" width="125" height="70" rx="8" fill="#1c1c1f" stroke="#2a2a2e" />
      <text x="982" y="66" textAnchor="middle" className="map-zone-sm">{t('map.bathroom')}</text>

      {/* Dance floor 1 */}
      <rect x="640" y="120" width="240" height="180" rx="12" fill="none" stroke="#2a2a2e" strokeDasharray="8 6" />
      <text x="760" y="216" textAnchor="middle" className="map-zone">{t('map.dance')}</text>

      {/* Fence — between the side tables and the dance floor.
          Open at the top (crowd faces stage 1) and at the bottom center
          (lined up with the entrance). */}
      <path d="M 632 110 L 632 312 L 720 312 M 800 312 L 888 312 L 888 110" fill="none" stroke="#4a4a50" strokeDasharray="4 4" strokeWidth="2" />

      {/* Elevated deck (behind DF4–DF6, slightly raised) */}
      <rect x="975" y="150" width="130" height="200" rx="10" fill="rgba(57,255,20,0.03)" stroke="#2a2a2e" />

      {/* Bar — close to dance floor 1's tables, ends level with DF3 */}
      <rect x="480" y="140" width="50" height="190" rx="8" fill="#1c1c1f" stroke="#2a2a2e" />
      <text x="505" y="235" textAnchor="middle" className="map-zone" transform="rotate(-90 505 235)">{t('map.bar')}</text>

      {/* ================= Walkway ================= */}
      {/* Narrow horizontal corridor — centered on the bar's midline
          (the bar is a perpendicular bisector of the walkway) */}
      <line x1="445" y1="340" x2="565" y2="340" stroke="#4a4a50" strokeDasharray="4 4" strokeWidth="2" />
      <line x1="445" y1="375" x2="565" y2="375" stroke="#4a4a50" strokeDasharray="4 4" strokeWidth="2" />

      {/* ================= Room 2 (left) ================= */}

      {/* Stage 2 — left of dance floor 2, lined up with the bar */}
      <rect x="100" y="140" width="70" height="190" rx="8" fill="#1c1c1f" stroke="#2a2a2e" />
      <text x="135" y="235" textAnchor="middle" className="map-zone" transform="rotate(-90 135 235)">{t('map.stage2')}</text>

      {/* Dance floor 2 — same size as dance floor 1 */}
      <rect x="200" y="140" width="240" height="180" rx="12" fill="none" stroke="#2a2a2e" strokeDasharray="8 6" />
      <text x="320" y="236" textAnchor="middle" className="map-zone">{t('map.dance2')}</text>

      {/* ================= Entrance ================= */}
      {/* Bottom, lined up with the middle of dance floor 1 (between DF3 and DF6) */}
      <rect x="730" y="400" width="60" height="8" rx="4" fill="#ff6b1a" opacity="0.5" />
      <text x="760" y="432" textAnchor="middle" className="map-zone-sm">{t('map.entrance')}</text>

      {/* ================= Tables ================= */}
      {tables.map((tb) => (
        <g key={tb.id} onClick={() => handle(tb)} className={tableClass(tb)}>
          {tb.shape === 'circle' ? (
            <circle cx={tb.cx} cy={tb.cy} r={tb.r} />
          ) : (
            <rect x={tb.x} y={tb.y} width={tb.w} height={tb.h} rx="12" />
          )}
          {seatLabel(tb)}
        </g>
      ))}
    </svg>
  )
}

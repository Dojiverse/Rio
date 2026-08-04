// Table service data — tiers, floor-map geometry, and stand-in availability.
// Later: availability comes from the bookings DB (keyed by eventId + tableId),
// and per-event price overrides can be added on the event object.

export const tiers = {
  dancefloor: {
    name: { en: 'Dance Floor', es: 'Pista de Baile' },
    seats: 8,
    bottles: 2,
    minSpend: 1500,
    deposit: 400,
  },
  elevated: {
    name: { en: 'Elevated VIP Deck', es: 'Zona VIP Elevada' },
    seats: 8,
    bottles: 2,
    minSpend: 1200,
    deposit: 300,
  },
  lounge: {
    name: { en: 'Lounge Booth', es: 'Sala Lounge' },
    seats: 10,
    bottles: 2,
    minSpend: 1000,
    deposit: 300,
  },
  walkway: {
    name: { en: 'Side Table', es: 'Mesa Lateral' },
    seats: 4,
    bottles: 1,
    minSpend: 500,
    deposit: 150,
  },
}

// Floor-map geometry (SVG viewBox 0 0 1140 450).
// Two rooms: room 1 (right) with stage 1 + dance floor 1, room 2 (left) with
// stage 2 on the left wall + dance floor 2, both lined up with the bar.
// A narrow horizontal walkway connects room 2 to the main room, its mouth
// centered on the bottom end of the bar. Reference point: entrance at bottom,
// lined up with the middle of dance floor 1 (between DF3 and DF6).
// shape: 'circle' => cx/cy/r, 'booth' => x/y/w/h rounded rect.
export const tables = [
  // Dance floor 1 — side tables only (none next to the stage)
  { id: 'df1', tier: 'dancefloor', shape: 'circle', cx: 605, cy: 170, r: 22 },
  { id: 'df2', tier: 'dancefloor', shape: 'circle', cx: 605, cy: 240, r: 22 },
  { id: 'df3', tier: 'dancefloor', shape: 'circle', cx: 605, cy: 310, r: 22 },
  { id: 'df4', tier: 'dancefloor', shape: 'circle', cx: 915, cy: 170, r: 22 },
  { id: 'df5', tier: 'dancefloor', shape: 'circle', cx: 915, cy: 240, r: 22 },
  { id: 'df6', tier: 'dancefloor', shape: 'circle', cx: 915, cy: 310, r: 22 },

  // Elevated deck — behind the fence at DF4–DF6, slightly raised
  { id: 'ev1', tier: 'elevated', shape: 'circle', cx: 1040, cy: 205, r: 20 },
  { id: 'ev2', tier: 'elevated', shape: 'circle', cx: 1040, cy: 265, r: 20 },
  { id: 'ev3', tier: 'elevated', shape: 'circle', cx: 1040, cy: 325, r: 20 },

  // Dance floor 2 — side tables below the floor, side by side
  { id: 'wk1', tier: 'walkway', shape: 'circle', cx: 380, cy: 348, r: 19 },
  { id: 'wk2', tier: 'walkway', shape: 'circle', cx: 320, cy: 348, r: 19 },

  // Lounge booths — in a row above dance floor 2
  { id: 'lb1', tier: 'lounge', shape: 'booth', x: 185, y: 82, w: 90, h: 52 },
  { id: 'lb2', tier: 'lounge', shape: 'booth', x: 285, y: 82, w: 90, h: 52 },
  { id: 'lb3', tier: 'lounge', shape: 'booth', x: 385, y: 82, w: 90, h: 52 },
]

// Stand-in "already booked" tables per event.
export const takenByEvent = {
  'jueves-internacionales': ['df2', 'lb1'],
  'ladies-night': ['df1', 'df4', 'ev1'],
  'domingo-latino': ['lb2'],
  'sabados-a-fuego': ['df1', 'df2', 'df3', 'df6', 'ev2', 'lb3'],
  'bachata-social': [],
  'live-artist': ['ev3', 'df5', 'wk1'],
}

export const getTable = (id) => tables.find((tb) => tb.id === id)

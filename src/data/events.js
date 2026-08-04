// Rio Cantina's real weekly nights — poster artwork to be swapped with the venue's own.
// Prices are the lowest tier ("from" price) in USD. GA matches their real $20 cover.
// tableMode: 'online' = tables sell instantly on the floor map;
//            'call'   = big night, phone reservations only (owner keeps pricing control).
const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const events = [
  {
    id: 'jueves-internacionales',
    title: { en: 'Jueves Internacionales', es: 'Jueves Internacionales' },
    subtitle: { en: 'International Latin · Bachata · Merengue', es: 'Internacional · Bachata · Merengue' },
    date: 'THU · AUG 6',
    time: '7 PM – 2 AM',
    image: img('photo-1470229722913-7c0e2dbbafd3'),
    tiers: [
      { id: 'ga', name: { en: 'General Admission', es: 'Entrada General' }, price: 20 },
      { id: 'vip', name: { en: 'VIP Entry', es: 'Entrada VIP' }, price: 40 },
      { id: 'table', name: { en: 'Table + Bottle Service', es: 'Mesa + Servicio de Botella' }, price: 300 },
    ],
  },
  {
    id: 'ladies-night',
    title: { en: 'Ladies Night', es: 'Noche de Damas' },
    subtitle: { en: 'Reggaeton · Ladies free before 11', es: 'Reguetón · Damas gratis antes de las 11' },
    date: 'FRI · AUG 7',
    time: '7 PM – 3 AM',
    image: img('photo-1514525253161-7a46d19cd819'),
    tiers: [
      { id: 'ga', name: { en: 'General Admission', es: 'Entrada General' }, price: 20 },
      { id: 'vip', name: { en: 'VIP Entry', es: 'Entrada VIP' }, price: 40 },
      { id: 'table', name: { en: 'Table + Bottle Service', es: 'Mesa + Servicio de Botella' }, price: 300 },
    ],
  },
  {
    id: 'sabados-a-fuego',
    title: { en: 'Sábados a Fuego', es: 'Sábados a Fuego' },
    subtitle: { en: 'Live DJs · The big night', es: 'DJs en Vivo · La noche grande' },
    tableMode: 'call',
    date: 'SAT · AUG 8',
    time: '7 PM – 3 AM',
    image: img('photo-1533174072545-7a4b6ad7a6c3'),
    tiers: [
      { id: 'ga', name: { en: 'General Admission', es: 'Entrada General' }, price: 20 },
      { id: 'vip', name: { en: 'VIP Entry', es: 'Entrada VIP' }, price: 45 },
      { id: 'table', name: { en: 'Table + Bottle Service', es: 'Mesa + Servicio de Botella' }, price: 350 },
    ],
  },
  {
    id: 'domingo-latino',
    title: { en: 'Domingo Latino', es: 'Domingo Latino' },
    subtitle: { en: 'Salsa · Cumbia · Banda', es: 'Salsa · Cumbia · Banda' },
    date: 'SUN · AUG 9',
    time: '7 PM – 2 AM',
    image: img('photo-1429962714451-bb934ecdc4ec'),
    tiers: [
      { id: 'ga', name: { en: 'General Admission', es: 'Entrada General' }, price: 15 },
      { id: 'vip', name: { en: 'VIP Entry', es: 'Entrada VIP' }, price: 30 },
      { id: 'table', name: { en: 'Table + Bottle Service', es: 'Mesa + Servicio de Botella' }, price: 250 },
    ],
  },
  {
    id: 'bachata-social',
    title: { en: 'Bachata Social', es: 'Social de Bachata' },
    subtitle: { en: 'Dance night · Lessons at 8 PM', es: 'Noche de baile · Clases 8 PM' },
    date: 'THU · AUG 13',
    time: '7 PM – 2 AM',
    image: img('photo-1566737236500-c8ac43014a67'),
    tiers: [
      { id: 'ga', name: { en: 'General Admission', es: 'Entrada General' }, price: 15 },
      { id: 'vip', name: { en: 'VIP Entry', es: 'Entrada VIP' }, price: 30 },
      { id: 'table', name: { en: 'Table + Bottle Service', es: 'Mesa + Servicio de Botella' }, price: 250 },
    ],
  },
  {
    id: 'live-artist',
    title: { en: 'Live Artist Night', es: 'Artista en Vivo' },
    subtitle: { en: 'Special guest performance', es: 'Presentación de artista invitado' },
    date: 'SAT · AUG 15',
    time: '7 PM – 3 AM',
    image: img('photo-1501281668745-f7f57925c3b4'),
    tiers: [
      { id: 'ga', name: { en: 'General Admission', es: 'Entrada General' }, price: 30 },
      { id: 'vip', name: { en: 'VIP Entry', es: 'Entrada VIP' }, price: 60 },
      { id: 'table', name: { en: 'Table + Bottle Service', es: 'Mesa + Servicio de Botella' }, price: 400 },
    ],
  },
]

export const getEvent = (id) => events.find((e) => e.id === id)

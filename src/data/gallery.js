// Stand-in gallery — swap with the venue's own photos from their socials.
const img = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const galleryImages = [
  { src: img('photo-1470229722913-7c0e2dbbafd3'), alt: 'Main stage lights' },
  { src: img('photo-1516450360452-9312f5e86fc7'), alt: 'Crowd at the main floor' },
  { src: img('photo-1514525253161-7a46d19cd819'), alt: 'Friday night set' },
  { src: img('photo-1566737236500-c8ac43014a67'), alt: 'Neon room' },
  { src: img('photo-1501281668745-f7f57925c3b4'), alt: 'Hands up moment' },
  { src: img('photo-1429962714451-bb934ecdc4ec'), alt: 'Guest DJ night' },
  { src: img('photo-1533174072545-7a4b6ad7a6c3'), alt: 'Confetti drop' },
  { src: img('photo-1514362545857-3bc16c4c7d1b'), alt: 'Signature cocktails' },
  { src: img('photo-1528605248644-14dd04022da1'), alt: 'Friends at the lounge' },
  { src: img('photo-1414235077428-338989a2e8c0'), alt: 'Dining room' },
  { src: img('photo-1551024709-8f23befc6f87'), alt: 'Cocktail pour' },
  { src: img('photo-1544025162-d76694265947'), alt: 'From the kitchen' },
]

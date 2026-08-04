// Stand-in menu — replace with the real menu when finalized.
const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const foodImages = [
  img('photo-1414235077428-338989a2e8c0'), // restaurant interior
  img('photo-1546069901-ba9599a7e63c'),   // bowl
  img('photo-1544025162-d76694265947'),   // grilled ribs
  img('photo-1514362545857-3bc16c4c7d1b'), // cocktails
  img('photo-1559339352-11d035aa65de'),   // plated dish
  img('photo-1551024709-8f23befc6f87'),   // cocktail pour
]

export const menu = [
  {
    key: 'menu.starters',
    items: [
      { name: { en: 'Patatas Bravas', es: 'Patatas Bravas' }, desc: { en: 'Crispy potatoes, spicy aioli', es: 'Papas crujientes, alioli picante' }, price: 9 },
      { name: { en: 'Gambas al Ajillo', es: 'Gambas al Ajillo' }, desc: { en: 'Garlic shrimp, chili oil, toasted bread', es: 'Camarones al ajo, aceite de chile, pan tostado' }, price: 14 },
      { name: { en: 'Tuna Tostadas', es: 'Tostadas de Atún' }, desc: { en: 'Ahi tuna, avocado, chipotle crema', es: 'Atún ahi, aguacate, crema de chipotle' }, price: 13 },
      { name: { en: 'Croquetas de Jamón', es: 'Croquetas de Jamón' }, desc: { en: 'Serrano ham croquettes, manchego', es: 'Croquetas de jamón serrano, manchego' }, price: 11 },
    ],
  },
  {
    key: 'menu.mains',
    items: [
      { name: { en: 'Paella de Mariscos', es: 'Paella de Mariscos' }, desc: { en: 'Saffron rice, shrimp, mussels, calamari', es: 'Arroz con azafrán, camarones, mejillones, calamares' }, price: 28 },
      { name: { en: 'Churrasco Steak', es: 'Churrasco' }, desc: { en: '12oz skirt steak, chimichurri, yuca fries', es: 'Arrachera de 12oz, chimichurri, yuca frita' }, price: 32 },
      { name: { en: 'Pollo a la Brasa', es: 'Pollo a la Brasa' }, desc: { en: 'Half roasted chicken, aji verde, plantains', es: 'Medio pollo asado, ají verde, plátanos' }, price: 22 },
      { name: { en: 'Rio Burger', es: 'Hamburguesa Rio' }, desc: { en: 'Double smash, manchego, caramelized onion', es: 'Doble carne, manchego, cebolla caramelizada' }, price: 18 },
    ],
  },
  {
    key: 'menu.desserts',
    items: [
      { name: { en: 'Churros con Chocolate', es: 'Churros con Chocolate' }, desc: { en: 'Cinnamon sugar, dark chocolate dip', es: 'Azúcar con canela, chocolate oscuro' }, price: 9 },
      { name: { en: 'Tres Leches', es: 'Tres Leches' }, desc: { en: 'Classic sponge cake, whipped cream, berries', es: 'Bizcocho clásico, crema batida, frutos rojos' }, price: 10 },
      { name: { en: 'Flan de Coco', es: 'Flan de Coco' }, desc: { en: 'Coconut flan, caramel, toasted coconut', es: 'Flan de coco, caramelo, coco tostado' }, price: 8 },
    ],
  },
  {
    key: 'menu.cocktails',
    items: [
      { name: { en: 'Neon Margarita', es: 'Margarita Neón' }, desc: { en: 'Tequila, midori, lime, tajín rim', es: 'Tequila, midori, limón, borde de tajín' }, price: 15 },
      { name: { en: 'Rio Sunset', es: 'Atardecer del Rio' }, desc: { en: 'Rum, passion fruit, prosecco float', es: 'Ron, maracuyá, toque de prosecco' }, price: 16 },
      { name: { en: 'Mojito de la Casa', es: 'Mojito de la Casa' }, desc: { en: 'Aged rum, mint, cane sugar', es: 'Ron añejo, hierbabuena, azúcar de caña' }, price: 14 },
      { name: { en: 'Glow Sangria', es: 'Sangría Glow' }, desc: { en: 'House red, citrus, brandy — by the pitcher', es: 'Vino tinto de la casa, cítricos, brandy — por jarra' }, price: 38 },
    ],
  },
]

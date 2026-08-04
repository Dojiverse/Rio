import { createContext, useContext, useEffect, useState } from 'react'

const dict = {
  en: {
    // Nav
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.dining': 'Dining',
    'nav.book': 'Book an Event',
    'nav.account': 'Account',

    // Hero
    'hero.cta': 'Get Tickets',

    // Events
    'events.header': 'Find Events',
    'events.sub': 'Every night is a different world. Pick yours.',
    'events.from': 'From',
    'events.getTickets': 'Get Tickets',
    'events.soldOut': 'Sold Out',

    // Checkout
    'checkout.title': 'Checkout',
    'checkout.tickets': 'Tickets',
    'checkout.summary': 'Order Summary',
    'checkout.subtotal': 'Subtotal',
    'checkout.fees': 'Service Fees',
    'checkout.total': 'Total',
    'checkout.continue': 'Continue to Payment',
    'checkout.stripeNote': 'Secure payment powered by Stripe — coming soon.',
    'checkout.empty': 'Select at least one ticket to continue.',
    'checkout.back': 'Back to Events',
    'checkout.perTicket': 'each',

    // Gallery
    'gallery.header': 'Gallery',
    'gallery.sub': 'Nights you had to be there for.',

    // Dining
    'dining.header': 'Dining',
    'dining.sub': 'Club by night. Kitchen always.',
    'dining.order': 'Order Now',
    'dining.orderSoon': 'Online ordering coming soon — call us at (703) 975-1202.',
    'dining.menu': 'The Menu',
    'menu.starters': 'Starters & Tapas',
    'menu.mains': 'Mains',
    'menu.desserts': 'Desserts',
    'menu.cocktails': 'Signature Cocktails',

    // Book
    'book.header': 'Book an Event',
    'book.sub': 'Birthdays, private parties, corporate nights — we host it all.',
    'book.name': 'Full Name',
    'book.email': 'Email',
    'book.phone': 'Phone',
    'book.date': 'Event Date',
    'book.guests': 'Number of Guests',
    'book.type': 'Event Type',
    'book.type.birthday': 'Birthday',
    'book.type.private': 'Private Party',
    'book.type.corporate': 'Corporate Event',
    'book.type.other': 'Other',
    'book.details': 'Tell us about your event',
    'book.submit': 'Request Booking',
    'book.success': 'Request received! Our events team will contact you within 24 hours.',

    // Auth
    'auth.signin': 'Sign In',
    'auth.signup': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirm': 'Confirm Password',
    'auth.name': 'Full Name',
    'auth.forgot': 'Forgot password?',
    'auth.noAccount': "Don't have an account?",
    'auth.hasAccount': 'Already have an account?',
    'auth.welcome': 'Welcome to the club.',
    'auth.success': 'Account system coming soon — this is a preview.',

    // Table service
    'nav.tables': 'Table Service',
    'tables.header': 'Table Service',
    'tables.sub': 'Pick your night. Pick your table. Own it.',
    'tables.pickNight': 'Pick Your Night',
    'tables.legend.available': 'Available',
    'tables.legend.taken': 'Taken',
    'tables.seats': 'Seats',
    'tables.bottles': 'Bottles included',
    'tables.minSpend': 'Minimum spend',
    'tables.deposit': 'Deposit',
    'tables.reserve': 'Reserve This Table',
    'tables.callOnly': 'Phone reservations only for this night',
    'tables.callNote': 'For this event, tables are reserved by phone. Call us and our VIP host will set you up.',
    'tables.call': 'Call (703) 975-1202',
    'tables.selectPrompt': 'Select a table on the map',
    'tables.selectHint': 'Green tables are available. Tap one to see details.',
    'tables.request.title': 'Party of 12+ or planning something big?',
    'tables.request.sub': 'Our VIP team will build a custom package for you.',
    'tables.request.cta': 'Request Custom Package',
    'tcheckout.title': 'Reserve Your Table',
    'tcheckout.depositToday': 'Deposit due today',
    'tcheckout.balance': 'Balance due on the night',
    'tcheckout.balanceNote': 'Your deposit counts toward the table minimum. The remaining balance is settled at the venue.',
    'tcheckout.consent': 'I agree that my card will be saved and the remaining balance will be charged on the night of the event. No-shows forfeit the deposit. Cancellations are free up to 48 hours before the event.',
    'tcheckout.pay': 'Pay Deposit',
    'tcheckout.back': 'Back to Floor Map',
    'checkout.wantTable': 'Want a table for this night?',
    'map.stage': 'STAGE 1',
    'map.stage2': 'STAGE 2',
    'map.dance': 'DANCE FLOOR 1',
    'map.dance2': 'DANCE FLOOR 2',
    'map.bar': 'BAR',
    'map.bathroom': 'RESTROOMS',
    'map.entrance': 'ENTRANCE',

    // Footer
    'footer.hours': 'Hours',
    'footer.hoursDining': 'Kitchen: Thu–Sun, 7 PM – late',
    'footer.hoursClub': 'Club: Thu & Sun to 2 AM · Fri & Sat to 3 AM',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Latin Nightclub · Cantina · Sterling',
  },

  es: {
    // Nav
    'nav.events': 'Eventos',
    'nav.gallery': 'Galería',
    'nav.dining': 'Restaurante',
    'nav.book': 'Reservar Evento',
    'nav.account': 'Cuenta',

    // Hero
    'hero.cta': 'Comprar Entradas',

    // Events
    'events.header': 'Buscar Eventos',
    'events.sub': 'Cada noche es un mundo diferente. Elige el tuyo.',
    'events.from': 'Desde',
    'events.getTickets': 'Comprar Entradas',
    'events.soldOut': 'Agotado',

    // Checkout
    'checkout.title': 'Pago',
    'checkout.tickets': 'Entradas',
    'checkout.summary': 'Resumen del Pedido',
    'checkout.subtotal': 'Subtotal',
    'checkout.fees': 'Cargos por Servicio',
    'checkout.total': 'Total',
    'checkout.continue': 'Continuar al Pago',
    'checkout.stripeNote': 'Pago seguro con Stripe — próximamente.',
    'checkout.empty': 'Selecciona al menos una entrada para continuar.',
    'checkout.back': 'Volver a Eventos',
    'checkout.perTicket': 'c/u',

    // Gallery
    'gallery.header': 'Galería',
    'gallery.sub': 'Noches que había que vivir.',

    // Dining
    'dining.header': 'Restaurante',
    'dining.sub': 'Club de noche. Cocina siempre.',
    'dining.order': 'Ordenar Ahora',
    'dining.orderSoon': 'Pedidos en línea próximamente — llámanos al (703) 975-1202.',
    'dining.menu': 'El Menú',
    'menu.starters': 'Entradas y Tapas',
    'menu.mains': 'Platos Fuertes',
    'menu.desserts': 'Postres',
    'menu.cocktails': 'Cócteles de la Casa',

    // Book
    'book.header': 'Reserva un Evento',
    'book.sub': 'Cumpleaños, fiestas privadas, eventos corporativos — lo celebramos todo.',
    'book.name': 'Nombre Completo',
    'book.email': 'Correo Electrónico',
    'book.phone': 'Teléfono',
    'book.date': 'Fecha del Evento',
    'book.guests': 'Número de Invitados',
    'book.type': 'Tipo de Evento',
    'book.type.birthday': 'Cumpleaños',
    'book.type.private': 'Fiesta Privada',
    'book.type.corporate': 'Evento Corporativo',
    'book.type.other': 'Otro',
    'book.details': 'Cuéntanos sobre tu evento',
    'book.submit': 'Solicitar Reserva',
    'book.success': '¡Solicitud recibida! Nuestro equipo te contactará dentro de 24 horas.',

    // Auth
    'auth.signin': 'Iniciar Sesión',
    'auth.signup': 'Crear Cuenta',
    'auth.email': 'Correo Electrónico',
    'auth.password': 'Contraseña',
    'auth.confirm': 'Confirmar Contraseña',
    'auth.name': 'Nombre Completo',
    'auth.forgot': '¿Olvidaste tu contraseña?',
    'auth.noAccount': '¿No tienes cuenta?',
    'auth.hasAccount': '¿Ya tienes cuenta?',
    'auth.welcome': 'Bienvenido al club.',
    'auth.success': 'Sistema de cuentas próximamente — esto es una vista previa.',

    // Table service
    'nav.tables': 'Mesas VIP',
    'tables.header': 'Mesas VIP',
    'tables.sub': 'Elige tu noche. Elige tu mesa. Hazla tuya.',
    'tables.pickNight': 'Elige tu Noche',
    'tables.legend.available': 'Disponible',
    'tables.legend.taken': 'Ocupada',
    'tables.seats': 'Asientos',
    'tables.bottles': 'Botellas incluidas',
    'tables.minSpend': 'Consumo mínimo',
    'tables.deposit': 'Depósito',
    'tables.reserve': 'Reservar Esta Mesa',
    'tables.callOnly': 'Esta noche solo se reserva por teléfono',
    'tables.callNote': 'Para este evento, las mesas se reservan por teléfono. Llámanos y nuestro anfitrión VIP te atenderá.',
    'tables.call': 'Llamar (703) 975-1202',
    'tables.selectPrompt': 'Selecciona una mesa en el mapa',
    'tables.selectHint': 'Las mesas verdes están disponibles. Toca una para ver detalles.',
    'tables.request.title': '¿Grupo de 12+ o algo grande en mente?',
    'tables.request.sub': 'Nuestro equipo VIP creará un paquete a tu medida.',
    'tables.request.cta': 'Solicitar Paquete Personalizado',
    'tcheckout.title': 'Reserva tu Mesa',
    'tcheckout.depositToday': 'Depósito a pagar hoy',
    'tcheckout.balance': 'Saldo la noche del evento',
    'tcheckout.balanceNote': 'Tu depósito cuenta para el consumo mínimo. El saldo restante se liquida en el lugar.',
    'tcheckout.consent': 'Acepto que mi tarjeta quede guardada y que el saldo restante se cobre la noche del evento. No presentarse implica perder el depósito. Cancelación gratuita hasta 48 horas antes del evento.',
    'tcheckout.pay': 'Pagar Depósito',
    'tcheckout.back': 'Volver al Mapa',
    'checkout.wantTable': '¿Quieres una mesa para esta noche?',
    'map.stage': 'ESCENARIO 1',
    'map.stage2': 'ESCENARIO 2',
    'map.dance': 'PISTA 1',
    'map.dance2': 'PISTA 2',
    'map.bar': 'BARRA',
    'map.bathroom': 'BAÑOS',
    'map.entrance': 'ENTRADA',

    // Footer
    'footer.hours': 'Horario',
    'footer.hoursDining': 'Cocina: Jue–Dom, 7 PM – tarde',
    'footer.hoursClub': 'Club: Jue y Dom hasta 2 AM · Vie y Sáb hasta 3 AM',
    'footer.contact': 'Contacto',
    'footer.follow': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.tagline': 'Club Latino · Cantina · Sterling',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('ibiza-lang') || 'en')

  useEffect(() => {
    localStorage.setItem('ibiza-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (key) => dict[lang]?.[key] ?? dict.en[key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

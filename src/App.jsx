import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Tables from './pages/Tables'
import TableCheckout from './pages/TableCheckout'
import Gallery from './pages/Gallery'
import Dining from './pages/Dining'
import Book from './pages/Book'
import Auth from './pages/Auth'

// Scroll to top on route change (except in-page hash links)
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/tables/checkout/:eventId/:tableId" element={<TableCheckout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/book" element={<Book />} />
          <Route path="/account" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

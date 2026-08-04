import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import EventCards from '../components/EventCards'

export default function Home() {
  const { hash } = useLocation()

  // Support /#events deep links from other pages
  useEffect(() => {
    if (hash === '#events') {
      // wait a tick for layout
      setTimeout(() => {
        document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <EventCards />
    </>
  )
}

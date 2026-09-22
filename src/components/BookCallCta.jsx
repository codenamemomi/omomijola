import { useEffect, useState } from 'react'

const bookingUrl = 'https://codename.zohobookings.com/portal-embed#/5010315000000039045'
const bookingScriptUrl = 'https://bookings.nimbuspop.com/assets/embed.js'
let bookingScriptPromise

function loadBookingScript() {
  if (window.Bookings) return Promise.resolve(window.Bookings)
  if (bookingScriptPromise) return bookingScriptPromise

  bookingScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${bookingScriptUrl}"]`)
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.Bookings), { once: true })
      existingScript.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = bookingScriptUrl
    script.async = true
    script.onload = () => resolve(window.Bookings)
    script.onerror = reject
    document.head.appendChild(script)
  })

  return bookingScriptPromise
}

/**
 * Book-a-call control: uses bookingUrl when set, otherwise falls back to contact form.
 */
function BookCallCta({ onContactClick, className = '', children = 'Book a call', asLinkStyle = false }) {
  const label = children
  const [isBookingReady, setIsBookingReady] = useState(false)
  const [isBookingLoading, setIsBookingLoading] = useState(false)

  useEffect(() => {
    let isMounted = true
    loadBookingScript()
      .then(() => {
        if (isMounted) setIsBookingReady(true)
      })
      .catch(() => {})

    return () => {
      isMounted = false
    }
  }, [])

  const handleBookingClick = (event) => {
    event.preventDefault()
    if (isBookingLoading) return
    setIsBookingLoading(true)

    const openModal = (bookings) => {
      if (bookings?.linkModal) {
        bookings.linkModal({ url: bookingUrl })(event)
        setIsBookingLoading(false)
        return
      }

      setIsBookingLoading(false)
      onContactClick?.()
    }

    if (window.Bookings?.linkModal) {
      openModal(window.Bookings)
      return
    }

    loadBookingScript()
      .then(openModal)
      .catch(() => {
        setIsBookingLoading(false)
        onContactClick?.()
      })
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleBookingClick}
      data-booking-ready={isBookingReady}
      data-link-style={asLinkStyle || undefined}
      aria-busy={isBookingLoading}
    >
      {isBookingLoading ? 'Loading...' : label}
    </button>
  )
}

export default BookCallCta

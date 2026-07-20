import { siteConfig } from '../data/portfolio.js'

/**
 * Book-a-call control: uses bookingUrl when set, otherwise falls back to contact form.
 */
function BookCallCta({ onContactClick, className = '', children = 'Book a call', asLinkStyle = false }) {
  const label = children
  const url = siteConfig.bookingUrl

  if (url) {
    return (
      <a
        href={url}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    )
  }

  if (asLinkStyle) {
    return (
      <button type="button" className={className} onClick={onContactClick}>
        {label}
      </button>
    )
  }

  return (
    <button type="button" className={className} onClick={onContactClick}>
      {label}
    </button>
  )
}

export default BookCallCta

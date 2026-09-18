import { contactDetails, socialLinks, siteConfig, navItems } from '../data/portfolio.js'
import BookCallCta from './BookCallCta.jsx'

function Footer({ onContactClick, onNavigate }) {
  const { location, email, phone } = contactDetails
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="visit">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-availability">{siteConfig.availability}</span>
          <h2>Need a FastAPI backend that can take payment?</h2>
          <p>
            Commission backend systems, APIs, and infrastructure for products that need to ship and
            stay correct. Based in {location} · open to remote.
          </p>
          <div className="footer-cta-row">
            <BookCallCta className="footer-cta-primary" onContactClick={onContactClick}>
              Book a call
            </BookCallCta>
            <button type="button" className="footer-cta-secondary" onClick={onContactClick}>
              Send a message
            </button>
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                className="footer-cta-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            )}
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h3>Floor plan</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button type="button" onClick={() => onNavigate(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Information desk</h3>
            <ul>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              </li>
              <li>
                <span>{location} · Remote</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Channels</h3>
            <ul className="footer-socials">
              {socialLinks.map((link) => {
                const Icon = link.icon
                const isMailto = link.href.startsWith('mailto:')
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isMailto ? undefined : '_blank'}
                      rel={isMailto ? undefined : 'noreferrer'}
                    >
                      <Icon aria-hidden />
                      <span>{link.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Omomijolaoluwa Akinrogunde. All rights reserved.</p>
        <p className="footer-tagline">Permanent collection of production systems</p>
      </div>
    </footer>
  )
}

export default Footer

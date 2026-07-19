import { contactDetails, socialLinks, siteConfig, navItems } from '../data/portfolio.js'

function Footer({ onContactClick, onNavigate }) {
  const { location, email, phone } = contactDetails
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-availability">{siteConfig.availability}</span>
          <h2>Let&apos;s build something reliable.</h2>
          <p>
            Backend systems, APIs, and infrastructure for products that need to ship and stay up.
            Based in {location} · open to remote.
          </p>
          <div className="footer-cta-row">
            <button type="button" className="footer-cta-primary" onClick={onContactClick}>
              Contact me
            </button>
            <a href={`mailto:${email}`} className="footer-cta-secondary">
              {email}
            </a>
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                className="footer-cta-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Download resume
              </a>
            )}
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h3>Navigate</h3>
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
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              </li>
              <li>
                <span>{location}</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Connect</h3>
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
        <p className="footer-tagline">Backend &amp; Infrastructure Engineer</p>
      </div>
    </footer>
  )
}

export default Footer

import { socialLinks, siteConfig, heroMetrics } from '../data/portfolio.js'
import BookCallCta from './BookCallCta.jsx'

function HeroSection({ onNavigate, onContactClick }) {
  return (
    <section id="hero" className="section hero-section museum-lobby">
      <div className="hero-stage">
        <div className="hero-lights"></div>
        <div className="hero-glow"></div>
      </div>

      <div className="hero-copy">
        {/* <p className="hero-context">Permanent collection · Backend systems</p> */}

        <div className="hero-title-wrap lobby-title">
          <h1>Omomijolaoluwa</h1>
          <p className="hero-role-line">FastAPI · RestAPI · backends · payments · auth · deploy</p>
        </div>

        <p className="hero-mission">{siteConfig.mission}</p>

        <div className="hero-metrics" aria-label="Key metrics">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="hero-metric">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <BookCallCta className="hero-cta-primary" onContactClick={onContactClick}>
            Book a call
          </BookCallCta>
          <a
            href="#services"
            className="ghost"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('services')
            }}
          >
            View services
          </a>
          <a
            href="#projects"
            className="ghost"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('projects')
            }}
          >
            Enter the collection
          </a>
        </div>

        <div className="hero-socials">
          {socialLinks.map((link) => {
            const Icon = link.icon
            const isMailto = link.href.startsWith('mailto:')

            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={isMailto ? undefined : '_blank'}
                rel={isMailto ? undefined : 'noreferrer'}
              >
                <Icon />
                <span>{link.label.toUpperCase()}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

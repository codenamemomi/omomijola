import { contactDetails, siteConfig } from '../data/portfolio.js'
import { FaServer, FaDatabase, FaTerminal } from 'react-icons/fa'
import BookCallCta from './BookCallCta.jsx'

function AboutSection({ onContactClick }) {
  const { location, email } = contactDetails

  return (
    <section id="about" className="section card-section">
      <div className="section-header museum-header">
        <span>About</span>
        <h2>Curatorial note</h2>
        <p className="section-lede">{siteConfig.mission}</p>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">
            I build backend systems that serve real users while keeping infrastructure and deployment
            simple, scalable, and maintainable. The focus is API-first architecture, reliable data
            models, and production-ready automation work that stays correct under load and audit.
          </p>

          <div className="about-pillars">
            <div className="pillar-card">
              <div className="pillar-icon">
                <FaServer />
              </div>
              <div className="pillar-info">
                <h3>Scalable API design</h3>
                <p>
                  RESTful APIs with FastAPI &amp; Django, strict validation, and clear domain
                  boundaries.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaDatabase />
              </div>
              <div className="pillar-info">
                <h3>Data &amp; performance</h3>
                <p>
                  PostgreSQL schemas, query tuning, and async caching with Redis so latency stays
                  honest.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaTerminal />
              </div>
              <div className="pillar-info">
                <h3>Deployable infrastructure</h3>
                <p>
                  Dockerized runtimes, NGINX reverse proxies, and CI/CD that remove manual release
                  risk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card system-status-card museum-status-card">
          <div className="status-header">
            <span className="status-text">On view · Available</span>
          </div>
          <div className="status-details">
            <div className="status-row">
              <span className="label">Location</span>
              <span className="value">{location} · Remote</span>
            </div>
            <div className="status-row">
              <span className="label">Commission</span>
              <span className="value">Freelance · Contract · Full-time</span>
            </div>
            <div className="status-row">
              <span className="label">Email</span>
              <a href={`mailto:${email}`} className="value email-link">
                {email}
              </a>
            </div>
          </div>
          <BookCallCta className="status-cta-button" onContactClick={onContactClick}>
            Book a call
          </BookCallCta>
          <div className="badges">
            <span>FastAPI</span>
            <span>Django</span>
            <span>PostgreSQL</span>
            <span>Redis</span>
            <span>Docker</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

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
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">
            API backend engineer
            <br />
            I build production APIs with auth, payments, and deploy — so your product can charge users without a fragile backend.

          </p>

          <div className="about-pillars">
            <div className="pillar-card">
              <div className="pillar-icon">
                <FaServer />
              </div>
              <div className="pillar-info">
                <h3>API</h3>
                <p>
                  FastAPI, RestAPI, Pydantic, JWT/RBAC, clear modules &amp; OpenAPI docs so clients can integrate without hand-holding.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaDatabase />
              </div>
              <div className="pillar-info">
                <h3>Data &amp; speed</h3>
                <p>
                  Postgres schema, query work, Redis, Celery
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaTerminal />
              </div>
              <div className="pillar-info">
                <h3>Ship it</h3>
                <p>
                  Docker, NGINX, GitHub Actions, Render/Vercel/AWS
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

import { contactDetails } from '../data/portfolio.js'
import { FaServer, FaDatabase, FaTerminal } from 'react-icons/fa'

function AboutSection({ onContactClick }) {
  const { location, email } = contactDetails

  return (
    <section id="about" className="section card-section">
      <div className="section-header">
        <span>About</span>
        <h2>End-to-end backend delivery for modern applications</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">
            I build backend systems that serve real users while keeping infrastructure and deployment
            simple, scalable, and maintainable. My work focuses on API-first architecture,
            reliable data models, and production-ready automation.
          </p>

          <div className="about-pillars">
            <div className="pillar-card">
              <div className="pillar-icon">
                <FaServer />
              </div>
              <div className="pillar-info">
                <h3>Scalable API Design</h3>
                <p>Crafting robust RESTful APIs using FastAPI & Django with strict request/response validation schemas.</p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaDatabase />
              </div>
              <div className="pillar-info">
                <h3>Database Optimization</h3>
                <p>Tuning PostgreSQL schemas, optimizing complex queries, and managing async caching with Redis.</p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaTerminal />
              </div>
              <div className="pillar-info">
                <h3>Automation & Pipelines</h3>
                <p>Configuring Dockerized runtimes, securing reverse proxies with NGINX, and implementing CI/CD workflows.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card system-status-card">
          <div className="status-header">
            <span className="status-text">AVAILABLE</span>
          </div>
          <div className="status-details">
            <div className="status-row">
              <span className="label">Location:</span>
              <span className="value">{location}</span>
            </div>
            <div className="status-row">
              <span className="label">Protocol:</span>
              <span className="value">Secure HTTPS</span>
            </div>
            <div className="status-row">
              <span className="label">Secure Email:</span>
              <a href={`mailto:${email}`} className="value email-link">{email}</a>
            </div>
          </div>
          <button
            type="button"
            className="status-cta-button"
            onClick={onContactClick}
          >
            Open Secure Channel
          </button>
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

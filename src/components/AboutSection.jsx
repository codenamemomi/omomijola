import { contactDetails } from '../data/portfolio.js'

function AboutSection() {
  const { location, phone, email } = contactDetails

  return (
    <section id="about" className="section card-section">
      <div className="section-header">
        <span>About</span>
        <h2>End-to-end backend delivery for modern applications</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I build backend systems that serve real users while keeping infrastructure and deployment
            simple, scalable, and maintainable. My work focuses on API-first architecture,
            reliable data models, and production-ready automation.
          </p>
          <ul>
            <li>API architecture and REST design</li>
            <li>Database tuning and PostgreSQL schema design</li>
            <li>Containerized deployment with Docker and NGINX</li>
            <li>Background processing with Celery and Redis</li>
            <li>Security hardening, JWT auth, and access control</li>
          </ul>
        </div>
        <div className="contact-card">
          <span>Contact</span>
          <p>{location} · {phone}</p>
          <a href={`mailto:${email}`}>{email}</a>
          <div className="badges">
            <span>FastAPI</span>
            <span>Django</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

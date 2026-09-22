import BookCallCta from './BookCallCta.jsx'

function ServicesSection({ services = [], onContactClick, onNavigate }) {
  return (
    <section id="services" className="section services-section">
      <div className="section-header museum-header">
        <span>Services</span>
        <h2>How to work with me</h2>
        <p className="section-lede">
          Clear engagement shapes for products that need reliable backends—not endless discovery
          decks. Pick a lane, or book a short call and we&apos;ll map the fit.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <p className="service-best-for">
              <span>Best for</span> {service.bestFor}
            </p>
            {service.tags?.length > 0 && (
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="services-cta-bar">
        <div>
          <h3>Ready to start a project?</h3>
          <p>Book an intro call, or message me with context and constraints.</p>
        </div>
        <div className="services-cta-actions">
          <BookCallCta className="footer-cta-primary" onContactClick={onContactClick}>
            Book a call
          </BookCallCta>
          <button
            type="button"
            className="footer-cta-secondary"
            onClick={onContactClick}
          >
            Send a message
          </button>
          {onNavigate && (
            <button
              type="button"
              className="footer-cta-secondary"
              onClick={() => onNavigate('projects')}
            >
              See live work
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

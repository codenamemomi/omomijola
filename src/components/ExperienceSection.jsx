function ExperienceSection({ experienceItems }) {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span>Experience</span>
        <h2>High-impact backend work and infrastructure ownership</h2>
      </div>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <div className="timeline">
          {experienceItems.map((item) => (
            <article key={`${item.company}-${item.role}`} className="timeline-item card">
              <div className="timeline-node">
                <span className="timeline-node-inner"></span>
              </div>
              <div className="timeline-content">
                <div className="timeline-title">
                  <h3>{item.role}</h3>
                  <span className="company-name">{item.company}</span>
                </div>
                <p className="timeline-meta">{item.date} · {item.location}</p>
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {item.tags && (
                  <div className="experience-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

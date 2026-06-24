function ExperienceSection({ experienceItems }) {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span>Experience</span>
        <h2>High-impact backend work and infrastructure ownership</h2>
      </div>
      <div className="timeline">
        {experienceItems.map((item) => (
          <article key={item.role} className="timeline-item card">
            <div className="timeline-title">
              <h3>{item.role}</h3>
              <span>{item.company}</span>
            </div>
            <p className="timeline-meta">{item.date} · {item.location}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection

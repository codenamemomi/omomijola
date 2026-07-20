function SkillsSection({ skillGroups = [] }) {
  return (
    <section id="skills" className="section skills-section materials-section">
      <div className="section-header museum-header">
        <span>Materials</span>
        <h2>Craft mediums used across the collection</h2>
        <p className="section-lede">
          Grouped by how they appear in production work—not as a logo parade, but as the materials of
          the craft.
        </p>
      </div>

      <div className="materials-wall">
        {skillGroups.map((group) => (
          <div key={group.name} className="materials-panel">
            <div className="materials-panel-header">
              <h3>{group.name}</h3>
              <span>{group.caption}</span>
            </div>
            <ul className="materials-list">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="material-item">
                    <span className="material-swatch" style={{ background: item.color }} aria-hidden>
                      <Icon size={18} />
                    </span>
                    <span className="material-name">{item.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection

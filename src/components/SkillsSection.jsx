import CircularGallery from './CircularGallery.jsx'

function SkillsSection({ skills }) {
  const items = skills.map((skill) => ({
    ...skill,
    icon: <skill.icon size={32} />,
  }))

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <span>Skills</span>
        <h2>Tools and technologies I use every day</h2>
      </div>
      <div className="skill-gallery-wrap">
        <CircularGallery
          items={items}
          textColor="#12131b"
          scrollSpeed={1.2}
          borderRadius={0.18}
          font="700 18px Inter"
        />
      </div>
    </section>
  )
}

export default SkillsSection

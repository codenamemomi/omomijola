import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function ProjectsSection({ projectItems }) {
  const sliderRef = useRef(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const hasDragged = useRef(false)
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider || projectItems.length === 0) return

    const copyWidth = slider.scrollWidth / 3
    slider.scrollLeft = copyWidth

    const isJumping = { current: false }

    const handleScroll = () => {
      if (!slider || isJumping.current) return

      const maxScroll = slider.scrollWidth - slider.clientWidth
      const currentPosition = slider.scrollLeft
      const sectionWidth = slider.scrollWidth / 3

      if (currentPosition <= 50) {
        isJumping.current = true
        const prevBehavior = slider.style.scrollBehavior
        slider.style.scrollBehavior = 'auto'
        slider.scrollLeft = currentPosition + sectionWidth
        slider.style.scrollBehavior = prevBehavior
        requestAnimationFrame(() => { isJumping.current = false })
      } else if (currentPosition >= maxScroll - 50) {
        isJumping.current = true
        const prevBehavior = slider.style.scrollBehavior
        slider.style.scrollBehavior = 'auto'
        slider.scrollLeft = currentPosition - sectionWidth
        slider.style.scrollBehavior = prevBehavior
        requestAnimationFrame(() => { isJumping.current = false })
      }
    }

    slider.addEventListener('scroll', handleScroll, { passive: true })
    return () => slider.removeEventListener('scroll', handleScroll)
  }, [projectItems])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
      }
    }
    if (activeProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject])

  const handlePointerDown = (event) => {
    if (event.pointerType === 'touch') return

    const slider = sliderRef.current
    if (!slider) return

    isDown.current = true
    slider.classList.add('dragging')
    startX.current = event.pageX - slider.offsetLeft
    scrollLeft.current = slider.scrollLeft
    hasDragged.current = false
  }

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return

    const slider = sliderRef.current
    if (!slider || !isDown.current) return

    const x = event.pageX - slider.offsetLeft
    const delta = Math.abs(x - startX.current)
    
    if (delta > 15) {
      hasDragged.current = true
      event.preventDefault()
    }

    if (hasDragged.current) {
      const walk = (x - startX.current) * 1.2
      slider.scrollLeft = scrollLeft.current - walk
    }
  }

  const handlePointerUp = (event) => {
    if (event && event.pointerType === 'touch') return

    const slider = sliderRef.current
    if (!slider) return

    isDown.current = false
    slider.classList.remove('dragging')
  }

  const scrollByCard = (direction) => {
    const slider = sliderRef.current
    if (!slider) return

    const card = slider.querySelector('.project-card')
    const cardWidth = card ? card.offsetWidth : 420
    const gap = 24
    const distance = (cardWidth + gap) * direction

    slider.scrollTo({ left: slider.scrollLeft + distance, behavior: 'smooth' })
  }

  const repeatedProjects = [...projectItems, ...projectItems, ...projectItems]

  return (
    <section id="projects" className="section card-section project-section-expanded">
      <div className="section-header">
        <span>Projects</span>
        <h2>Productive platforms built with backend-first architecture</h2>
      </div>
      <div className="project-slider-container">
        <button
          type="button"
          className="project-slider-arrow project-slider-prev"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous project"
        >
          ‹
        </button>
        <div
          ref={sliderRef}
          className="project-slider-wrapper"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="project-slider">
            {repeatedProjects.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className="project-card card"
                onClick={() => {
                  if (!hasDragged.current) {
                    setActiveProject(project)
                  }
                }}
              >
                {project.image && (
                  <div className="project-card-image">
                    <img src={project.image} alt={`${project.title} preview`} />
                    <div className="project-card-overlay">
                      <span>View Architecture Details</span>
                    </div>
                  </div>
                )}
                <div className="project-card-body">
                  <div className="project-card-details">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <div className="project-tech-badges">
                      {project.tech.split(',').map((techItem) => (
                        <span key={techItem} className="tech-badge">
                          {techItem.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                  <div className="project-card-actions" onClick={(e) => e.stopPropagation()}>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card-link"
                      >
                        Live demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card-link project-card-link-secondary"
                      >
                        GitHub repo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="project-slider-arrow project-slider-next"
          onClick={() => scrollByCard(1)}
          aria-label="Next project"
        >
          ›
        </button>
      </div>

      {activeProject && createPortal(
        <div className="project-details-modal" onClick={() => setActiveProject(null)}>
          <div className="project-details-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-details-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close details modal"
            >
              ×
            </button>
            <div className="project-details-content-grid">
              <div className="project-details-media">
                <img src={activeProject.image} alt={activeProject.title} />
              </div>
              <div className="project-details-info">
                <span className="project-details-tag">Project System Architecture</span>
                <h2>{activeProject.title}</h2>
                <p className="project-details-subtitle">{activeProject.subtitle}</p>
                <div className="project-details-tech-pills">
                  {activeProject.tech.split(',').map((t) => (
                    <span key={t} className="tech-pill-modal">
                      {t.trim()}
                    </span>
                  ))}
                </div>
                <p className="project-details-desc">{activeProject.description}</p>

                <div className="project-details-highlights">
                  <h4>Key Backend Architecture Highlights</h4>
                  <ul className="project-details-bullets">
                    {activeProject.details &&
                      activeProject.details.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                  </ul>
                </div>

                <div className="project-details-actions">
                  {activeProject.demoUrl && (
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-details-link"
                    >
                      Live Deployment
                    </a>
                  )}
                  {activeProject.repoUrl && (
                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-details-link project-details-link-secondary"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default ProjectsSection

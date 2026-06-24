import { useEffect, useRef } from 'react'

function ProjectsSection({ projectItems }) {
  const sliderRef = useRef(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider || projectItems.length === 0) return

    const copyWidth = slider.scrollWidth / 3
    slider.scrollLeft = copyWidth

    const handleScroll = () => {
      if (!slider) return
      const maxScroll = slider.scrollWidth - slider.clientWidth
      const currentPosition = slider.scrollLeft
      const copyWidth = slider.scrollWidth / 3

      if (currentPosition <= 50) {
        slider.scrollLeft = currentPosition + copyWidth
      } else if (currentPosition >= maxScroll - 50) {
        slider.scrollLeft = currentPosition - copyWidth
      }
    }

    slider.addEventListener('scroll', handleScroll)
    return () => slider.removeEventListener('scroll', handleScroll)
  }, [projectItems])

  const handlePointerDown = (event) => {
    const slider = sliderRef.current
    if (!slider) return

    isDown.current = true
    slider.classList.add('dragging')
    slider.setPointerCapture(event.pointerId)
    startX.current = event.pageX - slider.offsetLeft
    scrollLeft.current = slider.scrollLeft
  }

  const handlePointerMove = (event) => {
    const slider = sliderRef.current
    if (!slider || !isDown.current) return

    event.preventDefault()
    const x = event.pageX - slider.offsetLeft
    const walk = (x - startX.current) * 1.2
    slider.scrollLeft = scrollLeft.current - walk
  }

  const handlePointerUp = () => {
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
              <article key={`${project.title}-${index}`} className="project-card card">
                {project.image && (
                  <div className="project-card-image">
                    <img src={project.image} alt={`${project.title} preview`} />
                  </div>
                )}
                <div className="project-card-body">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-tech">{project.tech}</p>
                  </div>
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                  <div className="project-card-actions">
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
    </section>
  )
}

export default ProjectsSection

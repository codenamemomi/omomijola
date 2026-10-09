import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import ContactModal from './ContactModal.jsx'
import ProjectShowcaseCarousel from './ProjectShowcaseCarousel.jsx'

function ProjectsPage({ projectItems, navItems, onNavigate, onBack }) {
  const [activeProject, setActiveProject] = useState(projectItems[0])
  const [focusTarget, setFocusTarget] = useState(null)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const projectFocusRef = useRef(null)

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const openProjectFromIndex = (project) => {
    setActiveProject(project)
    setFocusTarget(project.title)
  }

  useEffect(() => {
    if (!focusTarget || focusTarget !== activeProject.title || !projectFocusRef.current) return undefined

    const scrollTimer = window.setTimeout(() => {
      projectFocusRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    const highlightTimer = window.setTimeout(() => setFocusTarget(null), 900)

    return () => {
      window.clearTimeout(scrollTimer)
      window.clearTimeout(highlightTimer)
    }
  }, [activeProject, focusTarget])

  return (
    <div className="page museum-page projects-page">
      <div className="page-frame" />
      <NavBar navItems={navItems} activeSection="projects" onNavigate={onNavigate} />
      <main>
        <section className="projects-page-hero content">
          <button type="button" className="projects-back-link" onClick={onBack}>
            ← Back to lobby
          </button>
          <div className="section-header museum-header">
            <span>Full collection</span>
            <h1>Projects</h1>
            <p className="section-lede">
              A complete index of systems built across commerce, compliance, realtime infrastructure,
              and developer tooling. Select a project to bring its architecture into focus.
            </p>
          </div>
          <div className="projects-page-count">
            <strong>{projectItems.length}</strong>
            <span>systems in the collection</span>
          </div>
        </section>

        {activeProject && (
          <section
            ref={projectFocusRef}
            className={`project-focus content${focusTarget === activeProject.title ? ' is-focus-target' : ''}`}
            aria-live="polite"
            aria-labelledby="project-focus-title"
          >
            <ProjectShowcaseCarousel key={activeProject.title} project={activeProject} />
            <div className="project-focus-copy">
              <div className="plaque-meta-row">
                {activeProject.wing && <span className="plaque-wing">{activeProject.wing}</span>}
                {activeProject.year && <span className="plaque-year">{activeProject.year}</span>}
                {activeProject.role && <span className="plaque-year">{activeProject.role}</span>}
              </div>
              <h2 id="project-focus-title">{activeProject.title}</h2>
              <p className="exhibit-subtitle">{activeProject.subtitle}</p>
              <p className="project-focus-description">{activeProject.description}</p>
              <div className="project-focus-tags">
                {activeProject.tech.split(',').map((technology) => (
                  <span key={technology}>{technology.trim()}</span>
                ))}
              </div>
              {activeProject.impact && (
                <p className="project-focus-impact"><strong>Outcome:</strong> {activeProject.impact}</p>
              )}
              <div className="project-details-actions">
                {activeProject.demoUrl && (
                  <a href={activeProject.demoUrl} target="_blank" rel="noreferrer" className="project-details-link">
                    Live artifact
                  </a>
                )}
                {activeProject.repoUrl && (
                  <a href={activeProject.repoUrl} target="_blank" rel="noreferrer" className="project-details-link project-details-link-secondary">
                    Source repository
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="projects-index content" aria-labelledby="project-index-heading">
          <div className="section-header museum-header">
            <span>Archive index</span>
            <h2 id="project-index-heading">Every project, at a glance</h2>
          </div>
          <div className="projects-index-grid">
            {projectItems.map((project, index) => (
              <button
                type="button"
                key={project.title}
                className={`projects-index-item${activeProject.title === project.title ? ' is-active' : ''}`}
                onClick={() => openProjectFromIndex(project)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{project.title}</strong>
                <small>{project.subtitle}</small>
              </button>
            ))}
          </div>
        </section>
      </main>
      <Footer onContactClick={() => setIsContactOpen(true)} onNavigate={onNavigate} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

export default ProjectsPage

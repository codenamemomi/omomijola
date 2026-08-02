import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import ProjectMediaCarousel from './ProjectMediaCarousel.jsx'
import { getProjectImages } from '../utils/projectMedia.js'

function ProjectsSection({ projectItems }) {
  const [activeProject, setActiveProject] = useState(null)
  const [activeWing, setActiveWing] = useState('All')

  const wings = useMemo(() => {
    const unique = []
    projectItems.forEach((item) => {
      if (item.wing && !unique.includes(item.wing)) unique.push(item.wing)
    })
    return ['All', ...unique]
  }, [projectItems])

  const filteredProjects = useMemo(() => {
    if (activeWing === 'All') return projectItems
    return projectItems.filter((item) => item.wing === activeWing)
  }, [projectItems, activeWing])

  const roomGroups = useMemo(() => {
    if (activeWing !== 'All') {
      return [{ wing: activeWing, items: filteredProjects }]
    }

    const groups = []
    const wingOrder = []
    projectItems.forEach((project) => {
      const wing = project.wing || 'Collection'
      if (!wingOrder.includes(wing)) {
        wingOrder.push(wing)
        groups.push({ wing, items: [] })
      }
      groups.find((g) => g.wing === wing).items.push(project)
    })
    return groups
  }, [projectItems, filteredProjects, activeWing])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null)
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

  return (
    <section id="projects" className="section gallery-section">
      <div className="gallery-intro">
        <div className="section-header museum-header">
          <span>Collection</span>
          <h2>Gallery rooms</h2>
          <p className="section-lede">
            One system per room. Browse project views, read the problem and outcome, then open full
            wall text for architecture depth.
          </p>
        </div>
      </div>

      <div className="wing-filters-sticky">
        <div className="wing-filters" role="tablist" aria-label="Collection wings">
          {wings.map((wing) => (
            <button
              key={wing}
              type="button"
              role="tab"
              aria-selected={activeWing === wing}
              className={`wing-filter${activeWing === wing ? ' active' : ''}`}
              onClick={() => setActiveWing(wing)}
            >
              {wing}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-rooms">
        {roomGroups.map((group) => (
          <div key={group.wing} className="gallery-wing">
            {activeWing === 'All' && (
              <div className="wing-divider">
                <span className="wing-divider-label">Wing</span>
                <h3>{group.wing}</h3>
                <div className="wing-divider-rule" />
              </div>
            )}

            {group.items.map((project) => {
              const roomId = project.title.toLowerCase().replace(/\s+/g, '-')
              const mediumPreview = project.tech
                .split(',')
                .map((t) => t.trim())
                .slice(0, 4)
                .join(' · ')
              const images = getProjectImages(project)

              return (
                <article
                  key={project.title}
                  id={`exhibit-${roomId}`}
                  className="gallery-room gallery-room-slim"
                >
                  <div className="gallery-room-media">
                    <ProjectMediaCarousel
                      key={project.title}
                      images={images}
                      title={project.title}
                      className="gallery-room-carousel"
                      showThumbs={images.length > 1}
                      mediaLayout={project.mediaLayout || 'landscape'}
                    />
                    {project.metrics?.length > 0 && (
                      <div className="gallery-vitrine">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="gallery-vitrine-item">
                            <strong>{metric.value}</strong>
                            <span>{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="gallery-room-plaque">
                    <div className="plaque-meta-row">
                      {project.wing && <span className="plaque-wing">{project.wing}</span>}
                      {project.year && <span className="plaque-year">{project.year}</span>}
                      {images.length > 1 && (
                        <span className="plaque-year">{images.length} views</span>
                      )}
                    </div>

                    <h3>{project.title}</h3>
                    <p className="exhibit-subtitle">{project.subtitle}</p>
                    <p className="plaque-medium-line">{mediumPreview}</p>

                    {project.problem && (
                      <div className="case-study-block">
                        <h4>Problem</h4>
                        <p>{project.problem}</p>
                      </div>
                    )}

                    {project.impact && (
                      <div className="case-study-block">
                        <h4>Outcome</h4>
                        <p>{project.impact}</p>
                      </div>
                    )}

                    <div className="exhibit-actions">
                      <button
                        type="button"
                        className="project-card-link"
                        onClick={() => setActiveProject(project)}
                      >
                        Full wall text
                      </button>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-card-link project-card-link-secondary"
                        >
                          Live artifact
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-card-link project-card-link-secondary"
                        >
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        ))}
      </div>

      {activeProject &&
        createPortal(
          <div
            className="project-details-modal"
            onClick={() => setActiveProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            <div
              className="project-details-panel exhibit-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="project-details-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close wall text"
              >
                ×
              </button>
              <div className="project-details-content-grid">
                <div className="project-details-media project-details-media-carousel">
                  <ProjectMediaCarousel
                    key={`modal-${activeProject.title}`}
                    images={getProjectImages(activeProject)}
                    title={activeProject.title}
                    showThumbs
                    mediaLayout={activeProject.mediaLayout || 'landscape'}
                  />
                </div>
                <div className="project-details-info">
                  <span className="project-details-tag">Wall text</span>
                  <h2 id="case-study-title">{activeProject.title}</h2>
                  <p className="project-details-subtitle">{activeProject.subtitle}</p>

                  <dl className="plaque-facts plaque-facts-modal">
                    {activeProject.wing && (
                      <div>
                        <dt>Wing</dt>
                        <dd>{activeProject.wing}</dd>
                      </div>
                    )}
                    <div>
                      <dt>Medium</dt>
                      <dd>{activeProject.tech}</dd>
                    </div>
                    <div>
                      <dt>Role</dt>
                      <dd>{activeProject.role}</dd>
                    </div>
                    {activeProject.year && (
                      <div>
                        <dt>Year</dt>
                        <dd>{activeProject.year}</dd>
                      </div>
                    )}
                  </dl>

                  {activeProject.metrics?.length > 0 && (
                    <div className="case-study-metrics">
                      {activeProject.metrics.map((metric) => (
                        <div key={metric.label} className="case-study-metric">
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeProject.problem && (
                    <div className="case-study-block">
                      <h4>Problem</h4>
                      <p>{activeProject.problem}</p>
                    </div>
                  )}

                  {activeProject.impact && (
                    <div className="case-study-block">
                      <h4>Outcome</h4>
                      <p>{activeProject.impact}</p>
                    </div>
                  )}

                  <p className="project-details-desc">{activeProject.description}</p>

                  <div className="architecture-schematic" aria-label="Architecture mediums">
                    <span className="schematic-label">Schematic</span>
                    <div className="schematic-flow">
                      {activeProject.tech.split(',').map((medium, i, arr) => {
                        const label = medium.trim()
                        return (
                          <span key={label} className="schematic-node-wrap">
                            <span className="schematic-node">{label}</span>
                            {i < arr.length - 1 && (
                              <span className="schematic-arrow" aria-hidden>
                                →
                              </span>
                            )}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  <div className="project-details-highlights">
                    <h4>Architecture notes</h4>
                    <ul className="project-details-bullets">
                      {activeProject.details?.map((bullet) => (
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
                        Live artifact
                      </a>
                    )}
                    {activeProject.repoUrl && (
                      <a
                        href={activeProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-details-link project-details-link-secondary"
                      >
                        Source repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  )
}

export default ProjectsSection

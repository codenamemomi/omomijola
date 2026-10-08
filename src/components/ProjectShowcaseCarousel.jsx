import { useEffect, useState } from 'react'
import { getProjectImages } from '../utils/projectMedia.js'

function ProjectShowcaseCarousel({ project }) {
  const images = getProjectImages(project)
  const [index, setIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const isMobileProject = project.mediaLayout === 'mobile'

  useEffect(() => {
    if (images.length < 2 || isPaused) return undefined

    const timer = window.setTimeout(() => {
      setPreviousIndex(index)
      setIndex((current) => (current + 1) % images.length)
    }, 2500)

    return () => window.clearTimeout(timer)
  }, [images.length, index, isPaused])

  useEffect(() => {
    if (previousIndex === null) return undefined
    const transitionCleanup = window.setTimeout(() => setPreviousIndex(null), 480)
    return () => window.clearTimeout(transitionCleanup)
  }, [previousIndex])

  const goTo = (nextIndex) => {
    if (images.length < 2) return
    setPreviousIndex(index)
    setIndex((nextIndex + images.length) % images.length)
  }

  if (images.length === 0) {
    return <div className="project-focus-media project-focus-media-empty">No preview available</div>
  }

  return (
    <div
      className={`project-focus-media project-showcase${isMobileProject ? ' is-mobile-project' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="project-showcase-stage">
        {isMobileProject && <span className="project-showcase-speaker" aria-hidden="true" />}
        {previousIndex !== null && (
          <img
            src={images[previousIndex]}
            alt=""
            className="project-showcase-image is-leaving"
            aria-hidden="true"
          />
        )}
        <img
          key={`${project.title}-${index}`}
          src={images[index]}
          alt={`${project.title} preview ${index + 1} of ${images.length}`}
          className="project-showcase-image is-entering"
        />
      </div>

      <span className="project-focus-index">{index + 1} / {images.length}</span>

      {images.length > 1 && (
        <div className="project-showcase-controls" aria-label={`${project.title} image controls`}>
          <button type="button" onClick={() => goTo(index - 1)} aria-label="Previous image">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" onClick={() => goTo(index + 1)} aria-label="Next image">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectShowcaseCarousel

import { useState } from 'react'

function ProjectMediaCarousel({
  images = [],
  title = 'Project',
  className = '',
  showThumbs = true,
  mediaLayout = 'landscape',
}) {
  const [index, setIndex] = useState(0)
  const total = images.length
  const currentIndex = total > 0 ? Math.min(index, total - 1) : 0
  const isMobile = mediaLayout === 'mobile'

  if (total === 0) {
    return (
      <div className={`project-media-carousel is-empty ${className}`.trim()}>
        <div className="project-media-stage">
          <div className="project-media-placeholder">No preview</div>
        </div>
      </div>
    )
  }

  const goTo = (next) => {
    if (total <= 1) return
    setIndex(((next % total) + total) % total)
  }

  const current = images[currentIndex]

  return (
    <div
      className={`project-media-carousel ${isMobile ? 'is-mobile-layout' : 'is-landscape-layout'} ${className}`.trim()}
    >
      <div className="project-media-stage">
        <div className="project-media-frame">
          {isMobile && <span className="project-media-notch" aria-hidden />}
          <img
            key={`${title}-${currentIndex}`}
            src={current}
            alt={`${title} — view ${currentIndex + 1} of ${total}`}
            className="project-media-image"
          />
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              className="project-media-nav project-media-prev"
              onClick={(e) => {
                e.stopPropagation()
                goTo(currentIndex - 1)
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="project-media-nav project-media-next"
              onClick={(e) => {
                e.stopPropagation()
                goTo(currentIndex + 1)
              }}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="project-media-counter" aria-live="polite">
              {currentIndex + 1} / {total}
            </div>
          </>
        )}
      </div>

      {total > 1 && showThumbs && (
        <div className="project-media-thumbs" role="tablist" aria-label={`${title} images`}>
          {images.map((src, i) => (
            <button
              key={`${title}-thumb-${i}`}
              type="button"
              role="tab"
              aria-selected={i === currentIndex}
              className={`project-media-thumb${i === currentIndex ? ' is-active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setIndex(i)
              }}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}

      {total > 1 && !showThumbs && (
        <div className="project-media-dots" role="tablist" aria-label={`${title} images`}>
          {images.map((_, i) => (
            <button
              key={`${title}-dot-${i}`}
              type="button"
              role="tab"
              aria-selected={i === currentIndex}
              className={`project-media-dot${i === currentIndex ? ' is-active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setIndex(i)
              }}
              aria-label={`Show image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectMediaCarousel

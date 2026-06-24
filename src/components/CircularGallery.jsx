import { useEffect } from 'react'

function CircularGallery({
  items,
  textColor = '#12131b',
  borderRadius = 0.12,
  fontUrl = '',
  font = '700 18px Inter',
  scrollSpeed = 2,
}) {
  useEffect(() => {
    if (!fontUrl) return undefined
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = fontUrl
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [fontUrl])

  const duplicatedItems = [...items, ...items]
  const animationDuration = Math.max(18, 40 / scrollSpeed)

  return (
    <div className="circular-gallery-shell">
      <div
        className="horizontal-gallery"
        style={{ fontFamily: font, color: textColor, ['--scroll-duration']: `${animationDuration}s` }}
      >
        <div className="horizontal-track">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="horizontal-card"
              style={{ borderRadius: `${borderRadius * 100}%` }}
            >
              <div className="skill-icon" style={{ background: item.color }}>
                {item.icon}
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CircularGallery

import { useEffect, useMemo, useRef, useState } from 'react'

function GooeyNav({
  items = [],
  activeIndex: controlledIndex,
  onChange,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  initialActiveIndex = 0,
  animationTime = 600,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
}) {
  const [internalActiveIndex, setInternalActiveIndex] = useState(controlledIndex ?? initialActiveIndex)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef(null)
  const itemsRef = useRef([])
  const activeIndex = typeof controlledIndex === 'number' ? controlledIndex : internalActiveIndex

  useEffect(() => {
    const updateIndicator = () => {
      const normalizedIndex = items.length
        ? Math.min(Math.max(activeIndex, 0), items.length - 1)
        : 0
      const activeElement = itemsRef.current[normalizedIndex]
      const parentRect = navRef.current?.getBoundingClientRect()

      if (activeElement && parentRect) {
        const itemRect = activeElement.getBoundingClientRect()
        setIndicatorStyle({
          left: `${itemRect.left - parentRect.left}px`,
          width: `${itemRect.width}px`,
        })
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [activeIndex, items])

  const particleList = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, index) => {
        const left = `${(index * particleDistances[0]) % 92}%`
        const top = `${((index * particleDistances[1]) % 72) + 10}%`
        const size = 8 + ((index % 3) * 6)
        return {
          id: index,
          left,
          top,
          size,
          speed: (animationTime + ((index % 3) * timeVariance)) / 1000,
          colorIndex: colors[index % colors.length],
        }
      }),
    [particleCount, particleDistances, animationTime, timeVariance, colors],
  )

  const handleClick = (index) => {
    if (typeof controlledIndex !== 'number') {
      setInternalActiveIndex(index)
    }
    if (onChange) onChange(items[index]?.id ?? items[index]?.href ?? index)
  }

  return (
    <div className="gooey-nav" style={{ '--gooey-animation-time': `${animationTime}ms` }}>
      <div className="gooey-nav-particles">
        {particleList.map((particle) => (
          <span
            key={particle.id}
            className={`gooey-nav-particle color-${particle.colorIndex}`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              borderRadius: `${particleR}%`,
              animationDuration: `${particle.speed}s`,
            }}
          />
        ))}
      </div>

      <div className="gooey-nav-shell" ref={navRef}>
        <div className="gooey-nav-indicator" style={indicatorStyle} />
        {items.map((item, index) => (
          <button
            key={item.id ?? item.label}
            type="button"
            ref={(el) => {
              itemsRef.current[index] = el
            }}
            className={`gooey-nav-link ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GooeyNav

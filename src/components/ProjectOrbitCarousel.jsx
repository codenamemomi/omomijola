import { useEffect, useRef, useState } from 'react'
import { getProjectImages } from '../utils/projectMedia.js'

function ProjectOrbitCarousel({ projects, onSelect }) {
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const rotationRef = useRef(0)
  const pointerRef = useRef({ id: null, x: 0, lastTime: 0 })
  const velocityRef = useRef(0)
  const resumeAtRef = useRef(0)
  const movedRef = useRef(false)

  useEffect(() => {
    let frameId
    let lastFrame = performance.now()

    const tick = (now) => {
      const elapsed = Math.min(now - lastFrame, 40)
      lastFrame = now
      if (!isDragging && now >= resumeAtRef.current) {
        const momentum = velocityRef.current
        const idleSpeed = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.006
        rotationRef.current += (idleSpeed + momentum) * elapsed
        velocityRef.current *= Math.pow(0.92, elapsed / 16)
        if (Math.abs(velocityRef.current) < 0.001) velocityRef.current = 0
        setRotation(rotationRef.current)
      }
      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isDragging])

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    pointerRef.current = { id: event.pointerId, x: event.clientX, lastTime: performance.now() }
    velocityRef.current = 0
    movedRef.current = false
    resumeAtRef.current = Number.POSITIVE_INFINITY
    setIsDragging(true)
  }

  const handlePointerMove = (event) => {
    if (pointerRef.current.id !== event.pointerId) return
    const now = performance.now()
    const deltaX = event.clientX - pointerRef.current.x
    const deltaTime = Math.max(now - pointerRef.current.lastTime, 1)
    if (Math.abs(deltaX) > 3) movedRef.current = true
    rotationRef.current += deltaX * 0.34
    velocityRef.current = (deltaX * 0.34) / deltaTime
    pointerRef.current = { id: event.pointerId, x: event.clientX, lastTime: now }
    setRotation(rotationRef.current)
  }

  const endPointerInteraction = (event) => {
    if (pointerRef.current.id !== event.pointerId) return
    pointerRef.current.id = null
    resumeAtRef.current = performance.now() + 1200
    setIsDragging(false)
  }

  const handleCardClick = (project) => {
    if (!movedRef.current) onSelect(project)
    movedRef.current = false
  }

  const cardStep = projects.length ? 360 / projects.length : 360
  const frontIndex = projects.length
    ? Math.round(-rotation / cardStep) % projects.length
    : 0

  return (
    <div className={`project-orbit${isDragging ? ' is-dragging' : ''}`}>
      <div
        className="project-orbit-stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endPointerInteraction}
        onPointerCancel={endPointerInteraction}
        onPointerLeave={(event) => {
          if (isDragging) endPointerInteraction(event)
        }}
        style={{ '--orbit-rotation': `${rotation}deg` }}
      >
        <div className="project-orbit-ring">
          {projects.map((project, index) => {
            const images = getProjectImages(project)
            const isFront = ((frontIndex + projects.length) % projects.length) === index
            return (
              <button
                key={project.title}
                type="button"
                className={`project-orbit-card${isFront ? ' is-front' : ''}`}
                style={{ '--card-index': index, '--card-step': `${cardStep}deg` }}
                onClick={() => handleCardClick(project)}
                aria-label={`Open ${project.title} case study`}
              >
                <img src={images[0]} alt="" draggable="false" />
                <span className="project-orbit-card-shade" />
                <span className="project-orbit-card-copy">
                  <strong>{project.title}</strong>
                  <small>{project.wing}</small>
                </span>
              </button>
            )
          })}
        </div>
        <div className="project-orbit-axis" aria-hidden="true" />
      </div>
      <p className="project-orbit-hint">Drag to rotate · Select a project to inspect it</p>
    </div>
  )
}

export default ProjectOrbitCarousel

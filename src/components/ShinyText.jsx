import './ShinyText.css'

function ShinyText({
  text,
  speed = 2,
  delay = 0,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  direction = 'left',
  yoyo = false,
  pauseOnHover = false,
  disabled = false,
}) {
  const animationName = disabled ? 'shiny-text-none' : 'shiny-text-glow'
  const animationDirection = direction === 'left' ? 'normal' : 'reverse'
  const hoverProps = {
    className: `shiny-text${pauseOnHover ? ' pause-on-hover' : ''}${disabled ? ' disabled' : ''}`
  }

  return (
    <span
      {...hoverProps}
      style={{
        '--shiny-text-color': color,
        '--shiny-shine-color': shineColor,
        '--shiny-speed': `${speed}s`,
        '--shiny-delay': `${delay}s`,
        '--shiny-spread': `${spread}px`,
        animationName,
        animationDuration: `${speed}s`,
        animationDelay: `${delay}s`,
        animationIterationCount: yoyo ? 'infinite' : '1',
        animationDirection,
        color,
      }}
    >
      {text}
    </span>
  )
}

export default ShinyText

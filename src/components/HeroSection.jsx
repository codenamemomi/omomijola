import ShinyText from './ShinyText'
import { socialLinks } from '../data/portfolio.js'

function HeroSection({ onNavigate, onContactClick }) {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-stage">
        <div className="hero-lights"></div>
        <div className="hero-glow"></div>
        <div className="hero-logo-ring"></div>
      </div>

      <div className="hero-copy">
        <p className="hero-context">protocol_initiated</p>
        <div className="hero-title-wrap">
          <h1>
            <ShinyText
              text="HELLO_I_AM"
              speed={2}
              delay={0}
              color="#28316c"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </h1>
          <h2>
            <ShinyText
              text="Omomijolaoluwa"
              speed={2.4}
              delay={0.25}
              color="#2c3a82"
              shineColor="#ffffff"
              spread={140}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </h2>
        </div>
        <p className="hero-tagline">
          I_AM_A_DEVELOPER. CREATE | BUILD | AUTOMATE
        </p>

        <div className="hero-actions">
          <a href="#projects" onClick={(event) => { event.preventDefault(); onNavigate('projects') }}>
            View projects
          </a>
          <a
            href="#contact"
            className="ghost"
            onClick={(event) => {
              event.preventDefault()
              onContactClick()
            }}
          >
            Contact me
          </a>
        </div>

        <div className="hero-socials">
          {socialLinks.map((link) => {
            const Icon = link.icon
            const isMailto = link.href.startsWith('mailto:')

            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={isMailto ? undefined : '_blank'}
                rel={isMailto ? undefined : 'noreferrer'}
              >
                <Icon />
                <span>{link.label.toUpperCase()}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

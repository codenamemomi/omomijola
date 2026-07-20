import { useEffect, useState } from 'react'
import QuietNav from './QuietNav.jsx'
import profileImage from '../assets/me.jpeg'

function NavBar({ navItems = [], activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  // Show elevated nav chrome early while scrolling (especially useful on mobile)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer if viewport grows back to desktop
  useEffect(() => {
    const media = window.matchMedia('(min-width: 961px)')
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const handleNavigate = (id) => {
    setMenuOpen(false)
    onNavigate(id)
  }

  return (
    <header
      className={`topbar museum-topbar${menuOpen ? ' is-menu-open' : ''}${scrolled ? ' is-scrolled' : ''}`}
    >
      <button
        type="button"
        className="brand brand-with-image brand-button"
        onClick={() => handleNavigate('hero')}
        aria-label="Return to lobby"
      >
        <img
          className="brand-image"
          src={profileImage}
          alt=""
          width={44}
          height={44}
        />
        <div className="brand-text">
          <span>OMOMIJOLAOLUWA</span>
          <small>Systems collection</small>
        </div>
      </button>

      <button
        type="button"
        className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        id="site-navigation"
        className={`quiet-nav-wrapper${menuOpen ? ' is-open' : ''}`}
      >
        <p className="mobile-nav-label">Floor plan</p>
        <QuietNav
          items={navItems}
          activeSection={activeSection}
          onChange={handleNavigate}
        />
      </div>
    </header>
  )
}

export default NavBar

import GooeyNav from './GooeyNav.jsx'
import profileImage from '../assets/me.jpeg'

function NavBar({ navItems = [], activeSection, onNavigate }) {
  const items = navItems.map((item) => ({ ...item, href: `#${item.id}` }))
  const activeIndex = items.findIndex((item) => item.id === activeSection)

  return (
    <header className="topbar gooey-topbar">
      <div className="brand brand-with-image">
        <img
          className="brand-image"
          src={profileImage}
          alt="Omomijolaoluwa profile"
          width={44}
          height={44}
        />
        <div>
          <span>OMOMIJOLAOLUWA</span>
          <small>Backend Engineer</small>
        </div>
      </div>
      <div className="gooey-nav-wrapper">
        <GooeyNav
          items={items}
          particleCount={14}
          particleDistances={[90, 10]}
          particleR={100}
          activeIndex={activeIndex >= 0 ? activeIndex : 0}
          animationTime={600}
          timeVariance={260}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          onChange={(id) => onNavigate(id)}
        />
      </div>
    </header>
  )
}

export default NavBar

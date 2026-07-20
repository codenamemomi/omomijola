import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import CertificatesSection from './components/CertificatesSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import Footer from './components/Footer.jsx'
import {
  navItems,
  experienceItems,
  projectItems,
  certificates,
  skillGroups,
  services,
} from './data/portfolio.js'
import ContactModal from './components/ContactModal.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const navIds = new Set(navItems.map((item) => item.id))
    const sections = Array.from(document.querySelectorAll('section[id]'))

    const revealIfInView = (el) => {
      const rect = el.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 40
      if (inView) el.classList.add('visible')
    }
    sections.forEach(revealIfInView)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('visible')
          if (navIds.has(entry.target.id)) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const target = document.getElementById(id)
    if (!target) return

    // Account for sticky topbar (+ wing filters when scrolling within collection)
    const isNarrow = window.matchMedia('(max-width: 960px)').matches
    const headerOffset = isNarrow ? 76 : 88
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' })
  }

  const openContact = () => setIsContactOpen(true)

  return (
    <div className="page museum-page">
      <div className="page-frame" />
      <NavBar navItems={navItems} activeSection={activeSection} onNavigate={scrollTo} />
      <main>
        <div className="content content-upper">
          <HeroSection onNavigate={scrollTo} onContactClick={openContact} />
          <AboutSection onContactClick={openContact} />
          <ServicesSection
            services={services}
            onContactClick={openContact}
            onNavigate={scrollTo}
          />
          <ExperienceSection experienceItems={experienceItems} />
        </div>

        <div className="gallery-bleed">
          <ProjectsSection projectItems={projectItems} />
        </div>

        <div className="content content-lower">
          <CertificatesSection certificates={certificates} />
          <SkillsSection skillGroups={skillGroups} />
        </div>
      </main>
      <Footer onContactClick={openContact} onNavigate={scrollTo} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ScrollToTop />
    </div>
  )
}

export default App

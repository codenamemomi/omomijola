import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import CertificatesSection from './components/CertificatesSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import { navItems, experienceItems, projectItems, certificates, skills } from './data/portfolio.js'
import ContactModal from './components/ContactModal.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const target = document.getElementById(id)
    if (!target) return

    const headerOffset = 100
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  return (
    <div className="page">
      <div className="page-frame" />
      <NavBar navItems={navItems} activeSection={activeSection} onNavigate={scrollTo} />
      <main className="content">
        <HeroSection onNavigate={scrollTo} onContactClick={() => setIsContactOpen(true)} />
        <AboutSection onContactClick={() => setIsContactOpen(true)} />
        <ExperienceSection experienceItems={experienceItems} />
        <ProjectsSection projectItems={projectItems} />
        <CertificatesSection certificates={certificates} />
        <SkillsSection skills={skills} />
      </main>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

export default App

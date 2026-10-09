import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProofStrip from '../components/ProofStrip'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    requestAnimationFrame(() => {
      if (target === 'top') window.scrollTo(0, 0)
      else document.getElementById(target)?.scrollIntoView()
    })
    navigate('.', { replace: true, state: null })
  }, [location.state, navigate])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

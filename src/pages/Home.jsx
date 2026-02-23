import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProofStrip from '../components/ProofStrip'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/profile'

const navLinks = [
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'About', id: 'about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const goTo = (id) => {
    setMobileOpen(false)
    if (isHome) {
      if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 border-b transition-colors duration-400 ${
        scrolled || mobileOpen ? 'bg-bg/90 backdrop-blur-xl border-border' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-[76px]">
        <button
          onClick={() => goTo('top')}
          className="group flex items-center gap-3 font-mono text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-text-primary"
        >
          <span aria-hidden="true" className="w-2 h-2 bg-accent" />
          <span className="border-b border-accent pb-0.5 group-hover:text-accent transition-colors duration-250">
            {profile.name}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className="text-body-sm font-medium text-text-primary/90 hover:text-accent transition-colors duration-250"
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm font-medium text-text-primary/90 hover:text-accent transition-colors duration-250"
          >
            Resume
          </a>
          <button onClick={() => goTo('contact')} className="btn-primary !py-2.5 !px-5">
            Let&rsquo;s Talk
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-text-primary origin-center" />
          <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-text-primary" />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-text-primary origin-center" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-16 bg-bg z-30"
          >
            <div className="section-container flex flex-col pt-10">
              {navLinks.map((link, i) => (
                <button
                  key={link.id}
                  onClick={() => goTo(link.id)}
                  className="flex items-baseline gap-4 py-5 border-b border-border text-left text-display-md text-text-primary hover:text-accent transition-colors"
                >
                  <span className="font-mono text-label text-accent">0{i + 1}</span>
                  {link.label}
                </button>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline gap-4 py-5 border-b border-border text-display-md text-text-primary hover:text-accent transition-colors"
              >
                <span className="font-mono text-label text-accent">0{navLinks.length + 1}</span>
                Resume
              </a>
              <button onClick={() => goTo('contact')} className="btn-primary mt-10">
                Let&rsquo;s Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

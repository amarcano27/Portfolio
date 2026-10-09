import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'work' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
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
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ease-smooth ${
        scrolled || mobileOpen ? 'bg-bg/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-18">
        <button
          onClick={() => goTo('top')}
          className="text-heading-md font-semibold text-text-primary tracking-tight hover:text-accent transition-colors duration-250"
        >
          adrian<span className="text-accent">.</span>
        </button>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-250 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-400 ease-smooth group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => goTo('contact')}
            className="text-body-sm font-medium text-bg bg-accent hover:bg-accent-light active:scale-[0.98] px-5 py-2 rounded-lg transition-all duration-250"
          >
            Let&rsquo;s Connect
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-text-primary origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-text-primary"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-text-primary origin-center"
          />
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
            <div className="flex flex-col items-center justify-center gap-6 pt-16">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => goTo(link.id)}
                  className="text-display-md font-display text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { ArrowRight } from './Icons'

const ease = [0.16, 1, 0.3, 1]

const reveal = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
})

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent2/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="section-container relative z-10 pt-28 pb-20 md:pt-0 md:pb-0">
        <div className="max-w-3xl">
          <motion.p {...reveal(0.1)} className="text-caption uppercase text-accent tracking-widest mb-6">
            {profile.headline}
          </motion.p>

          <motion.h1
            {...reveal(0.2)}
            className="text-[2.75rem] leading-[1.08] tracking-[-0.02em] sm:text-display-lg md:text-display-xl font-display text-text-primary mb-6"
          >
            Building practical technology around{' '}
            <span className="italic text-gradient">real business problems</span>
          </motion.h1>

          <motion.p
            {...reveal(0.35)}
            className="text-body-lg md:text-[1.25rem] md:leading-[1.6] text-text-secondary max-w-2xl mb-10"
          >
            Computer Science graduate with experience across cybersecurity automation,
            AI-assisted product development, APIs, data, and business operations. I use
            technology to improve workflows, support decisions, and solve practical problems.
          </motion.p>

          <motion.div {...reveal(0.5)} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center gap-2 text-body font-medium text-bg bg-accent hover:bg-accent-light active:scale-[0.98] px-7 py-3.5 rounded-xl transition-all duration-250"
            >
              Let&rsquo;s Connect
              <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="inline-flex items-center gap-2 text-body font-medium text-text-secondary border border-border-light hover:border-accent/40 hover:text-text-primary active:scale-[0.98] px-7 py-3.5 rounded-xl transition-all duration-250"
            >
              View Work
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="text-body-sm text-text-muted mt-10"
          >
            Python · SQL · APIs · Git · AI-Assisted Development · Automation
          </motion.p>
        </div>
      </div>
    </section>
  )
}

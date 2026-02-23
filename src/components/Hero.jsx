import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spotlight gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-caption uppercase text-accent tracking-widest mb-6"
          >
            Full-Stack Developer & Data Engineer
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-display-lg md:text-display-xl font-display mb-6"
          >
            I build products that{' '}
            <span className="italic text-gradient">turn data into decisions</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="text-body-lg md:text-heading-lg font-normal text-text-secondary max-w-2xl mb-10 leading-relaxed"
          >
            From ML-powered analytics platforms to AI-automated restaurant operations
            — I ship production-grade software that solves real problems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-body font-medium text-bg bg-accent hover:bg-accent-light px-7 py-3.5 rounded-xl transition-all duration-250 hover:shadow-glow"
            >
              Reach Out
              <svg
                className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-body font-medium text-text-secondary border border-border hover:border-accent/40 hover:text-text-primary px-7 py-3.5 rounded-xl transition-all duration-250"
            >
              View Projects
            </a>
          </motion.div>

          {/* Credibility line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="text-body-sm text-text-muted mt-10"
          >
            Python · Flutter · PostgreSQL · Scikit-learn · Streamlit · Custom GPTs
          </motion.p>
        </div>
      </div>
    </section>
  )
}

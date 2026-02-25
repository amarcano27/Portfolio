import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Warm spotlight gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent2/[0.03] rounded-full blur-[120px]" />
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
            Developer & Data Engineer
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-display-lg md:text-display-xl font-display text-text-primary mb-6"
          >
            Software that turns{' '}
            <span className="italic text-gradient">raw data into real outcomes</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="text-body-lg md:text-heading-lg font-normal text-text-secondary max-w-2xl mb-10 leading-relaxed"
          >
            ML analytics platforms. Cross-platform mobile apps. AI tools deployed
            in live operations. Three production products and counting.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-body font-medium text-white bg-text-primary hover:bg-text-secondary px-7 py-3.5 rounded-xl transition-all duration-250"
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
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-body font-medium text-text-secondary border border-border-light hover:border-accent/40 hover:text-text-primary px-7 py-3.5 rounded-xl transition-all duration-250"
            >
              See My Work
            </button>
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

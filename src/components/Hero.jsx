import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { ArrowRight } from './Icons'

const ease = [0.16, 1, 0.3, 1]
const reveal = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
})

const glance = [
  { key: 'Now', value: 'Founder & Product Lead', sub: 'Attendly' },
  { key: 'Recent', value: 'Cyber CoE Intern', sub: 'Sabel Systems · 2026' },
  { key: 'Building', value: 'APEX', sub: '35 sportsbooks · 27 API routes' },
  { key: 'Education', value: 'B.A. Computer Science', sub: 'FIU · Cum Laude' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="absolute inset-0 hero-grid" />
      <div aria-hidden="true" className="absolute -bottom-40 right-0 w-[900px] h-[600px] rounded-full bg-[#1B3A6B]/40 blur-[140px]" />
      <div aria-hidden="true" className="absolute top-10 right-1/4 w-[400px] h-[300px] rounded-full bg-accent/[0.06] blur-[120px]" />

      <div className="section-container relative pt-32 pb-20 md:pt-40 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        <div className="lg:col-span-8">
          <motion.p {...reveal(0.05)} className="eyebrow-rule mb-8">
            {profile.headline}
          </motion.p>

          <motion.h1
            {...reveal(0.15)}
            className="text-[2.75rem] leading-[1.02] tracking-[-0.035em] font-semibold sm:text-6xl lg:text-display-xl text-text-primary mb-8"
          >
            I build practical technology around real business problems.
          </motion.h1>

          <motion.p {...reveal(0.3)} className="text-body-lg md:text-[1.25rem] md:leading-[1.6] text-text-secondary max-w-2xl mb-10">
            Computer Science graduate working across{' '}
            <span className="text-accent">cybersecurity automation</span>,{' '}
            <span className="text-accent">AI-assisted product development</span>, APIs, data, and
            business operations &mdash; using technology to improve workflows and support better decisions.
          </motion.p>

          <motion.div {...reveal(0.45)} className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              View My Work
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1" />
            </button>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View Resume
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="lg:col-span-4 border border-accent/40 bg-bg-surface/70 backdrop-blur-sm rounded-lg"
          aria-label="At a glance"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <span className="font-mono text-label uppercase text-text-muted">At a glance</span>
            <span className="flex items-center gap-2 font-mono text-[0.6875rem] text-accent">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-accent" />
              </span>
              Open to roles
            </span>
          </div>
          <dl>
            {glance.map((row) => (
              <div key={row.key} className="grid grid-cols-[88px_1fr] gap-4 px-6 py-4 border-b border-border last:border-b-0">
                <dt className="font-mono text-label uppercase text-accent pt-1">{row.key}</dt>
                <dd>
                  <p className="text-body font-medium text-text-primary">{row.value}</p>
                  <p className="text-body-sm text-text-muted">{row.sub}</p>
                </dd>
              </div>
            ))}
          </dl>
          <p className="px-6 py-3 border-t border-border font-mono text-[0.6875rem] text-text-muted">{profile.location}</p>
        </motion.aside>
      </div>
    </section>
  )
}

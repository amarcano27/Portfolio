import ScrollReveal from './ScrollReveal'
import { profile } from '../data/profile'

const smallLink = 'font-mono text-[0.75rem] uppercase tracking-[0.14em] text-text-muted hover:text-accent transition-colors duration-250'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-60" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#1B3A6B]/35 blur-[140px]" />

      <div className="section-container relative text-center">
        <ScrollReveal>
          <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] leading-none tracking-[-0.04em] font-semibold text-text-primary mb-8">
            Let&rsquo;s Talk.
          </h2>
          <p className="text-body-lg md:text-heading-md md:font-normal text-text-secondary max-w-xl mx-auto mb-12">
            I&rsquo;m interested in early-career opportunities across technical solutions, implementation,
            applied AI, automation, and data-focused roles.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-12">
            <a href={`mailto:${profile.email}`} className="btn-primary">Get in Touch</a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">View Resume</a>
          </div>
          <div className="flex items-center justify-center gap-8">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={smallLink}>LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={smallLink}>GitHub</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

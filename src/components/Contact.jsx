import ScrollReveal from './ScrollReveal'
import { profile } from '../data/profile'
import { LinkedIn, GitHub, Mail, Document } from './Icons'

const primary =
  'inline-flex items-center justify-center gap-3 text-body font-medium text-bg bg-accent hover:bg-accent-light active:scale-[0.98] px-7 py-3.5 rounded-xl transition-all duration-250'
const secondary =
  'inline-flex items-center justify-center gap-3 text-body font-medium text-text-secondary border border-border-light hover:border-accent/40 hover:text-text-primary active:scale-[0.98] px-7 py-3.5 rounded-xl transition-all duration-250'

export default function Contact() {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedIn, external: true },
    profile.email && { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'GitHub', href: profile.github, Icon: GitHub, external: true },
    profile.resume && { label: 'Résumé', href: profile.resume, Icon: Document, external: true },
  ].filter(Boolean)

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-caption uppercase text-accent tracking-widest mb-4">Contact</p>
            <h2 className="text-display-md md:text-display-lg font-display text-text-primary mb-6">
              Let&rsquo;s <span className="italic">connect</span>
            </h2>
            <p className="text-body-lg text-text-secondary mb-12">
              I&rsquo;m interested in early-career opportunities across technical solutions,
              implementation, applied AI, automation, and data-focused roles.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3">
              {links.map(({ label, href, Icon, external }, i) => (
                <a
                  key={label}
                  href={href}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={i === 0 ? primary : secondary}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

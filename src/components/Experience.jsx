import { experience } from '../data/experience'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-b border-border">
      <div className="section-container">
        <ScrollReveal>
          <p className="eyebrow mb-6">Experience</p>
          <h2 className="text-display-md md:text-display-lg text-text-primary mb-14">Where I&rsquo;ve done the work.</h2>
        </ScrollReveal>

        <StaggerContainer stagger={0.12}>
          {experience.map((job) => (
            <StaggerItem key={job.company}>
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 py-10 border-t border-border">
                <div className="lg:col-span-3 font-mono text-[0.75rem] leading-relaxed">
                  <p className="text-accent uppercase tracking-[0.18em] font-bold text-label mb-3">{job.kind}</p>
                  <p className="text-text-secondary">{job.period}</p>
                  <p className="text-text-muted">{job.location}</p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-heading-lg text-text-primary">{job.company}</h3>
                  <p className="text-body-lg font-medium text-accent mb-5">{job.role}</p>
                  <ul className="space-y-3 mb-6 max-w-3xl">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-4 text-body text-text-secondary">
                        <span aria-hidden="true" className="mt-[0.7em] w-3 h-px bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li key={tag} className="chip">{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

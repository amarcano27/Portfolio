import { experience } from '../data/experience'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-caption uppercase text-accent tracking-widest mb-4">Experience</p>
          <h2 className="text-display-md md:text-display-lg font-display text-text-primary mb-16">
            Where I&rsquo;ve <span className="italic">done the work</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="relative border-l border-border ml-1.5 space-y-12 md:space-y-16" stagger={0.12}>
          {experience.map((job) => (
            <StaggerItem key={job.company} className="relative pl-8 md:pl-12 group">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-bg border-2 border-accent transition-colors duration-250 group-hover:bg-accent"
              />
              <article className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8">
                <div className="md:col-span-4">
                  <p className="text-caption uppercase tracking-widest text-text-muted mb-2">{job.kind}</p>
                  <h3 className="text-heading-md text-text-primary">{job.company}</h3>
                  {job.period && <p className="text-body-sm text-text-muted mt-1">{job.period}</p>}
                </div>
                <div className="md:col-span-8">
                  <p className="font-display italic text-heading-lg text-text-primary mb-3">{job.role}</p>
                  <ul className="space-y-2.5 mb-5">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
                        <span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li key={tag} className="text-caption text-text-muted bg-bg-surface border border-border px-3 py-1.5 rounded-md">
                        {tag}
                      </li>
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

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { education } from '../data/profile'
import { careerPath } from '../data/skills'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-border">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <ScrollReveal>
          <p className="eyebrow mb-6">Who I am</p>
          <h2 className="text-display-md md:text-display-lg text-text-primary mb-8">
            Where technology meets real operations.
          </h2>
          <div className="space-y-5 text-body-lg text-text-secondary">
            <p>
              I&rsquo;m a Cum Laude Computer Science graduate interested in applied AI, automation,
              technical solutions, and implementation. My experience spans cybersecurity automation,
              technical product development, business ownership, APIs, and data-driven workflows.
            </p>
            <p>
              I work best where technology meets real operational problems &mdash; automating a security
              workflow, defining a product requirement, analyzing data, or improving a business process.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-mono text-label uppercase text-text-muted mb-5">Education &amp; Certifications</p>
            <ul className="space-y-4">
              {education.map((item) => (
                <li key={item.credential} className="border-l border-accent/50 pl-4">
                  <p className="text-body font-medium text-text-primary">{item.credential}</p>
                  <p className="text-body-sm text-text-muted">
                    {item.school} · {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <div className="lg:pt-2">
          <ScrollReveal>
            <p className="eyebrow mb-6">The path so far</p>
          </ScrollReveal>
          <StaggerContainer className="border-t border-accent" stagger={0.08}>
            {careerPath.map((step, i) => (
              <StaggerItem
                key={step.label}
                className="group grid grid-cols-[48px_1fr_auto] items-baseline gap-4 py-4 border-b border-border hover:border-accent/60 transition-colors duration-250"
              >
                <span className="font-mono text-label text-accent">0{i + 1}</span>
                <span className="text-heading-md text-text-secondary group-hover:text-text-primary transition-colors duration-250">
                  {step.label}
                </span>
                <span className="font-mono text-[0.6875rem] text-text-muted text-right">{step.where}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal>
            <p className="mt-6 text-body font-medium text-accent">Each step added to the last &mdash; none replaced it.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { capabilities } from '../data/skills'

export default function Capabilities() {
  return (
    <section className="py-20 md:py-28 border-b border-border" aria-labelledby="capabilities-title">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-16">
          <ScrollReveal>
            <h2 id="capabilities-title" className="text-display-md text-text-primary">
              I connect the problem to the build.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg text-text-secondary">
              My background spans security automation, product decisions, data, and running a business.
              That range lets me sit between the people who define a problem and the people who build the fix.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="relative grid grid-cols-2 md:grid-cols-5 gap-y-10 md:border-t border-border" stagger={0.08}>
          {capabilities.map((cap) => (
            <StaggerItem key={cap.area} className="relative pt-8 pr-4 border-t border-border md:border-t-0">
              <span aria-hidden="true" className="absolute -top-[5px] left-0 w-[9px] h-[9px] rounded-full bg-accent shadow-glow" />
              <p className="font-mono text-label uppercase text-accent mb-2">{cap.area}</p>
              <p className="text-body font-medium text-text-primary">{cap.title}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

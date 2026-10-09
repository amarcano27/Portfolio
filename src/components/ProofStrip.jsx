import { proofPoints } from '../data/skills'
import { StaggerContainer, StaggerItem } from './ScrollReveal'

export default function ProofStrip() {
  return (
    <section className="py-12 md:py-14 border-y border-border" aria-label="Highlights">
      <StaggerContainer className="section-container grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-12">
        {proofPoints.map((point) => (
          <StaggerItem key={point.title}>
            <p className="text-caption uppercase tracking-widest text-accent mb-2">{point.eyebrow}</p>
            <p className="text-heading-lg font-display text-text-primary mb-1">{point.title}</p>
            <p className="text-body-sm text-text-muted">{point.detail}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}

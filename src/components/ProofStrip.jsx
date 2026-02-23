import { proofPoints } from '../data/skills'
import { StaggerContainer, StaggerItem } from './ScrollReveal'

export default function ProofStrip() {
  return (
    <section className="py-16 border-y border-border">
      <StaggerContainer className="section-container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {proofPoints.map((point) => (
          <StaggerItem key={point.label} className="text-center md:text-left">
            <p className="text-display-md md:text-display-lg font-display text-accent mb-1">
              {point.metric}
            </p>
            <p className="text-heading-md text-text-primary mb-1">{point.label}</p>
            <p className="text-body-sm text-text-muted">{point.detail}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}

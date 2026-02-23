import { skillCategories } from '../data/skills'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-caption uppercase text-accent tracking-widest mb-4">
            Toolkit
          </p>
          <h2 className="text-display-md md:text-display-lg font-display text-text-primary mb-16">
            What I <span className="italic">work with</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          stagger={0.1}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="bg-bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-accent/20 transition-colors duration-400">
                <h3 className="text-heading-md text-text-primary mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-body-sm text-text-secondary bg-bg-elevated border border-border px-3.5 py-2 rounded-lg hover:text-accent hover:border-accent/30 transition-all duration-250 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

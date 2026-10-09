import { skillCategories } from '../data/skills'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { Code, Sparkles, Integration, Shield, Tool } from './Icons'

const icons = { code: Code, sparkles: Sparkles, integration: Integration, shield: Shield, tool: Tool }

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-caption uppercase text-accent tracking-widest mb-4">Toolkit</p>
          <h2 className="text-display-md md:text-display-lg font-display text-text-primary mb-16">
            What I <span className="italic">work with</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="border-t border-border" stagger={0.08}>
          {skillCategories.map((category) => {
            const Icon = icons[category.icon]
            return (
              <StaggerItem
                key={category.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-border"
              >
                <div className="md:col-span-4 flex items-center gap-3">
                  <Icon className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="text-heading-md text-text-primary">{category.title}</h3>
                </div>
                <ul className="md:col-span-8 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-body-sm text-text-secondary bg-bg-surface border border-border px-3.5 py-2 rounded-md hover:text-accent hover:border-accent/30 transition-colors duration-250"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

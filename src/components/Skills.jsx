import { skillCategories } from '../data/skills'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-b border-border">
      <div className="section-container">
        <ScrollReveal>
          <p className="eyebrow mb-6">Toolkit</p>
          <h2 className="text-display-md md:text-display-lg text-text-primary mb-14">What I work with.</h2>
        </ScrollReveal>

        <StaggerContainer className="border-t border-accent" stagger={0.06}>
          {skillCategories.map((category, i) => (
            <StaggerItem
              key={category.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-border"
            >
              <div className="md:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-label text-accent">0{i + 1}</span>
                <h3 className="text-heading-md font-medium text-text-primary">{category.title}</h3>
              </div>
              <ul className="md:col-span-8 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="chip hover:border-accent/50 hover:text-text-primary transition-colors duration-250">
                    {skill}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

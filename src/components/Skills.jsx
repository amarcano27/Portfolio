import { skillCategories } from '../data/skills'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

const iconMap = {
  code: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  server: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  ),
  tool: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L15 9.59m-7.58 2.58L3.59 8.34a1.5 1.5 0 010-2.12l.59-.59a1.5 1.5 0 012.12 0l3.83 3.83m4.83-4.83l2.83 2.83a1.5 1.5 0 010 2.12l-.59.59a1.5 1.5 0 01-2.12 0l-2.83-2.83m0 0L15 9.59m-3.58 3.58L15 9.59" />
    </svg>
  ),
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-caption uppercase text-accent tracking-widest mb-4">
            Toolkit
          </p>
          <h2 className="text-display-md md:text-display-lg font-display text-text-primary mb-4">
            What I <span className="italic">work with</span>
          </h2>
          <p className="text-body-lg text-text-secondary max-w-xl mb-16">
            Focused on the Python and Flutter ecosystems, with deep experience in data pipelines, ML, and production deployment.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          stagger={0.1}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="bg-bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-border-light hover:shadow-soft transition-all duration-400">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-accent">
                    {iconMap[category.icon]}
                  </span>
                  <h3 className="text-heading-md text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-body-sm text-text-secondary bg-bg border border-border px-3.5 py-2 rounded-md hover:text-accent hover:border-accent/30 transition-all duration-250 cursor-default"
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

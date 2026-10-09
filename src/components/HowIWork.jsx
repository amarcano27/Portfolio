import ScrollReveal from './ScrollReveal'

export default function HowIWork() {
  return (
    <section className="py-24 md:py-32 border-b border-border bg-bg-surface/50" aria-labelledby="how-i-work-title">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
        <ScrollReveal>
          <p className="eyebrow mb-6">How I work</p>
          <h2 id="how-i-work-title" className="text-display-md md:text-display-lg text-text-primary">
            AI-assisted.<br />Human-directed.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="lg:pt-12">
          <p className="text-body-lg text-text-secondary mb-6">
            I use AI coding tools like Claude Code and OpenAI Codex to move from idea to working software
            quickly, while I own the requirements, product decisions, implementation review, testing,
            and release.
          </p>
          <p className="text-body-lg font-medium text-accent">
            AI speeds up the build. Judgment decides what gets built.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

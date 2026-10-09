import ScrollReveal from './ScrollReveal'

const focusAreas = ['Applied AI', 'Automation', 'Technical Solutions', 'Implementation', 'Cybersecurity', 'Data']

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <ScrollReveal className="lg:col-span-5">
          <p className="text-caption uppercase text-accent tracking-widest mb-4">About</p>
          <h2 className="text-display-md md:text-display-lg font-display text-text-primary">
            Where technology meets <span className="italic">real operations</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-7 lg:pt-10">
          <div className="space-y-5 text-body-lg text-text-secondary">
            <p>
              I&rsquo;m a Cum Laude Computer Science graduate interested in applied AI, automation,
              technical solutions, and implementation. My experience spans cybersecurity automation,
              technical product development, business ownership, APIs, and data-driven workflows.
            </p>
            <p>
              I work best where technology meets real operational problems &mdash; automating a
              security workflow, defining a product requirement, analyzing data, or improving a
              business process.
            </p>
          </div>

          <ul className="flex flex-wrap gap-2 mt-8" aria-label="Focus areas">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="text-body-sm text-text-secondary bg-bg-surface border border-border px-3.5 py-1.5 rounded-md"
              >
                {area}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}

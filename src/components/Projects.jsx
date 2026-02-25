import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ScrollReveal from './ScrollReveal'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-caption uppercase text-accent tracking-widest mb-4">
            Selected Work
          </p>
          <h2 className="text-display-md md:text-display-lg font-display text-text-primary mb-4">
            Projects that <span className="italic">shipped</span>
          </h2>
          <p className="text-body-lg text-text-secondary max-w-xl mb-16">
            Not prototypes. Not demos. Production software solving real problems for real users.
          </p>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-20 md:space-y-28"
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

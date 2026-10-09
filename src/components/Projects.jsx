import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { ArrowRight } from './Icons'

export default function Projects() {
  const featured = projects.filter((p) => p.tier === 'featured')
  const additional = projects.filter((p) => p.tier === 'additional')

  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-caption uppercase text-accent tracking-widest mb-4">Featured Work</p>
          <h2 className="text-display-md md:text-display-lg font-display text-text-primary mb-4">
            Products, ventures &amp; <span className="italic">automation</span>
          </h2>
          <p className="text-body-lg text-text-secondary max-w-xl mb-16">
            What I&rsquo;ve built, what I&rsquo;m building, and the role I played in each.
          </p>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-20 md:space-y-28"
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        <ScrollReveal className="mt-24 md:mt-32 mb-8">
          <h3 className="text-heading-lg font-display text-text-primary">Additional projects</h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
          {additional.map((project) => (
            <StaggerItem key={project.id}>
              <Link
                to={`/project/${project.id}`}
                className="group flex h-full flex-col bg-bg-surface border border-border rounded-xl p-6 md:p-8 hover:-translate-y-1 hover:border-border-light hover:shadow-card-hover active:translate-y-0 transition-all duration-400 ease-smooth"
              >
                <p className="text-caption uppercase tracking-widest text-accent mb-3">{project.type}</p>
                <h4 className="text-heading-lg font-display text-text-primary mb-2 group-hover:text-accent transition-colors duration-250">
                  {project.title}
                </h4>
                <p className="text-body text-text-secondary mb-6 flex-1">{project.tagline}</p>
                <div className="flex items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <li key={tech} className="text-caption text-text-muted bg-bg border border-border px-2.5 py-1 rounded-md">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ArrowRight className="w-4 h-4 shrink-0 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-250" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

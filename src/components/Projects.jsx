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
    <section id="work" className="py-24 md:py-32 border-b border-border">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6 pb-8 mb-20 md:mb-24 border-b border-border">
            <h2 className="text-display-md md:text-display-lg text-text-primary">Featured Work</h2>
            <p className="font-mono text-label uppercase text-text-muted">
              0{featured.length} featured · 0{additional.length} more
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-28 md:space-y-36"
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        <ScrollReveal className="mt-28 md:mt-36 mb-6">
          <h3 className="text-heading-lg text-text-primary">More of my work</h3>
        </ScrollReveal>

        <StaggerContainer className="border-t border-border" stagger={0.08}>
          {additional.map((project) => (
            <StaggerItem key={project.id}>
              <Link
                to={`/project/${project.id}`}
                className="group grid grid-cols-[1fr_auto] md:grid-cols-12 items-center gap-4 md:gap-8 py-6 border-b border-border hover:bg-bg-surface/60 transition-colors duration-250 md:px-4 md:-mx-4"
              >
                <span className="md:col-span-4 text-heading-md font-medium text-text-primary group-hover:text-accent transition-colors duration-250">
                  {project.title}
                </span>
                <span className="hidden md:block md:col-span-6 text-body-sm text-text-secondary">{project.tagline}</span>
                <span className="md:col-span-2 flex items-center justify-end gap-3 font-mono text-[0.6875rem] uppercase tracking-wider text-text-muted">
                  <span className="hidden sm:inline">{project.categories}</span>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-250" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

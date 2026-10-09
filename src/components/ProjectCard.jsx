import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectVisual from './ProjectVisual'
import { ArrowRight, External } from './Icons'

const linkClass =
  'group/link inline-flex items-center gap-2 font-mono text-[0.75rem] font-bold uppercase tracking-[0.14em] text-text-primary border-b border-text-primary/40 pb-1 hover:text-accent hover:border-accent transition-colors duration-250'

export default function ProjectCard({ project, index }) {
  const isReversed = index % 2 !== 0
  const href = `/project/${project.id}`

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      <Link
        to={href}
        tabIndex={-1}
        aria-hidden="true"
        className={`block rounded-lg transition-all duration-400 ease-smooth group-hover:-translate-y-1 group-hover:shadow-card-hover ${isReversed ? 'lg:order-2' : ''}`}
      >
        {project.image ? (
          <div className="overflow-hidden rounded-lg border border-border-light bg-bg-surface">
            <img
              src={project.image}
              alt=""
              loading="lazy"
              className="w-full h-auto transition-transform duration-600 ease-smooth group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <ProjectVisual project={project} />
        )}
      </Link>

      <div className={isReversed ? 'lg:order-1' : ''}>
        <p className="eyebrow mb-5">{project.categories}</p>
        <h3 className="text-[2.5rem] md:text-[3.5rem] leading-none tracking-[-0.03em] font-semibold text-text-primary mb-3">
          {project.title}
        </h3>
        <p className="text-heading-md font-medium text-accent mb-5">{project.type}</p>
        <p className="text-body-lg text-text-secondary mb-6">{project.tagline}</p>
        <p className="text-body-sm text-text-secondary mb-8">
          <span className="font-semibold text-accent">My Role: </span>
          {project.role}
          {project.focus && <span className="text-text-muted"> · {project.focus.join(' · ')}</span>}
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link to={href} className={linkClass}>
            View case study
            <span className="sr-only">: {project.title}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover/link:translate-x-1" />
          </Link>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !px-4">
              Try it <External className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

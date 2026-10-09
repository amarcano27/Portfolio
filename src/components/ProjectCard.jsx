import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectVisual from './ProjectVisual'
import { ArrowRight, External, GitHub } from './Icons'

export default function ProjectCard({ project, index }) {
  const isReversed = index % 2 !== 0
  const href = `/project/${project.id}`

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
    >
      <Link
        to={href}
        tabIndex={-1}
        aria-hidden="true"
        className={`block rounded-xl shadow-card group-hover:shadow-card-hover group-hover:-translate-y-1 transition-all duration-400 ease-smooth ${isReversed ? 'lg:order-2' : ''}`}
      >
        {project.image ? (
          <div className="overflow-hidden rounded-xl bg-bg-surface border border-border">
            <img
              src={project.image}
              alt=""
              className="w-full h-auto object-cover transition-transform duration-600 ease-smooth group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        ) : (
          <ProjectVisual project={project} />
        )}
      </Link>

      <div className={isReversed ? 'lg:order-1' : ''}>
        <p className="text-caption uppercase text-accent tracking-widest mb-3">{project.type}</p>
        <h3 className="text-display-md font-display text-text-primary mb-2">{project.title}</h3>
        <p className="text-body-sm font-medium text-text-primary mb-4">{project.role}</p>
        <p className="text-body text-text-secondary mb-6">{project.tagline}</p>

        <ul className="flex flex-wrap gap-2 mb-6">
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech} className="text-caption text-text-muted bg-bg-surface border border-border px-3 py-1.5 rounded-md">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-body-sm font-medium text-accent hover:text-accent-dark transition-colors duration-250 group/link"
          >
            Read case study
            <span className="sr-only">: {project.title}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover/link:translate-x-1" />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-250"
            >
              <GitHub className="w-4 h-4" />
              Source
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-250"
            >
              <External className="w-4 h-4" />
              Try it
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  const isReversed = index % 2 !== 0

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
    >
      {/* Image */}
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        {project.image ? (
          <Link to={`/project/${project.id}`} className="block">
            <div className="relative overflow-hidden rounded-xl bg-bg-surface border border-border shadow-card group-hover:shadow-card-hover transition-shadow duration-400">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-cover transition-transform duration-600 ease-smooth group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          </Link>
        ) : (
          <Link to={`/project/${project.id}`} className="block">
            <div className="relative overflow-hidden rounded-xl bg-bg-surface border border-border aspect-video flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-shadow duration-400">
              <div className="text-center p-8">
                <p className="text-display-md font-display text-accent mb-2">{project.title[0]}</p>
                <p className="text-body-sm text-text-muted">{project.type}</p>
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Content */}
      <div className={`${isReversed ? 'lg:order-1' : ''}`}>
        <p className="text-caption uppercase text-accent tracking-widest mb-3">
          {project.type}
        </p>
        <h3 className="text-heading-lg md:text-display-md font-display text-text-primary mb-3">
          {project.title}
        </h3>
        <p className="text-body text-text-secondary mb-6 leading-relaxed">
          {project.tagline}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-caption text-text-muted bg-bg-surface border border-border px-3 py-1.5 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-body-sm font-medium text-accent hover:text-accent-dark transition-colors duration-250 group/link"
          >
            Read case study
            <svg
              className="w-4 h-4 transition-transform duration-250 group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-text-muted hover:text-text-secondary transition-colors duration-250"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-text-muted hover:text-text-secondary transition-colors duration-250"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Try it
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

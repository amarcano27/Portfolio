import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

const ease = [0.16, 1, 0.3, 1]

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-display-md font-display text-text-primary mb-4">
              Project not found
            </h1>
            <Link
              to="/"
              className="text-body text-accent hover:text-accent-light transition-colors"
            >
              &larr; Back home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="section-container max-w-4xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-body-sm text-text-muted hover:text-accent transition-colors duration-250 mb-12"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-caption uppercase text-accent tracking-widest mb-4">
              {project.type}
            </p>
            <h1 className="text-display-md md:text-display-lg font-display text-text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl leading-relaxed">
              {project.tagline}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-caption text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg">
                {project.role}
              </span>
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-caption text-text-muted bg-bg-elevated border border-border px-3 py-1.5 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Hero image */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="mb-16"
            >
              <div className="overflow-hidden rounded-xl border border-border">
                <img
                  src={project.image}
                  alt={`${project.title} overview`}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          )}

          {/* Problem */}
          <ScrollReveal className="mb-12">
            <h2 className="text-heading-lg text-text-primary mb-4">The Problem</h2>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </ScrollReveal>

          {/* Approach */}
          <ScrollReveal className="mb-12">
            <h2 className="text-heading-lg text-text-primary mb-4">Approach</h2>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              {project.approach}
            </p>
          </ScrollReveal>

          {/* Features */}
          {project.features && (
            <ScrollReveal className="mb-12">
              <h2 className="text-heading-lg text-text-primary mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-body text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          )}

          {/* Results */}
          {project.results && (
            <ScrollReveal className="mb-12">
              <h2 className="text-heading-lg text-text-primary mb-4">Results</h2>
              <div className="bg-bg-surface border border-border rounded-xl p-6 md:p-8">
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-body text-text-secondary">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}

          {/* Gallery */}
          {project.images && project.images.length > 1 && (
            <ScrollReveal className="mb-12">
              <h2 className="text-heading-lg text-text-primary mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-border"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* What I learned */}
          {project.learned && (
            <ScrollReveal className="mb-16">
              <h2 className="text-heading-lg text-text-primary mb-4">What I Learned</h2>
              <blockquote className="border-l-2 border-accent pl-6">
                <p className="text-body-lg text-text-secondary italic leading-relaxed">
                  {project.learned}
                </p>
              </blockquote>
            </ScrollReveal>
          )}

          {/* Links */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body font-medium text-text-secondary border border-border hover:border-accent/40 hover:text-text-primary px-6 py-3 rounded-xl transition-all duration-250"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body font-medium text-bg bg-accent hover:bg-accent-light px-6 py-3 rounded-xl transition-all duration-250 hover:shadow-glow"
                >
                  Try It Live
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-body font-medium text-text-muted hover:text-text-secondary px-6 py-3 rounded-xl transition-colors duration-250"
              >
                &larr; Back to all projects
              </Link>
            </div>
          </ScrollReveal>
        </article>
      </main>
      <Footer />
    </>
  )
}

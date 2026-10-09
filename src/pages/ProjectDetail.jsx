import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import ProjectVisual from '../components/ProjectVisual'
import { ArrowLeft, ArrowRight, External, GitHub, Document } from '../components/Icons'

const ease = [0.16, 1, 0.3, 1]

function Section({ title, children }) {
  return (
    <ScrollReveal className="mb-14">
      <h2 className="text-heading-lg font-display text-text-primary mb-4">{title}</h2>
      {children}
    </ScrollReveal>
  )
}

function Bullets({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
          <span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  const project = projects[index]
  const nextProject = projects[(index + 1) % projects.length]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) document.title = `${project.title} — Adrian Marcano`
    return () => { document.title = 'Adrian Marcano | Applied AI, Automation & Technical Solutions' }
  }, [project])

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-display-md font-display text-text-primary mb-4">Project not found</h1>
            <Link to="/" className="text-body text-accent hover:text-accent-light transition-colors">
              &larr; Back home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const links = [
    project.caseStudyUrl && { label: 'Full case study', href: project.caseStudyUrl, Icon: Document },
    project.link && { label: 'Try it live', href: project.link, Icon: External },
    project.github && { label: 'View source', href: project.github, Icon: GitHub },
  ].filter(Boolean)

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <article className="section-container max-w-narrow mx-auto">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}>
            <Link
              to="/"
              state={{ scrollTo: 'work' }}
              className="inline-flex items-center gap-2 text-body-sm text-text-muted hover:text-accent transition-colors duration-250 mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              All work
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-caption uppercase text-accent tracking-widest mb-4">{project.type}</p>
            <h1 className="text-display-md md:text-display-lg font-display text-text-primary mb-4">{project.title}</h1>
            <p className="text-body-lg text-text-secondary">{project.tagline}</p>

            <ul className="flex flex-wrap gap-2 mt-6">
              <li className="text-caption text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-md">
                {project.role}
              </li>
              {project.status && (
                <li className="text-caption text-text-primary bg-bg-elevated border border-border px-3 py-1.5 rounded-md">
                  {project.status}
                </li>
              )}
              {project.timeframe && (
                <li className="text-caption text-text-primary bg-bg-elevated border border-border px-3 py-1.5 rounded-md">
                  {project.timeframe}
                </li>
              )}
              {project.stack.map((tech) => (
                <li key={tech} className="text-caption text-text-muted bg-bg-surface border border-border px-3 py-1.5 rounded-md">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mb-16"
          >
            {project.image ? (
              <div className="overflow-hidden rounded-xl border border-border shadow-soft">
                <img src={project.image} alt={`${project.title} overview`} className="w-full h-auto" />
              </div>
            ) : (
              <div className="shadow-soft rounded-xl">
                <ProjectVisual project={project} />
              </div>
            )}
          </motion.div>

          {project.myRole && (
            <Section title="My Role">
              <div className="bg-bg-surface border border-border border-l-2 border-l-accent rounded-xl p-6 md:p-8">
                <p className="text-body-lg text-text-secondary">{project.myRole}</p>
              </div>
            </Section>
          )}

          {project.problem && (
            <Section title="The Problem">
              <p className="text-body-lg text-text-secondary">{project.problem}</p>
            </Section>
          )}

          {project.approach && (
            <Section title="Approach">
              <p className="text-body-lg text-text-secondary">{project.approach}</p>
            </Section>
          )}

          {project.features && (
            <Section title="What It Does">
              <Bullets items={project.features} />
            </Section>
          )}

          {project.results && (
            <Section title="By the Numbers">
              <div className="bg-bg-surface border border-border rounded-xl p-6 md:p-8">
                <Bullets items={project.results} />
              </div>
            </Section>
          )}

          {project.images?.length > 1 && (
            <Section title="Gallery">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <div key={img} className="overflow-hidden rounded-xl border border-border shadow-card">
                    <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto" loading="lazy" />
                  </div>
                ))}
              </div>
            </Section>
          )}

          {project.learned && (
            <Section title="What I Learned">
              <blockquote className="border-l-2 border-accent pl-6">
                <p className="text-heading-md font-display italic text-text-secondary">{project.learned}</p>
              </blockquote>
            </Section>
          )}

          {project.note && (
            <ScrollReveal className="mb-14">
              <p className="text-body-sm text-text-muted">{project.note}</p>
            </ScrollReveal>
          )}

          {links.length > 0 && (
            <ScrollReveal className="mb-16">
              <div className="flex flex-wrap gap-3">
                {links.map(({ label, href, Icon }, i) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      i === 0
                        ? 'inline-flex items-center gap-2 text-body font-medium text-bg bg-accent hover:bg-accent-light active:scale-[0.98] px-6 py-3 rounded-xl transition-all duration-250'
                        : 'inline-flex items-center gap-2 text-body font-medium text-text-secondary border border-border-light hover:border-accent/40 hover:text-text-primary active:scale-[0.98] px-6 py-3 rounded-xl transition-all duration-250'
                    }
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          )}

          {nextProject.id !== project.id && (
            <ScrollReveal>
              <div className="border-t border-border pt-12">
                <p className="text-caption uppercase text-text-muted tracking-widest mb-3">Next</p>
                <Link to={`/project/${nextProject.id}`} className="group inline-flex items-center gap-3">
                  <span className="text-heading-lg md:text-display-md font-display text-text-primary group-hover:text-accent transition-colors duration-250">
                    {nextProject.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-250" />
                </Link>
              </div>
            </ScrollReveal>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}

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

function Section({ n, title, children }) {
  return (
    <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 py-12 border-t border-border">
      <div className="lg:col-span-3 flex items-baseline gap-4">
        <span className="font-mono text-label text-accent">{String(n).padStart(2, '0')}</span>
        <h2 className="font-mono text-label uppercase text-text-primary">{title}</h2>
      </div>
      <div className="lg:col-span-9 max-w-3xl">{children}</div>
    </ScrollReveal>
  )
}

function Bullets({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-body-lg text-text-secondary">
          <span aria-hidden="true" className="mt-[0.8em] w-3 h-px bg-accent shrink-0" />
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
            <h1 className="text-display-md text-text-primary mb-6">Project not found</h1>
            <Link to="/" state={{ scrollTo: 'work' }} className="btn-secondary">Back to work</Link>
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

  const facts = [
    { k: 'Role', v: project.role },
    project.timeframe && { k: 'Timeframe', v: project.timeframe },
    project.status && { k: 'Status', v: project.status },
  ].filter(Boolean)

  const sections = [
    project.myRole && { title: 'My Role', body: <p className="text-body-lg text-text-primary">{project.myRole}</p> },
    project.problem && { title: 'The Problem', body: <p className="text-body-lg text-text-secondary">{project.problem}</p> },
    project.approach && { title: 'Approach', body: <p className="text-body-lg text-text-secondary">{project.approach}</p> },
    project.features && { title: 'What It Does', body: <Bullets items={project.features} /> },
    project.results && { title: 'By the Numbers', body: <Bullets items={project.results} /> },
    project.images?.length > 1 && {
      title: 'Gallery',
      body: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((img, i) => (
            <div key={img} className="overflow-hidden rounded-lg border border-border-light">
              <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      ),
    },
    project.learned && {
      title: 'What I Learned',
      body: <p className="text-heading-lg font-medium text-text-primary">&ldquo;{project.learned}&rdquo;</p>,
    },
  ].filter(Boolean)

  return (
    <>
      <Navbar />
      <main>
        <header className="relative overflow-hidden border-b border-border">
          <div aria-hidden="true" className="absolute inset-0 hero-grid" />
          <div aria-hidden="true" className="absolute -bottom-40 right-0 w-[800px] h-[500px] rounded-full bg-[#1B3A6B]/35 blur-[140px]" />

          <div className="section-container relative pt-28 md:pt-36 pb-16">
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}>
              <Link
                to="/"
                state={{ scrollTo: 'work' }}
                className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-text-muted hover:text-accent transition-colors duration-250 mb-12"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                All work
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.1 }}
                className="lg:col-span-8"
              >
                <p className="eyebrow-rule mb-6">{project.categories}</p>
                <h1 className="text-[3rem] md:text-[4.5rem] leading-none tracking-[-0.035em] font-semibold text-text-primary mb-4">
                  {project.title}
                </h1>
                <p className="text-heading-md font-medium text-accent mb-6">{project.type}</p>
                <p className="text-body-lg md:text-[1.25rem] md:leading-[1.6] text-text-secondary max-w-2xl">{project.tagline}</p>
              </motion.div>

              <motion.dl
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.25 }}
                className="lg:col-span-4 border-t border-accent"
              >
                {facts.map((f) => (
                  <div key={f.k} className="grid grid-cols-[100px_1fr] gap-4 py-3 border-b border-border">
                    <dt className="font-mono text-label uppercase text-text-muted pt-0.5">{f.k}</dt>
                    <dd className="text-body-sm text-text-primary">{f.v}</dd>
                  </div>
                ))}
              </motion.dl>
            </div>
          </div>
        </header>

        <div className="section-container py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mb-16"
          >
            {project.image ? (
              <div className="overflow-hidden rounded-lg border border-border-light shadow-soft max-w-5xl">
                <img src={project.image} alt={`${project.title} overview`} className="w-full h-auto" />
              </div>
            ) : (
              <div className="shadow-soft max-w-5xl">
                <ProjectVisual project={project} />
              </div>
            )}
          </motion.div>

          <ScrollReveal className="flex flex-wrap gap-2 mb-12">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">{tech}</span>
            ))}
          </ScrollReveal>

          {sections.map((s, i) => (
            <Section key={s.title} n={i + 1} title={s.title}>{s.body}</Section>
          ))}

          {(project.note || links.length > 0) && (
            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-t border-border">
              <div className="lg:col-start-4 lg:col-span-9">
                {project.note && <p className="text-body-sm text-text-muted mb-6">{project.note}</p>}
                {links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {links.map(({ label, href, Icon }, i) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={i === 0 ? 'btn-primary' : 'btn-secondary'}>
                        <Icon className="w-3.5 h-3.5" />
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          {nextProject.id !== project.id && (
            <ScrollReveal>
              <Link
                to={`/project/${nextProject.id}`}
                className="group flex flex-wrap items-end justify-between gap-6 border-t border-accent pt-10 mt-6"
              >
                <div>
                  <p className="font-mono text-label uppercase text-text-muted mb-3">Next project</p>
                  <p className="text-[2.5rem] md:text-display-lg leading-none tracking-[-0.03em] font-semibold text-text-primary group-hover:text-accent transition-colors duration-250">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="w-8 h-8 text-text-muted group-hover:text-accent group-hover:translate-x-2 transition-all duration-250" />
              </Link>
            </ScrollReveal>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

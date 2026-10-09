import { profile } from '../data/profile'

const linkClass = 'text-body-sm text-text-secondary hover:text-accent transition-colors duration-250'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="section-container flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-heading-md font-medium text-text-primary">{profile.name}</p>
          <p className="font-mono text-label uppercase text-accent mt-1">{profile.headline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={linkClass}>Resume</a>
          <a href={`mailto:${profile.email}`} className={linkClass}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a>
        </div>
      </div>
    </footer>
  )
}

import { profile } from '../data/profile'

const linkClass = 'text-body-sm text-text-muted hover:text-accent transition-colors duration-250'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-body-sm text-text-muted text-center sm:text-left">
          &copy; {new Date().getFullYear()} {profile.name} · {profile.headline}
        </p>
        <div className="flex items-center gap-6">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a>
          {profile.email && <a href={`mailto:${profile.email}`} className={linkClass}>Email</a>}
        </div>
      </div>
    </footer>
  )
}

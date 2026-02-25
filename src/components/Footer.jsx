export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-body-sm text-text-muted">
          &copy; {new Date().getFullYear()} Adrian Marcano
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/amarcano27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm text-text-muted hover:text-accent transition-colors duration-250"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adrian-marcano-16a566189/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm text-text-muted hover:text-accent transition-colors duration-250"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

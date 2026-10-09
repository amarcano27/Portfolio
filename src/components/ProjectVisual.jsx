export default function ProjectVisual({ project }) {
  const { visual } = project

  return (
    <div className="relative overflow-hidden rounded-lg border border-border-light bg-bg-surface">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated/60">
        <span className="w-2 h-2 rounded-full bg-border-light" />
        <span className="w-2 h-2 rounded-full bg-border-light" />
        <span className="w-2 h-2 rounded-full bg-border-light" />
        <span className="ml-3 font-mono text-[0.6875rem] text-text-muted truncate">
          {project.id}
        </span>
        {project.status && (
          <span className="ml-auto font-mono text-[0.6875rem] text-accent whitespace-nowrap">● {project.status}</span>
        )}
      </div>

      <div className="relative p-6 md:p-10 min-h-[240px] md:min-h-[300px] flex flex-col justify-between gap-8">
        <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-70" />
        <div aria-hidden="true" className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/[0.08] blur-3xl" />

        <div className="relative">
          <p className="font-mono text-label uppercase text-text-muted mb-3">{project.type}</p>
          <p className="text-display-md md:text-display-lg text-text-primary">{project.title}</p>
        </div>

        {visual?.kind === 'stats' && (
          <dl className="relative grid grid-cols-2 sm:grid-cols-4 border-t border-border">
            {visual.items.map((item) => (
              <div key={item.label} className="flex flex-col-reverse pt-4 pr-3">
                <dt className="font-mono text-[0.6875rem] uppercase tracking-wider text-text-muted">{item.label}</dt>
                <dd className="text-heading-lg text-accent">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {visual?.kind === 'list' && (
          <ul className="relative flex flex-wrap gap-2">
            {visual.items.map((item) => (
              <li key={item} className="font-mono text-[0.75rem] text-text-primary border border-accent/30 bg-bg/60 px-3 py-1.5 rounded-sm">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

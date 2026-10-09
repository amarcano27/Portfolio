export default function ProjectVisual({ project }) {
  const { visual } = project

  return (
    <div className="relative overflow-hidden rounded-xl bg-bg-surface border border-border min-h-[260px] md:min-h-0 md:aspect-[16/10] p-6 md:p-10 flex flex-col justify-between gap-6">
      <div aria-hidden="true" className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/[0.08] blur-3xl" />

      <div className="relative flex items-center justify-between gap-4">
        <span className="text-caption uppercase tracking-widest text-text-muted">{project.type}</span>
        {project.status && (
          <span className="text-caption text-accent whitespace-nowrap">{project.status}</span>
        )}
      </div>

      <p className="relative font-display italic text-display-md md:text-display-lg text-text-primary">
        {project.title}
      </p>

      {visual?.kind === 'stats' && (
        <dl className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border pt-5">
          {visual.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse">
              <dt className="text-caption text-text-muted">{item.label}</dt>
              <dd className="font-display text-heading-lg text-accent">{item.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {visual?.kind === 'list' && (
        <ul className="relative flex flex-wrap gap-2 border-t border-border pt-5">
          {visual.items.map((item) => (
            <li
              key={item}
              className="text-body-sm text-text-secondary bg-bg border border-border px-3 py-1.5 rounded-md"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

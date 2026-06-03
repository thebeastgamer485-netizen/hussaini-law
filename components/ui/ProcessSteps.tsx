export type ProcessStep = { title: string; description: string }

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <li
          key={i}
          className="relative bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-7 card-hover"
        >
          <div className="font-heading text-5xl text-brand-gold/40 mb-4 leading-none">
            {String(i + 1).padStart(2, '0')}
          </div>
          <h3 className="font-heading text-headline-md text-on-surface mb-2">{step.title}</h3>
          <p className="text-body-md text-on-surface-variant">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}

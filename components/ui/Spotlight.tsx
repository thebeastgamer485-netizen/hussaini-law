export type SpotlightData = { quote: string; author?: string; stars?: number }

export function Spotlight({ data }: { data: SpotlightData }) {
  return (
    <figure className="mt-10 border-l-4 border-brand-gold bg-surface-container-low rounded-r-xl p-6 md:p-8 max-w-3xl">
      {data.stars ? (
        <div className="flex gap-0.5 text-brand-gold mb-3" aria-label={`${data.stars} out of 5 stars`}>
          {Array.from({ length: data.stars }).map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden="true"
            >
              star
            </span>
          ))}
        </div>
      ) : null}
      <blockquote className="font-heading text-lg md:text-xl text-on-surface italic leading-relaxed">
        “{data.quote}”
      </blockquote>
      {data.author && (
        <figcaption className="mt-4 text-label-lg text-on-surface-variant">— {data.author}</figcaption>
      )}
    </figure>
  )
}

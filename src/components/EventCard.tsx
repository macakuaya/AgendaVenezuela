import type { EventItem } from '../types'
import { formatEventDate } from '../lib/date'
import { useInterested } from '../hooks/useInterested'
import { StarIcon } from './Icons'

interface Props {
  event: EventItem
}

export default function EventCard({ event }: Props) {
  const { isInterested, toggle } = useInterested()
  const active = isInterested(event.id)

  // Resolve image path against the Vite base so it works on GitHub Pages.
  const imgSrc = event.image.startsWith('http')
    ? event.image
    : `${import.meta.env.BASE_URL}${event.image.replace(/^\//, '')}`

  // Meta line: "<fecha> · <lugar> · <ciudad>", omitting whatever is missing.
  const meta = [
    formatEventDate(event.startDate, event.endDate, event.allDay),
    event.venue || event.address,
    event.city,
  ]
    .filter(Boolean)
    .join(' · ')

  const content = (
    <>
      <div className="card__media">
        <img src={imgSrc} alt={event.name} loading="lazy" />
      </div>
      <div className="card__body">
        <h2 className="card__title">{event.name}</h2>
        <p className="card__meta">{meta}</p>
        {event.beneficiary && (
          <p className="card__benef">A beneficio de {event.beneficiary}</p>
        )}
      </div>
    </>
  )

  return (
    <article className="card">
      {event.url ? (
        <a
          className="card__link"
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <div className="card__link card__link--static">{content}</div>
      )}

      <button
        type="button"
        className="card__star"
        aria-pressed={active}
        aria-label={active ? 'Quitar de guardados' : 'Guardar evento'}
        title={active ? 'Guardado' : 'Guardar'}
        onClick={() => toggle(event.id)}
      >
        <StarIcon className="star" filled={active} />
      </button>
    </article>
  )
}

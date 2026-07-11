import { LOCALE } from '../config'

const weekday = new Intl.DateTimeFormat(LOCALE, { weekday: 'short' })
const dayMonth = new Intl.DateTimeFormat(LOCALE, { day: 'numeric', month: 'short' })
const time = new Intl.DateTimeFormat(LOCALE, { hour: 'numeric', minute: '2-digit' })

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Date-only strings ("2026-07-10") are parsed as UTC by the Date constructor,
// which can shift to the previous day in negative-offset timezones (e.g. UTC-4).
// Appending a local time forces local-midnight parsing so the day is correct.
export function parseDate(iso: string): Date {
  return new Date(iso.includes('T') ? iso : `${iso}T00:00:00`)
}

/** True if the event's last day is before today (local). */
export function isPastEvent(startISO: string, endISO?: string): boolean {
  const end = parseDate(endISO || startISO)
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate())
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return endDay < today
}

/** True if today (local) falls within the event's date range. */
export function isTodayEvent(startISO: string, endISO?: string): boolean {
  const start = parseDate(startISO)
  const end = parseDate(endISO || startISO)
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate())
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate())
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return startDay <= today && today <= endDay
}

/**
 * Formats an event's date range in Spanish, e.g.:
 *  - Single day:        "Jue, 26 ene · 14:00"
 *  - Single day allDay: "Jue, 26 ene"
 *  - Same-day range:    "Vie, 17 jul · 15:00–20:00"
 *  - Multi-day range:   "Jue, 26 ene – Vie, 27 ene"
 */
export function formatEventDate(startISO: string, endISO?: string, allDay?: boolean): string {
  const start = parseDate(startISO)
  const startLabel = `${cap(weekday.format(start))}, ${dayMonth.format(start)}`

  if (!endISO) {
    return allDay ? startLabel : `${startLabel} · ${time.format(start)}`
  }

  const end = parseDate(endISO)
  const sameDay = start.toDateString() === end.toDateString()
  if (sameDay) {
    return allDay ? startLabel : `${startLabel} · ${time.format(start)}–${time.format(end)}`
  }

  const endLabel = `${cap(weekday.format(end))}, ${dayMonth.format(end)}`
  return `${startLabel} – ${endLabel}`
}

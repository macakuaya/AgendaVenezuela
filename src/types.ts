export interface EventItem {
  id: string
  /** Path to the event image (ideally 1200x630, 1.91:1). Relative to the site base. */
  image: string
  /** ISO date string, e.g. "2026-01-26T14:00:00". */
  startDate: string
  /** Optional ISO date string for multi-day events. */
  endDate?: string
  /** When true, the event has no specific time; only the date is shown. */
  allDay?: boolean
  /** Event name / title. */
  name: string
  /** Venue or place name, e.g. "Estudi Rosazul". Optional. */
  venue?: string
  /** Street address, e.g. "C/ Muntaner 562". Optional. */
  address?: string
  /** City, e.g. "Barcelona". Optional. */
  city?: string
  /** Primary external link for the card (tickets if available, else Instagram). */
  url?: string

  // --- Extra info (not shown on the card yet; ready for the detail view) ---
  /** Who organizes the event. */
  organizer?: string
  /** Who benefits / where donations go (a quién va dirigido). */
  beneficiary?: string
  /** What the event needs (donations, money, etc.). */
  needs?: string
  /** Contact phone number. */
  contactPhone?: string
  /** WhatsApp chat/group URL. */
  whatsappUrl?: string
  /** Instagram post/reel URL. */
  instagramUrl?: string
  /** Ticket purchase URL. */
  ticketUrl?: string
  /** Website / tickets site. */
  website?: string
  /** Line-up of artists/performers. */
  lineup?: string[]
  /** Free-form note (e.g. special appearances, logistics). */
  note?: string
}

// App-wide configuration. Static site, no backend.

// Brand / header title shown top-left.
export const BRAND_NAME = 'Agenda Venezuela'

// "Enviar evento" destination (JotForm).
export const SUBMIT_EVENT_URL = 'https://form.jotform.com/261915305293053'

// Locale used to format dates in Spanish.
export const LOCALE = 'es-VE'

// --- Supabase (backend de eventos) ---
// Estos valores son PUBLICOS (la anon key esta pensada para ir en el navegador;
// la seguridad la dan las reglas RLS). Pega aqui los tuyos de Supabase
// (Settings > API). Tambien se pueden pasar por variables de entorno VITE_*.
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ?? 'https://chvagaaisaavacofjzyl.supabase.co'
export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  'sb_publishable_VyiuIIvdU6XRmfH73SE-rg_AnrhEmJe'

// Nombre del bucket de Storage donde se suben las imagenes de eventos.
export const EVENT_IMAGES_BUCKET = 'event-images'

// PIN para entrar a /clarisa (freno anti-spam del lado del cliente).
// Cambialo por el que le des a Clarisa.
export const CLARISA_PIN = import.meta.env.VITE_CLARISA_PIN ?? 'venezuela2026'

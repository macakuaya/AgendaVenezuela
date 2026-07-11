# Agenda Venezuela

Agenda de eventos optimizada para mobile. Muestra una lista de tarjetas de eventos que puedes
guardar ("Me interesa") y compartir. Sitio estático, sin backend.

## Tecnología

- React 19 + TypeScript + Vite
- Routing con `react-router-dom` (HashRouter, compatible con GitHub Pages)
- Datos estáticos en `src/data/events.json`
- "Me interesa" persiste en `localStorage` (por dispositivo)
- Deploy automático a GitHub Pages vía GitHub Actions

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción a dist/
npm run preview  # previsualizar el build
```

## Agregar / editar eventos

Edita `src/data/events.json`. Cada evento:

```json
{
  "id": "identificador-unico",
  "image": "events/mi-imagen.svg",
  "startDate": "2026-01-26T14:00:00",
  "endDate": "2026-01-27T17:00:00",
  "name": "Nombre del evento",
  "venue": "Lugar",
  "city": "Caracas",
  "url": "https://enlace-opcional.com"
}
```

- `image`: coloca el archivo en `public/events/` (ideal 1200x630, relación 1.91:1).
- `endDate` y `url` son opcionales.

Para cambiar el destino del botón "Enviar evento" (ej. un Google Form), edita
`SUBMIT_EVENT_URL` en `src/config.ts`.

## Design system

Ruta privada (no enlazada de forma prominente): `/#/design-system`. Permite ajustar los tokens
(colores, tipografía, formas, espaciado) en vivo. Los cambios se guardan en `localStorage`.
Para hacerlos permanentes, usa "Exportar CSS" y pega el resultado en el bloque `:root` de
`src/index.css`.

## Deploy a GitHub Pages

El workflow `.github/workflows/deploy.yml` construye y publica en cada push a `main`.

Configuración única en GitHub:

1. Ve a **Settings → Pages**.
2. En **Build and deployment → Source**, elige **GitHub Actions**.

La URL pública será: `https://macakuaya.github.io/agenda_venezuela/`

> Nota: el `base` en `vite.config.ts` (`/agenda_venezuela/`) debe coincidir con el nombre del
> repositorio para que los assets carguen correctamente.

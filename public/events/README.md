# Imágenes de eventos

Sube aquí las imágenes (flyers) de cada evento.

## Cómo subirlas desde GitHub

1. Entra a esta carpeta en GitHub: `public/events/`
2. Botón **Add file → Upload files**
3. Arrastra las imágenes y haz commit.

## Especificaciones

- Formato **JPG o PNG** (o SVG si es diseño vectorial).
- Ideal **horizontal 1200×630** (relación 1.91:1). Si es un flyer vertical, igual sirve; la tarjeta lo recorta a un cuadrado.
- Nombre en minúsculas y sin espacios ni acentos (usa guiones).

## Nombres sugeridos (para que yo los conecte al JSON)

| Evento | Nombre de archivo sugerido |
|--------|-----------------------------|
| Donaciones de medicina (Gente Activa) | `gente-activa-medicina.jpg` |
| Juntos por Venezuela (El Masnou) | `juntos-por-venezuela.jpg` |
| Mercadillo de ropa (Unidos por Venezuela) | `unidos-por-venezuela-mercadillo.jpg` |
| Venta de pastelería (Aula Canal) | `venta-solidaria-pasteleria.jpg` |
| Tothom amb Veneçuela! (concierto) | `tothom-amb-venezuela.jpg` |

Después de subirlas, avísame y actualizo el campo `image` de cada evento en
`src/data/events.json` (o lo puedes cambiar tú mismo ahí).

> Los archivos `*.svg` que ya están en esta carpeta son placeholders temporales.

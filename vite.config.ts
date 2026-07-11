import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the app works under any GitHub Pages repo path
// (e.g. /AgendaVenezuela/) without needing to hard-code the repo name.
// Safe here because routing is hash-based (HashRouter), so the document
// path never changes at runtime.
export default defineConfig({
  plugins: [react()],
  base: './',
})

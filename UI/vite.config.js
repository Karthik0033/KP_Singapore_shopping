import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/KP_Singapore_shopping/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})

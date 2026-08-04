import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Served from https://dojiverse.github.io/Rio/
  base: '/Rio/',
  plugins: [react(), tailwindcss()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Importante para que los assets carguen correctamente en GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

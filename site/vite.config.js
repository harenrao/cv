import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Builds straight into the repository root so GitHub Pages ("deploy from main, / root") serves it.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsDir: 'static',
  },
})

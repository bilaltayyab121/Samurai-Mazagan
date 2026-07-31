import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'SOURCEMAP_ERROR') return
        warn(warning)
      }
    }
  },
  optimizeDeps: {
    exclude: ['leaflet', 'react-leaflet']
  },
  esbuild: {
    supported: {
      'top-level-await': true
    }
  },
  worker: {
    format: 'es'
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import KumaUI from "@kuma-ui/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    KumaUI()
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@assets': '/src/assets',
    },
  },
})

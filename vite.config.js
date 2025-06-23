import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react', 'react-icons'],
          pdf: ['jspdf', 'html2canvas', 'html2pdf.js'],
          utils: ['axios', 'react-easy-crop']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})

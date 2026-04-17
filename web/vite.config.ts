import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/private-banking-tutor/',
  plugins: [react()],
  server: {
    fs: {
      allow: ['..'],
    },
  },
})

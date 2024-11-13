import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Since this is an organization page (kfoundryai.github.io), 
  // we use "/" instead of a subdirectory
  base: '/'
})
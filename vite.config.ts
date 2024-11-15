import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "professora-cinthia",
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg','@ffmpeg/util']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    'process.env': {}
  },
})

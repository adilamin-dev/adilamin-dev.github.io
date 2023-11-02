import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "adilamin-dev.github.io/",
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : "/adra_mern_questions",
  server: {

    host: '10.10.24.16' // Listen on all network interfaces [3, 7]

  }
})

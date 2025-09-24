import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Developer-Portfolio-Part-1-/", // <-- دقیقاً همین (با اسلش شروع و پایان)
  plugins: [react()],
})

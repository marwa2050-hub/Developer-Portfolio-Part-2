import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ حتماً نام مخزن GitHub خود را دقیقاً همین جا بگذارید
export default defineConfig({
  base: '/Developer-Portfolio-Part-1-/', 
  plugins: [react()]
})

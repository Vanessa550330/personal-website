import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/personal-website/', // ⚡️這裡改成你的repo名稱
  plugins: [react()],
})
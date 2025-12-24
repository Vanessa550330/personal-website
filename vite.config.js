// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
HEAD
  plugins: [react()],
  base: '/personal-website/',   // ⚠️ 這裡要跟你的 GitHub repo 名稱一致

  base: '/personal-website/',
  plugins: [react()]
6d8c594 (Fix vite.config.js: remove merge markers and correct config)
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss()
  ],

  // 🔽 Localhost = "/"
  // 🔽 GitHub Pages build = "/Fotogaleriee/"
  base: command === 'build' ? '/Fotogaleriee/' : '/',
}))
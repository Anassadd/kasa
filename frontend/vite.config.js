import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // 👈 important pour simuler un DOM
    setupFiles: "./src/setup.js" // ton fichier setup global
  }
})

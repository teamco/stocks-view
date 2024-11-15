import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    // environment: 'happy-dom',
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, 'src')}/`
    },
  }
})

import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import polyfillNode from "rollup-plugin-polyfill-node"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
    global: "globalThis",
  },
  optimizeDeps: {
    rolldownOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  build: {
    rollupOptions: {
      plugins: [polyfillNode()],
    },
  },
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      events: "events",
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      http: "stream-http",
      https: "https-browserify",
      ws: "xrpl/dist/npm/client/WSWrapper",
    },
  },
})

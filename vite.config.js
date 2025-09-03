import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "ee8453c1320f.ngrok-free.app",
      "localhost",
      "127.0.0.1"
    ],
    host: true
  }
});

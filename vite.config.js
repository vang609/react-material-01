import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:"/react-material-01/",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});

/* Importing the Vite configuration file and the React plugin. */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* A configuration file for Vite. */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

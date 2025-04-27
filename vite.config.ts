import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({
      // Явно указываем, что пути нужно брать из tsconfig.app.json
      projects: ['./tsconfig.app.json']
    }),
    react()
  ],

})

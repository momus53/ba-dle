import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    external: ['mysql2'] // Excluye mysql2 del bundle del servidor
  }
});
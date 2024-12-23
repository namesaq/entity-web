import { fileURLToPath, URL } from 'node:url';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// Загрузить переменные окружения
dotenv.config();

export default defineConfig({
  // base: '/entity-web/', // Используем process.env вместо import.meta.env
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

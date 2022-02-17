import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  // vite: false,
  buildModules: ['@nuxtjs/tailwindcss'],
  tailwindcss: { configPath: '~/tailwind.config.js' },
});

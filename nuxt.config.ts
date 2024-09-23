export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',  // Ensure this path is correct
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
});

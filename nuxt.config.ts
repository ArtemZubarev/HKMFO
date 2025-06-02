// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
});

export default defineNuxtConfig({
  // css: ['~/assets/main.css'],

  modules: [
    // pinia plugin
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
  ],

  imports: {
    dirs: ["./stores"],
  },

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  i18n: {
    locales: [
      {
        code: "en",
        label: "en-Us",
        file: "en.js",
      },
      {
        code: "pt",
        label: "pt-BR",
        file: "pt.js",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
  },

  tailwindcss: {
    viewer: process.env.ENV === "development",
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "usebootstrap",
  ],

  i18n: {
    vueI18n: "./assets/lang/i18n.config.ts",
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        prependPath: true
      }
    }
  },
  icon: {
    provider: 'iconify', // <--- TO JEST KLUCZOWE
    aliases: {
      'material-symbols': 'material-symbols',
    }
  }
});

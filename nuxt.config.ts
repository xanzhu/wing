import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Xanzhu',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
    ],
   },
    buildModules: [
        '@unocss/nuxt',
      ],
      unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,

        shortcuts: [],
        rules: [],
      }
})
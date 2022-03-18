import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Xanzhu',
    bodyAttrs: {
      class: 'dark:bg-black bg-gray-200 min-w-xs'
    },
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
    ],
   },
    buildModules: [
        '@nuxtjs/color-mode',
        'nuxt-windicss'
      ],
      colorMode: {
        classSuffix: '',
        classPrefix: '',
        preference: 'system', // default value of $colorMode.preference
        fallback: 'dark', // fallback value if not system preference found
      },
})
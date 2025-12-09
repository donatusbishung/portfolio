// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Frontend Engineer',
      meta: [
        { name: 'description', content: 'My portfolio site' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/FavIcon.png' }]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/motion/nuxt'],
  css: ['./assets/main.css'],
  vite: {
    plugins: [tailwindcss()]
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [['@storyblok/nuxt', { accessToken: 'Iwulj9cKCpNDjQjOTItMngtt' }]],
apiOptions: {
    region: "us",
},
})

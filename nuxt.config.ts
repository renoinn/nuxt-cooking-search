import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  dev: false,
  nitro: {
    preset: 'aws-lambda',
  }
})

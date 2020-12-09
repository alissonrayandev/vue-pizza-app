import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  head: {
    title: 'Pizza-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#ff4059' },
  plugins: [
    { src: '~/plugins/media-detector.js', ssr: false },
  ],
  css: ['~/assets/scss/fonts.css'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader'
  ],
  styleResources: {
    scss: [
      './assets/scss/_variables.scss',
      './assets/scss/_mixins.scss',
      './assets/scss/_global.scss'
    ]
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  axios: {},
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx): void {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
    }
  }
}

export default config

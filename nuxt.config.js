
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],

  //TODO::
  auth: {
    strategies: {
      'laravel.passport': {
        url: '/oauth/token',
        client_id: 2,
        client_secret: 'XAIhss9KEVnvfXlauXtNmdUFzAt6Y9cUxnsxUw1a',
        grant_type: 'password',
        scope: ''
      },
      local: {
        endpoints: {
          login: { url: '/oauth/token', method: 'post', propertyName: 'token'},
          logout: false,
          user: { url: '/api/user', method: 'get', propertyName: 'data'},
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      google: {
        client_id: '138658380666-kme67vtockqt9ajqn9a3tft3drglv06l.apps.googleusercontent.com',
        // client_secret: 'OMpWdELo3DDB40yYW9hEeGeG'
      }
    }
  },

  //TODO::
  router: {
    middleware: ['auth']
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://maps-api.app'
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

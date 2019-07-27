
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
      local: {
        endpoints: {
          login: {url: '/oauth/token', method: 'post', propertyName: 'token' },
          logout: false,
          user: {url: '/user', method: 'get', propertyName: 'data'},
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      'laravel.passport': {
              url: '/oauth/token',
              client_id: process.env.PASSPORT_CLIENT_ID,
              client_secret: process.env.PASSPORT_CLIENT_SECRET,
              grant_type: process.env.PASSPORT_GRANT_TYPE,
              scope: '*',
              redirect_uri: 'http://localhost:3000/callback',
            },
    },
    redirect: {
      login: '/?login=1',
      logout: '/',
    }
  },
  // auth: {
  //   strategies: {
  //     'laravel.passport': {
  //       url: '/oauth/token',
  //       client_id: process.env.PASSPORT_CLIENT_ID,
  //       client_secret: process.env.PASSPORT_CLIENT_SECRET,
  //       grant_type: process.env.PASSPORT_GRANT_TYPE,
  //       scope: ''
  //     },
  //     local: {
  //       endpoints: {
  //         login: { url: '/oauth/token', method: 'post', propertyName: 'token'},
  //         logout: false,
  //         user: { url: '/api/user', method: 'get', propertyName: 'data'},
  //       },
  //       tokenRequired: true,
  //       tokenType: 'Bearer'
  //     },
  //     // google: {
  //     //   client_id: '138658380666-kme67vtockqt9ajqn9a3tft3drglv06l.apps.googleusercontent.com',
  //     //   user:false,
  //     //   redirect_uri:'http://localhost:3000/login/google/callback'
  //     // }
  //   }
  // },

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

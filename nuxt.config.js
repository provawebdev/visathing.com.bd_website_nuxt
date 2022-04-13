export default {
  dev: process.env.NODE_ENV !== 'production',
  // env: {
  //   baseURL: process.env.BASE_URL
  // }

  head: {
    title: 'VISAThing - Your visa partner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     // { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'https://unpkg.com/codyhouse-framework/main/assets/js/util.js', async: true },
       {  src: '/js/bootstrap.bundle.min.js', body: true},
       { src: '/js/jquery.min.js' ,body: true},
      //{ type: 'text/javascript', src: '/js/swiper-bundle.min.js', body: true },
       { src: '/js/circle-progress.min.js', body: true},
      //{ src: '/js/script.js', body: true},
      { type: 'text/javascript', src: '/js/custom.min.js', body: true },
      // { type: 'text/javascript', src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js' ,body: true},
        { type: 'text/javascript', src: '/js/jquery-ui.js', body: true}
    ],
    htmlAttrs: {
      class: 'js'
    }
  },


  ssr: false,

  css: [
    // '@/assets/scss/app.scss',
    '@/assets/css/fontawesome.min.css',
    '@/assets/css/swiper-bundle.min.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/style.css',
    '@/assets/css/responsive.css',
  ],

  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' }
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    //'@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    '@aceforth/nuxt-optimized-images',
  ],
  styleResources: {
    scss: ['@/assets/scss/custom-style/_variables.scss']
  },
  optimizedImages: {
    optimizeImages: true
  },

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { ua: 'UA-56018274-1' }],

    // Inline definition
    function () { }
  ],

  axios: {
    baseURL: 'http://localhost:8084/api',
    credentials: true
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    },
    extend(config, ctx) {
      config.node = {
        fs: "empty"
      };
    }
  },
  server: {
    port: 3000
  }
}

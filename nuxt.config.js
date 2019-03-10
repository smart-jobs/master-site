const pkg = require('./package')
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '智慧就业',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/www/css/css.css'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui', '@/plugins/axios', '@/plugins/check-res', '@/plugins/naf-dict', '@/plugins/filters',
    { src: '@/plugins/stomp', ssr: false },
    { src: '@/plugins/userinfo', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    prefix: '/www/api',
  },
  proxy: [
    'http://smart.jilinjobswx.cn/www/api',
    'http://smart.jilinjobswx.cn/ws',
  ],

  router: {
    base: '/www/',
    middleware: ['column'],
  },

  loader: [
    {
      test: /\.less$/,
      loaders: 'style-loader!css-loader!less-loader'
    }
  ],
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  vue: {
    config: {
      stomp: {
        // brokerURL: 'ws://192.168.1.190:15674/ws',
        brokerURL: '/ws', // ws://${location.host}/ws
        connectHeaders: {
          host: 'smart',
          login: "web",
          passcode: "web123"
        },
        // debug: true,
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000
      },
      weixin: {
        // baseUrl: `http://192.168.0.7:8000${url_prefix}/weixin`,
        baseUrl: `http://smart.jilinjobswx.cn/weixin`,
      }
    }
  },
}

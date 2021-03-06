
export default {
  router: {
    routeNameSplitter: '/',
    base:"/" //此为根目录，如果有具体目录需求按实际情况写
  },
  server: {
    // port: 8888, // default: 3000
    port: 996, // default: 3000
    host: '0.0.0.0' // default: localhost
    // host: 'localhost' // default: localhost
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { src: '/vipService/js/flexible.js', type: 'text/javascript', charset: 'utf-8' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script:[
      { src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8'},  // 引用rem
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
    '~assets/css/reset.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/vant', ssr: true},  // 引用vant ui 框架
    '~/plugins/axios',
    '~/plugins/http',
    '~/plugins/common',
    '~/plugins/reset-data',
    '~/plugins/load-img',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   
    postcss: [
      require('postcss-px2rem')({
        remUnit: 37.5
      })
    ],
    extend (config, ctx) {
    }
  }
}

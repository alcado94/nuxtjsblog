export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/nuxtjsblog/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aledna',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: './css/bootstrap.min.css' },
      { rel: 'stylesheet', href: './css/bootstrap-theme.min.css' },
      { rel: 'stylesheet', href: './css/fontAwesome.css' },
      { rel: 'stylesheet', href: './css/light-box.css' },
      { rel: 'stylesheet', href: './css/templatemo-main.css' },
      
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
    ],
    script: [
      { body: true, src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js' },
      { body: true, src: './js/vendor/jquery-1.11.2.min.js' },
      { body: true, src: './js/vendor/bootstrap.min.js' },
      { body: true, src: './js/datepicker.js' },
      { body: true, src: './js/plugins.js' },
      { body: true, src: './js/main.js' },
      { body: true, src: './js/vendor/modernizr-2.8.3-respond-1.4.2.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

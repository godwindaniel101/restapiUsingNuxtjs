
export default {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto&display=swap' }
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
    '~/assets/css/main.css'
  ],
  router:{
    middleware:['clearValidationErrors' ,'auth' ,'guest']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/app.js',
    '@/plugins/mixins/user.js',
    '@/plugins/mixins/validation.js',
    '@/plugins/axios.js',
    '@/plugins/mixins/eventbus.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
 auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: 'auth/login', method: 'post', propertyName: 'token' },
        getEmployee: { url: 'auth/employee', method: 'get', propertyName: 'token' },
        logout: { url: 'auth/logout', method: 'get' },
        user: { url: 'auth/user', method: 'get', propertyName: 'name' }
      },
    }
  },
  redirect:{
    login:'/dashboard',
    home:'/dashboard'
  },
  plugins:[
    '@/plugins/auth.js',
    '@/plugins/app.js',
  ]
},
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth'
],

axios: {
  // proxyHeaders: false
  baseURL: 'http://localhost:8000/api',

},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

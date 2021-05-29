import projects from "./static/data/projects"

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'annaz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/az-favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,900;1,400;1,600;1,900&display=swap" rel="stylesheet',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet'
      }
    ]
  },

  publicRuntimeConfig: {
    baseUrl: 'http://annaezimmerman.com',
    // baseUrl: 'http://localhost:3000/annazimmerman'
  },

  generate: {
    routes() {
      return projects.map(project => {
        return `/projects/${project.id}/${project.slug}`
      })
    }
    // routes: [
    //   '/projects/1001/holiday-illustrations-for-encamp',
    //   '/projects/1002/camping-illustrations-for-encamp',
    //   '/projects/1003/bg-moto-service',
    //   '/projects/1004/lead-acid-batteries-ebook',
    //   '/projects/1005/linkedin-progressive-ad',
    //   '/projects/1006/st-patricks-day-tshirt-grahipc',
    //   '/projects/1007/EHS-iconography-for-encamp',
    //   '/projects/1008/sustainability-tips-illustrations',
    //   '/projects/1009/branding-for-tooma',
    //   '/projects/1010/additional-illustrations-for-encamp'
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
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
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

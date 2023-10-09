import ar from "./plugins/languages/ar"
import en from "./plugins/languages/en"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Learnkhana",
    title: "Learnkhana",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  generate: {
    fallback: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/plugins.js", mode: "client" },
    { src: "~/plugins/i18n.js", mode: "client" },
    { src: '~/plugins/aos.client.js', ssr: false },
    // { src: '~/plugins/swiper.js', ssr: false }
    // "~/plugins/vee-validate",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtclub/feathericons"
    ],
  // Modules: https://go.nuxtjs.dev/config-modules
  target: 'static',
  modules: [
    [
      "@nuxtjs/i18n",
      {
        alwaysRedirect: true,
        fallbackLocale: "en",
        redirectOn: "root",
        useCookie: true,
        redirectDefaultLanguageToRoot: true,
        cookieAge: 365,
        cookieCrossOrigin: false,
        cookieDomain: null,
        cookieKey: "i18n_redirected",
        cookieSecure: false,
        locales: ["en", "ar"],
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: en,
            ar: ar,
          },
        },
      },
    ],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      themes: {
        light: {
          primary: "#2852a0",
          secondary: "#fab120",
          success: "#3EB75E",
          accent: "#FF7F5C",
          teal: "#26B0A1",
          warning: "#FF8F3C",
          error: "#FF585A",
          cyan: "#42D3D5",
        },
      },
    },
    icons: {
      iconfont: "mdi",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ["vee-validate/dist/rules"],
    transpile:['vue-visibility-sensor', 'vue-count-to','vue-virtual-scroller', 'swiper'],
    postcss: null,
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },
};

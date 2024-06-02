// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },

    ssr: false,

    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: process.env.API_SECRET,
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: process.env.API_BASE,
            defaultFontFamily: `'IBM Plex Sans Arabic', sans-serif`
        }
    },

    colorMode: {
        preference: 'light'
    },

    css: ['~/assets/css/main.scss'],

    modules: ["@nuxtjs/i18n", "@nuxt/ui", '@nuxtjs/google-fonts'],

    i18n: {
        vueI18n: './i18n.config.ts'
    },

    googleFonts: {
        families: {
            'IBM+Plex+Sans+Arabic': {
                wght: [400, 700]
            }
        }
    }
})
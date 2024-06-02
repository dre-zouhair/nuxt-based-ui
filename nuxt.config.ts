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
            apiBase: process.env.API_BASE
        }
    }
})

export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1' 
                },
                {
                    name: 'description',
                    content: 'Portfolio of Austin Ewell - AuEwellify, a full stack web developer specializing in front end modern web applications.'
                },
                {
                    name: 'author',
                    content: 'Austin Ewell - AuEwellify' 
                },
                {
                    name: 'robots',
                    content: 'index, follow' 
                },
                // Open Graph
                {
                    property: 'og:type',
                    content: 'website' 
                },
                {
                    property: 'og:site_name',
                    content: 'Austin Ewell - AuEwellify' 
                },
                {
                    property: 'og:image',
                    content: 'https://i.postimg.cc/gkXvpDLb/portfolio-hero-dark.png' 
                },
                {
                    property: 'og:image:width',
                    content: '1200' 
                },
                {
                    property: 'og:image:height',
                    content: '630' 
                },
                {
                    property: 'og:image:type',
                    content: 'image/png' 
                },
                // Twitter Card
                {
                    name: 'twitter:card',
                    content: 'summary_large_image' 
                },
                {
                    name: 'twitter:site',
                    content: '@austinxewell' 
                },
                {
                    name: 'twitter:image',
                    content: 'https://i.postimg.cc/gkXvpDLb/portfolio-hero-dark.png' 
                }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico' 
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon.png' 
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png' 
                },
                {
                    rel: 'canonical',
                    href: 'https://auewellify.dev/' 
                }
            ]
        }
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxt/ui', '@pinia/nuxt'],
    css: ['~/assets/css/main.css']
})
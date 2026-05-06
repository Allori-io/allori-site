// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
  ],

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  // Supabase — staging project for help content (public read, no auth required)
  supabase: {
    url: process.env.SUPABASE_URL || 'https://mnabjfubhcvglaiafhrs.supabase.co',
    key: process.env.SUPABASE_KEY || '',
    redirect: false,
  },

  // Shadcn Vue
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },

  // Color mode
  colorMode: {
    classSuffix: '',
  },

  // Content — markdown pages for marketing + blog
  content: {
    // Default config is fine for now
  },

  // App config
  app: {
    head: {
      title: 'Allori — Care Management Platform',
      meta: [
        { name: 'description', content: 'Allori is an Australian care management platform for NDIS providers, aged care organisations, and community service providers.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // Azure Static Web Apps compatible
  nitro: {
    preset: 'azure',
  },
})

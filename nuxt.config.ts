// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    'shadcn-nuxt',
  ],

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  // Canonical site URL — used by @nuxtjs/sitemap + SEO meta defaults
  site: {
    url: 'https://allori.io',
    name: 'Allori',
  },

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

  // Route rules — retire /docs in favour of /help (canonical markdown-backed route)
  routeRules: {
    '/docs': { redirect: { to: '/help', statusCode: 301 } },
    '/docs/**': { redirect: { to: '/help', statusCode: 301 } },
  },

  // Azure Static Web Apps compatible
  nitro: {
    preset: 'azure',
  },
})

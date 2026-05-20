import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Help articles — validated frontmatter
    help: defineCollection({
      type: 'page',
      source: 'help/**/*.md',
      schema: z.object({
        title: z.string(),
        summary: z.string().optional(),
        slug: z.string(),
        // Tolerate either naming — current articles use `category_slug`.
        category: z.string().optional(),
        category_slug: z.string().optional(),
        agent_author: z.string(),
        tags: z.array(z.string()).default([]),
        video_id: z.string().nullable().optional(),
        featured: z.boolean().default(false),
        public: z.boolean(),
        last_reviewed: z.string().optional(),
        compliance_refresh: z.string().nullable().optional(),
        menu_page_uid: z.string().nullable().optional(),
      }),
    }),
    // Generic catch-all for marketing/blog pages (index, about, etc.)
    content: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['help/**'],
      },
    }),
  },
})

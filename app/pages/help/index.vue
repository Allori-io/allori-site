<script setup lang="ts">
definePageMeta({ layout: 'default' })

// Static metadata for each top-level help category. The `slug` matches the
// `content/help/<slug>/` directory and the article frontmatter `category_slug`.
const categories = [
  {
    slug: 'getting-started',
    name: 'Getting Started',
    description: 'Logging in, navigating the platform, and core concepts.',
  },
  {
    slug: 'recipients',
    name: 'Recipients',
    description: 'Participants, customers, clients, and leads — who they are and how to manage them.',
  },
  {
    slug: 'people-management',
    name: 'People Management',
    description: 'Staff, contractors, applicants, and the People register.',
  },
  {
    slug: 'workforce',
    name: 'Workforce',
    description: 'Roles, qualifications, availability, and onboarding.',
  },
  {
    slug: 'scheduling',
    name: 'Scheduling',
    description: 'Rostering, the Coordinate dashboard, and shift management.',
  },
  {
    slug: 'care-services',
    name: 'Care Services',
    description: 'Care plans, progress notes, goals, and assessments.',
  },
  {
    slug: 'accounts-finance',
    name: 'Accounts & Finance',
    description: 'Invoices, budgets, timesheets, and Xero sync.',
  },
  {
    slug: 'agents',
    name: 'AI Agents',
    description: 'Meet the 12 AI specialists working alongside your team.',
  },
  {
    slug: 'learning',
    name: 'Learning',
    description: 'Training, professional development, and the Learn area.',
  },
]

// Pull article counts so we can show "N articles" per category.
const { data: articles } = await useAsyncData('help-index-articles', () =>
  queryCollection('help')
    .where('public', '=', true)
    .all()
)

const count_by_category = computed(() => {
  const counts: Record<string, number> = {}
  for (const article of articles.value || []) {
    const cat = article.category_slug || article.category
    if (!cat) continue
    counts[cat] = (counts[cat] || 0) + 1
  }
  return counts
})

useSeoMeta({
  title: 'Help & Documentation',
  description: 'Learn how to use Allori with guides, walkthroughs, and FAQs for every domain — from onboarding to billing.',
  ogTitle: 'Allori Help & Documentation',
  ogDescription: 'Guides, walkthroughs, and FAQs for the Allori care management platform.',
  ogType: 'website',
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16">
    <h1 class="text-4xl font-bold text-primary mb-4">
      Help & Documentation
    </h1>
    <p class="text-lg text-muted-foreground mb-12 max-w-2xl">
      Learn how to use Allori with step-by-step guides, walkthroughs, and FAQs across every domain — from onboarding to billing.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="`/help/${category.slug}`"
        class="rounded-lg border border-border p-6 hover:border-primary/50 hover:bg-accent/50 transition-colors group"
      >
        <h2 class="font-semibold text-primary group-hover:underline mb-2">
          {{ category.name }}
        </h2>
        <p class="text-sm text-muted-foreground">
          {{ category.description }}
        </p>
        <p class="text-xs text-muted-foreground mt-3">
          {{ count_by_category[category.slug] || 0 }} article{{ count_by_category[category.slug] === 1 ? '' : 's' }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

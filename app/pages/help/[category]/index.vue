<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const category_slug = route.params.category as string

// Friendly name + description per category. Mirrors `/help/index.vue`.
const category_metadata: Record<string, { name: string; description: string }> = {
  'getting-started': {
    name: 'Getting Started',
    description: 'Logging in, navigating the platform, and core concepts.',
  },
  'recipients': {
    name: 'Recipients',
    description: 'Participants, customers, clients, and leads — who they are and how to manage them.',
  },
  'people-management': {
    name: 'People Management',
    description: 'Staff, contractors, applicants, and the People register.',
  },
  'workforce': {
    name: 'Workforce',
    description: 'Roles, qualifications, availability, and onboarding.',
  },
  'scheduling': {
    name: 'Scheduling',
    description: 'Rostering, the Coordinate dashboard, and shift management.',
  },
  'care-services': {
    name: 'Care Services',
    description: 'Care plans, progress notes, goals, and assessments.',
  },
  'accounts-finance': {
    name: 'Accounts & Finance',
    description: 'Invoices, budgets, timesheets, and Xero sync.',
  },
  'agents': {
    name: 'AI Agents',
    description: 'Meet the 12 AI specialists working alongside your team.',
  },
  'learning': {
    name: 'Learning',
    description: 'Training, professional development, and the Learn area.',
  },
}

const category = category_metadata[category_slug] || {
  name: category_slug,
  description: '',
}

const { data: articles } = await useAsyncData(`help-category-${category_slug}`, () =>
  queryCollection('help')
    .where('public', '=', true)
    .where('category_slug', '=', category_slug)
    .all()
)

if (!category_metadata[category_slug] && (!articles.value || articles.value.length === 0)) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found', fatal: true })
}

useSeoMeta({
  title: `${category.name} — Allori Help`,
  description: category.description,
  ogTitle: `${category.name} — Allori Help`,
  ogDescription: category.description,
  ogType: 'website',
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16">
    <nav class="text-sm text-muted-foreground mb-6">
      <NuxtLink to="/help" class="hover:text-foreground">
        Help
      </NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-foreground">{{ category.name }}</span>
    </nav>

    <h1 class="text-3xl font-bold text-primary mb-4">
      {{ category.name }}
    </h1>
    <p v-if="category.description" class="text-lg text-muted-foreground mb-12 max-w-2xl">
      {{ category.description }}
    </p>

    <div v-if="articles && articles.length" class="space-y-4">
      <NuxtLink
        v-for="article in articles"
        :key="article.path"
        :to="article.path"
        class="block rounded-lg border border-border p-5 hover:border-primary/50 hover:bg-accent/50 transition-colors"
      >
        <h2 class="font-semibold text-primary mb-1">
          {{ article.title }}
        </h2>
        <p v-if="article.summary" class="text-sm text-muted-foreground">
          {{ article.summary }}
        </p>
      </NuxtLink>
    </div>

    <div v-else class="text-center py-12 text-muted-foreground">
      No articles in this category yet.
    </div>
  </div>
</template>

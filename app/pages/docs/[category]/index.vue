<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const supabase = useSupabaseClient()
const category_slug = route.params.category as string

const { data: articles } = await useAsyncData(`help-articles-${category_slug}`, async () => {
  // Get the category
  const { data: cat } = await supabase
    .from('help_categories')
    .select('help_category_id, help_category_name, help_category_description')
    .eq('help_category_slug', category_slug)
    .single()

  if (!cat) return null

  // Get articles in this category and subcategories
  const { data: contents } = await supabase
    .from('vw_help_contents')
    .select('help_content_id, help_content_title, help_content_slug, help_content_summary, help_category_slug')
    .eq('help_content_is_published', true)
    .eq('root_category_slug', category_slug)
    .order('help_content_id')

  return { category: cat, articles: contents || [] }
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16">
    <nav class="text-sm text-muted-foreground mb-6">
      <NuxtLink to="/docs" class="hover:text-foreground">Help & Docs</NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-foreground">{{ articles?.category?.help_category_name }}</span>
    </nav>

    <h1 class="text-3xl font-bold text-primary mb-4">
      {{ articles?.category?.help_category_name }}
    </h1>
    <p class="text-lg text-muted-foreground mb-12">
      {{ articles?.category?.help_category_description }}
    </p>

    <div v-if="articles?.articles?.length" class="space-y-4">
      <NuxtLink
        v-for="article in articles.articles"
        :key="article.help_content_id"
        :to="`/docs/${category_slug}/${article.help_content_slug}`"
        class="block rounded-lg border border-border p-5 hover:border-primary/50 hover:bg-accent/50 transition-colors"
      >
        <h2 class="font-semibold text-primary mb-1">{{ article.help_content_title }}</h2>
        <p class="text-sm text-muted-foreground">{{ article.help_content_summary }}</p>
      </NuxtLink>
    </div>

    <div v-else class="text-center py-12 text-muted-foreground">
      No articles in this category yet.
    </div>
  </div>
</template>

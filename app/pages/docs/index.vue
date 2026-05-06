<script setup lang="ts">
definePageMeta({ layout: 'default' })

const supabase = useSupabaseClient()

const { data: categories } = await useAsyncData('help-categories', async () => {
  const { data } = await supabase
    .from('vw_help_categories')
    .select('*')
    .eq('help_category_is_active', true)
    .is('help_category_parent_id', null)
    .order('help_category_display_order')
  return data
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16">
    <h1 class="text-4xl font-bold text-primary mb-4">Help & Documentation</h1>
    <p class="text-lg text-muted-foreground mb-12">
      Learn how to use Allori with step-by-step guides, walkthroughs, and FAQs.
    </p>

    <div v-if="categories" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="category in categories"
        :key="category.help_category_id"
        :to="`/docs/${category.help_category_slug}`"
        class="rounded-lg border border-border p-6 hover:border-primary/50 hover:bg-accent/50 transition-colors group"
      >
        <h2 class="font-semibold text-primary group-hover:underline mb-2">
          {{ category.help_category_name }}
        </h2>
        <p class="text-sm text-muted-foreground">
          {{ category.help_category_description }}
        </p>
        <p class="text-xs text-muted-foreground mt-3">
          {{ category.total_published_article_count || 0 }} articles
        </p>
      </NuxtLink>
    </div>

    <div v-else class="text-center py-12 text-muted-foreground">
      Loading help categories...
    </div>
  </div>
</template>

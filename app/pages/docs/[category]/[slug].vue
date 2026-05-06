<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const supabase = useSupabaseClient()
const category_slug = route.params.category as string
const article_slug = route.params.slug as string

const { data: article } = await useAsyncData(`help-article-${article_slug}`, async () => {
  const { data } = await supabase
    .from('vw_help_contents')
    .select('*')
    .eq('help_content_slug', article_slug)
    .eq('help_content_is_published', true)
    .single()
  return data
})
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-16">
    <nav class="text-sm text-muted-foreground mb-6">
      <NuxtLink to="/docs" class="hover:text-foreground">Help & Docs</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink :to="`/docs/${category_slug}`" class="hover:text-foreground">
        {{ article?.help_category_name || category_slug }}
      </NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-foreground">{{ article?.help_content_title }}</span>
    </nav>

    <article v-if="article" class="prose prose-lg max-w-none dark:prose-invert">
      <h1>{{ article.help_content_title }}</h1>
      <div v-html="renderMarkdown(article.help_content_body)" />
    </article>

    <div v-else class="text-center py-12 text-muted-foreground">
      Article not found.
    </div>
  </div>
</template>

<script lang="ts">
function renderMarkdown(body: string): string {
  if (!body) return ''
  // Basic markdown rendering — replace with a proper renderer later
  return body
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
}
</script>

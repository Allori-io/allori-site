<script setup lang="ts">
const route = useRoute()

// Help articles live in the `help` collection (validated by Zod schema in
// content.config.ts). Marketing/blog pages live in the generic `content`
// collection. Pick the right collection by path prefix.
const is_help_path = route.path.startsWith('/help')

const { data: page } = await useAsyncData('page-' + route.path, () => {
  if (is_help_path) {
    return queryCollection('help').path(route.path).first()
  }
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Per-page SEO meta sourced from frontmatter (F002).
// Single source for description: `summary` preferred, fall back to `description`.
// Cast to any because the merged page type spans two collections with
// non-overlapping optional frontmatter fields.
const meta = computed(() => {
  const p = page.value as { title?: string; summary?: string; description?: string } | null
  return {
    title: p?.title,
    description: p?.summary || p?.description,
  }
})

useSeoMeta({
  title: () => meta.value.title,
  description: () => meta.value.description,
  ogTitle: () => meta.value.title,
  ogDescription: () => meta.value.description,
  ogType: 'article',
})
</script>

<template>
  <article v-if="page" class="mx-auto max-w-4xl px-6 py-16">
    <!--
      Canonical H1 from frontmatter title (F008).
      Articles author with `##` as the top body heading, so this avoids a
      double-H1. Authors should not start an article body with `#` — keep
      this <h1> as the single page H1.
    -->
    <h1 class="text-3xl font-bold text-primary mb-6">
      {{ page.title }}
    </h1>

    <div class="prose prose-lg max-w-none dark:prose-invert">
      <ContentRenderer :value="page" />
    </div>
  </article>
</template>

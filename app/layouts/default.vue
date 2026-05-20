<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div class="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold text-primary">
          Allori
        </NuxtLink>
        <nav class="flex items-center gap-6">
          <NuxtLink to="/features" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </NuxtLink>
          <NuxtLink to="/help" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Help
          </NuxtLink>
          <NuxtLink to="/blog" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </NuxtLink>
          <NuxtLink to="/about" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </NuxtLink>
          <a
            href="https://app.allori.io"
            class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Sign In
          </a>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-border bg-muted/50">
      <div class="mx-auto max-w-7xl px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="font-semibold text-primary mb-3">Allori</h3>
            <p class="text-sm text-muted-foreground">
              Care management platform for NDIS providers, aged care organisations, and community service providers.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-3">Product</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><NuxtLink to="/features" class="hover:text-foreground">Features</NuxtLink></li>
              <li><NuxtLink to="/help" class="hover:text-foreground">Help</NuxtLink></li>
              <li><a href="https://app.allori.io" class="hover:text-foreground">Sign In</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-3">Resources</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><NuxtLink to="/blog" class="hover:text-foreground">Blog</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-foreground">About</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-3">Compliance</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li>NDIS Registered</li>
              <li>Australian Data Sovereignty</li>
              <li>SCHADS Award Compliant</li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          &copy; {{ new Date().getFullYear() }} Allori. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

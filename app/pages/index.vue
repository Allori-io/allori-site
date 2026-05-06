<script setup lang="ts">
definePageMeta({ layout: 'default' })
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 class="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
        Care management,<br>simplified.
      </h1>
      <p class="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        Allori is an Australian care management platform for NDIS providers, aged care organisations, and community service providers. Manage clients, staff, scheduling, billing, and compliance in one place.
      </p>
      <div class="mt-10 flex items-center justify-center gap-4">
        <a
          href="https://app.allori.io"
          class="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get Started
        </a>
        <NuxtLink
          to="/features"
          class="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
        >
          See Features
        </NuxtLink>
      </div>
    </section>

    <!-- Domains grid -->
    <section class="mx-auto max-w-7xl px-6 py-16">
      <h2 class="text-3xl font-bold text-primary text-center mb-12">
        Everything you need to run care services
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="domain in domains" :key="domain.title" class="rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
          <h3 class="font-semibold text-primary mb-2">{{ domain.title }}</h3>
          <p class="text-sm text-muted-foreground">{{ domain.description }}</p>
        </div>
      </div>
    </section>

    <!-- Compliance -->
    <section class="bg-muted/50 py-16">
      <div class="mx-auto max-w-7xl px-6 text-center">
        <h2 class="text-3xl font-bold text-primary mb-6">Built for Australian compliance</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 class="font-semibold text-primary mb-2">NDIS</h3>
            <p class="text-sm text-muted-foreground">Participant plans, budgets, pricing catalogues, and NDIA reporting built in.</p>
          </div>
          <div>
            <h3 class="font-semibold text-primary mb-2">Aged Care</h3>
            <p class="text-sm text-muted-foreground">Home Care Packages, Support at Home, quality standards, and customer budgets.</p>
          </div>
          <div>
            <h3 class="font-semibold text-primary mb-2">Fair Work / SCHADS</h3>
            <p class="text-sm text-muted-foreground">Pay rates, overtime, penalty rates, allowances, and award interpretation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI agents -->
    <section class="mx-auto max-w-7xl px-6 py-16 text-center">
      <h2 class="text-3xl font-bold text-primary mb-4">AI-powered workforce</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        12 specialist AI agents assist your team with operations, clinical coordination, HR, billing, compliance, and more.
      </p>
      <NuxtLink
        to="/features#agents"
        class="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
      >
        Meet the agents
      </NuxtLink>
    </section>
  </div>
</template>

<script lang="ts">
const domains = [
  { title: 'People Management', description: 'Clients, participants, customers, staff, contractors, and suppliers — all in one place.' },
  { title: 'Care Services', description: 'Assessments, care plans, progress notes, and goals with live profile updates.' },
  { title: 'Scheduling', description: 'Tasks, meetings, rostering, shift allocation, and travel management.' },
  { title: 'Billing & Finance', description: 'Timesheets, invoices, budgets, and bidirectional Xero integration.' },
  { title: 'Quality & Safety', description: 'Incidents, feedback, risk registers, audits, and compliance tracking.' },
  { title: 'HR & Recruitment', description: 'Applications, onboarding, qualifications, training, and performance.' },
  { title: 'Policies & Documents', description: 'Policy register with versioning, compliance frameworks, and e-signing.' },
  { title: 'Communications', description: 'In-app messaging, notifications, and notice boards for your team.' },
  { title: 'AI Agents', description: '12 specialist AI agents for clinical, HR, billing, NDIS, and operational support.' },
]
</script>

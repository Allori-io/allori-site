# allori-site

Marketing, help documentation, and informational website for Allori.

This is a design scaffold, not a live site: it exists to work out framework, design and information architecture before allori.io is built. Treat existing pages and content as exploration, and the Hosting/Domain lines below as the target, not current state.

## Stack

- **Framework:** Nuxt 4 + Nuxt Content
- **UI:** Tailwind CSS + Shadcn Vue (shared design system with allori-web)
- **Data:** Supabase (staging project for help content — public read, no auth)
- **Hosting:** Azure Static Web Apps
- **Domain:** allori.io

## Structure

| Section | Path | Source |
|---------|------|--------|
| Marketing | `/`, `/features`, `/about` | Nuxt Content (markdown in `content/`) |
| Help & Docs | `/help` | Nuxt Content (markdown in `content/help/`) |
| Blog / Resources | `/blog` | Nuxt Content (markdown in `content/blog/`) |

## Development

```bash
npm run dev        # Start dev server on localhost:3000
npm run build      # Build for Azure
npm run generate   # Generate static site
npm run preview    # Preview production build
```

## Content Pipeline

All content — marketing, help and blog — is markdown under `content/`, managed by Nuxt Content. Serving help from the app's Supabase `help_content` tables is a possible later step, not current behaviour.

## Environment Variables

```
SUPABASE_URL=https://mnabjfubhcvglaiafhrs.supabase.co
SUPABASE_KEY=<staging-anon-key>
```

## Parent Workspace

This repo is a submodule of `everything-claude`. For cross-repo operations, launch Claude Code from the parent directory.

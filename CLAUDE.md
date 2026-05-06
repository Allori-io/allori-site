# allori-site

Marketing, help documentation, and informational website for Allori.

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
| Help & Docs | `/docs` | Supabase `help_content` + `help_categories` tables |
| Blog / Resources | `/blog` | Nuxt Content (markdown in `content/blog/`) |

## Development

```bash
npm run dev        # Start dev server on localhost:3000
npm run build      # Build for Azure
npm run generate   # Generate static site
npm run preview    # Preview production build
```

## Content Pipeline

Help documentation is generated overnight by Pepper (Claude Code) and stored in Supabase. The site pulls from the same `help_content`, `help_categories`, and `help_faqs` tables that the in-app help system uses.

Marketing and blog content lives as markdown files in `content/` and is managed via Nuxt Content.

## Environment Variables

```
SUPABASE_URL=https://mnabjfubhcvglaiafhrs.supabase.co
SUPABASE_KEY=<staging-anon-key>
```

## Parent Workspace

This repo is a submodule of `everything-claude`. For cross-repo operations, launch Claude Code from the parent directory.

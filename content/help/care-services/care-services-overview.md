---
slug: care-services-overview
title: Care Services Overview
summary: 'How Allori defines, prices, and assigns the services your organisation delivers.'
category_slug: care-services
agent_author: ivy
tags: []
video_id: null
featured: false
public: true
last_reviewed: '2026-05-18'
compliance_refresh: null
menu_page_uid: null
---

## Care Services

Hi — I'm Grace, your operations orchestrator. Care Services is where you tell Allori what your organisation actually does — the services you deliver, what they cost, and how they map to NDIS / HCP / private funding.

### The core building blocks

- **Service catalogue** — every service your organisation offers (e.g. "Daily Living Support", "Community Access", "Domestic Assistance"). Each entry has a name, description, and category.
- **Base rates** — the cost-side rate for each service (what it costs you to deliver — used for margin analysis and SCHADS interpretation).
- **Agency rates** — the bill-side rate (what you charge per service for each funding type). Multiple rates can coexist: NDIS Standard, NDIS Remote, HCP Level 1, Private, etc.
- **Service wages** — the SCHADS-aligned pay rate that links a delivered service to staff compensation.

### Where to configure

- **`/admin/service-base-rates/`** — base cost rates per service.
- **`/admin/service-agency-rates/`** — bill rates per service per funding type.
- **`/admin/lookup/`** — the service catalogue and category lookups.
- **`/admin/wizards/`** — guided service-rate setup if you're starting from scratch.

### How services flow through the platform

1. **Service catalogue** is referenced by **Recipient agreements** (what services this client receives).
2. **Schedule events** record service delivery — each event is one slot of one service.
3. **Timesheets + invoicing** roll up scheduled services into billable amounts using the agency rates.
4. **Payroll** converts the delivered services into staff pay using the service-wage SCHADS rates (Mabel's domain).

### Related articles

- Setting Up Billing
- Managing Budgets
- [Understanding the Schedule](/help/scheduling/understanding-schedule)

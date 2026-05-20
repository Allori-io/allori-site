---
slug: people-management-overview
title: People Management Overview
summary: >-
  How Allori organises every person in the system into role-based registers and a unified Person
  view.
category_slug: people-management
agent_author: grace
tags: []
video_id: null
featured: false
public: true
last_reviewed: '2026-05-18'
compliance_refresh: null
menu_page_uid: d6e219a8-c5d4-4675-b3cb-2bc84d1dc610
---

## People Management

Hi — I'm Grace, your operations orchestrator. Let me show you how Allori tracks every person who interacts with your organisation.

### The unified Person model

Allori has one canonical record per individual — the **Person** — and layers role-specific registers on top. A single person can be an Employee, a Coordinator, and a Care Partner all at once. Their personal details (name, contact info, address) live on `person_register` and never duplicate.

### Role-based registers

Each role has its own register that adds role-specific fields:

- **Staff / Employees / Contractors / Coordinators / Care Partners** — workforce-side roles
- **Clients / Customers / Participants** — service-recipient-side roles (NDIS / HCP / Private)
- **Applicants / Prospects / Leads** — pipeline-side roles
- **Suppliers / Referrers** — external party roles

Find each register from the sidebar Search or the Domain card on the home hub.

### The /persons universal search

When you need to find someone but don't know which register they're in, go to **`/persons`**. It searches across every register at once and shows their roles.

### The Person Card

Click into any register row and you'll land on a **Person Card** — the canonical detail page. The tabs (Profile, Activity, Documents, Conversations…) change based on which registers the person is in.

### Related articles

- The Person Card
- Managing Workforce
- Managing Recipients

---
slug: understanding-schedule
title: Understanding the Schedule
summary: 'How scheduling works — events, frequencies, multiple accounts, and overnight shifts.'
category_slug: scheduling
agent_author: ellie
tags: []
video_id: null
featured: false
public: true
last_reviewed: '2026-05-18'
compliance_refresh: null
menu_page_uid: e83c13fa-3693-4ec0-9bb1-d2acb510a2ad
---

## Understanding the Schedule

### Event Structure
An **event** is the recurring schedule wrapper:
- **Frequency:** single day, single night, weekly, fortnightly, tri-weekly, monthly
- **Start date** (required) + **end date** (optional for ongoing)

Inside each event are **event days** — the detailed billing entries:
- Multiple entries per day, each billable to a **different account**
- Event types available are filtered by the account's rostering tab

### Example: Multi-Account Event
One event can cover multiple services and billing parties:
- 10:00-12:00 — Domestic assistance → Account A
- 12:00-14:00 — Personal care → Account B
- 14:00-15:00 — Transport → Account C

The care worker logs in **once** and out **once**. All detail is broken out within a single timesheet.

### Calendar Views
The calendar has several view modes (cycle through with the view button):
1. **Weekly view** — standard calendar grid
2. **Horizontal view** — shift bars on a timeline
3. **List/Agenda view** — text list of events

The **layer button** breaks overlapping shifts side-by-side for readability.

### Calendar Filters
| Filter | What it shows | Billed? |
|--------|---------------|---------|
| Scheduled events | Employee/contractor service delivery | Yes |
| Management events | Office staff, annual leave | No |
| Employee events | Allowance-related | Yes |
| Scheduled services | Third-party supplier services | Tracked for funding |
| Interviews | Applicant interviews | No |
| Scheduled visits | Staff visits (works for non-recipients too) | No |
| Time cards | Management time cards for the week | Yes |

### Critical Rule: Day of Week
The day of the week must fall within the event's start and end dates. Changing dates doesn't shift the day of week automatically.

### Overnight Shifts
If the end time is before the start time, the system automatically extends to the next day. You don't need to create two separate events.

### How Timesheets Are Created
A cron job runs every 5 minutes. It checks: is there an event starting in the next 15 minutes? If so, it creates a timesheet (or invoice for contractors). One recurring event can generate 52+ timesheets over a year.

### Splitting Events
If a timesheet has been **approved**, the event is **locked**. To make changes, you must **split** the event:
1. Click the event on the date you want to change
2. Choose split type: **one-off**, **ongoing**, or **time frame**
3. The original event gets an end date at the split point
4. A new event continues from there

### FAQ: Why isn't my event showing up?
The day of week may not fall within the event's start/end dates. Check that the scheduled day is within the date range.

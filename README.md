# CMU Agents + RL + Envs seminar

A simple seminar site with the weekly meeting details, schedule, speaker and sponsor inquiries, and organizer contacts.

## Update the schedule

Edit `lib/seminar.ts`. Add confirmed sessions to `sessions` in chronological order, using a Monday date in `YYYY-MM-DD` format, a title, and optional speaker, note, or URL. Until sessions are added, the site displays a clear schedule-forthcoming notice. No dates or speakers have been invented.

Meeting details and contact information are also in `lib/seminar.ts`. The email address was verified from https://lawrencekjang.github.io/; other contact handles and meeting details came from the organizer's brief.

## Development

Run `npm install`, then `npm run dev`. Run `npm run build` for a production build and `npm run lint` for lint checks.

## Design

Restrained academic editorial direction, implemented with native CSS and semantic HTML. System serif display typography, system sans-serif body text, one red accent, square surfaces, and a light theme. Design variance 5, motion intensity 1, visual density 3. Imagery is omitted because the schedule and contact details are the purpose of this site.

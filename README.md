# CMU Agents + RL + Envs seminar

A compact academic seminar page: weekly meeting details, a Monday schedule table, and contact information. The layout follows the organizer's reference at https://www.cs.cmu.edu/~mlaiseminar/.

## Update the schedule

Edit the dated entries in `lib/seminar.ts`. Each session supports `speaker`, `affiliation`, `title`, and an optional `url`. Missing fields display as TBD. Use `notice` for an announcement or break instead of talk details.

The initial table contains every remaining Monday from September 14 through November 30, 2026. The final teaching week and October 12 fall-break note are based on https://www.cmu.edu/hub/calendar/docs/2627-academic-calendar.pdf. Whether the seminar meets during fall break is still TBD. No speakers or talks have been invented.

Meeting details and contacts are in the same file. Lawrence's email was verified at https://lawrencekjang.github.io/; the room, time, and other contacts came from the organizer.

## Development

Run `npm install`, then `npm run dev`. Run `npm run build`, `npm run lint`, and `npx tsc --noEmit` for checks.

# CMU Agents + RL + Envs seminar

A compact academic seminar page: a short introduction to CMU PhD students and faculty, weekly meeting details, a Monday schedule table, sponsors (TBD), and organizer contacts. The illustrated header follows the friendly style of https://cmu-agent-workshop.github.io/; the schedule follows https://www.cs.cmu.edu/~mlaiseminar/. No workshop speakers, dates, sponsors, or logos are reused. The primary accent is official Carnegie Red (#C41230), from https://brand.cmu.edu/visual-identity/colors.

## Update the schedule

Edit the dated entries in `lib/seminar.ts`. Each session supports `speaker`, `affiliation`, `title`, and an optional `url`. Missing fields display as TBD. Use `notice` for an announcement or break instead of talk details.

The initial table contains every remaining Monday from September 14 through November 30, 2026. The final teaching week and October 12 fall-break note are based on https://www.cmu.edu/hub/calendar/docs/2627-academic-calendar.pdf. Whether the seminar meets during fall break is still TBD. No speakers or talks have been invented.

Meeting details and contacts are in the same file. Lawrence's email was verified at https://lawrencekjang.github.io/; the room, time, and other contacts came from the organizer.

## Development

Run `npm install`, then `npm run dev`. Run `npm run build`, `npm run lint`, and `npx tsc --noEmit` for checks.

## Deployment

Pushes to `main` publish the static site with GitHub Pages. Run `npm run build:pages` to verify the Pages build locally.

## Illustration

`public/agents-illustration.png` is an original transparent PNG generated once with the built-in image tool. It is decorative; all seminar details remain accessible HTML.

Prompt: Clean, friendly editorial illustration of two expressive robots collaborating around a small tabletop environment with geometric blocks. One robot navy and white, the other teal and white. Full bodies, compact square composition, readable at 250 pixels wide, transparent background with generous margins. Crisp simplified shapes, restrained navy, teal, and white with a tiny red accent. No text, lettering, numbers, branding, logos, watermarks, QR codes, decorative stickers, or website UI.

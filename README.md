# CMU Agents & RL Seminar (CARL)

A compact academic seminar page: a short introduction to CMU PhD students and faculty, weekly meeting details, a Monday schedule table, sponsors (TBD), and organizer contacts. The illustrated header follows the friendly style of https://cmu-agent-workshop.github.io/; the schedule follows https://www.cs.cmu.edu/~mlaiseminar/. No workshop speakers, dates, sponsors, or logos are reused. The primary accent is official Carnegie Red (#C41230), from https://brand.cmu.edu/visual-identity/colors.

## Update the schedule

Edit the dated entries in `lib/seminar.ts`. Each session supports `speaker`, `affiliation`, `title`, and an optional `url`. Missing fields display as TBD. Use `notice` for an announcement or break instead of talk details.

The initial table contains every seminar Monday from September 21 through November 30, 2026. The final teaching week and October 12 fall-break note are based on https://www.cmu.edu/hub/calendar/docs/2627-academic-calendar.pdf. Whether the seminar meets during fall break is still TBD. No speakers or talks have been invented.

Meeting details and contacts are in the same file. Lawrence's email was verified at https://lawrencekjang.github.io/; the room, time, and other contacts came from the organizer.

## Development

Run `npm install`, then `npm run dev`. Run `npm run build`, `npm run lint`, and `npx tsc --noEmit` for checks.

## Deployment

Pushes to `main` publish the static site with GitHub Pages. Run `npm run build:pages` to verify the Pages build locally.

## Illustration

`public/carl-fredricksen.png` is a transparent character illustration generated with the built-in image tool and animated gently with CSS. It is decorative; all seminar details remain accessible HTML. The previous `agents-illustration.png` is retained as an unused source asset.

Prompt: Create a single isolated editorial cartoon figure for a university seminar website header. Show a friendly older male scholar standing upright, full body, with white hair, square glasses, a bow tie, a brown jacket, charcoal trousers, sturdy shoes, and a walking stick. In his other hand he holds five thin strings leading to five small muted-color floating balloons clustered closely overhead. Use clean simplified shapes, crisp edges, subtle gentle shading, and a restrained palette of Carnegie red, warm white, charcoal, brown, muted gold, slate blue, sage, and dusty rose. Keep the silhouette narrow and legible when displayed 180 pixels tall. Include transparent padding around the complete figure and balloons. Output a genuinely transparent alpha background. No text, logos, watermark, frame, interface, scenery, floor, or backdrop.

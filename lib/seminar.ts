export const seminar = {
  semester: 'Fall 2026',
  day: 'Mondays',
  time: '12:30–2 PM',
  room: 'GHC 8102',
  email: 'ljang@cs.cmu.edu',
  contacts: ['kohjingyu', 'PranjalAggarw16', 'stephofx', 'ianwu97'],
};

export type Session = {
  /** Weekly Monday slot, in YYYY-MM-DD format. */
  date: string;
  title?: string;
  speaker?: string;
  affiliation?: string;
  /** Optional link to the paper, talk page, or recording. */
  url?: string;
  /** Replaces the talk fields for a break or schedule announcement. */
  notice?: string;
};

// Remaining Mondays in the Fall 2026 teaching semester, starting on the date
// of the organizer's request. Talk fields remain TBD until confirmed.
// CMU's calendar ends classes December 4 and lists fall break October 12–16:
// https://www.cmu.edu/hub/calendar/docs/2627-academic-calendar.pdf
// The seminar's fall-break meeting has not been confirmed or cancelled.
export const sessions: Session[] = [
  { date: '2026-09-14' },
  { date: '2026-09-21' },
  { date: '2026-09-28' },
  { date: '2026-10-05' },
  { date: '2026-10-12', notice: 'Fall break (meeting TBD)' },
  { date: '2026-10-19' },
  { date: '2026-10-26' },
  { date: '2026-11-02' },
  { date: '2026-11-09' },
  { date: '2026-11-16' },
  { date: '2026-11-23' },
  { date: '2026-11-30' },
];

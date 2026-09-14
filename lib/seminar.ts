export const seminar = {
  day: 'Mondays',
  time: '12:30–2 PM',
  room: 'GHC 8102',
  email: 'ljang@cs.cmu.edu',
  contacts: ['kohjingyu', 'PranjalAggarw16', 'stephofx', 'ianwu97'],
};

export type Session = {
  /** Confirmed Monday date in YYYY-MM-DD format. */
  date: string;
  title: string;
  speaker?: string;
  note?: string;
  /** Optional link to the paper, talk page, or recording. */
  url?: string;
};

// Add confirmed sessions here, in date order. The page displays a forthcoming
// notice until the first session is added; no unconfirmed dates are published.
export const sessions: Session[] = [];

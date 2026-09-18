import { seminar, sessions } from '@/lib/seminar';
import { CarlMascot } from '@/components/carl-mascot';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#schedule">
        Skip to schedule
      </a>
      <main className="page">
        <div className="masthead">
          <a className="university" href="https://www.cmu.edu/">
            Carnegie Mellon University
          </a>
          <nav aria-label="Page sections">
            <a href="#schedule">Schedule</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <header className="intro">
          <div className="intro-copy">
            <p className="seminar-label">Weekly research seminar</p>
            <h1>
              CMU Agents &amp; RL Seminar <span className="acronym">(CARL)</span>
            </h1>
            <p className="intro-text">
              We’re CMU PhD students and faculty working on agents and
              reinforcement learning. We meet weekly to share work in progress,
              discuss papers, and host talks.
            </p>
            <p className="meeting-details">
              <strong>{seminar.day}</strong>
              <span>{seminar.time} ET</span>
              <span className="meeting-location">{seminar.room}</span>
            </p>
          </div>
          <CarlMascot />
        </header>

        <section id="schedule" aria-labelledby="schedule-title">
          <div className="section-heading">
            <h2 id="schedule-title">Schedule</h2>
            <p>{seminar.semester}</p>
          </div>
          <Table className="schedule-table" aria-labelledby="schedule-title">
            <TableHeader>
              <TableRow>
                <TableHead scope="col" className="date-column">
                  Date
                </TableHead>
                <TableHead scope="col">Speaker</TableHead>
                <TableHead scope="col">Affiliation</TableHead>
                <TableHead scope="col" className="title-column">
                  Title / Topic
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.map((session, index) => (
                <TableRow
                  key={session.date}
                  className={
                    index > 0 &&
                    session.date.slice(0, 7) !==
                      sessions[index - 1].date.slice(0, 7)
                      ? 'month-start'
                      : undefined
                  }
                >
                  <TableCell>
                    <time dateTime={session.date}>
                      {dateFormat.format(new Date(`${session.date}T12:00:00Z`))}
                    </time>
                  </TableCell>
                  {session.notice ? (
                    <TableCell colSpan={3} className="notice">
                      {session.notice}
                    </TableCell>
                  ) : (
                    <>
                      <TableCell className={session.speaker ? '' : 'pending'}>
                        {session.speaker || 'TBD'}
                      </TableCell>
                      <TableCell
                        className={session.affiliation ? '' : 'pending'}
                      >
                        {session.affiliation || 'TBD'}
                      </TableCell>
                      <TableCell className={session.title ? '' : 'pending'}>
                        {session.url ? (
                          <a href={session.url}>
                            {session.title || 'Talk details'}
                          </a>
                        ) : (
                          session.title || 'TBD'
                        )}
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <div className="bottom-sections">
          <section
            className="sponsors"
            id="sponsors"
            aria-labelledby="sponsors-title"
          >
            <h2 id="sponsors-title">Sponsors</h2>
            <p className="sponsor-status">TBD</p>
            <a
              href={`mailto:${seminar.email}?subject=CMU%20Agents%20Seminar%20Sponsorship`}
            >
              Sponsorship inquiries
            </a>
          </section>
          <section
            className="contact"
            id="contact"
            aria-labelledby="contact-title"
          >
            <h2 id="contact-title">Organizers & contact</h2>
            <div>
              <p>
                <a href="https://lawrencekjang.github.io/">Lawrence Jang</a>
                {' · '}
                <a href={`mailto:${seminar.email}`}>{seminar.email}</a>
              </p>
              <p className="other-contacts">
                {seminar.contacts.map((handle, index) => (
                  <span key={handle}>
                    {index > 0 && ' · '}
                    <a href={`https://x.com/${handle}`}>@{handle}</a>
                  </span>
                ))}
              </p>
              <p className="speaker-note">
                External speakers are welcome. Email or DM us to give a talk.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

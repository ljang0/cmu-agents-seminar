import { seminar, sessions } from '@/lib/seminar';
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
        <header>
          <h1>CMU Agents + RL + Envs Seminar</h1>
          <p className="meeting-details">
            <strong>
              {seminar.day}, {seminar.time} ET
            </strong>
            <span aria-hidden="true"> · </span>
            {seminar.room}
          </p>
        </header>

        <section id="schedule" aria-labelledby="schedule-title">
          <h2 id="schedule-title">Schedule · {seminar.semester}</h2>
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
              {sessions.map((session) => (
                <TableRow key={session.date}>
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

        <section className="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p>
            External speakers and sponsors are welcome. Contact{' '}
            <a href="https://lawrencekjang.github.io/">Lawrence Jang</a> at{' '}
            <a href={`mailto:${seminar.email}`}>{seminar.email}</a>.
          </p>
          <p>
            Or reach out to{' '}
            {seminar.contacts.map((handle, index) => (
              <span key={handle}>
                {index > 0 && ', '}
                <a href={`https://x.com/${handle}`}>@{handle}</a>
              </span>
            ))}
            .
          </p>
        </section>
        <footer>
          <a href="https://www.cmu.edu/">Carnegie Mellon University</a>
        </footer>
      </main>
    </>
  );
}

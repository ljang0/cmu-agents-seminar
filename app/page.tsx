import { seminar, sessions } from '@/lib/seminar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="page">
        <header className="site-header">
          <a className="university" href="https://www.cmu.edu/">
            Carnegie Mellon University
          </a>
          <nav aria-label="Main navigation">
            <a href="#schedule">Schedule</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <main id="main">
          <section className="intro" aria-labelledby="seminar-title">
            <p className="eyebrow">Weekly research seminar</p>
            <h1 id="seminar-title">
              Agents <span>+</span> RL <span>+</span> Envs
            </h1>
            <p className="intro-description">
              A meeting place for research on agents, reinforcement learning,
              and the environments they learn in.
            </p>
          </section>
          <dl className="meeting-details" aria-label="Meeting details">
            <div>
              <dt>When</dt>
              <dd>
                {seminar.day} <span className="detail-note">/ weekly</span>
              </dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>
                {seminar.time} <span className="detail-note">ET</span>
              </dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>
                {seminar.room} <span className="detail-note">/ CMU</span>
              </dd>
            </div>
          </dl>
          <section
            className="schedule-section"
            id="schedule"
            aria-labelledby="schedule-title"
          >
            <div className="section-heading">
              <h2 id="schedule-title">Schedule</h2>
              <p>This semester</p>
            </div>
            {sessions.length > 0 ? (
              <Table className="schedule-table">
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Session</TableHead>
                    <TableHead>Speaker</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sessions.map((session) => (
                    <TableRow key={session.date}>
                      <TableCell>
                        <time dateTime={session.date}>
                          {new Intl.DateTimeFormat('en-US', {
                            month: 'short',
                            day: 'numeric',
                            timeZone: 'UTC',
                          }).format(new Date(`${session.date}T12:00:00Z`))}
                        </time>
                      </TableCell>
                      <TableCell className="session-title">
                        {session.url ? (
                          <a href={session.url}>{session.title}</a>
                        ) : (
                          session.title
                        )}
                        {session.note && (
                          <p className="session-note">{session.note}</p>
                        )}
                      </TableCell>
                      <TableCell className="session-speaker">
                        {session.speaker || 'Group discussion'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="schedule-notice">
                <p className="notice-title">The talk schedule is on its way.</p>
                <p>
                  Speakers, titles, and readings will be posted here as they’re
                  confirmed.
                </p>
              </div>
            )}
            <p className="schedule-footnote">
              We have {seminar.room} booked on Mondays,{' '}
              {seminar.time.toLowerCase()}, for the rest of the semester.
            </p>
          </section>
          <div className="info-grid">
            <section id="about" aria-labelledby="about-title">
              <h2 id="about-title">About the seminar</h2>
              <p>
                We’re bringing the CMU agents community together to share
                ongoing work and talk through new ideas.
              </p>
              <p>
                The seminar is a space for research talks, paper discussions,
                and work in progress across agents, RL, and environments.
              </p>
            </section>
            <section id="contact" aria-labelledby="contact-title">
              <h2 id="contact-title">Get involved</h2>
              <div className="invitation">
                <h3>Give a talk</h3>
                <p>
                  We welcome external speakers. Get in touch if you’d like to
                  share your research.
                </p>
                <a
                  className="text-link"
                  href={`mailto:${seminar.email}?subject=CMU%20Agents%20Seminar%20%7C%20Speaker%20inquiry`}
                >
                  Propose a talk <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="invitation">
                <h3>Support the seminar</h3>
                <p>
                  We’re looking for sponsors to help support the weekly meetup.
                </p>
                <a
                  className="text-link"
                  href={`mailto:${seminar.email}?subject=CMU%20Agents%20Seminar%20%7C%20Sponsorship`}
                >
                  Become a sponsor <span aria-hidden="true">↗</span>
                </a>
              </div>
            </section>
          </div>
          <section className="organizers" aria-labelledby="organizers-title">
            <div>
              <h2 id="organizers-title">Say hello.</h2>
              <p>Questions, ideas, or a paper we should read?</p>
            </div>
            <div className="organizer-details">
              <p>
                <a
                  className="organizer-name"
                  href="https://lawrencekjang.github.io/"
                >
                  Lawrence Jang
                </a>
                <span className="organizer-role">Organizer</span>
              </p>
              <a className="email-link" href={`mailto:${seminar.email}`}>
                {seminar.email}
              </a>
              <p className="team-intro">You can also reach out to</p>
              <ul
                className="team-links"
                aria-label="Other seminar contacts on X"
              >
                {seminar.contacts.map((handle) => (
                  <li key={handle}>
                    <a href={`https://x.com/${handle}`}>@{handle}</a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <footer className="site-footer">
          <p>Agents + RL + Envs</p>
          <p>
            Carnegie Mellon University <span aria-hidden="true">/</span>{' '}
            Pittsburgh, PA
          </p>
        </footer>
      </div>
    </>
  );
}

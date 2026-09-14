import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://cmu-agents-seminar.jang-lawrence.chatgpt.site',
  ),
  title: 'Agents + RL + Envs | Carnegie Mellon University',
  description:
    'A weekly research seminar at CMU on agents, reinforcement learning, and environments. Mondays, 12:30–2 PM ET in GHC 8102. Speakers and sponsors welcome.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Agents + RL + Envs at CMU',
    description:
      'A weekly research seminar. Mondays, 12:30–2 PM ET, GHC 8102. External speakers and sponsors welcome.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

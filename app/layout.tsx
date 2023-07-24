import 'tailwindcss/tailwind.css';

import { Fredoka_One, Patrick_Hand } from '@next/font/google';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { AnalyticsWrapper } from 'components/Analytics';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';

const fontDisplay = Fredoka_One({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin']
});

const fontSans = Patrick_Hand({
  variable: '--font-sans',
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={clsx(fontDisplay.variable, fontSans.variable)}
      style={{
        '--primary-blue': '#1F4290'
      }}
    >
      <head />
      <body className="bg-[var(--primary-blue)]">
        <main className="mx-auto px-6 pt-10 pb-40 lg:py-20 xl:px-0 xl:w-[1140px]">
          <Header />
          <main className="py-10">{children}</main>
          <footer className="text-brand text-center text-xl">
            <p>Copyright &copy; {new Date().getFullYear()} </p>
            <a
              href="https://twitter.com/mhdnauvalazhar"
              target="_blank"
              className="border-brand border-b-2"
              rel="noreferrer"
            >
              Nauval
            </a>
            <p>Powered by Vercel</p>
          </footer>
        </main>
        <ScrollToTop />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

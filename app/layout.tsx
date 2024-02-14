import 'tailwindcss/tailwind.css';
import clsx from 'clsx';
import { AnalyticsWrapper } from 'components/Analytics';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';
import { Fredoka, Patrick_Hand } from 'next/font/google';
import { PropsWithChildren } from 'react';

const fontDisplay = Fredoka({
  variable: '--font-display',
  weight: '500',
  subsets: ['latin'],
});

const fontSans = Patrick_Hand({
  variable: '--font-sans',
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={clsx(fontDisplay.variable, fontSans.variable)}
      style={{
        '--primary-blue': '#11285F',
      }}>
      <head />
      <body className="bg-[var(--primary-blue)]">
        <main className="mx-auto px-6 pt-10 pb-40 lg:py-10 xl:px-0 xl:w-[1140px]">
          <Header />
          <main className="py-20">{children}</main>
          <footer className="text-brand text-center text-xl">
            <p>Copyright &copy; {new Date().getFullYear()} </p>
            <a
              href="https://twitter.com/mhdnauvalazhar"
              target="_blank"
              className="border-brand border-b-2"
              rel="noreferrer">
              Nauval
            </a>
            <p>Powered by Vercel</p>
            <a
              className="text-xl text-brand underline"
              href="https://github.com/nauvalazhar/code-design"
              target="_blank"
              rel="noreferrer">
              Source on Github
            </a>
          </footer>
        </main>
        <ScrollToTop />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

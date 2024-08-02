import 'tailwindcss/tailwind.css';

import clsx from 'clsx';
import { Metadata } from 'next';
import { Fredoka, Patrick_Hand } from 'next/font/google';
import { PropsWithChildren } from 'react';

import { AnalyticsWrapper } from 'components/Analytics';
import ScrollToTop from 'components/ScrollToTop';

import './globals.css';

import Sidebar from 'components/Sidebar';

const fontDisplay = Fredoka({
  variable: '--font-display',
  weight: '500',
  subsets: ['latin']
});

const fontSans = Fredoka({
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    template: '%s – codedesign.dev',
    default: 'Untitled'
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={clsx(fontDisplay.variable, fontSans.variable)}
      style={{
        '--primary-blue': '#050F24'
      }}
    >
      <body>
        <main className="flex p-20">
          <Sidebar />
          <div className="pl-80 w-full">
            <div className="pl-10">{children}</div>
          </div>
          {/*<footer className="text-brand text-center text-xl">
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
          </footer>*/}
        </main>
        <ScrollToTop />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

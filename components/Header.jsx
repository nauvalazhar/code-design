'use client';

import clsx from 'clsx';
import { Files, Interfaces, Logos } from 'doodle-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavItem({ href, icon: Icon, children, active }) {
  return (
    <Link
      href={href}
      className={clsx(
        'flex flex-1 flex-col items-center gap-2 lg:flex-auto',
        'text-lg hover:text-[var(--accent)] lg:text-2xl',
        active && 'text-[var(--accent)]'
      )}
    >
      <Icon fill="currentColor" className="h-6 w-6 lg:h-10 lg:w-10" />
      {children}
    </Link>
  );
}

function Header() {
  const pathname = usePathname();

  return (
    <header
      className="flex flex-wrap items-center text-brand"
      style={{
        '--accent': '#02FD2A'
      }}
    >
      <div className="w-full lg:w-auto">
        <Link
          href={'/'}
          className="mb-2 font-display text-3xl uppercase italic lg:text-5xl"
        >
          Code The Design
        </Link>
        <div className="mt-1 text-xl leading-relaxed lg:w-7/12 lg:text-2xl">
          Level up your coding skills with hands-on design challenges.
        </div>
        <p className="mt-4">
          <a
            className="text-xl text-brand underline"
            href="https://github.com/nauvalazhar/code-design"
            target="_blank"
            rel="noreferrer"
          >
            Source on Github
          </a>
        </p>
      </div>
      <nav
        className={clsx(
          'z-10 flex gap-10 lg:ml-auto',
          'fixed bottom-0 left-0 w-full lg:static lg:w-auto',
          'bg-[var(--primary-blue)] p-4 lg:bg-transparent lg:p-0',
          'border-t-4 border-black lg:border-none'
        )}
      >
        <NavItem href="/" icon={Interfaces.Transform} active={pathname === '/'}>
          Challenges
        </NavItem>
        <NavItem
          href="/manual"
          icon={Files.FileContract}
          active={pathname === '/manual'}
        >
          Manual
        </NavItem>
        <NavItem href="https://twitter.com/mhdnauvalazhar" icon={Logos.Twitter}>
          @mhdnauvalazhar
        </NavItem>
      </nav>
    </header>
  );
}

export default Header;

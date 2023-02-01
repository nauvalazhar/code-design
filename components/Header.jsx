'use client';

import Link from 'next/link';
import { Interfaces, Logos, Files } from 'doodle-icons';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

function NavItem({ href, icon: Icon, children, active }) {
  return (
    <Link
      href={href}
      className={clsx(
        'flex flex-col items-center gap-2',
        'text-2xl hover:text-[var(--accent)]',
        active && 'text-[var(--accent)]'
      )}
    >
      <Icon width={40} height={40} fill="currentColor" />
      {children}
    </Link>
  );
}

function Header() {
  const pathname = usePathname();

  return (
    <header
      className="text-brand flex items-center"
      style={{
        '--accent': '#02FD2A',
      }}
    >
      <div>
        <Link
          href={'/'}
          className="font-display mb-2 text-5xl uppercase italic"
        >
          Code The Design
        </Link>
        <div className="w-7/12 text-2xl leading-relaxed">
          Level up your coding skills with hands-on design challenges.
        </div>
        <p className="mt-4">
          <a
            className="text-brand text-xl underline"
            href="https://github.com/nauvalazhar/code-design"
            target="_blank"
            rel="noreferrer"
          >
            Source on Github
          </a>
        </p>
      </div>
      <nav className="ml-auto flex gap-10">
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

'use client';

import clsx from 'clsx';
import { Arrow } from 'doodle-icons';
import type { Route } from 'next';
import Link from 'next/link';
// import useSound from 'use-sound';
import { usePathname } from 'next/navigation';

export function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <SidebarNav>
      <SidebarNavItem href="/" active={pathname === '/'}>
        Home
      </SidebarNavItem>
      <SidebarNavItem
        href="/challenges"
        active={pathname.startsWith('/challenge')}
      >
        Challenges
      </SidebarNavItem>
      <SidebarNavItem href="/construction">Submissions</SidebarNavItem>
      <SidebarNavItem href="/construction">Maps</SidebarNavItem>
      <SidebarNavItem href="/construction" active={pathname.startsWith('/me')}>
        Profile
      </SidebarNavItem>
    </SidebarNav>
  );
}

export function SidebarNav({ children }: { children: React.ReactNode }) {
  return <nav className={clsx('flex flex-col gap-8 mt-10')}>{children}</nav>;
}

type SidebarNavItemProps = {
  children: React.ReactNode;
  href: Route;
  active?: boolean;
};

export function SidebarNavItem({
  children,
  href,
  active
}: SidebarNavItemProps) {
  // const [play, { stop }] = useSound('/nav-sfx-2.mp3');

  return (
    <Link
      href={href}
      // onMouseEnter={() => play()}
      // onMouseLeave={() => stop()}
      className={clsx(
        'group flex items-center text-xl hover:text-brand',
        active && 'text-brand font-semibold'
      )}
    >
      <div className="w-6 mr-4">
        <Arrow.ChevronsRight
          className={clsx(
            'w-6 transition-all',
            active
              ? 'text-brand opacity-100'
              : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
          )}
          fill="currentColor"
        />
      </div>
      {children}
    </Link>
  );
}

export function SidebarLittleNav({
  children,
  href,
  active
}: SidebarNavItemProps) {
  // const [play, { stop }] = useSound('/nav-sfx-3.mp3');

  return (
    <Link
      href={href}
      // onMouseEnter={() => play()}
      // onMouseLeave={() => stop()}
      className={clsx('hover:text-brand', active && 'text-brand font-semibold')}
    >
      {children}
    </Link>
  );
}

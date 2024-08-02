import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/codedesign-logo.png';

import { SidebarLittleNav, SidebarNavigation } from 'components/SidebarNav';

export default function Sidebar() {
  return (
    <aside className="w-80 fixed flex flex-col h-full top-0 pt-20 pb-10">
      <Link href="/">
        <Image src={logo} alt="logo" width={315} />
      </Link>
      <p className="text-brand mt-4 leading-relaxed">
        Level up your coding skills with hands-on design quests.
      </p>
      <SidebarNavigation />
      <nav className="flex flex-col gap-4 mt-8">
        <SidebarLittleNav href="/manual">Manual</SidebarLittleNav>
        <SidebarLittleNav href="/construction">Options</SidebarLittleNav>
        <SidebarLittleNav href="/construction">Credits</SidebarLittleNav>
        <SidebarLittleNav href="/construction">Repository</SidebarLittleNav>
      </nav>
      <footer className="mt-auto text-sm text-white/60">
        a project by{' '}
        <a
          href="https://twitter.com/mhdnauvalazhar"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          Nauval 🐨
        </a>
      </footer>
    </aside>
  );
}

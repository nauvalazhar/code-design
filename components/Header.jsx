"use client";

import Link from "next/link";
import { Interfaces, Logos, Files } from "doodle-icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function NavItem({ href, icon: Icon, children, active }) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center flex-col gap-2",
        "text-2xl hover:text-[var(--accent)]",
        active && "text-[var(--accent)]"
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
      className="flex items-center text-brand"
      style={{
        "--accent": "#02FD2A",
      }}
    >
      <div>
        <Link
          href={"/"}
          className="text-5xl mb-2 font-display uppercase italic"
        >
          Code The Design
        </Link>
        <div className="w-7/12 leading-relaxed text-2xl">
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
      <nav className="ml-auto flex gap-10">
        <NavItem href="/" icon={Interfaces.Transform} active={pathname === "/"}>
          Challenges
        </NavItem>
        <NavItem
          href="/manual"
          icon={Files.FileContract}
          active={pathname === "/manual"}
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

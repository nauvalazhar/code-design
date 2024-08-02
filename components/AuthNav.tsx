'use client';

import { BoxTab, BoxTabs } from 'components/Box';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AuthNavs = () => {
  const pathname = usePathname();

  return (
    <BoxTabs>
      <BoxTab asChild active={pathname === '/me'}>
        <Link href="/me">Profile</Link>
      </BoxTab>
      <BoxTab asChild active={pathname.startsWith('/me/submission')}>
        <Link href="/me/submissions">Submissions</Link>
      </BoxTab>
    </BoxTabs>
  );
};

export default AuthNavs;

import AuthNavs from 'components/AuthNav';
import Box, { BoxTab, BoxTabs } from 'components/Box';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <AuthNavs />
      {children}
    </Box>
  );
}

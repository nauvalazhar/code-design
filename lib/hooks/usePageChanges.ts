'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function usePageChanges(callback) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    callback();
  }, [pathname, searchParams, callback]);
}

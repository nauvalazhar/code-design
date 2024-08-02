'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

/*
 * Improved version of useSearchParams hook
 * since it doesn't allow to modify the search params.
 *
 */

export function useSearchParamsManipulator(options?) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();

  function push() {
    const search = params.toString();
    router.push(`${pathname}?${search}`, options);
  }

  function setSearchParams(newParams: Record<string, string>) {
    for (const key in newParams) {
      if (newParams[key] === undefined) {
        params.delete(key);
      } else {
        params.set(key, newParams[key]);
      }
    }

    push();
  }

  function deleteSearchParams(keys: string[]) {
    for (const key of keys) {
      params.delete(key);
    }

    push();
  }

  function clearSearchParams() {
    for (const key of params.keys()) {
      params.delete(key);
    }

    push();
  }

  return {
    searchParams: params,
    setSearchParams,
    deleteSearchParams,
    clearSearchParams
  };
}

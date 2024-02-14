import { clsx, type ClassValue } from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

/*
 * Improved version of useSearchParams hook
 * since it doesn't allow to modify the search params.
 *
 */

export function useSearchParamsManipulator() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();

  function push() {
    const search = params.toString();
    router.push(`${pathname}?${search}`);
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
    clearSearchParams,
  };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUniqueName() {
  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    length: 3,
    separator: '-',
    style: 'lowerCase',
  });

  return randomName;
}

export function dateFormat(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(date);
}

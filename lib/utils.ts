import { clsx, type ClassValue } from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator
} from 'unique-names-generator';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUniqueName() {
  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    length: 3,
    separator: '-',
    style: 'lowerCase'
  });

  return randomName;
}

export function dateFormat(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium'
  }).format(date);
}

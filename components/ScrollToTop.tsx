'use client';

import clsx from 'clsx';
import { Arrow } from 'doodle-icons';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={clsx(
        'fixed bottom-28 lg:bottom-10 right-10',
        'bg-brand border-2 border-black py-3 px-2',
        'hover:-translate-y-1 transition-transform',
        isVisible ? 'block' : 'hidden'
      )}
      style={{ boxShadow: '4px 4px 0 #000' }}
      onClick={scrollToTop}
    >
      <Arrow.ArrowSingleUp width="30" aria-hidden="true" />
    </button>
  );
}

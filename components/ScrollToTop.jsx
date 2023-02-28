'use client';

import { Arrow } from 'doodle-icons';
import { useEffect, useState } from 'react';

export default function ScrollToTop({}) {
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
      className={`fixed bottom-10 right-10 bg-brand p-1.5 hover:-translate-y-1 transition-transform w-10 h-10 ${
        isVisible ? 'block' : 'hidden'
      }`}
      style={{ boxShadow: '5px 5px 0 #000' }}
      onClick={scrollToTop}
    >
      <Arrow.ArrowSingleUp width="30" aria-hidden="true" />
    </button>
  );
}

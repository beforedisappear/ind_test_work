'use client';

import { type RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  //focuseout event leads to double rerender
  //due to double setState call
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback]);
};

import React, { useEffect, useRef } from 'react';

const useClickOutside = <T extends HTMLElement>(ctx: string, callback: () => void) => {
  const ref = useRef<T>(null);

  const handler: EventListener = (event) => {
    const target = event.target as HTMLElement | null;
    if (ref.current && !ref.current.contains(target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return ref;
};

export default useClickOutside;

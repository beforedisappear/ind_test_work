'use client';
import { cn } from '@/utils';

import { Link, Button } from '@/ui';

import { headerMenuLinks } from './HeaderMenu.data';
import { useId, useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface Props {}

export function HeaderMenu({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  useOutsideClick(ref, () => setShowMenu(false));

  return (
    <div ref={ref} className='flex relative'>
      <Button
        className='hidden sm:block'
        onClick={() => setShowMenu(showMenu => !showMenu)}
      >
        Меню
      </Button>

      <ul
        className={cn(
          `flex w-full gap-x-6 max-w-[244px]
          sm:hidden sm:bg-gray sm:w-40 sm:flex-col
          sm:absolute sm:top-[115%] sm:right-0 sm:z-1 sm:p-1 sm:rounded-md sm:gap-y-2 sm:shadow`,
          { 'sm:flex': showMenu },
        )}
      >
        {headerMenuLinks.map(el => {
          const id = useId();

          return (
            <li key={id} className='flex justify-center items-center flex-grow'>
              <Link href={el.url} className=''>
                {el.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { cn } from '@/utils';

import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: Props) {
  const { children, className, ...restProps } = props;

  const classNames = cn(
    className,
    'bg-black text-lightFontColor py-1 px-2 rounded h-[28px]',
  );

  return (
    <button {...restProps} className={classNames}>
      {children}
    </button>
  );
}

import { cn } from '@/utils';

import NextLink, { type LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface IProps extends LinkProps, PropsWithChildren {
  className?: string;
}

export function Link(props: IProps) {
  const { children, className, ...restProps } = props;

  const fontStyles = 'text-black text-base font-normal tracking-tightest';

  const classNames = cn(className, fontStyles);

  return (
    <NextLink {...restProps} className={classNames}>
      {children}
    </NextLink>
  );
}

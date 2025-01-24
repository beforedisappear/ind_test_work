import Logo from '../../assets/icons/logo.svgr';

import { Link } from '@/ui';

interface Props {}

export function HeaderLogo({}: Props) {
  return (
    <Link href='/' className='flex gap-4'>
      <Logo width={28} height={28} />

      <span
        className='flex items-center text-black text-base font-normal tracking-tightest
        sm:hidden'
      >
        STEMPS
      </span>
    </Link>
  );
}

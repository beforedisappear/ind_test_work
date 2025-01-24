import { Link } from '@/ui';
import Exit from '../../assets/icons/exit.svgr';

interface Props {}

export function HeaderProfile({}: Props) {
  return (
    <Link
      href='#'
      className='flex gap-4
      sm:hidden'
    >
      <span className='flex items-center text-black font-normal tracking-tightest leading-6'>
        Вход
      </span>
      <Exit />
    </Link>
  );
}

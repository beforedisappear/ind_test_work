import { HeaderLogo } from '../headerLogo/HeaderLogo';
import { HeaderMenu } from '../headerMenu/HeaderMenu';
import { HeaderProfile } from '../headerProfile/HeaderProfile';

interface Props {}

export function Header({}: Props) {
  return (
    <header className='flex justify-between items-center h-[60px] p-4 border-y border-ligthGray'>
      <HeaderLogo />
      <HeaderMenu />
      <HeaderProfile />
    </header>
  );
}

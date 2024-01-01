import {
  GitHubLogoIcon,
  MoonIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className='w-full bg-background pt-4'>
      <div className='container flex h-16 max-w-3xl items-center justify-between'>
        <Link className='font-bold' href='/'>
          sebthegg
        </Link>
        <nav className='flex items-center space-x-1.5 sm:space-x-1'>
          <Button variant='ghost' size='icon'>
            <Link href='#'>
              <GitHubLogoIcon />
            </Link>
          </Button>
          <Button variant='ghost' size='icon'>
            <Link href='#'>
              <TwitterLogoIcon />
            </Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;

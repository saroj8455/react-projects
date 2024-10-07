import React from 'react';
import Navitem from './NavItem';

export default function Header() {
  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'React Page', link: '/react-page' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Products', link: '/products' },
  ];

  return (
    <header>
      <nav>
        <ul className='flex gap-4 align-items-center justify-content-center'>
          <Navitem navLinks={navLinks} />
        </ul>
      </nav>
    </header>
  );
}

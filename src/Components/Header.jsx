import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className='flex gap-4 align-items-center justify-content-center'>
          <li>
            <a
              href='#'
              className='font-medium text-700 hover:text-orange-700 focus:text-blue-500 active:text-blue-500'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#'
              className='font-medium text-700 hover:text-orange-700 focus:text-blue-500 active:text-blue-500'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href='#'
              className='font-medium text-700 hover:text-orange-700 focus:text-blue-500 active:text-blue-500'
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href='#'
              className='font-medium text-700 hover:text-orange-700 focus:text-blue-500 active:text-blue-500'
            >
              Products
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navitem({ navLinks }) {
  console.log(navLinks);

  return (
    <>
      {navLinks.map((item, index) => (
        <li key={index}>
          <Link
            to={item.link}
            className='font-medium text-700 hover:text-orange-700 focus:text-blue-500 active:text-blue-500'
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}

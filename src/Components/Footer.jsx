import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className='surface-section px-4 md:px-6 lg:px-8'>
        <div className='py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between'>
          <div>
            <img
              src='https://blocks.primereact.org/demo/images/blocks/logos/bastion-700.svg'
              alt='Image'
              height={40}
            />
            <div className='mt-2 line-height-3'>
              © 2021 Bastion, Inc. All rights reserved
            </div>
          </div>
          <div className='mt-3 sm:mt-0'>
            <a className='cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700'>
              <i className='pi pi-twitter text-xl' />
            </a>
            <a className='cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700'>
              <i className='pi pi-facebook text-xl' />
            </a>
            <a className='cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700'>
              <i className='pi pi-github text-xl' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

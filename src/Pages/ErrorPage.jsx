import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Button } from 'primereact/button';
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className='surface-section px-4 py-8 md:px-6 lg:px-8'>
      <div className='flex flex-column lg:flex-row justify-content-center align-items-center gap-7'>
        <div className='text-center lg:text-right'>
          <div className='mt-6 mb-3 font-bold text-6xl text-900'>
            Are you lost?
          </div>
          <p className='text-700 text-3xl mt-0 mb-6'>
            Sorry, we could not find the page.
          </p>
          <div className='card flex flex-wrap justify-content-center gap-3'>
            <Button label='Go back to home page' icon='pi pi-home' />
          </div>
        </div>
        <div>
          <img
            src='https://blocks.primereact.org/demo/images/blocks/feedback/404-rocket.png'
            alt='Image'
            className='w-full md:w-28rem'
          />
        </div>
      </div>
    </div>
  );
}

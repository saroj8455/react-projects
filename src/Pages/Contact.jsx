import React, { lazy, Suspense } from 'react';
import PageLayout from './PageLayout';
import SampleCard from '../Components/SampleCard';
import Register from './Register';

export default function Contact() {
  const Sample = lazy(() => import('../Components/SampleCard'));

  return (
    <PageLayout>
      <Register />

      <article className='mt-3'>
        <Suspense fallback={<div className='text-3xl'>Loading......</div>}>
          <Sample />
        </Suspense>
      </article>
    </PageLayout>
  );
}

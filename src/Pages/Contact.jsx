import React, { lazy, Suspense } from 'react';
import PageLayout from './PageLayout';
import SampleCard from '../Components/SampleCard';

export default function Contact() {
  const Sample = lazy(() => import('../Components/SampleCard'));

  return (
    <PageLayout>
      <article>
        <h1>Contact</h1>
      </article>
      <article>
        <Suspense fallback={<div className='text-3xl'>Loading......</div>}>
          <Sample />
        </Suspense>
      </article>
    </PageLayout>
  );
}

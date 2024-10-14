import React from 'react';
import PageLayout from '../Pages/PageLayout';
import CustomerPage from './CustomerPage';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './Fallback';

export default function Customer() {
  return (
    <PageLayout>
      <div>Customer</div>
      {/* <ErrorBoundary fallback={<div>Something went wrong!....</div>}> */}
      <ErrorBoundary FallbackComponent={Fallback}>
        <CustomerPage />
      </ErrorBoundary>
    </PageLayout>
  );
}

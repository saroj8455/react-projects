import React, { useEffect, useState } from 'react';

export default function CustomerPage() {
  const [customer, setCustomer] = useState({});
  const [isInitialized, setIsInitialized] = useState(false); // Track initialization

  const initCustomer = () => {
    console.log(2);
    setCustomer((prev) => ({ ...prev, name: 'Jhon Deo' }));
  };

  useEffect(() => {
    initCustomer();
    setIsInitialized(true); // Set initialized after init
  }, []); // Only run initCustomer once, on mount

  useEffect(() => {
    if (isInitialized && Object.keys(customer).length === 0) {
      console.log(1);
      throw new Error('Something went wrong!');
    }
  }, [customer, isInitialized]); // Run this effect after `customer` is updated and initialized

  return (
    <article>
      <div className='text-2xl'>Customer Fetch Data From API </div>
      <div className='text-lg mt-3 text-500'>{customer.name}</div>
    </article>
  );
}

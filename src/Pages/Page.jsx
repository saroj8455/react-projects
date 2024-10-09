import React, { useCallback, useState } from 'react';
import Expensive from '../Components/Expensive';

import { Button } from 'primereact/button';

export default function Page({ children }) {
  const [counter, setCounter] = useState(0);

  // Memoize the complex function to avoid re-creation on every render
  const complex = useCallback(() => {
    const startTime = performance.now();
    while (performance.now() - startTime < 500) {
      // do the expensive calc
    }
  }, []); // Add dependency array to ensure the function is created only once

  return (
    <div className='container'>
      <h3>Common Page Component</h3>
      <p>This is a common page component.</p>

      <div className='text-3xl'>{counter}</div>

      <Button label='increase' onClick={() => setCounter((prev) => prev + 1)} />

      <div className='mt-5'>
        <Expensive complex={complex} />
        {children}
      </div>
    </div>
  );
}

import React, { useCallback, useEffect } from 'react';

function Expensive({ complex }) {
  console.log('every state change', Math.random());

  // const complex = useCallback(() => {
  //   const startTime = performance.now();
  //   while (performance.now() - startTime < 500) {
  //     // do the expensive calc
  //   }
  // });
  // complex();

  // const startTime = performance.now();
  // while (performance.now() - startTime < 500) {
  //   // do the expensive calc
  // }

  const testEmpty = (params) => {
    if (params) {
      console.log('Hi');
    } else {
      console.log('By');
    }
  };

  useEffect(() => {
    console.log(Math.random());
    complex(); // Run the complex calculation when the component mounts
    testEmpty(true);
  }, [complex]);

  return (
    <div>
      <h3>Expensive claculation done here </h3>
    </div>
  );
}

export default React.memo(Expensive);

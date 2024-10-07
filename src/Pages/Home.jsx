import React, { useCallback, useState } from 'react';
import { Button, Checkbox } from '../Prime/index';
import Explore from '../Components/Explore';
export default function Home() {
  const [checked, setChecked] = useState(false);
  const [paymentId, setPaymentId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(false);

  const receivePayment = useCallback((paymentId) => {
    console.log(paymentId);
    setPaymentId(paymentId);
    setPaymentStatus(true);
  });

  return (
    <section>
      <div className='container'>
        <article>
          <h1 className='text-2xl mb-4'>
            React Interview Round Practical Session ✈️.
          </h1>
          <p>
            This repository is designed to prepare for practical React.js
            interview rounds. It includes hands-on exercises and real-world
            scenarios that test essential React skills required for a senior
            developer role.
          </p>
        </article>
        <article>
          <h1 className='text-2xl mb-4'>Install the below dependency.</h1>
          <Button label='Hello React' />
          <div className='card flex justify-content-center'>
            <Checkbox
              inputId='ingredient1'
              onChange={(e) => setChecked(e.checked)}
              checked={checked}
            ></Checkbox>
            <label htmlFor='ingredient1' className='ml-2'>
              Cheese
            </label>
          </div>
        </article>
        <article>
          <h1 className='text-2xl mb-4'>
            Run the below command in your terminal to start the application.
          </h1>
          <p
            className={`text-900 p-2 ${
              paymentStatus ? 'bg-orange-400' : 'bg-green-700'
            } `}
          >
            {paymentId}
          </p>
          <Explore receivePayment={receivePayment} />
        </article>
      </div>
    </section>
  );
}

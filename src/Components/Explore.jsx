import React from 'react';
import { Button } from '../Prime/index';
import { v6 as uuidv6 } from 'uuid';

export default function Explore({ receivePayment }) {
  const updatePayment = () => {
    alert('Update payment');
    const paymentId = uuidv6();
    console.log(paymentId);
    receivePayment(paymentId);
    // return paymentId;
  };

  return (
    <div>
      <h2>Explore Button Group</h2>
      <Button label='Function as props' onClick={updatePayment} />
    </div>
  );
}

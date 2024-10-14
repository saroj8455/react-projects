import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Fallback({ error }) {
  console.log('fallback - ', error.message);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [error]);

  return (
    <div className='card flex justify-content-center'>
      <Dialog
        header={error.message}
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <p className='m-0'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Dialog>
    </div>
  );
}

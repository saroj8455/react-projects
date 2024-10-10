import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import React, { useEffect, useRef } from 'react';

export default function Profile({
  title = 'Jhon Default',
  showGithub = () => alert('default method props'),
}) {
  const effectRan = useRef(false);
  const usersAPI = 'https://fakestoreapi.com/users';

  useEffect(() => {
    // console.log('useEffect called');
    const abortCtrl = new AbortController();
    const createFakeUsers = async () => {
      const response = await fetch(usersAPI, { signal: abortCtrl.signal });
      const data = await response.json();

      // console.log(data);
    };

    if (effectRan.current) {
      createFakeUsers();
    }

    return () => {
      // console.log('unmounted');
      // clean up code goes here
      // abortCtrl.abort();
      effectRan.current = true;
    };
  }, []);
  return (
    <div className='card'>
      <Card title={title}>
        <p className='m-0'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
        <Button
          onClick={showGithub}
          icon='pi pi-user'
          label='Github'
          className='mt-4'
        />
      </Card>
    </div>
  );
}

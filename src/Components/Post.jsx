import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';

import { Rating } from 'primereact/rating';
export default function Post({ data }) {
  // check empty object and render a progress bar
  const checkEmpty = (params) => Object.keys(params).length === 0;

  const header = (
    <img
      alt='Card'
      src='https://i.ytimg.com/vi/kkxE4ttcHUo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5nYhB5h9XrIs7DmfLgDWf7G9dJA'
    />
  );
  const footer = (
    <>
      <Button className='w-full' label='Read more' />
    </>
  );

  if (checkEmpty(data))
    return (
      <div className='container text-2xl text-400'>
        No data available! Please wait.....
      </div>
    );

  return (
    <div className='container'>
      <div className='card'>
        <Card
          title='But Art is a punitive sentence, not a'
          subTitle='powered by dummyjson api'
          footer={footer}
          header={header}
          className='md:w-25rem'
        >
          <div className='mb-4 flex gap-3'>
            {data.tags.map((tag, index) => (
              <Chip key={index} label={tag} />
            ))}
          </div>
          <div className='card flex align-items-center gap-1  mb-4'>
            {/* <Rating value={data.rating} readOnly cancel={false} /> */}
            <Button
              icon='pi pi-thumbs-up-fill'
              label={data.reactions.likes}
              rounded
              text
              severity='help'
              aria-label='Favorite'
            />
            <Button
              icon='pi pi-thumbs-down-fill'
              label={data.reactions.dislikes}
              rounded
              text
              severity='help'
              aria-label='Favorite'
            />
            <Button
              icon='pi pi-eye'
              label={data.views}
              rounded
              text
              severity='help'
              aria-label='Favorite'
            />
          </div>

          <p className='m-0  '>
            {data.body.slice(0, data.body.length / 2)} ...
            {/* {data.body} */}
          </p>
        </Card>
      </div>
    </div>
  );
}

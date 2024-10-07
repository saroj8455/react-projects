import React from 'react';
import Profile from '../Components/Profile';

export default function ReactPage() {
  const jhonProfile = {
    title: 'Jhon Deo',
    showGithub: () => {
      alert('github link');
    },
  };

  return (
    <section>
      <div className='container'>
        <h3 className='text-2xl text-400'>ReactPage</h3>
        <hr />
        <Profile
          title={jhonProfile.title}
          showGithub={jhonProfile.showGithub}
        />
      </div>
    </section>
  );
}

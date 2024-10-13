import React, { Children } from 'react';

export default function PageLayout({ children }) {
  return (
    <section>
      <div className='container'>{children}</div>
    </section>
  );
}

import * as React from 'react';

// import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='layout pt-20'>
      {/* <Header/> */}

      <main>{children}</main>
    </div>
  );
}

import React from 'react';
import { Logo, Navbar } from './index';

export default function Layout({ children }) {
  return (
    <main>
      <div className="lg:grid grid-cols-6 h-full">
        <div className="hidden lg:block">
          <Logo />
          <Navbar />
        </div>
        <div className="col-start-2 col-end-7 mt-12 mx-4 md:mx-12 lg:mx-14 xl:mx-20 2xl:mx-36">
          {children}
        </div>
      </div>
    </main>
  );
}

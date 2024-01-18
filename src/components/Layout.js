import React from 'react';
import { Logo, Navbar } from './index';

export default function Layout({ children }) {
  return (
    <main>
      <div className="grid grid-cols-6 h-full">
        <div>
          <Logo />
          <Navbar />
        </div>
        <div className="col-start-2 col-end-7 mt-12 mx-36">{children}</div>
      </div>
    </main>
  );
}

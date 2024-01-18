import React from 'react';
import { Logo, MobileNavbar, Navbar } from './index';

export default function Layout({ children }) {
  return (
    <main>
      <MobileNavbar />
      <div className="md:grid md:grid-cols-3  xl:grid-cols-6 h-full">
        <div className="hidden md:block">
          <Logo />
          <Navbar />
        </div>
        <div className="col-start-2 col-end-7 mt-12 mx-4 md:mx-12 lg:mx-14 xl:mx-20 2xl:mx-36">
          <div className=" md:hidden">
            <Logo />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}

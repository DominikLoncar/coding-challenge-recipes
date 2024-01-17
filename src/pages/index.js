import * as React from 'react';
import { Logo, Navbar, TitleAndSearchBar, Hero } from '../components/index';

const IndexPage = () => {
  return (
    <main>
      <div className="grid grid-cols-6 h-full">
        <div>
          <Logo />
          <Navbar />
        </div>
        <div className="col-start-2 col-end-7">
          <TitleAndSearchBar />
          <Hero />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

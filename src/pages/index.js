import * as React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

const IndexPage = () => {
  return (
    <main>
      <div className="grid grid-cols-6 h-full">
        <div>
          <Logo />
          <Navbar />
        </div>
        <div className="col-start-2 col-end-7">
          <div className="grid grid-cols-2">
            <Title />
            <SearchBar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

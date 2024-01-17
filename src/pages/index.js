import * as React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

const IndexPage = () => {
  return (
    <main>
      <div className="grid grid-cols-2">
        <div>
          <Logo />
          <Navbar />
        </div>
        <div>
          <Title />
          <SearchBar />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

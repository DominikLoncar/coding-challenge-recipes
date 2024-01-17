import * as React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

const IndexPage = () => {
  return (
    <main>
      <Logo />
      <Navbar />
      <Title />
      <SearchBar />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

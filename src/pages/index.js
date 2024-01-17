import * as React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

const IndexPage = () => {
  return (
    <main>
      <Logo />
      <Navbar />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

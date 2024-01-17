import * as React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Title from '../components/Title';

const IndexPage = () => {
  return (
    <main>
      <Logo />
      <Navbar />
      <Title />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

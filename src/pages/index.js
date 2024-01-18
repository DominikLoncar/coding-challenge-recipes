import * as React from 'react';
import {
  Logo,
  Navbar,
  TitleAndSearchBar,
  Hero,
  Card,
  Subtitle,
  ArrowButton,
} from '../components/index';

const IndexPage = () => {
  return (
    <main>
      <div className="grid grid-cols-6 h-full">
        <div>
          <Logo />
          <Navbar />
        </div>
        <div className="col-start-2 col-end-7 mt-12 mx-36">
          <TitleAndSearchBar />
          <Hero />
          <div className="flex flex-auto">
            <Subtitle>New Recipes</Subtitle>
            <ArrowButton className="ml-auto" />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            <Card tags={['Vegetarian', 'French']} difficulty={2} />
            <Card tags={['Vegetarian', 'French']} difficulty={2} />
            <Card tags={['Vegetarian', 'French']} difficulty={2} />
            <Card tags={['Vegetarian', 'French']} difficulty={2} />
            <Card tags={['Vegetarian', 'French']} difficulty={2} />
            <Card tags={['Vegetarian', 'French']} difficulty={2} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

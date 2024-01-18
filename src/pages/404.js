import * as React from 'react';
import { Link } from 'gatsby';
import { Layout, Subtitle, Title } from '../components';

export default function Recipes() {
  return (
    <Layout>
      <Title>Woops 404!</Title>
      <div className="my-6"></div>
      <Subtitle>
        <Link to="/">Go Home</Link>
      </Subtitle>
    </Layout>
  );
}

import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/">Recipes</Link>
        </li>
        <li>
          <Link to="/">Community</Link>
        </li>
        <li>
          <Link to="/">Saved recipes</Link>
        </li>
      </ul>
    </div>
  );
}

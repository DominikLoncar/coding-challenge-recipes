import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  return (
    <div className="bg-light-gray text-dark-gray">
      <ul className="flex flex-col gap-6">
        <li className="hover:text-dark-green">
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
        <li>
          <Link to="/">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

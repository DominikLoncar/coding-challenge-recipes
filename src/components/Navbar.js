import React from 'react';
import { Link } from 'gatsby';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  const navbarItems = [
    {
      link: 'homepage',
      text: 'Homepage',
    },
    {
      link: 'recipes',
      text: 'Recipes',
    },
    {
      link: 'community',
      text: 'Community',
    },
    {
      link: 'saved-recipes',
      text: 'Saved recipes',
    },
    {
      link: 'settings',
      text: 'Settings',
    },
  ];

  return (
    <div className="bg-light-gray text-dark-gray">
      <ul className="flex flex-col gap-6">
        <NavbarItem link="" />
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

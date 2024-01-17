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
        {navbarItems.map(item => (
          <NavbarItem link={item.link} text={item.text} />
        ))}
      </ul>
    </div>
  );
}

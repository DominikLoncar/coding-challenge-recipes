import React from 'react';
import { Link } from 'gatsby';
import NavbarItem from './NavbarItem';
import { GoHomeFill } from 'react-icons/go';

export default function Navbar() {
  const navbarItems = [
    {
      link: 'homepage',
      text: 'Homepage',
      icon: 'home',
    },
    {
      link: 'recipes',
      text: 'Recipes',
      icon: 'home',
    },
    {
      link: 'community',
      text: 'Community',
      icon: 'home',
    },
    {
      link: 'saved-recipes',
      text: 'Saved recipes',
      icon: 'home',
    },
    {
      link: 'settings',
      text: 'Settings',
      icon: 'home',
    },
  ];

  /*export function iconGenerator(iconName) {
    return <GoHomeFill />;
  }*/

  return (
    <div className="bg-light-gray text-dark-gray h-full">
      <ul className="flex flex-col gap-6 pt-8 h-full">
        {navbarItems.map(item => (
          <NavbarItem link={item.link} text={item.text}>
            <GoHomeFill size={24} />
          </NavbarItem>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';
import { Link } from 'gatsby';
import NavbarItem from './NavbarItem';
import { GoHomeFill } from 'react-icons/go';
import { TbSettingsFilled } from 'react-icons/tb';
import { FaHeart } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa6';

import '../styles/navbar.css';

export default function Navbar() {
  const navbarItems = [
    {
      link: '',
      text: 'Homepage',
      iconName: 'home',
    },
    {
      link: 'recipes',
      text: 'Recipes',
      iconName: 'book',
    },
    {
      link: 'community',
      text: 'Community',
      iconName: 'people',
    },
    {
      link: 'saved-recipes',
      text: 'Saved recipes',
      iconName: 'heart',
    },
    {
      link: 'settings',
      text: 'Settings',
      iconName: 'settings',
    },
  ];

  return (
    <div className="navbar bg-light-gray text-dark-gray h-full rounded-lg m-2">
      <ul className="flex flex-col gap-6 pt-8 h-full">
        {navbarItems.map(item => (
          <NavbarItem link={item.link} text={item.text}>
            {iconGenerator(item.iconName)}
          </NavbarItem>
        ))}
      </ul>
    </div>
  );
}

function iconGenerator(iconName = '', size = 24) {
  switch (iconName) {
    case 'home':
      return <GoHomeFill size={size} />;
    case 'book':
      return <FaBookOpen size={size} />;
    case 'people':
      return <MdPeopleAlt size={size} />;
    case 'heart':
      return <FaHeart size={size} />;

    case 'settings':
      return <TbSettingsFilled size={size} />;
    default:
      return <></>;
      break;
  }
}

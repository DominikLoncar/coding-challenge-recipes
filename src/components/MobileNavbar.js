import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { TbSettingsFilled } from 'react-icons/tb';
import { FaHeart } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa6';
import { NavbarItem } from './index';

export default function MobileNavbar() {
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
    <div className=" md:hidden bg-porcelain p-6 m-4 mb-2 pb-8 pr-16 rounded-full fixed bottom-0 w-[calc(100%-30px)] mr-10 z-50">
      <ul className="flex justify-between p-y-4 text-center content-center justify-center">
        {navbarItems.map(item => (
          <NavbarItem link={item.link}>
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

import React from 'react';
import { Link } from 'gatsby';

export default function NavbarItem({ link = '', text = 'Lorem' }) {
  const linkWithSlash = `/${link}`;

  return (
    <li className="hover:text-dark-green">
      <Link to={linkWithSlash}>{text}</Link>
    </li>
  );
}

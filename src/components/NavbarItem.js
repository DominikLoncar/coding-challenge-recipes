import React, { Children } from 'react';
import { Link } from 'gatsby';

export default function NavbarItem({ link = '', text = 'Lorem', children }) {
  const linkWithSlash = `/${link}`;

  return (
    <li className="hover:text-dark-green">
      <Link to={linkWithSlash}>
        <div className="flex gap-4 pl-8 pt-2">
          <span>{children}</span> <span>{text}</span>
        </div>
      </Link>
    </li>
  );
}

import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'gatsby';

export default function ArrowButton({
  text = 'Button',
  link = '/',
  className = '',
}) {
  const buttonClassName = `${className} font-dm-sans font-medium text-green text-lg pl-6 px-0 py-2 rounded-md hover:opacity-80 transition-hover transition-opacity pb-4`;

  return (
    <Link className={buttonClassName} to={link}>
      <div className="flex gap-2 items-center">
        <span>{text}</span> <FaArrowRight />
      </div>
    </Link>
  );
}

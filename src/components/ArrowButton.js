import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function ArrowButton({
  text = 'Button',
  link = '',
  className = '',
}) {
  const buttonClassName = `${className} font-dm-sans font-medium text-green text-lg pl-6 px-0 py-2 rounded-md hover:opacity-80 transition-hover transition-opacity`;

  return (
    <button className={buttonClassName}>
      <div className="flex gap-2 items-center">
        <span>{text}</span> <FaArrowRight />
      </div>
    </button>
  );
}

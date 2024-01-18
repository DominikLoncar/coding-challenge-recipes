import React from 'react';

export default function Tag({ children = 'Lorem' }) {
  return (
    <span className="mr-1 font-dm-sans font-medium px-2 py-0.5 text-dark-blue bg-light-blue rounded-md hover:opacity-80 cursor-pointer transition-opacity">
      {children}
    </span>
  );
}

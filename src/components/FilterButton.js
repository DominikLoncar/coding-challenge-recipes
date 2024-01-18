import React from 'react';
import { FaBook } from 'react-icons/fa6';

export default function FilterButton({ name = 'ButtonName' }) {
  const id = `${name.toLowerCase().replace(/\s+/g, '-')}-radio-button`;

  return (
    <span className="text-sm flex items-center font-dm-sans bg-light-gray text-dark-gray border-athens-gray border-2 px-4 py-1 rounded-md active:bg-light-green active:text-white m-2 mr-0">
      <FaBook className="text-gray m-0 p-0 mr-4" size={14} />
      <input
        type="radio"
        id={id}
        name={id}
        value={name}
        className="hidden"
      ></input>
      <label htmlFor={id}>{name}</label>
    </span>
  );
}

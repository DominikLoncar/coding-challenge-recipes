import React from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar({
  placeholder = 'Search for any recipes...',
}) {
  const handleInput = e => e.preventDefault;

  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        id="search-recipes"
        placeholder={placeholder}
        className="rounded-md border-[1px] border-ghost px-4 py-2 pr-10 text-midnight-blue w-full focus:border-dark-green focus:border-2 focus:shadow-inner hover:border-green outline-none"
        onClick={handleInput}
      />
      <div className="-ml-8 pointer-events-none">
        <FiSearch color="#727E8D" size={16} />
      </div>
    </div>
  );
}

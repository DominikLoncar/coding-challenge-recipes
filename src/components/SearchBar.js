import React, { useRef, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FilterButton } from './index';

export default function SearchBar({
  placeholder = 'Search for any recipes...',
}) {
  const inputRef = useRef(null);
  const emptyDivRef = useRef(null);

  const [inputFocused, setInputFocused] = useState(false);
  const [isOutsideClicked, setIsOutsideClicked] = useState(false);

  useEffect(() => {
    const handleOutsideClick = event => {
      // Check if the clicked element is outside the div
      if (
        emptyDivRef.current &&
        !emptyDivRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setInputFocused(false);
      } else {
        setInputFocused(true);
      }
    };

    // Add event listener for click outside the div
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [emptyDivRef]);

  useEffect(() => {
    const handleResize = () => {
      if (inputRef.current && emptyDivRef.current) {
        const inputWidth = inputRef.current.offsetWidth;
        emptyDivRef.current.style.width = `${inputWidth}px`;
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [inputFocused]);

  const handleInput = () => {
    setInputFocused(true);
  };

  const handleEmptyDivInteraction = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };
  return (
    <div className=" w-full font-dm-sans">
      <div className="m-0 p-0 w-full">
        <div className="flex items-center">
          <input
            type="text"
            id="search-recipes"
            placeholder={placeholder}
            className="rounded-md border-[1px] border-ghost px-4 py-2 pr-10 text-midnight-blue w-full focus:border-dark-green focus:border-2 focus:shadow-inner hover:border-green outline-none"
            onClick={handleInput}
            /*onBlur={handleBlur}*/
            ref={inputRef}
          />
          <div className="-ml-8 pointer-events-none">
            <FiSearch color="#727E8D" size={16} />
          </div>
        </div>
        <div className="w-full">
          {inputFocused && (
            <div
              ref={emptyDivRef}
              onClick={handleInput}
              onMouseDown={handleEmptyDivInteraction}
              className="bg-white border-2 border-light-gray shadow-lg mt-2 min-w-64 ml-0 rounded-lg absolute z-50"
            >
              <div className="flex">
                <FilterButton name="Recipes" />
                <FilterButton name="Category" />
                <FilterButton name="Area" />
                <FilterButton name="Ingredient" />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-light-gray w-[calc(100%-18px)] h-96 mx-2 mb-2 mr-8 relative">
                <p className="text-gray">Start Searching for your recipe</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

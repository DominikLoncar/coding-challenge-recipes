import React from 'react';
import Title from './Title';
import SearchBar from './SearchBar';

export default function TitleAndSearchBar() {
  return (
    <div className="grid grid-cols-2">
      <Title />
      <SearchBar />
    </div>
  );
}

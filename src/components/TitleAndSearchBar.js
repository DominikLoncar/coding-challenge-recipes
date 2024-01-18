import React from 'react';
import Title from './Title';
import SearchBar from './SearchBar';

export default function TitleAndSearchBar() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <Title>Discover Recipes</Title>
      <SearchBar />
    </div>
  );
}

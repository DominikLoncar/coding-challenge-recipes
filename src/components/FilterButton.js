import React from 'react';

export default function FilterButton({ name }) {
  const id = `${name.toLowerCase().replace(/\s+/g, '-')}-radio-button`;

  return (
    <span>
      <input type="radio" id={id} name="fav_language" value="Recipes"></input>
      <label htmlFor="recipes-radio-button">Recipes</label>
    </span>
  );
}

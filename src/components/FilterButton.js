import React from 'react';

export default function FilterButton() {
  return (
    <span>
      <input
        type="radio"
        id="recipes-radio-button"
        name="fav_language"
        value="Recipes"
      ></input>
      <label htmlFor="recipes-radio-button">Recipes</label>
    </span>
  );
}

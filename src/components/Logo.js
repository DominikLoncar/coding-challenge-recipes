import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Logo() {
  return (
    <div className="bg-midnight-blue text-white rounded-lg m-2 px-4 pl-8 py-8">
      <div className="flex gap-4 items-center">
        <LogoImg />
        <div>
          <div className="text-porcelain text-lg">
            <strong>Meal Deal</strong>
          </div>
          <div className="text-aluminium text-sm">Recipes for healthy life</div>
        </div>
      </div>
    </div>
  );
}

export function LogoImg() {
  return (
    <div className="w-14">
      <StaticImage
        src="../images/logo.png"
        alt="RecipeApp Logo"
        placeholder="blurred"
      />
    </div>
  );
}

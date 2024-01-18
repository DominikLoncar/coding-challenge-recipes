import React from 'react';
import { Title, Button } from './index';
import { StaticImage } from 'gatsby-plugin-image';

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-2 bg-black-haze rounded-lg px-12 pt-10 pb-12 mt-10 mb-40">
        <div>
          <Title>
            <strong>
              Poached eggs with
              <br />
              broccoli and avocado
            </strong>
          </Title>
          <div className="my-5" />
          <Button text="View Recipe" />
        </div>
        <HeroImg />
      </div>
    </div>
  );
}

export function HeroImg() {
  return (
    <div className="max-w-96 absolute right-44 -mt-10">
      <StaticImage
        src="../images/hero-img.png"
        alt="A meal representation for the hero section"
        placeholder="blurred"
      />
    </div>
  );
}

import React from 'react';
import { Title, Button } from './index';
import { StaticImage } from 'gatsby-plugin-image';

export default function Hero() {
  return (
    <div>
      <div className="md:grid grid-cols-2 bg-black-haze rounded-lg px-12 pt-10 pb-12 mt-10 mb-40">
        <div>
          <Title>
            <strong>
              Poached eggs with
              <br />
              broccoli and avocado
            </strong>
          </Title>
          <div className="my-5" />
          <Button text="View Recipe" link="/recipes" />
        </div>
        <HeroImg />
      </div>
    </div>
  );
}

export function HeroImg() {
  return (
    <div className="-mt-28 md:mt-0 max-w-56 sm:max-w-80 md:max-w-56 lg:max-w-96 absolute right-0 md:right-8 xl:right-20 2xl:right-44 -mt-10">
      <StaticImage
        src="../images/hero-img.png"
        alt="A meal representation for the hero section"
        placeholder="blurred"
      />
    </div>
  );
}

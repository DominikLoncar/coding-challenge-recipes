import React from 'react';
import { Title, Button } from './index';
import { StaticImage } from 'gatsby-plugin-image';

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-2">
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
    <StaticImage
      src="../images/hero-img.png"
      alt="A meal representation for the hero section"
    />
  );
}

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Card({
  title = 'Lorem Ipsum',
  completionTimeInMinutes = 60,
  difficulty = 1,
  tags = [],
}) {
  return (
    <div className="grid grid-cols-3">
      <CardImg />
      <div className="col-start-2 col-end-4 bg-slate-400 ">
        <h3>{title}</h3>
        <div>
          <div>{completionTimeInMinutes}</div> <div>{difficulty}</div>
        </div>
        <div>
          {tags.map(tag => (
            <span>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardImg() {
  return (
    <div className="max-w-32">
      <StaticImage
        src="../images/peanut-butter-cheesecake.png"
        alt="Meal"
        placeholder="blurred"
      />
    </div>
  );
}

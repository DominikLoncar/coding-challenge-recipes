import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Card({
  title = 'Lorem Ipsum',
  completionTimeInMinutes = 20,
  difficulty = 1,
  tags = [],
}) {
  let completionTimeFormatted = '';

  if (completionTimeInMinutes >= 60) {
    completionTimeFormatted = `${Math.floor(completionTimeInMinutes / 60)}h`;
  }
  if (completionTimeInMinutes < 60) {
    completionTimeFormatted = `${completionTimeInMinutes}m`;
  } else if (completionTimeInMinutes % 60 > 0) {
    completionTimeFormatted = `${completionTimeFormatted} ${
      completionTimeInMinutes % 60
    }m`;
  }

  return (
    <div className="grid grid-cols-3">
      <CardImg />
      <div className="col-start-2 col-end-4 bg-slate-400 ">
        <h3 className="text-xl font-dm-sans text-midnight-blue">{title}</h3>
        <div>
          <div>{completionTimeFormatted}</div> <div>{difficulty}</div>
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

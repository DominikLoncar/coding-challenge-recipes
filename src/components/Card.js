import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  formatCompletionTime,
  formatRecipeDifficulty,
} from '../utils/calculations';

export default function Card({
  title = 'Lorem Ipsum',
  completionTimeInMinutes = 20,
  difficulty = 1,
  tags = [],
}) {
  return (
    <div className="grid grid-cols-3 font-dm-sans">
      <CardImg />
      <div className="col-start-2 col-end-4 bg-slate-400 ">
        <h3 className="text-xl font-dm-sans text-midnight-blue">{title}</h3>
        <div className="text-river-bed">
          <div>{formatCompletionTime(completionTimeInMinutes)}</div>{' '}
          <div>{formatRecipeDifficulty(difficulty)}</div>
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

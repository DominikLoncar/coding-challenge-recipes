import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  formatCompletionTime,
  formatRecipeDifficulty,
} from '../utils/calculations';
import Tag from './Tag';
import { FaClock } from 'react-icons/fa6';
import { BiSolidChart } from 'react-icons/bi';

export default function Card({
  title = 'Lorem Ipsum',
  completionTimeInMinutes = 20,
  difficulty = 1,
  tags = [],
}) {
  return (
    <div className="grid grid-cols-3 font-dm-sans border-[1px] rounded-lg border-athens-gray">
      <CardImg />
      <div className="col-start-2 col-end-4 p-4 rounded-tr-lg rounded-br-lg flex flex-col">
        <h3 className="text-xl font-dm-sans font-medium text-midnight-blue">
          {title}
        </h3>
        <div className="text-river-bed flex gap-6 text-md">
          <div className="flex gap-2 items-center">
            <FaClock size={16} color="#AAB1BB" />
            <span>{formatCompletionTime(completionTimeInMinutes)}</span>
          </div>
          <div className="flex gap-2 items-center">
            <BiSolidChart size={20} color="#AAB1BB" />
            <span>{formatRecipeDifficulty(difficulty)}</span>
          </div>
        </div>
        <div className="mt-auto">
          {tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardImg() {
  return (
    <div className="max-w-32 rounded-tl-lg rounded-bl-lg">
      <StaticImage
        src="../images/peanut-butter-cheesecake.png"
        alt="Meal"
        placeholder="blurred"
        className="rounded-tl-lg rounded-bl-lg"
      />
    </div>
  );
}

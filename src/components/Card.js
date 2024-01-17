import React from 'react';

export default function Card({
  title = 'Lorem Ipsum',
  completionTimeInMinutes = 60,
  difficulty = 1,
}) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <span>{completionTimeInMinutes}</span> <span>{difficulty}</span>
      </div>
    </div>
  );
}

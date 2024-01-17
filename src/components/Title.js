import React from 'react';

export default function Title({ children = 'Lorem Ipsum' }) {
  return (
    <h1 className="text-4xl text-midnight-blue font-dm-sans leading-snug">
      {children}
    </h1>
  );
}

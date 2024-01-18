import React from 'react';

export default function Subtitle({ children = 'Lorem Ipsum' }) {
  return (
    <h2 className="text-3xl text-midnight-blue font-dm-sans mb-7">
      {children}
    </h2>
  );
}

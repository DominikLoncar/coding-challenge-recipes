import React from 'react';

export default function Title({ text = 'Lorem Ipsum' }) {
  return <h1 className="text-4xl font-dm-sans">{text}</h1>;
}

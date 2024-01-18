import React from 'react';

export default function ArrowButton({ text = 'Button', link = '' }) {
  return (
    <button className="font-dm-sans font-medium text-green text-lg px-6 py-2 rounded-md hover:opacity-80 transition-hover transition-opacity">
      {text}
    </button>
  );
}

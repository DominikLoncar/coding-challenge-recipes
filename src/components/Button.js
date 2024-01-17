import React from 'react';

export default function Button({ text = 'Button', link = '' }) {
  return (
    <button className="font-dm-sans bg-light-green text-white px-6 py-2 rounded-md hover:text-light-green hover:bg-white hover:shadow-lg transition-hover transition-colors transition-shadow">
      {text}
    </button>
  );
}

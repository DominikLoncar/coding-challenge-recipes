import React from 'react';

export default function Button({ text = 'Button', link = '' }) {
  return (
    <button className="bg-light-green text-white px-6 py-2 rounded-md">
      {text}
    </button>
  );
}

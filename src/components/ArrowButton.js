import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function ArrowButton({ text = 'Button', link = '' }) {
  return (
    <button className="font-dm-sans font-medium text-green text-lg px-6 py-2 rounded-md hover:opacity-80 transition-hover transition-opacity">
      {text} <FaArrowRight />
    </button>
  );
}

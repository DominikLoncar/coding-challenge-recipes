import React from 'react';

export default function Button({ text = 'Button', link = '' }) {
  return <button className="bg-light-green">{text}</button>;
}

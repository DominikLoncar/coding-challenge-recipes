import React from 'react';
import { Title, Button } from './index';

export default function Hero() {
  return (
    <div>
      <Title>
        <strong>
          Poached eggs with
          <br />
          broccoli and avocado
        </strong>
      </Title>
      <Button text="View Recipe" />
    </div>
  );
}

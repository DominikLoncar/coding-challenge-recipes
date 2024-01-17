import React from 'react';
import { Title, Button } from './index';

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <Title>
            <strong>
              Poached eggs with
              <br />
              broccoli and avocado
            </strong>
          </Title>
          <div className="my-5" />
          <Button text="View Recipe" />
        </div>
        <img />
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';

import './index.scss';

import { genStars } from './genStars';

export default () => {
  useEffect(() => {
    genStars('canvas');
  }, []);
  return (
    <div className="StarsInteractive">
      <div className="landscape" />
      <div className="filter" />
      <canvas id="canvas" />
    </div>
  );
};

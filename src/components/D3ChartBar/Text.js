import React from 'react';

const Text = ({ xScale, height, value, barWith }) => (
  <text
    id="Bar-text"
    x={xScale}
    // y={y(d.value)}
    y={height}
    dx={barWith / 2}
    dy="-4"
    textAnchor="middle"
    fontSize="12"
    pointerEvents="none"
    tabIndex="1"
  >
    {value}
    <style jsx="true">{`
      #Bar-text {
        z-index: 5;
        user-select: none;
        fill: white;
      }
    `}</style>
  </text>
);

export default Text;

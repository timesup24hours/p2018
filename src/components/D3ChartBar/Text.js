import React from 'react';

export default ({ xScale, height, value }) => (
  <text
    id="Bar-text"
    x={xScale}
    // y={y(d.value)}
    y={height}
    dx="24"
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
        text-align: center;
      }
    `}</style>
  </text>
);

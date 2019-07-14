import React from 'react';

import barStyle from './barStyle';
import Text from './Text';

export default props => {
  const { data, height, maxVal, scale, handleOnClick } = props;
  const { x, y } = scale;

  const handleMouseenter = e => (e.target.style.opacity = 1);

  const handleMouseout = e => (e.target.style.opacity = 0.7);

  const bars = data.map((d, i) => {
    const delay = i * 0.3;
    const xScale = x(d.name);

    return (
      <g key={i}>
        <rect
          onMouseEnter={handleMouseenter}
          onMouseDown={handleMouseenter}
          onClick={e => handleOnClick(e, i)}
          onMouseOut={handleMouseout}
          fill={`#42${i}6f4`}
          style={{
            opacity: '0.7',
            cursor: 'pointer',
            '--y': `${y(d.value)}`,
            '--delay': `${delay}s`,
            '--maxVal': `${maxVal * 9}`
          }}
          width={x.bandwidth()}
          height={height - y(d.value)}
          x={xScale}
          y={y(d.value)}
        >
          <style jsx="true">{barStyle}</style>
        </rect>
        {/* <Text xScale={xScale} height={height} value={d.value} /> */}
      </g>
    );
  });

  return <React.Fragment>{bars}</React.Fragment>;
};

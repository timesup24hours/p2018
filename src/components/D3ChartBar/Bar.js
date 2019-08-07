import React from 'react';
import styled from 'styled-components';

// import barStyle from './barStyle';
// import Text from './Text';

const Rect = styled.rect`
  @keyframes rectAnimate {
    0% {
      y: var(--maxVal);
    }
    100% {
      y: var(--y);
    }
  }

  animation-name: rectAnimate;
  transition: 1s;
  animation-duration: var(--delay);
  animation-timing-function: cubic-bezier(1, -1.07, 0, 1.42);
  animation-fill-mode: forwards;
  z-index: 10;
  opacity: 0.7;
  cursor: pointer;
`;

 const Bar = props => {
  const { data, height, maxVal, scale, handleOnClick } = props;
  const { x, y } = scale;

  const handleMouseenter = e => (e.target.style.opacity = 1);

  const handleMouseout = e => (e.target.style.opacity = 0.7);

  const bars = data.map((d, i) => {
    const delay = i * 0.3;
    const xScale = x(d.name);

    return (
      <g key={i}>
        <Rect
          onMouseEnter={handleMouseenter}
          onMouseDown={handleMouseenter}
          onClick={e => handleOnClick(e, i)}
          onMouseOut={handleMouseout}
          fill={`#42${i}6f4`}
          style={{
            '--y': `${y(d.value)}`,
            '--delay': `${delay}s`,
            '--maxVal': `${maxVal * 9}`
          }}
          width={x.bandwidth()}
          height={height - y(d.value)}
          x={xScale}
          y={y(d.value)}
        >
          {/* <style jsx="true">{barStyle}</style> */}
        </Rect>
        {/* <Text
          xScale={xScale}
          barWith={x.bandwidth()}
          height={height}
          value={d.value}
        /> */}
      </g>
    );
  });

  return <React.Fragment>{bars}</React.Fragment>;
};

export default Bar
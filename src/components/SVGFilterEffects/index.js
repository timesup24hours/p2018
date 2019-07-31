import React from 'react';
import { withRouter } from 'react-router';

import './index.scss';

const SVGFilterEffects = withRouter(({ history }) => {
  const handleOnClick = e => {
    // e.currentTarget.classList.toggle(styles.hover);
    history.push('/ag_grid');
  };
  return (
    <div className="SVGFilterEffects">
      <svg>
        <filter id="wavy">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.005"
            numOctaves="5"
          ></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="50"></feDisplacementMap>
        </filter>
      </svg>
      <h2 data-heap-track-id="ui-page-svg-table" onClick={handleOnClick}>
        Table
      </h2>
    </div>
  );
});

export default SVGFilterEffects;

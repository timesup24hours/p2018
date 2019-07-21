import React from 'react';
import './index.scss';

export default ({ stepNumber, headerName }) => (
  <div className="Tooltip_container">
    <div className="up-arrow" href="#">
      <div className="content">
        <span className="stepNumber">{stepNumber}</span>
        <span className="headerName">{headerName}</span>
      </div>
    </div>
  </div>
);

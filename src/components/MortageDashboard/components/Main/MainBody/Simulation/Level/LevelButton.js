import React from 'react';
import './index.css';

export default ({ value, handleOnClick }) => {
  return (
    <div
      className={`mainBody_level_body_items flex_row_center ${
        value.active ? 'active' : ''
      }`}
      id={value.label}
      onClick={e => handleOnClick(e, value)}
    >
      <div id={value.label} onClick={e => handleOnClick(e, value)} />
      <span
        id={value.label}
        onClick={e => handleOnClick(e, value)}
        className="main_body_black_font"
      >
        {value.label}
      </span>
    </div>
  );
};

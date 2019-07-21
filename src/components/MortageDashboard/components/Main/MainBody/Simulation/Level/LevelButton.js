import React from 'react';
import './index.css';

export default ({ value, handleOnClick }) => {
  return (
    <div
      className={`mainBody_level_body_items flex_row_center ${
        value.active ? 'active' : ''
      }`}
      id={value.label}
      onClick={e => handleOnClick(e)}
    >
      <div id={value.label} onClick={e => handleOnClick(e)} />
      <span
        id={value.label}
        onClick={e => handleOnClick(e)}
        className="main_body_black_font"
      >
        {value.label}
      </span>
    </div>
  );
};

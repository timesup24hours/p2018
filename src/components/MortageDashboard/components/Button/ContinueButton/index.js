import React from 'react';
import './index.css';

export default ({ handleOnClick }) => (
  <div className="pointer_button" onClick={() => handleOnClick()}>
    <div className="pointer_button_font">Continue</div>
    <div className="pointer_button_arrow_container">
      <div className="arrow" />
    </div>
  </div>
);

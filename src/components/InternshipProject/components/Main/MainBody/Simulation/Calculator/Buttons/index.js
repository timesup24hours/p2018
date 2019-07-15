import React from 'react';
import './index.css';

export default ({ handleCancel, handleDefault }) => (
  <div className="mainBody_calculator_buttons flex_row_center">
    <div
      onClick={() => handleCancel}
      className="mainBody_calculator_buttons_cancel"
    >
      Cancel
    </div>
    <div
      onClick={() => handleDefault}
      className="mainBody_calculator_buttons_default flex_center"
    >
      Default
    </div>
  </div>
);

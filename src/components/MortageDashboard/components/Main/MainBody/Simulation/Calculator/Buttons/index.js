import React from 'react';
import './index.scss';

export default ({ handleCancel, handleDefault }) => (
  <div
    className="mainBody_calculator_buttons flex_row_center"
    style={{ justifyContent: 'flex-end' }}
  >
    {/* <div onClick={handleCancel} className="mainBody_calculator_buttons_cancel">
      Cancel
    </div> */}
    <button
      onClick={handleDefault}
      className="mainBody_calculator_buttons_default flex_center"
    >
      Calculate
    </button>
  </div>
);

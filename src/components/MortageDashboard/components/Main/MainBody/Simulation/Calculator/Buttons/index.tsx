import React from 'react';
import './index.scss';

interface ButtonsProps {
  handleCancel: () => void;
  handleDefault: () => void;
}
const Buttons = ({
  handleCancel,
  handleDefault
}: ButtonsProps): JSX.Element => (
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
export default Buttons;

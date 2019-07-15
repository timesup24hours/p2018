import React from 'react';
import ContinueButton from '../../../Button/ContinueButton';
import './index.css';

export default ({ handleOnClick }) => {
  return (
    <div className="main_header_continue main_header_continue_container">
      <ContinueButton handleOnClick={handleOnClick} />
    </div>
  );
};

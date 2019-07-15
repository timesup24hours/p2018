import React from 'react';
import './index.css';

export default ({ year, handleOnClick }) => {
  return (
    <div className="mainBody_calculator_period">
      <span className="mainBody_calculator_font mainBody_calculator_name">
        Period
      </span>
      <div className="mainBody_calculator_years">
        <div
          className="flex_center mainBody_calculator_font_year_function noselect"
          id="decrease"
          onClick={e => handleOnClick(e)}
        >
          -
        </div>
        <div className="flex_center mainBody_calculator_font_year">
          {Number(year)} years
        </div>
        <div
          className="flex_center mainBody_calculator_font_year_function noselect"
          id="increase"
          onClick={e => handleOnClick(e)}
        >
          +
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import './index.css';
import Score from './Score';
import Level from './Level';
import Chart from './Chart';
import Calculator from './Calculator';

export default () => {
  return (
    <div className="mainBody_container">
      <Score />
      <Level />
      <Calculator />
      <Chart />
    </div>
  );
};

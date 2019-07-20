import React, { useState } from 'react';
import './index.css';
import Score from './Score';
import Level from './Level';
import Chart from './Chart';
import Calculator from './Calculator';

const initialData = {
  monthlyPayment: 0,
  mortage: 0,
  downPayment: 0,
  interestRate: 0,
  year: 0
};

export default () => {
  const [data, setData] = useState(initialData);
  return (
    <div className="mainBody_container">
      <Score monthlyPayment={data.monthlyPayment} />
      <Level />
      <Calculator
        renderProp={({
          monthlyPayment,
          mortage,
          downPayment,
          interestRate,
          year
        }) =>
          setData({
            monthlyPayment,
            mortage,
            downPayment,
            interestRate,
            year
          })
        }
      />
      <Chart data={data} setData={setData} />
    </div>
  );
};

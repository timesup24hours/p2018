import React from 'react';
import { Bar } from 'react-chartjs-2';
import './index.css';
import options from './options';
import settingDataSets from './settingDataSets';
import { calcInterest, calcNewPrincipal } from '../../Calculator/util';

// monthlyPayment: 0,
// mortage: 0,
// downPayment: 0,
// interestRate: 0,
// year: 0
export default ({ data, setData }) => {
  const dataSets = [
    [21, 21, 25, 21, 25],
    [-7, 25, -5, 25, 21],
    [25, 21, 25, 25, 25]
  ];

  const monthlyInterestArray = [];
  const monthlyPrincipleArray = [];
  const monthlyNewBlanceArray = [data.mortage];
  for (let i = 0; i < data.year * 12; i++) {
    const interestPaidMonthly = calcInterest({
      rate: data.interestRate,
      loanPrincipal: monthlyNewBlanceArray[i]
    });
    monthlyInterestArray.push(interestPaidMonthly);
    monthlyPrincipleArray.push(data.monthlyPayment - interestPaidMonthly);
    const newBalance = calcNewPrincipal({
      loanPrincipal: monthlyNewBlanceArray[i],
      repayment: data.monthlyPayment,
      interest: interestPaidMonthly
    });
    monthlyNewBlanceArray.push(newBalance);
  }
  // console.log('monthlyInterestArray: ', monthlyInterestArray.length);

  // console.log('monthlyPrincipleArray: ', monthlyPrincipleArray);
  // console.log('monthlyNewBlanceArray: ', monthlyNewBlanceArray.length);

  const barData = {
    labels: ['1993', '1998', '2003', '2008', '2013'],
    datasets: settingDataSets(dataSets)
  };

  return (
    <div className="mainBody_chart_manifest">
      <Bar data={barData} width={100} height={50} options={options} />
    </div>
  );
};

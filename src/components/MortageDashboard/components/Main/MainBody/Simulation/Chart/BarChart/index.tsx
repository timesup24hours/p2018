import React from 'react';
import { Bar } from 'react-chartjs-2';
import './index.css';
import options from './options';
import settingDataSets from './settingDataSets';
import { calcInterest, calcNewPrincipal } from '../../Calculator/util';

interface Props {
  data: {
    monthlyPayment: number;
    mortage: number;
    downPayment: number;
    interestRate: number;
    year: number;
  };
  setData: Function;
}
interface PaymentArray {
  loanBalance: number;
  principlePaid: number;
  interestPaid: number;
  month: number;
}
export default ({ data, setData }: Props): JSX.Element => {
  const dataSets = [
    [21, 21, 25, 21, 25],
    [-7, 25, -5, 25, 21],
    [25, 21, 25, 25, 25]
  ];

  const defaultBarData = {
    labels: ['1993', '1998', '2003', '2008', '2013'],
    datasets: settingDataSets(dataSets)
  };

  const paymentDataArray: PaymentArray[] = [];
  let monthlyInterestArray = [];
  let monthlyPrincipleArray = [];
  let monthlyNewBlanceArray = [];
  for (let i = 0; i < data.year * 12; i++) {
    const interestPaidMonthly = calcInterest({
      rate: data.interestRate,
      loanPrincipal:
        paymentDataArray.length === 0
          ? data.mortage - data.downPayment
          : paymentDataArray[i - 1].loanBalance
    });
    const newBalance = calcNewPrincipal({
      loanPrincipal:
        paymentDataArray.length === 0
          ? data.mortage - data.downPayment
          : paymentDataArray[i - 1].loanBalance,
      repayment: data.monthlyPayment,
      interest: interestPaidMonthly
    });
    monthlyInterestArray.push(Number(interestPaidMonthly.toFixed(2)));
    monthlyPrincipleArray.push(
      Number((data.monthlyPayment - interestPaidMonthly).toFixed(2))
    );
    monthlyNewBlanceArray.push(
      Number(newBalance.toFixed(2)) < 0 ? 0 : Number(newBalance.toFixed(2))
    );
    const paymentData = {
      loanBalance:
        Number(newBalance.toFixed(2)) < 0 ? 0 : Number(newBalance.toFixed(2)),
      principlePaid: Number(
        (data.monthlyPayment - interestPaidMonthly).toFixed(2)
      ),
      interestPaid: Number(interestPaidMonthly.toFixed(2)),
      month: i + 1
    };
    paymentDataArray.push(paymentData);
  }
  // monthlyInterestArray = monthlyInterestArray.filter((d, i) => i % 10 === 0);
  // monthlyPrincipleArray = monthlyPrincipleArray.filter((d, i) => i % 10 === 0);
  // monthlyNewBlanceArray = monthlyNewBlanceArray.filter((d, i) => i % 10 === 0);

  // console.log('monthlyInterestArray: ', monthlyInterestArray.length);
  // console.log('monthlyPrincipleArray: ', monthlyPrincipleArray.length);
  // console.log('monthlyNewBlanceAbalancerray: ', monthlyNewBlanceArray.length);

  const paymentBarChartData = [
    { label: 'Principle', data: monthlyPrincipleArray },
    { label: 'Interest', data: monthlyInterestArray }
  ];
  console.log(paymentBarChartData);

  const biggestInterest = Math.max(...monthlyInterestArray);
  const biggestPrinciple = Math.max(...monthlyPrincipleArray);

  if (paymentDataArray.length) {
    let yAxis = Math.max(biggestInterest, biggestPrinciple);
    yAxis = Math.ceil(yAxis);
    options.scales.yAxes[0].ticks.max = yAxis;
    options.scales.yAxes[0].ticks.stepSize = 500;
    options.scales.yAxes[0].ticks.callback = function(
      value,
      index,
      values
    ): string {
      // const newValue = Number(value / 1000);
      // return `$${value}k        `;
      return `$${value}        `;
    };
  }
  const barData = {
    labels: [
      '1st Month',
      '2nd Month',
      '3rd Month',
      '4th Month',
      '5th Month',
      '6th Month'
    ],
    datasets: settingDataSets(paymentBarChartData, true)
  };

  return (
    <div className="mainBody_chart_manifest">
      <Bar
        data={paymentDataArray.length ? barData : defaultBarData}
        width={100}
        height={50}
        options={options}
      />
    </div>
  );
};

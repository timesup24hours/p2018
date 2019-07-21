import React from 'react';
import { Bar } from 'react-chartjs-2';
import './index.css';
import options from './options';
import settingDataSets from './settingDataSets';

interface Props {
  data: {
    monthlyPayment: number;
    mortage: number;
    downPayment: number;
    interestRate: number;
    year: number;
  };
  setData: Function;
  barData: {};
  paymentDataArray: any[];
  selectedIndex: number;
}

const BarChart = ({
  selectedIndex,
  paymentDataArray,
  barData,
  data,
  setData
}: Props): JSX.Element => {
  const dataSets = [
    [21, 21, 25, 21, 25],
    [-7, 25, -5, 25, 21],
    [25, 21, 25, 25, 25]
  ];

  const defaultBarData = {
    labels: ['1993', '1998', '2003', '2008', '2013'],
    datasets: settingDataSets(dataSets)
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
export default BarChart;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './index.scss';

const ReactChartJS2 = (): JSX.Element => {
  const data = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['#ff6284', '#ffcd55', '#37a2eb']
      }
    ],

    labels: ['Red', 'Yellow', 'Blue']
  };

  return (
    <div className="ReactChartJS2">
      <Doughnut data={data} />
    </div>
  );
};

export default ReactChartJS2;

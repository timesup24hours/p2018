import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { intersectionObserver } from '../../util';
import './index.scss';

const ReactChartJS2 = (): JSX.Element => {
  const [show, setShow] = useState(false);
  let time: any;
  const data = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['#ff6284', '#ffcd55', '#37a2eb']
      }
    ],
    labels: ['Red', 'Yellow', 'Blue']
  };

  useEffect((): any => {
    const targets = document.querySelectorAll('.ReactChartJS2');
    targets.forEach((ele, index): void =>
      intersectionObserver(
        ele,
        {},
        true,
        index,
        (): void => {
          time = setTimeout((): void => {
            setShow(true);
          }, 500);
        },
        () => setShow(false)
      )
    );
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <div className="ReactChartJS2">{show && <Doughnut data={data} />}</div>
  );
};

export default ReactChartJS2;

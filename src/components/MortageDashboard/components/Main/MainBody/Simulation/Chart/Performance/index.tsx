import React from 'react';
import './index.scss';

interface PerformanceProps {
  name: string;
  year: number | string;
  percent: number | string;
  color?: string | undefined;
}

const Performance = ({
  name,
  year,
  percent,
  color
}: PerformanceProps): JSX.Element => {
  return (
    <div className="mainBody_chart_performance">
      <div className="mainBody_chart_performance_header">
        <div>{name}</div>
        <div className="mainBody_chart_performance_header_year">{year}</div>
      </div>
      <div className="mainBody_chart_performance_number">
        <div
          style={{
            // color: Number(percent) < 0 ? 'red' : 'var(--main-header-blue-color)'
            color: color ? color : 'var(--main-header-blue-color)'
          }}
        >
          {percent}
        </div>
      </div>
    </div>
  );
};
export default Performance;

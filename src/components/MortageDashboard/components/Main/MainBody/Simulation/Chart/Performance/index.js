import React from 'react';
import './index.css';

export default ({ name, year, percent }) => {
  return (
    <div className="mainBody_chart_performance">
      <div className="mainBody_chart_performance_header">
        <div>{name}</div>
        <div className="mainBody_chart_performance_header_year">{year}</div>
      </div>
      <div className="mainBody_chart_performance_number">
        <div
          style={{
            color: Number(percent) < 0 ? 'red' : 'var(--main-header-blue-color)'
          }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

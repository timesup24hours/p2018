import React from 'react';
import './index.css';

export default ({ percent }) => (
  <div className="chart_performance_rate_container">
    <div className="chart_performance_rate_header">
      <div className="chart_performance_rate_name">Rate</div>
      <div className="chart_performance_rate_percent">{percent}%</div>
    </div>
    <div className="chart_performance_rate">
      <div style={{ width: `${Number(percent)}%` }} />
    </div>
  </div>
);

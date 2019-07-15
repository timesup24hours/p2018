import React from 'react';
import './index.css';
import Performance from './Performance';
import Rate from './Rate';
import BarChart from './BarChart';

export default () => (
  <div className="mainBody_chart">
    <div className="mainBody_chart_container">
      <div className="mainBody_chart_left">
        <div className="mainBody_chart_left_header">
          <div>Projection</div>
          <div className="chart_left_active">Perfomance</div>
        </div>
        <BarChart />
        <div className="mainBody_chart_years">
          <div className="mainBody_chart_year_left">10 years</div>
          <div className="mainBody_chart_year_right year_active">20 years</div>
        </div>
      </div>
      <div className="mainBody_chart_right">
        <div className="mainBody_chart_history">HISTORY</div>
        <div className="mainBody_chart_info">
          <Performance name="Average performance" year="20y" percent="+35.2" />
          <Performance
            name="The best performance"
            year="2013"
            percent="+65.2"
          />
          <Performance
            name="The worst performance"
            year="2016"
            percent="-20.2"
          />
          <Rate percent={33} />
        </div>

        <div className="mainBody_chart_moreView">
          <div>View More</div>
        </div>
      </div>
    </div>
  </div>
);

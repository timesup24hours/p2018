import React from 'react';
import './index.css';

export default ({ monthlyPayment }) => (
  <div className="mainBody_score flex_center">
    <div className="mainBody_score_body flex_center">
      <i className="fas fa-user" />
      <span className="grey_font">
        {`Monthly payment: $${monthlyPayment.toFixed(2)}`}
      </span>
    </div>
  </div>
);

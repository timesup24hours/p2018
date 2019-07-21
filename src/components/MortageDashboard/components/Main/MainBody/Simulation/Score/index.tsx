import React from 'react';
import './index.scss';

const Score = ({ monthlyPayment }: any): JSX.Element => (
  <div className="mainBody_score flex_center">
    <div className="mainBody_score_body flex_center">
      <i className="fas fa-user" />
      <span className="grey_font">
        {`Monthly payment: $${monthlyPayment.toFixed(2)}`}
      </span>
    </div>
  </div>
);
export default Score;

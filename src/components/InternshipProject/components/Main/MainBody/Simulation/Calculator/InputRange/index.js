import React from 'react';
import './index.css';
import InputRange from 'react-input-range';

export default ({ name, value, onChange, min, max }) => {
  return (
    <div className="inputrange_container">
      <div className="inputrange_header">
        <div className="inputrange_name">{name}</div>
        <div className="inputrange_number">
          ${Number(value).toLocaleString('en')}
        </div>
      </div>
      <div className="inputrange_body">
        <InputRange
          maxValue={max}
          minValue={min}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

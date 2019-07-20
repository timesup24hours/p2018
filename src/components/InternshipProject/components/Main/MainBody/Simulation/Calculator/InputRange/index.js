import React, { useState, useEffect } from 'react';
import './index.css';
import InputRange from 'react-input-range';
import { convertToPercentage, takeNumberOnly } from '../util';

export default ({ name, value, displayValue, onChange, min, max, percent }) => {
  const [inputValue, setInputvalue] = useState(
    displayValue ? displayValue : value
  );
  const [maxValue, setMaxValue] = useState(max);
  const [minValue, setMinValue] = useState(min);
  useEffect(() => {
    setInputvalue(displayValue ? displayValue : value);
  }, [value, displayValue]);

  const convertToDollarFormat = value => {
    let formatted = `${Number(~~value).toLocaleString('en')}`;
    if (percent) {
      formatted = formatted + '%';
    } else {
      formatted = '$' + formatted;
    }
    return formatted;
  };

  return (
    <div className="inputrange_container">
      <div className="inputrange_header" style={{ position: 'relative' }}>
        <div className="inputrange_name">{name}</div>
        <div
          className="inputrange_number"
          style={{ position: 'absolute', right: '3px' }}
        >
          {percent
            ? convertToPercentage(inputValue)
            : convertToDollarFormat(inputValue)}
        </div>
        <input
          type="text"
          className="inputrange_number"
          value={inputValue}
          style={{
            border: 'none',
            textAlign: 'right',
            outline: 'none',
            width: '100px',
            marginRight: '2px',
            // opacity: '0',
            color: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(0,0,0,0)',
            // caretColor: 'grey',
            zIndex: '99'
          }}
          onChange={e => {
            const targetValue = e.target.value;
            if (percent && targetValue > max) {
              if (targetValue > max) return;
              setInputvalue(targetValue);
            } else {
              const value = takeNumberOnly(targetValue);
              if (value >= Number.MAX_SAFE_INTEGER || Math.sign(value) === -1)
                return;
              setInputvalue(value);
              if (value > maxValue) setMaxValue(value);
              if (value !== 0 && value < minValue) setMinValue(value);
            }
          }}
        />
      </div>
      <div className="inputrange_body">
        <InputRange
          maxValue={percent ? max : maxValue}
          minValue={percent ? min : minValue}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

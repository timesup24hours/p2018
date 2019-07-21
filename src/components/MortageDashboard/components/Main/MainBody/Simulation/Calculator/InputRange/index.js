import React, { useState, useEffect } from 'react';
import './index.css';
import InputRange from 'react-input-range';
import {
  convertToPercentage,
  takeNumberOnly,
  convertToDollarFormat
} from '../util';

const InputRangeComponent = ({
  id,
  name,
  value,
  displayValue,
  onChange,
  min,
  max,
  percent,
  edit,
  mortage,
  downPayment
}) => {
  const [inputValue, setInputvalue] = useState(
    displayValue ? displayValue : value
  );
  const [maxValue, setMaxValue] = useState(max);
  const [minValue, setMinValue] = useState(min);
  useEffect(() => {
    setInputvalue(value);
    setMaxValue(max);
  }, [value, displayValue, max]);

  return (
    <div className="inputrange_container">
      <div className="inputrange_header" style={{ position: 'relative' }}>
        <label htmlFor={id} className="inputrange_name">
          {name}
        </label>
        <div
          className="inputrange_number"
          style={{ position: 'absolute', right: '3px' }}
        >
          {percent
            ? convertToPercentage(inputValue)
            : convertToDollarFormat(inputValue, percent)}
        </div>
        <input
          id={id}
          type={percent ? 'number' : 'text'}
          className="inputrange_number"
          value={inputValue}
          aria-label={name}
          aria-required="true"
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
          onClick={() => {
            if (name === 'Down Payment' || name === 'Mortgage') {
              onChange(0);
              setInputvalue(0);
            }
          }}
          onChange={e => {
            const targetValue = e.target.value;
            if (percent) {
              if (targetValue > max) return;
              if (targetValue < 0) return;
              setInputvalue(targetValue);
              onChange(targetValue);
            } else {
              const value = takeNumberOnly(targetValue);
              if (value >= Number.MAX_SAFE_INTEGER || Math.sign(value) === -1)
                return;
              if (name === 'Down Payment' && value > mortage) return;
              if (name === 'Mortgage') {
                onChange(value);
              } else if (name === 'Down Payment') {
                onChange(value);
              }
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
export default InputRangeComponent;

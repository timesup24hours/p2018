import React from 'react';
import Circle from './Circle';

export default ({ stepData, currentStep }) => {
  return (
    <div className="main_header_stepper">
      {stepData.map((value, index) => {
        return (
          <Circle
            key={index}
            label={value.label}
            checked={value.checked}
            current={value.current}
            last={value.last}
            step={value.step}
          />
        );
      })}
    </div>
  );
};

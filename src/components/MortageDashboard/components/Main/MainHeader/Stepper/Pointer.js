import React from 'react';
import Tooltip from '../../../Tooltip';
import './index.css';

const styles = {
  pointer: {
    position: 'absolute',
    height: '25px',
    width: '25px',
    border: '8.2px solid white',
    backgroundColor: 'var(--main-header-blue-color)',
    borderRadius: '50%',
    display: 'inlineBlock',
    boxShadow: '0px 2px 10px 2px rgba(93, 134, 255, 0.3)'
  }
};
export default ({ step, label }) => {
  return (
    <div className="stepper_pointer" style={styles.pointer}>
      <Tooltip stepNumber={`Step ${step}`} headerName={label} />
    </div>
  );
};

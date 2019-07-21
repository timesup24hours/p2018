import React from 'react';
import CheckMark from './CheckMark';
import Pointer from './Pointer';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  circle: {
    position: 'absolute',
    height: '25px',
    width: '25px',
    border: '3px solid var(--main-header-grey-color)',
    backgroundColor: 'var(--main-bg-color)',
    borderRadius: '50%',
    display: 'inlineBlock'
  },
  line: {
    width: '100%',
    height: '3px',
    transition: 'background-color 1s'
  }
};

export default ({ label, checked, current, last, step }) => {
  return (
    <div
      style={{
        ...styles.container,
        width: last ? '105px' : '100%'
      }}
    >
      {current ? (
        <Pointer label={label} step={step} />
      ) : checked ? (
        <CheckMark />
      ) : (
        <div style={styles.circle} />
      )}
      {last ? null : (
        <div
          style={{
            ...styles.line,
            backgroundColor: checked
              ? 'var(--main-header-blue-color)'
              : 'var(--main-header-grey-color)'
          }}
        />
      )}
    </div>
  );
};

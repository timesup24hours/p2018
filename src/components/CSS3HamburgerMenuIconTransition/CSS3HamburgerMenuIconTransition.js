import React from 'react';

import styles from './index.css';

export default () => {
  const handleOnClick = e => {
    e.target.parentElement.classList.toggle(styles.active);
    e.target.classList.toggle(styles.active);
  };
  return (
    <div className={`${styles.body}`}>
      <div onClick={handleOnClick} className={`${styles.toggle}`}>
        <span />
      </div>
    </div>
  );
};

import React from 'react';

import styles from './index.module.css';

export default () => {
  const handleOnClick = e => {
    e.currentTarget.childNodes[0].childNodes[0].classList.toggle(styles.hover);
  };
  return (
    <div className={styles.container} onClick={handleOnClick}>
      <div className={styles.wrapper}>
        <div className={styles.cube}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

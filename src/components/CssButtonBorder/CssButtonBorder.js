import React from 'react';

import styles from './index.css';

export default () => {
  const handleOnClick = e => {
    e.currentTarget.classList.toggle(styles.hover);
  };
  return (
    <div className={styles.container}>
      <div href="" className={styles.a} onClick={handleOnClick}>
        <span className={styles.span} />
        Button
      </div>
    </div>
  );
};

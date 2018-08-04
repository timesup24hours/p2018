import React from 'react';

import styles from './index.css';

export default () => {
  return (
    <div className={styles.container}>
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

import React from 'react';

import styles from './index.module.css';
import './index.scss';

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.glowing}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

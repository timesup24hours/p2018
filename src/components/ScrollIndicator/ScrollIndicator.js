import React from 'react';

import styles from './index.module.css';

export default ({ scrolled }) => {
  // console.log(scrolled);
  return <div className={styles.scollLine} style={{ width: `${scrolled}%` }} />;
};

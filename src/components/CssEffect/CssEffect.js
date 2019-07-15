import React from 'react';

import styles from './index.module.css';

export default ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

import React from 'react';

import styles from './index.css';
import faker from 'faker';

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Sint Aliquam Quas</div>
      <div className={styles.content}>{faker.lorem.sentences(8)}</div>
    </div>
  );
};

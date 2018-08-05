import React from 'react';

import styles from './index.css';
import faker from 'faker';

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{faker.lorem.words()}</div>
      <div className={styles.blockWrapper}>
        {[...Array(8)].map((x, i) => <BlockInfo key={i} />)}
      </div>
    </div>
  );
};

const BlockInfo = data => {
  return (
    <div className={styles.block}>
      <div className={styles.blockTitle}>{faker.lorem.words()}</div>
      <div className={styles.blockContent}>{faker.lorem.sentences(2)}</div>
    </div>
  );
};

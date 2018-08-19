import React from 'react';

import styles from './index.css';

export default ({ note }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>{note.title}</h1>
        <div>{note.content}</div>
      </div>
    </div>
  );
};

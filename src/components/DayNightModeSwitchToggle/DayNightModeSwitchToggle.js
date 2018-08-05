import React from 'react';

import styles from './index.css';

export default () => {
  const handler = e => {
    e.target.classList.toggle(`${styles.active}`);
    e.target.parentNode.parentNode.classList.toggle(`${styles.night}`);
    e.target.parentNode.parentNode.parentNode.classList.toggle(
      `${styles.font}`
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.toggle} onClick={handler} />
    </div>
  );
};

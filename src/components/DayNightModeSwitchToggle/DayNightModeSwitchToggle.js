import React from 'react';

import styles from './index.module.css';

export default ({ onClick }) => {
  const handler = e => {
    if (onClick) {
      e.target.classList.toggle(`${styles.active}`);
      onClick(e);
      return;
    }
    e.target.classList.toggle(`${styles.active}`);
    e.target.parentNode.parentNode.classList.toggle(`${styles.night}`);
    e.target.parentNode.parentNode.parentNode.classList.toggle(
      `${styles.font}`
    );
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.toggle}
        data-heap-track-id="homepage-toggle-night-switch"
        onClick={handler}
      />
    </div>
  );
};

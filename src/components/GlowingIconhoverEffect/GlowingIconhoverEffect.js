import React from 'react';

import styles from './index.css';

export default () => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="">
            <i className="fas fa-archway" />
          </a>
        </li>
        <li className={styles.li}>
          <a href="">
            <i className="fas fa-award" />
          </a>
        </li>
        <li className={styles.li}>
          <a href="">
            <i className="fas fa-apple-alt" />
          </a>
        </li>
      </ul>
    </div>
  );
};

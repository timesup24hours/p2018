import React from 'react';

import styles from './index.module.css';

export default () => {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        © 2019:{' '}
        <a href="https://github.com/timesup24hours">
          https://github.com/timesup24hours
        </a>
      </div>
    </footer>
  );
};

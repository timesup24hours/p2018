import React from 'react';

import styles from './index.css';

export default () => {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        © 2019:{' '}
        <a href="https://timesup24hours.github.io/p2018">
          https://timesup24hours.github.io/p2018
        </a>
      </div>
    </footer>
  );
};

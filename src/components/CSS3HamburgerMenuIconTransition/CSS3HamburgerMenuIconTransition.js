import React from 'react';

import styles from './index.css';
import HamburgerMenuButton from './HamburgerMenuButton';

export default () => {
  return (
    <div className={`${styles.body}`}>
      <HamburgerMenuButton />
    </div>
  );
};

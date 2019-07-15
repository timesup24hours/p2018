import React from 'react';

import styles from './index.module.css';
import HamburgerMenuButton from './HamburgerMenuButton';

export default () => {
  return (
    <div className={`${styles.body}`}>
      <HamburgerMenuButton />
    </div>
  );
};

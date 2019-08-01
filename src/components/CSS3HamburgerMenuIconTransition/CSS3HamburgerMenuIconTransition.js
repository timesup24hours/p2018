import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import styles from './index.module.css';
import HamburgerMenuButton from './HamburgerMenuButton';

export default () => {
  return (
    <div className={`${styles.body}`}>
      <HamburgerMenuButton />
      <div className={styles.desc}>
        <Link to="swipe">carousel example here</Link>
      </div>
    </div>
  );
};

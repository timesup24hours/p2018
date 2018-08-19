import React from 'react';
import styles from './index.css';
import { MaterialDesignBurgerMenu } from '../MaterialDesignBurgerMenu';

export default ({ open, CustomhandleOnClick }) => (
  <div className={styles.menuButton}>
    <MaterialDesignBurgerMenu
      CustomhandleOnClick={CustomhandleOnClick}
      open={open}
    />
  </div>
);

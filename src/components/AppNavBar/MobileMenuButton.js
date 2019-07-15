import React from 'react';
import styles from './index.module.css';
import { MaterialDesignBurgerMenu } from '../MaterialDesignBurgerMenu';

export default React.forwardRef((props, ref) => (
  <div className={styles.menuButton} ref={ref}>
    <MaterialDesignBurgerMenu
      customhandleOnClick={props.customhandleOnClick}
      open={props.open}
    />
  </div>
));

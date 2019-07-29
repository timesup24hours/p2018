import React, { useState } from 'react';

import SmokeText from '../SmokeText';
import styles from './index.module.css';
import './index.scss';

export default () => {
  const [show, setShow] = useState(true);
  return show ? (
    <div className={styles.container} onClick={() => setShow(false)}>
      <div className={styles.glowing}>
        <span />
        <span />
        <span />
      </div>
    </div>
  ) : (
    <SmokeText onClick={() => setShow(true)} />
  );
};

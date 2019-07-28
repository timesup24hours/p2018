import React from 'react';

import styles from './index.module.css';
import './index.scss';
import { withRouter } from 'react-router';

export default withRouter(({ history }) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        const node = document.querySelector('.Nav_nav');
        node.style.display = 'none';
        history.push('/call');
      }}
    >
      <div className={styles.glowing}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
});

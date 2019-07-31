import React from 'react';

import styles from './index.module.css';
import { withRouter } from 'react-router';

export default withRouter(({ history }) => {
  const handleOnClick = e => {
    e.currentTarget.childNodes[0].childNodes[0].classList.toggle(styles.hover);
  };
  return (
    <div className={styles.container} onClick={handleOnClick}>
      <div className={styles.wrapper}>
        <div className={styles.cube}>
          <span />
          <span />
          <span
            className={styles.click}
            data-heap-track-id="ui-page-cube-shape"
            onClick={() => {
              history.push('/todo');
            }}
          />
        </div>
      </div>
    </div>
  );
});

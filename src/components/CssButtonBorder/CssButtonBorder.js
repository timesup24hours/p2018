import React from 'react';
import { withRouter } from 'react-router';

import styles from './index.css';

export default withRouter(({ history }) => {
  const handleOnClick = e => {
    e.currentTarget.classList.toggle(styles.hover);
    history.push('/dashboard_ui');
  };
  return (
    <div className={styles.container}>
      <div href="" className={styles.a} onClick={handleOnClick}>
        <span className={styles.span} />
        Click Me
      </div>
      <div className={styles.desc}>
        click above button to another UI only project
      </div>
    </div>
  );
});

import React from 'react';
import { withRouter } from 'react-router';

import styles from './index.module.css';

export const CssButtonBorder = ({ history }) => {
  const handleOnClick = e => {
    e.currentTarget.classList.toggle(styles.hover);
    history.push('/dashboard_ui');
  };
  return (
    <div className={styles.container}>
      <div
        data-testid="click"
        href=""
        className={styles.a}
        onClick={handleOnClick}
        data-heap-track-id="ui-page-mortgage-button"
      >
        <span className={styles.span} />
        Mortgage
      </div>
      <div className={styles.desc}>
        click above button to another UI only project
      </div>
    </div>
  );
};

export default withRouter(CssButtonBorder);

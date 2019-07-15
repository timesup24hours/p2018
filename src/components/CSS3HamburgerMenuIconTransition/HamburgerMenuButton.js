import React from 'react';

import styles from './index.module.css';

export default ({ CustomhandleOnClick }) => {
  const handleOnClick = e => {
    if (CustomhandleOnClick) CustomhandleOnClick(e);
    e.target.parentElement.classList.toggle(styles.active);
    e.target.classList.toggle(styles.active);
  };
  return (
    <div onClick={handleOnClick} className={`${styles.toggle}`}>
      <span />
    </div>
  );
};

import React from 'react';

import styles from './index.css';
import DayNightModeSwitchToggle from '../DayNightModeSwitchToggle';
import BriefInfo from '../BriefInfo';

export default ({ children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.wave}>
        {children}
        <DayNightModeSwitchToggle />
      </section>
      <BriefInfo />
      <section className={styles.wave1} />
    </div>
  );
};

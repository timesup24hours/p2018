import React from 'react';

import styles from './index.css';
import DayNightModeSwitchToggle from '../DayNightModeSwitchToggle';
import BriefInfo from '../BriefInfo';
import UserCard from '../UserCard';

export default ({ children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.wave}>
        {children}
        <DayNightModeSwitchToggle />
      </section>
      <BriefInfo />
      <section className={styles.wave1}>
        <UserCard />
      </section>
    </div>
  );
};

import React from 'react';

import styles from './index.css';
import DayNightModeSwitchToggle from '../DayNightModeSwitchToggle';
import BriefInfo from '../BriefInfo';
import UserCard from '../UserCard';
import Wavy2Content from '../Wavy2Content';

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
        <Wavy2Content />
      </section>
    </div>
  );
};

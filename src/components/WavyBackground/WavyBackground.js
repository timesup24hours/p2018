import React from 'react';

import styles from './index.css';
import DayNightModeSwitchToggle from '../DayNightModeSwitchToggle';
import BriefInfo from '../BriefInfo';
import UserCard from '../UserCard';
import Wavy2Content from '../Wavy2Content';

export default ({ children }) => {
  return (
    <div className={styles.container}>
      <StarSky>
        {children}
        <DayNightModeSwitchToggle />
      </StarSky>
      {/* <section className={styles.wave}>
        {children}
        <DayNightModeSwitchToggle />
      </section> */}

      <BriefInfo />
      <section className={styles.wave1}>
        <UserCard />
        <Wavy2Content />
      </section>
    </div>
  );
};

const StarSky = ({ children }) => (
  <div className={styles.starts_container}>
    <div className={styles.stars} />
    <div className={styles.stars2} />
    <div className={styles.stars3} />
    {children}
  </div>
);

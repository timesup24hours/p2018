import React, { useState } from 'react';

import styles from './index.css';
import DayNightModeSwitchToggle from '../DayNightModeSwitchToggle';
import BriefInfo from '../BriefInfo';
import UserCard from '../UserCard';
import Wavy2Content from '../Wavy2Content';

export default ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.container}>
      <div style={{ position: 'relative' }}>
        <StarSky toggle={toggle}>{children}</StarSky>
        <DayNightModeSwitchToggle onClick={() => setToggle(data => !data)} />
      </div>
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

const StarSky = ({ toggle, children }) => (
  <div
    className={`${styles.starts_container} ${
      toggle ? styles.backgroundColorNight : styles.backgroundColorPurple
    }`}
  >
    <div className={styles.stars} />
    <div className={styles.stars2} />
    <div className={styles.stars3} />
    {children}
  </div>
);

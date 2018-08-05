import React from 'react';

import styles from './index.css';
import WavyBackground from '../WavyBackground';
import Footer from '../Footer';

export default () => (
  <div className={styles.container}>
    <WavyBackground>
      <div className={styles.content}>
        <div>Skill sets:</div>
        <div>React</div>
        <div>Redux, Redux-saga</div>
        <div>NodeJS, MonogoDB</div>
      </div>
    </WavyBackground>
    <Footer />
  </div>
);

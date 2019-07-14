import React from 'react';

import styles from './index.css';
import WavyBackground from '../WavyBackground';
import Footer from '../Footer';

export default () => (
  <div className={styles.container}>
    <WavyBackground>
      <div className={styles.content}>
        <div>Huanlin Huang</div>
        <div>Javascript Developer</div>
      </div>
    </WavyBackground>
    <Footer />
  </div>
);

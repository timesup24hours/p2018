import React from 'react';

import { withRouter } from 'react-router-dom';
import styles from './index.module.css';
import WavyBackground from '../WavyBackground';
import Footer from '../Footer';

export default withRouter(({ history }) => (
  <div className={styles.container}>
    <WavyBackground>
      <div
        className={styles.content}
        onClick={() => {
          const node = document.querySelector('.Nav_nav');
          const navLine = document.querySelector('.nav_line');
          node.style.display = 'none';
          navLine.style.display = 'none';
          history.push('/call');
        }}
      >
        <div>Huanlin Huang</div>
        <div>Javascript Developer</div>
      </div>
    </WavyBackground>
    <Footer />
  </div>
));

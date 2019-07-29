import React, { useState } from 'react';
import './index.scss';

import styles from './index.module.css';

const PulseAnimationEffects = () => {
  const [show, setShow] = useState(false);
  const pulseOnClick = () => {
    setShow(data => !data);
  };

  const scrollDown = e => {
    e.preventDefault();
    const node = document.querySelector('.ReactChartJS2');
    node.scrollIntoView({ behavior: 'smooth', block: 'end' });
    // pulseOnClick();
  };

  return (
    <div className={`PulseAnimationEffects`}>
      <div className={`PulseAnimationEffects-inner ${show ? 'show' : ''}`}>
        <div className="PulseAnimationEffects-front">
          <div className={styles.container} onClick={scrollDown}>
            <div className={styles.pulse}>{/* <span /> */}</div>
          </div>
        </div>
        <div className="PulseAnimationEffects-back">
          <div className="PulseAnimationEffects-desc">
            There is more{' '}
            <a href="/" onClick={scrollDown}>
              down there
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PulseAnimationEffects;

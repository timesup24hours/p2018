import React from 'react';

import styles from './index.css';
import CssEffect from '../CssEffect';
import CssButtonBorder from '../CssButtonBorder';
import CSS3HamburgerMenuIconTransition from '../CSS3HamburgerMenuIconTransition';

export default () => (
  <div className={` ${styles.container}`}>
    <CssEffect>
      <CssButtonBorder />
    </CssEffect>
    <CssEffect>
      <CSS3HamburgerMenuIconTransition />
    </CssEffect>
    <CssEffect />
    <CssEffect />
    <CssEffect />
    <CssEffect />
    <CssEffect />
    <CssEffect />
  </div>
);

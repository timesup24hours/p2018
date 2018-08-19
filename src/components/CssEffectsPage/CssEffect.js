import React from 'react';

import styles from './index.css';
import CssEffect from '../CssEffect';
import CssButtonBorder from '../CssButtonBorder';
import { CSS3HamburgerMenuIconTransition } from '../CSS3HamburgerMenuIconTransition';
import GlowingIconhoverEffect from '../GlowingIconhoverEffect';
import CSS3CubeShape from '../CSS3CubeShape';

export default () => (
  <div className={`${styles.container}`}>
    {[
      <CssButtonBorder />,
      <CSS3HamburgerMenuIconTransition />,
      <GlowingIconhoverEffect />,
      <CSS3CubeShape />
    ].map((c, i) => (
      <CssEffect key={i}>{c}</CssEffect>
    ))}
  </div>
);

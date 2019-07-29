import React from 'react';

import styles from './index.module.css';
import CssEffect from '../CssEffect';
import CssButtonBorder from '../CssButtonBorder';
import { CSS3HamburgerMenuIconTransition } from '../CSS3HamburgerMenuIconTransition';
import GlowingIconhoverEffect from '../GlowingIconhoverEffect';
import CSS3CubeShape from '../CSS3CubeShape';
import FormWrapper from '../FormikForm';
import GlowingLoaderRing from '../GlowingLoaderRing';
// import ForgetPasswordForm from '../ForgetPasswordForm';
import PulseAnimationEffects from '../PulseAnimationEffects';
import D3ChartBar from '../D3ChartBar';
import SVGFilterEffects from '../SVGFilterEffects';
import ReactChartJS2 from '../ReactChartJS2';
import SmokeText from '../SmokeText'

const CssEffectsPage = () => (
  <div className={`${styles.container}`}>
    {[
      <D3ChartBar />,
      <GlowingIconhoverEffect />,
      <PulseAnimationEffects />,
      <CssButtonBorder />,
      <CSS3HamburgerMenuIconTransition />,
      <CSS3CubeShape />,
      <GlowingLoaderRing />,
      <FormWrapper />,
      <ReactChartJS2 />,
      <SVGFilterEffects />,
      <SmokeText />
    ].map((c, i) => (
      <CssEffect key={i}>{c}</CssEffect>
    ))}
  </div>
);

export default CssEffectsPage;

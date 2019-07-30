import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './PopOut.scss';

const PopOut = ({
  text1 = 'Wednesday',
  text2 = '2 more',
  text3 = 'to go!'
}) => {
  useEffect(() => {
    var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    anime
      .timeline({ loop: true })
      .add({
        targets: '.PopOut .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: '.PopOut .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay
      })
      .add({
        targets: '.PopOut .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: '.PopOut .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay
      })
      .add({
        targets: '.PopOut .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: '.PopOut .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: 'easeInExpo',
        delay: ml4.delay
      })
      .add({
        targets: '.PopOut',
        opacity: 0,
        duration: 500,
        delay: 500
      });
  });

  return (
    <div className="PopOut-root">
      <div className="PopOut">
        <span className="letters letters-1">{text1}</span>
        <span className="letters letters-2">{text2}</span>
        <span className="letters letters-3">{text3}</span>
      </div>
    </div>
  );
};
export default PopOut;

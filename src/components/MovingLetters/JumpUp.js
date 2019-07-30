import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './JumpUp.scss';

const JumpUp = ({ text = 'Friday Oh Yeah!' }) => {
  const renderText = () =>
    text.split('').map((t, i) =>
      t === ' ' ? (
        <span key={i} className="letter">
          &nbsp;
        </span>
      ) : (
        <span key={i} className="letter">
          {t}
        </span>
      )
    );

  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.JumpUp .letter',
        translateY: ['1.1em', 0],
        translateZ: 0,
        duration: 750,
        delay: function(el, i) {
          return 50 * i;
        }
      })
      .add({
        targets: '.JumpUp',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  });

  return (
    <div className="JumpUp-root">
      <h1 className="JumpUp">{renderText()}</h1>
    </div>
  );
};
export default JumpUp;

import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './SwingLeft.scss';

const SwingLeft = ({ text = 'SATURDAY NIGHT' }) => {
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
        targets: '.SwingLeft .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: function(el, i) {
          return 500 + 30 * i;
        }
      })
      .add({
        targets: '.SwingLeft .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: function(el, i) {
          return 100 + 30 * i;
        }
      });
  });

  return (
    <div className="SwingLeft-root">
      <h1 className="SwingLeft">{renderText()}</h1>
    </div>
  );
};
export default SwingLeft;

import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './OneByOne.scss';

const OneByOne = ({ text = 'Thursday' }) => {
  const renderText = () =>
    text.split('').map((t, i) => (
      <span key={i} className="letter">
        {t}
      </span>
    ));

  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.OneByOne-root .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: function(el, i) {
          return 70 * i;
        }
      })
      .add({
        targets: '.OneByOne',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  });

  return (
    <div className="OneByOne-root">
      <h1 className="OneByOne">{renderText()}</h1>
    </div>
  );
};
export default OneByOne;

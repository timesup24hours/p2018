import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './FadeIn.scss';

const FadeIn = ({ text = 'Tuesday La !' }) => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.FadeIn .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: function(el, i) {
          return 150 * (i + 1);
        }
      })
      .add({
        targets: '.FadeIn h1',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  });

  const renderText = () =>
    text.split('').map((t, i) => (
      <span key={i} className="letter">
        {t}
      </span>
    ));

  return (
    <div className="FadeIn">
      <h1>{renderText()}</h1>
    </div>
  );
};
export default FadeIn;

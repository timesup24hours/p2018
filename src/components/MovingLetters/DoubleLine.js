import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './DoubleLine.scss';

const DoubleLine = ({ text = 'MONDAY' }) => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.DoubleLine .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 600,
        delay: function(el, i) {
          return 70 * (i + 1);
        }
      })
      .add({
        targets: '.DoubleLine .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
        offset: '-=875',
        delay: function(el, i, l) {
          return 80 * (l - i);
        }
      })
      .add({
        targets: '.DoubleLine text-wrapper',
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
    <h1 className="DoubleLine">
      <span className="text-wrapper">
        <span className="line line1"></span>
        <span className="letters">{renderText()} </span>
        <span className="line line2"></span>
      </span>
    </h1>
  );
};
export default DoubleLine;

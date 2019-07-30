import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './Sunday.scss';

const Sunday = ({ text1 = 'THE ', text2 = ' SUNDAY' }) => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.Sunday .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 700,
        delay: function(el, i) {
          return 700 * i;
        }
      })
      .add({
        targets: '.Sunday',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  });

  return (
    <div className="Sunday-root">
      <h1 className="Sunday">
        <span className="word">{text1}</span>
        <span>&nbsp; &nbsp; &nbsp;</span>
        <span className="word">{text2}</span>
      </h1>
    </div>
  );
};
export default Sunday;

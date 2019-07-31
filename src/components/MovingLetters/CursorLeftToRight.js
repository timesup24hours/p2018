import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './CursorLeftToRight.scss';

const CursorLeftToRight = ({ text = 'Monday Morning' }) => {
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
        targets: '.CursorLeftToRight .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700
      })
      .add({
        targets: '.CursorLeftToRight .line',
        translateX: [
          0,
          document
            .querySelector('.CursorLeftToRight .letters')
            .getBoundingClientRect().width + 10
        ],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100
      })
      .add({
        targets: '.CursorLeftToRight .letter',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=775',
        delay: function(el, i) {
          return 34 * (i + 1);
        }
      })
      .add({
        targets: '.CursorLeftToRight',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  });

  return (
    <div className="CursorLeftToRight-root">
      <h1 className="CursorLeftToRight">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters">{renderText()}</span>
        </span>
      </h1>
    </div>
  );
};
export default CursorLeftToRight;

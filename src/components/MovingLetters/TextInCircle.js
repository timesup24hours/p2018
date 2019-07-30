import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './TextInCircle.scss';

const TextInCircle = ({ text = 'Hi' }) => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.TextInCircle .circle-white',
        scale: [0, 3],
        opacity: [1, 0],
        easing: 'easeInOutExpo',
        rotateZ: 360,
        duration: 1100
      })
      .add({
        targets: '.TextInCircle .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: 'easeInOutExpo',
        offset: '-=1000'
      })
      .add({
        targets: '.TextInCircle .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: 'easeOutExpo',
        offset: '-=600'
      })
      .add({
        targets: '.TextInCircle .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
      })
      .add({
        targets: '.TextInCircle .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
      })
      .add({
        targets: '.TextInCircle',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1400
      });

    anime({
      targets: '.TextInCircle .circle-dark-dashed',
      rotateZ: 360,
      duration: 8000,
      easing: 'linear',
      loop: true
    });
  });

  return (
    <div className="TextInCircle-root">
      <h1 className="TextInCircle">
        <span className="letters-container">
          <span className="letters letters-left">{text}</span>
          <span className="letters bang">!</span>
        </span>
        <span className="circle circle-white"></span>
        <span className="circle circle-dark"></span>
        <span className="circle circle-container">
          <span className="circle circle-dark-dashed"></span>
        </span>
      </h1>
    </div>
  );
};
export default TextInCircle;

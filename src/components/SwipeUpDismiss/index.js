import React, { useState, useRef } from 'react';
import { TimelineMax, Power0 } from 'gsap/all';
import { Power4 } from 'gsap/TweenMax';

import { useSwipeable } from 'react-swipeable';

import './index.scss';

const SwipeUpDismiss = () => {
  const [data, setData] = useState(null);
  const cardRef = useRef(null);
  let stop = false;
  const tlup = new TimelineMax({ repeat: 0, repeatDelay: 0 });
  const onSwiped = data => {
    if (tlup && data.deltaY > 0) {
      tlup.to(cardRef.current, 0.5, {
        y: -1000,
        ease: Power4.easeIn
      });
      tlup.to(cardRef.current, 0.5, {
        y: 0,
        delay: 2,
        ease: Power4.easeIn
      });
    }
    if (tlup && data.deltaY < 0) {
      tlup.to(cardRef.current, 0.5, {
        y: 0,
        ease: Power4.easeIn
      });
    }
    setData(data);
  };
  const onSwiping = data => {
    if (data.deltaY < 0 && !stop) {
      stop = true;
      tlup.to(cardRef.current, 0.5, { y: 200, ease: Power0.ease });
    } else if (data.deltaY > 0 && !stop) {
      stop = true;
      const tl = new TimelineMax({ repeat: 0, repeatDelay: 0 });
      tl.to(cardRef.current, 0.5, {
        y: -1000,
        ease: Power4.easeIn
      });
      tl.to(cardRef.current, 0.5, {
        y: 0,
        delay: 2,
        ease: Power4.easeIn
      });
    }
    setData(data);
  };
  const handlers = useSwipeable({
    onSwiped: onSwiped,
    onSwiping: onSwiping,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <div className="SwipeUpDismiss" {...handlers}>
      <div className="card" ref={cardRef}>
        Swipe ☝️ or 👇
      </div>
    </div>
  );
};

export default SwipeUpDismiss;

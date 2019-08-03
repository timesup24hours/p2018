import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { TweenMax, Power2 } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin; // here is the gotcha....

import styles from './index.module.css';
import './index.scss';

const Note = ({ note }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [umMount, setUnMount] = useState(false);
  const rootRef = useRef(null);
  let animationTimer = undefined;
  const onChangeIndex = (index, indexLatest, meta) => {
    const refNode = rootRef.current;
    if (index === 2) {
      if (refNode) {
        TweenMax.to(refNode, 0.5, {
          height: '0',
          minHeight: '0',
          opacity: 0,
          marginBottom: '0px',
          display: 'none',
          ease: Power2.easeInOut
        });
        // animationTimer = setTimeout(() => {
        //   setIsDelete(true);
        //   clearTimeout(animationTimer);
        // }, 500);
      } else {
        setIsDelete(true);
      }
      // const timerEvent = setTimeout(() => {
      //   setUnMount(true);
      //   // node.style.WebkitAnimation = 'aniGoAway 0.2s linear 0.5s forwards';
      //   clearTimeout(timerEvent);
      // }, 1000);
    } else if (index === 0) {
      if (refNode) {
        TweenMax.to(refNode, 0.5, {
          height: '0',
          minHeight: '0',
          opacity: 0,
          marginBottom: '0px',
          display: 'none',
          ease: Power2.easeInOut
        });
        // animationTimer = setTimeout(() => {
        //   setIsDelete(true);
        //   clearTimeout(animationTimer);
        // }, 500);
      } else {
        setIsDelete(true);
      }

      // const timerEvent = setTimeout(() => {
      //   setUnMount(true);
      //   // node.style.WebkitAnimation = 'aniGoAway 0.2s linear 0.5s forwards';
      //   clearTimeout(timerEvent);
      // }, 1000);
    }
  };
  return umMount ? null : (
    <div
      className={`Note Note-root ${styles.container} ${
        isDelete ? 'isDelete' : ''
      } ${isDelete ? 'goAway' : ''}`}
      ref={rootRef}
    >
      <SwipeableViews
        index={1}
        enableMouseEvents
        className={`Note ${styles.container} ${isDelete ? 'isDelete' : ''} ${
          isDelete ? 'goAway' : ''
        }`}
        style={{ width: '100%' }}
        onChangeIndex={onChangeIndex}
      >
        <div className="read">Read</div>
        <div className={`wrapper ${styles.wrapper} ${styles.row} `}>
          <Link
            to={{
              hash: note.id,
              pathname: `/my_notes/${note.title}`
            }}
            style={{ height: `${note.subTitle ? 'auto' : '100%'}` }}
          >
            <h1 className={`${note.subTitle ? '' : 'flex-center'}`}>
              {note.title}
            </h1>
          </Link>
          {note.subTitle && (
            <div className={styles.subTitle}>{note.subTitle}</div>
          )}
          {/* <div className="instruction">Swipe 👈 or 👉</div> */}
        </div>
        <div className="delete">Delete</div>
      </SwipeableViews>
    </div>
  );
};

export default Note;

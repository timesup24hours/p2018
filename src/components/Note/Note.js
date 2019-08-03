import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import styles from './index.module.css';
import './index.scss';

const Note = ({ note }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [umMount, setUnMount] = useState(false);
  const onChangeIndex = (index, indexLatest, meta) => {
    const node = document.querySelector('.Note');
    if (index === 2) {
      setIsDelete(true);
      setUnMount(true);
      // const timerEvent = setTimeout(() => {
      //   // node.style.WebkitAnimation = 'aniGoAway 0.2s linear 0.5s forwards';
      //   clearTimeout(timerEvent);
      // }, 1000);
    } else if (index === 0) {
      setIsDelete(true);
      setUnMount(true);
      // const timerEvent = setTimeout(() => {
      //   // node.style.WebkitAnimation = 'aniGoAway 0.2s linear 0.5s forwards';
      //   clearTimeout(timerEvent);
      // }, 1000);
    }
  };
  return (
    <SwipeableViews
      index={1}
      enableMouseEvents
      className={`Note ${styles.container} ${isDelete ? 'isDelete' : ''} ${
        isDelete ? 'goAway' : ''
      }`}
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
  );
};

export default Note;

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

export default ({ note }) => {
  return (
    <Link
      to={{
        hash: note.id,
        pathname: `/my_notes/${note.title}`
      }}
      className={styles.container}
    >
      <div
        className={`${styles.wrapper} ${note.subTitle ? '' : 'flex-center'}`}
      >
        <h1>{note.title}</h1>
        <div>{note.subTitle}</div>
      </div>
    </Link>
  );
};

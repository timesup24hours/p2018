import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styles from './index.css';

export default () => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/css_effects">
            <i className="fas fa-archway" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/css_effects">
            <i className="fas fa-award" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/css_effects">
            <i className="fas fa-apple-alt" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

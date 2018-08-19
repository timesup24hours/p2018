import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import styles from './index.css';

export default React.forwardRef((props, ref) => (
  <nav className={styles.nav} ref={ref}>
    <ul className={styles.nav_ul}>
      <li className={styles.nav_ul_li_1}>
        <Link
          exact
          className={styles.a}
          activeClassName={styles.active}
          onClick={props.CustomhandleOnClick}
          to="/"
        >
          <span>HOME</span>
        </Link>
      </li>
      <li className={styles.nav_ul_li_2}>
        <Link
          className={styles.a}
          activeClassName={styles.active}
          to="/my_notes"
          onClick={props.CustomhandleOnClick}
        >
          <span>NOTES</span>
        </Link>
      </li>
      <li className={styles.nav_ul_li_3}>
        <Link
          className={styles.a}
          activeClassName={styles.active}
          to="/css_effects"
          onClick={props.CustomhandleOnClick}
        >
          <span>CSS</span>
        </Link>
      </li>
      <li className={styles.nav_ul_li_4}>
        <Link
          className={styles.a}
          activeClassName={styles.active}
          to="/contact_info"
          onClick={props.CustomhandleOnClick}
        >
          <span>CONTACT</span>
        </Link>
      </li>
    </ul>
  </nav>
));

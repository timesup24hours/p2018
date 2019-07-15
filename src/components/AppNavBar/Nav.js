import React, { useEffect, useState, useRef } from 'react';
import { NavLink as Link } from 'react-router-dom';

import styles from './index.module.css';
import './nav.scss';

export default React.forwardRef((props, ref) => {
  const lineRef = useRef(null);
  const [style, setStyle] = useState({ left: 0, width: 0 });
  const getRect = (ele: Element | null) => {
    if (!ele) return 0;
    const rect = ele.getBoundingClientRect();
    return rect;
  };
  useEffect(() => {
    const activeNode: Element | null = document.querySelector(
      `.${styles.active}`
    );
    const left = getRect(activeNode).left;
    document.documentElement.style.setProperty('--nav-line-top', `${left}px`);
  });
  const handleNavOnClick = (event: React.MouseEvent) => {
    const ele: Element = event.target;
    if (!ele.classList.contains(styles.a)) return;
    const rect = getRect(ele.children[0]);
    setStyle(rect);
    // console.log('line: ', (lineRef.current.style.left = left));
    // document.documentElement.style.setProperty('--nav-line-top', `${left}px`);
  };
  return (
    <nav className={styles.nav} ref={ref}>
      <ul className={styles.nav_ul}>
        <li className={styles.nav_ul_li_1}>
          <Link
            exact
            className={styles.a}
            activeClassName={styles.active}
            onClick={event => {
              props.CustomhandleOnClick(event);
              handleNavOnClick(event);
            }}
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
            onClick={event => {
              props.CustomhandleOnClick(event);
              handleNavOnClick(event);
            }}
          >
            <span>NOTES</span>
          </Link>
        </li>
        <li className={styles.nav_ul_li_3}>
          <Link
            className={styles.a}
            activeClassName={styles.active}
            to="/css_effects"
            onClick={event => {
              props.CustomhandleOnClick(event);
              handleNavOnClick(event);
            }}
          >
            <span>UI</span>
          </Link>
        </li>
        <li className={styles.nav_ul_li_4}>
          <Link
            className={styles.a}
            activeClassName={styles.active}
            to="/contact_info"
            onClick={event => {
              props.CustomhandleOnClick(event);
              handleNavOnClick(event);
            }}
          >
            <span>CONTACT</span>
          </Link>
        </li>
        <div
          ref={lineRef}
          className={styles.line}
          style={{ left: style.left, width: style.width }}
        />
      </ul>
    </nav>
  );
});

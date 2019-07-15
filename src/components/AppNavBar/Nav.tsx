import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { NavLink as Link } from 'react-router-dom';

// import styles from './index.module.css';
import './nav.scss';

interface rectObject {
  left: number;
  top: number;
  width: number;
  bottom: number;
}

interface NavProps {
  customhandleOnClick: (event: MouseEvent) => void;
}

export default React.forwardRef(
  (props: NavProps, ref?: React.Ref<HTMLDivElement>) => {
    const lineRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({
      left: 0,
      width: 0,
      bottom: 36,
      top: 0
    });
    const getRect = (ele: Element | null): ClientRect | rectObject => {
      if (!ele) return { left: 0, width: 0, bottom: 36, top: 0 };
      const rect = ele.getBoundingClientRect();
      return rect;
    };
    useEffect(() => {
      const activeNode: Element | null = document.querySelector(`.active`);
      if (!activeNode) return;
      const rect = getRect(activeNode!.children[0]);
      document.documentElement.style.setProperty(
        '--nav-line-left',
        `${rect.left}px`
      );
      document.documentElement.style.setProperty(
        '--nav-line-width',
        `${rect.width}px`
      );
      document.documentElement.style.setProperty(
        '--nav-line-bottom',
        `${rect.bottom - 1}px`
      );
    });
    // const handleNavOnClick = (event: React.MouseEvent) => {
    //   const ele = event.currentTarget!;
    //   if (!ele.classList.contains('a')) return;
    //   const rect = getRect(ele.children[0]);
    //   setStyle(rect);
    //   document.documentElement.style.setProperty(
    //     '--nav-line-top',
    //     `${rect.left}px`
    //   );
    // };
    return (
      <nav className="Nav_nav" ref={ref}>
        <ul className="nav_ul">
          <li className="nav_ul_li_1">
            <Link
              exact
              className="a"
              activeClassName="active"
              onClick={event => {
                props.customhandleOnClick(event);
                // handleNavOnClick(event);
              }}
              to="/"
            >
              <span>HOME</span>
            </Link>
          </li>
          <li className="nav_ul_li_2">
            <Link
              className="a"
              activeClassName="active"
              to="/my_notes"
              onClick={event => {
                props.customhandleOnClick(event);
                // handleNavOnClick(event);
              }}
            >
              <span>NOTES</span>
            </Link>
          </li>
          <li className="nav_ul_li_3">
            <Link
              className="a"
              activeClassName="active"
              to="/css_effects"
              onClick={event => {
                props.customhandleOnClick(event);
                // handleNavOnClick(event);
              }}
            >
              <span>UI</span>
            </Link>
          </li>
          <li className="nav_ul_li_4">
            <Link
              className="a"
              activeClassName="active"
              to="/contact_info"
              onClick={event => {
                props.customhandleOnClick(event);
                // handleNavOnClick(event);
              }}
            >
              <span>CONTACT</span>
            </Link>
          </li>
          <div
            ref={lineRef}
            className="nav_line"
            // style={{ left: style.left, width: style.width }}
          />
        </ul>
      </nav>
    );
  }
);

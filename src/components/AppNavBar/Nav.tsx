import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { NavLink as Link } from 'react-router-dom';

// import styles from './index.module.css';
import './nav.scss';

interface RectObject {
  left: number;
  top: number;
  width: number;
  bottom: number;
}

interface NavProps {
  customhandleOnClick: (event: MouseEvent) => void;
}

export const getRect = (ele: Element | null): ClientRect | RectObject => {
  if (!ele) return { left: 0, width: 0, bottom: 36, top: 0 };
  const rect = ele.getBoundingClientRect();
  return rect;
};

export const setActiveNavLine = (ele: string): void => {
  const activeNode: Element | null = document.querySelector(ele);
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
};

export default React.forwardRef(
  (props: NavProps, ref?: React.Ref<HTMLDivElement>): JSX.Element => {
    const lineRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({
      left: 0,
      width: 0,
      bottom: 36,
      top: 0
    });

    useEffect((): void => {
      setActiveNavLine('.active');
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
              onClick={(event: React.MouseEvent): void => {
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
              data-testid="my_notes"
              className="a"
              activeClassName="active"
              to="/my_notes"
              onClick={(event: React.MouseEvent): void => {
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
              onClick={(event: React.MouseEvent): void => {
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
              onClick={(event: React.MouseEvent): void => {
                const node = document.querySelector('.Nav_nav') as HTMLElement;
                const navLine = document.querySelector(
                  '.nav_line'
                ) as HTMLElement;
                if (node && node.style) node!.style.display = 'none';
                if (navLine && navLine.style) navLine!.style.display = 'none';
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

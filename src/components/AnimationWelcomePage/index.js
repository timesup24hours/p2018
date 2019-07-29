import React, { useEffect } from 'react';
import './index.scss';

import Logo from './Logo';
import UserCard from '../UserCard';
import SVGLine from './SVGLine';
import { withRouter } from 'react-router';

const AnimationWelcomePage = withRouter(({ history }) => {
  useEffect(() => {
    const node = document.querySelector('.Nav_nav');
    const navLine = document.querySelector('.nav_line');

    const timer = setTimeout(() => {
      if (node && node.style) node.style.display = 'grid';
      if (node && node.classList)
        node.classList.add('AnimationWelcomePage-Nav_nav');
    }, 3000);
    return () => {
      if (node && node.classList)
        node.classList.remove('AnimationWelcomePage-Nav_nav');
      if (node && node.style) node.style.display = 'grid';
      if (navLine && navLine.style)
        navLine.style.display = 'var(--nav-line-display)';
      clearTimeout(timer);
    };
  });
  return (
    <div className="AnimationWelcomePage">
      <div className="waterfall"></div>
      <div className="name">
        <Logo />
        <h3 className="text">Huanlin Huang </h3>
      </div>
      <div className="center-text">
        <div className="center-text-container">
          <div className="text-container">
            <h1 className="h1">React</h1>
            <span className="line"></span>
          </div>
          <div className="text-container">
            <h2 className="h2">Javascript Developer .</h2>
          </div>
          <div className="h3-container">
            <h3 className="h3">Redux redux-thunk redux-saga .</h3>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-holder">
          <UserCard info="huanlinhuang@gmail.com" phone="415-361-9522" />
        </div>
      </div>

      <div className="svg-line">
        <SVGLine />
      </div>

      <div className="strong" onClick={() => history.push('/css_effects')}>
        <div className="strong-rel">
          <div className="text-conatiner">
            <div className="text">Always Learning</div>
            <div className="click">See more demo</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AnimationWelcomePage;

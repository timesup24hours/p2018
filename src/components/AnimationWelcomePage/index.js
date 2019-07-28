import React, { useEffect } from 'react';
import './index.scss';

import Logo from './Logo';
import UserCard from '../UserCard';

const AnimationWelcomePage = () => {
  useEffect(() => {
    const node = document.querySelector('.Nav_nav');
    const timer = setTimeout(() => {
      node.style.display = 'grid';
      node.classList.add('AnimationWelcomePage-Nav_nav');
    }, 3000);
    return () => {
      node.classList.remove('AnimationWelcomePage-Nav_nav');
      node.style.display = 'grid';
      clearTimeout(timer);
    };
  });
  return (
    <div className="AnimationWelcomePage">
      <div className="waterfall"></div>
      <div className="name">
        <Logo /> <h3 className="text">Huanlin Huang </h3>
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
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default AnimationWelcomePage;

import React from 'react';
import Profile from './Profile';
import './index.css';

export default () => {
  return (
    <div className="header_right_container">
      <div className="header_right_notification">
        <i className="far fa-bell" />
      </div>
      <div className="header_right_profile">
        <Profile />
      </div>
    </div>
  );
};

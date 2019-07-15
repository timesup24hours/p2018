import React from 'react';
import './styles.css';

export default () => {
  return (
    <menu className="InternshipProject_menu">
      <div className="menu_switch">
        <i className="fas fa-bars" />
      </div>
      <div className="menu_list">
        <div className="menu_link">
          <i className="fas fa-home" />
        </div>
        <div to="/simulation" className="menu_link link_active">
          <i className="fas fa-wallet" />
        </div>
        <div className="menu_link">
          <i className="far fa-square" />
        </div>
        <div className="menu_link">
          <i className="far fa-folder" />
        </div>
      </div>
    </menu>
  );
};

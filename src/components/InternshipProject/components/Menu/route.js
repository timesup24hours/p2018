import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default () => {
  return (
    <menu className="menu">
      <div className="menu_switch">
        <i className="fas fa-bars" />
      </div>
      <div className="menu_list">
        <NavLink
          exact
          to="/"
          className="menu_link"
          activeClassName="link_active"
        >
          <i className="fas fa-home" />
        </NavLink>
        <NavLink
          exact
          to="/dashboard_ui"
          className="menu_link"
          activeClassName="link_active"
        >
          <i className="fas fa-wallet" />
        </NavLink>
        <NavLink
          exact
          to="/my_notes"
          className="menu_link"
          activeClassName="link_active"
        >
          <i className="far fa-square" />
        </NavLink>
        <NavLink
          exact
          to="/contact_info"
          className="menu_link"
          activeClassName="link_active"
        >
          <i className="far fa-folder" />
        </NavLink>
      </div>
    </menu>
  );
};

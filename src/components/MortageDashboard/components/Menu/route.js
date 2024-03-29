import React from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

import './styles.scss';

export default () => {
  return (
    <menu className="InternshipProject_menu">
      <div className="menu_switch">
        <NavLink exact to="/" className="menu_link">
          <i className="fas fa-bars" />
        </NavLink>
      </div>
      <div className="menu_list">
        <NavLink
          exact
          to="/"
          className="menu_link"
          activeClassName="link_active"
        >
          <Tooltip title="Home" placement="left">
            <i className="fas fa-home" />
          </Tooltip>
        </NavLink>
        <NavLink
          exact
          to="/dashboard_ui"
          className="menu_link"
          activeClassName="link_active"
        >
          <Tooltip title="Current page UI only" placement="left">
            <i className="fas fa-wallet" />
          </Tooltip>
        </NavLink>
        <NavLink
          exact
          to="/css_effects"
          className="menu_link"
          activeClassName="link_active"
        >
          <Tooltip title="Back" placement="left">
            <i className="far fa-square" />
          </Tooltip>
        </NavLink>
        <NavLink
          exact
          to="/contact_info"
          className="menu_link"
          activeClassName="link_active"
        >
          <Tooltip title="Contact" placement="left">
            <i className="fas fa-phone" />
          </Tooltip>
        </NavLink>
      </div>
    </menu>
  );
};

import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default ({ styles, cssStyle, onClick }) => (
  <Link
    exact
    style={styles.a}
    activeClassName={cssStyle.active}
    to="#"
    onClick={onClick}
  >
    <span className={cssStyle.disabledSelect}>Forgot Password</span>
  </Link>
);

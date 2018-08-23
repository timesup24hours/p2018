import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default ({ styles, cssStyle }) => (
  <Link exact style={styles.a} activeClassName={cssStyle.active} to="#">
    <span className={cssStyle.disabledSelect}>Forgot Password</span>
  </Link>
);

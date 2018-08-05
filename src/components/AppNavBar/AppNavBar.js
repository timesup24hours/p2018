import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link,
  Redirect
} from 'react-router-dom';

import styles from './index.css';

import Home from '../HomePage';
import MyNotes from '../MyNotesPage';
import CssEffects from '../CssEffectsPage';
import ContactInfo from '../ContactInfoPage';

class AppNavBar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Router>
        <div>
          <nav className={styles.nav}>
            <ul className={styles.nav_ul}>
              <li className={styles.nav_ul_li_1}>
                <Link
                  exact
                  className={styles.a}
                  activeClassName={styles.active}
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className={styles.nav_ul_li_2}>
                <Link
                  className={styles.a}
                  activeClassName={styles.active}
                  to="/my_notes"
                >
                  NOTES
                </Link>
              </li>
              <li className={styles.nav_ul_li_3}>
                <Link
                  className={styles.a}
                  activeClassName={styles.active}
                  to="/css_effects"
                >
                  CSS
                </Link>
              </li>
              <li className={styles.nav_ul_li_4}>
                <Link
                  className={styles.a}
                  activeClassName={styles.active}
                  to="/contact_info"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.pageWrapper}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/my_notes" component={MyNotes} />
              <Route path="/css_effects" component={CssEffects} />
              <Route path="/contact_info" component={ContactInfo} />
              <Redirect from="/" to="/" />
              <Route path="*" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default AppNavBar;

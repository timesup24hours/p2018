import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
          <nav>
            <ul className={styles.nav_ul}>
              <li className={styles.nav_ul_li_1}>
                <Link to="/p2018/home">Home</Link>
              </li>
              <li className={styles.nav_ul_li_2}>
                <Link to="/p2018/my_notes">My notes</Link>
              </li>
              <li className={styles.nav_ul_li_3}>
                <Link to="/p2018/css_effects">css effect</Link>
              </li>
              <li className={styles.nav_ul_li_4}>
                <Link to="/p2018/contact_info">contact info</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Route exact path="/p2018/home" component={Home} />
            <Route path="/p2018/my_notes" component={MyNotes} />
            <Route path="/p2018/css_effects" component={CssEffects} />
            <Route path="/p2018/contact_info" component={ContactInfo} />
            <Route path="*" component={() => <div>404</div>} />
            <Redirect from="/" to="/p2018/home" />
          </div>
        </div>
      </Router>
    );
  }
}

export default AppNavBar;

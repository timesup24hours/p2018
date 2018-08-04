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
                <Link to="/home">Home</Link>
              </li>
              <li className={styles.nav_ul_li_2}>
                <Link to="/my_notes">My notes</Link>
              </li>
              <li className={styles.nav_ul_li_3}>
                <Link to="/css_effects">css effect</Link>
              </li>
              <li className={styles.nav_ul_li_4}>
                <Link to="/contact_info">contact info</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/my_notes" component={MyNotes} />
              <Route path="/css_effects" component={CssEffects} />
              <Route path="/contact_info" component={ContactInfo} />
              <Redirect from="/" to="/home" />
              {/* <Route path="*" component={() => <div>404</div>} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default AppNavBar;

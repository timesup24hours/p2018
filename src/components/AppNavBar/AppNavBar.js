import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link,
  Redirect
} from 'react-router-dom';

import Loadable from 'react-loadable';

import styles from './index.css';
import Loading from '../Loading';

const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <div className="center">
        <Loading />
      </div>
    );
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

const Home = Loadable({
  loader: () => import('../HomePage'),
  loading: MyLoadingComponent
});

const MyNotesPage = Loadable({
  loader: () => import('../MyNotesPage'),
  loading: MyLoadingComponent
});

const CssEffectsPage = Loadable({
  loader: () => import('../CssEffectsPage'),
  loading: MyLoadingComponent
});
const ContactInfoPage = Loadable({
  loader: () => import('../ContactInfoPage'),
  loading: MyLoadingComponent
});

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
              <Route path="/my_notes" component={MyNotesPage} />
              <Route path="/css_effects" component={CssEffectsPage} />
              <Route path="/contact_info" component={ContactInfoPage} />
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

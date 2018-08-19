import React, { Component } from 'react';
import {
  // BrowserRouter as Router, // for production
  HashRouter as Router, // for github free host hard reload
  Switch,
  Route,
  NavLink as Link,
  Redirect
} from 'react-router-dom';

import Loadable from 'react-loadable';

import styles from './index.css';

import { MaterialDesignBurgerMenu } from '../MaterialDesignBurgerMenu';
import MyLoadingComponent from './MyLoadingComponent';

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
    isOpen: false,
    isMobile: false
  };

  componentDidMount() {
    // console.log(window.innerHeight < 700);
    let testExp = new RegExp(
      'Android|webOS|iPhone|iPad|' +
        'BlackBerry|Windows Phone|' +
        'Opera Mini|IEMobile|Mobile',
      'i'
    );
    this.setState({ isMobile: testExp.test(navigator.userAgent) });
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  CustomhandleOnClick = e => {
    this.refNav.classList.toggle(styles.navActive);
    this.toggle();
  };

  render() {
    return (
      <Router>
        <div>
          <div
            className={styles.menuButton}
            ref={ref => (this.refMenuButton = ref)}
          >
            <MaterialDesignBurgerMenu
              CustomhandleOnClick={this.CustomhandleOnClick}
              open={this.state.isOpen}
            />
          </div>
          <nav className={styles.nav} ref={ref => (this.refNav = ref)}>
            <ul className={styles.nav_ul}>
              <li className={styles.nav_ul_li_1}>
                <Link
                  exact
                  className={styles.a}
                  activeClassName={styles.active}
                  onClick={this.CustomhandleOnClick}
                  to="/"
                >
                  <span>HOME</span>
                </Link>
              </li>
              <li className={styles.nav_ul_li_2}>
                <Link
                  className={styles.a}
                  activeClassName={styles.active}
                  to="/my_notes"
                  onClick={this.CustomhandleOnClick}
                >
                  <span>NOTES</span>
                </Link>
              </li>
              <li className={styles.nav_ul_li_3}>
                <Link
                  className={styles.a}
                  activeClassName={styles.active}
                  to="/css_effects"
                  onClick={this.CustomhandleOnClick}
                >
                  <span>CSS</span>
                </Link>
              </li>
              <li className={styles.nav_ul_li_4}>
                <Link
                  className={styles.a}
                  activeClassName={styles.active}
                  to="/contact_info"
                  onClick={this.CustomhandleOnClick}
                >
                  <span>CONTACT</span>
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

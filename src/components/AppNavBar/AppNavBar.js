import React, { Component } from 'react';
import {
  // BrowserRouter as Router // for production
  HashRouter as Router // for github free host hard reload
} from 'react-router-dom';
// import styled from 'styled-components';

import styles from './index.css';

import MobileMenuButton from './MobileMenuButton';
import Nav from './Nav';
import Routes from './Routes';

// const MenuButtonContainer = styled.div`
//   display: none;

//   &:hover {
//     cursor: pointer;
//   }

//   @media (max-width: 600px) {
//     display: block;
//     z-index: 10000;
//     height: 50px;
//     width: 50px;
//     position: fixed;
//     top: 6px;
//     left: 6px;
//     border-radius: 4px;
//   }
// `;

class AppNavBar extends Component {
  state = {
    isOpen: false
    // isMobile: false
  };
  refNav = React.createRef();
  MobileMenuButton = React.createRef();

  // componentDidMount() {
  //   // console.log(window.innerHeight < 700);
  //   let testExp = new RegExp(
  //     'Android|webOS|iPhone|iPad|' +
  //       'BlackBerry|Windows Phone|' +
  //       'Opera Mini|IEMobile|Mobile',
  //     'i'
  //   );
  //   this.setState({ isMobile: testExp.test(navigator.userAgent) });
  // }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  CustomhandleOnClick = e => {
    if (getComputedStyle(this.MobileMenuButton.current).display === 'block') {
      this.refNav.current.classList.toggle(styles.navActive);
      this.toggle();
    }
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Router>
        <div>
          <MobileMenuButton
            open={isOpen}
            CustomhandleOnClick={this.CustomhandleOnClick}
            ref={this.MobileMenuButton}
          />
          <Nav
            CustomhandleOnClick={this.CustomhandleOnClick}
            ref={this.refNav}
          />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default AppNavBar;

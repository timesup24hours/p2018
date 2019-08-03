import React, { Component } from 'react';
import {
  // BrowserRouter as Router // for production
  HashRouter as Router // for github free host hard reload
} from 'react-router-dom';
// import styled from 'styled-components';
// import { withRouter } from 'react-router';

// import styles from './index.module.css';
import './nav.scss';

import MobileMenuButton from './MobileMenuButton';
import Nav from './Nav';
import Routes from './Routes';
import { setActiveNavLine } from './Nav';

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
    isOpen: true
    // isMobile: false
  };
  refNav = React.createRef();
  MobileMenuButton = React.createRef();

  componentDidMount() {
    // console.log(window.innerHeight < 700);
    let testExp = new RegExp(
      'Android|webOS|iPhone|iPad|' +
        'BlackBerry|Windows Phone|' +
        'Opera Mini|IEMobile|Mobile',
      'i'
    );
    // this.setState({ isMobile: testExp.test(navigator.userAgent) });
    let isMobile = testExp.test(navigator.userAgent);
    if (isMobile) {
      this.setState({
        isOpen: false
      });
    }
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = event => {
    setActiveNavLine('.active');
    if (this.state.isOpen) return;
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (screenWidth > 660) {
      this.setState({
        isOpen: true
      });
    }
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  customhandleOnClick = e => {
    if (getComputedStyle(this.MobileMenuButton.current).display === 'block') {
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
            customhandleOnClick={this.customhandleOnClick}
            ref={this.MobileMenuButton}
          />
          {isOpen ? (
            <Nav
              customhandleOnClick={this.customhandleOnClick}
              ref={this.refNav}
            />
          ) : null}
          <Routes />
        </div>
      </Router>
    );
  }
}

export default AppNavBar;

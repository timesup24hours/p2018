import React, { Component } from 'react';
import Header from './components/Header/index';
import Menu from './components/Menu/route';
import './index.css';
import Main from './components/Main';

class App extends Component {
  componentDidMount() {
    const node = document.querySelector('nav');
    node.style.top = '-200px';
    document.documentElement.style.setProperty('--nav-line-display', 'none');
  }
  componentWillUnmount() {
    const node = document.querySelector('nav');
    node.style.top = '0px';
    document.documentElement.style.setProperty(
      '--nav-line-display',
      'inline-block'
    );
  }
  render() {
    return (
      <div className="InternshipProject_App">
        <Header />
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;

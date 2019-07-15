import React, { Component } from 'react';
import Header from './components/Header/index';
import Menu from './components/Menu/route';
import './index.css';
import Main from './components/Main';

class App extends Component {
  componentDidMount() {
    const node = document.querySelector('nav');
    node.style.top = '-200px';
  }
  componentWillUnmount() {
    const node = document.querySelector('nav');
    node.style.top = '0px';
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
